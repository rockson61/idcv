import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Star, Users, Shield, Award, Clock, Navigation, CheckCircle, ArrowRight, Factory } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { LocalAmenitiesMap } from '@/components/location/LocalAmenitiesMap'
import { LocationReviews, generateDefaultReviews } from '@/components/location/LocationReviews'
import { LocationFAQs, generateDefaultFAQs } from '@/components/location/LocationFAQs'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Best Dentist and Dental Clinic in Ranipet, Vellore | Indira Dental Clinic | RCT, Implants, Braces',
  description: 'Expert dental care in Ranipet. Dr. Rockson Samuel provides RCT, dental implants, braces. Industrial town near Vellore. Book: +91 70106 50063',
  keywords: ['dentist Ranipet', 'dental clinic Ranipet Vellore', 'dental implants Ranipet', 'RCT Ranipet', 'braces Ranipet', 'BHEL Ranipet dental'],
}

export default function RanipetPage() {
  const locationName = 'Ranipet'
  const distance = '20 km'
  const travelTime = '30 minutes'

  const services = [
    { title: 'Root Canal Treatment', price: '₹3,000 - ₹8,000', features: ['Single sitting', 'Painless', 'Digital X-Ray', 'Crown included'] },
    { title: 'Dental Implants', price: '₹25,000 - ₹45,000', features: ['Titanium implants', 'Lifetime warranty', 'Natural look', 'Bone grafting'] },
    { title: 'Orthodontics & Braces', price: '₹30,000 - ₹80,000', features: ['Metal/Ceramic braces', 'Invisalign', 'Retainers', 'EMI available'] },
    { title: 'Cosmetic Dentistry', price: '₹5,000 - ₹25,000', features: ['Teeth whitening', 'Veneers', 'Smile makeover', 'Bonding'] },
    { title: 'General Dentistry', price: '₹500 - ₹2,000', features: ['Check-ups', 'Cleanings', 'Fillings', 'Extractions'] },
    { title: 'Pediatric Dentistry', price: '₹500 - ₹3,000', features: ['First visit', 'Fluoride', 'Sealants', 'Cavity fillings'] }
  ]

  const amenities = [
    { name: 'Indian Bank Ranipet', type: 'bank' as const, distance: '0.3 km', address: 'Ranipet Bazaar' },
    { name: 'State Bank of India', type: 'bank' as const, distance: '0.4 km', address: 'NH 48' },
    { name: 'HDFC Bank ATM', type: 'atm' as const, distance: '0.1 km', address: 'Industrial Area' },
    { name: 'Axis Bank ATM', type: 'atm' as const, distance: '0.2 km', address: 'Main Road' },
    { name: 'Ranipet Post Office', type: 'post_office' as const, distance: '0.5 km', address: 'Bazaar Street' },
    { name: 'Primary Health Center', type: 'hospital' as const, distance: '0.8 km', address: 'Medical Road' },
    { name: 'Government Hospital', type: 'hospital' as const, distance: '1.2 km', address: 'Hospital Street' },
    { name: 'Ranipet Market', type: 'shopping' as const, distance: '0.2 km', address: 'Market Area' },
    { name: 'Leather Showrooms', type: 'shopping' as const, distance: '0.5 km', address: 'Industrial Estate' },
    { name: 'Annapoorna Restaurant', type: 'restaurant' as const, distance: '0.3 km', address: 'NH 48' },
  ]

  const touristPlaces = [
    'BHEL Ranipet (Industrial Visit)',
    'Jawaharlal Nehru Park',
    'Ranipet Leather Industrial Estate',
    'Melvisharam (nearby)',
    'Walajapet (nearby)'
  ]

  const nearbyLocations = [
    { name: 'Walajapet', distance: '8 km', slug: 'walajapet' },
    { name: 'Melvisharam', distance: '5 km', slug: 'melvisharam' },
    { name: 'Arcot', distance: '18 km', slug: 'arcot' },
    { name: 'Vellore City', distance: '20 km', slug: '' },
    { name: 'Arakkonam', distance: '32 km', slug: 'arakkonam' },
    { name: 'Katpadi', distance: '22 km', slug: 'katpadi' },
  ]

  const reviews = [
    {
      name: 'Suresh Babu',
      location: 'Ranipet Industrial Area',
      rating: 5,
      treatment: 'Dental Implants',
      text: 'Working in BHEL Ranipet, I needed quality dental care. Dr. Rockson Samuel provided excellent implant treatment. Very professional and modern clinic. Highly recommended for Ranipet residents!',
      date: 'Jan 20, 2024',
      verified: true
    },
    {
      name: 'Geetha Rani',
      location: 'Ranipet Bazaar',
      rating: 5,
      treatment: 'Root Canal Treatment',
      text: 'Best dentist near Ranipet! The RCT was painless and completed in single sitting. The clinic is clean and uses modern equipment. Worth visiting from Ranipet.',
      date: 'Jan 14, 2024',
      verified: true
    },
    {
      name: 'Prakash Kumar',
      location: 'Ranipet',
      rating: 5,
      treatment: 'Braces',
      text: 'My son got braces treatment and we are very happy with the progress. Dr. Rockson explains everything clearly. Convenient location from Ranipet with good parking.',
      date: 'Jan 10, 2024',
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

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Factory className="w-4 h-4" />
            Industrial Town - Leather & Manufacturing Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Best Dentist and Dental Clinic in Ranipet, Vellore</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Serving Ranipet's industrial workforce and families with comprehensive dental care. 
            Just {distance} from Ranipet, easily accessible from BHEL and leather industrial areas.
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
              <span className="text-sm font-medium text-gray-700">{distance} away</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Clock className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">9 AM - 9 PM</span>
            </div>
          </div>
        </div>

        <GoogleMapEmbed locationName={locationName} className="mb-12" />

        <section className="mb-12" id="services">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dental Services for Ranipet Patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ModernCard key={index} hover>
                <ModernCardHeader><ModernCardTitle>{service.title}</ModernCardTitle></ModernCardHeader>
                <ModernCardContent>
                  <div className="mb-4"><span className="text-2xl font-bold text-teal-600">{service.price}</span></div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2"/>{feature}</li>
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
                    <div className="flex items-center"><Star className="w-5 h-5 text-yellow-400 fill-current"/><span className="ml-1">4.9/5</span></div>
                    <div className="flex items-center"><Users className="w-5 h-5 text-teal-600"/><span className="ml-1">1000+ Patients</span></div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>

        <LocalAmenitiesMap locationName={locationName} amenities={amenities} touristPlaces={touristPlaces} className="mb-12" />

        <LocationReviews reviews={reviews} locationName={locationName} className="mb-12" />

        <LocationFAQs faqs={faqs} locationName={locationName} className="mb-12" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other Locations Near Ranipet</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {nearbyLocations.map((location, index) => (
              <Link key={index} href={location.slug ? `/in/tamil-nadu/vellore/${location.slug}` : '/in/tamil-nadu/vellore'} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-1">{location.name}</h3>
                  <p className="text-sm text-gray-600">{location.distance}</p>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 mx-auto mt-2" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
        <CompactServiceWidget
          title="Popular Services for Ranipet Patients"
          description="Most requested by workers from BHEL and industrial areas."
          services={[
            { name: "Root Canal", slug: "root-canal-treatment", price: "₹3,000 - ₹8,000", duration: "1-2 hours" },
            { name: "Dental Implants", slug: "dental-implants", price: "₹25,000 - ₹45,000", duration: "2-3 hours" },
            { name: "Braces", slug: "orthodontics", price: "₹30,000 - ₹80,000", duration: "18-24 months" },
            { name: "Teeth Whitening", slug: "cosmetic-dentistry", price: "₹5,000 - ₹15,000", duration: "1 hour" }
          ]}
          ctaText="View All"
          ctaLink="/services"
         
        />
        </section>

        <section className="mb-12" id="contact">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact & Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ModernCard>
              <ModernCardHeader><ModernCardTitle className="flex items-center gap-2"><MapPin className="w-6 h-6 text-teal-600"/>Clinic Address</ModernCardTitle></ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-700 mb-4">Indira Dental Clinic<br/>Gandhi Nagar, Vellore<br/>Tamil Nadu - 632001<br/>India</p>
                <div className="space-y-2">
                  <div className="flex items-center"><Phone className="w-5 h-5 text-teal-600 mr-3"/><a href="tel:+917010650063" className="text-gray-700 hover:text-teal-600">+91 70106 50063</a></div>
                  <div className="flex items-center"><Clock className="w-5 h-5 text-teal-600 mr-3"/><span className="text-gray-700">Mon-Sun: 9 AM - 9 PM</span></div>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard>
              <ModernCardHeader><ModernCardTitle className="flex items-center gap-2"><Navigation className="w-6 h-6 text-teal-600"/>From Ranipet</ModernCardTitle></ModernCardHeader>
              <ModernCardContent>
                <div className="space-y-4">
                  <div><h4 className="font-semibold text-gray-900 mb-2">Distance:</h4><p className="text-gray-700">{distance} - {travelTime}</p></div>
                  <div><h4 className="font-semibold text-gray-900 mb-2">Travel:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• By Bus: Regular services</li>
                      <li>• By Car: Via NH 48</li>
                      <li>• Free parking at clinic</li>
                    </ul>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </section>

        
        <PeopleAlsoSearchFor location="Ranipet" city="Vellore" />

        <CTAWidget
          title="Book from Ranipet Today"
          description="Serving BHEL employees, industrial workers, and families in Ranipet."
          primaryAction={{text:"Book Consultation",href:"/contact"}}
          secondaryAction={{text:"Call: +91 70106 50063",href:"tel:+917010650063"}}
          benefits={["15+ years experience","Modern equipment","EMI options",`${distance} from Ranipet`]}
          showRating={true}
          showAvailability={true}
        />
      </div>
    </div>
  )
}

