import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
//import jwt from 'jwt-simple';

import User from '../../models/user.model';

const signupController = async (req: Request, res: Response) => {
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });
  try {
    const savedUser = await user.save();
    if (savedUser) res.send('User registered successfully!'); // Need if statement for eslint rules
  } catch (err) {
    res.status(400).send(err);
  }

};

const signinController = async (req: Request, res: Response, next: NextFunction) => {
// Checking if user/email exists and is in DB
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email is not associated with any known accounts');

  // Checking if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');

  return res.status(200).send('Signed in');
};

export default { signupController, signinController };