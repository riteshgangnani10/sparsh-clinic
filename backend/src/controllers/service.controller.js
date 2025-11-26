import Service from '../models/Service.model.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloudinaryHelper.js';
import { AppError } from '../middleware/errorHandler.js';

// @desc    Create service
// @route   POST /api/services
// @access  Private
export const createService = async (req, res, next) => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json({
      success: true,
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all services
// @route   GET /api/services
// @access  Public
export const getServices = async (req, res, next) => {
  try {
    const { isActive } = req.query;
    
    const query = {};
    if (isActive !== undefined) {
      query.isActive = isActive === 'true';
    }

    const services = await Service.find(query).sort({ order: 1, createdAt: -1 });

    res.json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single service
// @route   GET /api/services/:slug
// @access  Public
export const getService = async (req, res, next) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug });

    if (!service) {
      return next(new AppError('Service not found', 404));
    }

    res.json({
      success: true,
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update service
// @route   PUT /api/services/:id
// @access  Private
export const updateService = async (req, res, next) => {
  try {
    let service = await Service.findById(req.params.id);

    if (!service) {
      return next(new AppError('Service not found', 404));
    }

    // Handle image upload if present
    if (req.file) {
      // Delete old image
      if (service.image?.publicId) {
        await deleteFromCloudinary(service.image.publicId);
      }
      
      const imageData = await uploadToCloudinary(req.file, 'sparsh-clinic/services');
      req.body.image = imageData;
    }

    service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete service
// @route   DELETE /api/services/:id
// @access  Private
export const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return next(new AppError('Service not found', 404));
    }

    // Delete image from Cloudinary
    if (service.image?.publicId) {
      await deleteFromCloudinary(service.image.publicId);
    }

    await service.deleteOne();

    res.json({
      success: true,
      message: 'Service deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Upload service image
// @route   POST /api/services/:id/image
// @access  Private
export const uploadServiceImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(new AppError('Please upload an image', 400));
    }

    const service = await Service.findById(req.params.id);

    if (!service) {
      return next(new AppError('Service not found', 404));
    }

    // Delete old image
    if (service.image?.publicId) {
      await deleteFromCloudinary(service.image.publicId);
    }

    const imageData = await uploadToCloudinary(req.file, 'sparsh-clinic/services');

    service.image = imageData;
    await service.save();

    res.json({
      success: true,
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

