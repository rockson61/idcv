import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Calendar, Star, Users, Shield, Award } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Dental Services in undefined | Expert Dentist | Indira Dental Clinic',
  description: 'Comprehensive dental services in undefined. Expert dental care including RCT, implants, braces, cosmetic dentistry. Visit Indira Dental Clinic in Vellore for 50% savings.',
  keywords: ['dentist undefined', 'dental clinic undefined', 'dental services undefined'],
}

export default function IndiaPage() {
  const states = [
    {
      name: 'Uttar Pradesh',
      cities: ['Lucknow', 'Kanpur', 'Prayagraj', 'Ghaziabad', 'Agra', 'Meerut', 'Varanasi', 'Bareilly', 'Noida'],
      href: '/in/uttar-pradesh',
      description: 'Comprehensive dental care across Uttar Pradesh'
    },
    {
      name: 'Madhya Pradesh',
      cities: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Ratlam'],
      href: '/in/madhya-pradesh',
      description: 'Expert dental services in Madhya Pradesh'
    },
    {
      name: 'Maharashtra',
      cities: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur'],
      href: '/in/maharashtra',
      description: 'Premium dental care in Maharashtra'
    },
    {
      name: 'Rajasthan',
      cities: ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur'],
      href: '/in/rajasthan',
      description: 'Quality dental services in Rajasthan'
    },
    {
      name: 'Karnataka',
      cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Bellary'],
      href: '/in/karnataka',
      description: 'Advanced dental treatments in Karnataka'
    },
    {
      name: 'Tamil Nadu',
      cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Erode', 'Vellore'],
      href: '/in/tamil-nadu',
      description: 'Professional dental care in Tamil Nadu'
    },
    {
      name: 'Gujarat',
      cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar'],
      href: '/in/gujarat',
      description: 'Modern dental solutions in Gujarat'
    },
    {
      name: 'West Bengal',
      cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri'],
      href: '/in/west-bengal',
      description: 'Comprehensive dental care in West Bengal'
    },
    {
      name: 'Andhra Pradesh',
      cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Kurnool'],
      href: '/in/andhra-pradesh',
      description: 'Expert dental services in Andhra Pradesh'
    },
    {
      name: 'Bihar',
      cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga'],
      href: '/in/bihar',
      description: 'Quality dental treatments in Bihar'
    },
    {
      name: 'Haryana',
      cities: ['Gurgaon', 'Faridabad', 'Panchkula', 'Ambala', 'Karnal'],
      href: '/in/haryana',
      description: 'Advanced dental care in Haryana'
    },
    {
      name: 'Delhi',
      cities: ['New Delhi', 'South Delhi', 'East Delhi', 'North Delhi', 'Central Delhi'],
      href: '/in/delhi',
      description: 'Premium dental services in Delhi'
    }
  ]

  const unionTerritories = [
    {
      name: 'Puducherry',
      cities: ['Pondicherry', 'Karaikal', 'Mahe', 'Yanam'],
      href: '/in/puducherry',
      description: 'Dental care services in Puducherry'
    },
    {
      name: 'Chandigarh',
      cities: ['Chandigarh'],
      href: '/in/chandigarh',
      description: 'Modern dental treatments in Chandigarh'
    },
    {
      name: 'Jammu and Kashmir',
      cities: ['Jammu', 'Srinagar'],
      href: '/in/jammu-and-kashmir',
      description: 'Quality dental services in Jammu and Kashmir'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dental Services Across India
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Find comprehensive dental care services across India. Indira Dental Clinic provides expert dental treatments 
            in major cities and towns across all states and union territories.
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
              <Phone className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* States Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {states.map((state, index) => (
              <ModernCard key={index} hover className="group">
                <ModernCardHeader>
                  <ModernCardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    {state.name}
                  </ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent>
                  <p className="text-gray-600 mb-4">{state.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semisms text-gray-800 mb-2">Major Cities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {state.cities.slice(0, 6).map((city, cityIndex) => (
                        <span key={cityIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {city}
                        </span>
                      ))}
                      {state.cities.length > 6 && (
                        <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
                          +{state.cities.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                  <Link
                    href={state.href}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline"
                  >
                    View All Cities
                    <Calendar className="w-4 h-4 ml-1" />
                  </Link>
                </ModernCardContent>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* Union Territories Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Union Territories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unionTerritories.map((ut, index) => (
              <ModernCard key={index} hover className="group">
                <ModernCardHeader>
                  <ModernCardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    {ut.name}
                  </ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent>
                  <p className="text-gray-600 mb-4">{ut.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Cities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {ut.cities.map((city, cityIndex) => (
                        <span key={cityIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={ut.href}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline"
                  >
                    View All Cities
                    <Calendar className="w-4 h-4 ml-1" />
                  </Link>
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
                Ready to Find Dental Care Near You?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Browse through our extensive network of dental services across India. 
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