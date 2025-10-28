const fs = require('fs');
const path = require('path');

console.log('🔍 Fixing LocationFAQs components missing locationName prop...\n');

function fixLocationFAQs(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Pattern 1: <LocationFAQs faqs={faqs} />
  if (content.match(/<LocationFAQs\s+faqs={faqs}\s*\/>/)) {
    // Extract location name from the file
    let locationName = 'Location';
    
    // Try to extract from LocationHeader
    const headerMatch = content.match(/locationName="[^"]*in\s+([^"]+?)(?:,|\s+Tamil|")/i);
    if (headerMatch) {
      locationName = headerMatch[1].trim();
    } else {
      // Try from file path
      const pathParts = filePath.split(path.sep);
      const lastPart = pathParts[pathParts.length - 2]; // Get directory name
      locationName = lastPart
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
    content = content.replace(
      /<LocationFAQs\s+faqs={faqs}\s*\/>/g,
      `<LocationFAQs locationName="${locationName}" faqs={faqs} />`
    );
    changed = true;
  }
  
  // Pattern 2: <LocationFAQs faqs={faqs}></LocationFAQs>
  if (content.match(/<LocationFAQs\s+faqs={faqs}\s*>.*?<\/LocationFAQs>/s)) {
    let locationName = 'Location';
    const headerMatch = content.match(/locationName="[^"]*in\s+([^"]+?)(?:,|\s+Tamil|")/i);
    if (headerMatch) {
      locationName = headerMatch[1].trim();
    } else {
      const pathParts = filePath.split(path.sep);
      const lastPart = pathParts[pathParts.length - 2];
      locationName = lastPart
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
    content = content.replace(
      /<LocationFAQs\s+faqs={faqs}\s*>/g,
      `<LocationFAQs locationName="${locationName}" faqs={faqs}>`
    );
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

function processDirectory(dir) {
  const fixed = [];
  
  function walk(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walk(filePath);
      } else if (file === 'page.tsx') {
        if (fixLocationFAQs(filePath)) {
          fixed.push(filePath);
        }
      }
    }
  }
  
  walk(dir);
  return fixed;
}

const dirsToCheck = [
  path.join(__dirname, '..', 'app', 'in'),
];

let totalFixed = 0;
dirsToCheck.forEach(dir => {
  if (fs.existsSync(dir)) {
    const fixed = processDirectory(dir);
    totalFixed += fixed.length;
    
    if (fixed.length > 0) {
      console.log(`   Fixed ${fixed.length} files in ${path.basename(dir)}/`);
    }
  }
});

console.log(`\n✅ Total: ${totalFixed} files fixed!\n`);
console.log('All LocationFAQs components now have locationName prop!\n');

