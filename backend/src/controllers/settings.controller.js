import Settings from '../models/Settings.model.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloudinaryHelper.js';
import { AppError } from '../middleware/errorHandler.js';

// @desc    Get settings
// @route   GET /api/settings
// @access  Public
export const getSettings = async (req, res, next) => {
  try {
    let settings = await Settings.findOne();

    // Create default settings if none exist
    if (!settings) {
      settings = await Settings.create({
        clinicName: 'Sparsh Pediatric Rehabilitation Clinic',
        tagline: 'Nurturing Potential, Celebrating Progress',
        contact: {
          email: 'sparshprc@gmail.com',
          phone: [
            { label: 'Dr. Tejas Patel', number: '+91-9426284419' },
            { label: 'Dr. Mona Patel', number: '+91-9426038646' },
          ],
          address: {
            street: '1st Floor, Soham-2, Opp- Ramji Mandir, Ishwar Bhuvan Road',
            city: 'Ahmedabad',
            state: 'Gujarat',
            zipCode: '380014',
            country: 'India',
          },
        },
      });
    }

    res.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update settings
// @route   PUT /api/settings
// @access  Private
export const updateSettings = async (req, res, next) => {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = await Settings.create(req.body);
    } else {
      // Handle image uploads if present
      if (req.files) {
        if (req.files.heroImage) {
          if (settings.homepage?.heroImage?.publicId) {
            await deleteFromCloudinary(settings.homepage.heroImage.publicId);
          }
          const heroImageData = await uploadToCloudinary(req.files.heroImage[0], 'sparsh-clinic/homepage');
          req.body.homepage = req.body.homepage || {};
          req.body.homepage.heroImage = heroImageData;
        }

        if (req.files.ogImage) {
          if (settings.seo?.ogImage?.publicId) {
            await deleteFromCloudinary(settings.seo.ogImage.publicId);
          }
          const ogImageData = await uploadToCloudinary(req.files.ogImage[0], 'sparsh-clinic/seo');
          req.body.seo = req.body.seo || {};
          req.body.seo.ogImage = ogImageData;
        }
      }

      // Deep merge the update
      Object.keys(req.body).forEach(key => {
        if (typeof req.body[key] === 'object' && !Array.isArray(req.body[key])) {
          settings[key] = { ...settings[key], ...req.body[key] };
        } else {
          settings[key] = req.body[key];
        }
      });

      await settings.save();
    }

    res.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    next(error);
  }
};

