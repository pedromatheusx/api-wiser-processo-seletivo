import {Router } from 'express';
import UserController from './controllers/UserController'

const routes = Router();

routes.post('/:encurtada', UserController.index)


export default routes;