#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const districts = [
  'ariyalur', 'chengalpattu', 'coimbatore', 'cuddalore', 'dharmapuri',
  'dindigul', 'erode', 'kallakurichi', 'kanyakumari', 'karur',
  'krishnagiri', 'madurai', 'mayiladuthurai', 'nagapattinam', 'namakkal',
  'nilgiris', 'perambalur', 'pudukkottai', 'ramanathapuram', 'salem',
  'sivaganga', 'tenkasi', 'thanjavur', 'theni', 'tiruchirappalli',
  'tirunelveli', 'tiruppur', 'tiruvallur', 'tiruvarur', 'tuticorin',
  'vellore', 'viluppuram', 'virudhunagar'
];

let updated = 0;
let skipped = 0;

districts.forEach(district => {
  const filePath = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', district, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`⏭️  Skipped: ${district} (file not found)`);
    skipped++;
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Capitalize first letter of district name
  const capitalizedDistrict = district.charAt(0).toUpperCase() + district.slice(1);
  
  // Try to replace "Best Dental Clinic in" pattern first
  const oldPattern1 = new RegExp(`locationName="Best Dental Clinic in ${capitalizedDistrict}"`, 'g');
  // Also try "<District> District" pattern
  const oldPattern2 = new RegExp(`locationName="${capitalizedDistrict} District"`, 'g');
  
  const newValue = `locationName="Best Dentist and Dental Clinic in ${capitalizedDistrict}"`;
  
  if (content.match(oldPattern1)) {
    content = content.replace(oldPattern1, newValue);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${district} (from "Best Dental Clinic")`);
    updated++;
  } else if (content.match(oldPattern2)) {
    content = content.replace(oldPattern2, newValue);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${district} (from "District")`);
    updated++;
  } else {
    console.log(`⏭️  Skipped: ${district} (pattern not found or already updated)`);
    skipped++;
  }
});

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Update Complete!');
console.log(`   Updated: ${updated} districts`);
console.log(`   Skipped: ${skipped} districts`);
console.log(`   Total:   ${districts.length} districts processed`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

