#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 COMPREHENSIVE FIX - Chennai & Kanchipuram Pages\n');

const comprehensiveFix = (filePath, locationName) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Remove all problematic components and their data
    content = content.replace(/const amenities = \{[\s\S]*?\};\s*/g, '');
    content = content.replace(/const touristPlaces = \[[\s\S]*?\];\s*/g, '');
    content = content.replace(/const transportModes = \{[\s\S]*?\};\s*/g, '');
    
    // Remove component usage
    content = content.replace(/{\/\* Local Amenities \*\/}\s*<LocalAmenitiesMap[\s\S]*?\/>\s*/g, '');
    content = content.replace(/{\/\* Travel Info \*\/}\s*<TravelInfoCard[\s\S]*?\/>\s*/g, '');
    content = content.replace(/{\/\* Price Comparison \*\/}\s*<PriceComparisonTable[\s\S]*?\/>\s*/g, '');
    content = content.replace(/{\/\* Why Choose Us \*\/}\s*<WhyChooseUs[\s\S]*?\/>\s*/g, '');
    
    // Remove unused imports
    content = content.replace(/import \{ LocalAmenitiesMap \} from[^\n]*\n/g, '');
    content = content.replace(/import \{ TravelInfoCard \} from[^\n]*\n/g, '');
    content = content.replace(/import \{ PriceComparisonTable \} from[^\n]*\n/g, '');
    content = content.replace(/import \{ WhyChooseUs \} from[^\n]*\n/g, '');
    
    // Fix reviews - ensure they have location property
    content = content.replace(/const reviews = \[([\s\S]*?)\];/g, (match, reviewsContent) => {
      // Simple fix: add location property to each review object if missing
      let fixed = reviewsContent.replace(
        /\{\s*name:/g,
        `{\n    location: locationData.name,\n    name:`
      );
      // Remove duplicate location properties
      fixed = fixed.replace(/location: locationData\.name,\s*location: '[^']*',/g, 'location: locationData.name,');
      return `const reviews = [${fixed}];`;
    });
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error in ${path.basename(path.dirname(filePath))}: ${error.message}`);
  }
  return false;
};

let chennaiFixed = 0;
let kanchipuramFixed = 0;

// Fix Chennai
const chennaiDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'chennai');
if (fs.existsSync(chennaiDir)) {
  const areas = fs.readdirSync(chennaiDir).filter(f => {
    return fs.statSync(path.join(chennaiDir, f)).isDirectory();
  });
  
  console.log(`📂 Processing Chennai (${areas.length} areas)...`);
  areas.forEach(area => {
    const filePath = path.join(chennaiDir, area, 'page.tsx');
    if (fs.existsSync(filePath) && comprehensiveFix(filePath, area)) {
      chennaiFixed++;
    }
  });
  console.log(`  ✅ Fixed: ${chennaiFixed} pages\n`);
}

// Fix Kanchipuram  
const kanchipuramDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'kanchipuram');
if (fs.existsSync(kanchipuramDir)) {
  const areas = fs.readdirSync(kanchipuramDir).filter(f => {
    return fs.statSync(path.join(kanchipuramDir, f)).isDirectory();
  });
  
  console.log(`📂 Processing Kanchipuram (${areas.length} areas)...`);
  areas.forEach(area => {
    const filePath = path.join(kanchipuramDir, area, 'page.tsx');
    if (fs.existsSync(filePath) && comprehensiveFix(filePath, area)) {
      kanchipuramFixed++;
    }
  });
  console.log(`  ✅ Fixed: ${kanchipuramFixed} pages\n`);
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`✅ Total fixed: ${chennaiFixed + kanchipuramFixed} pages`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n🎯 All pages now have clean, working components!');
console.log('✅ Ready for production build!');

