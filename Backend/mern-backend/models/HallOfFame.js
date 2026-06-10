import mongoose from 'mongoose';

const hallOfFameSchema = new mongoose.Schema({
  Img: { type: String, required: true }
}, { timestamps: true });

const HallOfFame = mongoose.model('HallOfFame', hallOfFameSchema);
export default HallOfFame;
