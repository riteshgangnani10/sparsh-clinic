import Condition from '../models/Condition.model.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloudinaryHelper.js';
import { AppError } from '../middleware/errorHandler.js';

// @desc    Create condition
// @route   POST /api/conditions
// @access  Private
export const createCondition = async (req, res, next) => {
  try {
    const condition = await Condition.create(req.body);

    res.status(201).json({
      success: true,
      data: condition,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all conditions
// @route   GET /api/conditions
// @access  Public
export const getConditions = async (req, res, next) => {
  try {
    const { isActive } = req.query;
    
    const query = {};
    if (isActive !== undefined) {
      query.isActive = isActive === 'true';
    }

    const conditions = await Condition.find(query)
      .populate('servicesOffered', 'title')
      .populate('relatedCaseStudies', 'title slug')
      .sort({ order: 1, createdAt: -1 });

    res.json({
      success: true,
      count: conditions.length,
      data: conditions,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single condition
// @route   GET /api/conditions/:slug
// @access  Public
export const getCondition = async (req, res, next) => {
  try {
    const condition = await Condition.findOne({ slug: req.params.slug })
      .populate('servicesOffered')
      .populate('relatedCaseStudies');

    if (!condition) {
      return next(new AppError('Condition not found', 404));
    }

    res.json({
      success: true,
      data: condition,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update condition
// @route   PUT /api/conditions/:id
// @access  Private
export const updateCondition = async (req, res, next) => {
  try {
    let condition = await Condition.findById(req.params.id);

    if (!condition) {
      return next(new AppError('Condition not found', 404));
    }

    // Handle image upload if present
    if (req.file) {
      if (condition.image?.publicId) {
        await deleteFromCloudinary(condition.image.publicId);
      }
      
      const imageData = await uploadToCloudinary(req.file, 'sparsh-clinic/conditions');
      req.body.image = imageData;
    }

    condition = await Condition.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      data: condition,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete condition
// @route   DELETE /api/conditions/:id
// @access  Private
export const deleteCondition = async (req, res, next) => {
  try {
    const condition = await Condition.findById(req.params.id);

    if (!condition) {
      return next(new AppError('Condition not found', 404));
    }

    if (condition.image?.publicId) {
      await deleteFromCloudinary(condition.image.publicId);
    }

    await condition.deleteOne();

    res.json({
      success: true,
      message: 'Condition deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

