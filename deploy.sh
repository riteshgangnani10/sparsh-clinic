#!/bin/bash

echo "🚂 Sparsh Clinic - Railway Deployment Helper"
echo "============================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Sparsh Clinic website"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "📋 Next Steps:"
echo ""
echo "1️⃣  Push to GitHub:"
echo "   - Create a new repository at: https://github.com/new"
echo "   - Name it: sparsh-clinic"
echo "   - Then run:"
echo "     git remote add origin https://github.com/YOUR_USERNAME/sparsh-clinic.git"
echo "     git branch -M main"
echo "     git push -u origin main"
echo ""
echo "2️⃣  Deploy to Railway:"
echo "   - Sign up at: https://railway.app"
echo "   - Create new project from GitHub"
echo "   - Add MongoDB database (click 'New' → 'Database' → 'MongoDB')"
echo "   - Add backend service (select your repo, set root directory to 'backend')"
echo "   - Add environment variables (see RAILWAY_DEPLOYMENT.md)"
echo ""
echo "3️⃣  Get Cloudinary Credentials:"
echo "   - Sign up at: https://cloudinary.com"
echo "   - Go to dashboard and copy: Cloud Name, API Key, API Secret"
echo "   - Add to Railway environment variables"
echo ""
echo "4️⃣  Deploy Frontend to Vercel:"
echo "   - Install: npm install -g vercel"
echo "   - Run: cd frontend && vercel"
echo "   - Add environment variable: VITE_API_URL=<your-railway-backend-url>/api"
echo ""
echo "📖 For detailed instructions, see: RAILWAY_DEPLOYMENT.md"
echo ""
echo "🎉 Your website will be live in minutes!"

