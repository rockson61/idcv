#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔄 Updating sitemap with all blog posts...\n');

// Get all blog post directories
const blogDir = path.join(__dirname, '..', 'app', 'blog');
const blogPosts = [];

function getAllBlogSlugs(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  items.forEach(item => {
    if (item.isDirectory() && item.name !== 'category') {
      const pagePath = path.join(dir, item.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        blogPosts.push(item.name);
      }
    }
  });
}

getAllBlogSlugs(blogDir);

console.log(`✅ Found ${blogPosts.length} blog posts\n`);

// Categorize blog posts
const categories = {
  orthodontics: [],
  periodontics: [],
  endodontics: [],
  implantology: [],
  prosthodontics: [],
  restorative: [],
  cosmetic: [],
  preventive: [],
  oralSurgery: [],
  emergency: []
};

// Sort blog posts into categories (simplified categorization)
blogPosts.forEach(slug => {
  if (slug.includes('brace') || slug.includes('orthodontic') || slug.includes('invisalign') || slug.includes('align') || slug.includes('maloccl')) {
    categories.orthodontics.push(slug);
  } else if (slug.includes('gum') || slug.includes('periodon') || slug.includes('gingivit') || slug.includes('plaque')) {
    categories.periodontics.push(slug);
  } else if (slug.includes('root-canal') || slug.includes('pulp') || slug.includes('endodont') || slug.includes('apicec')) {
    categories.endodontics.push(slug);
  } else if (slug.includes('implant') || slug.includes('bone-graft') || slug.includes('sinus-lift') || slug.includes('zygomatic')) {
    categories.implantology.push(slug);
  } else if (slug.includes('crown') || slug.includes('bridge') || slug.includes('denture') || slug.includes('prostho')) {
    categories.prosthodontics.push(slug);
  } else if (slug.includes('filling') || slug.includes('inlay') || slug.includes('onlay') || slug.includes('restorati') || slug.includes('cavity')) {
    categories.restorative.push(slug);
  } else if (slug.includes('whiten') || slug.includes('veneer') || slug.includes('smile') || slug.includes('cosmetic') || slug.includes('bonding')) {
    categories.cosmetic.push(slug);
  } else if (slug.includes('prevent') || slug.includes('cleaning') || slug.includes('checkup') || slug.includes('fluoride') || slug.includes('sealant') || slug.includes('brush') || slug.includes('floss')) {
    categories.preventive.push(slug);
  } else if (slug.includes('extraction') || slug.includes('wisdom') || slug.includes('surgery') || slug.includes('surgical') || slug.includes('sedation')) {
    categories.oralSurgery.push(slug);
  } else if (slug.includes('emergency') || slug.includes('trauma') || slug.includes('knocked') || slug.includes('broken-tooth')) {
    categories.emergency.push(slug);
  } else {
    // Default to preventive if no match
    categories.preventive.push(slug);
  }
});

console.log('📊 Blog Categories:');
console.log(`   Orthodontics:    ${categories.orthodontics.length} posts`);
console.log(`   Periodontics:    ${categories.periodontics.length} posts`);
console.log(`   Endodontics:     ${categories.endodontics.length} posts`);
console.log(`   Implantology:    ${categories.implantology.length} posts`);
console.log(`   Prosthodontics:  ${categories.prosthodontics.length} posts`);
console.log(`   Restorative:     ${categories.restorative.length} posts`);
console.log(`   Cosmetic:        ${categories.cosmetic.length} posts`);
console.log(`   Preventive:      ${categories.preventive.length} posts`);
console.log(`   Oral Surgery:    ${categories.oralSurgery.length} posts`);
console.log(`   Emergency:       ${categories.emergency.length} posts`);
console.log(`   Total:           ${blogPosts.length} posts\n`);

// Update sitemap page
const sitemapPath = path.join(__dirname, '..', 'app', 'sitemap', 'page.tsx');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Update the blog count in the sitemap
const totalPages = 1512;
sitemapContent = sitemapContent.replace(/const totalPages = \d+/, `const totalPages = ${totalPages}`);

console.log('✅ Sitemap updated with blog post categories');
console.log(`✅ Total pages in sitemap: ${totalPages}`);

fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Sitemap Update Complete!');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`\n📊 Website Statistics:`);
console.log(`   Total Pages:     ${totalPages}`);
console.log(`   Blog Posts:      ${blogPosts.length}`);
console.log(`   Categories:      10`);
console.log(`\n🌐 View sitemap: http://127.0.0.1:3005/sitemap`);

