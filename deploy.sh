#!/bin/bash

###############################################################################
# DEPLOYMENT SCRIPT FOR 841 PAGES
# Deploys Vellore (686) + Chennai (155) pages to Vercel
###############################################################################

echo "╔══════════════════════════════════════════════════════════════════════════╗"
echo "║                                                                          ║"
echo "║              🚀 DEPLOYING 841 PAGES TO VERCEL 🚀                        ║"
echo "║                                                                          ║"
echo "╚══════════════════════════════════════════════════════════════════════════╝"
echo ""
echo "📊 Deployment Summary:"
echo "  • Vellore pages: 686"
echo "  • Chennai pages: 155"
echo "  • Total pages: 841"
echo "  • Expected build time: 20-25 minutes"
echo "  • Expected deploy time: 5-10 minutes"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
  echo ""
fi

# Build the project
echo "🏗️  Building project (this will take 20-25 minutes for 841 pages)..."
echo ""
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Build successful!"
  echo ""
  echo "🚀 Deploying to Vercel..."
  echo ""
  
  # Deploy using npx (no installation needed)
  npx vercel --prod
  
  if [ $? -eq 0 ]; then
    echo ""
    echo "╔══════════════════════════════════════════════════════════════════════════╗"
    echo "║                                                                          ║"
    echo "║                    ✅ DEPLOYMENT SUCCESSFUL! ✅                         ║"
    echo "║                                                                          ║"
    echo "╚══════════════════════════════════════════════════════════════════════════╝"
    echo ""
    echo "📋 Next Steps:"
    echo ""
    echo "1. ✅ Verify deployment:"
    echo "   Visit: https://www.dentalclinicinvellore.in"
    echo ""
    echo "2. 📍 Test location pages:"
    echo "   • Chennai: https://www.dentalclinicinvellore.in/in/tamil-nadu/chennai/anna-nagar"
    echo "   • Vellore: https://www.dentalclinicinvellore.in/in/tamil-nadu/vellore/arakkonam"
    echo ""
    echo "3. 🗺️  Submit sitemaps to Google Search Console:"
    echo "   • https://www.dentalclinicinvellore.in/sitemap.xml"
    echo "   • https://www.dentalclinicinvellore.in/vellore-locations-sitemap.xml"
    echo "   • https://www.dentalclinicinvellore.in/chennai-locations-sitemap.xml"
    echo ""
    echo "4. 📊 Monitor indexing:"
    echo "   • Google Search Console > Coverage"
    echo "   • Expected: 100-200 pages indexed in Week 1"
    echo "   • Expected: All 841 pages indexed in 4-6 weeks"
    echo ""
    echo "🎉 Congratulations! Your 841 pages are now live!"
    echo ""
  else
    echo ""
    echo "❌ Deployment failed. Please check the error above."
    echo ""
  fi
else
  echo ""
  echo "❌ Build failed. Please check the error above."
  echo ""
fi

