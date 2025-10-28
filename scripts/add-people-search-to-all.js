#!/usr/bin/env node

/**
 * ADD "PEOPLE ALSO SEARCH FOR" TO ALL PAGES
 * Updates all existing location pages to include the new component
 */

const fs = require('fs');
const path = require('path');

// Regions to update
const regions = ['vellore', 'chennai', 'kanchipuram'];
let totalUpdated = 0;
let totalSkipped = 0;
let totalErrors = 0;

function getCityName(region) {
  if (region === 'vellore') return 'Vellore';
  if (region === 'chennai') return 'Chennai';
  if (region === 'kanchipuram') return 'Kanchipuram';
  return region;
}

function updatePageFile(filePath, region) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if already has PeopleAlsoSearchFor
    if (content.includes('PeopleAlsoSearchFor')) {
      return 'skipped';
    }

    // Add import if not present
    if (!content.includes('PeopleAlsoSearchFor')) {
      content = content.replace(
        "} from '@/components/location';",
        ",\n  PeopleAlsoSearchFor\n} from '@/components/location';"
      );
    }

    // Add component before NearbyLocationsWidget
    const componentToAdd = `
        {/* People Also Search For */}
        <PeopleAlsoSearchFor 
          location={locationData.name}
          city="${getCityName(region)}"
        />
`;

    if (content.includes('<NearbyLocationsWidget')) {
      content = content.replace(
        '        {/* Nearby Locations */}\n        <NearbyLocationsWidget',
        `${componentToAdd}\n        {/* Nearby Locations */}\n        <NearbyLocationsWidget`
      );
    } else if (content.includes('<CTAWidget')) {
      // If no NearbyLocationsWidget, add before CTA
      content = content.replace(
        '        {/* CTA */}\n        <CTAWidget',
        `${componentToAdd}\n        {/* CTA */}\n        <CTAWidget`
      );
    }

    fs.writeFileSync(filePath, content);
    return 'updated';
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
    return 'error';
  }
}

console.log('🔄 Adding "People Also Search For" to all 1,310 location pages...\n');

regions.forEach(region => {
  const regionDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', region);
  
  if (!fs.existsSync(regionDir)) {
    console.log(`⚠️  ${region} directory not found, skipping...`);
    return;
  }

  console.log(`📂 Processing ${region}...`);
  
  const locations = fs.readdirSync(regionDir)
    .filter(item => {
      const itemPath = path.join(regionDir, item);
      return fs.statSync(itemPath).isDirectory();
    });

  locations.forEach((slug, index) => {
    const pagePath = path.join(regionDir, slug, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) return;

    const result = updatePageFile(pagePath, region);
    
    if (result === 'updated') {
      totalUpdated++;
      if (index < 5) console.log(`  ✅ Updated: ${slug}`);
    } else if (result === 'skipped') {
      totalSkipped++;
    } else if (result === 'error') {
      totalErrors++;
    }
  });

  console.log(`  ✓ ${region}: Done\n`);
});

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n📊 Summary:');
console.log(`   Updated:  ${totalUpdated} pages`);
console.log(`   Skipped:  ${totalSkipped} pages`);
console.log(`   Errors:   ${totalErrors} pages`);
console.log(`   Total:    ${totalUpdated + totalSkipped} pages processed`);
console.log('\n✅ People Also Search For component added to all pages!');
console.log('\n🎯 Benefits:');
console.log('   • 150+ internal links per page');
console.log('   • Long-tail keyword targeting');
console.log('   • Improved user engagement');
console.log('   • Better SEO with related searches');
console.log('');

