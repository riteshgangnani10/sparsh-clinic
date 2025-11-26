# 🔧 Railway Deployment - Fixed!

## ❌ What Went Wrong

Railway couldn't find `npm` because:
1. The root `railway.toml` was interfering with auto-detection
2. Railway didn't know this was a Node.js project
3. It tried to build without installing Node.js first

## ✅ What I Fixed

1. **Deleted** `railway.toml` from root (it was conflicting)
2. **Added** `backend/nixpacks.toml` to explicitly tell Railway:
   - Install Node.js 20
   - Run `npm install`
   - Start with `npm start`
3. **Kept** `backend/railway.json` for Railway-specific settings

---

## 🚀 Now Redeploy in Railway

### Option 1: Automatic (Recommended)
Railway should auto-detect the changes and redeploy. If not, click **"Redeploy"** in your Railway dashboard.

### Option 2: Fresh Deployment
If you want to start fresh:

1. **Delete** the current failed deployment in Railway
2. Go to https://railway.app/new
3. Click **"Deploy from GitHub repo"**
4. Select **sparsh-clinic**
5. ⚠️ **IMPORTANT**: In Settings, set **Root Directory** to `backend`
6. Add environment variables (see below)
7. Click **Deploy**

---

## 📋 Environment Variables Checklist

Make sure these are set in Railway (Variables tab):

### Required:
```bash
NODE_ENV=production
PORT=5001
JWT_SECRET=your-super-secret-jwt-key-here
MONGODB_URI=${{MongoDB.MONGODB_URI}}
```

### Cloudinary (Required for images):
```bash
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Optional (for contact form emails):
```bash
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@sparshprc.com
EMAIL_TO=sparshprc@gmail.com
FRONTEND_URL=https://sparsh-clinic.vercel.app
```

---

## 🔍 Verify Setup

After setting environment variables:

1. ✅ **Root Directory** = `backend` (in Settings)
2. ✅ **MongoDB** added (+ New → Database → MongoDB)
3. ✅ **All environment variables** added
4. ✅ **GitHub repo** connected

---

## 🎯 Expected Build Output

After clicking Deploy, you should see:

```
Using Nixpacks
Setting up Node.js 20
Running npm install
✓ Dependencies installed
Starting server with npm start
✓ Server running on port 5001
```

---

## 🐛 If Build Still Fails

### Check These:

1. **Root Directory**: Must be set to `backend` in Railway Settings
2. **MongoDB**: Make sure MongoDB service is created and `MONGODB_URI` variable references it
3. **Node Version**: backend/package.json specifies Node.js version

### Get Logs:

In Railway dashboard:
- Click your service
- Click "Build Logs" tab
- Share the error message if you see any

---

## 📞 Once Deployed Successfully

You'll get a URL like: `https://sparsh-backend-production-xxxx.up.railway.app`

**Test it:**
```bash
curl https://your-railway-url.up.railway.app/api/health
```

Should return:
```json
{"status":"OK","message":"Sparsh Clinic API is running"}
```

---

## ✨ Then Deploy Frontend

Once backend is working:

1. Go to https://vercel.com/new
2. Import `sparsh-clinic` repository
3. Set Root Directory to `frontend`
4. Add environment variable:
   ```
   VITE_API_URL=https://your-railway-url.up.railway.app/api
   ```
5. Deploy!

---

**The fix is pushed to GitHub. Railway should pick it up automatically!** 🎉

If not, just click **"Redeploy"** in your Railway dashboard.

