import mongoose from 'mongoose';

const facilitySchema = new mongoose.Schema({
  Title: { type: String, required: true, default: "" },
  Description: { type: String, default: "" },
  Img: { type: String, default: "" },
  rules: { type: [String], default: [] }
}, { timestamps: true });

const Facility = mongoose.model('Facility', facilitySchema);
export default Facility;
