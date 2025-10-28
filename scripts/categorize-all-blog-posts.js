#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🏷️  Categorizing all blog posts and adding SEO meta tags...\n');

// Smart categorization rules based on keywords in slug
function getCategoryFromSlug(slug) {
  const slugLower = slug.toLowerCase();
  
  // Orthodontics
  if (slugLower.includes('brace') || slugLower.includes('orthodont') || 
      slugLower.includes('invisalign') || slugLower.includes('align') || 
      slugLower.includes('maloccl') || slugLower.includes('retainer') ||
      slugLower.includes('crowded') || slugLower.includes('spacing') ||
      slugLower.includes('bite') || slugLower.includes('overbite') ||
      slugLower.includes('underbite') || slugLower.includes('crossbite')) {
    return 'Orthodontics';
  }
  
  // Periodontics
  if (slugLower.includes('gum') || slugLower.includes('periodon') || 
      slugLower.includes('gingivit') || slugLower.includes('plaque') ||
      slugLower.includes('tartar') || slugLower.includes('scaling') ||
      slugLower.includes('pocket')) {
    return 'Periodontics';
  }
  
  // Endodontics
  if (slugLower.includes('root-canal') || slugLower.includes('pulp') || 
      slugLower.includes('endodont') || slugLower.includes('apicec') ||
      slugLower.includes('rct') || slugLower.includes('pulpotomy') ||
      slugLower.includes('pulpitis')) {
    return 'Endodontics';
  }
  
  // Implantology
  if (slugLower.includes('implant') || slugLower.includes('bone-graft') || 
      slugLower.includes('sinus-lift') || slugLower.includes('zygomatic') ||
      slugLower.includes('all-on-4') || slugLower.includes('all-on-6') ||
      slugLower.includes('osseointegration') || slugLower.includes('ridge-augmentation')) {
    return 'Implantology';
  }
  
  // Prosthodontics
  if (slugLower.includes('crown') || slugLower.includes('bridge') || 
      slugLower.includes('denture') || slugLower.includes('prostho') ||
      slugLower.includes('pfm') || slugLower.includes('zirconia') ||
      slugLower.includes('emax') || slugLower.includes('overdenture') ||
      slugLower.includes('rehabilitation')) {
    return 'Prosthodontics';
  }
  
  // Restorative Dentistry
  if (slugLower.includes('filling') || slugLower.includes('inlay') || 
      slugLower.includes('onlay') || slugLower.includes('restorati') ||
      slugLower.includes('cavity') || slugLower.includes('decay') ||
      slugLower.includes('composite') || slugLower.includes('amalgam') ||
      slugLower.includes('bonding') || slugLower.includes('cerec')) {
    return 'Restorative Dentistry';
  }
  
  // Cosmetic Dentistry
  if (slugLower.includes('whiten') || slugLower.includes('veneer') || 
      slugLower.includes('smile-makeover') || slugLower.includes('cosmetic') ||
      slugLower.includes('aesthetic') || slugLower.includes('lumineers') ||
      slugLower.includes('yellow') || slugLower.includes('stain') ||
      slugLower.includes('discolor')) {
    return 'Cosmetic Dentistry';
  }
  
  // Preventive Dentistry
  if (slugLower.includes('prevent') || slugLower.includes('cleaning') || 
      slugLower.includes('checkup') || slugLower.includes('fluoride') ||
      slugLower.includes('sealant') || slugLower.includes('brush') ||
      slugLower.includes('floss') || slugLower.includes('hygiene') ||
      slugLower.includes('diet') || slugLower.includes('oral-health') ||
      slugLower.includes('toothpaste') || slugLower.includes('mouthwash')) {
    return 'Preventive Dentistry';
  }
  
  // Oral Surgery
  if (slugLower.includes('extraction') || slugLower.includes('wisdom') || 
      slugLower.includes('surgery') || slugLower.includes('surgical') ||
      slugLower.includes('sedation') || slugLower.includes('anesthesia') ||
      slugLower.includes('frenectomy') || slugLower.includes('biopsy') ||
      slugLower.includes('jaw-surgery') || slugLower.includes('orthognath')) {
    return 'Oral Surgery';
  }
  
  // Emergency Dentistry
  if (slugLower.includes('emergency') || slugLower.includes('trauma') || 
      slugLower.includes('knocked') || slugLower.includes('broken-tooth') ||
      slugLower.includes('abscess') || slugLower.includes('pain') ||
      slugLower.includes('swollen') || slugLower.includes('bleeding') ||
      slugLower.includes('urgent')) {
    return 'Emergency Dentistry';
  }
  
  // Pediatric Dentistry
  if (slugLower.includes('child') || slugLower.includes('kid') || 
      slugLower.includes('pediatric') || slugLower.includes('baby') ||
      slugLower.includes('infant') || slugLower.includes('toddler') ||
      slugLower.includes('eruption') || slugLower.includes('bottle')) {
    return 'Pediatric Dentistry';
  }
  
  // Default to Preventive Dentistry
  return 'Preventive Dentistry';
}

