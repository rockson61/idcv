#!/usr/bin/env node

/**
 * QUICK LOCATION PAGE GENERATOR
 * Fast generation of location pages from simple data
 * 
 * Usage:
 *   node scripts/quick-generate.js "Walajapet" "Wallajah" "632513" "18 km" "28 minutes"
 *   node scripts/quick-generate.js --batch locations.txt
 */

const fs = require('fs');
const path = require('path');

// Quick template generator
function generateQuickPage(name, taluk, pincode, distance, travelTime) {
  const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const componentName = name.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');

  return `import { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { GoogleMapEmbed, LocalAmenitiesMap, LocationReviews, LocationFAQs, LocationHeader, NearbyLocationsWidget, EnhancedServicesList, TravelInfoCard, PriceComparisonTable, WhyChooseUs, generateDefaultReviews, generateDefaultFAQs } from '@/components/location'
import { CTAWidget } from '@/components/widgets/cta-widget'

export const metadata: Metadata = {
  title: 'Best Dentist in ${name}, ${taluk} | Indira Dental Clinic | RCT, Implants',
  description: 'Expert dental care in ${name}. Dr. Rockson Samuel. PIN: ${pincode}. Book: +91 70106 50063',
  keywords: ['dentist ${name}', 'dental clinic ${name}', '${taluk} dentist'],
}

export default function ${componentName}Page() {
  const locationName = '${name}'
  const services = [
    { title: 'Root Canal', slug: 'root-canal-treatment', price: '₹3,000 - ₹8,000', features: ['Painless', 'Single sitting', 'Crown included'], duration: '1-2 hours', popular: true },
    { title: 'Dental Implants', slug: 'dental-implants', price: '₹25,000 - ₹45,000', features: ['Titanium', 'Lifetime warranty', 'Natural look'], duration: '2-3 hours', popular: true },
    { title: 'Braces', slug: 'orthodontics', price: '₹30,000 - ₹80,000', features: ['Metal/Ceramic', 'Invisalign', 'EMI available'], duration: '18-24 months' },
    { title: 'Cosmetic', slug: 'cosmetic-dentistry', price: '₹5,000 - ₹25,000', features: ['Whitening', 'Veneers', 'Smile makeover'], duration: '1-3 hours' },
  ]
  const amenities = [
    { name: 'State Bank', type: 'bank' as const, distance: '0.5 km', address: 'Main Road' },
    { name: 'ATM', type: 'atm' as const, distance: '0.3 km', address: 'Bus Stand' },
    { name: 'Post Office', type: 'post_office' as const, distance: '0.8 km', address: 'PO Road' },
    { name: 'PHC', type: 'hospital' as const, distance: '1 km', address: 'Hospital Road' },
  ]
  const nearbyLocations = [
    { name: 'Vellore', distance: '${distance}', slug: '', travelTime: '${travelTime}', pincode: '632001' },
    { name: '${taluk}', distance: '5-10 km', slug: '${taluk.toLowerCase()}', travelTime: '15 min', pincode: '${pincode}' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{title:'Home',href:'/'},{title:'India',href:'/in'},{title:'Tamil Nadu',href:'/in/tamil-nadu'},{title:'Vellore',href:'/in/tamil-nadu/vellore'},{title:locationName,href:\`/in/tamil-nadu/vellore/\${locationName.toLowerCase()}\`}]} className="mb-8"/>
        <LocationHeader locationName={locationName} taluk="${taluk}" pincode="${pincode}" distance="${distance}" category="town" className="mb-12"/>
        <GoogleMapEmbed locationName={locationName} className="mb-12"/>
        <EnhancedServicesList services={services} locationName={locationName} className="mb-12"/>
        <PriceComparisonTable locationName={locationName} className="mb-12"/>
        <WhyChooseUs locationName={locationName} className="mb-12"/>
        <LocalAmenitiesMap locationName={locationName} amenities={amenities} touristPlaces={['Local Temple', 'Market']} className="mb-12"/>
        <TravelInfoCard fromLocation={locationName} distance="${distance}" travelTime="${travelTime}" options={{bus:{available:true},car:{available:true},auto:{available:true}}} className="mb-12"/>
        <LocationReviews reviews={generateDefaultReviews(locationName)} locationName={locationName} className="mb-12"/>
        <LocationFAQs faqs={generateDefaultFAQs(locationName, "${distance}")} locationName={locationName} className="mb-12"/>
        <NearbyLocationsWidget currentLocation={locationName} locations={nearbyLocations} className="mb-12"/>
        <CTAWidget title={\`Book from \${locationName}\`} description="Expert dental care nearby" primaryAction={{text:"Book",href:"/contact"}} secondaryAction={{text:"Call",href:"tel:+917010650063"}} benefits={["15+ years","Modern tech","EMI available",\`\${distance} away\`]} showRating={true} showAvailability={true}/>
      </div>
    </div>
  )
}
`;
}

// Main function
function main() {
  const args = process.argv.slice(2);

  if (args.length === 5) {
    // Single location generation
    const [name, taluk, pincode, distance, travelTime] = args;
    const content = generateQuickPage(name, taluk, pincode, distance, travelTime);
    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const dirPath = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'vellore', slug);
    const filePath = path.join(dirPath, 'page.tsx');

    // Create directory
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Write file
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created: ${name} at ${filePath}`);
  } else if (args[0] === '--batch' && args[1]) {
    // Batch generation from file
    const batchFile = args[1];
    if (!fs.existsSync(batchFile)) {
      console.error(`❌ Batch file not found: ${batchFile}`);
      process.exit(1);
    }

    const lines = fs.readFileSync(batchFile, 'utf-8').trim().split('\n');
    let count = 0;

    lines.forEach((line, index) => {
      const parts = line.split(',').map(p => p.trim());
      if (parts.length >= 3) {
        const [name, taluk, pincode] = parts;
        const distance = parts[3] || '30 km';
        const travelTime = parts[4] || '45 minutes';
        
        try {
          const content = generateQuickPage(name, taluk, pincode, distance, travelTime);
          const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          const dirPath = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'vellore', slug);
          const filePath = path.join(dirPath, 'page.tsx');

          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
          }

          fs.writeFileSync(filePath, content);
          count++;
          console.log(`✅ [${index + 1}/${lines.length}] Created: ${name}`);
        } catch (error) {
          console.error(`❌ [${index + 1}/${lines.length}] Error: ${name} - ${error.message}`);
        }
      }
    });

    console.log(`\n✅ Generated ${count} pages from batch file`);
  } else {
    console.log('Usage:');
    console.log('  Single: node quick-generate.js "Name" "Taluk" "Pincode" "Distance" "Time"');
    console.log('  Batch:  node quick-generate.js --batch locations.txt');
    console.log('\nExample:');
    console.log('  node quick-generate.js "Walajapet" "Wallajah" "632513" "18 km" "28 minutes"');
  }
}

if (require.main === module) {
  main();
}

module.exports = { generateQuickPage };

