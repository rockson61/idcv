import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, MapPin, Star, Heart, Shield, Zap, Users, Award, CheckCircle, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GlassPanel } from "@/components/ui/glass-panel"
import { SectionContainer } from "@/components/ui/section-container"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ServiceReviews } from "@/components/ui/service-reviews"
import { generateServiceReviews } from "@/lib/review-data"

const reviews = generateServiceReviews('Periodontics', 'default')

export const metadata: Metadata = {
  title: 'Periodontics & Gum Disease Treatment in Vellore | Expert Gum Care | Indira Dental Clinic',
  description: 'Expert periodontics treatment in Vellore. Gum disease treatment, scaling, root planing. Advanced gum care by Dr. Rockson Samuel. 50% lower treatment costs.',
  keywords: ['periodontics vellore', 'gum disease treatment', 'gum care', 'scaling vellore', 'root planing'],
}

export default function PeriodonticsPage() {
  const services = [
    {
      name: "Scaling & Root Planing",
      price: "₹2,500 - ₹5,000",
      duration: "60-90 minutes",
      description: "Deep cleaning to remove plaque and tartar below the gum line",
      features: ["Deep cleaning", "Bacteria removal", "Smooth root surfaces", "Reduced inflammation"],
      image: "/scaling-root-planing.jpg",
    },
    {
      name: "Gum Disease Treatment",
      price: "₹3,000 - ₹8,000",
      duration: "45-75 minutes",
      description: "Comprehensive treatment for gingivitis and periodontitis",
      features: ["Complete assessment", "Customized treatment", "Infection control", "Ongoing monitoring"],
      image: "/gum-disease-treatment.jpg",
    },
    {
      name: "Gum Grafting",
      price: "₹8,000 - ₹15,000",
      duration: "90-120 minutes",
      description: "Surgical procedure to restore receded gum tissue",
      features: ["Tissue restoration", "Root coverage", "Improved aesthetics", "Long-term stability"],
      image: "/gum-grafting.jpg",
    },
    {
      name: "Periodontal Maintenance",
      price: "₹1,500 - ₹3,000",
      duration: "45-60 minutes",
      description: "Regular maintenance therapy for periodontal health",
      features: ["Preventive care", "Regular monitoring", "Professional cleaning", "Oral hygiene guidance"],
      image: "/periodontal-maintenance.jpg",
    },
    {
      name: "Crown Lengthening",
      price: "₹5,000 - ₹12,000",
      duration: "60-90 minutes",
      description: "Surgical procedure to expose more tooth structure",
      features: ["Improved crown fit", "Better aesthetics", "Functional improvement", "Precise technique"],
      image: "/dental-crown-steps.png",
    },
    {
      name: "Pocket Reduction Surgery",
      price: "₹6,000 - ₹15,000",
      duration: "90-120 minutes",
      description: "Surgical treatment to reduce deep periodontal pockets",
      features: ["Pocket elimination", "Bone recontouring", "Improved access", "Enhanced healing"],
      image: "/gum-treatment.jpg",
    },
  ]

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Improved Gum Health",
      description: "Restore healthy gums and prevent further periodontal disease progression",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Prevent Tooth Loss",
      description: "Early intervention to save teeth and maintain oral function",
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: "Advanced Techniques",
      description: "Latest periodontal treatment methods for optimal results",
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Personalized Care",
      description: "Customized treatment plans based on individual needs",
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: "Expert Specialist",
      description: "Experienced periodontist with advanced training",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-500" />,
      title: "Long-term Results",
      description: "Sustainable periodontal health with proper maintenance",
    },
  ]

  const diseaseStages = [
    {
      stage: "Gingivitis",
      severity: "Mild",
      symptoms: "Red, swollen gums that bleed during brushing",
      treatment: "Professional cleaning and improved oral hygiene",
      color: "bg-yellow-100 border-yellow-300",
    },
    {
      stage: "Early Periodontitis",
      severity: "Moderate",
      symptoms: "Gum recession, deeper pockets, persistent bad breath",
      treatment: "Scaling and root planing, antimicrobial therapy",
      color: "bg-orange-100 border-orange-300",
    },
    {
      stage: "Advanced Periodontitis",
      severity: "Severe",
      symptoms: "Loose teeth, bone loss, pus formation",
      treatment: "Surgical intervention, bone grafts, possible extractions",
      color: "bg-red-100 border-red-300",
    },
  ]

  const treatmentProcess = [
    {
      step: 1,
      title: "Comprehensive Examination",
      description: "Detailed assessment of gum health, pocket depths, and bone levels",
    },
    {
      step: 2,
      title: "Treatment Planning",
      description: "Customized treatment plan based on disease severity and patient needs",
    },
    {
      step: 3,
      title: "Active Treatment",
      description: "Implementation of scaling, root planing, or surgical procedures",
    },
    {
      step: 4,
      title: "Maintenance Phase",
      description: "Regular follow-ups and maintenance therapy to prevent recurrence",
    },
  ]

  const faqItems = [
    {
      question: "What are the signs of gum disease?",
      answer:
        "Common signs include red, swollen, or bleeding gums, persistent bad breath, receding gums, loose teeth, and changes in bite. If you notice any of these symptoms, schedule a consultation immediately.",
    },
    {
      question: "Is scaling and root planing painful?",
      answer:
        "The procedure is performed under local anesthesia to ensure comfort. Some mild discomfort may occur after treatment, but this typically resolves within a few days with proper care.",
    },
    {
      question: "How long does periodontal treatment take?",
      answer:
        "Treatment duration varies based on disease severity. Simple scaling may take one visit, while comprehensive treatment can require multiple appointments over several weeks or months.",
    },
    {
      question: "Can gum disease be completely cured?",
      answer:
        "While early-stage gum disease (gingivitis) can be reversed, advanced periodontitis requires ongoing management. With proper treatment and maintenance, the disease can be controlled effectively.",
    },
    {
      question: "How often should I have periodontal maintenance?",
      answer:
        "Most patients with periodontal disease require maintenance cleanings every 3-4 months, rather than the standard 6-month intervals for healthy patients.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Periodontics', href: '/services/periodontics' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-700 border-red-200">Periodontics</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Expert Gum Disease
                <span className="text-red-600"> Treatment</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive periodontal care in Vellore with advanced treatments for gum disease, scaling and root
                planing, and surgical procedures to restore and maintain healthy gums.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Consultation: 7010650063
                </Button>
                <Button variant="outline" size="lg">
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Our Clinic
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sat: 10AM-8PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <GlassPanel className="p-8">
                <img
                  src="/gum-disease-treatment.jpg"
                  alt="Periodontal treatment at Indira Dental Clinic"
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-lg" />
              </GlassPanel>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Gum Disease Stages */}
      <SectionContainer className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Stages of Gum Disease</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the progression of periodontal disease helps in early detection and treatment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {diseaseStages.map((stage, index) => (
              <GlassPanel
                key={index}
                className={`border-2 ${stage.color} group hover:scale-105 transition-all duration-300`}
              >
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{stage.stage}</h3>
                    <Badge variant="outline" className="text-sm">
                      {stage.severity}
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Symptoms:</h4>
                      <p className="text-gray-600 text-sm">{stage.symptoms}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Treatment:</h4>
                      <p className="text-gray-600 text-sm">{stage.treatment}</p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Services Grid */}
      <SectionContainer className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Periodontal Treatment Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive gum disease treatment and periodontal maintenance services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassPanel key={index} className="group hover:scale-105 transition-all duration-300">
                <Card className="h-full border-0 bg-transparent">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white">{service.duration}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{service.name}</CardTitle>
                    <div className="text-2xl font-bold text-red-600">{service.price}</div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Book This Service</Button>
                  </CardContent>
                </Card>
              </GlassPanel>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Benefits of Periodontal Treatment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional periodontal care offers numerous health and aesthetic benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <GlassPanel key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Treatment Process */}
      <SectionContainer className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Treatment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to periodontal care for optimal results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentProcess.map((step, index) => (
              <GlassPanel key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about periodontal treatment</p>
          </div>

          <GlassPanel>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassPanel>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GlassPanel className="p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Don't Let Gum Disease Progress</h2>
            <p className="text-xl text-gray-600 mb-8">
              Early intervention is key to successful periodontal treatment. Schedule your consultation today and take
              the first step towards healthier gums.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 7010650063
              </Button>
              <Button variant="outline" size="lg">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              <p>📍 3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore</p>
              <p>🕒 Mon-Sat: 10AM-8PM | Sun: 10AM-1:30PM</p>
            </div>
          </GlassPanel>
        </div>
      </SectionContainer>

      {/* Reviews Section */}
      <SectionContainer className="py-16 bg-gradient-to-r from-yellow-50/50 to-orange-50/50">
        <ServiceReviews 
          serviceName="Periodontics & Gum Treatment" 
          reviews={reviews}
          averageRating={5.0}
          totalReviews={267}
        />
      </SectionContainer>

      {/* Ask the Dentist */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Periodontal Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Patient questions about gum health answered</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-red-700">How do I know if I have gum disease?</h3>
            <p className="text-gray-600 text-sm mb-4">Bleeding gums, bad breath, receding gums, and loose teeth are common signs. Get evaluated immediately.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-red-700">Can gum disease be reversed?</h3>
            <p className="text-gray-600 text-sm mb-4">Early stage (gingivitis) can be reversed. Advanced stages can be managed and stabilized with treatment.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-red-700">Is gum surgery painful?</h3>
            <p className="text-gray-600 text-sm mb-4">Modern laser gum surgery is minimally invasive with little to no pain. We offer sedation options.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600">
            <Link href="/ask-the-dentist/submit">
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask About Gum Health
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Related Services */}
      <SectionContainer className="py-16 bg-gradient-to-r from-red-50/50 to-pink-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Dental Implants</h3>
            <p className="text-gray-600 mb-4">Replace teeth lost to gum disease</p>
            <Link href="/services/dental-implants" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">General Dentistry</h3>
            <p className="text-gray-600 mb-4">Regular checkups and cleanings</p>
            <Link href="/services/general-dentistry" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Preventive Dentistry</h3>
            <p className="text-gray-600 mb-4">Prevent gum disease before it starts</p>
            <Link href="/services/preventive-dentistry" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </SectionContainer>
    </div>
  )
}
