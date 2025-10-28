#!/usr/bin/env node

/**
 * CSV Location Data Importer
 * Imports location data from CSV and generates TypeScript data file
 * 
 * Usage:
 *   node scripts/import-locations-from-csv.js locations.csv
 */

const fs = require('fs');
const path = require('path');

// Parse CSV data from your list
const csvData = `name,taluk,district,state,pincode
Agaram,Arcot,Vellore,TAMIL NADU,632506
Akkachikuppam,Arakkonam,Vellore,TAMIL NADU,632510
Alapakkam,Walajapet,Vellore,TAMIL NADU,632508
Ammanur,Arakkonam,Vellore,TAMIL NADU,631002
Ammoor,Wallajah,Vellore,TAMIL NADU,632501
Ammundi,Walajapet,Vellore,TAMIL NADU,632519
Anaimallur,Arcot,Vellore,TAMIL NADU,632507
Anaipakkam,Arakkonam,Vellore,TAMIL NADU,631003
Anandhalai,Walajapet,Vellore,TAMIL NADU,632513
Ananthangal,Arcot,Vellore,TAMIL NADU,632511
Anvardhikhanpet,Arakkonam,Vellore,TAMIL NADU,632502
Arakkonam,Arakkonam,Vellore,TAMIL NADU,631001
Arapakkam,Walajapet,Vellore,TAMIL NADU,632517
Arcot Bazaar,Arcot,Vellore,TAMIL NADU,632503
Arcot,Arcot,Vellore,TAMIL NADU,632503
Arcot West,Arcot,Vellore,TAMIL NADU,632503
Sholingur,Arakkonam,Vellore,TAMIL NADU,631102
Ranipet,Walajapet,Vellore,TAMIL NADU,632401
Tirupattur,Tirupattur,Vellore,TAMIL NADU,635601
Vaniyambadi,Vaniyambadi,Vellore,TAMIL NADU,635751
Ambur,Vaniyambadi,Vellore,TAMIL NADU,635802
Gudiyattam,Gudiyattam,Vellore,TAMIL NADU,632602
Walajapet,Wallajah,Vellore,TAMIL NADU,632513
Jolarpet,Tirupathur,Vellore,TAMIL NADU,635851
Yelagiri Hills,Tirupattur,Vellore,TAMIL NADU,635853`;

// Distance estimation based on pincode proximity
function estimateDistance(pincode) {
  const pin = parseInt(pincode);
  
  // Vellore city pincodes: 632001-632015
  if (pin >= 632001 && pin <= 632015) return { distance: '5 km', time: '15 minutes' };
  
  // Close suburbs: 632016-632100
  if (pin >= 632016 && pin <= 632100) return { distance: '10 km', time: '20 minutes' };
  
  // Nearby towns: 632101-632600
  if (pin >= 632101 && pin <= 632600) return { distance: '25 km', time: '35 minutes' };
  
  // Arakkonam area: 631000-631999
  if (pin >= 631000 && pin <= 631999) return { distance: '35 km', time: '50 minutes' };
  
  // Tirupattur area: 635000-635999
  if (pin >= 635000 && pin <= 635999) return { distance: '60 km', time: '1.5 hours' };
  
  // Default
  return { distance: '30 km', time: '45 minutes' };
}

// Determine category based on pincode and name
function determineCategory(name, taluk, pincode) {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes('industrial') || nameLower.includes('bhel')) return 'industrial';
  if (nameLower.includes('fort') || nameLower.includes('palace')) return 'historic';
  if (['arakkonam', 'arcot', 'ranipet', 'tirupattur', 'vaniyambadi', 'gudiyattam', 'walajapet', 'sholingur', 'jolarpet', 'ambur'].includes(nameLower)) {
    return 'major_town';
  }
  if (taluk.toLowerCase() === nameLower) return 'town';
  
  return 'village';
}

