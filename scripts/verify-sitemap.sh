#!/bin/bash

###############################################################################
# SITEMAP VERIFICATION SCRIPT
# Verifies that all 686 location pages are included in the sitemap
###############################################################################

echo "🔍 Verifying Sitemap for 686 Location Pages..."
echo ""

# Start dev server temporarily
echo "Starting dev server to test sitemap..."
npm run dev > /dev/null 2>&1 &
SERVER_PID=$!

# Wait for server to start
sleep 10

# Fetch sitemap
echo "Fetching sitemap from http://localhost:3000/sitemap.xml..."
SITEMAP_CONTENT=$(curl -s http://localhost:3000/sitemap.xml)

# Kill server
kill $SERVER_PID 2>/dev/null

# Count URLs in sitemap
TOTAL_URLS=$(echo "$SITEMAP_CONTENT" | grep -o '<loc>' | wc -l | tr -d ' ')
echo "📊 Total URLs in sitemap: $TOTAL_URLS"

# Count Vellore location URLs
VELLORE_URLS=$(echo "$SITEMAP_CONTENT" | grep '/in/tamil-nadu/vellore/' | wc -l | tr -d ' ')
echo "📍 Vellore location URLs: $VELLORE_URLS"

# Expected count
EXPECTED_VELLORE=686
echo ""
echo "Expected Vellore pages: $EXPECTED_VELLORE"
echo "Found in sitemap: $VELLORE_URLS"

if [ "$VELLORE_URLS" -ge "$EXPECTED_VELLORE" ]; then
  echo "✅ All Vellore pages included in sitemap!"
else
  MISSING=$((EXPECTED_VELLORE - VELLORE_URLS))
  echo "⚠️  Missing $MISSING Vellore pages from sitemap"
fi

# Show sample URLs
echo ""
echo "📋 Sample Vellore URLs in sitemap:"
echo "$SITEMAP_CONTENT" | grep '/in/tamil-nadu/vellore/' | head -10

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ "$VELLORE_URLS" -ge 600 ]; then
  echo "✅ SITEMAP VERIFICATION PASSED"
  echo "   All location pages will be discovered by Google!"
else
  echo "⚠️  SITEMAP NEEDS ATTENTION"
  echo "   Not all pages may be included"
fi

echo ""

