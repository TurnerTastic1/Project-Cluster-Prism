import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwtMiddleware from '../../middleware/authJwt';


import User from '../../models/user.model';

const signupController = async (req: Request, res: Response) => {
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  
  try {
    // Create a new user
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashPassword || undefined
    });
    const savedUser = await user.save();
    if (savedUser) res.status(200).json({'message': 'User registered successfully!'}); // Need if statement for eslint rules
  } catch (err) {
    res.status(400).json({'error': err});
  }

};

const signinController = async (req: Request, res: Response) => {
  // Checking if user/email exists and is in DB
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({"error": "Invalid email"});

  // Checking if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).json({"error": "Invalid password"});

  // Create and assign token
  const token = await jwtMiddleware.createValidJwt(JSON.stringify(user._id));
  let spotifyConnected = true;
  if (user.spotify_auth === "Invalid") {
    spotifyConnected = false;
  }
  const data = {
    "message": "Logged in",
    "token": token,
    "spotifyConnected": spotifyConnected,
    "user": {
      "id": user.id,
      "firstname": user.firstname,
      "lastname": user.lastname,
      "email": user.email,
      "data": user.data
    }
  };
  //console.log(token.);
  res.status(200).json(data);
};

export default { signupController, signinController };