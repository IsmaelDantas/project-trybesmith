import { IOrder } from '../interfaces/Order';
import ModelOrder from '../models/model.order';

export default class ServiceOrder {
  constructor(private modelOrder = new ModelOrder()) { }

  async findAll(): Promise<IOrder[]> {
    const result = await this.modelOrder.findAll();
    return result;
  }
}