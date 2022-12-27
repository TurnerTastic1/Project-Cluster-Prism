import express from 'express';

const app = express.Router();

app.get('/openinfo', async (req, res) => {
  res.status(200).send('Default page');
});

export = app;