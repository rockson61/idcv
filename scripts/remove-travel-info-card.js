const fs = require('fs');
const path = require('path');

console.log('🔍 Removing TravelInfoCard from all location pages...\n');

function removeTravelInfoCard(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Remove <TravelInfoCard /> self-closing
  if (content.includes('<TravelInfoCard />')) {
    content = content.replace(/\s*<TravelInfoCard \/>\s*/g, '');
    changed = true;
  }
  
  // Remove <TravelInfoCard></TravelInfoCard>
  if (content.includes('<TravelInfoCard>')) {
    content = content.replace(/\s*<TravelInfoCard>.*?<\/TravelInfoCard>\s*/gs, '');
    changed = true;
  }
  
  // Remove import if no longer used
  if (!content.includes('TravelInfoCard') || !content.match(/<TravelInfoCard/)) {
    content = content.replace(/import\s*{\s*([^}]*),\s*TravelInfoCard\s*([^}]*)\s*}\s*from\s*['"]@\/components\/location\/TravelInfoCard['"]\s*\n?/g, 
      (match, before, after) => {
        const imports = [before, after].filter(Boolean).join(', ').trim();
        if (imports && imports !== ',') {
          return `import { ${imports} } from "@/components/location/TravelInfoCard"\n`;
        }
        return '';
      });
    
    // Also try different import format
    content = content.replace(/import\s*{\s*TravelInfoCard\s*}\s*from\s*['"]@\/components\/location\/TravelInfoCard['"]\s*\n?/g, '');
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
        if (removeTravelInfoCard(filePath)) {
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
      console.log(`   Removed from ${fixed.length} files`);
    }
  }
});

console.log(`\n✅ Total: ${totalFixed} files updated!\n`);
console.log('TravelInfoCard component removed from all location pages.\n');
console.log('Component can be re-added later with proper data.\n');

