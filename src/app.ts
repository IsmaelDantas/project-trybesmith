import express from 'express';
import routerProduct from './routes/route.product';
import routerUser from './routes/route.user';
import routerOrder from './routes/route.order';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);
app.use('/users', routerUser);
app.use('/orders', routerOrder);

export default app;
