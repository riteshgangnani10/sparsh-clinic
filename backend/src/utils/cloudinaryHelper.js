import sharp from 'sharp';
import cloudinary from '../config/cloudinary.js';
import { AppError } from '../middleware/errorHandler.js';

// Upload image to Cloudinary
export const uploadToCloudinary = async (file, folder = 'sparsh-clinic') => {
  try {
    // Optimize image with Sharp
    const optimizedImage = await sharp(file.buffer)
      .resize(1920, 1080, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: 85, progressive: true })
      .toBuffer();

    // Upload to Cloudinary
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: folder,
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              url: result.secure_url,
              publicId: result.public_id,
            });
          }
        }
      );

      uploadStream.end(optimizedImage);
    });
  } catch (error) {
    throw new AppError('Error uploading image', 500);
  }
};

// Upload video to Cloudinary
export const uploadVideoToCloudinary = async (file, folder = 'sparsh-clinic/videos') => {
  try {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: folder,
          resource_type: 'video',
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              url: result.secure_url,
              publicId: result.public_id,
              thumbnailUrl: result.secure_url.replace(/\.[^.]+$/, '.jpg'),
            });
          }
        }
      );

      uploadStream.end(file.buffer);
    });
  } catch (error) {
    throw new AppError('Error uploading video', 500);
  }
};

// Delete from Cloudinary
export const deleteFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
  }
};

// Create thumbnail
export const createThumbnail = async (file) => {
  try {
    const thumbnail = await sharp(file.buffer)
      .resize(400, 300, {
        fit: 'cover',
      })
      .jpeg({ quality: 80 })
      .toBuffer();

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'sparsh-clinic/thumbnails',
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              url: result.secure_url,
              publicId: result.public_id,
            });
          }
        }
      );

      uploadStream.end(thumbnail);
    });
  } catch (error) {
    throw new AppError('Error creating thumbnail', 500);
  }
};

