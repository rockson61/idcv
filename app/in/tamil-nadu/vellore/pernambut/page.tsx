import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Star, Users, Shield, Award, Clock, Navigation, CheckCircle, Wifi, ParkingCircle, Coffee, Car, Building, CreditCard } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { RelevantQAWidget } from '@/components/widgets/relevant-qa-widget'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import { CTAWidget } from '@/components/widgets/cta-widget'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Best Dentist for Pernambut, Vellore | Indira Dental Clinic',
  description: 'Expert dental services for Pernambut residents. RCT, dental implants, braces by Dr. Rockson Samuel at Vellore clinic.',
  keywords: ['dentist Pernambut', 'dental clinic Pernambut Vellore', 'dental services Pernambut', 'best dentist Pernambut'],
}

export default function PernambultPage() {
  const services = [
    { title: 'Root Canal Treatment', description: 'Pain-free RCT with modern techniques', price: '₹3,000 - ₹8,000', features: ['Single sitting RCT', 'Painless procedure', 'Digital X-Ray', 'Crown included'] },
    { title: 'Dental Implants', description: 'Permanent tooth replacement solution', price: '₹25,000 - ₹45,000', features: ['Titanium implants', 'Lifetime warranty', 'Natural look', 'Bone grafting'] },
    { title: 'Orthodontics & Braces', description: 'Straighten teeth with modern braces', price: '₹30,000 - ₹80,000', features: ['Metal braces', 'Ceramic braces', 'Invisalign', 'Retainers'] },
    { title: 'Cosmetic Dentistry', description: 'Transform your smile completely', price: '₹5,000 - ₹25,000', features: ['Teeth whitening', 'Veneers', 'Smile makeover', 'Bonding'] },
    { title: 'General Dentistry', description: 'Comprehensive dental care', price: '₹500 - ₹2,000', features: ['Check-ups', 'Cleanings', 'Fillings', 'Extractions'] },
    { title: 'Pediatric Dentistry', description: 'Dental care for children', price: '₹500 - ₹3,000', features: ['First dental visit', 'Fluoride treatment', 'Sealants', 'Cavity fillings'] }
  ]

  const faqs = [
    { question: 'Where is the best dental clinic near Pernambut?', answer: 'Indira Dental Clinic in Vellore is the best choice for Pernambut residents, offering comprehensive dental services approximately 35 km away.' },
    { question: 'How much does dental treatment cost for Pernambut patients?', answer: 'At Indira Dental Clinic, root canal treatment costs ₹3,000-8,000, dental implants ₹25,000-45,000, and braces ₹30,000-80,000 with transparent pricing.' },
    { question: 'Who is the best dentist for Pernambut patients?', answer: 'Dr. Rockson Samuel at Indira Dental Clinic has 15+ years of experience and is highly trusted by Pernambut residents for all dental treatments.' },
    { question: 'How far is the dental clinic from Pernambut?', answer: 'Our clinic in Vellore is approximately 35 km from Pernambut, easily reachable within 45-50 minutes by road.' },
    { question: 'What dental services are available for Pernambut residents?', answer: 'We offer complete dental services including RCT, implants, braces, cosmetic dentistry, general dentistry, and pediatric care with latest technology.' }
  ]

  const reviews = [
    { name: 'Bharath Kumar', location: 'Pernambut', rating: 5, treatment: 'Dental Implants', text: 'Worth the trip from Pernambut! Dr. Rockson Samuel provided excellent care. Dental implants are perfect!', date: '2024-01-15' },
    { name: 'Malathi Devi', location: 'Pernambut', rating: 5, treatment: 'Root Canal', text: 'Best dentist for Pernambut patients! RCT was painless. Highly recommend this clinic.', date: '2024-01-10' },
    { name: 'Sundar Raj', location: 'Pernambut', rating: 5, treatment: 'Braces', text: 'My daughter got braces. Very professional service. Modern clinic with great facilities.', date: '2024-01-08' }
  ]

  const amenities = [
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet' },
    { icon: ParkingCircle, name: 'Free Parking', description: 'Ample parking space' },
    { icon: Coffee, name: 'Waiting Lounge', description: 'Comfortable area' },
    { icon: Car, name: 'Easy Access', description: 'From Pernambut' },
    { icon: CreditCard, name: 'Payment Options', description: 'All methods accepted' },
    { icon: Building, name: 'Modern Facility', description: 'State-of-the-art' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'India', href: '/in' }, { title: 'Tamil Nadu', href: '/in/tamil-nadu' }, { title: 'Vellore', href: '/in/tamil-nadu/vellore' }, { title: 'Pernambut', href: '/in/tamil-nadu/vellore/pernambut' }]} className="mb-8" />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Best Dentist and Dental Clinic in Pernambut, Vellore</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">Welcome to Indira Dental Clinic - serving Pernambut and surrounding areas with comprehensive dental treatments.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"><Shield className="w-8 h-8 text-teal-600 mb-2" /><span className="text-sm font-medium text-gray-700">Expert Care</span></div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"><Users className="w-8 h-8 text-teal-600 mb-2" /><span className="text-sm font-medium text-gray-700">15+ Years Experience</span></div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"><Award className="w-8 h-8 text-teal-600 mb-2" /><span className="text-sm font-medium text-gray-700">Quality Service</span></div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"><Clock className="w-8 h-8 text-teal-600 mb-2" /><span className="text-sm font-medium text-gray-700">Flexible Timings</span></div>
          </div>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Dental Services for Pernambut Patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ModernCard key={index} hover><ModernCardHeader><ModernCardTitle>{service.title}</ModernCardTitle></ModernCardHeader><ModernCardContent><p className="text-gray-600 mb-4">{service.description}</p><div className="mb-4"><span className="text-2xl font-bold text-teal-600">{service.price}</span></div><ul className="space-y-2 text-sm text-gray-600">{service.features.map((feature, i) => (<li key={i} className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />{feature}</li>))}</ul></ModernCardContent></ModernCard>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Expert Dentist</h2>
          <ModernCard><ModernCardContent className="py-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"><div className="relative"><Image src="/dr-rockson-samuel-best-dentist-vellore.jpg" alt="Dr. Rockson Samuel" width={400} height={400} className="rounded-lg shadow-lg" /></div><div><h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Rockson Samuel</h3><p className="text-lg text-teal-600 mb-4">BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach</p><p className="text-gray-600 mb-4">Experience: 15+ Years</p><div className="mb-6"><h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4><div className="flex flex-wrap gap-2"><span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Dental Implants</span><span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Root Canal Treatment</span><span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Cosmetic Dentistry</span><span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Orthodontics</span></div></div><div className="flex items-center space-x-4"><div className="flex items-center"><Star className="w-5 h-5 text-yellow-400 fill-current" /><span className="ml-1 text-gray-700">4.9/5 Rating</span></div><div className="flex items-center"><Users className="w-5 h-5 text-teal-600" /><span className="ml-1 text-gray-700">1000+ Happy Patients</span></div></div></div></div></ModernCardContent></ModernCard>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Clinic Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">{amenities.map((amenity, index) => (<ModernCard key={index} className="text-center p-4"><amenity.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" /><h3 className="font-semibold text-gray-900 mb-1">{amenity.name}</h3><p className="text-sm text-gray-600">{amenity.description}</p></ModernCard>))}</div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Patient Reviews from Pernambut</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{reviews.map((review, index) => (<ModernCard key={index} className="p-6"><div className="flex items-center mb-4"><div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4"><span className="text-teal-600 font-bold">{review.name.charAt(0)}</span></div><div><h4 className="font-semibold text-gray-900">{review.name}</h4><p className="text-sm text-gray-600">{review.location}</p></div></div><div className="flex mb-3">{[...Array(review.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />))}</div><p className="text-gray-700 mb-3">"{review.text}"</p><div className="flex items-center justify-between text-sm text-gray-500"><span>{review.treatment}</span><span>{review.date}</span></div></ModernCard>))}</div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">{faqs.map((faq, index) => (<ModernCard key={index} className="p-6"><h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></ModernCard>))}</div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Location & Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ModernCard><ModernCardHeader><ModernCardTitle className="flex items-center gap-2"><MapPin className="w-6 h-6 text-teal-600" />Clinic Address</ModernCardTitle></ModernCardHeader><ModernCardContent><p className="text-gray-700 mb-4">Indira Dental Clinic<br />Gandhi Nagar, Vellore<br />Tamil Nadu - 632001<br />India</p><div className="space-y-2"><div className="flex items-center"><Phone className="w-5 h-5 text-teal-600 mr-3" /><span className="text-gray-700">+91 70106 50063</span></div><div className="flex items-center"><Clock className="w-5 h-5 text-teal-600 mr-3" /><span className="text-gray-700">Mon-Sun: 9:00 AM - 9:00 PM</span></div></div></ModernCardContent></ModernCard>
            <ModernCard><ModernCardHeader><ModernCardTitle className="flex items-center gap-2"><Navigation className="w-6 h-6 text-teal-600" />How to Reach from Pernambut</ModernCardTitle></ModernCardHeader><ModernCardContent><div className="space-y-4"><div><h4 className="font-semibold text-gray-900 mb-2">Distance from Pernambut:</h4><p className="text-gray-700">Approximately 35 km</p></div><div><h4 className="font-semibold text-gray-900 mb-2">Travel Options:</h4><ul className="text-sm text-gray-700 space-y-1"><li>• By Car: 45-50 minutes</li><li>• By Bus: Regular buses available</li><li>• Free parking at clinic</li></ul></div></div></ModernCardContent></ModernCard>
          </div>
        </section>
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RelevantQAWidget title="Common Questions from Pernambut" questions={[{id:'1',title:'Best dental clinic near Pernambut?',slug:'best-dental-clinic-pernambut',excerpt:'Indira Dental Clinic in Vellore is the best choice.',helpfulVotes:45,views:1200,createdAt:'2023-12-20T10:30:00Z'},{id:'2',title:'Root canal cost for Pernambut patients?',slug:'root-canal-cost-pernambut',excerpt:'₹3,000-8,000 at our clinic.',helpfulVotes:52,views:1400,createdAt:'2023-12-18T14:15:00Z'}]} serviceName="dental care" />
            <section className="mb-12">
        <CompactServiceWidget title="Popular Services" description="Most requested by Pernambut patients." services={[{name:"Root Canal Treatment",slug:"root-canal-treatment",price:"₹3,000 - ₹8,000",duration:"1-2 hours"},{name:"Dental Implants",slug:"dental-implants",price:"₹25,000 - ₹45,000",duration:"2-3 hours"}]} ctaText="View All Services" ctaLink="/services" />
        </section>
          </div>
        </section>
        <section className="text-center mb-12">
          <ModernCard><ModernCardContent className="py-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Smile?</h2><p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Book your appointment today. Well connected for Pernambut residents.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"><Phone className="w-5 h-5 mr-2" />Book Appointment</Link><Link href="/services" className="inline-flex items-center justify-center px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors"><Navigation className="w-5 h-5 mr-2" />View Services</Link></div></ModernCardContent></ModernCard>
        </section>
        
        <PeopleAlsoSearchFor location="Pernambut" city="Vellore" />

        <CTAWidget title="Start Your Dental Journey Today" description="Join satisfied patients from Pernambut who trust Indira Dental Clinic." primaryAction={{text:"Book Free Consultation",href:"/contact"}} secondaryAction={{text:"Ask a Question",href:"/ask-the-dentist/submit"}} benefits={["15+ years experience","Modern equipment","Flexible payment plans","Well connected from Pernambut"]} showRating={true} showAvailability={true} />
      </div>
    </div>
  )
}

