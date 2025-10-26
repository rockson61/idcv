
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Calendar, Star, Users, Shield, Award, Clock, Navigation, CheckCircle, DollarSign, MapPinIcon, Stethoscope, Heart, Zap, Globe, Car, Wifi, ParkingCircle, Coffee, Building, CreditCard } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Dental Services in singrauli | Best Dentist in singrauli | Indira Dental Clinic',
  description: 'Expert dental services in singrauli. RCT, dental implants, braces, cosmetic dentistry by Dr. Rockson Samuel. Save 50% on dental treatments by visiting Vellore.',
  keywords: ['dentist singrauli', 'dental clinic singrauli', 'dental services singrauli', 'best dentist singrauli'],
}

export default function SingrauliPage() {
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

  const faqs = [
    {
      question: 'What are the best dental clinics in Singrauli?',
      answer: 'Indira Dental Clinic in Vellore offers the best dental services in Singrauli with 50% lower costs. Our experienced team provides world-class dental care with modern technology and personalized treatment plans.'
    },
    {
      question: 'How much does dental treatment cost in Singrauli?',
      answer: 'Dental treatment costs in Singrauli can be expensive, but you can save 50% by visiting Indira Dental Clinic in Vellore. Root canal treatment costs ₹3,000-8,000, dental implants ₹25,000-45,000, and braces ₹30,000-80,000 in Vellore.'
    },
    {
      question: 'Where can I find the best dentist in Singrauli?',
      answer: 'Dr. Rockson Samuel at Indira Dental Clinic in Vellore is the best dentist serving Singrauli patients. With years of experience and modern facilities, we provide comprehensive dental care at affordable prices.'
    },
    {
      question: 'Is dental tourism to Vellore worth it from Singrauli?',
      answer: 'Yes, dental tourism to Vellore from Singrauli is highly beneficial. You can save up to 50% on dental treatments while receiving world-class care. The travel cost is minimal compared to the savings on dental procedures.'
    },
    {
      question: 'What dental services are available in Singrauli?',
      answer: 'Indira Dental Clinic in Vellore offers all dental services for Singrauli patients including RCT, implants, braces, cosmetic dentistry, general dentistry, and pediatric care. All services are available at 50% lower costs than Singrauli.'
    }
  ]

  const reviews = [
    {
      name: 'Priya Sharma',
      location: 'Singrauli',
      rating: 5,
      treatment: 'Dental Implants',
      text: 'I traveled from Singrauli to Vellore for dental implants and saved ₹15,000 compared to local prices. Dr. Rockson Samuel provided excellent care and the results are amazing.',
      date: '2024-01-15'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Singrauli',
      rating: 5,
      treatment: 'Root Canal Treatment',
      text: 'Best decision to visit Indira Dental Clinic in Vellore. The RCT was painless and cost 50% less than Singrauli. Highly recommended for all dental treatments.',
      date: '2024-01-10'
    },
    {
      name: 'Sunita Singh',
      location: 'Singrauli',
      rating: 5,
      treatment: 'Braces Treatment',
      text: 'My daughter got braces treatment in Vellore and we saved ₹25,000 compared to Singrauli prices. The treatment quality is excellent and the clinic is very modern.',
      date: '2024-01-08'
    }
  ]

  const amenities = [
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet for patients' },
    { icon: ParkingCircle, name: 'Free Parking', description: 'Ample parking space available' },
    { icon: Coffee, name: 'Waiting Lounge', description: 'Comfortable waiting area' },
    { icon: Car, name: 'Pickup Service', description: 'Airport and station pickup' },
    { icon: CreditCard, name: 'Payment Options', description: 'All payment methods accepted' },
    { icon: Building, name: 'Modern Facility', description: 'State-of-the-art equipment' }
  ]

  const doctorInfo = {
    name: 'Dr. Rockson Samuel',
    qualification: 'BDS, MDS (Oral & Maxillofacial Surgery)',
    experience: '15+ Years',
    specializations: ['Dental Implants', 'Root Canal Treatment', 'Cosmetic Dentistry', 'Orthodontics'],
    image: '/professional-dentist-portrait.png'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'Madhya Pradesh', href: '/in/madhya-pradesh' },
            { title: 'Singrauli', href: '/in/madhya-pradesh/singrauli' }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dental Services in Singrauli
          </h1>
          <p className="text-lg text-gray-700 max-w-转入 mx-auto mb-8">
            Experience world-class dental care in Singrauli, Madhya Pradesh. Our expert dentists 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Dental Services in Singrauli</h2>
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

        {/* Doctor Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Expert Dentist</h2>
          <ModernCard>
            <ModernCardContent className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <Image
                    src={doctorInfo.image}
                    alt={doctorInfo.name}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctorInfo.name}</h3>
                  <p className="text-lg text-teal-600 mb-4">{doctorInfo.qualification}</p>
                  <p className="text-gray-600 mb-4">Experience: {doctorInfo.experience}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctorInfo.specializations.map((spec, index) => (
                        <span key={index} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-700">4.9/5 Rating</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-teal-600" />
                      <span className="ml-1 text-gray-700">500+ Happy Patients</span>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>

        {/* Amenities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Clinic Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <ModernCard key={index} className="text-center p-4">
                <amenity.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{amenity.name}</h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Patient Reviews from Singrauli</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ModernCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-3">"{review.text}"</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{review.treatment}</span>
                  <span>{review.date}</span>
                </div>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ModernCard key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* Vellore CTA Section */}
        <section className="mb-12">
          <ModernCard className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <ModernCardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Save 50% on Dental Treatments!</h2>
              <p className="text-xl mb-6">
                Visit Indira Dental Clinic in Vellore and save up to 50% on all dental treatments compared to Singrauli prices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">50% Less Cost</h3>
                  <p className="text-sm opacity-90">Save thousands on dental treatments</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">World-Class Care</h3>
                  <p className="text-sm opacity-90">Same quality treatment at lower cost</p>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Easy Travel</h3>
                  <p className="text-sm opacity-90">Well-connected from Singrauli</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Vellore Appointment
                </Link>
                <Link
                  href="/dental-tourism"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Learn About Dental Tourism
                </Link>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>

        {/* Location Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Location & Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ModernCard>
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  Clinic Address
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <p className="text-gray-700 mb-4">
                  Indira Dental Clinic<br />
                  Gandhi Nagar, Vellore<br />
                  Tamil Nadu - 632001<br />
                  India
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-teal-600 mr-3" />
                    <span className="text-gray-700">+91 70106 50063</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-teal-600 mr-3" />
                    <span className="text-gray-700">Mon-Sun: 9:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard>
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <Car className="w-6 h-6 text-teal-600" />
                  Travel Information
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">From Singrauli to Vellore:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Flight: 2 hours (direct flights available)</li>
                      <li>• Train: 24 hours (comfortable overnight journey)</li>
                      <li>• Road: 18 hours (scenic drive)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Airport Pickup:</h4>
                    <p className="text-sm text-gray-700">Free pickup service from Chennai Airport to Vellore</p>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <ModernCard>
            <ModernCardContent className="py-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Book your appointment today and experience the best dental care. 
                Save 50% by visiting our Vellore clinic or get local consultation in Singrauli.
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
