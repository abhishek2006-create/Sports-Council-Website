import mongoose from 'mongoose';

const updateSchema = new mongoose.Schema({
  Title: { type: String, required: true, default: "" },
  Link: { type: String, required: true, default: "" }
}, { timestamps: true });

const Update = mongoose.model('Update', updateSchema);
export default Update;
