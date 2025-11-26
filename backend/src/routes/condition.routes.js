import express from 'express';
import { 
  createCondition, 
  getConditions, 
  getCondition, 
  updateCondition, 
  deleteCondition 
} from '../controllers/condition.controller.js';
import { protect, adminOnly } from '../middleware/auth.js';
import { uploadSingle } from '../middleware/upload.js';

const router = express.Router();

router.post('/', protect, adminOnly, createCondition);
router.get('/', getConditions);
router.get('/:slug', getCondition);
router.put('/:id', protect, adminOnly, uploadSingle, updateCondition);
router.delete('/:id', protect, adminOnly, deleteCondition);

export default router;

