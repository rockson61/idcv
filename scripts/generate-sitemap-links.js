#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Generating comprehensive sitemap links...\n');

// Collect all page paths
const pages = {
  location: [],
  service: [],
  pricing: [],
  district: []
};

// Function to recursively find page.tsx files
function findPages(dir, baseUrl = '') {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findPages(filePath, baseUrl + '/' + file);
    } else if (file === 'page.tsx' || file === 'page.ts') {
      const url = baseUrl.replace(/^\/app/, '').replace(/\/page$/, '') || '/';
      
      if (url.includes('/in/tamil-nadu/')) {
        if (url.match(/\/(vellore|chennai|kanchipuram|ranipet|tirupattur|tiruvannamalai)$/)) {
          pages.district.push(url);
        } else {
          pages.location.push(url);
        }
      } else if (url.includes('/services/')) {
        pages.service.push(url);
      } else if (url.includes('/pricing')) {
        pages.pricing.push(url);
      }
    }
  });
}

// Scan directories
findPages(path.join(__dirname, '..', 'app'));

console.log('📊 Pages Found:');
console.log(`  Districts: ${pages.district.length}`);
console.log(`  Locations: ${pages.location.length}`);
console.log(`  Services: ${pages.service.length}`);
console.log(`  Pricing: ${pages.pricing.length}`);
console.log(`  Total: ${pages.district.length + pages.location.length + pages.service.length + pages.pricing.length}`);

// Generate sitemap content
const sitemapData = {
  districts: pages.district.sort(),
  locations: pages.location.sort(),
  services: pages.service.sort(),
  pricing: pages.pricing.sort(),
  total: pages.district.length + pages.location.length + pages.service.length + pages.pricing.length
};

fs.writeFileSync(
  path.join(__dirname, 'sitemap-data.json'),
  JSON.stringify(sitemapData, null, 2)
);

console.log('\n✅ Sitemap data generated: scripts/sitemap-data.json');
console.log('🎯 Use this data to update /app/sitemap/page.tsx');

