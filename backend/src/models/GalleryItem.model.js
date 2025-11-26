import mongoose from 'mongoose';

const galleryItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    enum: ['image', 'video'],
    required: true,
  },
  category: {
    type: String,
    enum: ['facility', 'therapy-session', 'event', 'equipment', 'team', 'other'],
    default: 'other',
  },
  media: {
    url: {
      type: String,
      required: true,
    },
    publicId: String,
    thumbnailUrl: String,
  },
  videoEmbedUrl: {
    type: String, // YouTube or Vimeo embed URL
  },
  tags: [{
    type: String,
  }],
  order: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  displayOnHomepage: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const GalleryItem = mongoose.model('GalleryItem', galleryItemSchema);

export default GalleryItem;

