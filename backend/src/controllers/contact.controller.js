import ContactInquiry from '../models/ContactInquiry.model.js';
import nodemailer from 'nodemailer';
import { AppError } from '../middleware/errorHandler.js';

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message, interestedIn } = req.body;

    // Create inquiry in database
    const inquiry = await ContactInquiry.create({
      name,
      email,
      phone,
      subject,
      message,
      interestedIn,
    });

    // Send email notification
    try {
      const transporter = createTransporter();

      const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME || 'Sparsh Clinic'}" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO,
        subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          ${interestedIn ? `<p><strong>Interested In:</strong> ${interestedIn}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
      };

      await transporter.sendMail(mailOptions);

      // Send auto-reply to user
      const autoReplyOptions = {
        from: `"${process.env.EMAIL_FROM_NAME || 'Sparsh Clinic'}" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject: 'Thank you for contacting Sparsh Clinic',
        html: `
          <h2>Thank You for Contacting Us!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Sparsh Pediatric Rehabilitation Clinic. We have received your message and will get back to you as soon as possible.</p>
          <p>If you need immediate assistance, please feel free to call us at:</p>
          <ul>
            <li>Dr. Tejas Patel: +91-9426284419</li>
            <li>Dr. Mona Patel: +91-9426038646</li>
          </ul>
          <p>Best regards,<br>Sparsh Clinic Team</p>
        `,
      };

      await transporter.sendMail(autoReplyOptions);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Your message has been received. We will contact you soon!',
      data: inquiry,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact inquiries
// @route   GET /api/contact
// @access  Private
export const getInquiries = async (req, res, next) => {
  try {
    const { status, replied } = req.query;
    
    const query = {};
    
    if (status) {
      query.status = status;
    }
    
    if (replied !== undefined) {
      query.replied = replied === 'true';
    }

    const inquiries = await ContactInquiry.find(query).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single inquiry
// @route   GET /api/contact/:id
// @access  Private
export const getInquiry = async (req, res, next) => {
  try {
    const inquiry = await ContactInquiry.findById(req.params.id);

    if (!inquiry) {
      return next(new AppError('Inquiry not found', 404));
    }

    // Mark as read
    if (inquiry.status === 'new') {
      inquiry.status = 'read';
      await inquiry.save();
    }

    res.json({
      success: true,
      data: inquiry,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update inquiry status
// @route   PUT /api/contact/:id
// @access  Private
export const updateInquiry = async (req, res, next) => {
  try {
    const { status, notes, replied } = req.body;

    const inquiry = await ContactInquiry.findById(req.params.id);

    if (!inquiry) {
      return next(new AppError('Inquiry not found', 404));
    }

    if (status) inquiry.status = status;
    if (notes !== undefined) inquiry.notes = notes;
    if (replied !== undefined) {
      inquiry.replied = replied;
      if (replied) {
        inquiry.repliedAt = new Date();
      }
    }

    await inquiry.save();

    res.json({
      success: true,
      data: inquiry,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete inquiry
// @route   DELETE /api/contact/:id
// @access  Private
export const deleteInquiry = async (req, res, next) => {
  try {
    const inquiry = await ContactInquiry.findById(req.params.id);

    if (!inquiry) {
      return next(new AppError('Inquiry not found', 404));
    }

    await inquiry.deleteOne();

    res.json({
      success: true,
      message: 'Inquiry deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

