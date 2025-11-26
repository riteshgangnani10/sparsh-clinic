import CaseStudy from '../models/CaseStudy.model.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloudinaryHelper.js';
import { AppError } from '../middleware/errorHandler.js';

// @desc    Create case study
// @route   POST /api/case-studies
// @access  Private
export const createCaseStudy = async (req, res, next) => {
  try {
    const caseStudy = await CaseStudy.create(req.body);

    res.status(201).json({
      success: true,
      data: caseStudy,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all case studies
// @route   GET /api/case-studies
// @access  Public
export const getCaseStudies = async (req, res, next) => {
  try {
    const { featured, condition, published } = req.query;
    
    const query = {};
    
    if (featured !== undefined) {
      query.featured = featured === 'true';
    }
    
    if (condition) {
      query.condition = { $regex: condition, $options: 'i' };
    }
    
    if (published !== undefined) {
      query.isPublished = published === 'true';
    }

    const caseStudies = await CaseStudy.find(query)
      .populate('servicesProvided', 'title')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: caseStudies.length,
      data: caseStudies,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single case study
// @route   GET /api/case-studies/:slug
// @access  Public
export const getCaseStudy = async (req, res, next) => {
  try {
    const caseStudy = await CaseStudy.findOne({ slug: req.params.slug })
      .populate('servicesProvided');

    if (!caseStudy) {
      return next(new AppError('Case study not found', 404));
    }

    res.json({
      success: true,
      data: caseStudy,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update case study
// @route   PUT /api/case-studies/:id
// @access  Private
export const updateCaseStudy = async (req, res, next) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!caseStudy) {
      return next(new AppError('Case study not found', 404));
    }

    res.json({
      success: true,
      data: caseStudy,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete case study
// @route   DELETE /api/case-studies/:id
// @access  Private
export const deleteCaseStudy = async (req, res, next) => {
  try {
    const caseStudy = await CaseStudy.findById(req.params.id);

    if (!caseStudy) {
      return next(new AppError('Case study not found', 404));
    }

    // Delete all images from Cloudinary
    const allImages = [...caseStudy.beforeImages, ...caseStudy.afterImages, ...caseStudy.progressImages];
    
    for (const image of allImages) {
      if (image.publicId) {
        await deleteFromCloudinary(image.publicId);
      }
    }

    await caseStudy.deleteOne();

    res.json({
      success: true,
      message: 'Case study deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Upload case study images
// @route   POST /api/case-studies/:id/images
// @access  Private
export const uploadCaseStudyImages = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      return next(new AppError('Please upload at least one image', 400));
    }

    const caseStudy = await CaseStudy.findById(req.params.id);

    if (!caseStudy) {
      return next(new AppError('Case study not found', 404));
    }

    const { imageType } = req.body; // 'before', 'after', or 'progress'

    const uploadedImages = [];
    
    for (const file of req.files) {
      const imageData = await uploadToCloudinary(file, 'sparsh-clinic/case-studies');
      uploadedImages.push(imageData);
    }

    if (imageType === 'before') {
      caseStudy.beforeImages.push(...uploadedImages);
    } else if (imageType === 'after') {
      caseStudy.afterImages.push(...uploadedImages);
    } else if (imageType === 'progress') {
      caseStudy.progressImages.push(...uploadedImages.map(img => ({ ...img, date: new Date() })));
    }

    await caseStudy.save();

    res.json({
      success: true,
      data: caseStudy,
    });
  } catch (error) {
    next(error);
  }
};

