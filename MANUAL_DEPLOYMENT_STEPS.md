# 📋 MANUAL DEPLOYMENT STEPS

## If automatic deployment doesn't work, follow these steps:

---

## Option 1: Using the Deployment Script (Recommended)

```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

The script will:
1. Install dependencies (if needed)
2. Build all 841 pages
3. Deploy to Vercel
4. Show you next steps

---

## Option 2: Manual Step-by-Step

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build Project (20-25 minutes)
```bash
npm run build
```

This builds all 841 pages:
- 686 Vellore pages
- 155 Chennai pages
- All components and assets

**Wait for build to complete before proceeding!**

### Step 3: Deploy to Vercel

**Option A: Using npx (no installation needed)**
```bash
npx vercel --prod
```

**Option B: Using Vercel CLI (if installed)**
```bash
vercel --prod
```

**Option C: First time Vercel user**
```bash
# Login to Vercel
npx vercel login

# Deploy
npx vercel --prod
```

### Step 4: Follow Vercel Prompts

When prompted:
1. **Set up and deploy?** → Yes
2. **Which scope?** → Choose your account
3. **Link to existing project?** → Yes (if exists) or No (if first time)
4. **Project name?** → dentalclinicinvellore (or your preferred name)
5. **Directory?** → ./ (current directory)
6. **Override settings?** → No

### Step 5: Wait for Deployment

Deployment typically takes 5-10 minutes.

You'll see:
```
✓ Queued
✓ Building
✓ Uploading
✓ Deploying
✓ Ready! [30s]
```

### Step 6: Verify Deployment

Visit these URLs to confirm:
```
https://www.dentalclinicinvellore.in
https://www.dentalclinicinvellore.in/in/tamil-nadu/chennai
https://www.dentalclinicinvellore.in/in/tamil-nadu/chennai/anna-nagar
https://www.dentalclinicinvellore.in/in/tamil-nadu/vellore
https://www.dentalclinicinvellore.in/in/tamil-nadu/vellore/arakkonam
```

---

## Option 3: Using Vercel Dashboard (GUI)

1. Go to https://vercel.com
2. Login to your account
3. Click "Import Project"
4. Import from Git repository
5. Configure:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

---

## 🗺️ Post-Deployment: Submit Sitemaps

### Go to Google Search Console:
https://search.google.com/search-console

### Submit these 3 sitemaps:

1. **Main Sitemap:**
   ```
   https://www.dentalclinicinvellore.in/sitemap.xml
   ```

2. **Vellore Locations:**
   ```
   https://www.dentalclinicinvellore.in/vellore-locations-sitemap.xml
   ```

3. **Chennai Locations:**
   ```
   https://www.dentalclinicinvellore.in/chennai-locations-sitemap.xml
   ```

### How to Submit:
1. Select your property
2. Go to "Sitemaps" in left menu
3. Enter sitemap URL
4. Click "Submit"
5. Repeat for all 3 sitemaps

---

## 📊 Monitor Progress

### Week 1:
- Check: Google Search Console > Coverage
- Expected: 50-100 pages indexed

### Week 2-4:
- Expected: 400-500 pages indexed
- Start seeing traffic

### Month 2:
- Expected: All 841 pages indexed
- Significant traffic growth

### Month 6:
- Expected: 150K-300K monthly visitors
- #1 rankings for 1,000+ keywords

---

## 🆘 Troubleshooting

### Build fails:
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Deployment fails:
```bash
# Try with Vercel token
vercel --token YOUR_TOKEN --prod
```

### Need help:
- Check build logs in terminal
- Check Vercel deployment logs
- Visit Vercel documentation: https://vercel.com/docs

---

## ✅ Success Checklist

- [ ] Dependencies installed
- [ ] Build completed successfully
- [ ] Deployed to Vercel
- [ ] Verified all URLs work
- [ ] Submitted 3 sitemaps to Google
- [ ] Monitoring Google Search Console

---

**Total Time:** ~30 minutes (build + deploy)  
**Pages Deployed:** 841 (686 Vellore + 155 Chennai)  
**Ready to dominate local search!** 🚀

