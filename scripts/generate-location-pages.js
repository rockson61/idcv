#!/usr/bin/env node

/**
 * Bulk Location Page Generator
 * Generates all 400+ Vellore location pages from CSV/data
 * 
 * Usage:
 *   node scripts/generate-location-pages.js
 *   node scripts/generate-location-pages.js --location=Arakkonam
 *   node scripts/generate-location-pages.js --taluk=Arcot --limit=10
 */

const fs = require('fs');
const path = require('path');

// Location data - can be imported from CSV or database
const locationData = [
  // Format: name, taluk, pincode, distance, travelTime
  ['Agaram', 'Arcot', '632506', '28 km', '40 minutes'],
  ['Akkachikuppam', 'Arakkonam', '632510', '38 km', '50 minutes'],
  ['Alapakkam', 'Walajapet', '632508', '22 km', '32 minutes'],
  ['Ammanur', 'Arakkonam', '631002', '36 km', '48 minutes'],
  ['Ammoor', 'Wallajah', '632501', '24 km', '35 minutes'],
  ['Ammundi', 'Walajapet', '632519', '26 km', '38 minutes'],
  ['Anaimallur', 'Arcot', '632507', '27 km', '39 minutes'],
  ['Anaipakkam', 'Arakkonam', '631003', '37 km', '49 minutes'],
  ['Anandhalai', 'Walajapet', '632513', '23 km', '34 minutes'],
  ['Ananthangal', 'Arcot', '632511', '29 km', '42 minutes'],
  // Add more locations here...
];

// Template generator function
function generatePageTemplate(location) {
  const [name, taluk, pincode, distance, travelTime] = location;
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Star, Users, Shield, Award, Clock, Navigation, CheckCircle, ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { LocalAmenitiesMap } from '@/components/location/LocalAmenitiesMap'
import { LocationReviews, generateDefaultReviews } from '@/components/location/LocationReviews'
import { LocationFAQs, generateDefaultFAQs } from '@/components/location/LocationFAQs'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Best Dentist in ${name}, ${taluk} | Indira Dental Clinic | RCT, Implants, Braces',
  description: 'Expert dental care in ${name}. Dr. Rockson Samuel provides RCT, dental implants, braces, cosmetic dentistry. Pincode: ${pincode}. Book: +91 70106 50063',
  keywords: ['dentist ${name}', 'dental clinic ${name}', 'dental implants ${name}', 'RCT ${name}', 'braces ${name}', 'best dentist ${name} ${taluk}'],
}

