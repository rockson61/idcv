#!/bin/bash

###############################################################################
# KILL ALL NODE PROCESSES AND START FRESH
# Fixes port conflicts and ensures clean start
###############################################################################

echo ""
echo "╔══════════════════════════════════════════════════════════════════════════╗"
echo "║                                                                          ║"
echo "║   🛑 KILLING ALL NODE PROCESSES & STARTING FRESH                        ║"
echo "║                                                                          ║"
echo "╚══════════════════════════════════════════════════════════════════════════╝"
echo ""

cd /Users/rockson61/Downloads/idc || exit 1

# Step 1: Kill ALL Node processes
echo "Step 1: Killing ALL Node processes..."
killall -9 node 2>/dev/null && echo "✓ Killed running Node processes" || echo "✓ No Node processes running"
sleep 2

# Step 2: Check if port 3000 is free
echo ""
echo "Step 2: Checking port 3000..."
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
  echo "⚠ Port 3000 is still in use. Killing process..."
  lsof -ti:3000 | xargs kill -9 2>/dev/null
  sleep 2
  echo "✓ Port 3000 is now free"
else
  echo "✓ Port 3000 is available"
fi

# Step 3: Clean build cache
echo ""
echo "Step 3: Cleaning build cache..."
rm -rf .next
echo "✓ Deleted .next directory"

# Step 4: Check critical components exist
echo ""
echo "Step 4: Verifying critical components..."
ERRORS=0

if [ ! -f "components/service-content-template.tsx" ]; then
  echo "✗ Missing: service-content-template.tsx"
  ERRORS=$((ERRORS + 1))
else
  echo "✓ service-content-template.tsx exists"
fi

if [ ! -f "components/layout/header.tsx" ]; then
  echo "✗ Missing: layout/header.tsx"
  ERRORS=$((ERRORS + 1))
else
  echo "✓ layout/header.tsx exists"
fi

if [ ! -f "components/layout/footer.tsx" ]; then
  echo "✗ Missing: layout/footer.tsx"
  ERRORS=$((ERRORS + 1))
else
  echo "✓ layout/footer.tsx exists"
fi

if [ $ERRORS -gt 0 ]; then
  echo ""
  echo "❌ CRITICAL COMPONENTS MISSING!"
  echo "Run: git checkout cc3d4091 -- components/"
  exit 1
fi

# Step 5: Start server on fixed port 3000
echo ""
echo "╔══════════════════════════════════════════════════════════════════════════╗"
echo "║                                                                          ║"
echo "║   ✅ READY TO START - ALL CHECKS PASSED                                 ║"
echo "║                                                                          ║"
echo "║   Server will start on: http://localhost:3000                            ║"
echo "║   (Port is fixed - will not change)                                      ║"
echo "║                                                                          ║"
echo "║   Press Ctrl+C to stop server                                            ║"
echo "║                                                                          ║"
echo "╚══════════════════════════════════════════════════════════════════════════╝"
echo ""
echo "Starting server..."
echo ""

# Start on port 3000 explicitly
PORT=3000 pnpm run dev

# If server stops
echo ""
echo "Server stopped."
echo ""
echo "To restart: ./KILL_ALL_AND_START.sh"

