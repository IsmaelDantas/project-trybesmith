import express from 'express';
import ControllerProduct from '../controller/controller.product';
import { validateAmount, validateName } from '../middlewares/middleware.product.validation';

const controllerProduct = new ControllerProduct();
const routerProduct = express.Router();

routerProduct.post(
  '/',
  validateName,
  validateAmount,
  (req, res) => controllerProduct.create(req, res),
);
routerProduct.get('/', (req, res) => controllerProduct.findAll(req, res));

export default routerProduct;