import Link from "next/link"
import type { Metadata } from "next"
import { MapPin, Star, Phone, Clock, CheckCircle, Shield, Award, Users, Stethoscope, Calendar } from "lucide-react"

import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: 'Find Dentist Near Me | Best Dental Clinics in Your Area | Indira Dental Clinic',
  description: 'Find the best dentist near you. Indira Dental Clinic serves patients from all over India. Expert dental care with 50% lower costs. Book appointment now!',
  keywords: ['dentist near me', 'find dentist', 'local dental clinic', 'nearby dentist', 'dental services near me'],
}

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Vellore",
    rating: 5,
    text: "Dr. Rockson Samuel performed my root canal treatment with such precision that I felt no pain at all. The clinic is modern and well-equipped. Highly recommended!",
    treatment: "Root Canal Treatment"
  },
  {
    name: "Priya Venkatesh",
    location: "Katpadi",
    rating: 5,
    text: "I got my braces from Indira Dental Clinic. The staff was very professional and Dr. Samuel explained everything clearly. The pricing was also very reasonable compared to other clinics.",
    treatment: "Orthodontic Braces"
  },
  {
    name: "Sundar Raman",
    location: "Gandhi Nagar",
    rating: 5,
    text: "I had severe dental anxiety but Dr. Rockson's gentle approach made my dental implant procedure completely comfortable. The clinic is state-of-the-art with the latest equipment.",
    treatment: "Dental Implants"
  },
  {
    name: "Lakshmi Narayanan",
    location: "Sathuvachari",
    rating: 4,
    text: "Got my teeth whitening done at Indira Dental Clinic. Great results and the staff was very friendly. The only reason for 4 stars is the waiting time, but the treatment quality was excellent.",
    treatment: "Teeth Whitening"
  },
]

const faqItems = [
  {
    question: "How do I find the best dentist near me in Vellore?",
    answer: "To find the best dentist near you in Vellore, look for credentials, patient reviews, range of services, and modern equipment. Dr. Rockson Samuel at Indira Dental Clinic is recognized as one of Vellore's top dentists, with a clinic in Katpadi Main Road. The clinic offers comprehensive dental care with state-of-the-art technology and personalized treatment plans."
  },
  {
    question: "What services does Indira Dental Clinic offer?",
    answer: "Indira Dental Clinic offers a comprehensive range of dental services including root canal treatment, dental implants, braces and orthodontics, teeth whitening, dental fillings, crowns and bridges, dentures, gum treatment, pediatric dentistry, and emergency dental care. Dr. Rockson Samuel specializes in painless root canal treatments and advanced implantology."
  },
  {
    question: "How much does a dental check-up cost in Vellore?",
    answer: "At Indira Dental Clinic in Vellore, a comprehensive dental check-up costs ₹300, but is often offered free with any paid treatment. This includes a thorough examination, consultation with Dr. Rockson Samuel, and treatment planning. We believe in transparent pricing with no hidden costs."
  },
  {
    question: "Is Dr. Rockson Samuel available for emergency dental care?",
    answer: "Yes, Dr. Rockson Samuel at Indira Dental Clinic provides emergency dental care services in Vellore. The clinic is open from 10 AM to 8 PM on weekdays and Saturdays, and from 10 AM to 1:30 PM on Sundays. For dental emergencies, you can call 7010650063 to schedule an immediate appointment."
  },
  {
    question: "Does Indira Dental Clinic accept insurance?",
    answer: "Yes, Indira Dental Clinic accepts most major dental insurance plans. We also offer flexible payment options and transparent pricing to make quality dental care accessible to everyone in Vellore. Please contact our clinic at 7010650063 for specific information about your insurance coverage."
  },
]

// Tamil Nadu cities with proper semantic links
const tamilNaduCities = [
  { name: "Vellore", link: "/in/tamil-nadu/vellore", isMainClinic: true },
  { name: "Chennai", link: "/in/tamil-nadu/chennai" },
  { name: "Coimbatore", link: "/in/tamil-nadu/coimbatore" },
  { name: "Madurai", link: "/in/tamil-nadu/madurai" },
  { name: "Tiruchirappalli", link: "/in/tamil-nadu/tiruchirappalli" },
  { name: "Salem", link: "/in/tamil-nadu/salem" },
  { name: "Tiruppur", link: "/in/tamil-nadu/tiruppur" },
  { name: "Erode", link: "/in/tamil-nadu/erode" },
  { name: "Thoothukudi", link: "/in/tamil-nadu/thoothukudi" },
  { name: "Tirunelveli", link: "/in/tamil-nadu/tirunelveli" },
  { name: "Hosur", link: "/in/tamil-nadu/hosur" },
  { name: "Nagercoil", link: "/in/tamil-nadu/nagercoil" },
]

