# 🚀 Quick Deploy to Railway - Sparsh Clinic

## What You Need (All FREE to start!)

1. **GitHub Account** - github.com
2. **Railway Account** - railway.app (gives you $5 free credit/month)
3. **Cloudinary Account** - cloudinary.com (free 25GB storage)

---

## 🎯 Super Quick Setup (5 Steps)

### Step 1: Push to GitHub (2 minutes)
```bash
cd "/Users/riteshgangnani/Desktop/Work/Client Work/sparsh"
./deploy.sh

# Then follow the prompts to push to GitHub
```

### Step 2: Deploy Backend on Railway (3 minutes)
1. Go to https://railway.app → Login with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your `sparsh-clinic` repository
4. Click "Add Variables" and add these **3 REQUIRED** variables:
   ```
   MONGODB_URI=<from Railway MongoDB plugin>
   JWT_SECRET=any-long-random-string-here
   CLOUDINARY_CLOUD_NAME=demo
   ```
5. Railway will auto-deploy!

### Step 3: Add MongoDB (1 minute)
1. In same Railway project, click "New" → "Database" → "MongoDB"
2. Copy the connection string
3. Update `MONGODB_URI` variable in backend service

### Step 4: Deploy Frontend on Vercel (2 minutes)
```bash
cd frontend
npx vercel

# When prompted:
# - Project name: sparsh-clinic
# - Add VITE_API_URL: https://your-backend.railway.app/api
```

### Step 5: Seed Database (1 minute)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and seed
railway login
railway link  # Select your project
railway run npm run seed
```

---

## ✅ You're Done! 

Your website is now live at:
- **Frontend**: https://sparsh-clinic.vercel.app
- **Backend**: https://your-backend.railway.app
- **Admin**: https://sparsh-clinic.vercel.app/login

Default login:
- Email: admin@sparshprc.com
- Password: changeThisPassword123!

---

## 💰 Cost: FREE!

- Railway: $5 credit/month (enough for backend + MongoDB)
- Vercel: FREE forever
- Cloudinary: FREE (25GB)
- **Total: $0** for first month, then ~$5-10/month

---

## 🔧 Optional: Add Real Services Later

### Get Cloudinary (for image uploads):
1. Sign up at cloudinary.com
2. Dashboard → Copy: Cloud Name, API Key, Secret
3. Update in Railway variables

### Setup Email (for contact form):
1. Enable 2-Step Verification in Gmail
2. Generate App Password: myaccount.google.com/apppasswords
3. Update EMAIL_USER and EMAIL_PASSWORD in Railway

---

## 📱 Test Your Live Website

1. Visit your Vercel URL
2. Browse the website
3. Try the contact form
4. Login to admin panel
5. Upload content!

---

## Need Help?

See detailed guide: `RAILWAY_DEPLOYMENT.md`

---

**🎉 Congratulations! Your clinic website is LIVE!**

