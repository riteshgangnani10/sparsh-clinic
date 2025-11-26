# 🚀 Quick Start - Deploy in 10 Minutes!

## 📦 What You're Deploying

- **Backend** (Node.js API) → Railway
- **Frontend** (React App) → Vercel  
- **Database** (MongoDB) → Railway
- **Media** (Images/Videos) → Cloudinary

---

## ✅ Step 1: Railway - Backend + Database (5 minutes)

### 1. Go to Railway
👉 **https://railway.app/new**

### 2. Deploy from GitHub
- Click **"Deploy from GitHub repo"**
- Select **`sparsh-clinic`** repository
- ⚠️ **Important**: Set **Root Directory** to `backend` in Settings

### 3. Add MongoDB
- Click **"+ New"** → **Database** → **Add MongoDB**

### 4. Add Environment Variables
Click on backend service → **Variables** tab:

```bash
NODE_ENV=production
PORT=5001
JWT_SECRET=your-secret-key-here
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
MONGODB_URI=${{MongoDB.MONGODB_URI}}
FRONTEND_URL=https://sparsh-clinic.vercel.app
```

### 5. Deploy
- Click **Deploy**
- Copy your Railway URL (e.g., `https://xxx.up.railway.app`)

---

## ✅ Step 2: Vercel - Frontend (3 minutes)

### 1. Go to Vercel
👉 **https://vercel.com/new**

### 2. Import Repository
- Click **"Import Git Repository"**
- Select **`sparsh-clinic`**

### 3. Configure
- **Framework**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### 4. Add Environment Variable
```bash
VITE_API_URL=https://your-railway-url.up.railway.app/api
```
(Replace with your Railway URL from Step 1)

### 5. Deploy
- Click **Deploy**
- Wait 2-3 minutes

---

## ✅ Step 3: Create Admin User (1 minute)

### Open your browser console and run:

```javascript
fetch('https://your-railway-url.up.railway.app/api/setup/create-first-admin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Admin',
    email: 'admin@sparshprc.com',
    password: 'ChangeThisPassword123'
  })
})
.then(r => r.json())
.then(console.log)
```

Or use this curl command:

```bash
curl -X POST https://your-railway-url.up.railway.app/api/setup/create-first-admin \
  -H "Content-Type: application/json" \
  -d '{"name":"Admin","email":"admin@sparshprc.com","password":"ChangeThisPassword123"}'
```

---

## 🎉 Done! Access Your Website

### Public Website
👉 **https://your-vercel-url.vercel.app**

### Admin Panel
👉 **https://your-vercel-url.vercel.app/login**

**Login:**
- Email: `admin@sparshprc.com`
- Password: `ChangeThisPassword123`

---

## 🔄 Auto-Deploy is Active!

Every time you push code to GitHub:
- ✅ Railway automatically deploys backend
- ✅ Vercel automatically deploys frontend

---

## 📋 Checklist

- [ ] Railway backend deployed
- [ ] MongoDB added to Railway
- [ ] Environment variables added to Railway
- [ ] Vercel frontend deployed
- [ ] VITE_API_URL set in Vercel
- [ ] Admin user created
- [ ] Can login to admin panel
- [ ] Cloudinary credentials added

---

## 🐛 Having Issues?

### Backend won't start?
- Check Railway logs
- Verify MONGODB_URI is set
- Check root directory = `backend`

### Frontend can't connect?
- Check VITE_API_URL in Vercel
- Make sure Railway backend is running
- Check CORS settings

### Can't create admin?
- Test: `curl https://your-railway-url/api/health`
- Check Railway logs for errors

---

## 📞 Need the detailed guide?

See **AUTO_DEPLOY_RAILWAY.md** for step-by-step instructions with screenshots!

---

**Total Time: ~10 minutes**  
**Difficulty: Easy** ✨

