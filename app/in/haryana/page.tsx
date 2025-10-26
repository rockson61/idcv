
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Calendar, Star, Users, Shield, Award, Clock } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Dental Services in haryana | Expert Dentist | Indira Dental Clinic',
  description: 'Comprehensive dental services in haryana. Expert dental care including RCT, implants, braces, cosmetic dentistry. Visit Indira Dental Clinic in Vellore for 50% savings.',
  keywords: ['dentist haryana', 'dental clinic haryana', 'dental services haryana'],
}

export default function HaryanaPage() {
  const cities = [
    { name: 'Ambala', href: '/in/haryana/ambala', description: 'Quality dental services in Ambala' },
    { name: 'Ballabhgarh', href: '/in/haryana/ballabhgarh', description: 'Quality dental services in Ballabhgarh' },
    { name: 'Bahadurgarh', href: '/in/haryana/bahadurgarh', description: 'Quality dental services in Bahadurgarh' },
    { name: 'Bhiwani', href: '/in/haryana/bhiwani', description: 'Quality dental services in Bhiwani' },
    { name: 'Chandigarh', href: '/in/haryana/chandigarh', description: 'Quality dental services in Chandigarh' },
    { name: 'Faridabad', href: '/in/haryana/faridabad', description: 'Quality dental services in Faridabad' },
    { name: 'Gurgaon', href: '/in/haryana/gurgaon', description: 'Quality dental services in Gurgaon' },
    { name: 'Hisar', href: '/in/haryana/hisar', description: 'Quality dental services in Hisar' },
    { name: 'Jind', href: '/in/haryana/jind', description: 'Quality dental services in Jind' },
    { name: 'Jhajjar', href: '/in/haryana/jhajjar', description: 'Quality dental services in Jhajjar' },
    { name: 'Karnal', href: '/in/haryana/karnal', description: 'Quality dental services in Karnal' },
    { name: 'Kurukshetra', href: '/in/haryana/kurukshetra', description: 'Quality dental services in Kurukshetra' },
    { name: 'Kundli', href: '/in/haryana/kundli', description: 'Quality dental services in Kundli' },
    { name: 'Manesar', href: '/in/haryana/manesar', description: 'Quality dental services in Manesar' },
    { name: 'Palwal', href: '/in/haryana/palwal', description: 'Quality dental services in Palwal' },
    { name: 'Panchkula', href: '/in/haryana/panchkula', description: 'Quality dental services in Panchkula' },
    { name: 'Panipat', href: '/in/haryana/panipat', description: 'Quality dental services in Panipat' },
    { name: 'Rewari', href: '/in/haryana/rewari', description: 'Quality dental services in Rewari' },
    { name: 'Rohtak', href: '/in/haryana/rohtak', description: 'Quality dental services in Rohtak' },
    { name: 'Sirsa', href: '/in/haryana/sirsa', description: 'Quality dental services in Sirsa' },
    { name: 'Sonipat', href: '/in/haryana/sonipat', description: 'Quality dental services in Sonipat' },
    { name: 'Yamunanagar', href: '/in/haryana/yamunanagar', description: 'Quality dental services in Yamunanagar' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'Haryana', href: '/in/haryana' }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dental Services in Haryana
          </h1>
          <p className="text-lg text-gray-700 max-w-转入 mx-auto mb-8">
            Find comprehensive dental care services across Haryana. Expert dental treatments 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cities in Haryana</h2>
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
                Browse through our extensive network of dental services across Haryana. 
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
