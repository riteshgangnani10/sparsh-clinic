import express from 'express';
import { 
  createTestimonial, 
  getTestimonials, 
  getTestimonial, 
  updateTestimonial, 
  deleteTestimonial 
} from '../controllers/testimonial.controller.js';
import { protect, adminOnly } from '../middleware/auth.js';
import { uploadSingle } from '../middleware/upload.js';

const router = express.Router();

router.post('/', protect, adminOnly, createTestimonial);
router.get('/', getTestimonials);
router.get('/:id', getTestimonial);
router.put('/:id', protect, adminOnly, uploadSingle, updateTestimonial);
router.delete('/:id', protect, adminOnly, deleteTestimonial);

export default router;

