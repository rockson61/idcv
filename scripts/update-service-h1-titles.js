#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getAllServiceFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      getAllServiceFiles(filePath, fileList);
    } else if (file.name === 'page.tsx') {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

function updateServiceH1(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Pattern: "Best <Service> Doctors in Vellore - <Specialist> Near Me"
  const vellorePattern = /Best ([^<]+) Doctors in Vellore - ([^<]+) Near Me/g;
  
  let updated = false;
  content = content.replace(vellorePattern, (match, service, specialist) => {
    updated = true;
    return `Best ${service} Doctors in India - ${specialist} Near Me`;
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

console.log('🚀 Updating all service page H1 titles to "in India"...\n');

const servicesDir = path.join(__dirname, '..', 'app', 'services');
const serviceFiles = getAllServiceFiles(servicesDir);

let updated = 0;
let skipped = 0;

serviceFiles.forEach(filePath => {
  const relativePath = path.relative(servicesDir, filePath);
  const serviceName = path.dirname(relativePath) || 'root';
  
  if (updateServiceH1(filePath)) {
    updated++;
    if (updated <= 20) {
      console.log(`  ✅ ${serviceName}`);
    }
  } else {
    skipped++;
  }
});

if (updated > 20) {
  console.log(`  ✅ ... and ${updated - 20} more services`);
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Update Complete!');
console.log(`   Updated:  ${updated} service pages`);
console.log(`   Skipped:  ${skipped} pages (no H1 or different format)`);
console.log(`   Total:    ${serviceFiles.length} service files processed`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n✅ All service pages now display:');
console.log('   "Best <Service> Doctors in India - <Specialist> Near Me"');
console.log('\n📋 Examples:');
console.log('   • "Best Root Canal Treatment Doctors in India - Endodontist Near Me"');
console.log('   • "Best Dental Implants Doctors in India - Implantologist Near Me"');
console.log('   • "Best Orthodontics Doctors in India - Orthodontist Near Me"');
