#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const districts = [
  {
    name: 'Ranipet',
    slug: 'ranipet',
    description: 'Ranipet district, known for its industrial growth and proximity to Vellore',
    pincode: '632401',
    distance: '25 KM from Vellore',
    population: '12 lakh+',
    coordinates: { lat: 12.9247, lng: 79.3308 }
  },
  {
    name: 'Tirupattur',
    slug: 'tirupattur',
    description: 'Tirupattur district, agricultural hub near Vellore',
    pincode: '635601',
    distance: '45 KM from Vellore',
    population: '10 lakh+',
    coordinates: { lat: 12.4961, lng: 78.5722 }
  },
  {
    name: 'Tiruvannamalai',
    slug: 'tiruvannamalai',
    description: 'Tiruvannamalai district, famous temple town in Tamil Nadu',
    pincode: '606601',
    distance: '90 KM from Vellore',
    population: '25 lakh+',
    coordinates: { lat: 12.2253, lng: 79.0747 }
  }
];

const generateDistrictPage = (district) => `import { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { LocationHeader } from "@/components/location/LocationHeader"
import { GoogleMapEmbed } from "@/components/location/GoogleMapEmbed"
import { EnhancedServicesList } from "@/components/location/EnhancedServicesList"
import { PriceComparisonTable } from "@/components/location/PriceComparisonTable"
import { WhyChooseUs } from "@/components/location/WhyChooseUs"
import { LocationReviews } from "@/components/location/LocationReviews"
import { LocationFAQs } from "@/components/location/LocationFAQs"
import { NearbyLocationsWidget } from "@/components/location/NearbyLocationsWidget"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"

export const metadata: Metadata = {
  title: 'Best Dentist in ${district.name} | Indira Dental Clinic Vellore',
  description: 'Top-rated dental clinic serving ${district.name} district. Expert dentists, advanced treatments, affordable prices. ${district.distance}. Book appointment today!',
  keywords: 'dentist ${district.name}, dental clinic ${district.name}, teeth treatment ${district.name}, best dentist near ${district.pincode}',
  openGraph: {
    title: 'Best Dentist in ${district.name} District',
    description: 'Expert dental care serving ${district.name}. Book your appointment today!',
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function ${district.slug.charAt(0).toUpperCase() + district.slug.slice(1)}Page() {
  const locationData = {
    name: '${district.name}',
    pincode: '${district.pincode}',
    coordinates: { lat: ${district.coordinates.lat}, lng: ${district.coordinates.lng} }
  }

  const services = [
    { title: 'Root Canal Treatment', price: '₹3,500 - ₹10,000', features: ['Painless RCT', 'Single sitting', 'Advanced technology'] },
    { title: 'Dental Implants', price: '₹25,000 - ₹35,000', features: ['International brands', 'Lifetime warranty', '95% success rate'] },
    { title: 'Teeth Whitening', price: '₹4,000 - ₹10,000', features: ['Professional bleaching', 'Instant results', 'Safe & effective'] },
    { title: 'Braces & Aligners', price: '₹30,000 - ₹80,000', features: ['Metal & ceramic', 'Invisible options', 'Payment plans'] },
    { title: 'Dental Cleaning', price: '₹500 - ₹1,500', features: ['Ultrasonic scaling', 'Polishing', 'Gum care'] },
    { title: 'Tooth Extraction', price: '₹800 - ₹3,000', features: ['Painless', 'Quick procedure', 'Expert care'] }
  ]

  const reviews = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Excellent dental care! I travelled from ${district.name} to Vellore for my dental implant. Dr. Rockson Samuel is very skilled and the treatment was completely painless. Worth the travel!',
      date: '2024-10-15',
      treatment: 'Dental Implant'
    },
    {
      name: 'Priya Devi',
      rating: 5,
      text: 'Best dentist for root canal treatment! The clinic is just ${district.distance} and offers much better service than local clinics. Highly recommend!',
      date: '2024-10-10',
      treatment: 'Root Canal'
    },
    {
      name: 'Kumar Swamy',
      rating: 5,
      text: 'Amazing results with teeth whitening! Professional service and affordable prices. Thank you Dr. Rockson Samuel!',
      date: '2024-10-05',
      treatment: 'Teeth Whitening'
    }
  ]

  const faqs = [
    {
      question: 'How far is Indira Dental Clinic from ${district.name}?',
      answer: 'We are located ${district.distance} from ${district.name}. Easily accessible by bus, train, or car via NH44. Many patients from ${district.name} visit us for quality dental care.'
    },
    {
      question: 'Why should ${district.name} patients choose Indira Dental Clinic?',
      answer: 'We offer advanced dental treatments with 15+ years experience, latest technology, 50% lower costs than metro cities, and personalized care by Dr. Rockson Samuel.'
    },
    {
      question: 'What dental services do you provide for ${district.name} patients?',
      answer: 'Complete dental care including root canal, implants, braces, teeth whitening, gum treatment, extractions, and emergency services.'
    },
    {
      question: 'Do you provide transport assistance for ${district.name} patients?',
      answer: 'Yes, we help coordinate transport and provide detailed directions. Our clinic is easily accessible from ${district.name}.'
    },
    {
      question: 'What are your clinic timings for ${district.name} patients?',
      answer: 'Open Monday-Saturday 9 AM-8 PM, Sunday 9 AM-2 PM. We accommodate patients from ${district.name} with flexible appointment slots.'
    }
  ]

  const nearbyLocations = [
    { name: 'Vellore', slug: '/in/tamil-nadu/vellore', distance: 'Main Location' },
    { name: 'Katpadi', slug: '/in/tamil-nadu/vellore/katpadi', distance: '5 KM' },
    { name: 'Arakkonam', slug: '/in/tamil-nadu/vellore/arakkonam', distance: '15 KM' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' },
            { title: '${district.name}' }
          ]}
        />

        <LocationHeader
          locationName="${district.name} District"
          pincode="${district.pincode}"
          distance="${district.distance}"
          category="major_town"
        />

        <GoogleMapEmbed
          locationName="${district.name}"
          latitude={${district.coordinates.lat}}
          longitude={${district.coordinates.lng}}
        />

        <EnhancedServicesList 
          locationName="${district.name}"
          services={services}
        />

        <PriceComparisonTable locationName="${district.name}" />

        <WhyChooseUs location="${district.name}" />

        <LocationReviews reviews={reviews} locationName="${district.name}" />

        <LocationFAQs faqs={faqs} locationName="${district.name}" />

        <NearbyLocationsWidget locations={nearbyLocations} currentLocation="${district.name}" />

        <PeopleAlsoSearchFor locationName="${district.name}" city="Tamil Nadu" />

        <CTAWidget />
      </div>
    </div>
  )
}
`;

console.log('🚀 Creating Nearby District Pages...\n');

let created = 0;

districts.forEach((district) => {
  try {
    const districtPath = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', district.slug);
    
    if (!fs.existsSync(districtPath)) {
      fs.mkdirSync(districtPath, { recursive: true });
    }

    const pagePath = path.join(districtPath, 'page.tsx');
    fs.writeFileSync(pagePath, generateDistrictPage(district));

    created++;
    console.log(`✅ Created: ${district.name} (${district.distance})`);
  } catch (error) {
    console.error(`❌ Error creating ${district.name}:`, error.message);
  }
});

console.log(`\n📊 District Pages Complete!`);
console.log(`✅ Created: ${created} district pages`);
console.log(`\n🎯 Now all nearby districts are accessible!`);

