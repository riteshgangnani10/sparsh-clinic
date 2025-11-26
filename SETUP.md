# Sparsh Clinic Website - Setup & Deployment Guide

## 🚀 Complete Website Implementation

Congratulations! You now have a fully functional website for Sparsh Pediatric Rehabilitation Clinic with:

### ✅ Backend (Node.js + Express + MongoDB)
- **Authentication System** with JWT
- **RESTful APIs** for all content management
- **Media Upload** with Cloudinary integration
- **Image Optimization** using Sharp
- **Email System** for contact forms with Nodemailer
- **Database Models** for all content types
- **Security** with Helmet, CORS, and Rate Limiting

### ✅ Frontend (React + TypeScript + Tailwind)
- **Beautiful Homepage** with hero, services, testimonials, and CTA sections
- **Service Pages** with dynamic content from CMS
- **About Us Page** with team information
- **Gallery** with filtering functionality
- **Testimonials** display
- **Case Studies** showcase
- **Contact Form** with validation
- **Admin Dashboard** with protected routes
- **Responsive Design** for all devices
- **Vibrant, Child-Friendly** UI with smooth animations

---

## 📋 Prerequisites

Before starting, ensure you have:
- **Node.js** (v18 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **Cloudinary Account** (free tier available)
- **Gmail Account** (for email notifications)

---

## 🛠️ Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create `/backend/.env` file:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/sparsh-clinic
# OR use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sparsh-clinic

# JWT Secret (change this!)
JWT_SECRET=your-super-secret-jwt-key-please-change-this

# Cloudinary (Get from https://cloudinary.com/console)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_FROM=noreply@sparshprc.com
EMAIL_TO=sparshprc@gmail.com

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Default Admin Credentials
ADMIN_EMAIL=admin@sparshprc.com
ADMIN_PASSWORD=changeThisPassword123!
```

#### Getting Cloudinary Credentials:
1. Sign up at https://cloudinary.com/
2. Go to Dashboard
3. Copy: Cloud Name, API Key, API Secret

#### Getting Gmail App Password:
1. Enable 2-Step Verification on your Google Account
2. Go to https://myaccount.google.com/apppasswords
3. Generate new app password
4. Use this password in EMAIL_PASSWORD

### 3. Seed Database

```bash
cd backend
npm run seed
```

This will create:
- Admin user
- Sample services
- Team members (Dr. Tejas & Dr. Mona)
- Conditions
- Website settings

### 4. Start Backend Server

```bash
cd backend
npm run dev
```

Backend will run on http://localhost:5000

### 5. Frontend Setup

```bash
cd frontend
npm install
```

Create `/frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

### 6. Start Frontend Server

```bash
cd frontend
npm run dev
```

Frontend will run on http://localhost:3000

---

## 🔐 Default Admin Login

After seeding the database, use these credentials:

- **URL**: http://localhost:3000/login
- **Email**: admin@sparshprc.com
- **Password**: changeThisPassword123!

**⚠️ IMPORTANT**: Change these credentials immediately after first login!

---

## 📦 Deployment

### Deploy Backend (Railway/Render)

#### Option A: Railway
1. Push code to GitHub
2. Connect repository at https://railway.app/
3. Add environment variables from `.env`
4. Deploy

#### Option B: Render
1. Create account at https://render.com/
2. New Web Service
3. Connect GitHub repository
4. Build Command: `npm install`
5. Start Command: `node src/server.js`
6. Add environment variables
7. Deploy

### Deploy Frontend (Vercel)

```bash
cd frontend
npx vercel
```

Or via Vercel Dashboard:
1. Import GitHub repository
2. Framework Preset: Vite
3. Environment Variables:
   ```
   VITE_API_URL=https://your-backend-url.com/api
   ```
4. Deploy

### MongoDB Atlas Setup

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create new cluster (free tier available)
3. Create database user
4. Whitelist IP addresses (0.0.0.0/0 for all)
5. Get connection string
6. Update MONGODB_URI in backend environment variables

---

## 📁 Project Structure

```
sparsh/
├── backend/
│   ├── src/
│   │   ├── config/          # Database & Cloudinary config
│   │   ├── controllers/     # Business logic
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API endpoints
│   │   ├── middleware/      # Auth, upload, error handling
│   │   ├── utils/           # Helper functions, seed data
│   │   └── server.js        # Entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── api/             # API calls
    │   ├── components/      # React components
    │   │   ├── common/      # Shared components
    │   │   ├── home/        # Homepage sections
    │   │   ├── layout/      # Header, Footer
    │   │   └── admin/       # Admin components
    │   ├── pages/           # Page components
    │   │   ├── admin/       # Admin pages
    │   │   └── ...          # Public pages
    │   ├── store/           # Zustand state management
    │   ├── App.tsx          # Main app component
    │   └── main.tsx         # Entry point
    └── package.json
```

---

## 🎨 Features Overview

### Public Website
- ✅ Animated homepage with hero section
- ✅ Services showcase
- ✅ About us with team profiles
- ✅ Image/video gallery
- ✅ Testimonials carousel
- ✅ Case studies
- ✅ Responsive contact form
- ✅ Mobile-friendly design

### Admin Panel
- ✅ Secure login
- ✅ Dashboard with statistics
- ✅ Manage services
- ✅ Manage testimonials
- ✅ Manage case studies
- ✅ Team member management
- ✅ Media library
- ✅ View contact inquiries
- ✅ Website settings

---

## 🔧 Common Issues & Solutions

### Issue: Cannot connect to MongoDB
**Solution**: Ensure MongoDB is running locally or check MongoDB Atlas connection string

### Issue: Cloudinary upload fails
**Solution**: Verify Cloudinary credentials in `.env`

### Issue: Email not sending
**Solution**: Check Gmail app password and ensure 2-Step Verification is enabled

### Issue: CORS errors
**Solution**: Update FRONTEND_URL in backend `.env` to match your frontend URL

---

## 📝 Next Steps

1. **Add Real Content**: Replace placeholders with actual clinic images and content
2. **Customize Colors**: Update Tailwind config for brand colors if needed
3. **Add Google Maps**: Replace map placeholder in contact page
4. **Setup Domain**: Point custom domain to Vercel deployment
5. **Add Analytics**: Integrate Google Analytics
6. **SEO Optimization**: Add meta tags for better search ranking
7. **Performance**: Optimize images and enable caching

---

## 🚀 Going Live Checklist

- [ ] Change admin password
- [ ] Add real images to Cloudinary
- [ ] Update website content
- [ ] Configure email notifications
- [ ] Test contact form
- [ ] Test all admin features
- [ ] Mobile responsiveness check
- [ ] Cross-browser testing
- [ ] Setup SSL certificate
- [ ] Configure custom domain
- [ ] Add Google Analytics
- [ ] Setup error monitoring (Sentry)
- [ ] Create backups

---

## 📞 Support

For issues or questions:
- Email: sparshprc@gmail.com
- Check logs in terminal for errors
- Review `.env` configuration

---

## 🎉 Congratulations!

You now have a professional, modern website for Sparsh Clinic with a powerful CMS. 
The website is responsive, SEO-friendly, and ready for deployment!

---

**Built with ❤️ for Sparsh Pediatric Rehabilitation Clinic**

