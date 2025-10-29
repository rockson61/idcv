import { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { LocationHeader } from "@/components/location/LocationHeader"
import { GoogleMapEmbed } from "@/components/location/GoogleMapEmbed"
import { EnhancedServicesList } from "@/components/location/EnhancedServicesList"
import { LocationReviews } from "@/components/location/LocationReviews"
import { LocationFAQs } from '@/components/LocationFAQs'
import { NearbyLocationsWidget } from "@/components/location/NearbyLocationsWidget"
import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"

export const metadata: Metadata = {
  title: 'Best Dentist in Kanchipuram | Indira Dental Clinic Vellore',
  description: 'Top-rated dental clinic serving Kanchipuram district. Expert dentists, advanced treatments, affordable prices. 60 KM from Vellore. Book appointment today!',
  keywords: 'dentist Kanchipuram, dental clinic Kanchipuram, teeth treatment Kanchipuram, best dentist near 631501, dental care Kanchipuram',
  openGraph: {
    title: 'Best Dentist in Kanchipuram District',
    description: 'Expert dental care serving Kanchipuram, the Temple City. Book your appointment today!',
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function KanchipuramPage() {
  const locationData = {
    name: 'Kanchipuram',
    pincode: '631501',
    coordinates: { lat: 12.8342, lng: 79.7036 }
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
      location: 'Kanchipuram',
      name: 'Karthik Venkatesh',
      rating: 5,
      text: 'Excellent dental care! I travelled from Kanchipuram to Vellore for my dental implant. Dr. Rockson Samuel is very skilled and the treatment was completely painless. Worth the travel!',
      date: '2024-10-15',
      treatment: 'Dental Implant'
    },
    {
      location: 'Kanchipuram',
      name: 'Lakshmi Priya',
      rating: 5,
      text: 'Best dentist for root canal treatment! The clinic offers much better service than local clinics in Kanchipuram. Highly recommend Dr. Rockson Samuel!',
      date: '2024-10-10',
      treatment: 'Root Canal'
    },
    {
      location: 'Kanchipuram',
      name: 'Ramesh Kumar',
      rating: 5,
      text: 'Amazing results with teeth whitening! Professional service and affordable prices. Thank you Dr. Rockson Samuel and team!',
      date: '2024-10-05',
      treatment: 'Teeth Whitening'
    }
  ]

  const faqs = [
    {
      question: 'How far is Indira Dental Clinic from Kanchipuram?',
      answer: 'We are located 60 KM from Kanchipuram to Vellore. Easily accessible by bus, train, or car via NH48. Many patients from Kanchipuram visit us for quality dental care at affordable prices.'
    },
    {
      question: 'Why should Kanchipuram patients choose Indira Dental Clinic?',
      answer: 'We offer advanced dental treatments with 15+ years experience, latest technology, 50% lower costs than Chennai clinics, and personalized care by Dr. Rockson Samuel (BDS, PgDM, BDM).'
    },
    {
      question: 'What dental services do you provide for Kanchipuram patients?',
      answer: 'Complete dental care including root canal, dental implants, braces, Invisalign, teeth whitening, gum treatment, extractions, and emergency dental services.'
    },
    {
      question: 'Do you provide transport assistance for Kanchipuram patients?',
      answer: 'Yes, we help coordinate transport and provide detailed directions from Kanchipuram. Our clinic is easily accessible via NH48 and local transport.'
    },
    {
      question: 'What are your clinic timings for Kanchipuram patients?',
      answer: 'Open Monday-Saturday 9 AM-8 PM, Sunday 9 AM-2 PM. We accommodate patients from Kanchipuram with flexible appointment slots and emergency services.'
    }
  ]

  const nearbyLocations = [
    { name: 'Vellore', slug: '/in/tamil-nadu/vellore', distance: 'Main Location' },
    { name: 'Sriperumbudur', slug: '/in/tamil-nadu/kanchipuram/sriperumbudur', distance: '20 KM' },
    { name: 'Madurantakam', slug: '/in/tamil-nadu/kanchipuram/madurantakam', distance: '18 KM' },
    { name: 'Chengalpattu', slug: '/in/tamil-nadu/kanchipuram/chengalpattu', distance: '30 KM' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' },
            { title: 'Kanchipuram', href: '/in/tamil-nadu/kanchipuram' }
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in Kanchipuram"
          pincode="631501"
          distance="60 KM from Vellore"
          category="major_town"
        />

        <div className="mb-8">
          <ModernCard>
            <ModernCardHeader>
              <ModernCardTitle>Kanchipuram - The Temple City</ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <p className="text-gray-700 leading-relaxed">
                Kanchipuram, also known as the "City of Thousand Temples," is one of the oldest cities in South India. 
                Famous for its temples and silk sarees, Kanchipuram is a major pilgrimage destination. Indira Dental Clinic 
                in Vellore serves patients from Kanchipuram with world-class dental care at affordable prices. Our clinic 
                is easily accessible via NH48 and offers advanced treatments including dental implants, root canal, 
                orthodontics, and cosmetic dentistry.
              </p>
            </ModernCardContent>
          </ModernCard>
        </div>

        <GoogleMapEmbed
          locationName="Kanchipuram"
          latitude={12.8342}
          longitude={79.7036}
        />

        <EnhancedServicesList 
          locationName="Kanchipuram"
          services={services}
        />

        <LocationReviews reviews={reviews} locationName="Kanchipuram" />

        <LocationFAQs faqs={faqs} locationName="Kanchipuram" />

        <NearbyLocationsWidget locations={nearbyLocations} currentLocation="Kanchipuram" />

        <PeopleAlsoSearchFor location="Kanchipuram" city="Tamil Nadu" />

      </div>
    </div>
  )
}

