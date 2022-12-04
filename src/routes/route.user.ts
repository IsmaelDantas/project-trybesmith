import express from 'express';
import ControllerUser from '../controller/controller.user';
import { validateClass, validateLevel, validatePassword, validateUsername } 
  from '../middlewares/middleware.login';

const controllerUser = new ControllerUser();
const routerUser = express.Router();

routerUser.post(
  '/',
  validateClass,
  validateLevel,
  validatePassword,
  validateUsername,
  (req, res) => controllerUser.create(req, res),
);

export default routerUser;