import jwt from 'jsonwebtoken';
import { IOrder } from '../interfaces/Order';
import ModelOrder from '../models/model.order';
import ModelProduct from '../models/model.product';

export default class ServiceOrder {
  constructor(
    private modelOrder = new ModelOrder(),
    private modelProduct = new ModelProduct(),
  ) { }

  async findAll(): Promise<IOrder[]> {
    const result = await this.modelOrder.findAll();
    return result;
  }

  async orderCreate(products: number[], token: string): Promise<IOrder> {
    const decoded = jwt.verify(token as string, process.env.JWT_SECRET as string);
    const { id } = decoded as { id: number };
    const orderInsert = await this.modelOrder.orderCreate(id);
    const productInsert = products.map(async (product) => {
      await this.modelProduct.insert(orderInsert, product);
    });

    await Promise.all(productInsert);
    
    return { id };
  }
}