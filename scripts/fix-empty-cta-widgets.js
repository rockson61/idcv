const fs = require('fs');
const path = require('path');

console.log('🔍 Fixing CTAWidget components with missing props...\n');

function fixEmptyCTAWidget(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Pattern: <CTAWidget /> without any props
  if (content.includes('<CTAWidget />')) {
    // Extract page title or location name for personalization
    let pageTitle = 'Book Your Appointment';
    let description = 'Experience expert dental care with Dr. Rockson Samuel';
    
    // Try to extract location name
    const locationMatch = content.match(/locationName="([^"]+)"/);
    if (locationMatch) {
      const location = locationMatch[1];
      pageTitle = `Book Your Appointment from ${location}`;
      description = `Expert dental care serving ${location} and surrounding areas`;
    } else {
      // Try to extract from metadata title
      const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
      if (titleMatch) {
        const title = titleMatch[1];
        if (title.includes('Delhi')) {
          pageTitle = 'Book Your Appointment in Delhi';
          description = 'Compare costs and book your dental treatment';
        } else if (title.includes('Mumbai')) {
          pageTitle = 'Book Your Appointment in Mumbai';
          description = 'Save on quality dental care';
        } else if (title.includes('Bangalore')) {
          pageTitle = 'Book Your Appointment in Bangalore';
          description = 'Expert dental care at affordable prices';
        }
      }
    }
    
    const replacement = `<CTAWidget
          title="${pageTitle}"
          description="${description}"
          primaryAction={{ text: "Book Appointment", href: "/contact" }}
          secondaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
        />`;
    
    content = content.replace(/<CTAWidget\s*\/>/g, replacement);
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
        if (fixEmptyCTAWidget(filePath)) {
          fixed.push(filePath);
        }
      }
    }
  }
  
  walk(dir);
  return fixed;
}

const dirsToCheck = [
  path.join(__dirname, '..', 'app'),
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
console.log('All CTAWidget components now have required props!\n');

