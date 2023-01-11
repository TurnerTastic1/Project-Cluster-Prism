import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import User from '../models/user.model';

// Signup validation

const inputValidation = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    firstname: Joi.string().min(1).required(),
    lastname: Joi.string().min(1).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  if (schema.validate(req.body).error != undefined) {
    return res.status(400).json({'error': 'Error - item: ' + schema.validate(req.body).error?.details[0].message});
  }
  return next();
};

const validateUsernameAndEmail = async (req: Request, res: Response, next: NextFunction) => {
  // Checking if email is already in DB
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).json({'error': 'Email already in use!'});

  // // Checking if username is already in DB
  // const usernameExist = await User.findOne({ name: req.body.name });
  // if (usernameExist) return res.status(400).send('Username already in use!');

  return next();
};



export default { inputValidation, validateUsernameAndEmail };