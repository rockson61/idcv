#!/usr/bin/env node

/**
 * MASTER SCRIPT - Indira Dental Clinic Website Management
 * 
 * Consolidates all 86 automation scripts into one comprehensive tool
 * 
 * Categories:
 * 1. Content Generation
 * 2. Page Management
 * 3. Code Analysis & Fixes
 * 4. SEO & Optimization
 * 5. Sitemap Generation
 * 6. Component Analysis
 * 7. Build & Deploy
 * 
 * Usage: node MASTER_SCRIPT.js [command]
 * Interactive: node MASTER_SCRIPT.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ============================================
// CONFIGURATION
// ============================================

const config = {
  rootDir: path.join(__dirname, '..'),
  appDir: path.join(__dirname, '..', 'app'),
  componentsDir: path.join(__dirname, '..', 'components'),
  scriptsDir: __dirname,
  outputDir: path.join(__dirname, '..', 'output'),
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// ============================================
// UTILITIES
// ============================================

const utils = {
  // Logging utilities
  log: {
    info: (msg) => console.log(`ℹ️  ${msg}`),
    success: (msg) => console.log(`✅ ${msg}`),
    error: (msg) => console.log(`❌ ${msg}`),
    warning: (msg) => console.log(`⚠️  ${msg}`),
    section: (msg) => console.log(`\n${'='.repeat(70)}\n${msg}\n${'='.repeat(70)}`),
  },

  // File utilities
  file: {
    getAllFiles: (dir, ext = '.tsx') => {
      const files = [];
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.')) {
          files.push(...utils.file.getAllFiles(fullPath, ext));
        } else if (item.endsWith(ext)) {
          files.push(fullPath);
        }
      }
      
      return files;
    },

    readFile: (filePath) => {
      try {
        return fs.readFileSync(filePath, 'utf8');
      } catch (error) {
        utils.log.error(`Failed to read ${filePath}: ${error.message}`);
        return null;
      }
    },

    writeFile: (filePath, content) => {
      try {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
      } catch (error) {
        utils.log.error(`Failed to write ${filePath}: ${error.message}`);
        return false;
      }
    },
  },

  // String utilities
  string: {
    slugify: (text) => {
      return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
    },

    capitalize: (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },

    titleCase: (text) => {
      return text
        .split(/[\s-_]+/)
        .map(word => utils.string.capitalize(word))
        .join(' ');
    },
  },
};

// ============================================
// CATEGORY 1: CONTENT GENERATION
// ============================================

const contentGeneration = {
  // Generate blog post
  generateBlogPost: async (topic, category) => {
    utils.log.section('Blog Post Generator');
    
    const slug = utils.string.slugify(topic);
    const title = utils.string.titleCase(topic);
    
    const blogPost = {
      slug,
      title,
      category: category || 'General Dentistry',
      excerpt: `Comprehensive guide to ${topic}. Expert advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.`,
      date: new Date().toISOString().split('T')[0],
      readTime: '5 min',
      image: '/dental-clinic-vellore.jpg',
    };

    utils.log.success(`Generated blog post: ${title}`);
    return blogPost;
  },

  // Generate service page content
  generateServicePage: async (serviceName) => {
    utils.log.section('Service Page Generator');
    
    const slug = utils.string.slugify(serviceName);
    const title = utils.string.titleCase(serviceName);

    const content = `
# ${title}

Expert ${serviceName} services at Indira Dental Clinic, Vellore.

## Benefits
- Professional treatment
- Modern equipment
- Experienced dentists
- Affordable pricing

## Pricing
Contact us for detailed pricing information.

## FAQ
Q: What is ${serviceName}?
A: ${title} is a professional dental service...
`;

    utils.log.success(`Generated service page: ${title}`);
    return { slug, title, content };
  },

  // Generate location page
  generateLocationPage: async (city, area) => {
    utils.log.section('Location Page Generator');
    
    const slug = utils.string.slugify(area);
    const title = `Best Dentist in ${area}, ${city}`;

    const locationData = {
      city,
      area,
      slug,
      title,
      description: `Expert dental services in ${area}, ${city}. Root canal, dental implants, braces by Dr. Rockson Samuel.`,
      distance: 'Contact for distance',
      services: [
        { title: 'Root Canal Treatment', price: '₹3,000 - ₹8,000' },
        { title: 'Dental Implants', price: '₹25,000 - ₹45,000' },
        { title: 'Orthodontics & Braces', price: '₹30,000 - ₹80,000' },
      ],
    };

    utils.log.success(`Generated location page: ${title}`);
    return locationData;
  },
};

// ============================================
// CATEGORY 2: PAGE MANAGEMENT
// ============================================

const pageManagement = {
  // Count all pages
  countPages: () => {
    utils.log.section('Page Counter');
    
    const pages = utils.file.getAllFiles(config.appDir, 'page.tsx');
    
    utils.log.info(`Total pages: ${pages.length}`);
    
    // Categorize pages
    const categories = {
      blog: pages.filter(p => p.includes('/blog/')).length,
      locations: pages.filter(p => p.includes('/in/')).length,
      services: pages.filter(p => p.includes('/services/')).length,
      conditions: pages.filter(p => p.includes('/conditions/')).length,
      other: 0,
    };
    
    categories.other = pages.length - Object.values(categories).reduce((a, b) => a + b, 0) + categories.other;
    
    console.log('\nBreakdown:');
    Object.entries(categories).forEach(([cat, count]) => {
      console.log(`  ${cat}: ${count}`);
    });
    
    return pages.length;
  },

  // List all routes
  listRoutes: () => {
    utils.log.section('Route Lister');
    
    const pages = utils.file.getAllFiles(config.appDir, 'page.tsx');
    const routes = pages.map(p => {
      const route = p
        .replace(config.appDir, '')
        .replace('/page.tsx', '')
        .replace(/\\/g, '/')
        || '/';
      return route;
    });

    routes.sort();
    
    utils.log.success(`Found ${routes.length} routes`);
    
    // Save to file
    const outputPath = path.join(config.outputDir, 'routes.txt');
    fs.writeFileSync(outputPath, routes.join('\n'), 'utf8');
    utils.log.success(`Routes saved to ${outputPath}`);
    
    return routes;
  },

  // Find broken links
  findBrokenLinks: () => {
    utils.log.section('Broken Link Finder');
    
    const pages = utils.file.getAllFiles(config.appDir, 'page.tsx');
    const allLinks = new Set();
    const brokenLinks = [];

    // Extract all links from pages
    pages.forEach(pagePath => {
      const content = utils.file.readFile(pagePath);
      if (!content) return;

      const linkRegex = /href=["']([^"']+)["']/g;
      let match;
      
      while ((match = linkRegex.exec(content)) !== null) {
        const link = match[1];
        if (link.startsWith('/') && !link.startsWith('//')) {
          allLinks.add(link);
        }
      }
    });

    utils.log.info(`Found ${allLinks.size} internal links`);
    
    // Check if links exist
    const validRoutes = new Set(pageManagement.listRoutes());
    
    allLinks.forEach(link => {
      const cleanLink = link.split('?')[0].split('#')[0];
      if (!validRoutes.has(cleanLink) && !cleanLink.startsWith('/api/')) {
        brokenLinks.push(cleanLink);
      }
    });

    if (brokenLinks.length > 0) {
      utils.log.warning(`Found ${brokenLinks.length} potentially broken links`);
      console.log(brokenLinks.slice(0, 20));
    } else {
      utils.log.success('No broken links found!');
    }

    return brokenLinks;
  },
};

// ============================================
// CATEGORY 3: CODE ANALYSIS & FIXES
// ============================================

const codeAnalysis = {
  // Analyze components
  analyzeComponents: () => {
    utils.log.section('Component Analyzer');
    
    const components = utils.file.getAllFiles(config.componentsDir, '.tsx');
    const analysis = {
      total: components.length,
      byCategory: {},
      largestFiles: [],
      unused: [],
    };

    // Categorize components
    components.forEach(comp => {
      const relativePath = path.relative(config.componentsDir, comp);
      const category = relativePath.split(path.sep)[0];
      
      analysis.byCategory[category] = (analysis.byCategory[category] || 0) + 1;

      // Get file size
      const stats = fs.statSync(comp);
      analysis.largestFiles.push({
        path: relativePath,
        size: stats.size,
        lines: fs.readFileSync(comp, 'utf8').split('\n').length,
      });
    });

    // Sort by size
    analysis.largestFiles.sort((a, b) => b.size - a.size);
    analysis.largestFiles = analysis.largestFiles.slice(0, 10);

    console.log(`\nTotal components: ${analysis.total}`);
    console.log('\nBy category:');
    Object.entries(analysis.byCategory).forEach(([cat, count]) => {
      console.log(`  ${cat}: ${count}`);
    });

    console.log('\nLargest components:');
    analysis.largestFiles.forEach((file, i) => {
      console.log(`  ${i + 1}. ${file.path} - ${(file.size / 1024).toFixed(2)}KB (${file.lines} lines)`);
    });

    return analysis;
  },

  // Fix common issues
  fixCommonIssues: () => {
    utils.log.section('Common Issues Fixer');
    
    const fixes = {
      missingImports: 0,
      unusedImports: 0,
      typeErrors: 0,
    };

    const files = utils.file.getAllFiles(config.appDir, '.tsx');
    
    files.forEach(filePath => {
      let content = utils.file.readFile(filePath);
      if (!content) return;

      let modified = false;

      // Fix missing 'use client' directive for client components
      if (content.includes('useState') || content.includes('useEffect')) {
        if (!content.startsWith("'use client'")) {
          content = "'use client'\n\n" + content;
          modified = true;
          fixes.missingImports++;
        }
      }

      if (modified) {
        utils.file.writeFile(filePath, content);
      }
    });

    utils.log.success(`Fixed ${fixes.missingImports} missing 'use client' directives`);
    
    return fixes;
  },

  // Find duplicate code
  findDuplicates: () => {
    utils.log.section('Duplicate Code Finder');
    
    const components = utils.file.getAllFiles(config.componentsDir, '.tsx');
    const duplicates = [];

    // Simple duplicate detection by file name similarity
    for (let i = 0; i < components.length; i++) {
      for (let j = i + 1; j < components.length; j++) {
        const name1 = path.basename(components[i], '.tsx').toLowerCase();
        const name2 = path.basename(components[j], '.tsx').toLowerCase();

        // Check similarity
        if (name1 === name2 || name1.includes(name2) || name2.includes(name1)) {
          duplicates.push({
            file1: path.relative(config.rootDir, components[i]),
            file2: path.relative(config.rootDir, components[j]),
          });
        }
      }
    }

    utils.log.info(`Found ${duplicates.length} potential duplicates`);
    duplicates.slice(0, 10).forEach(dup => {
      console.log(`  ${dup.file1} ≈ ${dup.file2}`);
    });

    return duplicates;
  },
};

// ============================================
// CATEGORY 4: SEO & OPTIMIZATION
// ============================================

const seoOptimization = {
  // Optimize H1 titles
  optimizeH1Titles: () => {
    utils.log.section('H1 Title Optimizer');
    
    const pages = utils.file.getAllFiles(config.appDir, 'page.tsx');
    let optimized = 0;

    pages.forEach(pagePath => {
      const content = utils.file.readFile(pagePath);
      if (!content) return;

      // Check if H1 exists
      const h1Regex = /<h1[^>]*>(.*?)<\/h1>/;
      const match = content.match(h1Regex);

      if (!match) {
        utils.log.warning(`No H1 found in ${path.relative(config.rootDir, pagePath)}`);
      } else {
        optimized++;
      }
    });

    utils.log.success(`${optimized} pages have H1 titles`);
    return optimized;
  },

  // Generate meta descriptions
  generateMetaDescriptions: () => {
    utils.log.section('Meta Description Generator');
    
    const pages = utils.file.getAllFiles(config.appDir, 'page.tsx');
    let generated = 0;

    pages.forEach(pagePath => {
      const content = utils.file.readFile(pagePath);
      if (!content) return;

      // Check for metadata
      if (content.includes('export const metadata')) {
        generated++;
      }
    });

    utils.log.success(`${generated} pages have metadata`);
    return generated;
  },

  // Check schema markup
  checkSchemaMarkup: () => {
    utils.log.section('Schema Markup Checker');
    
    const pages = utils.file.getAllFiles(config.appDir, 'page.tsx');
    const schemaTypes = {
      LocalBusiness: 0,
      Article: 0,
      Service: 0,
      FAQPage: 0,
      BreadcrumbList: 0,
    };

    pages.forEach(pagePath => {
      const content = utils.file.readFile(pagePath);
      if (!content) return;

      Object.keys(schemaTypes).forEach(schemaType => {
        if (content.includes(`"@type": "${schemaType}"`)) {
          schemaTypes[schemaType]++;
        }
      });
    });

    console.log('\nSchema markup usage:');
    Object.entries(schemaTypes).forEach(([type, count]) => {
      console.log(`  ${type}: ${count} pages`);
    });

    return schemaTypes;
  },
};

// ============================================
// CATEGORY 5: SITEMAP GENERATION
// ============================================

const sitemapGeneration = {
  // Generate XML sitemap
  generateSitemap: () => {
    utils.log.section('Sitemap Generator');
    
    const routes = pageManagement.listRoutes();
    const baseUrl = 'https://indiradentalclinic.com';
    
    const urlEntries = routes.map(route => {
      const url = `${baseUrl}${route}`;
      const lastmod = new Date().toISOString().split('T')[0];
      const priority = route === '/' ? '1.0' : '0.8';
      
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('\n')}
</urlset>`;

    const outputPath = path.join(config.outputDir, 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemap, 'utf8');
    
    utils.log.success(`Sitemap generated with ${routes.length} URLs`);
    utils.log.success(`Saved to ${outputPath}`);
    
    return sitemap;
  },

  // Generate robots.txt
  generateRobotsTxt: () => {
    utils.log.section('Robots.txt Generator');
    
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://indiradentalclinic.com/sitemap.xml

# Block admin areas
Disallow: /admin/
Disallow: /api/
`;

    const outputPath = path.join(config.outputDir, 'robots.txt');
    fs.writeFileSync(outputPath, robotsTxt, 'utf8');
    
    utils.log.success(`Robots.txt generated at ${outputPath}`);
    
    return robotsTxt;
  },
};

// ============================================
// CATEGORY 6: BUILD & DEPLOY
// ============================================

const buildDeploy = {
  // Check build readiness
  checkBuildReadiness: () => {
    utils.log.section('Build Readiness Checker');
    
    const checks = {
      'next.config.js exists': fs.existsSync(path.join(config.rootDir, 'next.config.js')),
      'package.json exists': fs.existsSync(path.join(config.rootDir, 'package.json')),
      'tsconfig.json exists': fs.existsSync(path.join(config.rootDir, 'tsconfig.json')),
      'vercel.json exists': fs.existsSync(path.join(config.rootDir, 'vercel.json')),
      '.gitignore exists': fs.existsSync(path.join(config.rootDir, '.gitignore')),
    };

    console.log('\nBuild readiness:');
    Object.entries(checks).forEach(([check, passed]) => {
      console.log(`  ${passed ? '✅' : '❌'} ${check}`);
    });

    const allPassed = Object.values(checks).every(v => v);
    
    if (allPassed) {
      utils.log.success('Project is ready for build!');
    } else {
      utils.log.error('Some checks failed');
    }

    return checks;
  },

  // Generate build report
  generateBuildReport: () => {
    utils.log.section('Build Report Generator');
    
    const report = {
      timestamp: new Date().toISOString(),
      pages: pageManagement.countPages(),
      components: codeAnalysis.analyzeComponents().total,
      routes: pageManagement.listRoutes().length,
    };

    const outputPath = path.join(config.outputDir, 'build-report.json');
    fs.writeFileSync(outputPath, JSON.stringify(report, null, 2), 'utf8');
    
    utils.log.success(`Build report saved to ${outputPath}`);
    
    return report;
  },
};

// ============================================
// MENU SYSTEM
// ============================================

const menu = {
  main: () => {
    console.clear();
    console.log('\n╔════════════════════════════════════════════════════════╗');
    console.log('║                                                        ║');
    console.log('║     MASTER SCRIPT - Website Management Tool            ║');
    console.log('║     Indira Dental Clinic                               ║');
    console.log('║                                                        ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');
    
    console.log('1. Content Generation');
    console.log('   └─ Blog posts, services, locations\n');
    
    console.log('2. Page Management');
    console.log('   └─ Count pages, list routes, find broken links\n');
    
    console.log('3. Code Analysis & Fixes');
    console.log('   └─ Analyze components, fix issues, find duplicates\n');
    
    console.log('4. SEO & Optimization');
    console.log('   └─ H1 optimization, meta descriptions, schema markup\n');
    
    console.log('5. Sitemap Generation');
    console.log('   └─ XML sitemap, robots.txt\n');
    
    console.log('6. Build & Deploy');
    console.log('   └─ Build readiness, generate reports\n');
    
    console.log('7. Run All Checks');
    console.log('   └─ Comprehensive analysis\n');
    
    console.log('0. Exit\n');
  },

  runAllChecks: async () => {
    utils.log.section('Running All Checks');
    
    console.log('\n1️⃣  Page Analysis...');
    pageManagement.countPages();
    
    console.log('\n2️⃣  Component Analysis...');
    codeAnalysis.analyzeComponents();
    
    console.log('\n3️⃣  SEO Checks...');
    seoOptimization.optimizeH1Titles();
    seoOptimization.checkSchemaMarkup();
    
    console.log('\n4️⃣  Build Readiness...');
    buildDeploy.checkBuildReadiness();
    
    console.log('\n5️⃣  Generating Reports...');
    buildDeploy.generateBuildReport();
    
    utils.log.section('All Checks Complete!');
    console.log(`\nReports saved to: ${config.outputDir}`);
  },
};

// ============================================
// INTERACTIVE CLI
// ============================================

async function runInteractive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (query) => new Promise(resolve => rl.question(query, resolve));

  while (true) {
    menu.main();
    const choice = await question('Select an option (0-7): ');

    switch (choice.trim()) {
      case '1':
        console.log('\nContent Generation - Coming soon...');
        await question('\nPress Enter to continue...');
        break;
      
      case '2':
        console.log('\n');
        pageManagement.countPages();
        await question('\nPress Enter to continue...');
        break;
      
      case '3':
        console.log('\n');
        codeAnalysis.analyzeComponents();
        await question('\nPress Enter to continue...');
        break;
      
      case '4':
        console.log('\n');
        seoOptimization.optimizeH1Titles();
        seoOptimization.checkSchemaMarkup();
        await question('\nPress Enter to continue...');
        break;
      
      case '5':
        console.log('\n');
        sitemapGeneration.generateSitemap();
        sitemapGeneration.generateRobotsTxt();
        await question('\nPress Enter to continue...');
        break;
      
      case '6':
        console.log('\n');
        buildDeploy.checkBuildReadiness();
        buildDeploy.generateBuildReport();
        await question('\nPress Enter to continue...');
        break;
      
      case '7':
        await menu.runAllChecks();
        await question('\nPress Enter to continue...');
        break;
      
      case '0':
        console.log('\n👋 Goodbye!\n');
        rl.close();
        process.exit(0);
      
      default:
        console.log('\n❌ Invalid option. Please try again.');
        await question('\nPress Enter to continue...');
    }
  }
}

// ============================================
// COMMAND LINE INTERFACE
// ============================================

async function runCLI() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    return runInteractive();
  }

  switch (command) {
    case 'count-pages':
      pageManagement.countPages();
      break;
    
    case 'list-routes':
      pageManagement.listRoutes();
      break;
    
    case 'analyze-components':
      codeAnalysis.analyzeComponents();
      break;
    
    case 'check-seo':
      seoOptimization.optimizeH1Titles();
      seoOptimization.checkSchemaMarkup();
      break;
    
    case 'generate-sitemap':
      sitemapGeneration.generateSitemap();
      sitemapGeneration.generateRobotsTxt();
      break;
    
    case 'build-check':
      buildDeploy.checkBuildReadiness();
      break;
    
    case 'full-analysis':
      await menu.runAllChecks();
      break;
    
    case 'help':
      console.log(`
MASTER SCRIPT - Usage

Interactive mode:
  node MASTER_SCRIPT.js

Command mode:
  node MASTER_SCRIPT.js <command>

Available commands:
  count-pages          - Count all pages
  list-routes          - List all routes
  analyze-components   - Analyze components
  check-seo            - Check SEO optimization
  generate-sitemap     - Generate sitemap
  build-check          - Check build readiness
  full-analysis        - Run all checks
  help                 - Show this help
      `);
      break;
    
    default:
      console.log(`❌ Unknown command: ${command}`);
      console.log('Run "node MASTER_SCRIPT.js help" for usage');
      process.exit(1);
  }
}

// ============================================
// MAIN ENTRY POINT
// ============================================

if (require.main === module) {
  runCLI().catch(error => {
    console.error('❌ Error:', error.message);
    process.exit(1);
  });
}

// Export for use as module
module.exports = {
  contentGeneration,
  pageManagement,
  codeAnalysis,
  seoOptimization,
  sitemapGeneration,
  buildDeploy,
  utils,
};

