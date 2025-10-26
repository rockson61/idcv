
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Calendar, Star, Users, Shield, Award, Clock } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Dental Services in madhya-pradesh | Expert Dentist | Indira Dental Clinic',
  description: 'Comprehensive dental services in madhya-pradesh. Expert dental care including RCT, implants, braces, cosmetic dentistry. Visit Indira Dental Clinic in Vellore for 50% savings.',
  keywords: ['dentist madhya-pradesh', 'dental clinic madhya-pradesh', 'dental services madhya-pradesh'],
}

export default function MadhyaPradeshPage() {
  const cities = [
    { name: 'Datia', href: '/in/madhya-pradesh/datia', description: 'Quality dental services in Datia' },
    { name: 'Gwalior', href: '/in/madhya-pradesh/gwalior', description: 'Quality dental services in Gwalior' },
    { name: 'Bhopal', href: '/in/madhya-pradesh/bhopal', description: 'Quality dental services in Bhopal' },
    { name: 'Indore', href: '/in/madhya-pradesh/indore', description: 'Quality dental services in Indore' },
    { name: 'Jabalpur', href: '/in/madhya-pradesh/jabalpur', description: 'Quality dental services in Jabalpur' },
    { name: 'Ujjain', href: '/in/madhya-pradesh/ujjain', description: 'Quality dental services in Ujjain' },
    { name: 'Dewas', href: '/in/madhya-pradesh/dewas', description: 'Quality dental services in Dewas' },
    { name: 'Satna', href: '/in/madhya-pradesh/satna', description: 'Quality dental services in Satna' },
    { name: 'Sagar', href: '/in/madhya-pradesh/sagar', description: 'Quality dental services in Sagar' },
    { name: 'Ratlam', href: '/in/madhya-pradesh/ratlam', description: 'Quality dental services in Ratlam' },
    { name: 'Rewa', href: '/in/madhya-pradesh/rewa', description: 'Quality dental services in Rewa' },
    { name: 'Singrauli', href: '/in/madhya-pradesh/singrauli', description: 'Quality dental services in Singrauli' },
    { name: 'Burhanpur', href: '/in/madhya-pradesh/burhanpur', description: 'Quality dental services in Burhanpur' },
    { name: 'Khandwa', href: '/in/madhya-pradesh/khandwa', description: 'Quality dental services in Khandwa' },
    { name: 'Katni', href: '/in/madhya-pradesh/katni', description: 'Quality dental services in Katni' },
    { name: 'Morena', href: '/in/madhya-pradesh/morena', description: 'Quality dental services in Morena' },
    { name: 'Bhind', href: '/in/madhya-pradesh/bhind', description: 'Quality dental services in Bhind' },
    { name: 'Guna', href: '/in/madhya-pradesh/guna', description: 'Quality dental services in Guna' },
    { name: 'Shivpuri', href: '/in/madhya-pradesh/shivpuri', description: 'Quality dental services in Shivpuri' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'Madhya Pradesh', href: '/in/madhya-pradesh' }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dental Services in Madhya Pradesh
          </h1>
          <p className="text-lg text-gray-700 max-w-转入 mx-auto mb-8">
            Find comprehensive dental care services across Madhya Pradesh. Expert dental treatments 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cities in Madhya Pradesh</h2>
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
                Browse through our extensive network of dental services across Madhya Pradesh. 
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
