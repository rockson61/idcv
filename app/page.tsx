import type { Metadata } from "next"
import { ModernHeroSection } from "@/components/sections/modern-hero-section"
import { ModernServicesSection } from "@/components/sections/modern-services-section"
import { ModernTestimonialsSection } from "@/components/sections/modern-testimonials-section"
import { ComprehensiveFAQSection } from "@/components/sections/comprehensive-faq-section"
import { RelevantQAWidget } from "@/components/widgets/relevant-qa-widget"
import { CompactServiceWidget } from "@/components/widgets/compact-service-widget"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { CheckCircle, Star, Shield, Clock, Users, Award, MapPin, Phone, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Best Dental Clinic in Vellore | Indira Dental Clinic | Expert Dentist Dr. Rockson Samuel',
  description: 'Indira Dental Clinic in Vellore offers world-class dental care with 50% lower costs. Expert dentist Dr. Rockson Samuel provides RCT, implants, braces, cosmetic dentistry. Book appointment now!',
  keywords: [
    "dentist Vellore", "dental clinic Vellore", "RCT Vellore", "braces Vellore", 
    "dental implants Vellore", "Dr Rockson Samuel", "best dentist Vellore", "teeth cleaning Vellore"
  ],
  openGraph: {
    title: "Indira Dental Clinic | Top Dentist in Vellore",
    description: "Expert dental care by Dr. Rockson Samuel. Specializing in RCT, Braces, Implants & Fillings.",
    url: "https://www.dentalclinicinvellore.in",
    siteName: "Indira Dental Clinic",
    locale: "en_IN",
    type: "website",
  },
}

export default function HomePage() {
  const features = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Dr. Rockson Samuel (BDS, PgDM, BDM) brings over 15 years of dental expertise and community leadership through DentalReach."
    },
    {
      icon: Star,
      title: "4.9/5 Patient Rating",
      description: "Consistently rated as one of the best dentists in Vellore with hundreds of satisfied patients."
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art equipment including digital X-rays, laser dentistry, and modern implant systems."
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Convenient appointment slots including weekends and emergency dental care services."
    },
    {
      icon: Users,
      title: "Patient-Centered Care",
      description: "Personalized treatment plans tailored to each patient's unique dental needs and budget."
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Services",
      description: "Complete dental care from routine checkups to complex procedures like implants and orthodontics."
    }
  ]

  const quickServices = [
    {
      title: "Root Canal Treatment",
      description: "Pain-free RCT with modern techniques",
      price: "₹3,000 - ₹8,000",
      link: "/services/root-canal-treatment"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solution",
      price: "₹25,000 - ₹45,000",
      link: "/services/dental-implants"
    },
    {
      title: "Orthodontic Braces",
      description: "Straighten teeth with modern braces",
      price: "₹30,000 - ₹80,000",
      link: "/services/orthodontics"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile completely",
      price: "₹5,000 - ₹25,000",
      link: "/services/cosmetic-dentistry"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
          ]}
        />

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Best Dental Clinic in <span className="text-teal-600">Vellore</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Experience world-class dental care with Dr. Rockson Samuel at Indira Dental Clinic. 
            Save 50% on dental treatments with our expert care and modern technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                View Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">500+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">4.9/5</div>
              <div className="text-gray-600">Patient Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">50%</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Indira Dental Clinic?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience world-class dental care with Dr. Rockson Samuel, combining years of expertise 
              with cutting-edge technology to deliver exceptional results for every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ModernCard key={index} hover className="h-full">
                <ModernCardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <ModernCardTitle className="text-xl">{feature.title}</ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </ModernCardContent>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* Quick Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Popular Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Get the dental care you need with our comprehensive range of services at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <ModernCard key={index} hover className="h-full group">
                <ModernCardHeader>
                  <ModernCardTitle className="text-lg">{service.title}</ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-teal-600 mb-4">{service.price}</div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </ModernCardContent>
              </ModernCard>
            ))}
        </div>
      </section>

        {/* Doctor Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Dentist
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Dr. Rockson Samuel brings over 15 years of experience in providing exceptional dental care.
            </p>
          </div>

          <ModernCard className="max-w-4xl mx-auto">
            <ModernCardContent className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <Image
                    src="/dr-rockson-samuel-best-dentist-vellore.jpg"
                    alt="Dr. Rockson Samuel"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Rockson Samuel</h3>
                  <p className="text-lg text-teal-600 mb-4">BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach</p>
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

        {/* Clinic Location */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conveniently located in the heart of Vellore with modern facilities and easy accessibility.
            </p>
          </div>

          <ModernCard className="max-w-4xl mx-auto">
            <ModernCardContent className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-teal-600 mr-2" />
                    Clinic Address
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Indira Dental Clinic<br />
                    3rd Floor, 54, Katpadi Main Rd<br />
                    Gandhi Nagar, Vellore<br />
                    Tamil Nadu - 632006<br />
                    India
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-teal-600 mr-3" />
                      <a href="tel:7010650063" className="text-gray-700 hover:text-teal-600">+91 70106 50063</a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-teal-600 mr-3" />
                      <span className="text-gray-700">Mon-Sun: 9:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2784186240674!2d79.1369615!3d12.9540278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad394e9843620f%3A0xc7a4b2fb0991e086!2sIndira%20Dental%20Clinic%20%7C%20Dr%20Rockson%20Samuel%20%7C%20Top%20Dentist%20in%20Vellore%20for%20RCT%2C%20Braces%2C%20Implants%2C%20%26%20Dental%20Fillings!5e0!3m2!1sen!2sin!4v1742776988474!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Indira Dental Clinic Location"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>

               {/* Comprehensive FAQ Section */}
               <ComprehensiveFAQSection locationName="Vellore" />

               {/* Related Q&A Widget */}
               <section className="mb-16">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                   <RelevantQAWidget
                     title="Popular Dental Questions"
                     questions={[
                       {
                         id: '1',
                         title: 'What causes tooth sensitivity?',
                         slug: 'tooth-sensitivity-causes-treatment',
                         excerpt: 'Tooth sensitivity occurs when the protective enamel layer wears down, exposing the underlying dentin.',
                         helpfulVotes: 55,
                         views: 1500,
                         createdAt: '2023-12-26T11:45:00Z'
                       },
                       {
                         id: '2',
                         title: 'How long do dental implants last?',
                         slug: 'dental-implants-longevity',
                         excerpt: 'Dental implants can last a lifetime with proper care and maintenance.',
                         helpfulVotes: 42,
                         views: 1200,
                         createdAt: '2023-12-25T14:30:00Z'
                       },
                       {
                         id: '3',
                         title: 'Is root canal treatment painful?',
                         slug: 'root-canal-treatment-pain',
                         excerpt: 'Modern root canal treatment is virtually painless with advanced anesthesia and techniques.',
                         helpfulVotes: 45,
                         views: 1100,
                         createdAt: '2023-12-24T09:20:00Z'
                       }
                     ]}
                     serviceName="dental care"
                   />

                   <CompactServiceWidget
                     title="Popular Dental Services"
                     description="Most requested dental treatments at Indira Dental Clinic."
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
          <ModernCard className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <ModernCardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
              <p className="text-xl mb-6">
                Book your appointment today and experience the best dental care with 50% savings.
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
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>
      </div>
    </main>
  )
}