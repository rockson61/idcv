#!/usr/bin/env node

/**
 * GENERATE SITEMAP URLS
 * Creates a list of all location URLs for sitemap submission
 * Also generates sitemap index if needed
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.dentalclinicinvellore.in';
const velloreDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'vellore');

// Get all directories
const locations = fs.readdirSync(velloreDir)
  .filter(item => {
    const itemPath = path.join(velloreDir, item);
    return fs.statSync(itemPath).isDirectory();
  })
  .map(slug => {
    const pagePath = path.join(velloreDir, slug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      return slug;
    }
    return null;
  })
  .filter(Boolean);

console.log(`📊 Found ${locations.length} Vellore location pages`);

// Determine priority
function getPriority(slug) {
  const majorTowns = ['arakkonam', 'arcot', 'ranipet', 'sholingur', 'walajapet', 
                      'tirupattur', 'vaniyambadi', 'ambur', 'gudiyattam', 'jolarpet',
                      'melvisharam', 'katpadi', 'sathuvachari', 'pallikonda', 'natrampalli',
                      'yelagiri-hills', 'cmc-vellore', 'vellore-institute-of-technology'];
  
  if (majorTowns.includes(slug)) return 0.8;
  return 0.75;
}

// Generate sitemap entries
const sitemapEntries = [];

// Add main Vellore page
sitemapEntries.push({
  url: `${baseUrl}/in/tamil-nadu/vellore`,
  priority: 0.9,
  changefreq: 'weekly',
  lastmod: new Date().toISOString()
});

// Add all location pages
locations.forEach(slug => {
  sitemapEntries.push({
    url: `${baseUrl}/in/tamil-nadu/vellore/${slug}`,
    priority: getPriority(slug),
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  });
});

console.log(`✅ Generated ${sitemapEntries.length} sitemap entries`);

// Generate XML sitemap for location pages only
const locationSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Save location sitemap
const sitemapPath = path.join(__dirname, '..', 'public', 'vellore-locations-sitemap.xml');
fs.writeFileSync(sitemapPath, locationSitemap);
console.log(`✅ Generated location sitemap: ${sitemapPath}`);

// Generate URL list (simple text file)
const urlList = sitemapEntries.map(e => e.url).join('\n');
const urlListPath = path.join(__dirname, '..', 'docs', 'vellore-location-urls.txt');
fs.writeFileSync(urlListPath, urlList);
console.log(`✅ Generated URL list: ${urlListPath}`);

// Generate JSON for reference
const jsonPath = path.join(__dirname, '..', 'docs', 'sitemap-entries.json');
fs.writeFileSync(jsonPath, JSON.stringify({ entries: sitemapEntries, total: sitemapEntries.length }, null, 2));
console.log(`✅ Generated JSON reference: ${jsonPath}`);

// Statistics
console.log('\n📊 Sitemap Statistics:');
console.log(`   Total URLs: ${sitemapEntries.length}`);
console.log(`   High Priority (0.8-0.9): ${sitemapEntries.filter(e => e.priority >= 0.8).length}`);
console.log(`   Medium Priority (0.75): ${sitemapEntries.filter(e => e.priority === 0.75).length}`);
console.log(`   Base URL: ${baseUrl}`);
console.log('');
console.log('📂 Files created:');
console.log('   • public/vellore-locations-sitemap.xml');
console.log('   • docs/vellore-location-urls.txt');
console.log('   • docs/sitemap-entries.json');
console.log('');
console.log('✅ Sitemap generation complete!');
console.log('');
console.log('📝 Next steps:');
console.log('   1. Build project: npm run build');
console.log('   2. Test sitemap: Visit /sitemap.xml after deployment');
console.log('   3. Submit to Google Search Console');
console.log('');

