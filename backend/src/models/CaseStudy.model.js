import mongoose from 'mongoose';
import slugify from 'slugify';

const caseStudySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  patientAge: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: [true, 'Please specify the condition'],
  },
  servicesProvided: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  }],
  summary: {
    type: String,
    required: [true, 'Please provide a summary'],
    maxlength: 300,
  },
  initialAssessment: {
    type: String,
    required: true,
  },
  treatmentApproach: {
    type: String,
    required: true,
  },
  timeline: {
    type: String, // e.g., "6 months", "1 year"
  },
  outcomes: {
    type: String,
    required: true,
  },
  beforeImages: [{
    url: String,
    publicId: String,
    caption: String,
  }],
  afterImages: [{
    url: String,
    publicId: String,
    caption: String,
  }],
  progressImages: [{
    url: String,
    publicId: String,
    caption: String,
    date: Date,
  }],
  videoUrl: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Generate slug before saving
caseStudySchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const CaseStudy = mongoose.model('CaseStudy', caseStudySchema);

export default CaseStudy;

