import React from 'react'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle, Phone, Calendar, MapPin, Star, Award, Users, Shield, Clock } from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
  category?: string
}

interface ComprehensiveFAQSectionProps {
  locationName?: string
}

export function ComprehensiveFAQSection({ locationName = "Vellore" }: ComprehensiveFAQSectionProps) {
  const faqs: FAQItem[] = [
    {
      question: "How often should I visit the dentist?",
      answer: "Most dental professionals recommend visiting the dentist every six months for a checkup and cleaning. However, some patients may need more frequent visits depending on their oral health needs. At Indira Dental Clinic, we customize your visit frequency based on your individual dental health requirements.",
      category: "General Care"
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer: "If you experience a dental emergency such as severe pain, a broken tooth, or an infection, contact Indira Dental Clinic immediately at 7010650063. We offer emergency dental services to address urgent dental issues and provide prompt relief for dental emergencies in Vellore.",
      category: "Emergency Care"
    },
    {
      question: "How long does a dental implant procedure take?",
      answer: "The dental implant process typically takes several months from start to finish. This includes the initial consultation, implant placement surgery, healing period, and final restoration. The exact timeline varies based on individual factors. Dr. Rockson Samuel will provide a detailed timeline during your consultation.",
      category: "Dental Implants"
    },
    {
      question: "Is root canal treatment painful?",
      answer: "Modern root canal procedures are much more comfortable than their reputation suggests. With local anesthesia and advanced techniques, most patients experience little to no pain during the procedure. At Indira Dental Clinic, we use the latest pain management techniques to ensure your comfort.",
      category: "Root Canal Treatment"
    },
    {
      question: "How can I improve my smile?",
      answer: "There are many options for enhancing your smile, including teeth whitening, veneers, bonding, and orthodontic treatments. During a consultation at Indira Dental Clinic, Dr. Rockson Samuel will assess your needs and recommend the most appropriate treatments to achieve your desired smile.",
      category: "Cosmetic Dentistry"
    },
    {
      question: "What are the best dental clinics in Vellore?",
      answer: "Indira Dental Clinic is recognized as one of the best dental clinics in Vellore, offering top-notch services for patients seeking quality dental care. Dr. Rockson Samuel provides comprehensive dental services including root canal treatment, braces, implants, and dental fillings with state-of-the-art facilities.",
      category: "About Our Clinic"
    },
    {
      question: "How much do dental treatments cost in Vellore?",
      answer: "The cost of dental procedures at Indira Dental Clinic varies based on treatment type: Dental Implants (₹30,000 - ₹60,000), Root Canal Treatment (₹5,000 - ₹12,000), Braces (₹25,000 - ₹80,000), and Teeth Whitening (₹5,000 - ₹15,000). We offer competitive pricing and 50% savings compared to other cities.",
      category: "Pricing"
    },
    {
      question: "What services does Indira Dental Clinic offer?",
      answer: "We provide a comprehensive range of dental services including General Dentistry (checkups, fillings, preventive care), Cosmetic Dentistry (teeth whitening, veneers, crowns), Restorative Dentistry (implants, bridges, root canal treatment), and Emergency Dental Care for urgent issues like toothaches or broken teeth.",
      category: "Services"
    },
    {
      question: "Where is Indira Dental Clinic located?",
      answer: "Indira Dental Clinic is conveniently located at 3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu 632006. Our central location makes us accessible to patients from all areas of Vellore, and we're easily reachable by public transport.",
      category: "Location"
    },
    {
      question: "How do I book an appointment at Indira Dental Clinic?",
      answer: "Booking an appointment is easy! You can call us at 7010650063, visit our contact page, or schedule online. We offer flexible appointment slots including weekends and emergency dental care services to accommodate your busy schedule.",
      category: "Appointments"
    }
  ]

  const serviceCategories = [
    {
      title: "General Dentistry",
      description: "Regular checkups, cleanings, and preventive care",
      icon: Shield,
      link: "/services/general-dentistry"
    },
    {
      title: "Cosmetic Dentistry", 
      description: "Teeth whitening, veneers, and smile makeovers",
      icon: Star,
      link: "/services/cosmetic-dentistry"
    },
    {
      title: "Restorative Dentistry",
      description: "Dental implants, bridges, and root canal treatment",
      icon: Award,
      link: "/services/restorative-dentistry"
    },
    {
      title: "Emergency Care",
      description: "Quick relief for dental emergencies",
      icon: Clock,
      link: "/services/emergency-dentistry"
    }
  ]

  const locationServices = [
    "Dentist in Vellore", "Dentist in Katpadi", "Dentist in Gandhi Nagar", 
    "Dentist in Sathuvachari", "Dentist in Bagayam", "Dentist in Ranipet"
  ]

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-teal-600 text-teal-700 text-sm font-semibold">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Dental Clinics in {locationName}: Find the Right Dentist for Your Needs
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {locationName} is home to some of the best dental clinics, offering top-notch services for patients seeking quality dental care. 
              Whether you're looking for a dentist in {locationName} for routine checkups, dental implants, or cosmetic dentistry, 
              this guide will help you find the best options available.
            </p>
          </div>

          {/* Why Choose Vellore Section */}
          <div className="mb-12">
            <ModernCard className="bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
              <ModernCardContent className="py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose a Dental Clinic in {locationName}?</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {locationName} is known for its top dentists and advanced dental care facilities. The city offers affordable dental care 
                  without compromising on quality. Many clinics use cutting-edge technology for treatments like dental implants, 
                  root canal therapy, and cosmetic dental procedures.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At Indira Dental Clinic, we combine years of expertise with modern dental technology to provide exceptional care. 
                  Our central location in {locationName} makes us accessible to patients from all areas, and our comprehensive range of 
                  services means you can address all your dental needs under one roof.
                </p>
              </ModernCardContent>
            </ModernCard>
          </div>

          {/* Services We Offer */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Services We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((service, index) => (
                <ModernCard key={index} hover className="h-full text-center">
                  <ModernCardHeader>
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <ModernCardTitle className="text-lg">{service.title}</ModernCardTitle>
                  </ModernCardHeader>
                  <ModernCardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                    >
                      Learn More
                    </Link>
                  </ModernCardContent>
                </ModernCard>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">FAQs on Dental Care</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-teal-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Dental Knowledge Hub */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dental Knowledge Hub - Keyword Clusters</h3>
            
            {/* Location Services */}
            <ModernCard className="mb-6">
              <ModernCardContent className="py-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Find a Dentist Near You</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {locationServices.map((location, index) => (
                    <Link
                      key={index}
                      href={`/in/tamil-nadu/${location.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center justify-center px-3 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium hover:bg-teal-100 transition-colors"
                    >
                      {location}
                    </Link>
                  ))}
                </div>
              </ModernCardContent>
            </ModernCard>

            {/* Specialized Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModernCard>
                <ModernCardContent className="py-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Specialized Dental Services</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Emergency Dental Care</li>
                    <li>• Children's Dentistry</li>
                    <li>• Geriatric Dentistry</li>
                    <li>• Sedation Dentistry</li>
                    <li>• Laser Dentistry</li>
                    <li>• Digital Dentistry</li>
                    <li>• Dental Tourism</li>
                    <li>• Full Mouth Rehabilitation</li>
                  </ul>
                </ModernCardContent>
              </ModernCard>

              <ModernCard>
                <ModernCardContent className="py-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Top-Rated Specialists</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Best Dental Clinic in {locationName}</li>
                    <li>• Top Dentist in {locationName}</li>
                    <li>• Best Implant Dentist</li>
                    <li>• Root Canal Specialist</li>
                    <li>• Orthodontist in {locationName}</li>
                    <li>• Cosmetic Dentist</li>
                    <li>• Pediatric Dentist</li>
                    <li>• Oral Surgeon</li>
                  </ul>
                </ModernCardContent>
              </ModernCard>
            </div>
          </div>

          {/* Cost Information */}
          <div className="mb-12">
            <ModernCard className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
              <ModernCardContent className="py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost of Dental Treatments in {locationName}</h3>
                <p className="text-gray-700 mb-6">
                  The cost of dental procedures at Indira Dental Clinic varies based on treatment type. We offer competitive pricing 
                  and significant savings compared to other cities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-xl font-bold text-teal-600">₹30,000 - ₹60,000</div>
                    <div className="text-gray-600">Dental Implants</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-xl font-bold text-teal-600">₹5,000 - ₹12,000</div>
                    <div className="text-gray-600">Root Canal Treatment</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-xl font-bold text-teal-600">₹25,000 - ₹80,000</div>
                    <div className="text-gray-600">Braces</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-xl font-bold text-teal-600">₹5,000 - ₹15,000</div>
                    <div className="text-gray-600">Teeth Whitening</div>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <ModernCard className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
              <ModernCardContent className="py-8">
                <h3 className="text-2xl font-bold mb-4">Book Your Appointment Today</h3>
                <p className="text-lg mb-6">
                  At Indira Dental Clinic, we make it easy to schedule your dental appointment. Whether you need a regular 
                  dental checkup or specialized treatment, scheduling in advance ensures timely care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-teal-600">
                    <Link href="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: 7010650063
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                    <Link href="/services">
                      <Calendar className="w-5 h-5 mr-2" />
                      View All Services
                    </Link>
                  </Button>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </div>
      </section>
    </>
  )
}

export default ComprehensiveFAQSection
