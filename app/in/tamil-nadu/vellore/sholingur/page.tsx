import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Phone, Navigation } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { LocalAmenitiesMap } from '@/components/location/LocalAmenitiesMap'
import { LocationReviews } from '@/components/location/LocationReviews'
import { LocationFAQs } from '@/components/location/LocationFAQs'
import { LocationHeader } from '@/components/location/LocationHeader'
import { NearbyLocationsWidget } from '@/components/location/NearbyLocationsWidget'
import { EnhancedServicesList } from '@/components/location/EnhancedServicesList'
import { TravelInfoCard } from '@/components/location/TravelInfoCard'
import { PriceComparisonTable } from '@/components/location/PriceComparisonTable'
import { WhyChooseUs } from '@/components/location/WhyChooseUs'
import { CTAWidget } from '@/components/widgets/cta-widget'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Best Dentist in Sholingur, Arakkonam | Indira Dental Clinic | RCT, Implants, Braces',
  description: 'Expert dental care in Sholingur. Dr. Rockson Samuel provides RCT, dental implants, braces. PIN: 631102. Book: +91 70106 50063',
  keywords: ['dentist Sholingur', 'dental clinic Sholingur', 'Sholingur Arakkonam dentist', 'dental implants Sholingur', 'RCT Sholingur'],
}

