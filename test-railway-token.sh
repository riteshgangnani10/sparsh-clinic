#!/bin/bash

# Railway Token Tester
# This script tests if your Railway token is valid

echo "🧪 Railway Token Tester"
echo "======================"
echo ""

# Check if token is provided
if [ -z "$1" ]; then
    echo "❌ No token provided!"
    echo ""
    echo "Usage: ./test-railway-token.sh YOUR_RAILWAY_TOKEN"
    echo ""
    echo "To get a token:"
    echo "1. Go to https://railway.app/account/tokens"
    echo "2. Click 'Create Token'"
    echo "3. Copy the token and run: ./test-railway-token.sh <paste-token-here>"
    exit 1
fi

TOKEN="$1"

echo "📝 Token length: ${#TOKEN} characters"
echo "🔍 Testing token validity..."
echo ""

# Test the token with Railway API
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
  https://backboard.railway.app/graphql/v2 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"query":"query { me { id name email } }"}')

# Extract HTTP code and body
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

echo "📊 HTTP Status Code: $HTTP_CODE"
echo "📄 Response:"
echo "$BODY" | jq '.' 2>/dev/null || echo "$BODY"
echo ""

if [ "$HTTP_CODE" = "200" ]; then
    if echo "$BODY" | grep -q '"errors"'; then
        echo "❌ Token is INVALID or EXPIRED"
        echo ""
        echo "Please generate a new token:"
        echo "1. Go to https://railway.app/account/tokens"
        echo "2. Click 'Create Token'"
        echo "3. Copy the new token and test again"
    else
        echo "✅ Token is VALID!"
        echo ""
        echo "Your account details:"
        echo "$BODY" | jq '.data.me' 2>/dev/null || echo "$BODY"
        echo ""
        echo "🎉 You can now deploy! Run:"
        echo "   export RAILWAY_TOKEN='$TOKEN'"
        echo "   ./auto-deploy.sh"
    fi
else
    echo "❌ Token test failed with HTTP $HTTP_CODE"
    echo ""
    echo "Common issues:"
    echo "- Token might have extra spaces or newlines"
    echo "- Token might be incomplete"
    echo "- Network connectivity issues"
fi

echo ""
echo "Need help? Check the documentation at:"
echo "https://docs.railway.app/guides/public-api"

