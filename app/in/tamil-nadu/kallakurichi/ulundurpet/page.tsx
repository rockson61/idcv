import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { LocationHeader } from '@/components/location/LocationHeader'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { EnhancedServicesList } from '@/components/location/EnhancedServicesList'
import { LocationReviews } from '@/components/location/LocationReviews'
import { LocationFAQs } from '@/components/location/LocationFAQs'
import { PeopleAlsoSearchFor } from '@/components/location/PeopleAlsoSearchFor'
import { Button } from '@/components/ui/button'
import { Phone, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Dentist in Ulundurpet, Kallakurichi | Dr. Rockson Samuel | Indira Dental Clinic',
  description: 'Top-rated dental clinic serving Ulundurpet, Kallakurichi. Expert treatments by Dr. Rockson Samuel. Root canal, implants, braces, cosmetic dentistry. Book: 7010650063',
  keywords: 'dentist Ulundurpet, dental clinic Ulundurpet, best dentist Kallakurichi, Dr Rockson Samuel, dental implants Ulundurpet, root canal Ulundurpet',
}

const locationData = {
  name: 'Ulundurpet',
  taluk: 'Ulundurpet',
  district: 'Kallakurichi',
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
    name: 'Patient from Ulundurpet',
    rating: 5,
    text: 'Excellent dental care! Dr. Rockson Samuel provided outstanding treatment. The clinic is modern and staff is very professional.',
    date: '2024-10-28',
    treatment: 'General Dental Care',
    location: 'Ulundurpet, Kallakurichi'
  },
]

const faqs = [
  {
    question: 'Where is Indira Dental Clinic located?',
    answer: 'Indira Dental Clinic is located in Gandhi Nagar, Vellore, easily accessible from Ulundurpet, Kallakurichi. We are just a short drive away.'
  },
  {
    question: 'Do you accept patients from Ulundurpet?',
    answer: 'Yes! We welcome patients from Ulundurpet, Kallakurichi and all surrounding areas. Many of our patients travel from Kallakurichi for our expert dental care.'
  },
  {
    question: 'What dental services are available?',
    answer: 'We offer comprehensive dental services including root canal treatment, dental implants, braces, teeth whitening, crowns, bridges, gum treatment, and emergency dental care.'
  },
]

export default function UlundurpetTalukPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' },
            { title: 'Kallakurichi', href: '/in/tamil-nadu/kallakurichi' },
            { title: 'Ulundurpet', href: '/in/tamil-nadu/kallakurichi/ulundurpet' }
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in Ulundurpet, Kallakurichi"
          taluk="Ulundurpet"
          pincode="000000"
          distance="Near Vellore"
          category="town"
        />

        <div className="mb-8">
          <GoogleMapEmbed
            locationName="Ulundurpet"
            address="Gandhi Nagar, Vellore, Tamil Nadu - 632001"
          />
        </div>

        <div className="mb-8">
          <EnhancedServicesList locationName="Ulundurpet" services={services} />
        </div>

        <div className="mb-8">
          <LocationReviews locationName="Ulundurpet" reviews={reviews} />
        </div>

        <div className="mb-8">
          <LocationFAQs locationName="Ulundurpet" faqs={faqs} />
        </div>

        <div className="mb-8">
          <PeopleAlsoSearchFor location="Ulundurpet" city="Kallakurichi" />
        </div>

        <div className="text-center bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8 border-2 border-teal-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Top Dental Care?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join hundreds of happy patients from Ulundurpet, Kallakurichi who trust Dr. Rockson Samuel for their dental needs.
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
