import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Calendar, Navigation, Users, Building, CheckCircle, ArrowRight } from 'lucide-react'
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from '@/components/ui/modern-card'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { LocationHeader } from '@/components/location/LocationHeader'

import { CTAWidget } from '@/components/widgets/cta-widget'

export const metadata: Metadata = {
  title: 'Best Dentist in Sivaganga District | Dental Clinic | Indira Dental Clinic',
  description: 'Top-rated dental clinic serving Sivaganga district, Tamil Nadu. Expert dentist Dr. Rockson Samuel. Advanced treatments, affordable prices. 380 KM from Vellore.',
  keywords: 'dentist Sivaganga, dental clinic Sivaganga, best dentist Sivaganga, teeth treatment Sivaganga, Sivaganga dentist',
  openGraph: {
    title: 'Best Dentist in Sivaganga District, Tamil Nadu',
    description: 'Expert dental care for Sivaganga district residents. 380 KM from Vellore.',
    images: ['/images/clinic-exterior.jpg'],
  },
}

const districtData = {
  name: 'Sivaganga',
  pincode: '630561',
  population: '13 lakh',
  distance: '380 KM from Vellore',
  description: 'Historic district with palaces',
  coordinates: { lat: 9.8433, lng: 78.4809 }
};

const services = [
  { title: 'Root Canal Treatment', price: '₹3,500 - ₹10,000', features: ['Painless RCT', 'Single sitting', 'Advanced technology'] },
  { title: 'Dental Implants', price: '₹25,000 - ₹35,000', features: ['International brands', 'Lifetime warranty', '95% success rate'] },
  { title: 'Teeth Whitening', price: '₹4,000 - ₹10,000', features: ['Professional bleaching', 'Instant results', 'Safe & effective'] },
  { title: 'Braces & Aligners', price: '₹30,000 - ₹80,000', features: ['Metal & ceramic', 'Invisible options', 'Payment plans'] },
  { title: 'Dental Cleaning', price: '₹500 - ₹1,500', features: ['Ultrasonic scaling', 'Polishing', 'Gum care'] },
  { title: 'Tooth Extraction', price: '₹800 - ₹3,000', features: ['Painless', 'Quick procedure', 'Expert care'] }
];

const faqs = [
  {
    question: 'Is Indira Dental Clinic accessible from Sivaganga?',
    answer: 'Yes! We are located just 380 KM from Sivaganga district in Vellore. Patients from Sivaganga regularly visit us for specialized dental treatments. We provide directions and travel guidance.'
  },
  {
    question: 'Why do Sivaganga residents choose Indira Dental Clinic?',
    answer: 'Patients from Sivaganga choose us for our expert care by Dr. Rockson Samuel (BDS, PgDM, BDM), advanced technology, affordable pricing (40-60% lower than metro cities), and convenient location just 380 KM away.'
  },
  {
    question: 'What services are available for Sivaganga patients?',
    answer: 'We offer complete dental care including root canals, dental implants, braces, teeth whitening, cosmetic dentistry, pediatric dentistry, and emergency treatments. All services are available to Sivaganga residents.'
  },
  {
    question: 'How much do dental treatments cost for Sivaganga patients?',
    answer: 'Our pricing is 40-60% lower than metro cities. Root canal: ₹3,500-₹10,000, Dental implants: ₹25,000-₹35,000, Teeth whitening: ₹4,000-₹10,000. Same affordable rates for all Tamil Nadu patients.'
  },
  {
    question: 'Do you provide pickup services from Sivaganga?',
    answer: 'While we don\'t provide pickup services, our location in Vellore is easily accessible from Sivaganga (380 KM). We can help coordinate travel arrangements for complex procedures.'
  }
];

const reviews = [
  {
    location: 'Sivaganga',
    name: 'Patient from Sivaganga',
    rating: 5,
    text: 'Excellent dental care! The 380 KM journey from Sivaganga to Vellore is worth it. Dr. Rockson Samuel is very skilled and the treatment is affordable.',
    date: '2025-10-15',
    treatment: 'Dental Implants'
  },
  {
    location: 'Sivaganga',
    name: 'Sivaganga Resident',
    rating: 5,
    text: 'Best dental clinic near Sivaganga. Modern equipment, painless treatment, and very reasonable pricing. Highly recommend!',
    date: '2025-10-20',
    treatment: 'Root Canal'
  }
];

export default function SivagangaDistrictPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Tamil Nadu', href: '/in/tamil-nadu' }
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <LocationHeader
          locationName="Best Dentist and Dental Clinic in Sivaganga"
          pincode={districtData.pincode}
          distance={districtData.distance}
          category="town"
          specialFeatures={['Population: 13 lakh', 'Historic district with palaces']}
        />

        {/* Overview */}
        <ModernCard className="mb-8">
          <ModernCardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Building className="w-12 h-12 text-teal-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Serving Sivaganga District Residents
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Indira Dental Clinic & Implant Center in Vellore proudly serves patients from Sivaganga district. 
                  Located just 380 KM, we provide comprehensive dental care with modern technology and affordable pricing.
                </p>
                <p className="text-gray-700 mt-4">
                  Historic district with palaces. Patients from across Sivaganga district (population: 13 lakh) 
                  trust Dr. Rockson Samuel (BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach) for expert dental care.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg">
                <MapPin className="w-6 h-6 text-teal-600" />
                <div>
                  <div className="font-semibold text-gray-900">Distance</div>
                  <div className="text-sm text-gray-600">380 KM</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Population</div>
                  <div className="text-sm text-gray-600">13 lakh</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <Navigation className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">PIN Code</div>
                  <div className="text-sm text-gray-600">630561</div>
                </div>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Google Map */}
        <GoogleMapEmbed
          locationName="Sivaganga"
          latitude={districtData.coordinates.lat}
          longitude={districtData.coordinates.lng}
        />

        {/* Services */}
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle>Our Services for Sivaganga Patients</ModernCardTitle>
          </ModernCardHeader>
          <ModernCardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                  <div className="text-teal-600 font-semibold mb-3">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* FAQs */}
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle>FAQs for Sivaganga Residents</ModernCardTitle>
          </ModernCardHeader>
          <ModernCardContent className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </ModernCardContent>
        </ModernCard>

        {/* Reviews */}
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle>Reviews from Sivaganga Patients</ModernCardTitle>
          </ModernCardHeader>
          <ModernCardContent>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">• {review.date}</span>
                  </div>
                  <p className="text-gray-800 mb-2">{review.text}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="font-semibold">{review.name}</span>
                    <span>•</span>
                    <span>{review.treatment}</span>
                  </div>
                </div>
              ))}
            </div>
          </ModernCardContent>
        </ModernCard>

        

        {/* CTA */}
        <CTAWidget
          title="Best Dental Care for Sivaganga Residents"
          description="Just 380 KM from Sivaganga. Expert care by Dr. Rockson Samuel. Book your appointment today!"
          primaryAction={{
            text: 'Book Appointment',
            href: '/contact'
          }}
          secondaryAction={{
            text: 'Call Now',
            href: 'tel:+91XXXXXXXXXX'
          }}
        />
      </div>
    </div>
  )
}
