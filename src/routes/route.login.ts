import express from 'express';
import ControllerUser from '../controller/controller.user';
import { validatePassword, validateUsername } from '../middlewares/middleware.login';

const controllerUser = new ControllerUser();
const routerLogin = express.Router();

routerLogin.post(
  '/',
  validatePassword,
  validateUsername,
  controllerUser.login.bind(controllerUser),
);

export default routerLogin;