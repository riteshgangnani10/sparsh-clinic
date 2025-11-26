import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide team member name'],
    trim: true,
  },
  title: {
    type: String,
    required: [true, 'Please provide professional title'],
  },
  role: {
    type: String,
    enum: ['doctor', 'therapist', 'staff', 'consultant'],
    required: true,
  },
  qualifications: [{
    type: String,
  }],
  certifications: [{
    name: String,
    issuedBy: String,
    year: String,
  }],
  specializations: [{
    type: String,
  }],
  experience: {
    type: String, // e.g., "15+ years"
  },
  bio: {
    type: String,
    required: true,
  },
  image: {
    url: String,
    publicId: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  order: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

export default TeamMember;

