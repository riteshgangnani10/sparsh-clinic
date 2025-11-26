import express from 'express';
import { 
  createTeamMember, 
  getTeamMembers, 
  getTeamMember, 
  updateTeamMember, 
  deleteTeamMember 
} from '../controllers/team.controller.js';
import { protect, adminOnly } from '../middleware/auth.js';
import { uploadSingle } from '../middleware/upload.js';

const router = express.Router();

router.post('/', protect, adminOnly, createTeamMember);
router.get('/', getTeamMembers);
router.get('/:id', getTeamMember);
router.put('/:id', protect, adminOnly, uploadSingle, updateTeamMember);
router.delete('/:id', protect, adminOnly, deleteTeamMember);

export default router;

