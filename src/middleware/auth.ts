import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

// Signup validation

const inputValidation = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
      name: Joi.string().min(6).required(),
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required()
    });

    if (!schema.validate(req.body)) {
        res.status(400).send('validation error');
        next;
    } 
    res.status(200).send('gucci');
  };


export default { inputValidation };