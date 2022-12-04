import express from 'express';
import ControllerOrder from '../controller/controller.order';

const controllerOrder = new ControllerOrder();

const routerOrder = express.Router();

routerOrder.get('/', (req, res) => controllerOrder.findAll(req, res));

export default routerOrder;