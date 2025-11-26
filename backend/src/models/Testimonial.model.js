import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: [true, 'Please provide patient name'],
    trim: true,
  },
  parentName: {
    type: String,
    trim: true,
  },
  condition: {
    type: String,
    required: [true, 'Please specify the condition'],
  },
  serviceReceived: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  },
  testimonial: {
    type: String,
    required: [true, 'Please provide testimonial text'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
  },
  image: {
    url: String,
    publicId: String,
  },
  videoUrl: {
    type: String, // YouTube or Vimeo embed URL
  },
  featured: {
    type: Boolean,
    default: false,
  },
  isApproved: {
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

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;

