import express from 'express';
import ControllerUser from '../controller/controller.user';

const controllerUser = new ControllerUser();
const routerUser = express.Router();

routerUser.post('/', (req, res) => controllerUser.create(req, res));

export default routerUser;