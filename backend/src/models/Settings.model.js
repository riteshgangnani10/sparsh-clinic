import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  // Clinic Information
  clinicName: {
    type: String,
    default: 'Sparsh Pediatric Rehabilitation Clinic',
  },
  tagline: {
    type: String,
    default: 'Nurturing Potential, Celebrating Progress',
  },
  about: {
    type: String,
  },
  
  // Contact Information
  contact: {
    email: {
      type: String,
      default: 'sparshprc@gmail.com',
    },
    phone: [{
      label: String,
      number: String,
    }],
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  
  // Operating Hours
  operatingHours: [{
    day: String,
    open: String,
    close: String,
    closed: Boolean,
  }],
  
  // Social Media
  socialMedia: {
    facebook: String,
    instagram: String,
    twitter: String,
    youtube: String,
    linkedin: String,
  },
  
  // Homepage Content
  homepage: {
    heroTitle: String,
    heroSubtitle: String,
    heroImage: {
      url: String,
      publicId: String,
    },
    heroVideo: String,
    statistics: [{
      label: String,
      value: String,
      icon: String,
    }],
  },
  
  // SEO Settings
  seo: {
    defaultTitle: String,
    defaultDescription: String,
    defaultKeywords: [String],
    ogImage: {
      url: String,
      publicId: String,
    },
  },
  
  // Email Settings
  email: {
    notificationEmail: String,
    fromName: String,
    fromEmail: String,
  },
  
  // Appointment Settings
  appointments: {
    enabled: Boolean,
    message: String,
    whatsappNumber: String,
  },
  
  // Footer Content
  footer: {
    copyrightText: String,
    additionalLinks: [{
      label: String,
      url: String,
    }],
  },
}, {
  timestamps: true,
});

const Settings = mongoose.model('Settings', settingsSchema);

export default Settings;

