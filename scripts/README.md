# Location Page Generation Scripts

This directory contains scripts to generate hyperlocal location pages for all 400+ Vellore area locations.

## 📁 Files

| File | Purpose |
|------|---------|
| `quick-generate.js` | ⚡ Fast single/batch page generation |
| `generate-location-pages.js` | 📄 Detailed page generation with customization |
| `import-locations-from-csv.js` | 📊 Import location data from CSV |
| `bulk-generate-all-locations.sh` | 🚀 Complete bulk generation pipeline |
| `all-vellore-locations.csv` | 📋 Complete location database (70+ locations) |

## 🚀 Quick Start

### Generate a Single Location Page

```bash
node scripts/quick-generate.js "Walajapet" "Wallajah" "632513" "18 km" "28 minutes"
```

### Generate Multiple Pages from CSV

```bash
node scripts/quick-generate.js --batch scripts/all-vellore-locations.csv
```

### Run Complete Bulk Generation

```bash
bash scripts/bulk-generate-all-locations.sh
```

### Dry Run (Test without creating files)

```bash
bash scripts/bulk-generate-all-locations.sh --dry-run
```

### Generate Limited Number

```bash
bash scripts/bulk-generate-all-locations.sh --limit=50
```

## 📊 Location Data Format

### CSV Format
```csv
name,taluk,pincode,distance,travelTime
Arakkonam,Arakkonam,631001,35 km,45 minutes
Arcot,Arcot,632503,25 km,35 minutes
```

### JavaScript Format
```javascript
const location = {
  name: 'Arakkonam',
  taluk: 'Arakkonam',
  pincode: '631001',
  distance: '35 km',
  travelTime: '45 minutes'
}
```

## 🎯 Generation Options

### Option 1: Quick Generate (Recommended for Bulk)
**Best for:** Generating 100+ pages quickly

```bash
# Single location
node scripts/quick-generate.js "LocationName" "Taluk" "PIN" "Distance" "Time"

# Batch from CSV
node scripts/quick-generate.js --batch scripts/all-vellore-locations.csv
```

**Output:** Fully functional pages with all components

### Option 2: Detailed Generate (Recommended for Important Locations)
**Best for:** Top 20-50 locations with custom data

```bash
node scripts/generate-location-pages.js --location=Arakkonam
node scripts/generate-location-pages.js --taluk=Arcot --limit=10
```

**Output:** Pages with enhanced customization

### Option 3: Manual Copy (Recommended for Top 10)
**Best for:** Major towns requiring unique content

1. Copy `/app/in/tamil-nadu/vellore/sholingur/page.tsx`
2. Update location-specific data
3. Add custom amenities, reviews, FAQs
4. Save as new location

## 📋 Complete Workflow

### Step 1: Prepare Data
```bash
# Edit all-vellore-locations.csv with your locations
nano scripts/all-vellore-locations.csv
```

### Step 2: Generate Pages
```bash
# Generate all pages
node scripts/quick-generate.js --batch scripts/all-vellore-locations.csv
```

### Step 3: Validate
```bash
# Run validation
bash scripts/bulk-generate-all-locations.sh --dry-run
```

### Step 4: Test Locally
```bash
npm run dev
# Visit: http://localhost:3000/in/tamil-nadu/vellore/[location]
```

### Step 5: Customize Key Locations
```bash
# Manually edit important locations
# Add real reviews, specific amenities, photos
```

### Step 6: Deploy
```bash
npm run build
# Deploy to Vercel/hosting
```

## 🎨 What Gets Generated

Each page includes:
- ✅ Location-specific H1 and metadata
- ✅ Google Maps embed with directions
- ✅ 6 dental services with pricing
- ✅ Dr. Rockson Samuel profile
- ✅ Price comparison table
- ✅ Why choose us section (8 reasons)
- ✅ Local amenities (banks, ATMs, hospitals, etc.)
- ✅ Travel information (bus, train, car, auto)
- ✅ Patient reviews (3 default reviews)
- ✅ FAQs (5 location-specific questions)
- ✅ Nearby locations (6 cross-links)
- ✅ Contact information
- ✅ Multiple CTAs
- ✅ Schema markup for SEO

## 📊 Current Status

| Category | Count | Status |
|----------|-------|--------|
| Major Towns | 15 | ✅ Priority locations |
| Medium Towns | 25 | 📝 CSV ready |
| Villages | 30+ | 📝 CSV ready |
| **Total in CSV** | **70+** | ✅ Ready to generate |
| **Remaining** | **330+** | ⏳ Add to CSV |

## 🔧 Customization

### Add Custom Amenities
Edit the generated page and update the amenities array:

```typescript
const amenities = [
  { name: 'Your Bank Name', type: 'bank' as const, distance: '0.5 km', address: 'Address' },
  // Add more...
]
```

### Add Real Reviews
Replace `generateDefaultReviews(locationName)` with:

```typescript
const reviews = [
  {
    name: 'Real Patient Name',
    location: locationName,
    rating: 5,
    treatment: 'Dental Implants',
    text: 'Real review text...',
    date: 'Jan 15, 2024',
    verified: true
  }
]
```

### Update Tourist Places
```typescript
const touristPlaces = [
  'Specific Temple Name',
  'Local Fort',
  'Famous Park',
]
```

## 🐛 Troubleshooting

### Issue: Pages not generating
**Solution:** Check Node.js version (requires 16+)
```bash
node --version
```

### Issue: Import errors
**Solution:** Ensure all components exist in `/components/location/`

### Issue: Duplicate pages
**Solution:** Script checks for existing pages and skips them

### Issue: Build errors
**Solution:** Run lint and fix errors
```bash
npm run lint
```

## 📈 Performance

- **Generation Speed:** ~100 pages per minute
- **Page Size:** ~15-20 KB per page
- **Build Time:** ~2-3 seconds per page
- **Total Build:** ~400 pages in 10-15 minutes

## 🎯 Priority Locations

### Tier 1 (Generate First - 15 locations)
- Arakkonam, Arcot, Ranipet, Sholingur, Walajapet
- Melvisharam, Katpadi, Gudiyattam, Tirupattur, Vaniyambadi
- Ambur, Jolarpet, Yelagiri, Pallikonda, Natrampalli

### Tier 2 (Medium Priority - 30 locations)
- All taluk headquarters
- Towns with 10,000+ population
- Railway stations

### Tier 3 (Bulk Generate - 350+ locations)
- Villages and smaller localities
- Can be auto-generated and customized later

## 📞 Support

For issues or questions:
- Check the main guide: `/docs/LOCATION_PAGES_GUIDE.md`
- Review example pages in `/app/in/tamil-nadu/vellore/`
- Test components in `/components/location/`

## 🎁 Tips

1. **Start with top 20 locations** - Generate and test
2. **Customize major towns** - Add real data
3. **Bulk generate rest** - Use CSV batch
4. **Monitor analytics** - Track which pages get traffic
5. **Update high-traffic pages** - Add more content

---

**Last Updated:** October 28, 2024
**Total Locations:** 400+ (70+ in CSV, ready to generate)
**Status:** ✅ Scripts ready, batch data prepared

