# 🧪 Test Your Backend API

## ✅ Your Backend is Live!

**URL**: https://sparsh-clinic-production.up.railway.app/

---

## 🎯 Quick Tests (Wait 2-3 minutes for redeploy)

### 1. Test Root Endpoint
```bash
# Should show API info (no more "Cannot GET /")
curl https://sparsh-clinic-production.up.railway.app/
```

**Expected Response:**
```json
{
  "message": "🏥 Sparsh Pediatric Rehabilitation Clinic API",
  "status": "running",
  "version": "1.0.0",
  "endpoints": {
    "health": "/api/health",
    "setup": "/api/setup/create-first-admin",
    "auth": "/api/auth",
    "services": "/api/services"
  }
}
```

### 2. Test Health Endpoint
```bash
curl https://sparsh-clinic-production.up.railway.app/api/health
```

**Expected Response:**
```json
{"status":"OK","message":"Sparsh Clinic API is running"}
```

### 3. Create First Admin User
```bash
curl -X POST https://sparsh-clinic-production.up.railway.app/api/setup/create-first-admin \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@sparshclinic.com",
    "password": "admin123456"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "First admin user created successfully",
  "user": {
    "id": "...",
    "name": "Admin User",
    "email": "admin@sparshclinic.com"
  }
}
```

---

## 🌐 Test in Browser

### Option 1: Direct URL
Open in browser: **https://sparsh-clinic-production.up.railway.app/**

You should see the API info JSON (not "Cannot GET /" anymore!)

### Option 2: Health Check
Open: **https://sparsh-clinic-production.up.railway.app/api/health**

---

## 🔧 If Tests Fail

### DNS Issues (curl: could not resolve host)
- Wait 5-10 minutes for DNS propagation
- Try from a different network/device

### 500 Errors
- Check Railway logs: Project → Backend Service → Deployments → Latest → View Logs
- Look for MongoDB connection errors

### 404 Errors
- Make sure Railway redeployed after the latest push
- Check if the deployment is successful (green checkmark)

---

## ✅ Next Steps After Backend Works

1. **Test all endpoints** ✓
2. **Create admin user** ✓
3. **Deploy frontend** (next step)
4. **Connect frontend to backend**
5. **Test full application**

---

## 🚀 Ready for Frontend?

Once your backend tests pass, we can deploy the frontend to Railway as well!
