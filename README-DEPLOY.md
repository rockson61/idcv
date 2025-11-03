# 🚀 Quick Deploy to Vercel

## Fastest Way to Deploy

### Method 1: Via Vercel Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push
   ```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository
   - Click "Deploy"

✅ Done! Your site will be live in ~10 minutes.

---

### Method 2: Via CLI

```bash
npx vercel --prod
```

✅ Done! Follow the prompts.

---

## What's Configured?

✅ **Memory:** 8GB for builds  
✅ **Functions:** 3GB memory, 60s timeout  
✅ **Region:** Singapore (best for India)  
✅ **Build Settings:** Auto-detected Next.js  

## Need Help?

See `DEPLOY.md` for detailed instructions.

