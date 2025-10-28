const fs = require('fs');
const path = require('path');

function sanitizeFunctionName(name) {
  // Remove special characters and convert to PascalCase
  return name
    .replace(/[^a-zA-Z0-9]/g, '') // Remove all non-alphanumeric characters
    .replace(/^./, str => str.toUpperCase()); // Ensure first letter is uppercase
}

function fixFunctionName(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Match: export default function SomeName() {
  const functionMatch = content.match(/export default function ([a-zA-Z0-9.]+)\(\)/);
  
  if (!functionMatch) {
    return false;
  }
  
  const oldFunctionName = functionMatch[1];
  
  // If function name contains periods or other invalid characters
  if (/[^a-zA-Z0-9_$]/.test(oldFunctionName)) {
    const newFunctionName = sanitizeFunctionName(oldFunctionName);
    
    // Replace the function declaration
    const updatedContent = content.replace(
      `export default function ${oldFunctionName}()`,
      `export default function ${newFunctionName}()`
    );
    
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    return { oldName: oldFunctionName, newName: newFunctionName };
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
      } else if (file === 'page.tsx' || file === 'page.ts') {
        const result = fixFunctionName(filePath);
        if (result) {
          fixed.push({ file: filePath, ...result });
        }
      }
    }
  }
  
  walk(dir);
  return fixed;
}

// Process all location pages
console.log('🔍 Scanning for invalid function names...\n');

const directories = [
  path.join(__dirname, '..', 'app', 'in'),
  path.join(__dirname, '..', 'app', 'services'),
  path.join(__dirname, '..', 'app', 'conditions'),
];

let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    console.log(`📂 Processing: ${path.basename(dir)}/`);
    const fixed = processDirectory(dir);
    
    if (fixed.length > 0) {
      fixed.forEach(({ file, oldName, newName }) => {
        console.log(`   ✅ ${path.relative(path.join(__dirname, '..'), file)}`);
        console.log(`      ${oldName} → ${newName}`);
      });
      totalFixed += fixed.length;
    }
    console.log('');
  }
}

console.log(`\n✅ Fixed ${totalFixed} invalid function names!\n`);

if (totalFixed === 0) {
  console.log('✨ No issues found!\n');
}

