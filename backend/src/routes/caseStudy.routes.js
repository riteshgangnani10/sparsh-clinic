import express from 'express';
import { 
  createCaseStudy, 
  getCaseStudies, 
  getCaseStudy, 
  updateCaseStudy, 
  deleteCaseStudy,
  uploadCaseStudyImages 
} from '../controllers/caseStudy.controller.js';
import { protect, adminOnly } from '../middleware/auth.js';
import { uploadMultiple } from '../middleware/upload.js';

const router = express.Router();

router.post('/', protect, adminOnly, createCaseStudy);
router.get('/', getCaseStudies);
router.get('/:slug', getCaseStudy);
router.put('/:id', protect, adminOnly, updateCaseStudy);
router.delete('/:id', protect, adminOnly, deleteCaseStudy);
router.post('/:id/images', protect, adminOnly, uploadMultiple, uploadCaseStudyImages);

export default router;

