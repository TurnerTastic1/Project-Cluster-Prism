import express from 'express';

const app = express.Router();

import middleware from '../../middleware/auth';
import controller from '../../controllers/auth/auth';

import User from '../../models/user.model';

// User model to see requirments for inputs
app.post('/signup', [ middleware.inputValidation, middleware.validateUsernameAndEmail ], controller.signupController);

app.post('/signin', controller.signinController);

app.patch('/test', async function (req, res) {
  const update = {
    "firstname": req.body.firstname,
    "lastname": req.body.lastname,
    "spotify_auth": req.body.spotify_auth
  };
  const conditions = { "email": req.body.email};

  await User.findOneAndUpdate(conditions, update);
  res.status(200).json({
    "content": "success"
  });

//   User.findOneAndUpdate(conditions, update, function (err: Error) {
//     if (err) {
//       res.status(400).json({"error": err});
//     } else {
//       res.status(200).json({
//         "content": "success"
//       });
//     }
//   });
  // const saved = await User.save();
});

export = app;