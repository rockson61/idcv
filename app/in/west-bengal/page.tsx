
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Calendar, Star, Users, Shield, Award, Clock } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Dental Services in west-bengal | Expert Dentist | Indira Dental Clinic',
  description: 'Comprehensive dental services in west-bengal. Expert dental care including RCT, implants, braces, cosmetic dentistry. Visit Indira Dental Clinic in Vellore for 50% savings.',
  keywords: ['dentist west-bengal', 'dental clinic west-bengal', 'dental services west-bengal'],
}

export default function WestBengalPage() {
  const cities = [
    { name: 'Berhampore', href: '/in/west-bengal/berhampore', description: 'Quality dental services in Berhampore' },
    { name: 'Kolkata', href: '/in/west-bengal/kolkata', description: 'Quality dental services in Kolkata' },
    { name: 'Howrah', href: '/in/west-bengal/howrah', description: 'Quality dental services in Howrah' },
    { name: 'Durgapur', href: '/in/west-bengal/durgapur', description: 'Quality dental services in Durgapur' },
    { name: 'Asansol', href: '/in/west-bengal/asansol', description: 'Quality dental services in Asansol' },
    { name: 'Siliguri', href: '/in/west-bengal/siliguri', description: 'Quality dental services in Siliguri' },
    { name: 'Maheshtala', href: '/in/west-bengal/maheshtala', description: 'Quality dental services in Maheshtala' },
    { name: 'Rajpur Sonarpur', href: '/in/west-bengal/rajpur-sonarpur', description: 'Quality dental services in Rajpur Sonarpur' },
    { name: 'South Dumdum', href: '/in/west-bengal/south-dumdum', description: 'Quality dental services in South Dumdum' },
    { name: 'Gopalpur', href: '/in/west-bengal/gopalpur', description: 'Quality dental services in Gopalpur' },
    { name: 'Bidhannagar', href: '/in/west-bengal/bidhannagar', description: 'Quality dental services in Bidhannagar' },
    { name: 'Bhatpara', href: '/in/west-bengal/bhatpara', description: 'Quality dental services in Bhatpara' },
    { name: 'Panihati', href: '/in/west-bengal/panihati', description: 'Quality dental services in Panihati' },
    { name: 'Kamarhati', href: '/in/west-bengal/kamarhati', description: 'Quality dental services in Kamarhati' },
    { name: 'Bardhaman', href: '/in/west-bengal/bardhaman', description: 'Quality dental services in Bardhaman' },
    { name: 'Kulti', href: '/in/west-bengal/kulti', description: 'Quality dental services in Kulti' },
    { name: 'Bally', href: '/in/west-bengal/bally', description: 'Quality dental services in Bally' },
    { name: 'Barasat', href: '/in/west-bengal/barasat', description: 'Quality dental services in Barasat' },
    { name: 'North Dumdum', href: '/in/west-bengal/north-dumdum', description: 'Quality dental services in North Dumdum' },
    { name: 'Baranagar', href: '/in/west-bengal/baranagar', description: 'Quality dental services in Baranagar' },
    { name: 'Uluberia', href: '/in/west-bengal/uluberia', description: 'Quality dental services in Uluberia' },
    { name: 'Naihati', href: '/in/west-bengal/naihati', description: 'Quality dental services in Naihati' },
    { name: 'Bidhan Nagar', href: '/in/west-bengal/bidhan-nagar', description: 'Quality dental services in Bidhan Nagar' },
    { name: 'Kharagpur', href: '/in/west-bengal/kharagpur', description: 'Quality dental services in Kharagpur' },
    { name: 'English Bazar', href: '/in/west-bengal/english-bazar', description: 'Quality dental services in English Bazar' },
    { name: 'Haldia', href: '/in/west-bengal/haldia', description: 'Quality dental services in Haldia' },
    { name: 'Madhyamgram', href: '/in/west-bengal/madhyamgram', description: 'Quality dental services in Madhyamgram' },
    { name: 'Malda', href: '/in/west-bengal/malda', description: 'Quality dental services in Malda' },
    { name: 'Baharampur', href: '/in/west-bengal/baharampur', description: 'Quality dental services in Baharampur' },
    { name: 'Raiganj', href: '/in/west-bengal/raiganj', description: 'Quality dental services in Raiganj' },
    { name: 'Serampore', href: '/in/west-bengal/serampore', description: 'Quality dental services in Serampore' },
    { name: 'Hugli and Chinsurah', href: '/in/west-bengal/hugli-and-chinsurah', description: 'Quality dental services in Hugli and Chinsurah' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'West Bengal', href: '/in/west-bengal' }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dental Services in West Bengal
          </h1>
          <p className="text-lg text-gray-700 max-w-转入 mx-auto mb-8">
            Find comprehensive dental care services across West Bengal. Expert dental treatments 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cities in West Bengal</h2>
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
                Browse through our extensive network of dental services across West Bengal. 
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
