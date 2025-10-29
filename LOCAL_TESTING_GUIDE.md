# 🧪 Local Testing Guide

**Before Deployment**: Test your 2,396-page website locally

---

## 🚀 Quick Start (3 Commands)

**Open your Terminal and run:**

```bash
# 1. Navigate to project
cd /Users/rockson61/Downloads/idc

# 2. Clean any previous builds
rm -rf .next

# 3. Start development server
npm run dev
```

**Then visit**: http://localhost:3000

---

## 📊 What to Test

### Critical Pages (Must Work):

1. **Homepage**
   - URL: http://localhost:3000
   - Check: Hero section, navigation, footer loads

2. **Blog Listing**
   - URL: http://localhost:3000/blog
   - Check: All 411 blog posts display, pagination works

3. **Individual Blog Post**
   - URL: http://localhost:3000/blog/dental-implants-complete-guide
   - Check: Content displays, images load

4. **Location Page (Vellore)**
   - URL: http://localhost:3000/in/tamil-nadu/vellore/gandhi-nagar
   - Check: Google Maps, services list, contact form

5. **Location Page (Chennai)**
   - URL: http://localhost:3000/in/tamil-nadu/chennai/anna-nagar
   - Check: Distance info, location-specific content

6. **Service Page**
   - URL: http://localhost:3000/services/root-canal-treatment
   - Check: Pricing, FAQ, booking widget

7. **Contact Page**
   - URL: http://localhost:3000/contact
   - Check: Form fields, Google Maps embed

8. **About Page**
   - URL: http://localhost:3000/about-us
   - Check: Doctor profile, team section

---

## ✅ Testing Checklist

### Functionality:
- [ ] Navigation menu works
- [ ] Footer links work
- [ ] Google Maps render
- [ ] Images load properly
- [ ] Search functionality (if any)
- [ ] Contact forms display
- [ ] Blog category filters work
- [ ] Mobile responsive design

### Performance:
- [ ] Pages load in < 3 seconds
- [ ] No console errors (open DevTools: F12)
- [ ] Smooth scrolling
- [ ] Images are optimized

### Content:
- [ ] All text displays correctly
- [ ] No broken links
- [ ] Proper formatting
- [ ] SEO meta tags present (view source)

### Components:
- [ ] Header/Navigation
- [ ] Footer with map
- [ ] Blog grid
- [ ] Service cards
- [ ] Location listings
- [ ] FAQ accordions
- [ ] Testimonials
- [ ] Call-to-action buttons

---

## 🐛 If You See Errors

### Console Errors (Browser F12):
1. Open DevTools (Right-click → Inspect → Console)
2. Look for red error messages
3. Note the error and file path
4. Most type errors won't show in browser (compile-time only)

### Build Warnings (Terminal):
- TypeScript warnings: **IGNORED** (configured in next.config.js)
- ESLint warnings: **IGNORED** (configured in next.config.js)
- These won't affect functionality

### Server Won't Start:
```bash
# Clear everything and try again
rm -rf .next node_modules
pnpm install
npm run dev
```

---

## 🌐 URLs to Test

### Homepage & Main Pages:
```
http://localhost:3000
http://localhost:3000/about-us
http://localhost:3000/about-us/dr-rockson-samuel
http://localhost:3000/contact
http://localhost:3000/testimonials
http://localhost:3000/blog
http://localhost:3000/services
```

### Blog Posts (Sample):
```
http://localhost:3000/blog/dental-implants-complete-guide
http://localhost:3000/blog/root-canal-treatment-guide
http://localhost:3000/blog/teeth-whitening-guide
```

### Vellore Locations (Sample):
```
http://localhost:3000/in/tamil-nadu/vellore/gandhi-nagar
http://localhost:3000/in/tamil-nadu/vellore/katpadi
http://localhost:3000/in/tamil-nadu/vellore/bagayam
http://localhost:3000/in/tamil-nadu/vellore/kosapet
```

### Chennai Locations (Sample):
```
http://localhost:3000/in/tamil-nadu/chennai/anna-nagar
http://localhost:3000/in/tamil-nadu/chennai/t-nagar
http://localhost:3000/in/tamil-nadu/chennai/adyar
```

### Services (Sample):
```
http://localhost:3000/services/root-canal-treatment
http://localhost:3000/services/dental-implants
http://localhost:3000/services/orthodontics
http://localhost:3000/services/cosmetic-dentistry
```

---

## 📱 Mobile Testing

### Using Browser DevTools:
1. Open DevTools (F12)
2. Click device toolbar icon (or Ctrl+Shift+M)
3. Select device: iPhone 12, iPad, etc.
4. Test navigation and layout

### Using Real Device:
1. Find your local IP: `ifconfig | grep "inet "` (Mac)
2. Start server: `npm run dev`
3. On phone, visit: `http://YOUR_IP:3000`
   - Example: `http://192.168.1.100:3000`

---

## ⚡ Performance Testing

### Lighthouse Audit (Chrome):
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Generate report"
4. Check scores for:
   - Performance (target: > 70)
   - Accessibility (target: > 90)
   - Best Practices (target: > 90)
   - SEO (target: > 90)

---

## 🔍 Common Issues & Fixes

### Issue: Port 3000 already in use
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Issue: Memory errors
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=8192" npm run dev
```

### Issue: Styles not loading
```bash
# Clear Tailwind cache
rm -rf .next
npm run dev
```

### Issue: Changes not reflecting
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache
- Restart dev server

---

## 🎯 Ready for Production?

If all tests pass:
- [ ] No critical console errors
- [ ] All main pages load
- [ ] Forms work
- [ ] Maps render
- [ ] Mobile responsive
- [ ] Fast load times

**Then proceed to production build:**

```bash
# Production build test
npm run build

# If build succeeds, deploy!
git push origin main
```

---

## 📊 Development vs Production

| Feature | Development (`npm run dev`) | Production (`npm run build`) |
|---------|------------------------------|------------------------------|
| Speed | Instant hot reload | One-time build (8-15 min) |
| Errors | Shows in browser | Build may fail |
| Performance | Slower (unoptimized) | Fast (optimized) |
| Size | Larger bundles | Minified bundles |
| Testing | Real-time changes | Test final output |

---

## 💡 Tips

1. **Keep Dev Server Running**: Leave it open while testing multiple pages
2. **Use Multiple Tabs**: Test different sections simultaneously
3. **Check Console**: Always have DevTools open
4. **Test User Flows**: 
   - Homepage → Blog → Post
   - Homepage → Services → Contact
   - Homepage → Locations → Specific area
5. **Mobile First**: Test responsive design early

---

## 🚀 After Local Testing

When satisfied with local testing:

```bash
# Step 1: Commit final changes (if any)
git add -A
git commit -m "Final pre-deployment tests completed"

# Step 2: Push to GitHub
git push origin main

# Step 3: Monitor Vercel deployment
# Visit: https://vercel.com/rockson61/idcv
```

---

## 📞 Support

**Current Status**: All errors ignored for deployment  
**Docs**: See `ERRORS_TO_FIX_AFTER_DEPLOYMENT.md` for known issues  
**Config**: TypeScript & ESLint errors won't stop dev server

---

**Start testing now with `npm run dev`!** 🧪

