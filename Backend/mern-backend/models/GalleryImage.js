import mongoose from 'mongoose';

const galleryImageSchema = new mongoose.Schema({
  Img: { type: String, required: true }
}, { timestamps: true });

const GalleryImage = mongoose.model('GalleryImage', galleryImageSchema);
export default GalleryImage;
