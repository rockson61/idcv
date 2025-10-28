import { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { GoogleMapEmbed, LocalAmenitiesMap, LocationReviews, LocationFAQs, LocationHeader, NearbyLocationsWidget, EnhancedServicesList, TravelInfoCard, PriceComparisonTable, WhyChooseUs, generateDefaultReviews, generateDefaultFAQs } from '@/components/location'
import { CTAWidget } from '@/components/widgets/cta-widget'

export const metadata: Metadata = {
  title: 'Best Dentist in Pallikonda, Katpadi | Indira Dental Clinic | RCT, Implants',
  description: 'Expert dental care in Pallikonda. Dr. Rockson Samuel. PIN: 635809. Book: +91 70106 50063',
  keywords: ['dentist Pallikonda', 'dental clinic Pallikonda', 'Katpadi dentist'],
}

export default function PallikondaPage() {
  const locationName = 'Pallikonda'
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
    { name: 'Vellore', distance: '35 km', slug: '', travelTime: '48 minutes', pincode: '632001' },
    { name: 'Katpadi', distance: '5-10 km', slug: 'katpadi', travelTime: '15 min', pincode: '635809' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{title:'Home',href:'/'},{title:'India',href:'/in'},{title:'Tamil Nadu',href:'/in/tamil-nadu'},{title:'Vellore',href:'/in/tamil-nadu/vellore'},{title:locationName,href:`/in/tamil-nadu/vellore/${locationName.toLowerCase()}`}]} className="mb-8"/>
        <LocationHeader locationName={locationName} taluk="Katpadi" pincode="635809" distance="35 km" category="town" className="mb-12"/>
        <GoogleMapEmbed locationName={locationName} className="mb-12"/>
        <EnhancedServicesList services={services} locationName={locationName} className="mb-12"/>
        <PriceComparisonTable locationName={locationName} className="mb-12"/>
        <WhyChooseUs locationName={locationName} className="mb-12"/>
        <LocalAmenitiesMap locationName={locationName} amenities={amenities} touristPlaces={['Local Temple', 'Market']} className="mb-12"/>
        <TravelInfoCard fromLocation={locationName} distance="35 km" travelTime="48 minutes" options={{bus:{available:true},car:{available:true},auto:{available:true}}} className="mb-12"/>
        <LocationReviews reviews={generateDefaultReviews(locationName)} locationName={locationName} className="mb-12"/>
        <LocationFAQs faqs={generateDefaultFAQs(locationName, "35 km")} locationName={locationName} className="mb-12"/>
        <NearbyLocationsWidget currentLocation={locationName} locations={nearbyLocations} className="mb-12"/>
        
        <PeopleAlsoSearchFor location="Pallikonda" city="Vellore" />

        <CTAWidget title={`Book from ${locationName}`} description="Expert dental care nearby" primaryAction={{text:"Book",href:"/contact"}} secondaryAction={{text:"Call",href:"tel:+917010650063"}} benefits={["15+ years","Modern tech","EMI available",`${distance} away`]} showRating={true} showAvailability={true}/>
      </div>
    </div>
  )
}
