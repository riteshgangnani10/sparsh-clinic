# Deploy Both Frontend + Backend on Railway

## 🎯 Complete Railway-Only Setup

If you want to host everything on Railway, here's how:

---

## Architecture

```
Railway Project
├── Backend Service (Node.js API)
├── Frontend Service (Static React build served by Node)
└── MongoDB Service (Database)
```

---

## Step 1: Deploy Backend (You're doing this now!)

1. **Set Root Directory**: `backend`
2. **Add MongoDB**: + New → Database → MongoDB
3. **Add Environment Variables**:
```bash
NODE_ENV=production
PORT=5001
JWT_SECRET=your-secret-key
MONGODB_URI=${{MongoDB.MONGODB_URI}}
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
FRONTEND_URL=https://your-frontend.railway.app
```
4. **Deploy**
5. **Note your backend URL**: e.g., `https://backend-production.railway.app`

---

## Step 2: Deploy Frontend on Railway

1. In your Railway project, click **"+ New"**
2. Select **"GitHub Repo"**
3. Choose **`sparsh-clinic`** again
4. **Set Root Directory**: `frontend`
5. **Add Environment Variable**:
```bash
VITE_API_URL=https://your-backend-url.railway.app/api
```
6. Railway will auto-detect Vite and build it
7. **Deploy**

---

## Step 3: Serve Frontend Build (Need a Server)

The problem: Railway needs a Node server to serve the static files.

### Option A: Use a Simple Express Server

Create this file: `frontend/server.js`

```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});
```

Update `frontend/package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "start": "node server.js"  // ← Add this
  },
  "dependencies": {
    "express": "^4.18.2"  // ← Add this
  }
}
```

Railway build settings:
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

---

## Cost Comparison

### Railway Only (Both Services):
- Backend: ~$3-5/month
- Frontend: ~$3-5/month
- MongoDB: ~$2-3/month
- **Total: ~$8-13/month** ⚠️ May exceed $5 free tier

### Railway + Vercel (Recommended):
- Backend (Railway): ~$3-5/month
- Frontend (Vercel): **$0** ✅
- MongoDB (Railway): ~$2-3/month
- **Total: ~$5-8/month** (within or close to free tier)

---

## ⚡ Performance Comparison

| Feature | Railway (Both) | Railway + Vercel |
|---------|----------------|------------------|
| Backend Speed | ✅ Fast | ✅ Fast |
| Frontend Speed | ⚠️ OK | ✅ Very Fast (CDN) |
| Global CDN | ❌ No | ✅ Yes |
| Auto SSL | ✅ Yes | ✅ Yes |
| Cost | ⚠️ Higher | ✅ Lower |
| Setup Complexity | ⚠️ Medium | ✅ Easy |
| Deploy Time | ⚠️ Slower | ✅ Faster |

---

## My Recommendation

**Use Railway for Backend + Vercel for Frontend**

Why?
1. It's FREE (Vercel frontend)
2. Faster performance (CDN)
3. Industry standard
4. Better SEO (Vercel optimization)
5. Saves Railway credits for what matters (backend/database)

---

## But If You Insist on Railway-Only...

I can set it up! Just let me know and I'll:
1. Create the frontend server.js
2. Update package.json
3. Push to GitHub
4. Guide you through deploying both services

**What would you prefer?** 🤔

