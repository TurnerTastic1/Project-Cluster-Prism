import express from 'express';

const app = express.Router();

app.get('/api', async (req, res) => {
  res.status(200).json({"content": "Default page"});
});

export = app;