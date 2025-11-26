import mongoose from 'mongoose';
import slugify from 'slugify';

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  category: {
    type: String,
    enum: ['article', 'guide', 'faq', 'video', 'downloadable'],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    maxlength: 250,
  },
  image: {
    url: String,
    publicId: String,
  },
  videoUrl: {
    type: String,
  },
  downloadUrl: {
    type: String,
  },
  relatedConditions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Condition',
  }],
  tags: [{
    type: String,
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TeamMember',
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  views: {
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
resourceSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Resource = mongoose.model('Resource', resourceSchema);

export default Resource;

