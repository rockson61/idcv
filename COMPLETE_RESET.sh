#!/bin/bash

###############################################################################
# COMPLETE RESET - Go back to last working deployment
# This is the SIMPLEST, most reliable way to restore your working site
###############################################################################

cd /Users/rockson61/Downloads/idc || exit 1

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "  🔄 COMPLETE RESET TO LAST WORKING DEPLOYMENT"
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "This will restore your site to commit cc3d4091"
echo "(Your last successful deployment before all refactoring)"
echo ""
echo "Press Enter to continue or Ctrl+C to cancel..."
read

# Kill any processes
killall -9 node 2>/dev/null || true

# Hard reset to working commit
echo "Resetting to working commit..."
git reset --hard cc3d4091
echo "✓ Code restored"

# Clean everything
echo "Cleaning..."
rm -rf .next node_modules .pnpm-store
echo "✓ Cleaned"

# Reinstall
echo "Reinstalling (1-2 minutes)..."
pnpm install
echo "✓ Installed"

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "  ✅ RESET COMPLETE - STARTING SERVER"
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "Opening http://localhost:3000"
echo "Press Ctrl+C to stop server"
echo ""

pnpm run dev

