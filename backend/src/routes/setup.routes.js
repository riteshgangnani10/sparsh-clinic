import express from 'express';
import User from '../models/User.model.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

/**
 * POST /api/setup/create-first-admin
 * Creates the first admin user (only works if no users exist)
 * This is a one-time setup endpoint
 */
router.post('/create-first-admin', async (req, res) => {
  try {
    // Check if any users already exist
    const existingUsers = await User.countDocuments();
    
    if (existingUsers > 0) {
      return res.status(403).json({
        success: false,
        message: 'Admin user already exists. This endpoint can only be used once.'
      });
    }

    const { email, password, name } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email, password, and name'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Validate password strength
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long'
      });
    }

    // Create the first admin user
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const admin = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'admin'
    });

    res.status(201).json({
      success: true,
      message: 'First admin user created successfully',
      data: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Error creating first admin:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating admin user',
      error: error.message
    });
  }
});

/**
 * GET /api/setup/check
 * Check if setup is needed (i.e., no users exist)
 */
router.get('/check', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    
    res.json({
      success: true,
      setupNeeded: userCount === 0,
      userCount
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error checking setup status',
      error: error.message
    });
  }
});

export default router;

