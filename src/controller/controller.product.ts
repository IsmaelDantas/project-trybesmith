import { Request, Response } from 'express';
import ServiceProduct from '../service/service.product';

export default class ControllerProduct {
  constructor(private serviceProduct = new ServiceProduct()) { }

  async create(req: Request, res: Response): Promise<void> {
    const { name, amount } = req.body;
    console.log(name, amount);
    const result = await this.serviceProduct.create(name, amount);
    res.status(201).json(result);
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    const result = await this.serviceProduct.findAll();
    res.status(200).json(result);
  }
}