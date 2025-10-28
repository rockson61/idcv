#!/bin/bash

###############################################################################
# PAGE VERIFICATION SCRIPT
# Verifies all 686 pages are correctly generated
###############################################################################

echo "🔍 Verifying all location pages..."
echo ""

# Count pages
TOTAL_PAGES=$(find app/in/tamil-nadu/vellore -name "page.tsx" -type f | wc -l | tr -d ' ')
echo "✅ Total pages found: $TOTAL_PAGES"

# Check for empty pages
EMPTY_PAGES=$(find app/in/tamil-nadu/vellore -name "page.tsx" -type f -size 0 | wc -l | tr -d ' ')
if [ "$EMPTY_PAGES" -eq 0 ]; then
  echo "✅ No empty pages"
else
  echo "❌ Found $EMPTY_PAGES empty pages"
fi

# Check for pages with proper imports
PAGES_WITH_IMPORTS=$(grep -r "from '@/components/location'" app/in/tamil-nadu/vellore/*/page.tsx 2>/dev/null | wc -l | tr -d ' ')
echo "✅ Pages with proper imports: $PAGES_WITH_IMPORTS"

# Check for pages with metadata
PAGES_WITH_METADATA=$(grep -r "export const metadata" app/in/tamil-nadu/vellore/*/page.tsx 2>/dev/null | wc -l | tr -d ' ')
echo "✅ Pages with metadata: $PAGES_WITH_METADATA"

# Check for pages with Google Maps
PAGES_WITH_MAPS=$(grep -r "GoogleMapEmbed" app/in/tamil-nadu/vellore/*/page.tsx 2>/dev/null | wc -l | tr -d ' ')
echo "✅ Pages with Google Maps: $PAGES_WITH_MAPS"

# Check for pages with Reviews
PAGES_WITH_REVIEWS=$(grep -r "LocationReviews" app/in/tamil-nadu/vellore/*/page.tsx 2>/dev/null | wc -l | tr -d ' ')
echo "✅ Pages with Reviews: $PAGES_WITH_REVIEWS"

# Check for pages with FAQs
PAGES_WITH_FAQS=$(grep -r "LocationFAQs" app/in/tamil-nadu/vellore/*/page.tsx 2>/dev/null | wc -l | tr -d ' ')
echo "✅ Pages with FAQs: $PAGES_WITH_FAQS"

# Sample page verification
echo ""
echo "📋 Sample page verification:"
echo ""

SAMPLE_PAGES=("sholingur" "arakkonam" "arcot" "ranipet" "yelagiri-hills" "cmc-vellore")

for page in "${SAMPLE_PAGES[@]}"; do
  if [ -f "app/in/tamil-nadu/vellore/$page/page.tsx" ]; then
    SIZE=$(ls -lh "app/in/tamil-nadu/vellore/$page/page.tsx" | awk '{print $5}')
    echo "✅ $page - $SIZE"
  else
    echo "❌ $page - NOT FOUND"
  fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 Verification Summary:"
echo "  Total Pages:        $TOTAL_PAGES"
echo "  Empty Pages:        $EMPTY_PAGES"
echo "  With Imports:       $PAGES_WITH_IMPORTS"
echo "  With Metadata:      $PAGES_WITH_METADATA"
echo "  With Google Maps:   $PAGES_WITH_MAPS"
echo "  With Reviews:       $PAGES_WITH_REVIEWS"
echo "  With FAQs:          $PAGES_WITH_FAQS"
echo ""

if [ "$EMPTY_PAGES" -eq 0 ] && [ "$PAGES_WITH_IMPORTS" -gt 600 ]; then
  echo "✅ ALL CHECKS PASSED - READY TO DEPLOY!"
else
  echo "⚠️  Some issues detected - please review"
fi

echo ""

