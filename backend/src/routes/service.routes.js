import express from 'express';
import { 
  createService, 
  getServices, 
  getService, 
  updateService, 
  deleteService,
  uploadServiceImage 
} from '../controllers/service.controller.js';
import { protect, adminOnly } from '../middleware/auth.js';
import { uploadSingle } from '../middleware/upload.js';

const router = express.Router();

router.post('/', protect, adminOnly, createService);
router.get('/', getServices);
router.get('/:slug', getService);
router.put('/:id', protect, adminOnly, uploadSingle, updateService);
router.delete('/:id', protect, adminOnly, deleteService);
router.post('/:id/image', protect, adminOnly, uploadSingle, uploadServiceImage);

export default router;

