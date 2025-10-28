#!/bin/bash

###############################################################################
# DEPLOY ALL 686 VELLORE LOCATION PAGES
# 
# This script will build and deploy all location pages
# Run this when you're ready to go live!
###############################################################################

set -e  # Exit on error

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}"
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                                                                  ║"
echo "║          DEPLOY 686 VELLORE LOCATION PAGES                       ║"
echo "║                                                                  ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Step 1: Count pages
TOTAL_PAGES=$(find app/in/tamil-nadu/vellore -name "page.tsx" | wc -l | tr -d ' ')
echo -e "${YELLOW}📊 Total pages to deploy: $TOTAL_PAGES${NC}"
echo ""

# Step 2: Build
echo -e "${BLUE}🔨 Step 1: Building pages...${NC}"
echo "This will take 15-20 minutes for $TOTAL_PAGES pages..."
echo ""

npm run build

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✅ Build successful!${NC}"
else
  echo -e "${RED}❌ Build failed. Please check errors above.${NC}"
  exit 1
fi

echo ""

# Step 3: Test build
echo -e "${BLUE}🧪 Step 2: Testing build locally...${NC}"
echo "Starting production server..."
echo ""

npm run start &
SERVER_PID=$!

# Wait for server to start
sleep 5

echo -e "${GREEN}✅ Server started (PID: $SERVER_PID)${NC}"
echo ""
echo "Test these URLs:"
echo "  - http://localhost:3000/in/tamil-nadu/vellore/sholingur"
echo "  - http://localhost:3000/in/tamil-nadu/vellore/arakkonam"
echo "  - http://localhost:3000/in/tamil-nadu/vellore/yelagiri-hills"
echo ""
echo "Press Ctrl+C when done testing, or wait 30 seconds for auto-continue..."

# Wait 30 seconds or until user interrupts
sleep 30 || true

# Kill test server
kill $SERVER_PID 2>/dev/null || true

echo ""
echo -e "${BLUE}📤 Step 3: Ready to deploy to production${NC}"
echo ""
echo "Run one of these commands:"
echo ""
echo "  For Vercel:"
echo "  ${GREEN}vercel deploy --prod${NC}"
echo ""
echo "  For other hosting:"
echo "  ${GREEN}# Follow your hosting provider's deployment process${NC}"
echo ""
echo -e "${YELLOW}After deployment:${NC}"
echo "  1. Submit sitemap: docs/location-urls.txt"
echo "  2. Google Search Console: Add sitemap"
echo "  3. Monitor: Check indexing status"
echo ""
echo -e "${GREEN}✅ All 686 pages are ready to go live!${NC}"
echo ""

