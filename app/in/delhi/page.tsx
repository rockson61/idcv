
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Calendar, Star, Users, Shield, Award, Clock } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Dental Services in delhi | Expert Dentist | Indira Dental Clinic',
  description: 'Comprehensive dental services in delhi. Expert dental care including RCT, implants, braces, cosmetic dentistry. Visit Indira Dental Clinic in Vellore for 50% savings.',
  keywords: ['dentist delhi', 'dental clinic delhi', 'dental services delhi'],
}

export default function DelhiPage() {
  const cities = [
    { name: 'Bhalswa Jahangir Pur', href: '/in/delhi/bhalswa-jahangir-pur', description: 'Quality dental services in Bhalswa Jahangir Pur' },
    { name: 'Delhi', href: '/in/delhi/delhi', description: 'Quality dental services in Delhi' },
    { name: 'New Delhi', href: '/in/delhi/new-delhi', description: 'Quality dental services in New Delhi' },
    { name: 'South Delhi', href: '/in/delhi/south-delhi', description: 'Quality dental services in South Delhi' },
    { name: 'Malviya Nagar', href: '/in/delhi/malviya-nagar', description: 'Quality dental services in Malviya Nagar' },
    { name: 'Laxmi Nagar', href: '/in/delhi/laxmi-nagar', description: 'Quality dental services in Laxmi Nagar' },
    { name: 'Lajpat Nagar', href: '/in/delhi/lajpat-nagar', description: 'Quality dental services in Lajpat Nagar' },
    { name: 'Lajpat Nagar-I', href: '/in/delhi/lajpat-nagar-i', description: 'Quality dental services in Lajpat Nagar-I' },
    { name: 'Lajpat Nagar-II', href: '/in/delhi/lajpat-nagar-ii', description: 'Quality dental services in Lajpat Nagar-II' },
    { name: 'Lajpat Nagar-III', href: '/in/delhi/lajpat-nagar-iii', description: 'Quality dental services in Lajpat Nagar-III' },
    { name: 'Lajpat Nagar-IV', href: '/in/delhi/lajpat-nagar-iv', description: 'Quality dental services in Lajpat Nagar-IV' },
    { name: 'Uttam Nagar', href: '/in/delhi/uttam-nagar', description: 'Quality dental services in Uttam Nagar' },
    { name: 'Ashok Nagar', href: '/in/delhi/ashok-nagar', description: 'Quality dental services in Ashok Nagar' },
    { name: 'Uttam Nagar', href: '/in/delhi/uttam-nagar', description: 'Quality dental services in Uttam Nagar' },
    { name: 'Dwarka', href: '/in/delhi/dwarka', description: 'Quality dental services in Dwarka' },
    { name: 'East Delhi', href: '/in/delhi/east-delhi', description: 'Quality dental services in East Delhi' },
    { name: 'Shahdara', href: '/in/delhi/shahdara', description: 'Quality dental services in Shahdara' },
    { name: 'Preet Vihar', href: '/in/delhi/preet-vihar', description: 'Quality dental services in Preet Vihar' },
    { name: 'Nirman Vihar', href: '/in/delhi/nirman-vihar', description: 'Quality dental services in Nirman Vihar' },
    { name: 'Central Delhi', href: '/in/delhi/central-delhi', description: 'Quality dental services in Central Delhi' },
    { name: 'Delhi NCR', href: '/in/delhi/delhi-ncr', description: 'Quality dental services in Delhi NCR' },
    { name: 'Connaught Place', href: '/in/delhi/connaught-place', description: 'Quality dental services in Connaught Place' },
    { name: 'Janakpuri', href: '/in/delhi/janakpuri', description: 'Quality dental services in Janakpuri' },
    { name: 'Pitampura', href: '/in/delhi/pitampura', description: 'Quality dental services in Pitampura' },
    { name: 'Karol Bagh', href: '/in/delhi/karol-bagh', description: 'Quality dental services in Karol Bagh' },
    { name: 'Chittaranjan Park', href: '/in/delhi/chittaranjan-park', description: 'Quality dental services in Chittaranjan Park' },
    { name: 'GK1', href: '/in/delhi/gk1', description: 'Quality dental services in GK1' },
    { name: 'GK2', href: '/in/delhi/gk2', description: 'Quality dental services in GK2' },
    { name: 'East of Kailash', href: '/in/delhi/east-of-kailash', description: 'Quality dental services in East of Kailash' },
    { name: 'Kalkaji', href: '/in/delhi/kalkaji', description: 'Quality dental services in Kalkaji' },
    { name: 'Nehru Place', href: '/in/delhi/nehru-place', description: 'Quality dental services in Nehru Place' },
    { name: 'Panchsheel Enclave', href: '/in/delhi/panchsheel-enclave', description: 'Quality dental services in Panchsheel Enclave' },
    { name: 'Nangloi Jat', href: '/in/delhi/nangloi-jat', description: 'Quality dental services in Nangloi Jat' },
    { name: 'Shahpur Jat', href: '/in/delhi/shahpur-jat', description: 'Quality dental services in Shahpur Jat' },
    { name: 'Sheikh Sarai', href: '/in/delhi/sheikh-sarai', description: 'Quality dental services in Sheikh Sarai' },
    { name: 'Okhla Phase 1', href: '/in/delhi/okhla-phase-1', description: 'Quality dental services in Okhla Phase 1' },
    { name: 'Okhla Phase 2', href: '/in/delhi/okhla-phase-2', description: 'Quality dental services in Okhla Phase 2' },
    { name: 'Okhla Phase 3', href: '/in/delhi/okhla-phase-3', description: 'Quality dental services in Okhla Phase 3' },
    { name: 'CR Park', href: '/in/delhi/cr-park', description: 'Quality dental services in CR Park' },
    { name: 'New Friends Colony', href: '/in/delhi/new-friends-colony', description: 'Quality dental services in New Friends Colony' },
    { name: 'Defence Colony', href: '/in/delhi/defence-colony', description: 'Quality dental services in Defence Colony' },
    { name: 'Jasola', href: '/in/delhi/jasola', description: 'Quality dental services in Jasola' },
    { name: 'Hauz Khas', href: '/in/delhi/hauz-khas', description: 'Quality dental services in Hauz Khas' },
    { name: 'Patel Nagar', href: '/in/delhi/patel-nagar', description: 'Quality dental services in Patel Nagar' },
    { name: 'Kirti Nagar', href: '/in/delhi/kirti-nagar', description: 'Quality dental services in Kirti Nagar' },
    { name: 'Naraina', href: '/in/delhi/naraina', description: 'Quality dental services in Naraina' },
    { name: 'Punjabi Bagh', href: '/in/delhi/punjabi-bagh', description: 'Quality dental services in Punjabi Bagh' },
    { name: 'Paharganj', href: '/in/delhi/paharganj', description: 'Quality dental services in Paharganj' },
    { name: 'Mayur Vihar Phase 1', href: '/in/delhi/mayur-vihar-phase-1', description: 'Quality dental services in Mayur Vihar Phase 1' },
    { name: 'Mayur Vihar Phase 2', href: '/in/delhi/mayur-vihar-phase-2', description: 'Quality dental services in Mayur Vihar Phase 2' },
    { name: 'Mayur Vihar Extension', href: '/in/delhi/mayur-vihar-extension', description: 'Quality dental services in Mayur Vihar Extension' },
    { name: 'South Ext-I', href: '/in/delhi/south-ext-i', description: 'Quality dental services in South Ext-I' },
    { name: 'South Ext-II', href: '/in/delhi/south-ext-ii', description: 'Quality dental services in South Ext-II' },
    { name: 'Sultan Pur Majra', href: '/in/delhi/sultan-pur-majra', description: 'Quality dental services in Sultan Pur Majra' },
    { name: 'Rajouri Garden', href: '/in/delhi/rajouri-garden', description: 'Quality dental services in Rajouri Garden' },
    { name: 'Kirari Suleman Nagar', href: '/in/delhi/kirari-suleman-nagar', description: 'Quality dental services in Kirari Suleman Nagar' },
    { name: 'Karawal Nagar', href: '/in/delhi/karawal-nagar', description: 'Quality dental services in Karawal Nagar' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'Delhi', href: '/in/delhi' }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dental Services in Delhi
          </h1>
          <p className="text-lg text-gray-700 max-w-转入 mx-auto mb-8">
            Find comprehensive dental care services across Delhi. Expert dental treatments 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cities in Delhi</h2>
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
                Browse through our extensive network of dental services across Delhi. 
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
