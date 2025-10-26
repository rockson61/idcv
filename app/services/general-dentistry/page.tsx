import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Phone, Calendar, Clock, Star, Shield, Heart, Zap, MessageCircle, AlertTriangle, Users, Award, Target } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ServiceReviews } from "@/components/ui/service-reviews"
import { generateServiceReviews } from "@/lib/review-data"

const reviews = generateServiceReviews('General Dentistry', 'default')

export const metadata: Metadata = {
  title: "General Dentistry Services in Vellore | Comprehensive Dental Care | Dr. Rockson Samuel",
  description:
    "Complete general dentistry services in Vellore by Dr. Rockson Samuel. Dental checkups, cleanings, fillings, extractions, preventive care. 15+ years experience. Book: 7010650063",
  keywords: [
    "general dentistry vellore",
    "dental checkup vellore",
    "teeth cleaning vellore",
    "dental fillings vellore",
    "preventive dentistry",
    "family dentist vellore",
    "Dr Rockson Samuel",
    "dental examination vellore",
  ],
  openGraph: {
    title: "General Dentistry Services in Vellore | Indira Dental Clinic",
    description: "Comprehensive general dentistry services including checkups, cleanings, and preventive care.",
    images: [
      {
        url: "/dental-checkup.png",
        width: 1200,
        height: 630,
        alt: "General Dentistry Services at Indira Dental Clinic",
      },
    ],
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/general-dentistry',
  },
}

const services = [
  {
    title: "Dental Checkups & Examinations",
    description: "Comprehensive oral health examinations to detect problems early and maintain optimal dental health.",
    image: "/dental-checkup.png",
    price: "₹500 - ₹800",
    duration: "30-45 minutes",
    href: "/services/general-dentistry/check-ups",
    features: ["Digital X-rays", "Oral Cancer Screening", "Gum Health Assessment", "Treatment Planning"],
  },
  {
    title: "Professional Teeth Cleaning",
    description: "Deep cleaning to remove plaque, tartar, and stains for healthier teeth and fresher breath.",
    image: "/teeth-cleaning.jpg",
    price: "₹800 - ₹1,200",
    duration: "45-60 minutes",
    href: "/services/preventive-dentistry",
    features: ["Plaque Removal", "Tartar Scaling", "Polishing", "Fluoride Treatment"],
  },
  {
    title: "Dental Fillings",
    description: "Tooth-colored composite fillings to restore cavities and maintain natural tooth appearance.",
    image: "/dental-fillings.jpg",
    price: "₹1,000 - ₹2,500",
    duration: "30-60 minutes",
    href: "/services/restorative-dentistry/dental-fillings",
    features: ["Composite Fillings", "Amalgam Fillings", "Glass Ionomer", "Cavity Prevention"],
  },
  {
    title: "Tooth Extractions",
    description: "Safe and comfortable tooth removal procedures when restoration is not possible.",
    image: "/tooth-extraction.jpg",
    price: "₹800 - ₹2,000",
    duration: "20-45 minutes",
    href: "/services/oral-surgery/tooth-extraction",
    features: ["Simple Extractions", "Surgical Extractions", "Wisdom Teeth", "Pain Management"],
  },
]

const problems = [
  "Tooth pain or sensitivity",
  "Bleeding or swollen gums",
  "Bad breath (halitosis)",
  "Cavities and tooth decay",
  "Gum disease (gingivitis)",
  "Loose or shifting teeth",
  "Jaw pain or clicking",
  "Stained or discolored teeth",
]

const benefits = [
  {
    icon: Shield,
    title: "Early Detection",
    description: "Catch dental problems early before they become serious and expensive",
  },
  {
    icon: Heart,
    title: "Overall Health",
    description: "Good oral health is linked to better heart health and overall wellbeing",
  },
  {
    icon: Zap,
    title: "Cost Effective",
    description: "Preventive care costs 50-70% less than treating advanced dental problems",
  },
  {
    icon: Star,
    title: "Pain Prevention",
    description: "Regular checkups prevent painful dental emergencies and toothaches",
  },
]

const process = [
  { step: "1", title: "Examination", description: "Comprehensive oral health assessment" },
  { step: "2", title: "Diagnosis", description: "Identify any dental issues or concerns" },
  { step: "3", title: "Treatment Plan", description: "Personalized care recommendations" },
  { step: "4", title: "Treatment", description: "Professional dental care delivery" },
  { step: "5", title: "Follow-up", description: "Ongoing monitoring and prevention" },
]

