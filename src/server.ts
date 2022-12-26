
// Importing module
import express from 'express';
import config from './config/config.js';
import 'dotenv/config';
import mongoose from 'mongoose';

// Importing routes
import authRoutes from './routes/auth/auth.routes';
import protectedRoutes from './routes/posts/protectedContent.routes';
import spotifyRoutes from './routes/posts/spotifyApi.routes';
import callbackRoutes from './routes/posts/callback.routes';

const app = express();

mongoose.set('strictQuery', false);

const PORT = config.server.port;
const SERVERNAME = config.server.hostname;

// Connect to db
mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(error => {
    console.log('Error when connecting to the Mongo database:', error);
  });
  
// Handling GET / Request
app.get('/', (req, res) => {
  res.send('Welcome to octo journey!');
});

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', protectedRoutes);
app.use('/api/spotify', spotifyRoutes);
app.use('/', callbackRoutes);

// Server setup
app.listen(PORT,() => {
  console.log('The application is listening on '
          + SERVERNAME + ':' + PORT);
});

