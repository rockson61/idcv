# 🎯 MASTER SCRIPT - Complete Guide

**All 86 scripts consolidated into one powerful tool**

---

## 📋 Overview

The MASTER_SCRIPT.js consolidates all 86 automation scripts into a single, menu-driven tool with 6 major categories and 20+ functions.

### Original Scripts Consolidated
```
86 individual scripts → 1 master script
- Content generation scripts (15)
- Page management scripts (12)
- Fix/audit scripts (28)
- Optimization scripts (8)
- Sitemap scripts (6)
- Component analysis scripts (5)
- Build & deploy scripts (12)
```

---

## 🚀 Quick Start

### Interactive Mode (Recommended)
```bash
# Run interactive menu
node MASTER_SCRIPT.js

# Or make it executable
chmod +x MASTER_SCRIPT.js
./MASTER_SCRIPT.js
```

### Command Line Mode
```bash
# Run specific commands
node MASTER_SCRIPT.js count-pages
node MASTER_SCRIPT.js analyze-components
node MASTER_SCRIPT.js full-analysis
```

---

## 📁 Categories & Functions

### 1️⃣  CONTENT GENERATION
**Original scripts**: 15 scripts  
**Functions**:
- `generateBlogPost(topic, category)` - Create blog posts
- `generateServicePage(serviceName)` - Create service pages
- `generateLocationPage(city, area)` - Create location pages

**Replaces**:
- generate-blog-posts-phase{1-5}.js
- generate-comprehensive-blogs.js
- generate-dental-content.js
- generate-location-pages.js
- generate-priority-service-pages.js

---

### 2️⃣  PAGE MANAGEMENT
**Original scripts**: 12 scripts  
**Functions**:
- `countPages()` - Count all pages by category
- `listRoutes()` - List all routes (saves to output/routes.txt)
- `findBrokenLinks()` - Find broken internal links

**Replaces**:
- generate-location-index.js
- generate-sitemap-urls.js
- verify-pages.sh

**Example Output**:
```
Total pages: 2,396

Breakdown:
  blog: 411
  locations: 1,518
  services: 84
  conditions: 11
  other: 372
```

---

### 3️⃣  CODE ANALYSIS & FIXES
**Original scripts**: 28 scripts  
**Functions**:
- `analyzeComponents()` - Analyze all components
- `fixCommonIssues()` - Fix common code issues
- `findDuplicates()` - Find duplicate components

**Replaces**:
- comprehensive-audit.js
- fix-all-blog-schemas.js
- fix-all-blog-syntax-errors.js
- fix-all-critical-errors.js
- fix-all-h1-titles-final.js
- fix-relevant-qa-widget.js
- fix-service-semantic-content.js
- systematic-analysis.js
- (and 20 more fix scripts)

**Example Output**:
```
Component Analyzer

Total components: 219

By category:
  ask-dentist: 9
  blog: 5
  location: 12
  ui: 24
  widgets: 4

Largest components:
  1. footer.tsx - 77.44KB (1,754 lines)
  2. custom-google-map.tsx - 62.13KB (1,697 lines)
  3. PeopleAlsoSearchFor.tsx - 28.36KB (354 lines)
```

---

### 4️⃣  SEO & OPTIMIZATION
**Original scripts**: 8 scripts  
**Functions**:
- `optimizeH1Titles()` - Check H1 optimization
- `generateMetaDescriptions()` - Check meta tags
- `checkSchemaMarkup()` - Verify schema markup

**Replaces**:
- optimize-all-blog-titles-ctr.js
- optimize-all-location-h1.js
- optimize-blog-titles.js
- update-service-h1-titles.js

**Example Output**:
```
H1 Title Optimizer
2,396 pages have H1 titles

Schema Markup Checker

Schema markup usage:
  LocalBusiness: 1,518 pages
  Article: 411 pages
  Service: 84 pages
  FAQPage: 2,396 pages
  BreadcrumbList: 2,396 pages
```

---

### 5️⃣  SITEMAP GENERATION
**Original scripts**: 6 scripts  
**Functions**:
- `generateSitemap()` - Create XML sitemap
- `generateRobotsTxt()` - Create robots.txt

**Replaces**:
- generate-sitemap-links.js
- generate-sitemap-urls.js
- update-sitemap-with-blogs.js
- generate-chennai-sitemap.js

**Example Output**:
```
Sitemap Generator

Found 2,396 routes
✅ Sitemap generated with 2,396 URLs
✅ Saved to output/sitemap.xml

Robots.txt Generator
✅ Robots.txt generated at output/robots.txt
```

---

### 6️⃣  BUILD & DEPLOY
**Original scripts**: 12 scripts  
**Functions**:
- `checkBuildReadiness()` - Verify build config
- `generateBuildReport()` - Create build report

**Replaces**:
- verify-sitemap.sh
- deploy.sh

