#!/usr/bin/env node

/**
 * GENERATE CHENNAI SITEMAP
 * Creates a dedicated sitemap for all Chennai location pages
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.dentalclinicinvellore.in';
const chennaiDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'chennai');

// Get all Chennai directories
const locations = fs.readdirSync(chennaiDir)
  .filter(item => {
    const itemPath = path.join(chennaiDir, item);
    return fs.statSync(itemPath).isDirectory();
  })
  .map(slug => {
    const pagePath = path.join(chennaiDir, slug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      return slug;
    }
    return null;
  })
  .filter(Boolean);

console.log(`📊 Found ${locations.length} Chennai location pages`);

// Determine priority
function getPriority(slug) {
  const majorAreas = ['anna-nagar', 't-nagar', 'thygaraya-nagar', 'adyar', 'velacheri', 
                      'vadapalani', 'nungambakkam', 'mylapore', 'besant-nagar', 'egmore',
                      'kilpauk', 'kodambakkam', 'tiruvanmiyur', 'koyambedu', 'perambur', 'saidapet'];
  
  if (majorAreas.includes(slug)) return 0.85;
  return 0.8;
}

// Generate sitemap entries
const sitemapEntries = [];

// Add main Chennai page
sitemapEntries.push({
  url: `${baseUrl}/in/tamil-nadu/chennai`,
  priority: 0.95,
  changefreq: 'weekly',
  lastmod: new Date().toISOString()
});

// Add all location pages
locations.forEach(slug => {
  sitemapEntries.push({
    url: `${baseUrl}/in/tamil-nadu/chennai/${slug}`,
    priority: getPriority(slug),
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  });
});

console.log(`✅ Generated ${sitemapEntries.length} sitemap entries`);

// Generate XML sitemap for Chennai pages only
const chennaiSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Save Chennai sitemap
const sitemapPath = path.join(__dirname, '..', 'public', 'chennai-locations-sitemap.xml');
fs.writeFileSync(sitemapPath, chennaiSitemap);
console.log(`✅ Generated Chennai sitemap: ${sitemapPath}`);

// Generate URL list (simple text file)
const urlList = sitemapEntries.map(e => e.url).join('\n');
const urlListPath = path.join(__dirname, '..', 'docs', 'chennai-location-urls.txt');
fs.writeFileSync(urlListPath, urlList);
console.log(`✅ Generated URL list: ${urlListPath}`);

// Generate JSON for reference
const jsonPath = path.join(__dirname, '..', 'docs', 'chennai-sitemap-entries.json');
fs.writeFileSync(jsonPath, JSON.stringify({ entries: sitemapEntries, total: sitemapEntries.length }, null, 2));
console.log(`✅ Generated JSON reference: ${jsonPath}`);

// Statistics
console.log('\n📊 Chennai Sitemap Statistics:');
console.log(`   Total URLs: ${sitemapEntries.length}`);
console.log(`   High Priority (0.85-0.95): ${sitemapEntries.filter(e => e.priority >= 0.85).length}`);
console.log(`   Medium Priority (0.8): ${sitemapEntries.filter(e => e.priority === 0.8).length}`);
console.log(`   Base URL: ${baseUrl}`);
console.log('');
console.log('📂 Files created:');
console.log('   • public/chennai-locations-sitemap.xml');
console.log('   • docs/chennai-location-urls.txt');
console.log('   • docs/chennai-sitemap-entries.json');
console.log('');
console.log('✅ Chennai sitemap generation complete!');
console.log('');

