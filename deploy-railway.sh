#!/bin/bash

echo "🚂 Railway Deployment - Automated Script"
echo "=========================================="
echo ""

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "📦 Installing Railway CLI..."
    npm install -g @railway/cli
fi

echo "🔐 Logging into Railway..."
echo ""
echo "⚠️  A browser window will open for authentication."
echo "   Please login with your Railway account."
echo ""

railway login

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Railway login successful!"
    echo ""
    
    # Navigate to backend
    cd "$(dirname "$0")/backend"
    
    echo "🚀 Creating new Railway project..."
    railway init -n sparsh-clinic-backend
    
    echo ""
    echo "📝 Setting environment variables..."
    
    # Set all required environment variables
    railway variables set PORT=5000
    railway variables set NODE_ENV=production
    railway variables set JWT_SECRET="sparsh-clinic-prod-$(openssl rand -hex 16)"
    railway variables set CLOUDINARY_CLOUD_NAME=demo
    railway variables set CLOUDINARY_API_KEY=demo
    railway variables set CLOUDINARY_API_SECRET=demo
    railway variables set EMAIL_HOST=smtp.gmail.com
    railway variables set EMAIL_PORT=587
    railway variables set EMAIL_USER=demo@example.com
    railway variables set EMAIL_PASSWORD=demo
    railway variables set EMAIL_FROM=noreply@sparshprc.com
    railway variables set EMAIL_TO=sparshprc@gmail.com
    railway variables set FRONTEND_URL=http://localhost:3000
    railway variables set ADMIN_EMAIL=admin@sparshprc.com
    railway variables set ADMIN_PASSWORD=changeThisPassword123!
    
    echo ""
    echo "🗄️  Adding MongoDB..."
    echo "   Run this command after the script completes:"
    echo "   railway add --database mongodb"
    echo ""
    echo "   Then get the connection string:"
    echo "   railway variables"
    echo ""
    echo "   And set it:"
    echo "   railway variables set MONGODB_URI=<your-connection-string>"
    echo ""
    
    echo "🚀 Deploying to Railway..."
    railway up
    
    echo ""
    echo "✅ Backend deployed!"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Add MongoDB: railway add --database mongodb"
    echo "   2. Set MONGODB_URI variable with connection string"
    echo "   3. Seed database: railway run npm run seed"
    echo "   4. Note your backend URL from Railway dashboard"
    echo "   5. Deploy frontend to Vercel"
    echo ""
    
else
    echo ""
    echo "❌ Railway login failed."
    echo ""
    echo "Please login manually:"
    echo "   1. Run: railway login"
    echo "   2. Then run this script again"
    echo ""
fi

