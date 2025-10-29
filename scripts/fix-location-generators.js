const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
let fixedCount = 0;

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Check if it imports generateDefaultReviews or generateDefaultFAQs from components/location
      if (content.includes('generateDefaultReviews') || content.includes('generateDefaultFAQs')) {
        // Replace the import
        const oldImport = /import\s*\{([^}]+)\}\s*from\s*['"]@\/components\/location['"]/g;
        
        content = content.replace(oldImport, (match, imports) => {
          const importList = imports.split(',').map(i => i.trim());
          const locationImports = importList.filter(i => 
            !i.includes('generateDefaultReviews') && !i.includes('generateDefaultFAQs')
          );
          const generatorImports = importList.filter(i =>
            i.includes('generateDefaultReviews') || i.includes('generateDefaultFAQs')
          );
          
          if (generatorImports.length > 0) {
            modified = true;
            
            // Add new import for generators
            const newImport = `import { ${generatorImports.join(', ')} } from '@/lib/location-generators'\nimport { ${locationImports.join(', ')} } from '@/components/location'`;
            return newImport;
          }
          
          return match;
        });
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        fixedCount++;
        console.log(`✓ Fixed: ${filePath}`);
      }
    }
  }
}

console.log('Fixing location page imports...\n');
walkDir(appDir);
console.log(`\n✅ Fixed ${fixedCount} files`);

