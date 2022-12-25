import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
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

export default { signupController };