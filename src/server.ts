
// Importing module
import express from 'express';
import dotenv from 'dotenv';
  
const app = express();

dotenv.config();

const PORT = process.env.PORT;
  
// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
});
  
// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
});