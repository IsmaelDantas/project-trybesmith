import { Request, Response } from 'express';
import ServiceUser from '../service/service.user';

export default class ControllerUser {
  constructor(private controllerProduct = new ServiceUser()) { }

  async create(req: Request, res: Response): Promise<void> {
    const { username, classe, level, password } = req.body;
    const token = await this.controllerProduct.generateToken(username, classe, level, password);
    res.status(201).json({ token });
  }
}