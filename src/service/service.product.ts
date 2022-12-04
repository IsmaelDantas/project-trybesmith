import { IProducts } from '../interfaces/Product';
import ModelProduct from '../models/model.product';

export default class ServiceProduct {
  constructor(private modelProduct = new ModelProduct()) { }

  async create(name: string, amount: string): Promise<IProducts> {
    return this.modelProduct.create(name, amount);
  }

  async findAll(): Promise<IProducts[]> {
    return this.modelProduct.findAll();
  }
}