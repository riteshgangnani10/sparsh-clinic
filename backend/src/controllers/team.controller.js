import TeamMember from '../models/TeamMember.model.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloudinaryHelper.js';
import { AppError } from '../middleware/errorHandler.js';

// @desc    Create team member
// @route   POST /api/team
// @access  Private
export const createTeamMember = async (req, res, next) => {
  try {
    const teamMember = await TeamMember.create(req.body);

    res.status(201).json({
      success: true,
      data: teamMember,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all team members
// @route   GET /api/team
// @access  Public
export const getTeamMembers = async (req, res, next) => {
  try {
    const { role, isActive, isFeatured } = req.query;
    
    const query = {};
    
    if (role) {
      query.role = role;
    }
    
    if (isActive !== undefined) {
      query.isActive = isActive === 'true';
    }
    
    if (isFeatured !== undefined) {
      query.isFeatured = isFeatured === 'true';
    }

    const teamMembers = await TeamMember.find(query).sort({ order: 1, createdAt: -1 });

    res.json({
      success: true,
      count: teamMembers.length,
      data: teamMembers,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single team member
// @route   GET /api/team/:id
// @access  Public
export const getTeamMember = async (req, res, next) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);

    if (!teamMember) {
      return next(new AppError('Team member not found', 404));
    }

    res.json({
      success: true,
      data: teamMember,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update team member
// @route   PUT /api/team/:id
// @access  Private
export const updateTeamMember = async (req, res, next) => {
  try {
    let teamMember = await TeamMember.findById(req.params.id);

    if (!teamMember) {
      return next(new AppError('Team member not found', 404));
    }

    // Handle image upload if present
    if (req.file) {
      if (teamMember.image?.publicId) {
        await deleteFromCloudinary(teamMember.image.publicId);
      }
      
      const imageData = await uploadToCloudinary(req.file, 'sparsh-clinic/team');
      req.body.image = imageData;
    }

    teamMember = await TeamMember.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      data: teamMember,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete team member
// @route   DELETE /api/team/:id
// @access  Private
export const deleteTeamMember = async (req, res, next) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);

    if (!teamMember) {
      return next(new AppError('Team member not found', 404));
    }

    if (teamMember.image?.publicId) {
      await deleteFromCloudinary(teamMember.image.publicId);
    }

    await teamMember.deleteOne();

    res.json({
      success: true,
      message: 'Team member deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

