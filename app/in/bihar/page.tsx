
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Calendar, Star, Users, Shield, Award, Clock } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Dental Services in bihar | Expert Dentist | Indira Dental Clinic',
  description: 'Comprehensive dental services in bihar. Expert dental care including RCT, implants, braces, cosmetic dentistry. Visit Indira Dental Clinic in Vellore for 50% savings.',
  keywords: ['dentist bihar', 'dental clinic bihar', 'dental services bihar'],
}

export default function BiharPage() {
  const cities = [
    { name: 'Patna', href: '/in/bihar/patna', description: 'Quality dental services in Patna' },
    { name: 'Gaya', href: '/in/bihar/gaya', description: 'Quality dental services in Gaya' },
    { name: 'Bhagalpur', href: '/in/bihar/bhagalpur', description: 'Quality dental services in Bhagalpur' },
    { name: 'Dehri', href: '/in/bihar/dehri', description: 'Quality dental services in Dehri' },
    { name: 'Muzaffarpur', href: '/in/bihar/muzaffarpur', description: 'Quality dental services in Muzaffarpur' },
    { name: 'Bihar Sharif', href: '/in/bihar/bihar-sharif', description: 'Quality dental services in Bihar Sharif' },
    { name: 'Darbhanga', href: '/in/bihar/darbhanga', description: 'Quality dental services in Darbhanga' },
    { name: 'Purnia', href: '/in/bihar/purnia', description: 'Quality dental services in Purnia' },
    { name: 'Arrah', href: '/in/bihar/arrah', description: 'Quality dental services in Arrah' },
    { name: 'Begusarai', href: '/in/bihar/begusarai', description: 'Quality dental services in Begusarai' },
    { name: 'Katihar', href: '/in/bihar/katihar', description: 'Quality dental services in Katihar' },
    { name: 'Munger', href: '/in/bihar/munger', description: 'Quality dental services in Munger' },
    { name: 'Chapra', href: '/in/bihar/chapra', description: 'Quality dental services in Chapra' },
    { name: 'Danapur', href: '/in/bihar/danapur', description: 'Quality dental services in Danapur' },
    { name: 'Saharsa', href: '/in/bihar/saharsa', description: 'Quality dental services in Saharsa' },
    { name: 'Sasaram', href: '/in/bihar/sasaram', description: 'Quality dental services in Sasaram' },
    { name: 'Hajipur', href: '/in/bihar/hajipur', description: 'Quality dental services in Hajipur' },
    { name: 'Dehri', href: '/in/bihar/dehri', description: 'Quality dental services in Dehri' },
    { name: 'Siwan', href: '/in/bihar/siwan', description: 'Quality dental services in Siwan' },
    { name: 'Bettiah', href: '/in/bihar/bettiah', description: 'Quality dental services in Bettiah' },
    { name: 'Motihari', href: '/in/bihar/motihari', description: 'Quality dental services in Motihari' },
    { name: 'Bagaha', href: '/in/bihar/bagaha', description: 'Quality dental services in Bagaha' },
    { name: 'Kishanganj', href: '/in/bihar/kishanganj', description: 'Quality dental services in Kishanganj' },
    { name: 'Jamalpur', href: '/in/bihar/jamalpur', description: 'Quality dental services in Jamalpur' },
    { name: 'Buxar', href: '/in/bihar/buxar', description: 'Quality dental services in Buxar' },
    { name: 'Jehanabad', href: '/in/bihar/jehanabad', description: 'Quality dental services in Jehanabad' },
    { name: 'Aurangabad', href: '/in/bihar/aurangabad', description: 'Quality dental services in Aurangabad' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'Bihar', href: '/in/bihar' }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dental Services in Bihar
          </h1>
          <p className="text-lg text-gray-700 max-w-转入 mx-auto mb-8">
            Find comprehensive dental care services across Bihar. Expert dental treatments 
            in all major cities and towns with modern facilities and experienced dentists.
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

        {/* Cities Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cities in Bihar</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <Link
                key={index}
                href={city.href}
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-teal-700 mb-1">
                  {city.name}
                </h3>
                <p className="text-xs text-gray-600">
                  {city.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <ModernCard>
            <ModernCardContent className="py-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Find Dental Care in Your City
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Browse through our extensive network of dental services across Bihar. 
                Find the perfect location for your dental care needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  View Services
                </Link>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>
      </div>
    </div>
  )
}
