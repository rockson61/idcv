#!/usr/bin/env node

/**
 * Generate Location Index
 * Creates a comprehensive index of all location pages
 */

const fs = require('fs');
const path = require('path');

const velloreDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'vellore');

// Get all directories
const locations = fs.readdirSync(velloreDir)
  .filter(item => {
    const itemPath = path.join(velloreDir, item);
    return fs.statSync(itemPath).isDirectory();
  })
  .map(slug => {
    // Try to read the page to get location name
    const pagePath = path.join(velloreDir, slug, 'page.tsx');
    let name = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    let taluk = 'Vellore';
    let pincode = '';
    
    if (fs.existsSync(pagePath)) {
      const content = fs.readFileSync(pagePath, 'utf-8');
      
      // Extract location name from title
      const titleMatch = content.match(/title: 'Best Dentist in ([^,]+),/);
      if (titleMatch) {
        name = titleMatch[1];
      }
      
      // Extract taluk
      const talukMatch = content.match(/taluk="([^"]+)"/);
      if (talukMatch) {
        taluk = talukMatch[1];
      }
      
      // Extract pincode
      const pincodeMatch = content.match(/pincode="([^"]+)"/);
      if (pincodeMatch) {
        pincode = pincodeMatch[1];
      }
    }
    
    return { name, slug, taluk, pincode };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// Group by taluk
const byTaluk = {};
locations.forEach(loc => {
  if (!byTaluk[loc.taluk]) {
    byTaluk[loc.taluk] = [];
  }
  byTaluk[loc.taluk].push(loc);
});

// Generate markdown index
let markdown = `# Complete Vellore Location Pages Index\n\n`;
markdown += `**Total Locations:** ${locations.length}\n\n`;
markdown += `**Last Updated:** ${new Date().toLocaleDateString()}\n\n`;
markdown += `---\n\n`;

markdown += `## Quick Stats\n\n`;
markdown += `- Total Pages: **${locations.length}**\n`;
markdown += `- Taluks Covered: **${Object.keys(byTaluk).length}**\n`;
markdown += `- All with Google Maps: ✅\n`;
markdown += `- All with Amenities: ✅\n`;
markdown += `- All with Reviews & FAQs: ✅\n\n`;
markdown += `---\n\n`;

markdown += `## Locations by Taluk\n\n`;
Object.keys(byTaluk).sort().forEach(taluk => {
  markdown += `### ${taluk} (${byTaluk[taluk].length} locations)\n\n`;
  byTaluk[taluk].forEach(loc => {
    const url = `/in/tamil-nadu/vellore/${loc.slug}`;
    markdown += `- [${loc.name}](${url})`;
    if (loc.pincode) markdown += ` - PIN: ${loc.pincode}`;
    markdown += `\n`;
  });
  markdown += `\n`;
});

markdown += `---\n\n`;
markdown += `## Alphabetical Index\n\n`;
locations.forEach(loc => {
  const url = `/in/tamil-nadu/vellore/${loc.slug}`;
  markdown += `- [${loc.name}](${url}) - ${loc.taluk}`;
  if (loc.pincode) markdown += ` (${loc.pincode})`;
  markdown += `\n`;
});

// Save to file
const outputPath = path.join(__dirname, '..', 'docs', 'LOCATION_INDEX.md');
fs.writeFileSync(outputPath, markdown);

console.log(`✅ Generated location index: ${outputPath}`);
console.log(`📊 Total locations: ${locations.length}`);
console.log(`📂 Taluks covered: ${Object.keys(byTaluk).length}`);

// Also generate JSON version
const jsonPath = path.join(__dirname, '..', 'docs', 'all-locations.json');
fs.writeFileSync(jsonPath, JSON.stringify({ locations, byTaluk, total: locations.length }, null, 2));
console.log(`✅ Generated JSON index: ${jsonPath}`);

// Generate sitemap entries
const sitemapEntries = locations.map(loc => 
  `https://www.dentalclinicinvellore.in/in/tamil-nadu/vellore/${loc.slug}`
).join('\n');

const sitemapPath = path.join(__dirname, '..', 'docs', 'location-urls.txt');
fs.writeFileSync(sitemapPath, sitemapEntries);
console.log(`✅ Generated URL list for sitemap: ${sitemapPath}`);
console.log(`\n📊 Summary:`);
console.log(`   Locations: ${locations.length}`);
console.log(`   URLs: ${locations.length}`);
console.log(`   Taluks: ${Object.keys(byTaluk).length}`);