**Example Output**:
```
Build Readiness Checker

Build readiness:
  ✅ next.config.js exists
  ✅ package.json exists
  ✅ tsconfig.json exists
  ✅ vercel.json exists
  ✅ .gitignore exists

✅ Project is ready for build!
```

---

## 🎮 Interactive Menu

### Main Menu
```
╔════════════════════════════════════════════════════════╗
║                                                        ║
║     MASTER SCRIPT - Website Management Tool            ║
║     Indira Dental Clinic                               ║
║                                                        ║
╚════════════════════════════════════════════════════════╝

1. Content Generation
   └─ Blog posts, services, locations

2. Page Management
   └─ Count pages, list routes, find broken links

3. Code Analysis & Fixes
   └─ Analyze components, fix issues, find duplicates

4. SEO & Optimization
   └─ H1 optimization, meta descriptions, schema markup

5. Sitemap Generation
   └─ XML sitemap, robots.txt

6. Build & Deploy
   └─ Build readiness, generate reports

7. Run All Checks
   └─ Comprehensive analysis

0. Exit

Select an option (0-7):
```

---

## 💻 Command Line Usage

### Available Commands

```bash
# Count all pages
node MASTER_SCRIPT.js count-pages

# List all routes
node MASTER_SCRIPT.js list-routes

# Analyze components
node MASTER_SCRIPT.js analyze-components

# Check SEO optimization
node MASTER_SCRIPT.js check-seo

# Generate sitemap
node MASTER_SCRIPT.js generate-sitemap

# Check build readiness
node MASTER_SCRIPT.js build-check

# Run full analysis (all checks)
node MASTER_SCRIPT.js full-analysis

# Show help
node MASTER_SCRIPT.js help
```

---

## 📊 Output Files

All outputs are saved to the `output/` directory:

```
output/
├── routes.txt                # All routes
├── sitemap.xml              # XML sitemap
├── robots.txt               # Robots.txt
├── build-report.json        # Build statistics
└── analysis-report.json     # Component analysis
```

---

## 🔧 Configuration

The script uses these directories:

```javascript
config = {
  rootDir: '/path/to/project',
  appDir: '/path/to/project/app',
  componentsDir: '/path/to/project/components',
  scriptsDir: '/path/to/project/scripts',
  outputDir: '/path/to/project/output',
}
```

---

## 🎯 Common Use Cases

### 1. Daily Development
```bash
# Quick status check
node MASTER_SCRIPT.js count-pages
node MASTER_SCRIPT.js analyze-components
```

### 2. Before Deployment
```bash
# Full check before deploy
node MASTER_SCRIPT.js full-analysis
node MASTER_SCRIPT.js build-check
```

### 3. SEO Audit
```bash
# SEO verification
node MASTER_SCRIPT.js check-seo
node MASTER_SCRIPT.js generate-sitemap
```

### 4. Content Creation
```bash
# Interactive content generation
node MASTER_SCRIPT.js
# Select option 1
```

---

## 📚 Module Usage

You can also import the master script as a module:

```javascript
const {
  pageManagement,
  codeAnalysis,
  seoOptimization,
  utils
} = require('./MASTER_SCRIPT.js');

// Use functions programmatically
const totalPages = pageManagement.countPages();
const components = codeAnalysis.analyzeComponents();
```

---

## 🔍 Detailed Function Reference

### Page Management

#### `countPages()`
Counts all pages by category

**Returns**: `number` - Total page count

**Output**: Console log with breakdown

**Example**:
```javascript
const total = pageManagement.countPages();
// Total pages: 2,396
// Breakdown:
//   blog: 411
//   locations: 1,518
//   ...
```

#### `listRoutes()`
Lists all routes and saves to file

**Returns**: `string[]` - Array of routes

**Output**: `output/routes.txt`

**Example**:
```javascript
const routes = pageManagement.listRoutes();
// ['/blog', '/about-us', '/services/root-canal-treatment', ...]
```

#### `findBrokenLinks()`
Finds potentially broken internal links

**Returns**: `string[]` - Array of broken links

**Example**:
```javascript
const broken = pageManagement.findBrokenLinks();
// ['/old-page', '/deleted-service', ...]
```

---

### Code Analysis

#### `analyzeComponents()`
Analyzes all React components

**Returns**: `object` - Analysis results

**Properties**:
- `total`: Total component count
- `byCategory`: Components grouped by directory
- `largestFiles`: Top 10 largest components
- `unused`: Potentially unused components

#### `fixCommonIssues()`
Fixes common code issues automatically

**Returns**: `object` - Fix statistics

**Fixes**:
- Missing 'use client' directives
- Common import errors
- Basic type issues

#### `findDuplicates()`
Finds potentially duplicate components

**Returns**: `array` - List of duplicate pairs

---

### SEO Optimization

#### `optimizeH1Titles()`
Checks H1 title optimization

**Returns**: `number` - Pages with H1 titles

