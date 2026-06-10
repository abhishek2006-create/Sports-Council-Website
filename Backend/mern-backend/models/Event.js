import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  Title: { type: String, required: true, default: "" },
  Description: { type: String, default: "" },
  Img: { type: String, default: "" }
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
export default Event;
