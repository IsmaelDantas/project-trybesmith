import { Request, Response } from 'express';
import ServiceUser from '../service/service.user';

export default class ControllerUser {
  constructor(private controllerUser = new ServiceUser()) { }

  async create(req: Request, res: Response): Promise<void> {
    const { username, classe, level, password } = req.body;
    const token = await this.controllerUser.generateToken(username, classe, level, password);
    res.status(201).json({ token });
  }

  public async login(req: Request, res: Response) {
    const { username, password } = req.body;
    
    const { type, message } = await this.controllerUser.login(username, password);

    if (type === 200) return res.status(type).json({ token: message });

    return res.status(type).json({ message });
  }
}