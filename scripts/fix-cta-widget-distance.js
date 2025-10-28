const fs = require('fs');
const path = require('path');

console.log('🔍 Fixing CTAWidget distance variable references...\n');

function fixCTAWidgetDistance(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Check if CTAWidget uses ${distance} but distance is not defined
  if (content.includes('${distance}') && content.includes('<CTAWidget')) {
    // Extract the distance from LocationHeader if present
    const distanceMatch = content.match(/distance="([^"]+)"/);
    
    if (distanceMatch) {
      const distanceValue = distanceMatch[1];
      
      // Add const distance variable after imports, before the component
      if (!content.includes('const distance =')) {
        // Find the line with "export default function"
        content = content.replace(
          /(export default function \w+\(\) \{)/,
          `$1\n  const distance = "${distanceValue}"\n`
        );
        changed = true;
      }
    } else {
      // No distance in LocationHeader, remove from CTAWidget
      content = content.replace(/,\s*`\$\{distance\} away`/g, '');
      content = content.replace(/`\$\{distance\} away`,?/g, '');
      changed = true;
    }
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
        if (fixCTAWidgetDistance(filePath)) {
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
      console.log(`   Fixed ${fixed.length} files`);
    }
  }
});

console.log(`\n✅ Total: ${totalFixed} files fixed!\n`);
console.log('All CTAWidget distance references resolved!\n');

