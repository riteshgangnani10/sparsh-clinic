#!/bin/bash

echo "🚂 Railway Automated Deployment Script"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

cd "$(dirname "$0")"

echo -e "${BLUE}Step 1: Railway Login${NC}"
echo "This will open your browser for authentication..."
echo ""

railway login

if [ $? -ne 0 ]; then
    echo ""
    echo -e "${YELLOW}⚠️  Railway login failed.${NC}"
    echo "Please ensure you're logged into Railway and try again."
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Login successful!${NC}"
echo ""

echo -e "${BLUE}Step 2: Creating Railway Project${NC}"
cd backend

# Initialize project
railway init --name sparsh-clinic-backend

echo ""
echo -e "${BLUE}Step 3: Setting Environment Variables${NC}"

# Set all environment variables
echo "Setting PORT..."
railway variables set PORT=5000

echo "Setting NODE_ENV..."
railway variables set NODE_ENV=production

echo "Setting JWT_SECRET..."
railway variables set JWT_SECRET="sparsh-prod-$(openssl rand -hex 16)"

echo "Setting Cloudinary vars (demo)..."
railway variables set CLOUDINARY_CLOUD_NAME=demo
railway variables set CLOUDINARY_API_KEY=demo
railway variables set CLOUDINARY_API_SECRET=demo

echo "Setting Email vars (demo)..."
railway variables set EMAIL_HOST=smtp.gmail.com
railway variables set EMAIL_PORT=587
railway variables set EMAIL_USER=demo@example.com
railway variables set EMAIL_PASSWORD=demo
railway variables set EMAIL_FROM=noreply@sparshprc.com
railway variables set EMAIL_TO=sparshprc@gmail.com

echo "Setting other vars..."
railway variables set FRONTEND_URL=http://localhost:3000
railway variables set ADMIN_EMAIL=admin@sparshprc.com
railway variables set ADMIN_PASSWORD=changeThisPassword123!

echo ""
echo -e "${GREEN}✅ Environment variables set!${NC}"
echo ""

echo -e "${BLUE}Step 4: Deploying Backend${NC}"
railway up

echo ""
echo -e "${GREEN}✅ Backend deployed!${NC}"
echo ""

echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}⚠️  IMPORTANT: Next Steps${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "1. Add MongoDB Database:"
echo "   Run: ${GREEN}railway add${NC}"
echo "   Select: Database → MongoDB"
echo ""
echo "2. Get MongoDB Connection String:"
echo "   Run: ${GREEN}railway variables${NC}"
echo "   Look for: MONGO_URL or DATABASE_URL"
echo ""
echo "3. Set MongoDB URI:"
echo "   Run: ${GREEN}railway variables set MONGODB_URI='<your-connection-string>'${NC}"
echo ""
echo "4. Seed the Database:"
echo "   Run: ${GREEN}railway run npm run seed${NC}"
echo ""
echo "5. Get your Backend URL:"
echo "   Run: ${GREEN}railway domain${NC}"
echo "   Or check Railway dashboard"
echo ""
echo "6. Deploy Frontend:"
echo "   cd ../frontend"
echo "   npx vercel"
echo "   Set VITE_API_URL to your Railway backend URL"
echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${GREEN}🎉 Backend deployment initiated!${NC}"
echo ""
echo "Check status: ${BLUE}railway status${NC}"
echo "View logs: ${BLUE}railway logs${NC}"
echo "Open dashboard: ${BLUE}railway open${NC}"

