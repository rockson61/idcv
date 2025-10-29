import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Star, Users, Shield, Award, Clock, Navigation, CheckCircle, ArrowRight, Landmark } from 'lucide-react'
import { Breadcrumb } from '@/components/breadcrumb'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { LocalAmenitiesMap } from '@/components/location/LocalAmenitiesMap'
import { LocationReviews, generateDefaultReviews } from '@/components/location/LocationReviews'
import { LocationFAQs, generateDefaultFAQs } from '@/components/LocationFAQs'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Best Dentist and Dental Clinic in Arcot, Vellore | Indira Dental Clinic | RCT, Implants, Braces',
  description: 'Expert dental care in Arcot. Dr. Rockson Samuel provides RCT, dental implants, braces, cosmetic dentistry. Historic town near Vellore. Book: +91 70106 50063',
  keywords: ['dentist Arcot', 'dental clinic Arcot Vellore', 'dental implants Arcot', 'RCT Arcot', 'braces Arcot', 'best dentist Arcot', 'Arcot Fort dental'],
}

export default function ArcotPage() {
  const locationName = 'Arcot'
  const distance = '25 km'
  const travelTime = '35 minutes'

  const services = [
    { title: 'Root Canal Treatment', description: 'Pain-free RCT with modern techniques', price: '₹3,000 - ₹8,000', features: ['Single sitting RCT', 'Painless procedure', 'Digital X-Ray', 'Crown included'] },
    { title: 'Dental Implants', description: 'Permanent tooth replacement', price: '₹25,000 - ₹45,000', features: ['Titanium implants', 'Lifetime warranty', 'Natural look', 'Bone grafting'] },
    { title: 'Orthodontics & Braces', description: 'Straighten teeth with braces', price: '₹30,000 - ₹80,000', features: ['Metal braces', 'Ceramic braces', 'Invisalign', 'Retainers'] },
    { title: 'Cosmetic Dentistry', description: 'Transform your smile', price: '₹5,000 - ₹25,000', features: ['Teeth whitening', 'Veneers', 'Smile makeover', 'Bonding'] },
    { title: 'General Dentistry', description: 'Comprehensive care', price: '₹500 - ₹2,000', features: ['Check-ups', 'Cleanings', 'Fillings', 'Extractions'] },
    { title: 'Pediatric Dentistry', description: 'Care for children', price: '₹500 - ₹3,000', features: ['First visit', 'Fluoride', 'Sealants', 'Cavity fillings'] }
  ]

  const amenities = [
    { name: 'Canara Bank', type: 'bank' as const, distance: '0.4 km', address: 'Arcot Bazaar' },
    { name: 'State Bank of India', type: 'bank' as const, distance: '0.5 km', address: 'Main Road' },
    { name: 'SBI ATM', type: 'atm' as const, distance: '0.2 km', address: 'Near Fort' },
    { name: 'ICICI ATM', type: 'atm' as const, distance: '0.3 km', address: 'Bus Stand' },
    { name: 'Arcot Head Post Office', type: 'post_office' as const, distance: '0.6 km', address: 'Fort Road' },
    { name: 'Taluk Hospital', type: 'hospital' as const, distance: '1 km', address: 'Hospital Street' },
    { name: 'Primary Health Center', type: 'hospital' as const, distance: '0.8 km', address: 'Medical Road' },
    { name: 'Arcot Market', type: 'shopping' as const, distance: '0.3 km', address: 'Bazaar Street' },
    { name: 'Hotel Saravana Bhavan', type: 'restaurant' as const, distance: '0.5 km', address: 'Main Road' },
    { name: 'Sri Krishna Mess', type: 'restaurant' as const, distance: '0.4 km', address: 'Bazaar Area' },
  ]

  const touristPlaces = [
    'Arcot Fort (Historic 16th century fort)',
    'Jama Masjid (Built by Nawab of Arcot)',
    'Shenbagathoppu Lake',
    'Sri Ranganathaswamy Temple',
    'Nawab Palace Ruins',
    'Fort Museum'
  ]

  const nearbyLocations = [
    { name: 'Kalavai', distance: '12 km', slug: 'kalavai' },
    { name: 'Walajapet', distance: '20 km', slug: 'walajapet' },
    { name: 'Timiri', distance: '15 km', slug: 'timiri' },
    { name: 'Vellore City', distance: '25 km', slug: '' },
    { name: 'Ranipet', distance: '18 km', slug: 'ranipet' },
    { name: 'Sholingur', distance: '30 km', slug: 'sholingur' },
  ]

  const reviews = [
    {
      name: 'Naveen Kumar',
      location: 'Arcot',
      rating: 5,
      treatment: 'Dental Implants',
      text: 'Excellent dental care! I came from Arcot for dental implants and Dr. Rockson Samuel provided outstanding treatment. The clinic is modern and the journey from Arcot is convenient. Highly recommend!',
      date: 'Jan 18, 2024',
      verified: true
    },
    {
      name: 'Lakshmi Priya',
      location: 'Arcot Fort Area',
      rating: 5,
      treatment: 'Root Canal Treatment',
      text: 'Best dentist for Arcot patients! The RCT was completely painless. Dr. Rockson is very skilled and the staff is friendly. Worth the short trip from Arcot.',
      date: 'Jan 12, 2024',
      verified: true
    },
    {
      name: 'Mohammed Rafi',
      location: 'Arcot Bazaar',
      rating: 5,
      treatment: 'Braces Treatment',
      text: 'My daughter got braces treatment and we are very satisfied with the results. Professional service and modern equipment. Highly recommend to everyone in Arcot!',
      date: 'Jan 8, 2024',
      verified: true
    }
  ]

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
            { title: locationName, href: `/in/tamil-nadu/vellore/${locationName.toLowerCase()}` }
          ]}
          className="mb-8"
        />

        {/* Header with Historic Town Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            <Landmark className="w-4 h-4" />
            Historic Town - Arcot Fort
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Best Dentist and Dental Clinic in Arcot, Vellore</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Welcome to Indira Dental Clinic - serving the historic town of Arcot and surrounding areas. 
            Located just {distance} from Arcot, we offer comprehensive dental treatments with modern technology.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Expert Care</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">15+ Years Experience</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">{distance} from Arcot</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Clock className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">9 AM - 9 PM Daily</span>
            </div>
          </div>
        </div>

        <GoogleMapEmbed
          locationName={locationName}
          address="Indira Dental Clinic, Gandhi Nagar, Vellore, Tamil Nadu - 632001"
          className="mb-12"
        />

        <section className="mb-12" id="services">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Dental Services for Arcot Patients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ModernCard key={index} hover className="group">
                <ModernCardHeader>
                  <ModernCardTitle>{service.title}</ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-teal-600">{service.price}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
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
                <div className="relative">
                  <Image
                    src="/dr-rockson-samuel-best-dentist-vellore.jpg"
                    alt="Dr. Rockson Samuel - Best Dentist in Vellore"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Rockson Samuel</h3>
                  <p className="text-lg text-teal-600 mb-4">BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach</p>
                  <p className="text-gray-600 mb-4">Experience: 15+ Years</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Dental Implants</span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Root Canal Treatment</span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Cosmetic Dentistry</span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Orthodontics</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-700">4.9/5 Rating</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-teal-600" />
                      <span className="ml-1 text-gray-700">1000+ Happy Patients</span>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>

        <LocalAmenitiesMap
          locationName={locationName}
          amenities={amenities}
          touristPlaces={touristPlaces}
          className="mb-12"
        />

        <LocationReviews
          reviews={reviews}
          locationName={locationName}
          className="mb-12"
        />

        <LocationFAQs
          faqs={faqs}
          locationName={locationName}
          className="mb-12"
        />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Locations We Serve Near Arcot
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {nearbyLocations.map((location, index) => (
              <Link
                key={index}
                href={location.slug ? `/in/tamil-nadu/vellore/${location.slug}` : '/in/tamil-nadu/vellore'}
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-1">
                    {location.name}
                  </h3>
                  <p className="text-sm text-gray-600">{location.distance}</p>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors mx-auto mt-2" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <section className="mb-12">
        <CompactServiceWidget
            title={`Popular Services for ${locationName} Patients`}
            description="Most requested dental treatments by patients from Arcot."
            services={[
              { name: "Root Canal Treatment", slug: "root-canal-treatment", price: "₹3,000 - ₹8,000", duration: "1-2 hours" },
              { name: "Dental Implants", slug: "dental-implants", price: "₹25,000 - ₹45,000", duration: "2-3 hours" },
              { name: "Orthodontic Braces", slug: "orthodontics", price: "₹30,000 - ₹80,000", duration: "18-24 months" },
              { name: "Cosmetic Dentistry", slug: "cosmetic-dentistry", price: "₹5,000 - ₹25,000", duration: "1-3 hours" }
            ]}
            ctaText="View All Services"
            ctaLink="/services"
          />
        </section>
        </section>

        <section className="mb-12" id="contact">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact & Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ModernCard>
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  Clinic Address
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-700 mb-4">
                  Indira Dental Clinic<br />
                  Gandhi Nagar, Vellore<br />
                  Tamil Nadu - 632001<br />
                  India
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-teal-600 mr-3" />
                    <a href="tel:+917010650063" className="text-gray-700 hover:text-teal-600">+91 70106 50063</a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-teal-600 mr-3" />
                    <span className="text-gray-700">Mon-Sun: 9:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard>
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <Navigation className="w-6 h-6 text-teal-600" />
                  How to Reach from Arcot
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Distance & Time:</h4>
                    <p className="text-gray-700">{distance} - Approximately {travelTime}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Travel Options:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• By Bus: Regular buses from Arcot to Vellore</li>
                      <li>• By Car: Via Arcot-Vellore Road</li>
                      <li>• By Auto: Shared autos available</li>
                      <li>• Free parking available at clinic</li>
                    </ul>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </section>

        
        <PeopleAlsoSearchFor location="Arcot" city="Vellore" />

        <CTAWidget
          title="Book Your Dental Appointment from Arcot"
          description="Join hundreds of satisfied patients from Arcot and nearby areas who trust Indira Dental Clinic."
          primaryAction={{
            text: "Book Free Consultation",
            href: "/contact"
          }}
          secondaryAction={{
            text: "Call Now: +91 70106 50063",
            href: "tel:+917010650063"
          }}
          benefits={[
            "Expert dental care with 15+ years experience",
            "Modern equipment and technology",
            "Flexible payment plans available",
            `Just ${distance} from Arcot - Easy to reach`
          ]}
          showRating={true}
          showAvailability={true}
        />
      </div>
    </div>
  )
}
