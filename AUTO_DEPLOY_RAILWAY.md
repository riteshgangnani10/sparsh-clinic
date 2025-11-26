# 🚀 AUTO-DEPLOY to Railway - Complete Guide

## ✨ This method uses GitHub + Railway's automatic deployment (No manual CLI needed!)

---

## 🎯 Prerequisites

- ✅ Code is already pushed to GitHub
- ✅ Railway account (Free/Basic plan works!)
- ✅ Cloudinary account (for image storage)

---

## 📋 Step-by-Step Auto-Deploy Instructions

### STEP 1: Login to Railway

1. Go to: **https://railway.app**
2. Click **"Login"** or **"Start a New Project"**
3. Sign in with GitHub (recommended for auto-deploy)

---

### STEP 2: Create New Project

1. Click **"New Project"** button
2. Select **"Deploy from GitHub repo"**
3. If first time, click **"Configure GitHub App"**
   - Authorize Railway
   - Select "All repositories" or just "sparsh-clinic"
4. Select your **sparsh-clinic** repository

---

### STEP 3: Configure Backend Service

#### 3A. Set Root Directory

⚠️ **IMPORTANT**: Railway needs to know your backend is in `/backend` folder

1. After selecting the repo, Railway will try to auto-detect
2. Click on **"Settings"** (or the service name)
3. Scroll to **"Root Directory"**
4. Set it to: `backend`
5. Click **"Save"**

#### 3B. Verify Build Settings

Railway should auto-detect:
- **Build Command**: `npm install`
- **Start Command**: `npm start`

If not, set them manually in Settings.

---

### STEP 4: Add MongoDB Database

1. In your project dashboard, click **"+ New"** button
2. Select **"Database"**
3. Choose **"Add MongoDB"**
4. Railway will create a MongoDB instance automatically
5. It will auto-generate these variables:
   - `MONGO_URL`
   - `MONGODB_URI` 
   - Connection details

---

### STEP 5: Add Environment Variables

1. Click on your **backend service** (not the database)
2. Go to **"Variables"** tab
3. Click **"+ New Variable"** and add these:

```
NODE_ENV=production
PORT=5001
JWT_SECRET=sparsh-clinic-super-secret-jwt-key-2024-change-this
FRONTEND_URL=https://sparsh-clinic.vercel.app
```

#### 5A. Add Cloudinary Variables

You need to get these from your Cloudinary account:

1. Go to: https://cloudinary.com/console
2. Copy your credentials and add to Railway:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

#### 5B. Link MongoDB

Railway should auto-link MongoDB, but verify:

```
MONGODB_URI=${{MongoDB.MONGODB_URI}}
```

Or you can use the raw connection string from the MongoDB service.

---

### STEP 6: Deploy Backend

1. Click **"Deploy"** or **"Redeploy"**
2. Watch the **Build Logs**
3. Wait for "✅ Success" message
4. Railway will give you a public URL like:
   ```
   https://sparsh-backend-production-xxxx.up.railway.app
   ```
5. **COPY THIS URL** - you'll need it for frontend!

#### 6A. Test Backend

Visit: `https://your-backend-url.up.railway.app/api/health`

You should see:
```json
{"status":"OK","message":"Sparsh Clinic API is running"}
```

---

### STEP 7: Enable Auto-Deploy from GitHub

1. In your backend service, go to **"Settings"**
2. Scroll to **"Deploy Triggers"**
3. Make sure **"Branch Deployments"** is enabled
4. Set branch to: `main` (or your default branch)

**✨ Now every time you push to GitHub, Railway will auto-deploy!**

---

### STEP 8: Deploy Frontend to Vercel

1. Go to: **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select your **sparsh-clinic** repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

#### 8A. Add Environment Variable

In Vercel's environment variables:

```
VITE_API_URL=https://your-railway-backend-url.up.railway.app/api
```

**Replace with your actual Railway URL from Step 6!**

5. Click **"Deploy"**
6. Wait for deployment (2-3 minutes)
7. You'll get a URL like: `https://sparsh-clinic.vercel.app`

---

### STEP 9: Create First Admin User

After both are deployed, you need to create an admin user.

#### Method 1: Using curl (from your computer)

```bash
curl -X POST https://your-railway-backend-url.up.railway.app/api/setup/create-first-admin \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin",
    "email": "admin@sparshprc.com",
    "password": "YourSecurePassword123"
  }'
```

#### Method 2: Using Postman/Insomnia

- **URL**: `POST https://your-backend-url/api/setup/create-first-admin`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "name": "Admin",
  "email": "admin@sparshprc.com",
  "password": "YourSecurePassword123"
}
```

#### Method 3: Using the browser console

1. Go to your frontend URL
2. Open Developer Tools (F12)
3. Go to Console tab
4. Paste and run:

```javascript
fetch('https://your-backend-url/api/setup/create-first-admin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Admin',
    email: 'admin@sparshprc.com',
    password: 'YourSecurePassword123'
  })
})
.then(r => r.json())
.then(console.log)
```

---

### STEP 10: Test Your Website

1. **Frontend**: https://sparsh-clinic.vercel.app
2. **Admin Login**: https://sparsh-clinic.vercel.app/login
3. **Login with**:
   - Email: `admin@sparshprc.com`
   - Password: `YourSecurePassword123`

---

## 🎉 You're Done!

### What You Have Now:

✅ **Backend**: Auto-deploys from GitHub to Railway
✅ **Frontend**: Auto-deploys from GitHub to Vercel
✅ **Database**: MongoDB hosted on Railway
✅ **Media Storage**: Cloudinary for images/videos
✅ **Admin Panel**: Accessible at /login

### Auto-Deploy is Active:

Every time you push to GitHub:
- Railway automatically deploys backend changes
- Vercel automatically deploys frontend changes

---

## 🔧 Quick Commands Reference

### Check if setup is needed:
```bash
curl https://your-backend-url/api/setup/check
```

### Test backend health:
```bash
curl https://your-backend-url/api/health
```

### Create admin (one-time only):
```bash
curl -X POST https://your-backend-url/api/setup/create-first-admin \
  -H "Content-Type: application/json" \
  -d '{"name":"Admin","email":"admin@sparshprc.com","password":"SecurePass123"}'
```

---

## 🐛 Troubleshooting

### Backend won't start?
- Check Railway logs for errors
- Verify `MONGODB_URI` is set
- Check root directory is set to `backend`

### Frontend can't connect to backend?
- Verify `VITE_API_URL` in Vercel points to Railway URL
- Check CORS settings allow your Vercel domain
- Check Railway backend is running

### Can't login?
- Make sure admin user was created (check Step 9)
- Verify `JWT_SECRET` is set in Railway
- Check browser console for errors

### Images not uploading?
- Verify Cloudinary credentials are correct
- Check Railway logs for Cloudinary errors

---

## 📞 Need Help?

If you encounter any errors:
1. Check Railway build logs
2. Check Vercel deployment logs
3. Screenshot the error and let me know!

---

## ⏱️ Total Time: 10-15 minutes

This is the **easiest and most reliable** deployment method for your setup!

