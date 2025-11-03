#!/bin/bash

# Vercel Deployment Script
# This script helps you deploy to Vercel

echo "🚀 Indira Dental Clinic - Vercel Deployment Helper"
echo "=================================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized"
    echo "Run: git init"
    exit 1
fi

# Check if code is committed
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes"
    echo ""
    echo "Would you like to commit them now? (y/n)"
    read -r response
    if [ "$response" = "y" ]; then
        git add .
        git commit -m "Prepare for Vercel deployment"
        echo "✅ Changes committed"
    else
        echo "ℹ️  Please commit your changes before deploying"
        exit 1
    fi
fi

echo ""
echo "Choose deployment method:"
echo "1) Deploy via Vercel CLI (npx vercel)"
echo "2) Deploy via Vercel Dashboard (GitHub integration)"
echo ""
read -r choice

case $choice in
    1)
        echo ""
        echo "📦 Deploying via Vercel CLI..."
        echo ""
        if ! command -v vercel &> /dev/null; then
            echo "Using npx (no global install needed)..."
            npx vercel --prod
        else
            vercel --prod
        fi
        ;;
    2)
        echo ""
        echo "📝 Instructions for Dashboard Deployment:"
        echo ""
        echo "1. Push your code to GitHub:"
        echo "   git push origin main"
        echo ""
        echo "2. Go to https://vercel.com"
        echo ""
        echo "3. Sign in with GitHub"
        echo ""
        echo "4. Click 'Add New Project'"
        echo ""
        echo "5. Import your repository"
        echo ""
        echo "6. Vercel will auto-detect Next.js settings"
        echo ""
        echo "7. Click 'Deploy'"
        echo ""
        echo "✅ Your vercel.json is already configured!"
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac

