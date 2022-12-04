import jsonwebtoken from 'jsonwebtoken';
import ModelUser from '../models/model.user';

export default class ServiceUser {
  constructor(private modelUser = new ModelUser()) { }

  public jwt = jsonwebtoken;

  public async generateToken(username: string, classe: string, level: number, password: string) {
    const userId = await this.modelUser.create(username, classe, level, password);
    const payload = { userId, username, classe, level }; 
    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }
}