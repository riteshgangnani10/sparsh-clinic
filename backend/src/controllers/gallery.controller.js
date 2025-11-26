import GalleryItem from '../models/GalleryItem.model.js';
import { uploadToCloudinary, uploadVideoToCloudinary, deleteFromCloudinary } from '../utils/cloudinaryHelper.js';
import { AppError } from '../middleware/errorHandler.js';

// @desc    Upload media file
// @route   POST /api/gallery/upload
// @access  Private
export const uploadMedia = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(new AppError('Please upload a file', 400));
    }

    const { title, description, category, tags } = req.body;

    const isVideo = req.file.mimetype.startsWith('video/');
    let mediaData;

    if (isVideo) {
      mediaData = await uploadVideoToCloudinary(req.file);
    } else {
      mediaData = await uploadToCloudinary(req.file, 'sparsh-clinic/gallery');
    }

    const galleryItem = await GalleryItem.create({
      title: title || 'Untitled',
      description,
      type: isVideo ? 'video' : 'image',
      category: category || 'other',
      media: mediaData,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
    });

    res.status(201).json({
      success: true,
      data: galleryItem,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Upload multiple media files
// @route   POST /api/gallery/upload-multiple
// @access  Private
export const uploadMultipleMedia = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      return next(new AppError('Please upload at least one file', 400));
    }

    const { category } = req.body;
    const uploadPromises = [];

    for (const file of req.files) {
      const isVideo = file.mimetype.startsWith('video/');
      
      const uploadPromise = (async () => {
        let mediaData;
        if (isVideo) {
          mediaData = await uploadVideoToCloudinary(file);
        } else {
          mediaData = await uploadToCloudinary(file, 'sparsh-clinic/gallery');
        }

        return GalleryItem.create({
          title: file.originalname,
          type: isVideo ? 'video' : 'image',
          category: category || 'other',
          media: mediaData,
        });
      })();

      uploadPromises.push(uploadPromise);
    }

    const galleryItems = await Promise.all(uploadPromises);

    res.status(201).json({
      success: true,
      count: galleryItems.length,
      data: galleryItems,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
export const getGalleryItems = async (req, res, next) => {
  try {
    const { category, type, search, page = 1, limit = 12 } = req.query;

    const query = { isActive: true };

    if (category && category !== 'all') {
      query.category = category;
    }

    if (type && type !== 'all') {
      query.type = type;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } },
      ];
    }

    const skip = (page - 1) * limit;

    const galleryItems = await GalleryItem.find(query)
      .sort({ order: 1, createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await GalleryItem.countDocuments(query);

    res.json({
      success: true,
      data: galleryItems,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single gallery item
// @route   GET /api/gallery/:id
// @access  Public
export const getGalleryItem = async (req, res, next) => {
  try {
    const galleryItem = await GalleryItem.findById(req.params.id);

    if (!galleryItem) {
      return next(new AppError('Gallery item not found', 404));
    }

    res.json({
      success: true,
      data: galleryItem,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update gallery item
// @route   PUT /api/gallery/:id
// @access  Private
export const updateGalleryItem = async (req, res, next) => {
  try {
    const galleryItem = await GalleryItem.findById(req.params.id);

    if (!galleryItem) {
      return next(new AppError('Gallery item not found', 404));
    }

    const { title, description, category, tags, order, isActive, displayOnHomepage, videoEmbedUrl } = req.body;

    if (title) galleryItem.title = title;
    if (description !== undefined) galleryItem.description = description;
    if (category) galleryItem.category = category;
    if (tags) galleryItem.tags = tags.split(',').map(tag => tag.trim());
    if (order !== undefined) galleryItem.order = order;
    if (isActive !== undefined) galleryItem.isActive = isActive;
    if (displayOnHomepage !== undefined) galleryItem.displayOnHomepage = displayOnHomepage;
    if (videoEmbedUrl !== undefined) galleryItem.videoEmbedUrl = videoEmbedUrl;

    await galleryItem.save();

    res.json({
      success: true,
      data: galleryItem,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete gallery item
// @route   DELETE /api/gallery/:id
// @access  Private
export const deleteGalleryItem = async (req, res, next) => {
  try {
    const galleryItem = await GalleryItem.findById(req.params.id);

    if (!galleryItem) {
      return next(new AppError('Gallery item not found', 404));
    }

    // Delete from Cloudinary
    if (galleryItem.media.publicId) {
      await deleteFromCloudinary(galleryItem.media.publicId);
    }

    await galleryItem.deleteOne();

    res.json({
      success: true,
      message: 'Gallery item deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

