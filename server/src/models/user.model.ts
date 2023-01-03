import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  spotify_auth: {
    type: String,
    max: 1024,
    default: 'Invalid'
  },
  data: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', userSchema);
