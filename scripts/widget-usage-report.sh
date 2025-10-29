#!/bin/bash

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     WIDGET USAGE ANALYSIS - Checking Actual Usage          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

cd app

echo "📊 Analyzing widget usage in all pages..."
echo ""

# CTAWidget
CTA=$(grep -r "CTAWidget" . --include="*.tsx" | wc -l | tr -d ' ')
echo "1. CTAWidget:"
echo "   Instances: $CTA"
echo "   Files: $(grep -r "CTAWidget" . --include="*.tsx" -l | wc -l | tr -d ' ')"
grep -r "<CTAWidget" . --include="*.tsx" -l | head -3 | sed 's/^/   - /'
echo ""

# CompactServiceWidget
COMPACT=$(grep -r "CompactServiceWidget" . --include="*.tsx" | wc -l | tr -d ' ')
echo "2. CompactServiceWidget:"
echo "   Instances: $COMPACT"
echo "   Files: $(grep -r "CompactServiceWidget" . --include="*.tsx" -l | wc -l | tr -d ' ')"
grep -r "<CompactServiceWidget" . --include="*.tsx" -l | head -3 | sed 's/^/   - /'
echo ""

# RelevantQAWidget
QA=$(grep -r "RelevantQAWidget" . --include="*.tsx" | wc -l | tr -d ' ')
echo "3. RelevantQAWidget:"
echo "   Instances: $QA"
echo "   Files: $(grep -r "RelevantQAWidget" . --include="*.tsx" -l | wc -l | tr -d ' ')"
grep -r "<RelevantQAWidget" . --include="*.tsx" -l | head -3 | sed 's/^/   - /'
echo ""

# ConditionWidget
COND=$(grep -r "ConditionWidget" . --include="*.tsx" | wc -l | tr -d ' ')
echo "4. ConditionWidget:"
echo "   Instances: $COND"
echo "   Files: $(grep -r "ConditionWidget" . --include="*.tsx" -l | wc -l | tr -d ' ')"
if [ $COND -gt 0 ]; then
  grep -r "<ConditionWidget" . --include="*.tsx" -l | head -3 | sed 's/^/   - /'
else
  echo "   ❌ UNUSED"
fi
echo ""

# NearbyLocationsWidget
NEARBY=$(grep -r "NearbyLocationsWidget" . --include="*.tsx" | wc -l | tr -d ' ')
echo "5. NearbyLocationsWidget:"
echo "   Instances: $NEARBY"
echo "   Files: $(grep -r "NearbyLocationsWidget" . --include="*.tsx" -l | wc -l | tr -d ' ')"
grep -r "<NearbyLocationsWidget" . --include="*.tsx" -l | head -3 | sed 's/^/   - /'
echo ""

# BookingWidget
BOOKING=$(grep -r "BookingWidget" . --include="*.tsx" | wc -l | tr -d ' ')
echo "6. BookingWidget:"
echo "   Instances: $BOOKING"
echo "   Files: $(grep -r "BookingWidget" . --include="*.tsx" -l | wc -l | tr -d ' ')"
if [ $BOOKING -gt 0 ]; then
  grep -r "<BookingWidget" . --include="*.tsx" -l | head -3 | sed 's/^/   - /'
else
  echo "   ❌ UNUSED"
fi
echo ""

# DentistProfileWidget
DENTIST=$(grep -r "DentistProfileWidget" . --include="*.tsx" | wc -l | tr -d ' ')
echo "7. DentistProfileWidget:"
echo "   Instances: $DENTIST"
echo "   Files: $(grep -r "DentistProfileWidget" . --include="*.tsx" -l | wc -l | tr -d ' ')"
if [ $DENTIST -gt 0 ]; then
  grep -r "<DentistProfileWidget" . --include="*.tsx" -l | head -3 | sed 's/^/   - /'
else
  echo "   ❌ UNUSED"
fi
echo ""

# SearchWidget
SEARCH=$(grep -r "SearchWidget" . --include="*.tsx" | wc -l | tr -d ' ')
echo "8. SearchWidget:"
echo "   Instances: $SEARCH"
echo "   Files: $(grep -r "SearchWidget" . --include="*.tsx" -l | wc -l | tr -d ' ')"
if [ $SEARCH -gt 0 ]; then
  grep -r "<SearchWidget" . --include="*.tsx" -l | head -3 | sed 's/^/   - /'
else
  echo "   ❌ UNUSED"
fi
echo ""

# InternalLinksWidget
INTERNAL=$(grep -r "InternalLinksWidget" . --include="*.tsx" | wc -l | tr -d ' ')
echo "9. InternalLinksWidget:"
echo "   Instances: $INTERNAL"
echo "   Files: $(grep -r "InternalLinksWidget" . --include="*.tsx" -l | wc -l | tr -d ' ')"
if [ $INTERNAL -gt 0 ]; then
  grep -r "<InternalLinksWidget" . --include="*.tsx" -l | head -3 | sed 's/^/   - /'
else
  echo "   ❌ UNUSED"
fi
echo ""

echo "═══════════════════════════════════════════════════════════"
echo "SUMMARY"
echo "═══════════════════════════════════════════════════════════"
echo ""

TOTAL=$((CTA + COMPACT + QA + COND + NEARBY + BOOKING + DENTIST + SEARCH + INTERNAL))
echo "Total Widget Instances: $TOTAL"
echo ""

