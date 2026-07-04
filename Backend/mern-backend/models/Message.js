import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  Name: { type: String, required: true, default: "" },
  Email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@iiti\.ac\.in$/i.test(v);
      },
      message: 'Email must be a valid @iiti.ac.in address'
    }
  },
  Phone_Number: { type: String, required: true },
  Message: { type: String, required: true, default: "" },
  Sport: { type: String, default: "General Query" },
  ShortSummary: { type: String, default: "" }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);
export default Message;