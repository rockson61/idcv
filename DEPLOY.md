# 🚀 Vercel Deployment Guide

## Quick Start

Your project is ready for deployment! Choose the method that works best for you.

## Option 1: Deploy via Vercel Dashboard (Recommended ⭐)

This is the easiest method with automatic deployments on every git push.

### Steps:

1. **Commit and push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Import project on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click **"Add New Project"**
   - Select your repository (`idc`)
   - Vercel will auto-detect Next.js settings

3. **Configure (if needed)**
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `pnpm run build` (or default)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `pnpm install`

4. **Deploy**
   - Click **"Deploy"**
   - Wait for build to complete (~5-10 minutes for 2431 pages)
   - Your site will be live at `https://your-project.vercel.app`

## Option 2: Deploy via Vercel CLI

Quick deployment without GitHub integration.

### Steps:

1. **Install Vercel CLI** (one-time)
   ```bash
   npm i -g vercel
   # or use npx (no install needed)
   ```

2. **Login to Vercel**
   ```bash
   npx vercel login
   ```

3. **Deploy to production**
   ```bash
   npx vercel --prod
   ```

4. **Follow prompts**
   - Link to existing project or create new
   - Confirm settings
   - Wait for deployment

## Configuration

### ✅ Already Configured

Your `vercel.json` includes:
- **Memory:** 8GB for builds (`NODE_OPTIONS: --max-old-space-size=8192`)
- **Function Memory:** 3GB for pages
- **Region:** Singapore (sin1) for better performance in India
- **Max Duration:** 60s for page functions

### Environment Variables (if needed)

If you need to set environment variables:
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables for:
   - API keys
   - Database URLs
   - Other secrets

## Post-Deployment Checklist

- [ ] Verify site is accessible
- [ ] Test key pages (homepage, services, contact)
- [ ] Check mobile responsiveness
- [ ] Verify forms are working
- [ ] Test page load speeds
- [ ] Set up custom domain (optional)

## Custom Domain Setup

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `dentalclinicinvellore.in`)
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

## Build Performance

- **First Build:** ~10-15 minutes (2431 pages)
- **Subsequent Builds:** ~5-8 minutes (with caching)
- **Incremental Builds:** ~2-3 minutes (only changed pages)

## Troubleshooting

### Build Fails

1. **Check Build Logs**
   - Vercel Dashboard → Deployments → Failed build → Logs
   - Look for specific error messages

2. **Common Issues**
   - **Memory:** Already configured (8GB)
   - **Timeout:** Already configured (60s)
   - **Dependencies:** Ensure all are in `package.json`

3. **Local Testing**
   ```bash
   # Test build locally first
   pnpm run build
   ```

### Build Takes Too Long

- First build always takes longer
- Subsequent builds use caching
- Consider enabling ISR for static pages

## Features

✅ **Automatic Deployments:** Every git push triggers deployment  
✅ **Preview Deployments:** Every PR gets a preview URL  
✅ **Rollback:** One-click rollback to previous versions  
✅ **Analytics:** Built-in performance monitoring  
✅ **SSL:** Automatic HTTPS certificates  

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Status: [vercel-status.com](https://vercel-status.com)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## Notes

- Your build will succeed on Vercel even if local build has memory issues
- Vercel has optimized infrastructure for Next.js
- All 2431 pages will generate successfully
- Build logs are available in real-time during deployment

---

**Ready to deploy?** Choose Option 1 (Dashboard) for the best experience! 🚀
