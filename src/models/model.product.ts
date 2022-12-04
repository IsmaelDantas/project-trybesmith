import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProducts } from '../interfaces/Product';
import mysql from './connection';

export default class ModelProduct {
  private connection = mysql;

  public async create(name: string, amount: string): Promise<IProducts> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products(name, amount) VALUES(?, ?)',
      [name, amount],
    );
    const productNew = {
      id: insertId,
      name,
      amount,
    };
    return productNew;
  }

  public async findAll(): Promise<IProducts[]> {
    const [result] = await this.connection.execute<IProducts[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return result;
  }

  public async insert(order: number, product: number): Promise<boolean> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [order, product],
    );
    if (result.affectedRows > 0) {
      return true;
    }

    return false;
  }
}