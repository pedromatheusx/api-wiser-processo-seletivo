import  express from 'express';
import routes from './routes';

const app = express();
const PORT : string|number = process.env.PORT || 8081;
app.use(routes);

app.listen(PORT)