function generateSEOMetaTags(slug, title, category) {
  const keywords = slug.replace(/-/g, ', ');
  const description = `Expert guide on ${title.toLowerCase()}. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.`;
  
  return `export const metadata: Metadata = {
  title: '${title} | Expert Guide 2024 | Dr. Rockson Samuel',
  description: '${description}',
  keywords: '${keywords}, ${category.toLowerCase()}, dental health, vellore dentist, dr rockson samuel, indira dental clinic, dental treatment india',
  authors: [{ name: 'Dr. Rockson Samuel', url: 'https://www.dentalclinicinvellore.in/about-us/dr-rockson-samuel' }],
  openGraph: {
    title: '${title} | Indira Dental Clinic Vellore',
    description: '${description}',
    url: 'https://www.dentalclinicinvellore.in/blog/${slug}',
    siteName: 'Indira Dental Clinic',
    images: [
      {
        url: '/dental-clinic-vellore.jpg',
        width: 1200,
        height: 630,
        alt: '${title}'
      }
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2024-10-28T00:00:00.000Z',
    modifiedTime: '2024-10-28T00:00:00.000Z',
    authors: ['Dr. Rockson Samuel'],
    tags: ['${keywords}'.split(', ').slice(0, 10).join("', '")]
  },
  twitter: {
    card: 'summary_large_image',
    title: '${title}',
    description: '${description.substring(0, 160)}',
    creator: '@IndiraDentalVellore',
    images: ['/dental-clinic-vellore.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/blog/${slug}'
  }
}`;
}

function titleCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const blogDir = path.join(__dirname, '..', 'app', 'blog');
const blogPosts = [];

// Get all blog post directories
function getAllBlogSlugs(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  items.forEach(item => {
    if (item.isDirectory() && item.name !== 'category' && item.name !== '[slug]' && !item.name.startsWith('.')) {
      const pagePath = path.join(dir, item.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        blogPosts.push(item.name);
      }
    }
  });
}

getAllBlogSlugs(blogDir);

console.log(`📚 Found ${blogPosts.length} blog posts to categorize and optimize\n`);

// Categorize and update each blog post
let updated = 0;
let skipped = 0;
const categoryCounts = {};

blogPosts.forEach((slug, index) => {
  const category = getCategoryFromSlug(slug);
  categoryCounts[category] = (categoryCounts[category] || 0) + 1;
  
  const title = titleCase(slug);
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Check if already has proper metadata
  if (content.includes('openGraph') && content.includes('twitter') && content.includes('robots')) {
    skipped++;
    return;
  }
  
  // Remove old metadata if exists
  const metadataRegex = /export const metadata: Metadata = \{[\s\S]*?\n\}/;
  if (metadataRegex.test(content)) {
    content = content.replace(metadataRegex, '');
  }
  
  // Add import for Metadata if missing
  if (!content.includes("import { Metadata }") && !content.includes("import type { Metadata }")) {
    content = `import { Metadata } from 'next'\n` + content;
  }
  
  // Generate SEO meta tags
  const metaTags = generateSEOMetaTags(slug, title, category);
  
  // Insert after imports, before schema
  const insertPosition = content.indexOf('const articleSchema') !== -1 
    ? content.indexOf('const articleSchema')
    : content.indexOf('export default');
    
  content = content.substring(0, insertPosition) + '\n' + metaTags + '\n\n' + content.substring(insertPosition);
  
  // Update category badge in content
  content = content.replace(
    /<Badge[^>]*className="[^"]*"[^>]*>[^<]*<\/Badge>/,
    `<Badge className="bg-teal-100 text-teal-700">${category}</Badge>`
  );
  
  fs.writeFileSync(pagePath, content, 'utf8');
  
  if ((index + 1) % 50 === 0) {
    console.log(`  ✅ Processed ${index + 1}/${blogPosts.length} posts...`);
  }
  
  updated++;
});

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log('✅ Blog Post Categorization Complete!');
console.log(`   Updated:  ${updated} posts`);
console.log(`   Skipped:  ${skipped} posts (already optimized)`);
console.log(`   Total:    ${blogPosts.length} posts`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

console.log('\n📊 Category Distribution:');
Object.entries(categoryCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([category, count]) => {
    console.log(`   ${category}: ${count} posts`);
  });

console.log('\n✅ Each blog post now has:');
console.log('   • Proper category assignment');
console.log('   • Enhanced metadata with keywords');
console.log('   • OpenGraph tags (Facebook, LinkedIn)');
console.log('   • Twitter card tags');
console.log('   • Robot directives (SEO)');
console.log('   • Canonical URL');
console.log('   • Author information');
console.log('   • Published/modified dates');
console.log('   • Image specifications');
console.log('\n🎯 All 430+ blog posts are now SEO-optimized!');

