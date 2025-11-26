import express from 'express';
import { 
  uploadMedia, 
  uploadMultipleMedia,
  getGalleryItems, 
  getGalleryItem, 
  updateGalleryItem, 
  deleteGalleryItem 
} from '../controllers/gallery.controller.js';
import { protect, adminOnly } from '../middleware/auth.js';
import { uploadSingle, uploadMultiple } from '../middleware/upload.js';

const router = express.Router();

router.post('/upload', protect, adminOnly, uploadSingle, uploadMedia);
router.post('/upload-multiple', protect, adminOnly, uploadMultiple, uploadMultipleMedia);
router.get('/', getGalleryItems);
router.get('/:id', getGalleryItem);
router.put('/:id', protect, adminOnly, updateGalleryItem);
router.delete('/:id', protect, adminOnly, deleteGalleryItem);

export default router;

