# Railway Deployment Guide for Sparsh Clinic

## 🚂 Deploy to Railway (Complete Setup)

### Prerequisites
1. GitHub account
2. Railway account (sign up at https://railway.app)
3. Cloudinary account (sign up at https://cloudinary.com)

---

## Step 1: Prepare Your Code

### 1.1 Initialize Git Repository
```bash
cd "/Users/riteshgangnani/Desktop/Work/Client Work/sparsh"
git init
git add .
git commit -m "Initial commit - Sparsh Clinic website"
```

### 1.2 Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository named "sparsh-clinic"
3. Don't initialize with README (we already have code)
4. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/sparsh-clinic.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy Backend to Railway

### 2.1 Create New Project
1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `sparsh-clinic` repository
5. Railway will detect it's a monorepo

### 2.2 Add MongoDB Database
1. In your Railway project, click "New"
2. Select "Database" → "Add MongoDB"
3. Railway will provision a MongoDB instance
4. Copy the connection string (it will look like: `mongodb://mongo:...@containers-us-west-xxx.railway.app:xxx`)

### 2.3 Configure Backend Service
1. Click "New" → "GitHub Repo" (if not already added)
2. Select the backend directory or create a new service
3. In Settings → Set these values:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### 2.4 Add Environment Variables
In your backend service, go to "Variables" and add:

```env
PORT=5000
NODE_ENV=production

# MongoDB - Use the connection string from Railway MongoDB plugin
MONGODB_URI=mongodb://mongo:PASSWORD@containers-us-west-xxx.railway.app:xxxx/railway

# JWT Secret - Generate a strong secret
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-xyz123

# Cloudinary (Get from cloudinary.com/console)
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

# Frontend URL (will be set after frontend deployment)
FRONTEND_URL=https://your-frontend-url.vercel.app

# Admin Credentials
ADMIN_EMAIL=admin@sparshprc.com
ADMIN_PASSWORD=changeThisPassword123!
```

### 2.5 Generate Domain
1. Railway will auto-generate a domain like: `sparsh-backend-production.up.railway.app`
2. Copy this URL - you'll need it for the frontend

---

## Step 3: Seed Database

### 3.1 Run Seed Command
Once backend is deployed:
1. In Railway dashboard, go to your backend service
2. Click on "Deployments" tab
3. Find the latest deployment
4. Click "View Logs"
5. Or run locally with Railway MongoDB:
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link to project
railway link

# Run seed
railway run npm run seed
```

---

## Step 4: Deploy Frontend to Vercel

### 4.1 Install Vercel CLI (or use dashboard)
```bash
npm install -g vercel
```

### 4.2 Deploy Frontend
```bash
cd frontend
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No**
- Project name? **sparsh-clinic**
- Directory? **./frontend** (or current if you're in frontend dir)
- Override settings? **No**

### 4.3 Add Environment Variable
In Vercel dashboard (or during deployment):
```env
VITE_API_URL=https://sparsh-backend-production.up.railway.app/api
```
(Use your actual Railway backend URL)

### 4.4 Deploy
```bash
vercel --prod
```

---

## Step 5: Get Cloudinary Credentials

### 5.1 Sign Up
1. Go to https://cloudinary.com/users/register/free
2. Sign up (free tier includes 25GB storage)

### 5.2 Get Credentials
1. Go to Dashboard: https://cloudinary.com/console
2. Copy these values:
   - **Cloud Name**
   - **API Key**
   - **API Secret**

### 5.3 Update Railway Variables
Go back to Railway → Your Backend Service → Variables
Update the Cloudinary variables with real values

---

## Step 6: Gmail Setup for Contact Form

### 6.1 Enable 2-Step Verification
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification

### 6.2 Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Other (Custom name)"
3. Name it "Sparsh Clinic Website"
4. Click "Generate"
5. Copy the 16-character password

### 6.3 Update Railway Variables
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx (the generated app password)
```

---

## Step 7: Update Frontend URL in Backend

After frontend is deployed to Vercel:
1. Copy your Vercel URL (e.g., `sparsh-clinic.vercel.app`)
2. In Railway backend variables, update:
```env
FRONTEND_URL=https://sparsh-clinic.vercel.app
```

---

## Step 8: Test Your Deployment

### 8.1 Test Backend
```bash
curl https://your-backend-url.railway.app/api/health
```

Should return: `{"status":"OK","message":"Sparsh Clinic API is running"}`

### 8.2 Test Frontend
Visit your Vercel URL: `https://sparsh-clinic.vercel.app`

### 8.3 Test Login
1. Go to: `https://sparsh-clinic.vercel.app/login`
2. Login with:
   - Email: admin@sparshprc.com
   - Password: changeThisPassword123!

---

## 🎉 You're Live!

Your website is now deployed and accessible worldwide!

### URLs
- **Frontend (Public Website)**: https://your-app.vercel.app
- **Backend API**: https://your-backend.railway.app
- **Admin Panel**: https://your-app.vercel.app/admin

---

## 💰 Cost Breakdown

### Free Tier (Perfect for Starting)
- **Railway**: $5/month credit (enough for backend + MongoDB)
- **Vercel**: Free (unlimited bandwidth)
- **Cloudinary**: Free (25GB storage, 25GB bandwidth)
- **MongoDB on Railway**: Included in Railway credit

**Total: Effectively FREE for the first month!**

### After Free Tier
- **Railway**: ~$5-10/month (pay for what you use)
- **Vercel**: Free for this traffic level
- **Cloudinary**: Free (unless you exceed limits)

**Total: ~$5-10/month**

---

## 🔧 Troubleshooting

### Backend Won't Start
- Check Railway logs for errors
- Verify MongoDB connection string is correct
- Ensure all environment variables are set

### Frontend Can't Connect to Backend
- Check CORS settings in backend
- Verify VITE_API_URL in Vercel
- Check Railway backend URL is accessible

### Images Won't Upload
- Verify Cloudinary credentials
- Check backend logs for upload errors

### Email Not Sending
- Verify Gmail app password is correct
- Check EMAIL_USER and EMAIL_PASSWORD in Railway
- Ensure 2-Step Verification is enabled

---

## 📝 Post-Deployment Checklist

- [ ] Backend deployed to Railway
- [ ] MongoDB added and connected
- [ ] Database seeded with initial data
- [ ] Cloudinary credentials added
- [ ] Gmail configured for emails
- [ ] Frontend deployed to Vercel
- [ ] Frontend can connect to backend
- [ ] Admin login works
- [ ] Can upload images
- [ ] Contact form sends emails
- [ ] Change default admin password
- [ ] Add custom domain (optional)
- [ ] Set up monitoring (optional)

---

## 🚀 Custom Domain (Optional)

### For Vercel (Frontend)
1. Go to Vercel project settings
2. Add your domain (e.g., sparshprc.com)
3. Update DNS records as instructed

### For Railway (Backend)
1. Go to Railway service settings
2. Add custom domain
3. Update DNS records

---

## 📊 Monitoring

### Railway
- View logs in real-time
- Monitor resource usage
- Set up alerts

### Vercel
- Analytics dashboard
- Performance insights
- Error tracking

---

**Need Help?**
- Railway Docs: https://docs.railway.app
- Vercel Docs: https://vercel.com/docs
- Or create an issue in your GitHub repo

---

**Congratulations! Your Sparsh Clinic website is now live! 🎉**

