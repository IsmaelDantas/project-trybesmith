import { Request, Response } from 'express';
import ServiceOrder from '../service/service.order';

export default class ControllerOrder {
  constructor(private serviceOrder = new ServiceOrder()) { }

  async findAll(_req: Request, res: Response): Promise<void> {
    const result = await this.serviceOrder.findAll();
    res.status(200).json(result);
  }
}