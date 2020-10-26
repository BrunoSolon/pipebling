import mongoose from 'mongoose';

const dealSchema = new mongoose.Schema({
  date: String,
  deals: [{
    pipedriveId: Number,
    pipedriveUserId: Number,
    pipedrivePersonId: Number,
    pipedriveOrgId: Number,
    client: String,
    organization: String,
    status: String,
    wonTime: Date,
    value: Number,
  }],
  total_value: {
    type: Number,
    default: 0,
  },
}, {
  timestamp: true,
});

export default mongoose.model('Deal', dealSchema);
