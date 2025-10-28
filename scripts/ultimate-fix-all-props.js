#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 ULTIMATE FIX - All Component Props\n');

const fixAllProps = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Fix PeopleAlsoSearchFor: locationName → location
    content = content.replace(
      /<PeopleAlsoSearchFor\s+locationName=/g,
      '<PeopleAlsoSearchFor location='
    );
    
    // Fix WhyChooseUs: location → locationName
    content = content.replace(
      /<WhyChooseUs\s+location=/g,
      '<WhyChooseUs locationName='
    );
    
    // Fix LocationReviews: location → locationName
    content = content.replace(
      /<LocationReviews\s+([^>]*)location=\{locationData\.name\}/g,
      '<LocationReviews $1locationName={locationData.name}'
    );
    
    // Remove averageRating prop from LocationReviews
    content = content.replace(
      /averageRating=\{[^}]*\}\s*/g,
      ''
    );
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
  return false;
};

let fixed = 0;

// Fix all TN district pages
const districtDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu');
const items = fs.readdirSync(districtDir).filter(f => {
  const fullPath = path.join(districtDir, f);
  return fs.statSync(fullPath).isDirectory() && !f.includes('.');
});

console.log(`📂 Fixing ${items.length} locations...\n`);
items.forEach(item => {
  const filePath = path.join(districtDir, item, 'page.tsx');
  if (fs.existsSync(filePath) && fixAllProps(filePath)) {
    console.log(`  ✅ ${item}`);
    fixed++;
  }
});

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`✅ Fixed ${fixed} pages`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

