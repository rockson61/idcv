
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Calendar, Star, Users, Shield, Award, Clock } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Dental Services in maharashtra | Expert Dentist | Indira Dental Clinic',
  description: 'Comprehensive dental services in maharashtra. Expert dental care including RCT, implants, braces, cosmetic dentistry. Visit Indira Dental Clinic in Vellore for 50% savings.',
  keywords: ['dentist maharashtra', 'dental clinic maharashtra', 'dental services maharashtra'],
}

export default function MaharashtraPage() {
  const cities = [
    { name: 'Mumbai', href: '/in/maharashtra/mumbai', description: 'Quality dental services in Mumbai' },
    { name: 'Pune', href: '/in/maharashtra/pune', description: 'Quality dental services in Pune' },
    { name: 'Nagpur', href: '/in/maharashtra/nagpur', description: 'Quality dental services in Nagpur' },
    { name: 'Thane', href: '/in/maharashtra/thane', description: 'Quality dental services in Thane' },
    { name: 'Pimpri-Chinchwad', href: '/in/maharashtra/pimpri-chinchwad', description: 'Quality dental services in Pimpri-Chinchwad' },
    { name: 'Nashik', href: '/in/maharashtra/nashik', description: 'Quality dental services in Nashik' },
    { name: 'Kalyan-Dombivli', href: '/in/maharashtra/kalyan-dombivli', description: 'Quality dental services in Kalyan-Dombivli' },
    { name: 'Vasai-Virar', href: '/in/maharashtra/vasai-virar', description: 'Quality dental services in Vasai-Virar' },
    { name: 'Aurangabad', href: '/in/maharashtra/aurangabad', description: 'Quality dental services in Aurangabad' },
    { name: 'Navi Mumbai', href: '/in/maharashtra/navi-mumbai', description: 'Quality dental services in Navi Mumbai' },
    { name: 'Solapur', href: '/in/maharashtra/solapur', description: 'Quality dental services in Solapur' },
    { name: 'Mira-Bhayandar', href: '/in/maharashtra/mira-bhayandar', description: 'Quality dental services in Mira-Bhayandar' },
    { name: 'Bhiwandi', href: '/in/maharashtra/bhiwandi', description: 'Quality dental services in Bhiwandi' },
    { name: 'Amravati', href: '/in/maharashtra/amravati', description: 'Quality dental services in Amravati' },
    { name: 'Nanded', href: '/in/maharashtra/nanded', description: 'Quality dental services in Nanded' },
    { name: 'Kolhapur', href: '/in/maharashtra/kolhapur', description: 'Quality dental services in Kolhapur' },
    { name: 'Akola', href: '/in/maharashtra/akola', description: 'Quality dental services in Akola' },
    { name: 'Ulhasnagar', href: '/in/maharashtra/ulhasnagar', description: 'Quality dental services in Ulhasnagar' },
    { name: 'Sangli-Miraj & Kupwad', href: '/in/maharashtra/sangli-miraj-and-kupwad', description: 'Quality dental services in Sangli-Miraj & Kupwad' },
    { name: 'Malegaon', href: '/in/maharashtra/malegaon', description: 'Quality dental services in Malegaon' },
    { name: 'Jalgaon', href: '/in/maharashtra/jalgaon', description: 'Quality dental services in Jalgaon' },
    { name: 'Latur', href: '/in/maharashtra/latur', description: 'Quality dental services in Latur' },
    { name: 'Dhule', href: '/in/maharashtra/dhule', description: 'Quality dental services in Dhule' },
    { name: 'Ahmednagar', href: '/in/maharashtra/ahmednagar', description: 'Quality dental services in Ahmednagar' },
    { name: 'Satara', href: '/in/maharashtra/satara', description: 'Quality dental services in Satara' },
    { name: 'Chandrapur', href: '/in/maharashtra/chandrapur', description: 'Quality dental services in Chandrapur' },
    { name: 'Parbhani', href: '/in/maharashtra/parbhani', description: 'Quality dental services in Parbhani' },
    { name: 'Ichalkaranji', href: '/in/maharashtra/ichalkaranji', description: 'Quality dental services in Ichalkaranji' },
    { name: 'Jalna', href: '/in/maharashtra/jalna', description: 'Quality dental services in Jalna' },
    { name: 'Ambarnath', href: '/in/maharashtra/ambarnath', description: 'Quality dental services in Ambarnath' },
    { name: 'Bhusawal', href: '/in/maharashtra/bhusawal', description: 'Quality dental services in Bhusawal' },
    { name: 'Panvel', href: '/in/maharashtra/panvel', description: 'Quality dental services in Panvel' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'Maharashtra', href: '/in/maharashtra' }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dental Services in Maharashtra
          </h1>
          <p className="text-lg text-gray-700 max-w-转入 mx-auto mb-8">
            Find comprehensive dental care services across Maharashtra. Expert dental treatments 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cities in Maharashtra</h2>
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
                Browse through our extensive network of dental services across Maharashtra. 
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
