#!/bin/bash

# Archive Old Scripts - Safe cleanup of 86 scripts and old docs
# Moves files to .archive/ instead of deleting (reversible)

echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║     Archive Old Scripts & Documentation                    ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Create archive directories
mkdir -p .archive/scripts
mkdir -p .archive/old-docs

# Change to project root
cd "$(dirname "$0")"

# ============================================
# 1. ARCHIVE OLD SCRIPTS
# ============================================

echo "📦 Archiving old scripts..."
echo ""

# Keep these important scripts
KEEP_SCRIPTS=(
  "analyze-components.js"
)

# Count scripts to archive
TOTAL_SCRIPTS=$(ls scripts/*.js 2>/dev/null | wc -l | tr -d ' ')
ARCHIVED_COUNT=0

# Archive scripts
cd scripts
for script in *.js; do
  # Skip if in keep list
  if [[ " ${KEEP_SCRIPTS[@]} " =~ " ${script} " ]]; then
    echo "  ✓ Keeping: $script"
    continue
  fi
  
  # Archive the script
  if [ -f "$script" ]; then
    mv "$script" ../.archive/scripts/
    ARCHIVED_COUNT=$((ARCHIVED_COUNT + 1))
    echo "  → Archived: $script"
  fi
done
cd ..

echo ""
echo "  ✅ Archived $ARCHIVED_COUNT of $TOTAL_SCRIPTS scripts"
echo "  ✅ Kept ${#KEEP_SCRIPTS[@]} important scripts"

# ============================================
# 2. ARCHIVE OLD DOCUMENTATION
# ============================================

echo ""
echo "📚 Archiving old documentation..."
echo ""

# Keep these essential docs
KEEP_DOCS=(
  "README.md"
  "LOCAL_TESTING_GUIDE.md"
  "ERRORS_TO_FIX_AFTER_DEPLOYMENT.md"
  "PROJECT_ARCHITECTURE_COMPLETE.md"
  "COMPONENT_ANALYSIS.md"
  "OPTIMIZATION_RECOMMENDATIONS.md"
  "MASTER_SCRIPT_GUIDE.md"
)

# Count docs to archive
TOTAL_DOCS=$(ls *.md 2>/dev/null | wc -l | tr -d ' ')
ARCHIVED_DOCS=0

# Archive old docs
for doc in *.md; do
  # Skip if in keep list
  if [[ " ${KEEP_DOCS[@]} " =~ " ${doc} " ]]; then
    echo "  ✓ Keeping: $doc"
    continue
  fi
  
  # Archive the doc
  if [ -f "$doc" ]; then
    mv "$doc" .archive/old-docs/
    ARCHIVED_DOCS=$((ARCHIVED_DOCS + 1))
    echo "  → Archived: $doc"
  fi
done

echo ""
echo "  ✅ Archived $ARCHIVED_DOCS of $TOTAL_DOCS documentation files"
echo "  ✅ Kept ${#KEEP_DOCS[@]} essential docs"

# ============================================
# 3. ARCHIVE LOG FILES
# ============================================

echo ""
echo "🗑️  Archiving log files..."
echo ""

mkdir -p .archive/logs
LOG_COUNT=$(ls *.log 2>/dev/null | wc -l | tr -d ' ')

if [ $LOG_COUNT -gt 0 ]; then
  mv *.log .archive/logs/ 2>/dev/null
  echo "  ✅ Archived $LOG_COUNT log files"
else
  echo "  ℹ️  No log files found"
fi

# ============================================
# 4. ARCHIVE DATA FILES IN SCRIPTS
# ============================================

echo ""
echo "📊 Archiving old data files..."
echo ""

cd scripts
DATA_COUNT=0

# Archive CSV, JSON, TXT files (old data)
for ext in csv json txt; do
  for file in *.$ext; do
    if [ -f "$file" ]; then
      mv "$file" ../.archive/scripts/
      DATA_COUNT=$((DATA_COUNT + 1))
      echo "  → Archived: $file"
    fi
  done
done
cd ..

if [ $DATA_COUNT -gt 0 ]; then
  echo "  ✅ Archived $DATA_COUNT data files"
else
  echo "  ℹ️  No data files found"
fi

# ============================================
# 5. UPDATE .gitignore
# ============================================

echo ""
echo "🔒 Updating .gitignore..."
echo ""

# Add .archive to .gitignore if not already there
if ! grep -q "^\.archive/" .gitignore 2>/dev/null; then
  cat >> .gitignore << 'GITIGNORE'

# Archive directory (old scripts, docs, logs)
.archive/

# Log files
*.log

# Temporary files
*.tmp
*.temp
GITIGNORE
  echo "  ✅ Updated .gitignore"
else
  echo "  ℹ️  .gitignore already configured"
fi

# ============================================
# 6. SUMMARY
# ============================================

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║                  ✅ ARCHIVE COMPLETE!                      ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "📊 Summary:"
echo "  • Scripts archived:     $ARCHIVED_COUNT"
echo "  • Docs archived:        $ARCHIVED_DOCS"
echo "  • Log files archived:   $LOG_COUNT"
echo "  • Data files archived:  $DATA_COUNT"
echo ""
echo "📁 Archived to:"
echo "  • .archive/scripts/      (old scripts)"
echo "  • .archive/old-docs/     (old documentation)"
echo "  • .archive/logs/         (build logs)"
echo ""
echo "✅ Active Files (Kept):"
echo ""
echo "Scripts:"
for script in "${KEEP_SCRIPTS[@]}"; do
  echo "  ✓ scripts/$script"
done
echo ""
echo "Documentation:"
for doc in "${KEEP_DOCS[@]}"; do
  echo "  ✓ $doc"
done
echo ""
echo "💡 To restore archived files:"
echo "   cp .archive/scripts/filename.js scripts/"
echo "   cp .archive/old-docs/filename.md ."
echo ""
echo "🗑️  To permanently delete (optional):"
echo "   rm -rf .archive/"
echo ""
echo "Next steps:"
echo "  1. Review .archive/ directory"
echo "  2. Run: git add -A"
echo "  3. Run: git commit -m 'Archive old scripts and docs'"
echo "  4. Run: git push origin main"
echo ""

