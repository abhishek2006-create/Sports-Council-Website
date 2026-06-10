import mongoose from 'mongoose';

const statSchema = new mongoose.Schema({
  Stat_name: { type: String, required: true, default: "" },
  Stat_number: { type: String, required: true, default: "" }
}, { timestamps: true });

const Stat = mongoose.model('Stat', statSchema);
export default Stat;
