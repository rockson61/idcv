import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Calendar, Navigation, Users, Building, CheckCircle, ArrowRight } from 'lucide-react'
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from '@/components/ui/modern-card'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { LocationHeader } from '@/components/location/LocationHeader'

import { CTAWidget } from '@/components/widgets/cta-widget'

export const metadata: Metadata = {
  title: 'Best Dentist in Tiruvarur District | Dental Clinic | Indira Dental Clinic',
  description: 'Top-rated dental clinic serving Tiruvarur district, Tamil Nadu. Expert dentist Dr. Rockson Samuel. Advanced treatments, affordable prices. 260 KM from Vellore.',
  keywords: 'dentist Tiruvarur, dental clinic Tiruvarur, best dentist Tiruvarur, teeth treatment Tiruvarur, Tiruvarur dentist',
  openGraph: {
    title: 'Best Dentist in Tiruvarur District, Tamil Nadu',
    description: 'Expert dental care for Tiruvarur district residents. 260 KM from Vellore.',
    images: ['/images/clinic-exterior.jpg'],
  },
}

const districtData = {
  name: 'Tiruvarur',
  pincode: '610001',
  population: '12 lakh',
  distance: '260 KM from Vellore',
  description: 'Cauvery delta, rice cultivation',
  coordinates: { lat: 10.7725, lng: 79.6345 }
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
    question: 'Is Indira Dental Clinic accessible from Tiruvarur?',
    answer: 'Yes! We are located just 260 KM from Tiruvarur district in Vellore. Patients from Tiruvarur regularly visit us for specialized dental treatments. We provide directions and travel guidance.'
  },
  {
    question: 'Why do Tiruvarur residents choose Indira Dental Clinic?',
    answer: 'Patients from Tiruvarur choose us for our expert care by Dr. Rockson Samuel (BDS, PgDM, BDM), advanced technology, affordable pricing (40-60% lower than metro cities), and convenient location just 260 KM away.'
  },
  {
    question: 'What services are available for Tiruvarur patients?',
    answer: 'We offer complete dental care including root canals, dental implants, braces, teeth whitening, cosmetic dentistry, pediatric dentistry, and emergency treatments. All services are available to Tiruvarur residents.'
  },
  {
    question: 'How much do dental treatments cost for Tiruvarur patients?',
    answer: 'Our pricing is 40-60% lower than metro cities. Root canal: ₹3,500-₹10,000, Dental implants: ₹25,000-₹35,000, Teeth whitening: ₹4,000-₹10,000. Same affordable rates for all Tamil Nadu patients.'
  },
  {
    question: 'Do you provide pickup services from Tiruvarur?',
    answer: 'While we don\'t provide pickup services, our location in Vellore is easily accessible from Tiruvarur (260 KM). We can help coordinate travel arrangements for complex procedures.'
  }
];

const reviews = [
  {
    location: 'Tiruvarur',
    name: 'Patient from Tiruvarur',
    rating: 5,
    text: 'Excellent dental care! The 260 KM journey from Tiruvarur to Vellore is worth it. Dr. Rockson Samuel is very skilled and the treatment is affordable.',
    date: '2025-10-15',
    treatment: 'Dental Implants'
  },
  {
    location: 'Tiruvarur',
    name: 'Tiruvarur Resident',
    rating: 5,
    text: 'Best dental clinic near Tiruvarur. Modern equipment, painless treatment, and very reasonable pricing. Highly recommend!',
    date: '2025-10-20',
    treatment: 'Root Canal'
  }
];

export default function TiruvarurDistrictPage() {
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
          locationName="Best Dentist and Dental Clinic in Tiruvarur"
          pincode={districtData.pincode}
          distance={districtData.distance}
          category="town"
          specialFeatures={['Population: 12 lakh', 'Cauvery delta, rice cultivation']}
        />

        {/* Overview */}
        <ModernCard className="mb-8">
          <ModernCardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Building className="w-12 h-12 text-teal-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Serving Tiruvarur District Residents
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Indira Dental Clinic & Implant Center in Vellore proudly serves patients from Tiruvarur district. 
                  Located just 260 KM, we provide comprehensive dental care with modern technology and affordable pricing.
                </p>
                <p className="text-gray-700 mt-4">
                  Cauvery delta, rice cultivation. Patients from across Tiruvarur district (population: 12 lakh) 
                  trust Dr. Rockson Samuel (BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach) for expert dental care.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg">
                <MapPin className="w-6 h-6 text-teal-600" />
                <div>
                  <div className="font-semibold text-gray-900">Distance</div>
                  <div className="text-sm text-gray-600">260 KM</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Population</div>
                  <div className="text-sm text-gray-600">12 lakh</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <Navigation className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">PIN Code</div>
                  <div className="text-sm text-gray-600">610001</div>
                </div>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Google Map */}
        <GoogleMapEmbed
          locationName="Tiruvarur"
          latitude={districtData.coordinates.lat}
          longitude={districtData.coordinates.lng}
        />

        {/* Services */}
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle>Our Services for Tiruvarur Patients</ModernCardTitle>
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
            <ModernCardTitle>FAQs for Tiruvarur Residents</ModernCardTitle>
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
            <ModernCardTitle>Reviews from Tiruvarur Patients</ModernCardTitle>
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
          title="Best Dental Care for Tiruvarur Residents"
          description="Just 260 KM from Tiruvarur. Expert care by Dr. Rockson Samuel. Book your appointment today!"
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
