#!/bin/bash

###############################################################################
# Bulk Location Page Generator for All 400+ Vellore Locations
# 
# This script:
# 1. Imports location data from CSV/list
# 2. Generates TypeScript data file
# 3. Creates all location pages using template
# 4. Validates generated pages
#
# Usage:
#   bash scripts/bulk-generate-all-locations.sh
#   bash scripts/bulk-generate-all-locations.sh --dry-run
#   bash scripts/bulk-generate-all-locations.sh --limit=50
###############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOCATIONS_DIR="$PROJECT_ROOT/app/in/tamil-nadu/vellore"
TEMPLATE_FILE="$SCRIPT_DIR/location-template.tsx"

# Parse arguments
DRY_RUN=false
LIMIT=""

for arg in "$@"; do
  case $arg in
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --limit=*)
      LIMIT="${arg#*=}"
      shift
      ;;
  esac
done

# Print header
echo -e "${BLUE}"
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║   Vellore Location Pages - Bulk Generator                     ║"
echo "║   Generate 400+ hyperlocal dental clinic pages                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Step 1: Import location data
echo -e "${YELLOW}Step 1: Importing location data...${NC}"
if [ -f "$SCRIPT_DIR/import-locations-from-csv.js" ]; then
  node "$SCRIPT_DIR/import-locations-from-csv.js"
  echo -e "${GREEN}✅ Location data imported${NC}"
else
  echo -e "${RED}❌ CSV importer not found${NC}"
  exit 1
fi

# Step 2: Generate pages
echo -e "\n${YELLOW}Step 2: Generating location pages...${NC}"

if [ "$DRY_RUN" = true ]; then
  echo -e "${BLUE}🔍 DRY RUN MODE - No files will be created${NC}"
fi

# Count existing pages
EXISTING_COUNT=$(find "$LOCATIONS_DIR" -type f -name "page.tsx" | wc -l | tr -d ' ')
echo -e "${BLUE}📊 Existing pages: $EXISTING_COUNT${NC}"

# Generate new pages
if [ -f "$SCRIPT_DIR/generate-location-pages.js" ]; then
  if [ -n "$LIMIT" ]; then
    echo -e "${BLUE}Generating up to $LIMIT pages...${NC}"
    if [ "$DRY_RUN" = false ]; then
      node "$SCRIPT_DIR/generate-location-pages.js" --limit="$LIMIT"
    fi
  else
    echo -e "${BLUE}Generating ALL location pages...${NC}"
    if [ "$DRY_RUN" = false ]; then
      node "$SCRIPT_DIR/generate-location-pages.js"
    fi
  fi
  echo -e "${GREEN}✅ Pages generated${NC}"
else
  echo -e "${RED}❌ Page generator not found${NC}"
  exit 1
fi

# Step 3: Count new pages
NEW_COUNT=$(find "$LOCATIONS_DIR" -type f -name "page.tsx" | wc -l | tr -d ' ')
CREATED_COUNT=$((NEW_COUNT - EXISTING_COUNT))

# Step 4: Validation (optional)
echo -e "\n${YELLOW}Step 3: Validation...${NC}"
echo -e "${BLUE}Running basic validation checks...${NC}"

# Check for common issues
ERROR_COUNT=0

# Check for empty files
EMPTY_FILES=$(find "$LOCATIONS_DIR" -type f -name "page.tsx" -size 0 | wc -l | tr -d ' ')
if [ "$EMPTY_FILES" -gt 0 ]; then
  echo -e "${RED}❌ Found $EMPTY_FILES empty files${NC}"
  ERROR_COUNT=$((ERROR_COUNT + 1))
else
  echo -e "${GREEN}✅ No empty files${NC}"
fi

# Check for import errors (basic check)
echo -e "${BLUE}Checking for import issues...${NC}"
IMPORT_ERRORS=$(grep -r "import.*from.*undefined" "$LOCATIONS_DIR" 2>/dev/null | wc -l | tr -d ' ')
if [ "$IMPORT_ERRORS" -gt 0 ]; then
  echo -e "${YELLOW}⚠️  Potential import issues found${NC}"
else
  echo -e "${GREEN}✅ Imports look good${NC}"
fi

# Summary
echo -e "\n${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                    GENERATION SUMMARY                          ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo -e "${GREEN}✅ Existing pages:    $EXISTING_COUNT${NC}"
echo -e "${GREEN}✅ New pages created: $CREATED_COUNT${NC}"
echo -e "${GREEN}✅ Total pages:       $NEW_COUNT${NC}"

if [ "$ERROR_COUNT" -gt 0 ]; then
  echo -e "${YELLOW}⚠️  Warnings:         $ERROR_COUNT${NC}"
else
  echo -e "${GREEN}✅ No errors found${NC}"
fi

echo -e "\n${BLUE}📁 Location: $LOCATIONS_DIR${NC}"

# Next steps
echo -e "\n${YELLOW}Next Steps:${NC}"
echo "1. Review generated pages in: $LOCATIONS_DIR"
echo "2. Test a few pages locally: npm run dev"
echo "3. Customize important location pages"
echo "4. Add real patient reviews"
echo "5. Update amenities with local data"
echo "6. Deploy to production"

echo -e "\n${GREEN}✅ Bulk generation complete!${NC}\n"

