import mongoose from 'mongoose';
import slugify from 'slugify';

const conditionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide condition name'],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  shortDescription: {
    type: String,
    required: true,
    maxlength: 200,
  },
  description: {
    type: String,
    required: true,
  },
  symptoms: [{
    type: String,
  }],
  treatmentApproach: {
    type: String,
    required: true,
  },
  servicesOffered: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  }],
  image: {
    url: String,
    publicId: String,
  },
  relatedCaseStudies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CaseStudy',
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
conditionSchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

const Condition = mongoose.model('Condition', conditionSchema);

export default Condition;

