import express from 'express';
import ControllerProduct from '../controller/controller.product';

const controllerProduct = new ControllerProduct();
const routerProduct = express.Router();

routerProduct.post('/', (req, res) => controllerProduct.create(req, res));
routerProduct.get('/', (req, res) => controllerProduct.findAll(req, res));

export default routerProduct;