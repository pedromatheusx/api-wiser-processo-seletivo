import {Request, Response} from 'express'
import {QueryResult} from 'pg'
import  {pool}  from '../dbconfig'




export default {
    // async index(req: Request, res: Response){
    //     return res.json(users);
    // }, 
    

    async index(req: Request, res: Response){
        const {encurtada} = req.params 
        const parsed = encurtada.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');

        parsed.length < 5 ? res.status(500).json('Não aceita minimo de 5 caracteres') :
        parsed.length > 11 ? res.status(500).json('Não aceita maximo de 10 caracteres') : ''
        
        try{
            const response: QueryResult = await pool.query(`call sp_put_redirect ('${parsed}')`);
            res.status(200).json(response.rows)
        }catch(e){
            return res.status(404).json('HTTP 404');
        }
      
    },


}