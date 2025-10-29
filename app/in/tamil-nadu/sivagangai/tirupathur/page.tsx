import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { LocationHeader } from '@/components/location/LocationHeader'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { EnhancedServicesList } from '@/components/location/EnhancedServicesList'
import { LocationReviews } from '@/components/location/LocationReviews'
import { LocationFAQs } from '@/components/LocationFAQs'
import { PeopleAlsoSearchFor } from '@/components/location/PeopleAlsoSearchFor'
import { Button } from '@/components/ui/button'
import { Phone, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Dentist in Tirupathur, Sivagangai | Dr. Rockson Samuel | Indira Dental Clinic',
  description: 'Top-rated dental clinic serving Tirupathur, Sivagangai. Expert treatments by Dr. Rockson Samuel. Root canal, implants, braces, cosmetic dentistry. Book: 7010650063',
  keywords: 'dentist Tirupathur, dental clinic Tirupathur, best dentist Sivagangai, Dr Rockson Samuel, dental implants Tirupathur, root canal Tirupathur',
}

const locationData = {
  name: 'Tirupathur',
  taluk: 'Tirupathur',
  district: 'Sivagangai',
  state: 'Tamil Nadu',
  pincode: '000000', // Update with actual pincode
  distance: 'Near Vellore'
}

const services = [
  { name: 'Root Canal Treatment', price: '₹3,500+', href: '/services/root-canal-treatment' },
  { name: 'Dental Implants', price: '₹25,000+', href: '/services/dental-implants' },
  { name: 'Invisalign & Braces', price: '₹30,000+', href: '/services/orthodontics' },
  { name: 'Teeth Whitening', price: '₹8,000+', href: '/services/cosmetic-dentistry/teeth-whitening' },
  { name: 'Dental Crowns', price: '₹5,000+', href: '/services/prosthodontics/dental-crowns' },
  { name: 'Gum Treatment', price: '₹2,500+', href: '/services/periodontics' },
]

const reviews = [
  {
    name: 'Patient from Tirupathur',
    rating: 5,
    text: 'Excellent dental care! Dr. Rockson Samuel provided outstanding treatment. The clinic is modern and staff is very professional.',
    date: '2024-10-28',
    treatment: 'General Dental Care',
    location: 'Tirupathur, Sivagangai'
  },
]

const faqs = [
  {
    question: 'Where is Indira Dental Clinic located?',
    answer: 'Indira Dental Clinic is located in Gandhi Nagar, Vellore, easily accessible from Tirupathur, Sivagangai. We are just a short drive away.'
  },
  {
    question: 'Do you accept patients from Tirupathur?',
    answer: 'Yes! We welcome patients from Tirupathur, Sivagangai and all surrounding areas. Many of our patients travel from Sivagangai for our expert dental care.'
  },
  {
    question: 'What dental services are available?',
    answer: 'We offer comprehensive dental services including root canal treatment, dental implants, braces, teeth whitening, crowns, bridges, gum treatment, and emergency dental care.'
  },
]

export default function TirupathurTalukPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' },
            { title: 'Sivagangai', href: '/in/tamil-nadu/sivagangai' },
            { title: 'Tirupathur', href: '/in/tamil-nadu/sivagangai/tirupathur' }
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in Tirupathur, Sivagangai"
          taluk="Tirupathur"
          pincode="000000"
          distance="Near Vellore"
          category="town"
        />

        <div className="mb-8">
          <GoogleMapEmbed
            locationName="Tirupathur"
            address="Gandhi Nagar, Vellore, Tamil Nadu - 632001"
          />
        </div>

        <div className="mb-8">
          <EnhancedServicesList locationName="Tirupathur" services={services} />
        </div>

        <div className="mb-8">
          <LocationReviews locationName="Tirupathur" reviews={reviews} />
        </div>

        <div className="mb-8">
          <LocationFAQs locationName="Tirupathur" faqs={faqs} />
        </div>

        <div className="mb-8">
          <PeopleAlsoSearchFor location="Tirupathur" city="Sivagangai" />
        </div>

        <div className="text-center bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8 border-2 border-teal-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Top Dental Care?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join hundreds of happy patients from Tirupathur, Sivagangai who trust Dr. Rockson Samuel for their dental needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <a href="tel:7010650063">
                <Phone className="w-5 h-5 mr-2" />
                Call: 7010650063
              </a>
            </Button>
            <Button asChild variant="outline" className="border-teal-600 text-teal-600">
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
