import express from 'express';
import routerProduct from './routes/route.product';
import routerUser from './routes/route.user';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);
app.use('/users', routerUser);

export default app;
