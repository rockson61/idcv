
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Calendar, Star, Users, Shield, Award, Clock } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Dental Services in andhra-pradesh | Expert Dentist | Indira Dental Clinic',
  description: 'Comprehensive dental services in andhra-pradesh. Expert dental care including RCT, implants, braces, cosmetic dentistry. Visit Indira Dental Clinic in Vellore for 50% savings.',
  keywords: ['dentist andhra-pradesh', 'dental clinic andhra-pradesh', 'dental services andhra-pradesh'],
}

export default function AndhraPradeshPage() {
  const cities = [
    { name: 'Visakhapatnam', href: '/in/andhra-pradesh/visakhapatnam', description: 'Quality dental services in Visakhapatnam' },
    { name: 'Vijayawada', href: '/in/andhra-pradesh/vijayawada', description: 'Quality dental services in Vijayawada' },
    { name: 'Guntur', href: '/in/andhra-pradesh/guntur', description: 'Quality dental services in Guntur' },
    { name: 'Nellore', href: '/in/andhra-pradesh/nellore', description: 'Quality dental services in Nellore' },
    { name: 'Kurnool', href: '/in/andhra-pradesh/kurnool', description: 'Quality dental services in Kurnool' },
    { name: 'Rajahmundry', href: '/in/andhra-pradesh/rajahmundry', description: 'Quality dental services in Rajahmundry' },
    { name: 'Tirupati', href: '/in/andhra-pradesh/tirupati', description: 'Quality dental services in Tirupati' },
    { name: 'Kadapa', href: '/in/andhra-pradesh/kadapa', description: 'Quality dental services in Kadapa' },
    { name: 'Kakinada', href: '/in/andhra-pradesh/kakinada', description: 'Quality dental services in Kakinada' },
    { name: 'Eluru', href: '/in/andhra-pradesh/eluru', description: 'Quality dental services in Eluru' },
    { name: 'Anantapuram', href: '/in/andhra-pradesh/anantapuram', description: 'Quality dental services in Anantapuram' },
    { name: 'Anantapur', href: '/in/andhra-pradesh/anantapur', description: 'Quality dental services in Anantapur' },
    { name: 'Vijayanagaram', href: '/in/andhra-pradesh/vijayanagaram', description: 'Quality dental services in Vijayanagaram' },
    { name: 'Ongole', href: '/in/andhra-pradesh/ongole', description: 'Quality dental services in Ongole' },
    { name: 'Nandyal', href: '/in/andhra-pradesh/nandyal', description: 'Quality dental services in Nandyal' },
    { name: 'Chittoor', href: '/in/andhra-pradesh/chittoor', description: 'Quality dental services in Chittoor' },
    { name: 'Machilipatnam', href: '/in/andhra-pradesh/machilipatnam', description: 'Quality dental services in Machilipatnam' },
    { name: 'Adoni', href: '/in/andhra-pradesh/adoni', description: 'Quality dental services in Adoni' },
    { name: 'Tenali', href: '/in/andhra-pradesh/tenali', description: 'Quality dental services in Tenali' },
    { name: 'Proddatur', href: '/in/andhra-pradesh/proddatur', description: 'Quality dental services in Proddatur' },
    { name: 'Hindupur', href: '/in/andhra-pradesh/hindupur', description: 'Quality dental services in Hindupur' },
    { name: 'Bhimavaram', href: '/in/andhra-pradesh/bhimavaram', description: 'Quality dental services in Bhimavaram' },
    { name: 'Madanapalle', href: '/in/andhra-pradesh/madanapalle', description: 'Quality dental services in Madanapalle' },
    { name: 'Guntakal', href: '/in/andhra-pradesh/guntakal', description: 'Quality dental services in Guntakal' },
    { name: 'Srikakulam', href: '/in/andhra-pradesh/srikakulam', description: 'Quality dental services in Srikakulam' },
    { name: 'Dharmavaram', href: '/in/andhra-pradesh/dharmavaram', description: 'Quality dental services in Dharmavaram' },
    { name: 'Gudivada', href: '/in/andhra-pradesh/gudivada', description: 'Quality dental services in Gudivada' },
    { name: 'Narasaraopet', href: '/in/andhra-pradesh/narasaraopet', description: 'Quality dental services in Narasaraopet' },
    { name: 'Tadipatri', href: '/in/andhra-pradesh/tadipatri', description: 'Quality dental services in Tadipatri' },
    { name: 'Kavali', href: '/in/andhra-pradesh/kavali', description: 'Quality dental services in Kavali' },
    { name: 'Tadepalligudem', href: '/in/andhra-pradesh/tadepalligudem', description: 'Quality dental services in Tadepalligudem' },
    { name: 'Amaravati', href: '/in/andhra-pradesh/amaravati', description: 'Quality dental services in Amaravati' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'Andhra Pradesh', href: '/in/andhra-pradesh' }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dental Services in Andhra Pradesh
          </h1>
          <p className="text-lg text-gray-700 max-w-转入 mx-auto mb-8">
            Find comprehensive dental care services across Andhra Pradesh. Expert dental treatments 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cities in Andhra Pradesh</h2>
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
                Browse through our extensive network of dental services across Andhra Pradesh. 
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
