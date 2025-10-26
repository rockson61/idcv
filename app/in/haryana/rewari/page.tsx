
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Calendar, Star, Users, Shield, Award, Clock, Navigation } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Dental Services in rewari | Best Dentist in rewari | Indira Dental Clinic',
  description: 'Expert dental services in rewari. RCT, dental implants, braces, cosmetic dentistry by Dr. Rockson Samuel. Save 50% on dental treatments by visiting Vellore.',
  keywords: ['dentist rewari', 'dental clinic rewari', 'dental services rewari', 'best dentist rewari'],
}

export default function RewariPage() {
  const services = [
    {
      title: 'Root Canal Treatment',
      description: 'Pain-free RCT with modern techniques',
      price: '₹3,000 - ₹8,000',
      features: ['Single sitting RCT', 'Painless procedure', 'Digital X-Ray', 'Crown included']
    },
    {
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution',
      price: '₹25,000 - ₹45,000',
      features: ['Titanium implants', 'Lifetime warranty', 'Natural look', 'Bone grafting']
    },
    {
      title: 'Orthodontics & Braces',
      description: 'Straighten teeth with modern braces',
      price: '₹30,000 - ₹80,000',
      features: ['Metal braces', 'Ceramic braces', 'Invisalign', 'Retainers']
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile completely',
      price: '₹5,000 - ₹25,000',
      features: ['Teeth whitening', 'Veneers', 'Smile makeover', 'Bonding']
    },
    {
      title: 'General Dentistry',
      description: 'Comprehensive dental care',
      price: '₹500 - ₹2,000',
      features: ['Check-ups', 'Cleanings', 'Fillings', 'Extractions']
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Dental care for children',
      price: '₹500 - ₹3,000',
      features: ['First dental visit', 'Fluoride treatment', 'Sealants', 'Cavity fillings']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'Haryana', href: '/in/haryana' },
            { title: 'Rewari', href: '/in/haryana/rewari' }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dental Services in Rewari
          </h1>
          <p className="text-lg text-gray-700 max-w-转入 mx-auto mb-8">
            Experience world-class dental care in Rewari, Haryana. Our expert dentists 
            provide comprehensive dental treatments with modern technology and personalized care.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Expert Care</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Experienced Team</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Award className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Quality Service</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Clock className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Flexible Timings</span>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Dental Services in Rewari</h2>
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
                        <Star className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </ModernCardContent>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <ModernCard>
            <ModernCardContent className="py-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Smile in Rewari?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Book your appointment today and experience the best dental care in Rewari. 
                Our expert team is ready to help you achieve a healthy, beautiful smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>
      </div>
    </div>
  )
}
