import { NextFunction, Request, Response } from 'express';
import ExceptionHttp from '../util/https';

const middlewareHttp = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { status, message } = err as ExceptionHttp;
  if (status) {
    return res.status(status || 500).json({ message });
  }
  next();
};

export default middlewareHttp;