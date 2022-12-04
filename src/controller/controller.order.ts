import { Request, Response } from 'express';
import ServiceOrder from '../service/service.order';

export default class ControllerOrder {
  constructor(private serviceOrder = new ServiceOrder()) { }

  async findAll(_req: Request, res: Response): Promise<void> {
    const result = await this.serviceOrder.findAll();
    res.status(200).json(result);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { productsIds } = req.body;
    const { authorization: token } = req.headers;
    const { id } = await this.serviceOrder.orderCreate(productsIds, token as string);
    res.status(201).json({ userId: id, productsIds });
  }
}