#!/bin/bash

###############################################################################
# FIX CACHE ERROR - Simple fix for corrupted .next directory
###############################################################################

cd /Users/rockson61/Downloads/idc || exit 1

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "  🔧 FIXING CORRUPTED BUILD CACHE"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Kill any processes
echo "Stopping any running processes..."
killall -9 node 2>/dev/null || true
echo "✓ Done"
echo ""

# Delete corrupted .next
echo "Deleting corrupted .next directory..."
rm -rf .next
echo "✓ Deleted"
echo ""

echo "════════════════════════════════════════════════════════════════"
echo "  ✅ CACHE CLEANED - STARTING FRESH SERVER"
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "Server will start on: http://localhost:3000"
echo "Press Ctrl+C to stop"
echo ""

# Start fresh
pnpm run dev

