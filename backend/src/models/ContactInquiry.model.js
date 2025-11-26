import mongoose from 'mongoose';

const contactInquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
  },
  subject: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
  },
  interestedIn: {
    type: String, // Service they're interested in
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'archived'],
    default: 'new',
  },
  notes: {
    type: String,
  },
  replied: {
    type: Boolean,
    default: false,
  },
  repliedAt: {
    type: Date,
  },
}, {
  timestamps: true,
});

const ContactInquiry = mongoose.model('ContactInquiry', contactInquirySchema);

export default ContactInquiry;