export default function SholingurPage() {
  const locationName = 'Sholingur'
  const taluk = 'Arakkonam'
  const pincode = '631102'
  const distance = '50 km'
  const travelTime = '1 hour'

  const services = [
    { 
      title: 'Root Canal Treatment', 
      slug: 'root-canal-treatment',
      description: 'Pain-free RCT with modern techniques', 
      price: '₹3,000 - ₹8,000', 
      features: ['Single sitting RCT', 'Painless procedure', 'Digital X-Ray', 'Crown included'],
      duration: '1-2 hours',
      popular: true
    },
    { 
      title: 'Dental Implants', 
      slug: 'dental-implants',
      description: 'Permanent tooth replacement', 
      price: '₹25,000 - ₹45,000', 
      features: ['Titanium implants', 'Lifetime warranty', 'Natural look', 'Bone grafting'],
      duration: '2-3 hours',
      popular: true
    },
    { 
      title: 'Orthodontics & Braces', 
      slug: 'orthodontics',
      description: 'Straighten teeth with braces', 
      price: '₹30,000 - ₹80,000', 
      features: ['Metal braces', 'Ceramic braces', 'Invisalign', 'Retainers'],
      duration: '18-24 months'
    },
    { 
      title: 'Cosmetic Dentistry', 
      slug: 'cosmetic-dentistry',
      description: 'Transform your smile', 
      price: '₹5,000 - ₹25,000', 
      features: ['Teeth whitening', 'Veneers', 'Smile makeover', 'Bonding'],
      duration: '1-3 hours',
      badge: 'NEW'
    },
    { 
      title: 'General Dentistry', 
      slug: 'general-dentistry',
      description: 'Comprehensive care', 
      price: '₹500 - ₹2,000', 
      features: ['Check-ups', 'Cleanings', 'Fillings', 'Extractions'],
      duration: '30-60 minutes'
    },
    { 
      title: 'Pediatric Dentistry', 
      slug: 'pediatric-dentistry',
      description: 'Care for children', 
      price: '₹500 - ₹3,000', 
      features: ['First visit', 'Fluoride', 'Sealants', 'Cavity fillings'],
      duration: '30-45 minutes'
    }
  ]

  const amenities = [
    { name: 'State Bank of India Sholingur', type: 'bank' as const, distance: '0.4 km', address: 'Main Road' },
    { name: 'Indian Bank', type: 'bank' as const, distance: '0.5 km', address: 'Bazaar Street' },
    { name: 'SBI ATM', type: 'atm' as const, distance: '0.2 km', address: 'Bus Stand' },
    { name: 'ICICI ATM', type: 'atm' as const, distance: '0.3 km', address: 'Main Road' },
    { name: 'Axis Bank ATM', type: 'atm' as const, distance: '0.4 km', address: 'Market Area' },
    { name: 'Sholingur Post Office', type: 'post_office' as const, distance: '0.6 km', address: 'Post Office Road' },
    { name: 'Government Hospital Sholingur', type: 'hospital' as const, distance: '1.2 km', address: 'Hospital Road' },
    { name: 'Primary Health Center', type: 'hospital' as const, distance: '0.8 km', address: 'Medical Street' },
    { name: 'Sholingur Market', type: 'shopping' as const, distance: '0.3 km', address: 'Market Street' },
    { name: 'Shopping Complex', type: 'shopping' as const, distance: '0.5 km', address: 'Commercial Area' },
    { name: 'Hotel Saravana Bhavan', type: 'restaurant' as const, distance: '0.4 km', address: 'Main Road' },
    { name: 'Ananda Bhavan', type: 'restaurant' as const, distance: '0.5 km', address: 'Bus Stand' },
  ]

  const touristPlaces = [
    'Sholingur Lakshmi Narasimha Temple',
    'Vedagirishwarar Temple',
    'Arakkonam Fort (nearby)',
    'Vedanthangal Bird Sanctuary (45 km)',
    'Kanchipuram Temples (55 km)'
  ]

  const nearbyLocations = [
    { name: 'Arakkonam', distance: '15 km', slug: 'arakkonam', travelTime: '20 minutes', pincode: '631001' },
    { name: 'Walajapet', distance: '30 km', slug: 'walajapet', travelTime: '40 minutes', pincode: '632513' },
    { name: 'Vellore', distance: '50 km', slug: '', travelTime: '1 hour', pincode: '632001' },
    { name: 'Takkolam', distance: '8 km', slug: 'takkolam', travelTime: '12 minutes', pincode: '631151' },
    { name: 'Arcot', distance: '35 km', slug: 'arcot', travelTime: '45 minutes', pincode: '632503' },
    { name: 'Kanchipuram', distance: '55 km', slug: 'kanchipuram', travelTime: '1.2 hours', pincode: '631501' },
  ]

  const reviews = [
    {
      name: 'Ramakrishnan S',
      location: 'Sholingur',
      rating: 5,
      treatment: 'Dental Implants',
      text: 'Excellent dental care! I traveled from Sholingur for dental implants and Dr. Rockson Samuel provided outstanding treatment. The clinic is modern, clean, and uses latest technology. The results are amazing and natural-looking. Highly recommend to everyone in Sholingur!',
      date: 'Jan 22, 2024',
      verified: true
    },
    {
      name: 'Malathi Devi',
      location: 'Sholingur Bazaar',
      rating: 5,
      treatment: 'Root Canal Treatment',
      text: 'Best dentist for Sholingur patients! The RCT was completely painless and completed in single sitting. Dr. Rockson is very skilled and explains everything clearly. The staff is friendly and professional. Worth the trip from Sholingur!',
      date: 'Jan 16, 2024',
      verified: true
    },
    {
      name: 'Senthil Kumar',
      location: 'Sholingur',
      rating: 5,
      treatment: 'Braces Treatment',
      text: 'My daughter got braces treatment and we are extremely satisfied. The treatment plan was explained clearly with costs. Modern clinic with excellent facilities. Highly recommend for all dental needs in Sholingur area!',
      date: 'Jan 10, 2024',
      verified: true
    }
  ]

  const faqs = [
    {
      question: 'Where is the best dental clinic near Sholingur?',
      answer: `Indira Dental Clinic in Gandhi Nagar, Vellore is the best choice for Sholingur residents. We are ${distance} from Sholingur and offer comprehensive dental services with modern equipment, experienced dentists led by Dr. Rockson Samuel, and affordable pricing with EMI options.`
    },
    {
      question: 'How much does dental treatment cost for Sholingur patients?',
      answer: `At Indira Dental Clinic serving Sholingur, root canal treatment costs ₹3,000-8,000, dental implants ₹25,000-45,000, and braces ₹30,000-80,000. We offer transparent pricing with no hidden costs, free consultation, and flexible payment plans including EMI.`
    },
    {
      question: 'Who is the best dentist for Sholingur patients?',
      answer: `Dr. Rockson Samuel at Indira Dental Clinic is highly experienced with over 15 years of expertise and is trusted by thousands of Sholingur residents. He holds BDS and MDS degrees in Oral & Maxillofacial Surgery and provides personalized dental care using modern technology.`
    },
    {
      question: 'How do I reach the dental clinic from Sholingur?',
      answer: `Our clinic in Vellore is ${distance} from Sholingur (approximately ${travelTime}). You can reach by bus (regular services available), train (Sholingur to Katpadi Junction), or car via NH 48. We provide free parking and our clinic is open 7 days a week from 9 AM to 9 PM.`
    },
    {
      question: 'What dental services are available for Sholingur residents?',
      answer: `We offer complete dental services for Sholingur patients including root canal treatment, dental implants, braces, cosmetic dentistry, teeth whitening, dental cleaning, pediatric dentistry, wisdom tooth extraction, gum treatment, and emergency dental care. All treatments use the latest technology and international standards.`
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' },
            { title: 'Vellore', href: '/in/tamil-nadu/vellore' },
            { title: locationName, href: `/in/tamil-nadu/vellore/sholingur` }
          ]}
          className="mb-8"
        />

        {/* Enhanced Header with all features */}
        <LocationHeader
          locationName={locationName}
          taluk={taluk}
          pincode={pincode}
          distance={distance}
          category="town"
          specialFeatures={['Temple Town', 'Good Connectivity', 'Regular Bus Service']}
          className="mb-12"
        />

        {/* Google Map with Directions */}
        <GoogleMapEmbed
          locationName={locationName}
          address="Indira Dental Clinic, Gandhi Nagar, Vellore, Tamil Nadu - 632001"
          className="mb-12"
        />

        {/* Enhanced Services with Popular Badges */}
        <EnhancedServicesList
          services={services}
          locationName={locationName}
          className="mb-12"
        />

        {/* Doctor Profile */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Meet Dr. Rockson Samuel - Trusted by Sholingur Patients
          </h2>
          <ModernCard>
            <ModernCardContent className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <Image
                    src="/dr-rockson-samuel-best-dentist-vellore.jpg"
                    alt="Dr. Rockson Samuel - Best Dentist serving Sholingur"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold">15+ Years Experience</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Rockson Samuel</h3>
                  <p className="text-lg text-teal-600 mb-4">BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <p className="text-gray-700">Specialized in complex dental implants and oral surgery</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <p className="text-gray-700">Trained in advanced cosmetic dentistry techniques</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <p className="text-gray-700">Member of Indian Dental Association</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <p className="text-gray-700">Trusted by 1000+ patients from Sholingur area</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-teal-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-teal-600">4.9/5</p>
                      <p className="text-sm text-gray-600">Patient Rating</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-600">1000+</p>
                      <p className="text-sm text-gray-600">Happy Patients</p>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>

        {/* Price Comparison Table */}
        <PriceComparisonTable
          locationName={locationName}
          className="mb-12"
        />

        {/* Why Choose Us */}
        <WhyChooseUs
          locationName={locationName}
          className="mb-12"
        />

        {/* Local Amenities with full details */}
        <LocalAmenitiesMap
          locationName={locationName}
          amenities={amenities}
          touristPlaces={touristPlaces}
          className="mb-12"
        />

        {/* Enhanced Travel Info */}
        <TravelInfoCard
          fromLocation={locationName}
          distance={distance}
          travelTime={travelTime}
          options={{
            bus: { 
              available: true, 
              frequency: 'Every 30 minutes', 
              cost: '₹50-80', 
              route: 'Sholingur to Vellore via Arakkonam'
            },
            train: { 
              available: true, 
              station: 'Sholingur to Katpadi Junction', 
              frequency: '4-5 trains daily', 
              cost: '₹20-30'
            },
            car: { 
              available: true, 
              route: 'Via NH 48 (50 km)', 
              tolls: 'Minimal'
            },
            auto: { 
              available: true, 
              cost: 'Meter + ₹100-150 for distance'
            }
          }}
          className="mb-12"
        />

        {/* Patient Reviews */}
        <LocationReviews
          reviews={reviews}
          locationName={locationName}
          className="mb-12"
        />

        {/* FAQs */}
        <LocationFAQs
          faqs={faqs}
          locationName={locationName}
          className="mb-12"
        />

        {/* Nearby Locations Widget */}
        <NearbyLocationsWidget
          currentLocation={locationName}
          locations={nearbyLocations}
          className="mb-12"
        />

        {/* Final CTA */}
        
        <PeopleAlsoSearchFor location="Sholingur" city="Vellore" />

        <CTAWidget
          title={`Book Your Dental Appointment from ${locationName}`}
          description={`Join hundreds of satisfied patients from ${locationName} and nearby areas who trust Indira Dental Clinic for their dental care.`}
          primaryAction={{
            text: "Book Free Consultation",
            href: "/contact"
          }}
          secondaryAction={{
            text: "Call Now: +91 70106 50063",
            href: "tel:+917010650063"
          }}
          benefits={[
            "Expert care with 15+ years experience",
            "Modern equipment and technology",
            "EMI and flexible payment options",
            `Just ${distance} from ${locationName}`,
            "Free parking available",
            "Open 7 days a week, 9 AM - 9 PM"
          ]}
          showRating={true}
          showAvailability={true}
        />
      </div>
    </div>
  )
}

