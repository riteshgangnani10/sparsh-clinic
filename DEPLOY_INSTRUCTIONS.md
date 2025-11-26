# Railway Deployment - Complete Steps

## ✅ Repository Ready
**GitHub**: https://github.com/riteshgangnani10/sparsh-clinic

---

## 🚀 STEP-BY-STEP DEPLOYMENT (10 Minutes)

### Step 1: Open Railway Dashboard

I'll open this for you now. Please follow along:

**URL**: https://railway.app/new

---

### Step 2: Deploy from GitHub

1. Click **"Deploy from GitHub repo"**
2. If asked to connect GitHub, click **"Configure GitHub App"**
3. Select repository: **riteshgangnani10/sparsh-clinic**
4. Click **"Deploy Now"**

---

### Step 3: Configure Backend Service

After deployment starts:

1. Click on the service that was created
2. Go to **"Settings"** tab
3. Under **"Source"**, set:
   - **Root Directory**: `backend`
   - **Start Command**: `npm start`
4. Click **"Save"**

---

### Step 4: Add Environment Variables

Click on **"Variables"** tab and add these:

```bash
PORT=5000
NODE_ENV=production
JWT_SECRET=sparsh-clinic-secret-2024-xyz-$(date +%s)
CLOUDINARY_CLOUD_NAME=demo
CLOUDINARY_API_KEY=demo
CLOUDINARY_API_SECRET=demo
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=demo@example.com
EMAIL_PASSWORD=demo
EMAIL_FROM=noreply@sparshprc.com
EMAIL_TO=sparshprc@gmail.com
FRONTEND_URL=http://localhost:3000
ADMIN_EMAIL=admin@sparshprc.com
ADMIN_PASSWORD=changeThisPassword123!
```

**Copy-Paste Ready Format:**
```
PORT=5000
NODE_ENV=production
JWT_SECRET=sparsh-secret-prod-2024-xyz
CLOUDINARY_CLOUD_NAME=demo
CLOUDINARY_API_KEY=demo
CLOUDINARY_API_SECRET=demo
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=demo@example.com
EMAIL_PASSWORD=demo
EMAIL_FROM=noreply@sparshprc.com
EMAIL_TO=sparshprc@gmail.com
FRONTEND_URL=http://localhost:3000
ADMIN_EMAIL=admin@sparshprc.com
ADMIN_PASSWORD=changeThisPassword123!
```

---

### Step 5: Add MongoDB Database

1. In your Railway project, click **"New"** button
2. Select **"Database"**
3. Click **"Add MongoDB"**
4. Railway will create a MongoDB instance
5. Click on MongoDB service
6. Go to **"Connect"** tab
7. Copy the **"MongoDB Connection URL"** (starts with `mongodb://`)
8. Go back to your backend service
9. Click **"Variables"**
10. Add new variable:
    - Name: `MONGODB_URI`
    - Value: (paste the MongoDB connection URL)

---

### Step 6: Wait for Deployment

- Backend will automatically redeploy with MongoDB
- Watch the **"Deployments"** tab
- Wait for status: **"Success ✓"**
- Note your backend URL (e.g., `sparsh-clinic-production.up.railway.app`)

---

### Step 7: Seed Database

Open terminal and run:

```bash
cd "/Users/riteshgangnani/Desktop/Work/Client Work/sparsh/backend"

# Set the MongoDB connection string from Railway
export MONGODB_URI="<your-railway-mongodb-url>"

# Run seed
npm run seed
```

---

### Step 8: Deploy Frontend to Vercel

```bash
cd "/Users/riteshgangnani/Desktop/Work/Client Work/sparsh/frontend"
npx vercel
```

When prompted:
- Set up and deploy: **Y**
- Which scope: (select your account)
- Link to existing project: **N**
- Project name: **sparsh-clinic** (or press enter)
- In which directory: **./** (press enter)
- Override settings: **N**

**Add environment variable:**
When asked about environment variables, add:
```
VITE_API_URL=https://your-railway-backend-url.railway.app/api
```

---

### Step 9: Deploy to Production

```bash
npx vercel --prod
```

---

### Step 10: Update FRONTEND_URL

1. Copy your Vercel URL (e.g., `sparsh-clinic.vercel.app`)
2. Go back to Railway
3. Open backend service
4. Go to **"Variables"**
5. Update `FRONTEND_URL` to: `https://your-app.vercel.app`

---

## ✅ DEPLOYMENT COMPLETE!

Your website is now live:

- **Frontend**: https://sparsh-clinic.vercel.app
- **Admin**: https://sparsh-clinic.vercel.app/login
- **Backend**: https://your-backend.railway.app/api

**Login:**
- Email: admin@sparshprc.com
- Password: changeThisPassword123!

---

## 🔧 Troubleshooting

### Backend not starting?
- Check Railway logs: Click service → "Deployments" → View logs
- Verify all environment variables are set

### Frontend can't connect?
- Verify `VITE_API_URL` in Vercel
- Check CORS: Update `FRONTEND_URL` in Railway

### Database seed failed?
- Verify `MONGODB_URI` is correct
- Check MongoDB service is running in Railway

---

**Need the Railway token? You can get a new one:**
1. Go to: https://railway.app/account/tokens
2. Create new token
3. Use it with: `railway login --token YOUR_TOKEN`

---

**Questions? Check DEPLOYMENT_STATUS.md for more details.**

