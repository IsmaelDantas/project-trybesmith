import express from 'express';
import ControllerOrder from '../controller/controller.order';
import middlewareAuth from '../middlewares/middleware.auth';
import { validateOrder } from '../middlewares/middleware.product.validation';

const controllerOrder = new ControllerOrder();

const routerOrder = express.Router();

routerOrder.get('/', (req, res) => controllerOrder.findAll(req, res));
routerOrder.post(
  '/', 
  middlewareAuth,
  validateOrder,
  (req, res) => controllerOrder.create(req, res),
);

export default routerOrder;