const faqs = [
  {
    question: "How often should I visit the dentist for a checkup?",
    answer: "We recommend visiting every 6 months for routine checkups and cleanings. However, patients with gum disease or other dental issues may need more frequent visits every 3-4 months.",
  },
  {
    question: "Is teeth cleaning painful?",
    answer: "Professional teeth cleaning is generally painless. You may feel slight discomfort if you have sensitive teeth or heavy tartar buildup, but we use gentle techniques and can apply numbing gel if needed.",
  },
  {
    question: "What is included in a dental checkup?",
    answer: "A comprehensive dental checkup includes visual examination of all teeth and gums, oral cancer screening, digital X-rays (if needed), gum health assessment, cavity detection, and personalized treatment planning.",
  },
  {
    question: "Are composite fillings better than silver fillings?",
    answer: "Composite (tooth-colored) fillings are more aesthetic and bond directly to teeth, preserving more tooth structure. They're ideal for visible teeth. Silver (amalgam) fillings are stronger and more cost-effective for back teeth.",
  },
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we work with most major dental insurance providers. Please bring your insurance details to your appointment and we'll help you maximize your benefits.",
  },
]

const relatedQuestions = [
  {
    title: "How can I prevent cavities naturally?",
    href: "/ask-the-dentist",
    excerpt: "Learn about natural cavity prevention methods and daily oral care routines.",
  },
  {
    title: "What causes bad breath and how to fix it?",
    href: "/ask-the-dentist",
    excerpt: "Discover the common causes of halitosis and effective solutions.",
  },
  {
    title: "Are regular dental X-rays safe?",
    href: "/ask-the-dentist",
    excerpt: "Understand the safety of digital dental X-rays and radiation exposure.",
  },
]

const relatedServices = [
  {
    title: "Root Canal Treatment",
    href: "/services/root-canal-treatment",
    description: "Save infected teeth with painless RCT",
  },
  {
    title: "Dental Implants",
    href: "/services/dental-implants",
    description: "Permanent replacement for missing teeth",
  },
  {
    title: "Cosmetic Dentistry",
    href: "/services/cosmetic-dentistry",
    description: "Enhance your smile's appearance",
  },
]

export default function GeneralDentistryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <SectionContainer className="pt-8">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'General Dentistry', href: '/services/general-dentistry' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              <Shield className="w-4 h-4 inline mr-1" />
              Comprehensive Oral Care
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              General Dentistry Services in Vellore
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Complete dental care for the whole family. From routine checkups to advanced treatments, Dr. Rockson Samuel provides comprehensive general dentistry services to maintain your oral health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Checkup
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600" asChild>
                <Link href="https://wa.me/917010650063?text=I%20need%20dental%20checkup" target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/dental-checkup.png"
              alt="General Dentistry Services at Indira Dental Clinic Vellore"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Problems We Solve */}
      <SectionContainer className="py-16 bg-gradient-to-r from-red-50/50 to-orange-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Dental Problems We Treat</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't ignore these warning signs. Early treatment prevents serious complications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <GlassCard key={index} className="p-6 text-center">
              <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <p className="text-gray-800 font-medium">{problem}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* USP Section */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our General Dentistry?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <GlassCard key={index} className="text-center p-6">
              <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Sub-Services Grid */}
      <SectionContainer className="py-16 bg-gradient-to-r from-blue-50/50 to-teal-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our General Dentistry Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care for all your oral health needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} className="group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Price</div>
                    <div className="font-semibold text-blue-600">{service.price}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-medium">{service.duration}</div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700" asChild>
                  <Link href={service.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Process Section */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Dental Care Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Systematic approach to ensure comprehensive care and optimal results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {process.map((step, index) => (
            <GlassCard key={index} className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Reviews Section */}
      <SectionContainer className="py-16 bg-gradient-to-r from-yellow-50/50 to-orange-50/50">
        <ServiceReviews 
          serviceName="General Dentistry" 
          reviews={reviews}
          averageRating={5.0}
          totalReviews={687}
        />
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about general dentistry answered by Dr. Rockson Samuel
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-lg font-bold mb-3 text-blue-700">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Ask the Dentist Section */}
      <SectionContainer className="py-16 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Questions from Patients</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real questions answered by Dr. Rockson Samuel
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {relatedQuestions.map((q, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-teal-700">{q.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{q.excerpt}</p>
              <Link href={q.href} className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                Read Answer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600">
            <Link href="/ask-the-dentist">
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask Your Question
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Related Services */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Dental Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our other specialized dental treatments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.href} className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Final CTA */}
      <SectionContainer className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Dental Checkup Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait for pain to visit the dentist. Preventive care keeps your smile healthy and saves money on future treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call: 7010650063
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Calendar className="mr-2 h-5 w-5" />
              Book Online
            </Button>
          </div>
          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-1 fill-yellow-400" />
              5.0/5 Rating
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-1" />
              5000+ Patients
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-1" />
              15+ Years
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
