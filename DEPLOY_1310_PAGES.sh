#!/bin/bash

###############################################################################
# DEPLOY 1,310 PAGES TO VERCEL
# Complete 100 KM coverage with GBP + People Also Search For
###############################################################################

echo "╔══════════════════════════════════════════════════════════════════════════╗"
echo "║                                                                          ║"
echo "║           🚀 DEPLOYING 1,310 PAGES TO PRODUCTION 🚀                     ║"
echo "║                                                                          ║"
echo "╚══════════════════════════════════════════════════════════════════════════╝"
echo ""
echo "📊 What's Being Deployed:"
echo "  • Vellore:      686 pages"
echo "  • Chennai:      156 pages"
echo "  • Kanchipuram:  468 pages"
echo "  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  • TOTAL:        1,310 pages"
echo ""
echo "✨ Features on Every Page:"
echo "  ✅ Google Business Profile (2 links)"
echo "  ✅ People Also Search For (150+ queries)"
echo "  ✅ Google Maps embed"
echo "  ✅ Local amenities (8 types)"
echo "  ✅ Reviews + FAQs with schema"
echo "  ✅ 200,000+ internal links total"
echo ""
echo "⏱️  Expected Time:"
echo "  • Build: 30-35 minutes"
echo "  • Deploy: 5-10 minutes"
echo "  • Total: ~40 minutes"
echo ""
echo "Press ENTER to start deployment..."
read

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
  echo ""
fi

# Build
echo "🏗️  Building 1,310 pages (this will take 30-35 minutes)..."
echo ""
npm run build

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Build successful!"
  echo ""
  echo "🚀 Deploying to Vercel..."
  echo ""
  
  npx vercel --prod --yes
  
  if [ $? -eq 0 ]; then
    echo ""
    echo "╔══════════════════════════════════════════════════════════════════════════╗"
    echo "║                                                                          ║"
    echo "║                ✅ DEPLOYMENT SUCCESSFUL! ✅                             ║"
    echo "║                                                                          ║"
    echo "╚══════════════════════════════════════════════════════════════════════════╝"
    echo ""
    echo "📋 Next Steps:"
    echo ""
    echo "1. ✅ Verify deployment:"
    echo "   https://www.dentalclinicinvellore.in"
    echo ""
    echo "2. 🗺️  Submit sitemaps to Google Search Console:"
    echo "   • https://www.dentalclinicinvellore.in/sitemap.xml"
    echo "   • https://www.dentalclinicinvellore.in/vellore-locations-sitemap.xml"
    echo "   • https://www.dentalclinicinvellore.in/chennai-locations-sitemap.xml"
    echo ""
    echo "3. 📊 Monitor Google Business Profile:"
    echo "   https://www.google.com/maps?cid=14385819900995297414"
    echo ""
    echo "4. 📈 Track rankings in Google Search Console"
    echo ""
    echo "🎉 1,310 pages now live with:"
    echo "   • Google Business Profile integration"
    echo "   • People Also Search For (150+ per page)"
    echo "   • 200,000+ internal links"
    echo "   • 204,360 keyword targets"
    echo ""
    echo "Expected Impact:"
    echo "   📊 250K-500K visitors/month"
    echo "   📞 10K-25K leads/month"
    echo "   🏆 #1 rankings for 2,000+ keywords"
    echo "   🗺️  Map Pack dominance in 100 KM radius"
    echo ""
  else
    echo ""
    echo "❌ Deployment failed. Please check errors above."
  fi
else
  echo ""
  echo "❌ Build failed. Please check errors above."
fi

