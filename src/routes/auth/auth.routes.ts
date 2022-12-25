import express from 'express';

const app = express.Router();

import middleware from '../../middleware/auth';

// User model to see requirments for inputs
app.post('/signup', [ middleware.inputValidation, middleware.validateUsernameAndEmail ]);

export = app;