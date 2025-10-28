#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing category variable errors in blog posts...\n');

// Category mapping based on keywords
function getCategoryFromSlug(slug) {
  const slugLower = slug.toLowerCase();
  
  if (slugLower.includes('brace') || slugLower.includes('orthodont') || slugLower.includes('invisalign') || slugLower.includes('align')) {
    return 'Orthodontics';
  }
  if (slugLower.includes('gum') || slugLower.includes('periodon') || slugLower.includes('gingivit')) {
    return 'Periodontics';
  }
  if (slugLower.includes('root-canal') || slugLower.includes('pulp') || slugLower.includes('endodont')) {
    return 'Endodontics';
  }
  if (slugLower.includes('implant') || slugLower.includes('bone-graft') || slugLower.includes('sinus-lift')) {
    return 'Implantology';
  }
  if (slugLower.includes('crown') || slugLower.includes('bridge') || slugLower.includes('denture')) {
    return 'Prosthodontics';
  }
  if (slugLower.includes('filling') || slugLower.includes('inlay') || slugLower.includes('onlay') || slugLower.includes('cavity')) {
    return 'Restorative Dentistry';
  }
  if (slugLower.includes('whiten') || slugLower.includes('veneer') || slugLower.includes('smile') || slugLower.includes('cosmetic')) {
    return 'Cosmetic Dentistry';
  }
  if (slugLower.includes('prevent') || slugLower.includes('cleaning') || slugLower.includes('checkup') || slugLower.includes('hygiene')) {
    return 'Preventive Dentistry';
  }
  if (slugLower.includes('extraction') || slugLower.includes('wisdom') || slugLower.includes('surgery')) {
    return 'Oral Surgery';
  }
  if (slugLower.includes('emergency') || slugLower.includes('trauma') || slugLower.includes('pain')) {
    return 'Emergency Dentistry';
  }
  if (slugLower.includes('child') || slugLower.includes('kid') || slugLower.includes('pediatric') || slugLower.includes('baby')) {
    return 'Pediatric Dentistry';
  }
  
  return 'Preventive Dentistry';
}

const blogDir = path.join(__dirname, '..', 'app', 'blog');
const blogPosts = [];

function getAllBlogDirs(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  items.forEach(item => {
    if (item.isDirectory() && item.name !== 'category' && item.name !== '[slug]' && !item.name.startsWith('.')) {
      const pagePath = path.join(dir, item.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        blogPosts.push({ slug: item.name, path: pagePath });
      }
    }
  });
}

getAllBlogDirs(blogDir);

let fixed = 0;
let errors = [];

blogPosts.forEach(({ slug, path: pagePath }) => {
  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Check if file references category variable without defining it
    if (content.includes('${category') || content.includes('category.toLowerCase()')) {
      const category = getCategoryFromSlug(slug);
      const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
      
      // Add category constant after imports if not present
      if (!content.includes('const category =') && !content.includes('const slug =')) {
        // Find position after last import
        const lastImportIndex = content.lastIndexOf("from 'lucide-react'") || content.lastIndexOf('from "lucide-react"');
        if (lastImportIndex !== -1) {
          const insertPosition = content.indexOf('\n', lastImportIndex) + 1;
          const constants = `\nconst category = '${category}'\nconst categorySlug = '${categorySlug}'\nconst slug = '${slug}'\n`;
          content = content.substring(0, insertPosition) + constants + content.substring(insertPosition);
        }
      }
      
      // Replace template literals that use category
      content = content.replace(
        /\$\{category\.toLowerCase\(\)\.replace\(\/\\s\+\/g, '-'\)\}/g,
        `'${categorySlug}'`
      );
      
      content = content.replace(
        /\$\{slug\}/g,
        `'${slug}'`
      );
      
      fs.writeFileSync(pagePath, content, 'utf8');
      fixed++;
      
      if (fixed % 50 === 0) {
        console.log(`  ✅ Fixed ${fixed} posts...`);
      }
    }
  } catch (error) {
    errors.push({ slug, error: error.message });
  }
});

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Category Variable Error Fix Complete!');
console.log(`   Fixed:  ${fixed} blog posts`);
console.log(`   Errors: ${errors.length}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

if (errors.length > 0) {
  console.log('\n⚠️  Errors encountered:');
  errors.forEach(({ slug, error }) => {
    console.log(`   - ${slug}: ${error}`);
  });
}

console.log('\n✅ All blog posts should now work without "category is not defined" error!');

