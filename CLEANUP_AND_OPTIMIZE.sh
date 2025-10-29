#!/bin/bash

# Indira Dental Clinic - Project Cleanup Script
# Removes redundant files, logs, and outdated documentation

echo "🧹 Starting Project Cleanup..."
echo ""

# Create archive directory for old files
mkdir -p .archive/logs
mkdir -p .archive/old-docs
mkdir -p .archive/scripts

# ============================================
# 1. REMOVE BUILD LOGS
# ============================================
echo "📋 Cleaning build logs..."
mv *.log .archive/logs/ 2>/dev/null
echo "   ✓ Moved $(ls .archive/logs/*.log 2>/dev/null | wc -l | tr -d ' ') log files to .archive/logs/"

# ============================================
# 2. ARCHIVE OLD DOCUMENTATION
# ============================================
echo "📚 Archiving old documentation..."

# Keep only essential docs, archive the rest
KEEP_DOCS=(
  "README.md"
  "LOCAL_TESTING_GUIDE.md"
  "ERRORS_TO_FIX_AFTER_DEPLOYMENT.md"
  "PROJECT_ARCHITECTURE_COMPLETE.md"
  "COMPONENT_ANALYSIS.md"
)

for doc in *.md; do
  if [[ ! " ${KEEP_DOCS[@]} " =~ " ${doc} " ]]; then
    mv "$doc" .archive/old-docs/ 2>/dev/null
  fi
done

echo "   ✓ Archived $(ls .archive/old-docs/*.md 2>/dev/null | wc -l | tr -d ' ') documentation files"

# ============================================
# 3. ORGANIZE SCRIPTS
# ============================================
echo "🔧 Organizing scripts..."

# One-time generation scripts can be archived
ARCHIVE_SCRIPTS=(
  "generate-blog-posts-phase"
  "generate-chennai-pages"
  "generate-kanchipuram-pages"
  "create-all-missing-chennai-pages"
  "bulk-generate"
  "regenerate-"
  "update-old-"
  "import-locations-from-csv"
)

cd scripts
for pattern in "${ARCHIVE_SCRIPTS[@]}"; do
  mv ${pattern}* ../.archive/scripts/ 2>/dev/null
done
cd ..

echo "   ✓ Archived old generation scripts"

# ============================================
# 4. CLEAN DATA FILES
# ============================================
echo "📊 Cleaning data files..."

# Archive old CSV and JSON data files
mv scripts/*.csv .archive/scripts/ 2>/dev/null
mv scripts/*.txt .archive/scripts/ 2>/dev/null
mv scripts/*.json .archive/scripts/ 2>/dev/null

echo "   ✓ Archived data files"

# ============================================
# 5. CLEAN DOCS DIRECTORY
# ============================================
echo "📁 Cleaning docs directory..."

mv docs/*.txt .archive/old-docs/ 2>/dev/null
mv docs/*.json .archive/old-docs/ 2>/dev/null

echo "   ✓ Cleaned docs directory"

# ============================================
# 6. UPDATE .gitignore
# ============================================
echo "🔒 Updating .gitignore..."

cat >> .gitignore << 'GITIGNORE'

# Archive directory
.archive/

# Build logs
*.log

# Temporary files
*.tmp
*.temp
GITIGNORE

echo "   ✓ Updated .gitignore"

# ============================================
# 7. SUMMARY
# ============================================
echo ""
echo "✅ Cleanup Complete!"
echo ""
echo "📊 Summary:"
echo "   Logs archived:        $(ls .archive/logs/*.log 2>/dev/null | wc -l | tr -d ' ')"
echo "   Docs archived:        $(ls .archive/old-docs/*.md 2>/dev/null | wc -l | tr -d ' ')"
echo "   Scripts archived:     $(ls .archive/scripts/*.js 2>/dev/null | wc -l | tr -d ' ')"
echo ""
echo "📁 Active Documentation:"
ls -1 *.md 2>/dev/null | head -10
echo ""
echo "💡 Next Steps:"
echo "   1. Review .archive/ directory"
echo "   2. Run: git add -A"
echo "   3. Run: git commit -m 'Clean up project structure'"
echo ""