// Generate default amenities based on category
function generateDefaultAmenities(category) {
  const baseAmenities = {
    banks: [],
    atms: [{ name: 'ATM', distance: '0.5 km', address: 'Main Road' }],
    postOffices: [{ name: 'Post Office', distance: '0.8 km', address: 'Village Center' }],
    hospitals: [{ name: 'Primary Health Center', distance: '1 km', address: 'Hospital Road', type: 'phc' }],
    shopping: [{ name: 'Local Market', distance: '0.5 km', address: 'Market Street', type: 'market' }],
    restaurants: [],
    hotels: []
  };

  if (category === 'major_town' || category === 'industrial') {
    baseAmenities.banks = [
      { name: 'State Bank of India', distance: '0.5 km', address: 'Main Road' },
      { name: 'Indian Bank', distance: '0.6 km', address: 'Bus Stand' }
    ];
    baseAmenities.atms = [
      { name: 'SBI ATM', distance: '0.2 km', address: 'Bus Stand' },
      { name: 'ICICI ATM', distance: '0.3 km', address: 'Main Road' },
      { name: 'HDFC ATM', distance: '0.4 km', address: 'Market Area' }
    ];
    baseAmenities.hospitals = [
      { name: 'Government Hospital', distance: '1.2 km', address: 'Hospital Road', type: 'government' },
      { name: 'Primary Health Center', distance: '0.8 km', address: 'Medical Road', type: 'phc' }
    ];
    baseAmenities.restaurants = [
      { name: 'Hotel Saravana Bhavan', distance: '0.5 km', cuisine: 'South Indian' }
    ];
    baseAmenities.hotels = [
      { name: 'Local Hotel', distance: '0.6 km', rating: 3 }
    ];
  }

  return baseAmenities;
}

// Parse CSV and generate TypeScript file
function parseCSVAndGenerate() {
  const lines = csvData.trim().split('\n');
  const headers = lines[0].split(',');
  const locations = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const location = {};
    
    headers.forEach((header, index) => {
      location[header.trim()] = values[index]?.trim() || '';
    });

    const { distance, time } = estimateDistance(location.pincode);
    const category = determineCategory(location.name, location.taluk, location.pincode);
    const slug = location.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    const enhancedLocation = {
      name: location.name,
      slug: slug,
      taluk: location.taluk || 'Vellore',
      pincode: location.pincode,
      district: 'Vellore',
      state: 'TAMIL NADU',
      distance: distance,
      travelTime: time,
      description: `${location.name} in ${location.taluk} taluk, Vellore district`,
      category: category,
      amenities: generateDefaultAmenities(category),
      touristPlaces: [],
      nearbyLocations: [],
      transportOptions: {
        bus: true,
        train: category === 'major_town',
        auto: true,
        taxi: true
      }
    };

    locations.push(enhancedLocation);
  }

  console.log(`\n📊 Processed ${locations.length} locations\n`);
  console.log(`Categories:`);
  console.log(`  - Major Towns: ${locations.filter(l => l.category === 'major_town').length}`);
  console.log(`  - Towns: ${locations.filter(l => l.category === 'town').length}`);
  console.log(`  - Villages: ${locations.filter(l => l.category === 'village').length}`);
  console.log(`  - Industrial: ${locations.filter(l => l.category === 'industrial').length}`);
  console.log(`  - Historic: ${locations.filter(l => l.category === 'historic').length}\n`);

  // Generate TypeScript file
  const tsContent = `// Auto-generated location data
// Generated on: ${new Date().toISOString()}
// Total locations: ${locations.length}

export const allVelloreLocations = ${JSON.stringify(locations, null, 2)};

export function getLocationBySlug(slug: string) {
  return allVelloreLocations.find(loc => loc.slug === slug);
}

export function getLocationsByTaluk(taluk: string) {
  return allVelloreLocations.filter(loc => 
    loc.taluk.toLowerCase() === taluk.toLowerCase()
  );
}

export function getMajorTowns() {
  return allVelloreLocations.filter(loc => loc.category === 'major_town');
}
`;

  // Write to file
  const outputPath = path.join(__dirname, '..', 'lib', 'data', 'all-locations-generated.ts');
  fs.writeFileSync(outputPath, tsContent);
  
  console.log(`✅ Generated TypeScript file: ${outputPath}`);
  console.log(`📁 File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB\n`);

  return locations;
}

// Main execution
if (require.main === module) {
  console.log('\n🚀 CSV Location Data Importer\n');
  parseCSVAndGenerate();
  console.log('✅ Import complete!\n');
}

module.exports = { parseCSVAndGenerate, estimateDistance, determineCategory };

