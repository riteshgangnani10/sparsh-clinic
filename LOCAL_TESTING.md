# 🧪 Local Testing Guide - Sparsh Clinic

## ✅ Test Everything Locally Before Deploying!

This guide will help you set up and test the entire application locally before deploying to Railway.

---

## 📋 Prerequisites

- ✅ Node.js 18+ installed
- ✅ MongoDB (local or Atlas)
- ✅ Cloudinary account (free tier works)

---

## 🗄️ Step 1: Set Up MongoDB

### Option A: MongoDB Atlas (Recommended - Free & Easy)

1. **Sign up**: Go to https://www.mongodb.com/cloud/atlas
2. **Create Free Cluster**: 
   - Choose FREE tier (M0)
   - Select region closest to you
   - Click "Create Cluster"
3. **Create Database User**:
   - Go to "Database Access"
   - Click "Add New Database User"
   - Username: `sparsh-admin`
   - Password: Generate secure password (save it!)
   - Database User Privileges: "Read and write to any database"
4. **Whitelist IP**:
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for local testing)
5. **Get Connection String**:
   - Go to "Database" → "Connect"
   - Click "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Example: `mongodb+srv://sparsh-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/sparsh-clinic?retryWrites=true&w=majority`

### Option B: Local MongoDB (If Installed)

If you have MongoDB installed locally:

```bash
# Start MongoDB (macOS)
brew services start mongodb-community

# Or Linux
sudo systemctl start mongod

# Connection string:
MONGODB_URI=mongodb://localhost:27017/sparsh-clinic
```

---

## 🔐 Step 2: Set Up Cloudinary (For Image Uploads)

1. **Sign up**: Go to https://cloudinary.com/users/register/free
2. **Get Credentials**:
   - Go to Dashboard
   - Copy:
     - Cloud Name
     - API Key
     - API Secret

---

## ⚙️ Step 3: Configure Backend

1. **Copy environment file**:
   ```bash
   cd backend
   cp .env.example .env
   ```

2. **Edit `.env` file** and fill in:
   ```bash
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=any-random-string-for-local-testing
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start backend**:
   ```bash
   npm run dev
   ```

   You should see:
   ```
   ✅ MongoDB Connected: cluster0.xxxxx.mongodb.net
   🚀 Server running on port 5001
   ```

---

## 🎨 Step 4: Configure Frontend

1. **Create frontend `.env` file**:
   ```bash
   cd frontend
   ```

   Create `.env` file:
   ```bash
   VITE_API_URL=http://localhost:5001/api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start frontend**:
   ```bash
   npm run dev
   ```

   Frontend will run on: http://localhost:5173

---

## ✅ Step 5: Test Everything

### Test Backend API:

```bash
# Health check
curl http://localhost:5001/api/health

# Should return:
# {"status":"OK","message":"Sparsh Clinic API is running"}
```

### Test Frontend:

1. Open browser: http://localhost:5173
2. You should see the Sparsh Clinic homepage

### Create Admin User:

```bash
curl -X POST http://localhost:5001/api/setup/create-first-admin \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin",
    "email": "admin@sparshprc.com",
    "password": "admin123"
  }'
```

### Test Admin Login:

1. Go to: http://localhost:5173/login
2. Login with:
   - Email: `admin@sparshprc.com`
   - Password: `admin123`

---

## 🐛 Troubleshooting

### MongoDB Connection Failed?

- Check your `MONGODB_URI` in `.env`
- Make sure MongoDB Atlas IP whitelist includes your IP
- Verify username/password are correct
- Check if cluster is running (Atlas dashboard)

### Backend Won't Start?

- Check if port 5001 is available:
  ```bash
  lsof -i :5001
  ```
- If port is in use, change `PORT` in `.env`

### Frontend Can't Connect to Backend?

- Verify `VITE_API_URL=http://localhost:5001/api` in frontend `.env`
- Make sure backend is running
- Check browser console for CORS errors

### Images Not Uploading?

- Verify Cloudinary credentials in backend `.env`
- Check backend logs for Cloudinary errors

---

## 📝 Testing Checklist

- [ ] MongoDB connected (check backend logs)
- [ ] Backend running on http://localhost:5001
- [ ] Frontend running on http://localhost:5173
- [ ] Health endpoint works: `/api/health`
- [ ] Admin user created successfully
- [ ] Can login to admin panel
- [ ] Can upload images (test in admin panel)
- [ ] Can create/edit content (services, testimonials, etc.)

---

## 🚀 Once Everything Works Locally

After you've tested everything locally and it's working:

1. **Commit your `.env.example`** (not `.env` - that's gitignored)
2. **Push to GitHub**
3. **Deploy to Railway** with the same environment variables

---

## 💡 Pro Tips

- Keep `.env` files local (they're gitignored)
- Use different JWT_SECRET for production
- Test image uploads before deploying
- Test admin login flow
- Test all CRUD operations

---

**Ready to test? Start with Step 1!** 🎯

