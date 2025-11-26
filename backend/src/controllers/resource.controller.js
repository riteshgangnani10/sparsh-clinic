import Resource from '../models/Resource.model.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloudinaryHelper.js';
import { AppError } from '../middleware/errorHandler.js';

// @desc    Create resource
// @route   POST /api/resources
// @access  Private
export const createResource = async (req, res, next) => {
  try {
    const resource = await Resource.create(req.body);

    res.status(201).json({
      success: true,
      data: resource,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all resources
// @route   GET /api/resources
// @access  Public
export const getResources = async (req, res, next) => {
  try {
    const { category, published, featured, search } = req.query;
    
    const query = {};
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (published !== undefined) {
      query.isPublished = published === 'true';
    }
    
    if (featured !== undefined) {
      query.isFeatured = featured === 'true';
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } },
      ];
    }

    const resources = await Resource.find(query)
      .populate('author', 'name title')
      .populate('relatedConditions', 'name slug')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: resources.length,
      data: resources,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single resource
// @route   GET /api/resources/:slug
// @access  Public
export const getResource = async (req, res, next) => {
  try {
    const resource = await Resource.findOne({ slug: req.params.slug })
      .populate('author')
      .populate('relatedConditions');

    if (!resource) {
      return next(new AppError('Resource not found', 404));
    }

    // Increment views
    resource.views += 1;
    await resource.save();

    res.json({
      success: true,
      data: resource,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update resource
// @route   PUT /api/resources/:id
// @access  Private
export const updateResource = async (req, res, next) => {
  try {
    let resource = await Resource.findById(req.params.id);

    if (!resource) {
      return next(new AppError('Resource not found', 404));
    }

    // Handle image upload if present
    if (req.file) {
      if (resource.image?.publicId) {
        await deleteFromCloudinary(resource.image.publicId);
      }
      
      const imageData = await uploadToCloudinary(req.file, 'sparsh-clinic/resources');
      req.body.image = imageData;
    }

    resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      data: resource,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete resource
// @route   DELETE /api/resources/:id
// @access  Private
export const deleteResource = async (req, res, next) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return next(new AppError('Resource not found', 404));
    }

    if (resource.image?.publicId) {
      await deleteFromCloudinary(resource.image.publicId);
    }

    await resource.deleteOne();

    res.json({
      success: true,
      message: 'Resource deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