#### `generateMetaDescriptions()`
Checks meta tag presence

**Returns**: `number` - Pages with metadata

#### `checkSchemaMarkup()`
Verifies schema markup usage

**Returns**: `object` - Schema type counts

---

### Sitemap Generation

#### `generateSitemap()`
Generates XML sitemap

**Returns**: `string` - Sitemap XML

**Output**: `output/sitemap.xml`

#### `generateRobotsTxt()`
Generates robots.txt

**Returns**: `string` - Robots.txt content

**Output**: `output/robots.txt`

---

### Build & Deploy

#### `checkBuildReadiness()`
Verifies build configuration

**Returns**: `object` - Checklist results

**Checks**:
- next.config.js exists
- package.json exists
- tsconfig.json exists
- vercel.json exists
- .gitignore exists

#### `generateBuildReport()`
Creates detailed build report

**Returns**: `object` - Build statistics

**Output**: `output/build-report.json`

---

## 🛠️ Utilities

### Logging
```javascript
utils.log.info('Information message');
utils.log.success('Success message');
utils.log.error('Error message');
utils.log.warning('Warning message');
utils.log.section('Section Header');
```

### File Operations
```javascript
// Get all files with extension
const files = utils.file.getAllFiles(directory, '.tsx');

// Read file
const content = utils.file.readFile(path);

// Write file
utils.file.writeFile(path, content);
```

### String Utilities
```javascript
// Convert to slug
const slug = utils.string.slugify('Root Canal Treatment');
// 'root-canal-treatment'

// Capitalize
const cap = utils.string.capitalize('hello');
// 'Hello'

// Title case
const title = utils.string.titleCase('hello world');
// 'Hello World'
```

---

## ⚡ Performance

### Execution Time
- **count-pages**: ~2 seconds
- **list-routes**: ~3 seconds
- **analyze-components**: ~5 seconds
- **full-analysis**: ~15 seconds

### Memory Usage
- **Small operations**: ~50MB
- **Full analysis**: ~200MB
- **Component analysis**: ~100MB

---

## 🔐 Safety Features

1. **Non-destructive**: Read-only by default
2. **Backup recommendations**: Warns before making changes
3. **Output directory**: All outputs saved to `output/`
4. **Error handling**: Graceful error messages
5. **Validation**: Checks before file operations

---

## 📝 Examples

### Example 1: Daily Development Check
```bash
# Morning routine
node MASTER_SCRIPT.js

# Select option 7 (Run All Checks)
# Review output in output/ directory
```

### Example 2: Pre-Deployment Audit
```bash
# Run full analysis
node MASTER_SCRIPT.js full-analysis

# Check output files
ls -lh output/

# Review build-report.json
cat output/build-report.json
```

### Example 3: SEO Optimization
```bash
# Check SEO
node MASTER_SCRIPT.js check-seo

# Generate fresh sitemap
node MASTER_SCRIPT.js generate-sitemap

# Verify output
cat output/sitemap.xml
```

---

## 🚨 Troubleshooting

### Common Issues

**Issue**: "Cannot find module"
```bash
# Solution: Run from project root
cd /path/to/project
node MASTER_SCRIPT.js
```

**Issue**: "Permission denied"
```bash
# Solution: Make executable
chmod +x MASTER_SCRIPT.js
./MASTER_SCRIPT.js
```

**Issue**: "Output directory not found"
```bash
# Solution: Script creates it automatically
# But you can create manually:
mkdir output
```

---

## 📊 Comparison: Before vs After

### Before (86 scripts)
```
✗ Hard to find the right script
✗ Inconsistent interfaces
✗ No unified logging
✗ Duplicate functionality
✗ No interactive mode
✗ Poor discoverability
```

### After (1 master script)
```
✓ Single entry point
✓ Unified menu interface
✓ Consistent logging
✓ Consolidated functions
✓ Interactive + CLI modes
✓ Auto-complete friendly
✓ Well-documented
✓ Modular & importable
```

---

## 🎯 Future Enhancements

### Planned Features
- [ ] Content generation with AI
- [ ] Automated backups before fixes
- [ ] Performance profiling
- [ ] Deployment automation
- [ ] Rollback functionality
- [ ] Scheduled tasks
- [ ] Email reports
- [ ] Dashboard UI

---

## 📞 Support

### Getting Help
```bash
# Show help
node MASTER_SCRIPT.js help

# Interactive mode has built-in help
node MASTER_SCRIPT.js
# Then explore menus
```

### Documentation
- This guide: `MASTER_SCRIPT_GUIDE.md`
- Architecture: `PROJECT_ARCHITECTURE_COMPLETE.md`
- Optimization: `OPTIMIZATION_RECOMMENDATIONS.md`

---

**Last Updated**: October 29, 2025  
**Version**: 1.0.0  
**Consolidates**: 86 individual scripts  
**Functions**: 20+ core functions  
**Status**: Production ready

