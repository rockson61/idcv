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
  
  // Replace the locationName pattern
  const oldPattern = new RegExp(`locationName="${capitalizedDistrict} District"`, 'g');
  const newValue = `locationName="Best Dental Clinic in ${capitalizedDistrict}"`;
  
  if (content.match(oldPattern)) {
    content = content.replace(oldPattern, newValue);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${district}`);
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

