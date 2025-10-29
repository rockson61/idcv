const fs = require('fs');
const path = require('path');

// Function to generate slug from service name or file path
function generateSlug(filePath) {
  // Extract slug from file path: /services/{slug}/page.tsx or /services/{category}/{slug}/page.tsx
  const match = filePath.match(/\/services\/([^/]+)(?:\/([^/]+))?\/page\.tsx$/);
  
  if (match) {
    // If there are 2 parts, it's a nested service (category/service)
    if (match[2]) {
      return match[2]; // Return the service slug (nested)
    }
    return match[1]; // Return the single slug
  }
  
  return 'service';
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern to match ServiceSemanticContent with only serviceName prop
    // Matches: <ServiceSemanticContent serviceName="..." />
    const pattern = /<ServiceSemanticContent\s+serviceName=["']([^"']+)["']\s*\/>/g;
    
    if (pattern.test(content)) {
      const serviceSlug = generateSlug(filePath);
      
      // Reset regex
      pattern.lastIndex = 0;
      
      content = content.replace(pattern, (match, serviceName) => {
        modified = true;
        return `<ServiceSemanticContent serviceName="${serviceName}" serviceSlug="${serviceSlug}" />`;
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  const servicesDir = path.join(__dirname, '..', 'app', 'services');
  let fixedCount = 0;
  let totalFiles = 0;

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file === 'page.tsx') {
        totalFiles++;
        if (processFile(filePath)) {
          fixedCount++;
          console.log(`✓ Fixed: ${filePath}`);
        }
      }
    }
  }

  walkDir(servicesDir);

  console.log('\n✅ ServiceSemanticContent fix complete!');
  console.log(`Files processed: ${totalFiles}`);
  console.log(`Files fixed: ${fixedCount}`);
}

main();