export default function ${name.replace(/\s+/g, '')}Page() {
  const locationName = '${name}'
  const distance = '${distance}'
  const travelTime = '${travelTime}'
  const talukName = '${taluk}'
  const pincode = '${pincode}'

  const services = [
    { title: 'Root Canal Treatment', price: '₹3,000 - ₹8,000', features: ['Single sitting RCT', 'Painless procedure', 'Digital X-Ray', 'Crown included'] },
    { title: 'Dental Implants', price: '₹25,000 - ₹45,000', features: ['Titanium implants', 'Lifetime warranty', 'Natural look', 'Bone grafting'] },
    { title: 'Orthodontics & Braces', price: '₹30,000 - ₹80,000', features: ['Metal braces', 'Ceramic braces', 'Invisalign', 'Retainers'] },
    { title: 'Cosmetic Dentistry', price: '₹5,000 - ₹25,000', features: ['Teeth whitening', 'Veneers', 'Smile makeover', 'Bonding'] },
    { title: 'General Dentistry', price: '₹500 - ₹2,000', features: ['Check-ups', 'Cleanings', 'Fillings', 'Extractions'] },
    { title: 'Pediatric Dentistry', price: '₹500 - ₹3,000', features: ['First visit', 'Fluoride', 'Sealants', 'Cavity fillings'] }
  ]

  const amenities = [
    { name: 'State Bank of India', type: 'bank' as const, distance: '0.5 km', address: 'Main Road' },
    { name: 'ATM', type: 'atm' as const, distance: '0.3 km', address: 'Near Bus Stand' },
    { name: 'Post Office', type: 'post_office' as const, distance: '0.8 km', address: 'Post Office Road' },
    { name: 'Primary Health Center', type: 'hospital' as const, distance: '1.2 km', address: 'Hospital Road' },
  ]

  const touristPlaces = ['Local Temple', 'Market Area', '${taluk} Town']

  const reviews = generateDefaultReviews(locationName)
  const faqs = generateDefaultFAQs(locationName, distance)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' },
            { title: 'Vellore', href: '/in/tamil-nadu/vellore' },
            { title: locationName, href: \`/in/tamil-nadu/vellore/\${locationName.toLowerCase()}\` }
          ]}
          className="mb-8"
        />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best Dentist in {locationName}, {talukName}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Welcome to Indira Dental Clinic - serving {locationName} and surrounding areas in {talukName} taluk. 
            Located in Vellore, we offer comprehensive dental care just {distance} away.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Expert Care</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">15+ Years</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">{distance}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Clock className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">9 AM - 9 PM</span>
            </div>
          </div>
        </div>

        <GoogleMapEmbed locationName={locationName} className="mb-12" />

        <section className="mb-12" id="services">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Dental Services for {locationName} Patients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ModernCard key={index} hover>
                <ModernCardHeader><ModernCardTitle>{service.title}</ModernCardTitle></ModernCardHeader>
                <ModernCardContent>
                  <div className="mb-4"><span className="text-2xl font-bold text-teal-600">{service.price}</span></div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </ModernCardContent>
              </ModernCard>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Dr. Rockson Samuel</h2>
          <ModernCard>
            <ModernCardContent className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Image src="/dr-rockson-samuel-best-dentist-vellore.jpg" alt="Dr. Rockson Samuel" width={400} height={400} className="rounded-lg shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Rockson Samuel</h3>
                  <p className="text-lg text-teal-600 mb-4">BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach</p>
                  <p className="text-gray-600 mb-4">Experience: 15+ Years</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Dental Implants</span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Root Canal</span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Cosmetic Dentistry</span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Orthodontics</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center"><Star className="w-5 h-5 text-yellow-400 fill-current" /><span className="ml-1">4.9/5</span></div>
                    <div className="flex items-center"><Users className="w-5 h-5 text-teal-600" /><span className="ml-1">1000+ Patients</span></div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>

        <LocalAmenitiesMap locationName={locationName} amenities={amenities} touristPlaces={touristPlaces} className="mb-12" />

        <LocationReviews reviews={reviews} locationName={locationName} className="mb-12" />

        <LocationFAQs faqs={faqs} locationName={locationName} className="mb-12" />

        <CompactServiceWidget
          title={\`Popular Services for \${locationName} Patients\`}
          description="Most requested dental treatments."
          services={[
            { name: "Root Canal", slug: "root-canal-treatment", price: "₹3,000 - ₹8,000", duration: "1-2 hours" },
            { name: "Dental Implants", slug: "dental-implants", price: "₹25,000 - ₹45,000", duration: "2-3 hours" },
            { name: "Braces", slug: "orthodontics", price: "₹30,000 - ₹80,000", duration: "18-24 months" },
            { name: "Teeth Whitening", slug: "cosmetic-dentistry", price: "₹5,000 - ₹15,000", duration: "1 hour" }
          ]}
          ctaText="View All"
          ctaLink="/services"
          className="mb-12"
        />

        <section className="mb-12" id="contact">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact & Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ModernCard>
              <ModernCardHeader><ModernCardTitle className="flex items-center gap-2"><MapPin className="w-6 h-6 text-teal-600" />Clinic Address</ModernCardTitle></ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-700 mb-4">Indira Dental Clinic<br />Gandhi Nagar, Vellore<br />Tamil Nadu - 632001</p>
                <div className="space-y-2">
                  <div className="flex items-center"><Phone className="w-5 h-5 text-teal-600 mr-3" /><a href="tel:+917010650063" className="text-gray-700 hover:text-teal-600">+91 70106 50063</a></div>
                  <div className="flex items-center"><Clock className="w-5 h-5 text-teal-600 mr-3" /><span>Mon-Sun: 9 AM - 9 PM</span></div>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard>
              <ModernCardHeader><ModernCardTitle className="flex items-center gap-2"><Navigation className="w-6 h-6 text-teal-600" />From {locationName}</ModernCardTitle></ModernCardHeader>
              <ModernCardContent>
                <div className="space-y-4">
                  <div><h4 className="font-semibold text-gray-900 mb-2">Distance:</h4><p>{distance} - {travelTime}</p></div>
                  <div><h4 className="font-semibold text-gray-900 mb-2">Travel:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• By Bus: Regular services</li>
                      <li>• By Car: Via main road</li>
                      <li>• Free parking at clinic</li>
                    </ul>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </section>

        <CTAWidget
          title={\`Book from \${locationName} Today\`}
          description={\`Join patients from \${locationName} who trust Indira Dental Clinic.\`}
          primaryAction={{text:"Book Consultation",href:"/contact"}}
          secondaryAction={{text:"Call: +91 70106 50063",href:"tel:+917010650063"}}
          benefits={["15+ years experience","Modern equipment","Flexible payment",\`\${distance} from \${locationName}\`]}
          showRating={true}
          showAvailability={true}
        />
      </div>
    </div>
  )
}
`;
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  let locationFilter = null;
  let talukFilter = null;
  let limit = null;

  // Parse command line arguments
  args.forEach(arg => {
    if (arg.startsWith('--location=')) {
      locationFilter = arg.split('=')[1];
    } else if (arg.startsWith('--taluk=')) {
      talukFilter = arg.split('=')[1];
    } else if (arg.startsWith('--limit=')) {
      limit = parseInt(arg.split('=')[1]);
    }
  });

  let locationsToGenerate = locationData;

  // Apply filters
  if (locationFilter) {
    locationsToGenerate = locationsToGenerate.filter(loc => 
      loc[0].toLowerCase() === locationFilter.toLowerCase()
    );
  }

  if (talukFilter) {
    locationsToGenerate = locationsToGenerate.filter(loc => 
      loc[1].toLowerCase() === talukFilter.toLowerCase()
    );
  }

  if (limit) {
    locationsToGenerate = locationsToGenerate.slice(0, limit);
  }

  console.log(`\n🚀 Generating ${locationsToGenerate.length} location pages...\n`);

  let successCount = 0;
  let errorCount = 0;

  locationsToGenerate.forEach((location, index) => {
    const [name, taluk, pincode] = location;
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    const dirPath = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'vellore', slug);
    const filePath = path.join(dirPath, 'page.tsx');

    try {
      // Create directory if it doesn't exist
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      // Generate and write page content
      const content = generatePageTemplate(location);
      fs.writeFileSync(filePath, content);

      successCount++;
      console.log(`✅ [${index + 1}/${locationsToGenerate.length}] Created: ${name} (${slug})`);
    } catch (error) {
      errorCount++;
      console.error(`❌ [${index + 1}/${locationsToGenerate.length}] Error creating ${name}:`, error.message);
    }
  });

  console.log(`\n📊 Generation Complete!`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);
  console.log(`   📁 Total: ${locationsToGenerate.length}\n`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generatePageTemplate, locationData };

