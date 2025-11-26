import express from 'express';
import { getSettings, updateSettings } from '../controllers/settings.controller.js';
import { protect, adminOnly } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/', getSettings);
router.put('/', protect, adminOnly, upload.fields([
  { name: 'heroImage', maxCount: 1 },
  { name: 'ogImage', maxCount: 1 }
]), updateSettings);

export default router;

