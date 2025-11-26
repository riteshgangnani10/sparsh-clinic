import mongoose from 'mongoose';
import slugify from 'slugify';

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a service title'],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  shortDescription: {
    type: String,
    required: [true, 'Please provide a short description'],
    maxlength: 200,
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  icon: {
    type: String, // URL to icon image
  },
  image: {
    url: String,
    publicId: String,
  },
  benefits: [{
    type: String,
  }],
  process: [{
    step: Number,
    title: String,
    description: String,
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
  order: {
    type: Number,
    default: 0,
  },
  seo: {
    title: String,
    description: String,
    keywords: [String],
  },
}, {
  timestamps: true,
});

// Generate slug before saving
serviceSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;

