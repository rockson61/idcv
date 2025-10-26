"use client"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock, Star, CheckCircle, Award, Users } from "lucide-react"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export default function LocationsClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Dentist Near Me', href: '/dentist-near-me' },
            { title: 'Locations', href: '/dentist-near-me/locations' },
          ]}
        />

        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Find Indira Dental Clinic Locations
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Discover our dental clinics across India. Our flagship clinic in Vellore offers specialized 
            dental tourism packages with significant cost savings for international patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Consultation
            </Link>
            <Link
              href="/dental-tourism"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              <Award className="w-5 h-5 mr-2" />
              Dental Tourism
            </Link>
          </div>
        </section>

        {/* Featured Vellore Clinic */}
        <section className="mb-12">
          <ModernCard className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <ModernCardContent className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-medium mb-4">
                    Featured Clinic
        </div>
                  <h2 className="text-3xl font-bold mb-4">Vellore - Main Clinic</h2>
                  <p className="text-xl mb-6">
                    Our flagship clinic specializes in dental tourism, offering international patients 
                    high-quality dental care at 70-80% lower costs than Western countries.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3" />
                      <span>3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu 632006</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3" />
                      <a href="tel:7010650063" className="hover:underline">7010650063</a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3" />
                      <span>Mon-Sat: 10 AM - 8 PM, Sun: 10 AM - 1:30 PM</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/dental-tourism"
                      className="px-6 py-3 bg-yellow-500 text-yellow-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                    >
                      Dental Tourism Packages
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Book Consultation
                    </Link>
                  </div>
          </div>
                <div className="relative">
                <Image
                    src="/professional-dentist-portrait.png"
                    alt="Indira Dental Clinic - Vellore"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>

        {/* Tamil Nadu Cities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cities in Tamil Nadu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModernCard hover className="group">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  Vellore
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-600 mb-4">Our main clinic location with comprehensive dental services</p>
                <div className="space-y-2">
                  <Link
                    href="/in/tamil-nadu/vellore"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Vellore Main Clinic
                  </Link>
                  <Link
                    href="/in/tamil-nadu/vellore/katpadi"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Katpadi Location
                  </Link>
                  <Link
                    href="/in/tamil-nadu/vellore/gandhi-nagar"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Gandhi Nagar
                  </Link>
                  <Link
                    href="/in/tamil-nadu/vellore/sathuvachari"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Sathuvachari
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard hover className="group">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  Chennai
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-600 mb-4">Capital city with modern dental facilities</p>
                <div className="space-y-2">
                  <Link
                    href="/in/tamil-nadu/chennai"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Chennai Main Clinic
                  </Link>
                  <Link
                    href="/in/tamil-nadu/chennai/anna-nagar"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Anna Nagar
                  </Link>
                  <Link
                    href="/in/tamil-nadu/chennai/t-nagar"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → T. Nagar
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard hover className="group">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  Coimbatore
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-600 mb-4">Industrial hub with specialized dental care</p>
                <div className="space-y-2">
                  <Link
                    href="/in/tamil-nadu/coimbatore"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Coimbatore Main Clinic
                  </Link>
                  <Link
                    href="/in/tamil-nadu/coimbatore/gandhipuram"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Gandhipuram
                  </Link>
                  <Link
                    href="/in/tamil-nadu/coimbatore/peelamedu"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Peelamedu
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard hover className="group">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  Madurai
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-600 mb-4">Cultural capital with comprehensive dental services</p>
                <div className="space-y-2">
                  <Link
                    href="/in/tamil-nadu/madurai"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Madurai Main Clinic
                  </Link>
                  <Link
                    href="/in/tamil-nadu/madurai/anna-nagar"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Anna Nagar
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard hover className="group">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  Salem
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-600 mb-4">Steel city with modern dental infrastructure</p>
                <div className="space-y-2">
                  <Link
                    href="/in/tamil-nadu/salem"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Salem Main Clinic
                  </Link>
                  <Link
                    href="/in/tamil-nadu/salem/suramangalam"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Suramangalam
                  </Link>
              </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard hover className="group">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  Tiruchirappalli
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-600 mb-4">Educational hub with specialized dental care</p>
                <div className="space-y-2">
                  <Link
                    href="/in/tamil-nadu/tiruchirappalli"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Trichy Main Clinic
                  </Link>
                  <Link
                    href="/in/tamil-nadu/tiruchirappalli/thillai-nagar"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Thillai Nagar
                  </Link>
            </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </section>

        {/* Other States */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModernCard hover className="group">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  Karnataka
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-600 mb-4">IT capital with modern dental facilities</p>
                <div className="space-y-2">
                  <Link
                    href="/in/karnataka/bangalore"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Bangalore
                  </Link>
                  <Link
                    href="/in/karnataka/mysore"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Mysore
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard hover className="group">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  Maharashtra
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-600 mb-4">Financial capital with comprehensive dental care</p>
                <div className="space-y-2">
                  <Link
                    href="/in/maharashtra/mumbai"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Mumbai
                  </Link>
                  <Link
                    href="/in/maharashtra/pune"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Pune
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard hover className="group">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  Uttar Pradesh
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-600 mb-4">Most populous state with accessible dental care</p>
                <div className="space-y-2">
                  <Link
                    href="/in/uttar-pradesh/lucknow"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Lucknow
                  </Link>
                  <Link
                    href="/in/uttar-pradesh/kanpur"
                    className="block text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    → Kanpur
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </section>

        {/* Dental Tourism Packages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dental Tourism Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ModernCard className="text-center">
              <ModernCardHeader>
                <ModernCardTitle className="text-xl">Basic Package</ModernCardTitle>
                <div className="text-3xl font-bold text-teal-600">₹15,000</div>
                <p className="text-gray-500">Starting from</p>
              </ModernCardHeader>
              <ModernCardContent>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Comprehensive dental examination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Full mouth X-rays
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Professional teeth cleaning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Basic fillings (up to 2)
                  </li>
                </ul>
                <Link
                  href="/dental-tourism"
                  className="block w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Learn More
                </Link>
              </ModernCardContent>
            </ModernCard>

            <ModernCard className="text-center border-2 border-teal-500 relative">
              <div className="absolute top-0 right-0 bg-teal-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <ModernCardHeader>
                <ModernCardTitle className="text-xl">Smile Makeover</ModernCardTitle>
                <div className="text-3xl font-bold text-teal-600">₹75,000</div>
                  <p className="text-gray-500">Starting from</p>
              </ModernCardHeader>
              <ModernCardContent>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Everything in Basic Package
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Teeth whitening
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Dental veneers (up to 6)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cosmetic bonding
                  </li>
                </ul>
                <Link
                  href="/dental-tourism"
                  className="block w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Learn More
                </Link>
              </ModernCardContent>
            </ModernCard>

            <ModernCard className="text-center">
              <ModernCardHeader>
                <ModernCardTitle className="text-xl">Full Rehabilitation</ModernCardTitle>
                <div className="text-3xl font-bold text-teal-600">₹1,50,000</div>
                  <p className="text-gray-500">Starting from</p>
              </ModernCardHeader>
              <ModernCardContent>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Everything in Smile Makeover
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Dental implants (up to 4)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Full mouth crowns/bridges
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bite correction
                  </li>
                </ul>
                <Link
                  href="/dental-tourism"
                  className="block w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Learn More
                </Link>
              </ModernCardContent>
            </ModernCard>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <ModernCard className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <ModernCardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Visit?</h2>
              <p className="text-xl mb-6">
                Contact us today to book an appointment at your preferred location or to learn more about our dental tourism packages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
                  <Phone className="w-5 h-5 mr-2" />
              Book Appointment
            </Link>
            <Link
              href="/dental-tourism"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
                  <Award className="w-5 h-5 mr-2" />
              Explore Dental Tourism
            </Link>
            <Link
              href="tel:7010650063"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
                  <Phone className="w-5 h-5 mr-2" />
              Call: 7010650063
            </Link>
          </div>
            </ModernCardContent>
          </ModernCard>
        </section>
      </div>
    </div>
  )
}