#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getAllLocationPages(baseDir, locationList = []) {
  if (!fs.existsSync(baseDir)) {
    return locationList;
  }

  const items = fs.readdirSync(baseDir, { withFileTypes: true });
  
  for (const item of items) {
    if (item.isDirectory()) {
      const pagePath = path.join(baseDir, item.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        locationList.push({
          name: item.name,
          path: pagePath,
          region: path.basename(baseDir)
        });
      }
      // Recursively check subdirectories
      getAllLocationPages(path.join(baseDir, item.name), locationList);
    }
  }
  
  return locationList;
}

function capitalizeWords(str) {
  // Handle special cases
  const specialCases = {
    'rs': 'R.S.',
    'iaf': 'IAF',
    'lic': 'LIC',
    'rrc': 'RRC',
    'kdm': 'KDM',
    'mpt': 'MPT',
    'pc': 'P.C.',
    'ao': 'AO',
    'stthomas': 'St. Thomas',
  };
  
  return str
    .split('-')
    .map(word => {
      const lower = word.toLowerCase();
      if (specialCases[lower]) {
        return specialCases[lower];
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function updateLocationH1(filePath, locationName, region) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  const capitalizedLocation = capitalizeWords(locationName);
  const capitalizedRegion = capitalizeWords(region);
  
  // Pattern 1: Hardcoded H1 in JSX like: <h1>Best Dentist in Gandhi Nagar, Vellore</h1>
  const h1Pattern = /<h1[^>]*>[\s\S]*?Best Dentist in ([^<]+)<\/h1>/g;
  content = content.replace(h1Pattern, (match) => {
    updated = true;
    // Check if it's a district or sub-location
    if (match.includes('District') || !match.includes(',')) {
      // District page
      return match.replace(/Best Dentist in ([^<]+)/, 'Best Dentist and Dental Clinic in ' + capitalizedLocation);
    } else {
      // Sub-location page
      return match.replace(/Best Dentist in ([^<,]+),/, 'Best Dentist and Dental Clinic in ' + capitalizedLocation + ',');
    }
  });
  
  // Pattern 2: locationName prop that doesn't have "Best Dentist" format
  // Look for locationName that's just the location name
  const locationNamePattern = /locationName=["'](?!Best )([^"']+)["']/g;
  content = content.replace(locationNamePattern, (match, name) => {
    // Skip if it already has "Best Dentist and Dental Clinic"
    if (name.includes('Best Dentist')) {
      return match;
    }
    // Skip if it's just "District"
    if (name === 'District') {
      return match;
    }
    updated = true;
    return 'locationName="Best Dentist and Dental Clinic in ' + name + '"';
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

console.log('🚀 Fixing ALL location page H1 titles...\n');
console.log('   Target format: "Best Dentist and Dental Clinic in <Location>"\n');

// Process all Tamil Nadu locations
const tnBaseDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu');
const allLocations = [];

// Get all district directories
const districts = fs.readdirSync(tnBaseDir, { withFileTypes: true })
  .filter(item => item.isDirectory())
  .map(item => item.name);

console.log('📊 Found ' + districts.length + ' districts in Tamil Nadu\n');

let totalUpdated = 0;
let totalSkipped = 0;

districts.forEach(district => {
  const districtDir = path.join(tnBaseDir, district);
  const locations = getAllLocationPages(districtDir);
  
  if (locations.length === 0) {
    return;
  }
  
  console.log('📂 Processing ' + district + '...');
  
  let districtUpdated = 0;
  let districtSkipped = 0;
  
  locations.forEach(loc => {
    if (updateLocationH1(loc.path, loc.name, loc.region)) {
      districtUpdated++;
      totalUpdated++;
      if (districtUpdated <= 5) {
        console.log('  ✅ ' + loc.name);
      }
    } else {
      districtSkipped++;
      totalSkipped++;
    }
  });
  
  if (districtUpdated > 5) {
    console.log('  ✅ ... and ' + (districtUpdated - 5) + ' more');
  }
  console.log('  ✓ ' + district + ': ' + districtUpdated + ' updated, ' + districtSkipped + ' skipped\n');
});

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ H1 Title Optimization Complete!');
console.log('   Updated:  ' + totalUpdated + ' location pages');
console.log('   Skipped:  ' + totalSkipped + ' pages (already optimized)');
console.log('   Total:    ' + (totalUpdated + totalSkipped) + ' pages processed');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n✅ All location pages now use:');
console.log('   "Best Dentist and Dental Clinic in <Location>"');
console.log('\nExamples:');
console.log('   • "Best Dentist and Dental Clinic in Nagercoil"');
console.log('   • "Best Dentist and Dental Clinic in Gandhi Nagar, Vellore"');
console.log('   • "Best Dentist and Dental Clinic in Ranipet"');
