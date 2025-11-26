# 🚀 Deploy BOTH Frontend + Backend on Railway

## ✅ Everything is Now Configured!

I've set up the project so you can deploy both frontend and backend on Railway.

---

## 📦 What's Ready:

✅ **Root package.json** - Helps Railway detect Node.js project  
✅ **nixpacks.toml** - Tells Railway how to build the backend  
✅ **Frontend Express server** - Serves the React build  
✅ **Frontend build configuration** - Ready for Railway deployment

---

## 🎯 Step-by-Step Deployment

### STEP 1: Deploy Backend Service

1. **In your Railway dashboard**, your current service should now redeploy automatically
2. **If it's still stuck**, click **"Cancel Deployment"** then **"Redeploy"**
3. Watch for these logs:

```
✓ Setting up Node.js 20
✓ Installing dependencies from backend/
✓ Starting with npm start
✓ Server running on port 5001
```

4. **Once deployed**, copy your backend URL (e.g., `https://backend-xxx.railway.app`)

#### Backend Environment Variables:

Make sure these are set in Railway → Variables:

```bash
NODE_ENV=production
PORT=5001
JWT_SECRET=your-super-secret-key-here
MONGODB_URI=${{MongoDB.MONGODB_URI}}
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

---

### STEP 2: Add MongoDB (If Not Already Done)

1. In Railway project, click **"+ New"**
2. Select **"Database"**
3. Choose **"Add MongoDB"**
4. Railway auto-generates `MONGODB_URI`
5. Your backend should auto-link to it

---

### STEP 3: Deploy Frontend Service

1. In your Railway project, click **"+ New"**
2. Select **"GitHub Repo"**
3. Choose **`sparsh-clinic`** (same repo)
4. ⚠️ **IMPORTANT**: Set **Root Directory** to `frontend`
5. Add Environment Variable:

```bash
VITE_API_URL=https://your-backend-url.railway.app/api
```

(Replace with your actual backend URL from Step 1)

6. Click **"Deploy"**

---

### STEP 4: How Frontend Deployment Works

Railway will:
1. ✅ Detect Node.js from `frontend/package.json`
2. ✅ Run `npm install`
3. ✅ Run `npm run build` (creates static files in `dist/`)
4. ✅ Start Express server with `npm start`
5. ✅ Express serves the static React build

---

### STEP 5: Update Backend CORS

Once you have your frontend URL, update backend environment variables:

```bash
FRONTEND_URL=https://your-frontend-url.railway.app
```

This allows the frontend to connect to the backend.

---

### STEP 6: Create Admin User

After both are deployed:

```bash
curl -X POST https://your-backend-url.railway.app/api/setup/create-first-admin \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin",
    "email": "admin@sparshprc.com",
    "password": "ChangeThisPassword123"
  }'
```

---

## 🎉 You're Done!

### Your Services:

1. **Backend API**: `https://backend-xxx.railway.app`
   - Test: `https://backend-xxx.railway.app/api/health`

2. **Frontend Website**: `https://frontend-xxx.railway.app`
   - Visit to see your website

3. **Admin Panel**: `https://frontend-xxx.railway.app/login`
   - Login with admin credentials

4. **MongoDB**: Runs as a separate service in Railway

---

## 🔧 Troubleshooting

### Backend Still Won't Build?

If still stuck on "No changed files matched patterns":

1. **Cancel the deployment**
2. Go to **Settings**
3. Look for **"Root Directory"**
4. Set it to: `backend`
5. **Redeploy**

Or just delete the service and create new one:
- Click **"+ New"** → **"GitHub Repo"** → **sparsh-clinic**
- Set **Root Directory** to `backend` BEFORE deploying

### Frontend Build Fails?

Check these:
- Root Directory must be `frontend`
- `VITE_API_URL` environment variable is set
- Backend URL is correct (with `/api` at the end)

### Can't Login?

- Make sure admin user was created
- Check JWT_SECRET is set in backend
- Check browser console for errors

---

## 💰 Cost Estimate (Railway Only)

With both on Railway:

- Backend: ~$3-5/month
- Frontend: ~$3-5/month  
- MongoDB: ~$2-3/month
- **Total: ~$8-13/month**

⚠️ **This may exceed the $5 free tier.**

---

## 📊 Your Railway Project Structure

```
Sparsh Clinic Project
│
├── 🟢 Backend Service
│   ├── Root: backend/
│   ├── Port: 5001
│   └── Env: NODE_ENV, JWT_SECRET, MONGODB_URI, etc.
│
├── 🟢 Frontend Service
│   ├── Root: frontend/
│   ├── Port: 3000
│   └── Env: VITE_API_URL
│
└── 🟢 MongoDB Database
    └── Auto-linked to backend
```

---

## 🚦 Deployment Checklist

### Backend:
- [ ] Root Directory = `backend` (or root if using root package.json)
- [ ] MongoDB service added
- [ ] All environment variables set
- [ ] Deployment successful
- [ ] `/api/health` endpoint works

### Frontend:
- [ ] Root Directory = `frontend`
- [ ] `VITE_API_URL` set to backend URL
- [ ] Build successful
- [ ] Website loads
- [ ] Can access admin login

### Final:
- [ ] Admin user created
- [ ] Can login to admin panel
- [ ] Backend CORS updated with frontend URL
- [ ] Test image upload (Cloudinary)

---

**The code is pushed! Now redeploy your backend service in Railway.** 🚀

If it's still stuck, **cancel the current deployment** and click **"Redeploy"** to pick up the new changes!

