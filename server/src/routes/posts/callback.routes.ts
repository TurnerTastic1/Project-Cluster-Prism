import express from 'express';

const app = express.Router();

app.get('/callback', async (req, res) => {
  res.status(200).json({"content": "Callback reached"});
});

export = app;