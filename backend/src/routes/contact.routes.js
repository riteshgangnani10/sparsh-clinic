import express from 'express';
import { 
  submitContact, 
  getInquiries, 
  getInquiry, 
  updateInquiry, 
  deleteInquiry 
} from '../controllers/contact.controller.js';
import { protect, adminOnly } from '../middleware/auth.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many contact form submissions, please try again later.',
});

router.post('/', contactLimiter, submitContact);
router.get('/', protect, adminOnly, getInquiries);
router.get('/:id', protect, adminOnly, getInquiry);
router.put('/:id', protect, adminOnly, updateInquiry);
router.delete('/:id', protect, adminOnly, deleteInquiry);

export default router;

