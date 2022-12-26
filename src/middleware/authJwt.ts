import jwt from 'jsonwebtoken';
import config from '../config/config';

const createValidJwt = async (user_id: string) => {
  const token = jwt.sign( user_id, config.jwt.token );
  return token;
};

export default { createValidJwt };