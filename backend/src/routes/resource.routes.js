import express from 'express';
import { 
  createResource, 
  getResources, 
  getResource, 
  updateResource, 
  deleteResource 
} from '../controllers/resource.controller.js';
import { protect, adminOnly } from '../middleware/auth.js';
import { uploadSingle } from '../middleware/upload.js';

const router = express.Router();

router.post('/', protect, adminOnly, createResource);
router.get('/', getResources);
router.get('/:slug', getResource);
router.put('/:id', protect, adminOnly, uploadSingle, updateResource);
router.delete('/:id', protect, adminOnly, deleteResource);

export default router;

