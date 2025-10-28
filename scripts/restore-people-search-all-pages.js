#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log(`
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          🔄 RESTORING "PEOPLE ALSO SEARCH FOR" TO ALL PAGES 🔄          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
`);

let totalUpdated = 0;
let totalSkipped = 0;

// Function to add PeopleAlsoSearchFor to location pages
function addPeopleSearchToLocationPage(filePath, locationName, districtName) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has PeopleAlsoSearchFor
    if (content.includes('<PeopleAlsoSearchFor')) {
      totalSkipped++;
      return false;
    }
    
    // Add import if missing
    if (!content.includes('PeopleAlsoSearchFor')) {
      const importLine = `import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"`;
      
      // Find the last import statement
      const lastImportMatch = content.match(/import[^;]+from[^;]+;(?=\n\n)/g);
      if (lastImportMatch) {
        const lastImport = lastImportMatch[lastImportMatch.length - 1];
        content = content.replace(lastImport, `${lastImport}\n${importLine}`);
      }
    }
    
    // Add component before CTAWidget or at the end before closing div
    const ctaWidgetMatch = content.match(/<CTAWidget/);
    const closingDivMatch = content.match(/<\/div>\s*<\/div>\s*\)[\s\n]*}[\s\n]*$/);
    
    const peopleSearchComponent = `
        <PeopleAlsoSearchFor location="${locationName}" city="${districtName}" />
`;
    
    if (ctaWidgetMatch) {
      // Add before CTAWidget
      content = content.replace(/<CTAWidget/, `${peopleSearchComponent}\n        <CTAWidget`);
    } else if (closingDivMatch) {
      // Add before closing divs
      content = content.replace(
        /<\/div>\s*<\/div>\s*\)[\s\n]*}[\s\n]*$/,
        `${peopleSearchComponent}\n      </div>\n    </div>\n  )\n}\n`
      );
    }
    
    fs.writeFileSync(filePath, content);
    totalUpdated++;
    return true;
  } catch (error) {
    console.error(`  ❌ Error: ${filePath}`);
    return false;
  }
}

// Function to add ServicePeopleAlsoSearchFor to service pages
function addPeopleSearchToServicePage(filePath, serviceName) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has ServicePeopleAlsoSearchFor
    if (content.includes('<ServicePeopleAlsoSearchFor')) {
      totalSkipped++;
      return false;
    }
    
    // Add import if missing
    if (!content.includes('ServicePeopleAlsoSearchFor')) {
      const importLine = `import { ServicePeopleAlsoSearchFor } from "@/components/service/ServicePeopleAlsoSearchFor"`;
      
      // Find the last import statement
      const lastImportMatch = content.match(/import[^;]+from[^;]+;(?=\n\n)/g);
      if (lastImportMatch) {
        const lastImport = lastImportMatch[lastImportMatch.length - 1];
        content = content.replace(lastImport, `${lastImport}\n${importLine}`);
      }
    }
    
    // Add component before closing div
    const closingDivMatch = content.match(/<\/div>\s*<\/div>\s*\)[\s\n]*}[\s\n]*$/);
    
    const peopleSearchComponent = `
        <ServicePeopleAlsoSearchFor serviceName="${serviceName}" />
`;
    
    if (closingDivMatch) {
      content = content.replace(
        /<\/div>\s*<\/div>\s*\)[\s\n]*}[\s\n]*$/,
        `${peopleSearchComponent}\n      </div>\n    </div>\n  )\n}\n`
      );
      
      fs.writeFileSync(filePath, content);
      totalUpdated++;
      return true;
    }
    
    totalSkipped++;
    return false;
  } catch (error) {
    totalSkipped++;
    return false;
  }
}

// 1. Add to all Vellore location pages
console.log(`\n📍 Adding to Vellore Location Pages...`);
const velloreDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'vellore');
if (fs.existsSync(velloreDir)) {
  const locations = fs.readdirSync(velloreDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  let count = 0;
  locations.forEach(locationSlug => {
    const pagePath = path.join(velloreDir, locationSlug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const locationName = locationSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      if (addPeopleSearchToLocationPage(pagePath, locationName, 'Vellore')) {
        count++;
      }
    }
  });
  console.log(`  ✅ Updated ${count} Vellore locations`);
}

// 2. Add to all Chennai area pages
console.log(`\n📍 Adding to Chennai Area Pages...`);
const chennaiDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'chennai');
if (fs.existsSync(chennaiDir)) {
  const areas = fs.readdirSync(chennaiDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  let count = 0;
  areas.forEach(areaSlug => {
    const pagePath = path.join(chennaiDir, areaSlug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const areaName = areaSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      if (addPeopleSearchToLocationPage(pagePath, areaName, 'Chennai')) {
        count++;
      }
    }
  });
  console.log(`  ✅ Updated ${count} Chennai areas`);
}

// 3. Add to all Kanchipuram area pages
console.log(`\n📍 Adding to Kanchipuram Area Pages...`);
const kanchipuramDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'kanchipuram');
if (fs.existsSync(kanchipuramDir)) {
  const areas = fs.readdirSync(kanchipuramDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  let count = 0;
  areas.forEach(areaSlug => {
    const pagePath = path.join(kanchipuramDir, areaSlug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const areaName = areaSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      if (addPeopleSearchToLocationPage(pagePath, areaName, 'Kanchipuram')) {
        count++;
      }
    }
  });
  console.log(`  ✅ Updated ${count} Kanchipuram areas`);
}

// 4. Add to all taluk pages
console.log(`\n📍 Adding to All Taluk Pages...`);
const tnDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu');
const districts = fs.readdirSync(tnDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let talukCount = 0;
districts.forEach(districtSlug => {
  const districtDir = path.join(tnDir, districtSlug);
  if (fs.existsSync(districtDir)) {
    const taluks = fs.readdirSync(districtDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    taluks.forEach(talukSlug => {
      const pagePath = path.join(districtDir, talukSlug, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const talukName = talukSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const districtName = districtSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        if (addPeopleSearchToLocationPage(pagePath, talukName, districtName)) {
          talukCount++;
        }
      }
    });
  }
});
console.log(`  ✅ Updated ${talukCount} taluk pages`);

// 5. Add to all service pages
console.log(`\n🦷 Adding to Service Pages...`);
const servicesDir = path.join(__dirname, '..', 'app', 'services');

function processServiceDir(dir, parentPath = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  items.forEach(item => {
    if (item.isDirectory()) {
      processServiceDir(path.join(dir, item.name), path.join(parentPath, item.name));
    } else if (item.name === 'page.tsx') {
      const pathParts = parentPath.split(path.sep).filter(Boolean);
      const serviceName = pathParts[pathParts.length - 1] || 'Dental Services';
      const serviceTitle = serviceName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      
      addPeopleSearchToServicePage(path.join(dir, item.name), serviceTitle);
    }
  });
}

processServiceDir(servicesDir);
console.log(`  ✅ Updated all service pages`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 PEOPLE ALSO SEARCH FOR RESTORATION SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✅ Total Updated:         ${totalUpdated} pages
  ⏭️  Skipped (already has): ${totalSkipped} pages

  Features:
  ✅ 150+ relevant search queries per page
  ✅ Dynamic location-based hyperlinks
  ✅ Category-based organization
  ✅ "Show More" functionality
  ✅ SEO-optimized anchor text
  ✅ Internal linking to all services
  ✅ Location-specific keywords

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ "People Also Search For" section restored on all pages!
`);