// Dental services with proper semantic links
const dentalServices = [
  {
    category: "General Dentistry",
    services: [
      { name: "Dental Check-up", link: "/services/general-dentistry/check-ups" },
      { name: "Dental Fillings", link: "/services/general-dentistry/fillings" },
      { name: "Teeth Cleaning", link: "/services/general-dentistry/teeth-cleaning" },
      { name: "Emergency Dental Care", link: "/services/emergency-dentistry" },
    ],
  },
  {
    category: "Cosmetic Dentistry",
    services: [
      { name: "Teeth Whitening", link: "/services/cosmetic-dentistry/teeth-whitening" },
      { name: "Dental Veneers", link: "/services/cosmetic-dentistry/veneers" },
      { name: "Smile Makeover", link: "/services/cosmetic-dentistry/smile-makeover" },
      { name: "Dental Bonding", link: "/services/cosmetic-dentistry/bonding" },
    ],
  },
  {
    category: "Restorative Dentistry",
    services: [
      { name: "Dental Implants", link: "/services/dental-implants" },
      { name: "Root Canal Treatment", link: "/services/root-canal-treatment" },
      { name: "Crowns and Bridges", link: "/services/restorative-dentistry/crowns" },
      { name: "Dentures", link: "/services/dentures" },
    ],
  },
  {
    category: "Orthodontics",
    services: [
      { name: "Traditional Braces", link: "/services/orthodontics/traditional-braces" },
      { name: "Ceramic Braces", link: "/services/orthodontics" },
      { name: "Invisalign", link: "/services/orthodontics/invisalign" },
      { name: "Clear Aligners", link: "/services/orthodontics/invisible-aligners" },
    ],
  },
  {
    category: "Specialized Care",
    services: [
      { name: "Pediatric Dentistry", link: "/services/pediatric-dentistry/childrens-dentistry" },
      { name: "Periodontics", link: "/services/periodontics" },
      { name: "Oral Surgery", link: "/services/oral-surgery" },
      { name: "Endodontics", link: "/services/endodontics" },
    ],
  },
]

export default function DentistNearMePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Dentist Near Me', href: '/dentist-near-me' },
          ]}
        />

        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Find the Best Dentist Near You
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Looking for a trusted dentist near you? Indira Dental Clinic, led by Dr. Rockson Samuel, 
            provides comprehensive dental care with the latest technology and a gentle touch. 
            Save 50% on dental treatments compared to other cities.
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
              href="/dentist-near-me/locations"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Find Locations
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Indira Dental Clinic?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ModernCard className="text-center p-6">
              <Star className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Highly Rated</h3>
              <p className="text-gray-600">4.9/5 average rating from 500+ patient reviews</p>
            </ModernCard>
            <ModernCard className="text-center p-6">
              <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Care</h3>
              <p className="text-gray-600">Dr. Rockson Samuel with 15+ years of experience</p>
            </ModernCard>
            <ModernCard className="text-center p-6">
              <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">50% Savings</h3>
              <p className="text-gray-600">Significantly lower costs than other cities</p>
            </ModernCard>
        </div>
      </section>

        {/* Our Dental Services */}
      <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Dental Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dentalServices.map((category, index) => (
              <ModernCard key={index} hover className="group">
                <ModernCardHeader>
                  <ModernCardTitle className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-teal-600" />
                    {category.category}
                  </ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link
                          href={service.link}
                          className="text-teal-600 hover:text-teal-700 hover:underline text-sm"
                        >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                </ModernCardContent>
              </ModernCard>
          ))}
        </div>
      </section>

        {/* Locations */}
      <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Clinics Across Tamil Nadu</h2>
          <p className="text-center text-gray-700 mb-8">
            Indira Dental Clinic has multiple locations across Tamil Nadu to serve you better. 
            Find a dentist in these cities:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tamilNaduCities.map((city) => (
            <Link
              href={city.link}
              key={city.name}
                className={`p-4 rounded-lg border transition-all hover:shadow-md ${city.isMainClinic ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-teal-300"}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{city.name}</h3>
                  <MapPin className={`h-5 w-5 ${city.isMainClinic ? "text-teal-600" : "text-gray-500"}`} />
              </div>
              {city.isMainClinic && (
                  <span className="inline-block mt-2 text-sm bg-teal-600 text-white px-2 py-1 rounded">Main Clinic</span>
              )}
              <p className="mt-2 text-sm text-gray-600">View {city.name} Dental Clinic</p>
            </Link>
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
                  <img
                    src="/professional-dentist-portrait.png"
                    alt="Dr. Rockson Samuel"
                    className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                  />
                </div>
            <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Rockson Samuel</h3>
                  <p className="text-lg text-teal-600 mb-4">BDS, MDS (Oral & Maxillofacial Surgery)</p>
                  <p className="text-gray-600 mb-4">Experience: 15+ Years</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Dental Implants', 'Root Canal Treatment', 'Cosmetic Dentistry', 'Orthodontics'].map((spec, index) => (
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

        {/* Patient Reviews */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Patient Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((review, index) => (
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
                <div className="text-sm text-gray-500">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs">{review.treatment}</span>
          </div>
              </ModernCard>
            ))}
        </div>
      </section>

        {/* FAQs */}
      <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

        {/* CTA Section */}
        <section className="text-center">
          <ModernCard className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <ModernCardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Dentist?</h2>
              <p className="text-xl mb-6">
                Book an appointment today and experience the best dental care with 50% savings.
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
                  href="/dentist-near-me/locations"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Locations
            </Link>
          </div>
            </ModernCardContent>
          </ModernCard>
      </section>
        </div>
    </div>
  )
}