import express from 'express';

const app = express.Router();

import middleware from '../../middleware/auth';

app.post('/createuser', middleware.inputValidation);

export = app;