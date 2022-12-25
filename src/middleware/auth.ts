import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import User from '../models/user.model';

// Signup validation

const inputValidation = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  if (schema.validate(req.body).error != undefined) {
    res.status(400).send('Inputted values do not match necessary requirements');
    return next();
  } 
  res.status(200).send('why?');
};

const validateUsernameAndEmail = async (req: Request, res: Response, next: NextFunction) => {
  // Checking if email is already in DB
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already in use!');

  // Checking if username is already in DB
  const usernameExist = await User.findOne({ name: req.body.email });
  if (usernameExist) return res.status(400).send('Username already in use!');
};



export default { inputValidation, validateUsernameAndEmail };