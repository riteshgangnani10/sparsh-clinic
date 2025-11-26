# 🚀 Quick MongoDB Atlas Setup (2 minutes)

## Step 1: Create Free MongoDB Atlas Account

1. Go to: **https://www.mongodb.com/cloud/atlas/register**
2. Sign up with Google/GitHub (or email)
3. Choose **FREE** tier (M0 Sandbox)

## Step 2: Create Cluster

1. Click **"Build a Database"**
2. Choose **FREE** (M0) tier
3. Select region closest to you (e.g., `us-east-1`)
4. Click **"Create"**
5. Wait 3-5 minutes for cluster to be created

## Step 3: Create Database User

1. Click **"Database Access"** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Username: `sparsh-admin` (or any name)
5. Password: Click **"Autogenerate Secure Password"** (copy it!)
6. Database User Privileges: **"Read and write to any database"**
7. Click **"Add User"**

## Step 4: Whitelist Your IP

1. Click **"Network Access"** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for local testing)
   - Or add your specific IP: `0.0.0.0/0`
4. Click **"Confirm"**

## Step 5: Get Connection String

1. Go back to **"Database"** → Click **"Connect"**
2. Choose **"Connect your application"**
3. Driver: **Node.js**, Version: **5.5 or later**
4. Copy the connection string
   - Example: `mongodb+srv://sparsh-admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

## Step 6: Update Your .env File

Edit `backend/.env`:

```bash
# Replace <password> with your actual password
# Add database name at the end
MONGODB_URI=mongodb+srv://sparsh-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/sparsh-clinic?retryWrites=true&w=majority
```

**Important**: 
- Replace `<password>` with the password you copied
- Add `/sparsh-clinic` before `?retryWrites` (this is your database name)

## Step 7: Test Connection

```bash
cd backend
npm run dev
```

You should see:
```
✅ MongoDB Connected: cluster0.xxxxx.mongodb.net
📊 Database: sparsh-clinic
🚀 Server running on port 5001
```

---

## ✅ That's It!

Your backend will now connect to MongoDB Atlas. No local installation needed!

---

## 🆘 Troubleshooting

### "Authentication failed"
- Check username/password in connection string
- Make sure you replaced `<password>` with actual password

### "IP not whitelisted"
- Go to Network Access → Add IP Address
- Click "Allow Access from Anywhere"

### "Connection timeout"
- Check your internet connection
- Verify cluster is running (green status in Atlas)

---

**Need help? The connection string format is:**
```
mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority
```

