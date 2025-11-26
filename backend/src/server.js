import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import connectDB from './config/database.js';
import { errorHandler } from './middleware/errorHandler.js';

// Import routes
import authRoutes from './routes/auth.routes.js';
import serviceRoutes from './routes/service.routes.js';
import testimonialRoutes from './routes/testimonial.routes.js';
import caseStudyRoutes from './routes/caseStudy.routes.js';
import teamRoutes from './routes/team.routes.js';
import galleryRoutes from './routes/gallery.routes.js';
import settingsRoutes from './routes/settings.routes.js';
import contactRoutes from './routes/contact.routes.js';
import conditionRoutes from './routes/condition.routes.js';
import resourceRoutes from './routes/resource.routes.js';
import setupRoutes from './routes/setup.routes.js';

// Get directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from backend/.env
dotenv.config({ path: join(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/case-studies', caseStudyRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/conditions', conditionRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/setup', setupRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: '🏥 Sparsh Pediatric Rehabilitation Clinic API',
    status: 'running',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      setup: '/api/setup/create-first-admin',
      auth: '/api/auth',
      services: '/api/services',
      testimonials: '/api/testimonials',
      gallery: '/api/gallery'
    }
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Sparsh Clinic API is running' });
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;

