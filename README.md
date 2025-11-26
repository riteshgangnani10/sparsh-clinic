# Sparsh Pediatric Rehabilitation Clinic Website

A modern, vibrant website for Sparsh Clinic featuring a comprehensive CMS for managing content, images, and videos.

## Project Structure

```
sparsh/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   ├── utils/
│   │   └── styles/
│   └── package.json
├── backend/           # Node.js + Express backend
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── config/
│   │   └── utils/
│   └── package.json
└── README.md
```

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   npm install
   ```

2. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. Update `.env` with your credentials:
   - MongoDB connection string
   - JWT secret
   - Cloudinary credentials
   - Email configuration

4. Start the backend server:
   ```bash
   npm run dev
   ```

5. (Optional) Seed initial data:
   ```bash
   npm run seed
   ```

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   npm install
   ```

2. Create `.env` file:
   ```bash
   echo "VITE_API_URL=http://localhost:5000/api" > .env
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open browser at `http://localhost:3000`

## Default Admin Credentials

- Email: admin@sparshprc.com
- Password: changeThisPassword123!

**Important:** Change these credentials immediately after first login!

## Features

### Public Website
- Homepage with hero section and services
- About Us with doctor profiles
- Services pages
- Gallery with images and videos
- Testimonials
- Case studies
- Contact form
- Parent resources

### Admin Panel
- Media library management
- Content management for all sections
- Testimonial management
- Case study management
- Team member profiles
- Service management
- Website settings

## Technology Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Query
- Axios

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary (media storage)
- Multer + Sharp (image processing)
- Nodemailer (email)

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Backend (Railway/Render)
1. Connect GitHub repository
2. Set environment variables
3. Deploy

### Database (MongoDB Atlas)
1. Create cluster
2. Create database user
3. Whitelist IP addresses
4. Update connection string in backend `.env`

## Environment Variables

### Frontend
```
VITE_API_URL=your-backend-url/api
```

### Backend
See `.env.example` for complete list

## License

Proprietary - Sparsh Pediatric Rehabilitation Clinic

## Contact

For support, email sparshprc@gmail.com

