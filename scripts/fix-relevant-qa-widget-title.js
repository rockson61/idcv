const fs = require('fs');
const path = require('path');

// Function to determine appropriate title based on file path
function generateTitle(filePath) {
  // Extract service or location name from path
  if (filePath.includes('/services/')) {
    const match = filePath.match(/\/services\/([^/]+)\/([^/]+)\/page\.tsx$/);
    if (match) {
      const category = match[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const service = match[2].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      return `Common Questions About ${service}`;
    }
  }
  
  if (filePath.includes('/in/')) {
    const match = filePath.match(/\/in\/[^/]+\/[^/]+\/([^/]+)\/page\.tsx$/);
    if (match) {
      const location = match[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      return `Common Dental Questions from ${location}`;
    }
  }
  
  return 'Frequently Asked Questions';
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern to match RelevantQAWidget without title prop
    // Matches: <RelevantQAWidget \n questions={
    const pattern = /(<RelevantQAWidget)\s*\n\s*(questions=\{)/g;
    
    if (pattern.test(content)) {
      const title = generateTitle(filePath);
      
      // Reset regex
      pattern.lastIndex = 0;
      
      content = content.replace(pattern, (match, widget, questions) => {
        modified = true;
        return `${widget} \n            title="${title}"\n            ${questions}`;
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
  const appDir = path.join(__dirname, '..', 'app');
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

  walkDir(appDir);

  console.log('\n✅ RelevantQAWidget title fix complete!');
  console.log(`Files processed: ${totalFiles}`);
  console.log(`Files fixed: ${fixedCount}`);
}

main();

