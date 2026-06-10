import mongoose from 'mongoose';

const clubSchema = new mongoose.Schema({
  Club_Name: { type: String, required: true },
  Club_logo: { type: String, default: "" },
  rules: { type: [String], default: [] }
}, { timestamps: true });

const Club = mongoose.model('Club', clubSchema);
export default Club;
