import Testimonial from '../models/Testimonial.model.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloudinaryHelper.js';
import { AppError } from '../middleware/errorHandler.js';

// @desc    Create testimonial
// @route   POST /api/testimonials
// @access  Private
export const createTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.create(req.body);

    res.status(201).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
export const getTestimonials = async (req, res, next) => {
  try {
    const { featured, condition, approved, displayOnHomepage } = req.query;
    
    const query = {};
    
    if (featured !== undefined) {
      query.featured = featured === 'true';
    }
    
    if (condition) {
      query.condition = { $regex: condition, $options: 'i' };
    }
    
    if (approved !== undefined) {
      query.isApproved = approved === 'true';
    }
    
    if (displayOnHomepage !== undefined) {
      query.displayOnHomepage = displayOnHomepage === 'true';
    }

    const testimonials = await Testimonial.find(query)
      .populate('serviceReceived', 'title')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single testimonial
// @route   GET /api/testimonials/:id
// @access  Public
export const getTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id).populate('serviceReceived');

    if (!testimonial) {
      return next(new AppError('Testimonial not found', 404));
    }

    res.json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update testimonial
// @route   PUT /api/testimonials/:id
// @access  Private
export const updateTestimonial = async (req, res, next) => {
  try {
    let testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return next(new AppError('Testimonial not found', 404));
    }

    // Handle image upload if present
    if (req.file) {
      if (testimonial.image?.publicId) {
        await deleteFromCloudinary(testimonial.image.publicId);
      }
      
      const imageData = await uploadToCloudinary(req.file, 'sparsh-clinic/testimonials');
      req.body.image = imageData;
    }

    testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private
export const deleteTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return next(new AppError('Testimonial not found', 404));
    }

    if (testimonial.image?.publicId) {
      await deleteFromCloudinary(testimonial.image.publicId);
    }

    await testimonial.deleteOne();

    res.json({
      success: true,
      message: 'Testimonial deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

