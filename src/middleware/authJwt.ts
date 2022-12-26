import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';

const createValidJwt = async (user_id: string) => {
  const token = jwt.sign( user_id, config.jwt.token );
  return token;
};

const checkValidJwt = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('auth-token');
  if (!token) return res.status(400).send('Error - No token provided');

  try {
    jwt.verify(token, config.jwt.token);
    console.log('Valid jwt');
    return next();
  } catch (error) {
    return res.status(401).send('Error - Unauthorized to view content: ' + error);
  }
};

export default { createValidJwt, checkValidJwt };