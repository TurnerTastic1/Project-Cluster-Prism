import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 1,
    max: 255
  },
  lastname:{
    type: String,
    required: true,
    min: 1,
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
    dateCreated: {
      type: Date,
      default: Date.now
    }
  }
});

export default mongoose.model('User', userSchema);
