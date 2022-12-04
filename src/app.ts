import express from 'express';
import routerProduct from './routes/route.product';
import routerUser from './routes/route.user';
import routerOrder from './routes/route.order';
import routerLogin from './routes/route.login';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);
app.use('/users', routerUser);
app.use('/orders', routerOrder);
app.use('/login', routerLogin);

export default app;
