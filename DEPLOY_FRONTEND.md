# 🎨 Deploy Frontend to Railway

## 🎯 Quick Frontend Deployment

### Step 1: Create Frontend Service in Railway

1. **Go to Railway**: https://railway.app/project/698441d9-f267-4ff0-8abf-1851b925887b
2. **Click "+ New"** (next to your existing services)
3. **Select "GitHub Repo"**
4. **Choose "sparsh-clinic"** repository
5. **⚠️ CRITICAL**: Set **Root Directory** to `frontend`

### Step 2: Configure Frontend Service

#### Add Environment Variable:
- **Name**: `VITE_API_URL`
- **Value**: `https://sparsh-clinic-production.up.railway.app`

#### Generate Public Domain:
1. Go to **Settings** tab
2. Scroll to **Public Networking**
3. Click **"Generate Domain"**
4. Copy the generated URL

---

## 🌐 What You'll Get

After deployment, you'll have:

- **Backend API**: https://sparsh-clinic-production.up.railway.app
- **Frontend Website**: https://sparsh-frontend-production-xxxx.up.railway.app

---

## 🎨 Expected Frontend Features

Once deployed, your website will have:

### 🏠 Homepage
- Hero section with clinic branding
- Services overview
- Statistics section
- About section
- Testimonials
- Call-to-action buttons

### 📱 Pages
- **Home**: Main landing page
- **About**: Clinic and doctor information
- **Services**: List of treatments offered
- **Gallery**: Photos and videos
- **Contact**: Contact form and information
- **Admin Login**: Backend management

### 🔐 Admin Panel
- Login with the admin user you create
- Manage content, images, testimonials
- Add/edit services and team members

---

## 🧪 Testing After Deployment

### 1. Test Frontend
Open: `https://your-frontend-domain.railway.app`

### 2. Test Admin Login
1. Go to: `https://your-frontend-domain.railway.app/login`
2. Use the admin credentials you created via API
3. Access the admin dashboard

### 3. Test API Connection
The frontend should connect to your backend automatically.

---

## 🔧 If Frontend Deployment Fails

### Common Issues:

1. **Root Directory Not Set**: Make sure it's set to `frontend`
2. **Build Errors**: Check deployment logs for npm build issues
3. **Environment Variables**: Ensure `VITE_API_URL` is set correctly

### Check Logs:
Railway → Frontend Service → Deployments → Latest → View Logs

---

## 🚀 Ready to Deploy?

Follow the steps above, and in 5-10 minutes you'll have your complete website running!

**Need help?** Let me know which step you're on and I can guide you through it.
