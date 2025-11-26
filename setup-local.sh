#!/bin/bash

# Quick Local Setup Script for Sparsh Clinic
# This script helps you set up the local development environment

echo "🚀 Sparsh Clinic - Local Setup"
echo "=============================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ required. You have: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Setup Backend
echo "📦 Setting up Backend..."
cd backend

if [ ! -f .env ]; then
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
    echo ""
    echo "⚠️  IMPORTANT: Edit backend/.env and add:"
    echo "   - MONGODB_URI (from MongoDB Atlas)"
    echo "   - CLOUDINARY credentials"
    echo "   - JWT_SECRET"
    echo ""
    echo "Press Enter after you've edited .env file..."
    read
else
    echo "✅ .env file already exists"
fi

echo "📦 Installing backend dependencies..."
npm install

echo ""
echo "✅ Backend setup complete!"
echo ""

# Setup Frontend
cd ../frontend
echo "📦 Setting up Frontend..."

if [ ! -f .env ]; then
    echo "📝 Creating frontend/.env file..."
    echo "VITE_API_URL=http://localhost:5001/api" > .env
    echo "✅ Created frontend/.env"
else
    echo "✅ Frontend .env already exists"
fi

echo "📦 Installing frontend dependencies..."
npm install

echo ""
echo "✅ Frontend setup complete!"
echo ""

# Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Setup Complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Make sure MongoDB is set up:"
echo "   - Option A: MongoDB Atlas (free): https://www.mongodb.com/cloud/atlas"
echo "   - Option B: Local MongoDB (if installed)"
echo ""
echo "2. Edit backend/.env and add your MongoDB connection string"
echo ""
echo "3. Start Backend:"
echo "   cd backend && npm run dev"
echo ""
echo "4. Start Frontend (in another terminal):"
echo "   cd frontend && npm run dev"
echo ""
echo "5. Open browser: http://localhost:5173"
echo ""
echo "📖 For detailed instructions, see: LOCAL_TESTING.md"
echo ""

