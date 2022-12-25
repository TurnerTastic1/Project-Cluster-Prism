import express from 'express';

const app = express.Router();

import middleware from '../../middleware/auth';
import controller from '../../controllers/auth/auth';

// User model to see requirments for inputs
app.post('/signup', [ middleware.inputValidation, middleware.validateUsernameAndEmail ], controller.signupController);

app.post('/signin', controller.signinController);

export = app;