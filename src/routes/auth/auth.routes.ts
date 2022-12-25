import express from 'express';

const app = express.Router();

import middleware from '../../middleware/auth';

app.post('/signup', middleware.inputValidation);

export = app;