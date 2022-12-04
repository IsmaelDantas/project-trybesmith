import { ResultSetHeader } from 'mysql2';
import { IUsers } from '../interfaces/User';
import mysql from './connection';

export default class ModelUser {
  private connection = mysql;

  public async create(username: string, classe: string, level: number, password: string):
  Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return insertId;
  }

  public async login(username: string, password: string): Promise<IUsers[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );

    return result as IUsers[];
  }
}