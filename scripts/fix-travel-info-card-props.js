const fs = require('fs');
const path = require('path');

console.log('🔍 Fixing TravelInfoCard component props...\n');

function fixTravelInfoCard(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Pattern: <TravelInfoCard locationName="..." />
  // Should be: <TravelInfoCard />  (no props needed)
  if (content.match(/<TravelInfoCard\s+locationName="[^"]*"\s*\/>/)) {
    content = content.replace(
      /<TravelInfoCard\s+locationName="[^"]*"\s*\/>/g,
      '<TravelInfoCard />'
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
        if (fixTravelInfoCard(filePath)) {
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
console.log('All TravelInfoCard components now have correct props!\n');

