#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log(`
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          🔧 FIXING ALL H1 TITLES ACROSS WEBSITE 🔧                      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
`);

let totalUpdated = 0;
let totalErrors = 0;

// Function to update H1 in a file
function updateH1(filePath, newH1) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update LocationHeader locationName prop
    const locationHeaderRegex = /<LocationHeader\s+locationName="([^"]+)"/;
    if (content.match(locationHeaderRegex)) {
      content = content.replace(locationHeaderRegex, `<LocationHeader\n          locationName="${newH1}"`);
    }
    
    // Update direct H1 tags
    const h1Regex = /<h1[^>]*>([^<]+)<\/h1>/;
    if (content.match(h1Regex)) {
      content = content.replace(h1Regex, `<h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">${newH1}</h1>`);
    }
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`  ❌ Error updating ${filePath}: ${error.message}`);
    totalErrors++;
    return false;
  }
}

// 1. Fix all Vellore sub-location pages
console.log(`\n📍 Fixing Vellore Sub-Location Pages...`);
const velloreDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'vellore');
if (fs.existsSync(velloreDir)) {
  const locations = fs.readdirSync(velloreDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  locations.forEach(locationSlug => {
    const pagePath = path.join(velloreDir, locationSlug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const locationName = locationSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const newH1 = `Best Dentist and Dental Clinic in ${locationName}, Vellore`;
      if (updateH1(pagePath, newH1)) {
        totalUpdated++;
      }
    }
  });
  console.log(`  ✅ Updated ${locations.length} Vellore locations`);
}

// 2. Fix all Chennai area pages
console.log(`\n📍 Fixing Chennai Area Pages...`);
const chennaiDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'chennai');
if (fs.existsSync(chennaiDir)) {
  const areas = fs.readdirSync(chennaiDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  areas.forEach(areaSlug => {
    const pagePath = path.join(chennaiDir, areaSlug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const areaName = areaSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const newH1 = `Best Dentist and Dental Clinic in ${areaName}, Chennai`;
      if (updateH1(pagePath, newH1)) {
        totalUpdated++;
      }
    }
  });
  console.log(`  ✅ Updated ${areas.length} Chennai areas`);
}

// 3. Fix all Kanchipuram area pages
console.log(`\n📍 Fixing Kanchipuram Area Pages...`);
const kanchipuramDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'kanchipuram');
if (fs.existsSync(kanchipuramDir)) {
  const areas = fs.readdirSync(kanchipuramDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  areas.forEach(areaSlug => {
    const pagePath = path.join(kanchipuramDir, areaSlug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const areaName = areaSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const newH1 = `Best Dentist and Dental Clinic in ${areaName}, Kanchipuram`;
      if (updateH1(pagePath, newH1)) {
        totalUpdated++;
      }
    }
  });
  console.log(`  ✅ Updated ${areas.length} Kanchipuram areas`);
}

// 4. Fix all Tamil Nadu district pages
console.log(`\n📍 Fixing Tamil Nadu District Pages...`);
const tnDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu');
const districts = [
  'ariyalur', 'chengalpattu', 'chennai', 'coimbatore', 'cuddalore', 'dharmapuri',
  'dindigul', 'erode', 'kallakurichi', 'kanchipuram', 'kanyakumari', 'karur',
  'krishnagiri', 'madurai', 'mayiladuthurai', 'nagapattinam', 'namakkal',
  'nilgiris', 'perambalur', 'pudukottai', 'ramanathapuram', 'ranipet',
  'salem', 'sivaganga', 'sivagangai', 'tenkasi', 'thanjavur', 'the-nilgiris',
  'theni', 'thiruvallur', 'thiruvarur', 'thoothukudi', 'tiruchirappalli',
  'tirunelveli', 'tirupattur', 'tiruppur', 'tiruvallur', 'tiruvannamalai',
  'tiruvarur', 'vellore', 'villupuram', 'viluppuram', 'virudhunagar'
];

districts.forEach(districtSlug => {
  const pagePath = path.join(tnDir, districtSlug, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    const districtName = districtSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const newH1 = `Best Dentist and Dental Clinic in ${districtName}`;
    if (updateH1(pagePath, newH1)) {
      totalUpdated++;
    }
  }
});
console.log(`  ✅ Updated ${districts.length} district pages`);

// 5. Fix all taluk pages (across all districts)
console.log(`\n📍 Fixing All Taluk Pages...`);
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
        const newH1 = `Best Dentist and Dental Clinic in ${talukName}, ${districtName}`;
        if (updateH1(pagePath, newH1)) {
          totalUpdated++;
          talukCount++;
        }
      }
    });
  }
});
console.log(`  ✅ Updated ${talukCount} taluk pages`);

// 6. Fix all service pages
console.log(`\n🦷 Fixing Service Pages...`);
const servicesDir = path.join(__dirname, '..', 'app', 'services');

function processServiceDir(dir, parentPath = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  items.forEach(item => {
    if (item.isDirectory()) {
      processServiceDir(path.join(dir, item.name), path.join(parentPath, item.name));
    } else if (item.name === 'page.tsx') {
      try {
        let content = fs.readFileSync(path.join(dir, item.name), 'utf8');
        
        // Extract service name from path
        const pathParts = parentPath.split(path.sep).filter(Boolean);
        const serviceName = pathParts[pathParts.length - 1] || '';
        
        // Convert slug to title
        const serviceTitle = serviceName
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        
        // Determine specialist name based on service category
        let specialistName = 'Dental Specialist';
        
        if (serviceName.includes('implant')) specialistName = 'Implant Specialist';
        else if (serviceName.includes('root-canal') || serviceName.includes('endodontic')) specialistName = 'Endodontist';
        else if (serviceName.includes('orthodontic') || serviceName.includes('braces') || serviceName.includes('invisalign')) specialistName = 'Orthodontist';
        else if (serviceName.includes('gum') || serviceName.includes('periodontal')) specialistName = 'Periodontist';
        else if (serviceName.includes('cosmetic') || serviceName.includes('whitening') || serviceName.includes('veneer')) specialistName = 'Cosmetic Dentist';
        else if (serviceName.includes('surgery') || serviceName.includes('extraction') || serviceName.includes('wisdom')) specialistName = 'Oral Surgeon';
        else if (serviceName.includes('denture') || serviceName.includes('crown') || serviceName.includes('bridge')) specialistName = 'Prosthodontist';
        else if (serviceName.includes('pediatric') || serviceName.includes('child') || serviceName.includes('kids')) specialistName = 'Pediatric Dentist';
        
        const newH1 = `Best ${serviceTitle} Doctors in India - ${specialistName} Near Me`;
        
        // Update H1
        const h1Regex = /<h1[^>]*>([^<]+)<\/h1>/;
        if (content.match(h1Regex)) {
          content = content.replace(h1Regex, `<h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">${newH1}</h1>`);
          fs.writeFileSync(path.join(dir, item.name), content);
          totalUpdated++;
        }
      } catch (error) {
        // Skip errors silently
      }
    }
  });
}

processServiceDir(servicesDir);
console.log(`  ✅ Updated all service pages`);

// Summary
console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 H1 TITLE UPDATE SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✅ Total Updated:         ${totalUpdated} pages
  ❌ Errors:                ${totalErrors}

  H1 Title Formats Applied:
  
  📍 Location Pages:
     "Best Dentist and Dental Clinic in <Location>, <District>"
  
  📍 District Pages:
     "Best Dentist and Dental Clinic in <District>"
  
  🦷 Service Pages:
     "Best <Service> Doctors in India - <Specialist> Near Me"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ All H1 titles optimized for SEO and user experience!
`);

