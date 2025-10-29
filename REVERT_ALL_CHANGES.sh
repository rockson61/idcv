#!/bin/bash

###############################################################################
# REVERT ALL CHANGES
# Restores to commit cc3d4091 (last successful deployment before refactoring)
# This undoes ALL my UI/UX cleanup and structural refactoring
###############################################################################

echo ""
echo "╔══════════════════════════════════════════════════════════════════════════╗"
echo "║                                                                          ║"
echo "║   ⏮️  REVERTING ALL CHANGES                                             ║"
echo "║                                                                          ║"
echo "╚══════════════════════════════════════════════════════════════════════════╝"
echo ""

cd /Users/rockson61/Downloads/idc || exit 1

echo "This will:"
echo "  • Discard ALL changes since your last successful deployment"
echo "  • Restore to commit: cc3d4091 (Fix critical build error)"
echo "  • Your site will work exactly like it did before my refactoring"
echo ""
echo "⚠️  ALL MY CHANGES WILL BE UNDONE:"
echo "  • UI/UX cleanup (removed duplicates, archived components)"
echo "  • Structural refactor (/lib/ reorganization)"
echo "  • All optimization attempts"
echo ""
echo "Press Ctrl+C to CANCEL or Enter to PROCEED..."
read

# Reset to last working commit
echo ""
echo "Step 1: Resetting to last working commit..."
git reset --hard cc3d4091
echo "✓ Reset complete"
echo ""

# Clean build artifacts
echo "Step 2: Cleaning build artifacts..."
rm -rf .next
rm -rf node_modules
rm -rf .pnpm-store
echo "✓ Cleaned"
echo ""

# Reinstall
echo "Step 3: Installing dependencies..."
pnpm install
echo "✓ Dependencies installed"
echo ""

echo "╔══════════════════════════════════════════════════════════════════════════╗"
echo "║                                                                          ║"
echo "║   ✅ REVERTED TO LAST WORKING STATE                                     ║"
echo "║                                                                          ║"
echo "║   Commit: cc3d4091                                                       ║"
echo "║   Status: This was your successful deployment                            ║"
echo "║                                                                          ║"
echo "║   Starting development server...                                         ║"
echo "║                                                                          ║"
echo "╚══════════════════════════════════════════════════════════════════════════╝"
echo ""

pnpm run dev

