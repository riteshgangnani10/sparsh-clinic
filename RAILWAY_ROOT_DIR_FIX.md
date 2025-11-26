# Railway Fresh Deployment - Step by Step

## 🚀 Start Fresh Deployment

Since Railway is looking at the wrong directory, let's set it up correctly from scratch.

---

## Step 1: Delete Current Service (Optional)

In Railway dashboard:
1. Click on your service
2. Go to Settings
3. Scroll to bottom
4. Click "Remove Service" (don't worry, your code is safe in GitHub)

---

## Step 2: Create New Service with Correct Root

1. In your Railway project, click **"+ New"**
2. Select **"GitHub Repo"**
3. Choose **"sparsh-clinic"** repository
4. **IMPORTANT**: Before clicking deploy, look for "Root Directory" or "Configure"
5. Set **Root Directory** to: `backend`
6. Click **"Deploy"**

---

## Step 3: Or Use Railway CLI (Fastest)

If the web UI is confusing, use CLI from your terminal:

```bash
# Make sure you're in the project root
cd "/Users/riteshgangnani/Desktop/Work/Client Work/sparsh"

# Link to Railway (if not already linked)
railway link

# Set the root directory
railway config set root backend

# Deploy
railway up
```

But this requires `railway login` which we know has token issues...

---

## Step 4: Alternative - Move Files to Root (Not Recommended)

We could move backend files to root, but that's messy. Better to set Root Directory properly.

---

## 🎯 What Railway Should See

Once Root Directory is set to `backend`, Railway will see:

```
backend/
├── package.json          ← This tells Railway it's Node.js!
├── nixpacks.toml         ← This tells Railway how to build
├── railway.json          ← This has Railway config
├── src/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   └── ...
└── ...
```

---

## ✅ Expected Build Output

After setting Root Directory correctly:

```
[Region: asia-southeast1]
Using Nixpacks
Found package.json - Node.js project detected
Installing Node.js 20
Running npm install
✓ Dependencies installed
Starting with npm start
✓ Server running on port 5001
✓ Deployment successful
```

---

## 📞 Can't Find Root Directory Setting?

Send me a screenshot of your Railway settings page and I'll point you to exactly where it is!

Or try this:
1. Click your service name
2. Look for tabs: Overview / Deployments / Settings / Variables
3. Click **Settings**
4. Scroll through - it's usually near the top under "Source" or "Service" section

