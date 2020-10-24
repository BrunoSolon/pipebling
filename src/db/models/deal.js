import mongoose from 'mongoose';

const dealSchema = new mongoose.Schema({

}, {
  timestamp: true,
});

export default mongoose.model('Deal', dealSchema);
