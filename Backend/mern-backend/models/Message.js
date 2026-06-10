import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  Name: { type: String, required: true, default: "" },
  Email: { type: String, required: true },
  Phone_Number: { type: String, required: true },
  Message: { type: String, required: true, default: "" }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);
export default Message;
