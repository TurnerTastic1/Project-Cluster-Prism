import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

// Signup validation

const inputValidation = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
      name: Joi.string().min(6).required(),
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required()
    });

    if (schema.validate(req.body).error != undefined) {
        res.status(400).send('issue');
        return next();
    } 
    res.status(200).send('testing lol');
  };



export default { inputValidation };