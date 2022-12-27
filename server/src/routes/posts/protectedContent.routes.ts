import express from 'express';
import middleware from '../../middleware/authJwt';

const app = express.Router();

app.post('/protected', middleware.checkValidJwt, async (req, res) => {
  res.status(200).send('Protected info');
});

export = app;