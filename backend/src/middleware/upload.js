import multer from 'multer';
import path from 'path';
import { AppError } from './errorHandler.js';

// Memory storage for immediate upload to Cloudinary
const storage = multer.memoryStorage();

// File filter
const fileFilter = (req, file, cb) => {
  // Allowed image types
  const imageTypes = /jpeg|jpg|png|gif|webp/;
  // Allowed video types
  const videoTypes = /mp4|avi|mov|wmv|webm/;
  
  const extname = path.extname(file.originalname).toLowerCase();
  const mimetype = file.mimetype;
  
  const isImage = imageTypes.test(extname) && mimetype.startsWith('image/');
  const isVideo = videoTypes.test(extname) && mimetype.startsWith('video/');
  
  if (isImage || isVideo) {
    cb(null, true);
  } else {
    cb(new AppError('Only image and video files are allowed!', 400), false);
  }
};

// Multer upload configuration
export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: fileFilter,
});

// Multiple file upload
export const uploadMultiple = upload.array('files', 10);

// Single file upload
export const uploadSingle = upload.single('file');

