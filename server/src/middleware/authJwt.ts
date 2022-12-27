import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';

const createValidJwt = async (user_id: string) => {
  const payload = {
    "userId": user_id,
    "iat": Date.now(),
  };
  const token = jwt.sign( payload, config.jwt.secret, {expiresIn: '1s'});
  return token;
};

const checkValidJwt = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('auth-token');
  if (!token) return res.status(400).send('Error - No token provided');

  try {
    const verify = jwt.verify(token, config.jwt.secret);
    console.log(verify);
    
    return next();
  } catch (error) {
    return res.status(401).send('Error - Unauthorized to view content: ' + error);
  }
};

export default { createValidJwt, checkValidJwt };