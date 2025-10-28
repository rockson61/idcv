#!/usr/bin/env node

/**
 * CHENNAI LOCATION PAGES GENERATOR
 * Generates all Chennai location pages with full features
 */

const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'chennai');

// Read CSV file
const csvPath = path.join(__dirname, 'chennai-locations.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const lines = csvContent.trim().split('\n');

// Parse CSV (skip header)
const locations = lines.slice(1).map(line => {
  const [name, pincode, state, city] = line.split(',');
  return { name: name.trim(), pincode: pincode.trim(), state: state.trim(), city: city.trim() };
});

console.log(`📊 Found ${locations.length} Chennai locations to generate`);
console.log('');

// Generate slug from name
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Generate page template
function generatePageContent(locationInfo) {
  const slug = generateSlug(locationInfo.name);
  
  return `import { Metadata } from 'next';
import {
  GoogleMapEmbed,
  LocalAmenitiesMap,
  LocationReviews,
  LocationFAQs,
  LocationHeader,
  NearbyLocationsWidget,
  EnhancedServicesList,
  TravelInfoCard,
  PriceComparisonTable,
  WhyChooseUs
} from '@/components/location';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { CTAWidget } from '@/components/widgets/cta-widget';

export const metadata: Metadata = {
  title: 'Best Dentist in ${locationInfo.name}, Chennai | Dental Clinic ${locationInfo.pincode}',
  description: 'Top-rated dental clinic in ${locationInfo.name}, Chennai. Expert dentists, advanced treatments, affordable prices. Book appointment today! PIN: ${locationInfo.pincode}',
  keywords: 'dentist ${locationInfo.name}, dental clinic ${locationInfo.name}, teeth treatment Chennai, dentist near ${locationInfo.pincode}, best dentist Chennai',
  openGraph: {
    title: 'Best Dentist in ${locationInfo.name}, Chennai',
    description: 'Expert dental care in ${locationInfo.name}. Book your appointment today!',
    images: ['/images/clinic-exterior.jpg'],
  },
};

export default function ${slug.replace(/-/g, '')}Page() {
  const locationData = {
    name: '${locationInfo.name}',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '${locationInfo.pincode}',
    coordinates: { lat: 13.0827, lng: 80.2707 }, // Chennai center
  }

  const services = [
    { title: 'Root Canal Treatment', price: '₹3,500 - ₹10,000', features: ['Painless RCT', 'Single sitting', 'Advanced technology'] },
    { title: 'Dental Implants', price: '₹25,000 - ₹35,000', features: ['International brands', 'Lifetime warranty', '95% success rate'] },
    { title: 'Teeth Whitening', price: '₹4,000 - ₹10,000', features: ['Professional bleaching', 'Instant results', 'Safe & effective'] },
    { title: 'Braces & Aligners', price: '₹30,000 - ₹80,000', features: ['Metal & ceramic', 'Invisible options', 'Payment plans'] },
    { title: 'Dental Cleaning', price: '₹500 - ₹1,500', features: ['Ultrasonic scaling', 'Polishing', 'Gum care'] },
    { title: 'Tooth Extraction', price: '₹800 - ₹3,000', features: ['Painless', 'Quick procedure', 'Expert care'] }
  ];

  const amenities = {
    banks: [
      { name: 'State Bank of India ${locationInfo.name}', address: '${locationInfo.name}, Chennai' },
      { name: 'ICICI Bank', address: 'Near ${locationInfo.name}, Chennai' },
      { name: 'HDFC Bank', address: '${locationInfo.name} Branch' },
    ],
    atms: [
      { name: 'SBI ATM', distance: '0.2 km' },
      { name: 'ICICI ATM', distance: '0.3 km' },
      { name: 'Axis Bank ATM', distance: '0.5 km' },
    ],
    postOffices: [
      { name: '${locationInfo.name} Post Office', pincode: '${locationInfo.pincode}' },
    ],
    hospitals: [
      { name: 'Government Hospital ${locationInfo.name}', type: 'Govt', beds: '100+' },
      { name: 'Private Clinic', type: 'Private', specialties: 'Multi-specialty' },
      { name: 'Primary Health Centre', type: 'PHC', services: 'Basic healthcare' },
    ],
  };

  const touristPlaces = [
    { name: 'Marina Beach', type: 'Beach', distance: 'Nearby' },
    { name: 'Kapaleeshwarar Temple', type: 'Temple', distance: 'Nearby' },
    { name: 'Fort St. George', type: 'Historic', distance: 'Nearby' },
    { name: 'Government Museum', type: 'Museum', distance: 'Nearby' },
  ];

  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Excellent dental care in ${locationInfo.name}! The dentist was very professional and the clinic is well-equipped. Highly recommended!',
      date: '2024-10-15',
      treatment: 'Root Canal'
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Best dentist in Chennai! Got my teeth cleaning done here. Very hygienic and affordable. Great service!',
      date: '2024-10-10',
      treatment: 'Teeth Cleaning'
    },
    {
      name: 'Lakshmi Devi',
      rating: 5,
      text: 'Painless treatment and friendly staff. The dental implant procedure was smooth and comfortable. Thank you!',
      date: '2024-10-05',
      treatment: 'Dental Implant'
    }
  ];

  const faqs = [
    {
      question: 'Where is the best dental clinic in ${locationInfo.name}, Chennai?',
      answer: 'Our dental clinic in ${locationInfo.name} is conveniently located and easily accessible. We offer comprehensive dental services with experienced dentists and modern equipment.'
    },
    {
      question: 'What are the dental clinic timings in ${locationInfo.name}?',
      answer: 'We are open Monday to Saturday, 9:00 AM to 8:00 PM, and Sunday 9:00 AM to 2:00 PM. We also provide emergency dental services.'
    },
    {
      question: 'How much does dental treatment cost in ${locationInfo.name}?',
      answer: 'Our dental treatment costs are very affordable. Teeth cleaning starts at ₹800, fillings at ₹500, root canal at ₹3,000, and dental implants at ₹25,000. We offer flexible payment options.'
    },
    {
      question: 'Do you provide emergency dental services in ${locationInfo.name}?',
      answer: 'Yes, we provide 24/7 emergency dental services for urgent cases like severe toothache, broken teeth, or dental injuries. Call us anytime!'
    },
    {
      question: 'Is parking available at the dental clinic in ${locationInfo.name}?',
      answer: 'Yes, we have free parking facility available for our patients. You can safely park your vehicle while visiting our clinic.'
    }
  ];

  const nearbyLocations = [
    { name: 'T Nagar', slug: 'thygaraya-nagar', distance: 'Nearby' },
    { name: 'Anna Nagar', slug: 'anna-nagar', distance: 'Nearby' },
    { name: 'Adyar', slug: 'adyar', distance: 'Nearby' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' },
            { title: 'Chennai', href: '/in/tamil-nadu/chennai' },
            { title: locationData.name }
          ]}
        />

        {/* Location Header */}
        <LocationHeader
          locationName={locationData.name}
          pincode={locationData.pincode}
          distance="From Vellore"
          category="town"
        />

        {/* Google Map */}
        <GoogleMapEmbed
          locationName={locationData.name}
          latitude={locationData.coordinates.lat}
          longitude={locationData.coordinates.lng}
        />

        {/* Services */}
        <EnhancedServicesList 
          locationName={locationData.name}
          services={services}
        />

        {/* Price Comparison */}
        <PriceComparisonTable />

        {/* Why Choose Us */}
        <WhyChooseUs location={locationData.name} />

        {/* Local Amenities */}
        <LocalAmenitiesMap
          amenities={amenities}
          touristPlaces={touristPlaces}
          location={locationData.name}
        />

        {/* Travel Info */}
        <TravelInfoCard
          location={locationData.name}
          city="Chennai"
          transportModes={{
            bus: { available: true, routes: 'Multiple MTC buses', cost: '₹10-30' },
            train: { available: true, station: 'Chennai Central / Egmore', cost: '₹10-50' },
            car: { available: true, parking: 'Available', time: '30-60 min' },
            auto: { available: true, cost: '₹50-150', availability: 'High' }
          }}
        />

        {/* Reviews */}
        <LocationReviews
          reviews={reviews}
          location={locationData.name}
          averageRating={5}
        />

        {/* FAQs */}
        <LocationFAQs faqs={faqs} location={locationData.name} />

        {/* Nearby Locations */}
        <NearbyLocationsWidget
          locations={nearbyLocations}
          currentLocation={locationData.name}
          city="Chennai"
        />

        {/* CTA */}
        <CTAWidget
          title={\`Book Your Dental Appointment in \${locationData.name} Today!\`}
          description="Expert dental care at affordable prices. Call now for free consultation!"
        />
      </div>
    </div>
  );
}
`;
}

let created = 0;
let skipped = 0;
let errors = 0;

// Generate pages
locations.forEach((location, index) => {
  const slug = generateSlug(location.name);
  const locationDir = path.join(baseDir, slug);
  const pageFile = path.join(locationDir, 'page.tsx');

  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(locationDir)) {
      fs.mkdirSync(locationDir, { recursive: true });
    }

    // Check if page already exists
    if (fs.existsSync(pageFile)) {
      console.log(`⏭️  Skipped: ${location.name} (already exists)`);
      skipped++;
      return;
    }

    // Generate and write page content
    const content = generatePageContent(location);
    fs.writeFileSync(pageFile, content);

    created++;
    console.log(`✅ Created: ${location.name} (${slug}) - PIN: ${location.pincode}`);
  } catch (error) {
    errors++;
    console.error(`❌ Error creating ${location.name}:`, error.message);
  }
});

console.log('');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');
console.log(`✅ Chennai Pages Generation Complete!`);
console.log('');
console.log(`📊 Summary:`);
console.log(`   Created:  ${created} pages`);
console.log(`   Skipped:  ${skipped} pages`);
console.log(`   Errors:   ${errors} pages`);
console.log(`   Total:    ${locations.length} locations`);
console.log('');
console.log('🎯 Next steps:');
console.log('   1. Verify pages: ls -la app/in/tamil-nadu/chennai/');
console.log('   2. Test a page: npm run dev');
console.log('   3. Build: npm run build');
console.log('   4. Deploy: vercel deploy --prod');
console.log('');

