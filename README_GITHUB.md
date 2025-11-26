# Sparsh Pediatric Rehabilitation Clinic

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/riteshgangnani10/sparsh-clinic)

A comprehensive, modern website for Sparsh Clinic with a powerful CMS for managing content, images, and videos.

## 🚀 Quick Deploy

### Backend (Railway)
1. Click the "Deploy on Railway" button above
2. Add MongoDB database plugin
3. Configure environment variables (see below)

### Frontend (Vercel)
```bash
cd frontend
npx vercel --yes
```

## 📋 Environment Variables

### Backend (Railway)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=<from Railway MongoDB plugin>
JWT_SECRET=<generate a random string>
CLOUDINARY_CLOUD_NAME=demo
CLOUDINARY_API_KEY=demo
CLOUDINARY_API_SECRET=demo
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@sparshprc.com
EMAIL_TO=sparshprc@gmail.com
FRONTEND_URL=<your Vercel URL>
ADMIN_EMAIL=admin@sparshprc.com
ADMIN_PASSWORD=changeThisPassword123!
```

### Frontend (Vercel)
```env
VITE_API_URL=<your Railway backend URL>/api
```

## 🎉 Features

- ✅ Beautiful, vibrant homepage with animations
- ✅ Comprehensive admin CMS
- ✅ Services, testimonials, case studies management
- ✅ Image/video gallery with Cloudinary
- ✅ Contact form with email notifications
- ✅ Mobile-responsive design
- ✅ SEO optimized

## 📖 Documentation

- [Setup Guide](SETUP.md)
- [Railway Deployment](RAILWAY_DEPLOYMENT.md)
- [Quick Deploy](QUICK_DEPLOY.md)
- [Project Summary](PROJECT_SUMMARY.md)

## 🔐 Default Login

- **Email**: admin@sparshprc.com
- **Password**: changeThisPassword123!

⚠️ **Change these credentials immediately after first login!**

## 💰 Cost

- Railway: ~$5-10/month (includes MongoDB)
- Vercel: FREE
- Cloudinary: FREE (25GB)

## 🛠️ Tech Stack

**Backend**: Node.js, Express, MongoDB, Cloudinary  
**Frontend**: React, TypeScript, Tailwind CSS, Vite

## 📞 Support

For issues or questions, see [SETUP.md](SETUP.md)

---

**Built with ❤️ for Sparsh Pediatric Rehabilitation Clinic**

