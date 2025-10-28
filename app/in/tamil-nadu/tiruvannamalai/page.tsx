import { Metadata } from "next"
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
import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"

export const metadata: Metadata = {
  title: 'Best Dentist in Tiruvannamalai | Indira Dental Clinic Vellore',
  description: 'Top-rated dental clinic serving Tiruvannamalai district. Expert dentists, advanced treatments, affordable prices. 90 KM from Vellore. Book appointment today!',
  keywords: 'dentist Tiruvannamalai, dental clinic Tiruvannamalai, teeth treatment Tiruvannamalai, best dentist near 606601',
  openGraph: {
    title: 'Best Dentist in Tiruvannamalai District',
    description: 'Expert dental care serving Tiruvannamalai. Book your appointment today!',
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function TiruvannamalaiPage() {
  const locationData = {
    name: 'Tiruvannamalai',
    pincode: '606601',
    coordinates: { lat: 12.2253, lng: 79.0747 }
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
    location: 'Tiruvannamalai',
    name: 'Rajesh Kumar',
    rating: 5,
      text: 'Excellent dental care! I travelled from Tiruvannamalai to Vellore for my dental implant. Dr. Rockson Samuel is very skilled and the treatment was completely painless. Worth the travel!',
      date: '2024-10-15',
      treatment: 'Dental Implant'
    },
    {
    location: 'Tiruvannamalai',
    name: 'Priya Devi',
    rating: 5,
      text: 'Best dentist for root canal treatment! The clinic is just 90 KM from Vellore and offers much better service than local clinics. Highly recommend!',
      date: '2024-10-10',
      treatment: 'Root Canal'
    },
    {
    location: 'Tiruvannamalai',
    name: 'Kumar Swamy',
    rating: 5,
      text: 'Amazing results with teeth whitening! Professional service and affordable prices. Thank you Dr. Rockson Samuel!',
      date: '2024-10-05',
      treatment: 'Teeth Whitening'
    }
  ]

  const faqs = [
    {
      question: 'How far is Indira Dental Clinic from Tiruvannamalai?',
      answer: 'We are located 90 KM from Vellore from Tiruvannamalai. Easily accessible by bus, train, or car via NH44. Many patients from Tiruvannamalai visit us for quality dental care.'
    },
    {
      question: 'Why should Tiruvannamalai patients choose Indira Dental Clinic?',
      answer: 'We offer advanced dental treatments with 15+ years experience, latest technology, 50% lower costs than metro cities, and personalized care by Dr. Rockson Samuel.'
    },
    {
      question: 'What dental services do you provide for Tiruvannamalai patients?',
      answer: 'Complete dental care including root canal, implants, braces, teeth whitening, gum treatment, extractions, and emergency services.'
    },
    {
      question: 'Do you provide transport assistance for Tiruvannamalai patients?',
      answer: 'Yes, we help coordinate transport and provide detailed directions. Our clinic is easily accessible from Tiruvannamalai.'
    },
    {
      question: 'What are your clinic timings for Tiruvannamalai patients?',
      answer: 'Open Monday-Saturday 9 AM-8 PM, Sunday 9 AM-2 PM. We accommodate patients from Tiruvannamalai with flexible appointment slots.'
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
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' }
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in Tiruvannamalai"
          pincode="606601"
          distance="90 KM from Vellore"
          category="major_town"
        />

        <GoogleMapEmbed
          locationName="Tiruvannamalai"
          latitude={12.2253}
          longitude={79.0747}
        />

        <EnhancedServicesList 
          locationName="Tiruvannamalai"
          services={services}
        />

        <PriceComparisonTable locationName="Tiruvannamalai" />

        <WhyChooseUs locationName="Tiruvannamalai" />

        <LocationReviews reviews={reviews} locationName="Tiruvannamalai" />

        <LocationFAQs faqs={faqs} locationName="Tiruvannamalai" />

        <NearbyLocationsWidget locations={nearbyLocations} currentLocation="Tiruvannamalai" />

        <PeopleAlsoSearchFor location="Tiruvannamalai" city="Tamil Nadu" />

      </div>
    </div>
  )
}
