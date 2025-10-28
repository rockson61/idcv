import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Calendar, Star, Users, Shield, Award, Clock, Navigation, CheckCircle, DollarSign, MapPinIcon, Stethoscope, Heart, Zap, Globe, Car, Wifi, ParkingCircle, Coffee, Building, CreditCard } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { RelevantQAWidget } from '@/components/widgets/relevant-qa-widget'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import { CTAWidget } from '@/components/widgets/cta-widget'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Best Dentist and Dental Clinic in Ambur, Vellore | Indira Dental Clinic',
  description: 'Expert dental services in Ambur, Vellore. RCT, dental implants, braces, cosmetic dentistry by Dr. Rockson Samuel. Book your appointment today.',
  keywords: ['dentist Ambur', 'dental clinic Ambur Vellore', 'dental services Ambur', 'best dentist Ambur'],
}

export default function AmburPage() {
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
      question: 'Where is the best dental clinic near Ambur?',
      answer: 'Indira Dental Clinic in Vellore is the best choice for Ambur residents, offering comprehensive dental services with modern equipment and experienced dentists. We provide world-class dental care at affordable prices.'
    },
    {
      question: 'How much does dental treatment cost in Ambur area?',
      answer: 'At Indira Dental Clinic serving Ambur, root canal treatment costs ₹3,000-8,000, dental implants ₹25,000-45,000, and braces ₹30,000-80,000. We offer transparent pricing with no hidden costs.'
    },
    {
      question: 'Who is the best dentist for Ambur patients?',
      answer: 'Dr. Rockson Samuel at Indira Dental Clinic in Vellore is highly experienced and trusted by Ambur patients. With over 15 years of experience, he provides personalized dental care with modern technology.'
    },
    {
      question: 'How far is the dental clinic from Ambur?',
      answer: 'Our clinic in Vellore is easily accessible from Ambur, just a short drive away. We also provide guidance for easy travel and parking facilities for our patients from Ambur.'
    },
    {
      question: 'What dental services are available for Ambur residents?',
      answer: 'We offer complete dental services including RCT, implants, braces, cosmetic dentistry, general dentistry, and pediatric care. All treatments use the latest technology and follow international standards.'
    }
  ]

  const reviews = [
    {
      name: 'Rajesh Kumar',
      location: 'Ambur',
      rating: 5,
      treatment: 'Dental Implants',
      text: 'Excellent dental care! I came from Ambur for dental implants and the treatment was painless. Dr. Rockson Samuel is very professional and caring.',
      date: '2024-01-15'
    },
    {
      name: 'Priya Devi',
      location: 'Ambur',
      rating: 5,
      treatment: 'Root Canal Treatment',
      text: 'Best dentist near Ambur! The RCT was completely painless and the staff was very friendly. Highly recommend to everyone in Ambur area.',
      date: '2024-01-10'
    },
    {
      name: 'Mohammed Ali',
      location: 'Ambur',
      rating: 5,
      treatment: 'Braces Treatment',
      text: 'My son got braces treatment and we are very satisfied with the results. The clinic is clean and uses modern equipment. Worth the visit from Ambur.',
      date: '2024-01-08'
    }
  ]

  const amenities = [
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet for patients' },
    { icon: ParkingCircle, name: 'Free Parking', description: 'Ample parking space available' },
    { icon: Coffee, name: 'Waiting Lounge', description: 'Comfortable waiting area' },
    { icon: Car, name: 'Easy Access', description: 'Convenient from Ambur' },
    { icon: CreditCard, name: 'Payment Options', description: 'All payment methods accepted' },
    { icon: Building, name: 'Modern Facility', description: 'State-of-the-art equipment' }
  ]

  const doctorInfo = {
    name: 'Dr. Rockson Samuel',
    qualification: 'BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach',
    experience: '15+ Years',
    specializations: ['Dental Implants', 'Root Canal Treatment', 'Cosmetic Dentistry', 'Orthodontics'],
    image: '/dr-rockson-samuel-best-dentist-vellore.jpg'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' },
            { title: 'Vellore', href: '/in/tamil-nadu/vellore' },
            { title: 'Ambur', href: '/in/tamil-nadu/vellore/ambur' }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best Dentist and Dental Clinic in Ambur, Vellore
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Welcome to Indira Dental Clinic - your trusted dental care provider serving Ambur and surrounding areas. 
            We offer comprehensive dental treatments with modern technology and personalized care.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Expert Care</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">15+ Years Experience</span>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Dental Services for Ambur Patients</h2>
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
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
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
                      <span className="ml-1 text-gray-700">1000+ Happy Patients</span>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Patient Reviews from Ambur</h2>
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
                  <Navigation className="w-6 h-6 text-teal-600" />
                  How to Reach from Ambur
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Distance from Ambur:</h4>
                    <p className="text-gray-700">Approximately 30 km from Ambur</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Travel Options:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• By Car: 45 minutes via NH75</li>
                      <li>• By Bus: Regular buses available</li>
                      <li>• Free parking available at clinic</li>
                    </ul>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </section>

        {/* Related Q&A and Services Widgets */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RelevantQAWidget
              title="Common Dental Questions from Ambur"
              questions={[
                {
                  id: '1',
                  title: 'How much does root canal cost near Ambur?',
                  slug: 'root-canal-cost-ambur',
                  excerpt: 'Root canal treatment costs ₹3,000-8,000 at our clinic serving Ambur patients.',
                  helpfulVotes: 45,
                  views: 1200,
                  createdAt: '2023-12-20T10:30:00Z'
                },
                {
                  id: '2',
                  title: 'Best dental clinic for Ambur residents?',
                  slug: 'best-dental-clinic-ambur',
                  excerpt: 'Indira Dental Clinic in Vellore offers comprehensive dental care for Ambur patients.',
                  helpfulVotes: 52,
                  views: 1400,
                  createdAt: '2023-12-18T14:15:00Z'
                },
                {
                  id: '3',
                  title: 'Dental implants cost for Ambur patients?',
                  slug: 'dental-implants-cost-ambur',
                  excerpt: 'Dental implants range from ₹25,000-45,000 with lifetime warranty.',
                  helpfulVotes: 38,
                  views: 980,
                  createdAt: '2023-12-15T09:45:00Z'
                }
              ]}
              serviceName="dental care"
            />

            <CompactServiceWidget
              title="Popular Services for Ambur Patients"
              description="Most requested dental treatments by patients from Ambur."
              services={[
                { name: "Root Canal Treatment", slug: "root-canal-treatment", price: "₹3,000 - ₹8,000", duration: "1-2 hours" },
                { name: "Dental Implants", slug: "dental-implants", price: "₹25,000 - ₹45,000", duration: "2-3 hours" },
                { name: "Orthodontic Braces", slug: "orthodontics", price: "₹30,000 - ₹80,000", duration: "18-24 months" },
                { name: "Cosmetic Dentistry", slug: "cosmetic-dentistry", price: "₹5,000 - ₹25,000", duration: "1-3 hours" }
              ]}
              ctaText="View All Services"
              ctaLink="/services"
            />
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
                Book your appointment today and experience the best dental care in Vellore. 
                Conveniently located for Ambur residents.
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

        {/* Final CTA Widget */}
        <CTAWidget
          title="Start Your Dental Journey Today"
          description="Join thousands of satisfied patients from Ambur and surrounding areas who trust Indira Dental Clinic."
          primaryAction={{
            text: "Book Free Consultation",
            href: "/contact"
          }}
          secondaryAction={{
            text: "Ask a Dental Question",
            href: "/ask-the-dentist/submit"
          }}
          benefits={[
            "Expert dental care with 15+ years experience",
            "Modern equipment and technology",
            "Flexible payment plans available",
            "Convenient location from Ambur"
          ]}
          showRating={true}
          showAvailability={true}
        />
      </div>
    </div>
  )
}
