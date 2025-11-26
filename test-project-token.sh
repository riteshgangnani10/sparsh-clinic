#!/bin/bash

# Railway Project Token Tester
# Tests if your Railway PROJECT token is valid

echo "🧪 Railway Project Token Tester"
echo "================================"
echo ""

# Check if token is provided
if [ -z "$1" ]; then
    echo "❌ No project token provided!"
    echo ""
    echo "Usage: ./test-project-token.sh YOUR_PROJECT_TOKEN"
    echo ""
    echo "📖 How to get a PROJECT token:"
    echo "1. Go to https://railway.app/dashboard"
    echo "2. Select your project (or create one)"
    echo "3. Go to Settings > Tokens"
    echo "4. Click 'Create Token'"
    echo "5. Copy the PROJECT token (not personal token)"
    echo ""
    echo "⚠️  Note: PROJECT tokens are different from PERSONAL API tokens"
    exit 1
fi

PROJECT_TOKEN="$1"

echo "📝 Token length: ${#PROJECT_TOKEN} characters"
echo "🔍 Testing project token validity..."
echo ""

# Test the project token with Railway API
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
  https://backboard.railway.com/graphql/v2 \
  -H "Project-Access-Token: $PROJECT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"query":"query { projectToken { projectId environmentId } }"}')

# Extract HTTP code and body
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

echo "📊 HTTP Status Code: $HTTP_CODE"
echo "📄 Response:"
echo "$BODY" | jq '.' 2>/dev/null || echo "$BODY"
echo ""

if [ "$HTTP_CODE" = "200" ]; then
    if echo "$BODY" | grep -q '"errors"'; then
        echo "❌ Project token is INVALID or EXPIRED"
        echo ""
        echo "Common issues:"
        echo "- Token might be expired"
        echo "- Token might not have correct permissions"
        echo "- You might be using a personal token instead of project token"
        echo ""
        echo "Please generate a new PROJECT token:"
        echo "1. Go to https://railway.app/dashboard"
        echo "2. Select your project"
        echo "3. Settings > Tokens > Create Token"
    else
        echo "✅ Project token is VALID!"
        echo ""
        PROJECT_ID=$(echo "$BODY" | jq -r '.data.projectToken.projectId' 2>/dev/null)
        ENV_ID=$(echo "$BODY" | jq -r '.data.projectToken.environmentId' 2>/dev/null)
        
        if [ "$PROJECT_ID" != "null" ] && [ -n "$PROJECT_ID" ]; then
            echo "📦 Project ID: $PROJECT_ID"
            echo "🌍 Environment ID: $ENV_ID"
            echo ""
            echo "🎉 This token works!"
            echo ""
            echo "However, for CLI deployment, you need a PERSONAL API token, not a project token."
            echo ""
            echo "To get a PERSONAL API token:"
            echo "1. Go to https://railway.app/account/tokens (account settings, not project settings)"
            echo "2. Click 'Create Token'"
            echo "3. Copy and test with: ./test-railway-token.sh <token>"
        else
            echo "⚠️  Could not extract project details"
        fi
    fi
else
    echo "❌ Token test failed with HTTP $HTTP_CODE"
    echo ""
    echo "Common issues:"
    echo "- Token might have extra spaces or newlines"
    echo "- Token might be incomplete"
    echo "- Network connectivity issues"
    echo "- Wrong token type (need project token for this test)"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📚 Token Types Explained:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1️⃣  PERSONAL API TOKEN (for CLI deployment):"
echo "   - Get from: https://railway.app/account/tokens"
echo "   - Used with: railway login --token <TOKEN>"
echo "   - Can access all your projects"
echo ""
echo "2️⃣  PROJECT TOKEN (for specific project API access):"
echo "   - Get from: Project Settings > Tokens"
echo "   - Used with: Project-Access-Token header"
echo "   - Only works for that specific project"
echo ""
echo "For deployment via CLI, you need #1 (Personal API Token)"
echo "For project-specific API calls, you use #2 (Project Token)"

