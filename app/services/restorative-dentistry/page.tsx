import type { Metadata } from "next"
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import Link from "next/link"
import Image from "next/image"
import { Phone, Clock, MapPin, CheckCircle, Crown, Wrench, Calendar, MessageCircle, ArrowRight, Star, Shield, Heart, Sparkles, Award, Zap, Users } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from '@/components/breadcrumb'
import { ServiceReviews } from "@/components/ui/service-reviews"
import { generateServiceReviews } from "@/lib/review-data"
import { ServiceSemanticContent } from "@/components/sections/service-semantic-content"

const reviews = generateServiceReviews('Restorative Dentistry', 'default')

export const metadata: Metadata = {
  title: "Restorative Dentistry in Vellore | Dental Crowns, Bridges & Fillings | Dr. Rockson Samuel",
  description:
    "Expert restorative dentistry services in Vellore including dental crowns, bridges, fillings, and tooth restoration. Dr. Rockson Samuel - Advanced restorative techniques.",
  keywords:
    "restorative dentistry vellore, dental crowns vellore, dental bridges, tooth fillings, tooth restoration, Dr. Rockson Samuel, dental repair vellore",
}

const restorativeServices = [
  {
    name: "Dental Crowns",
    price: "₹8,000 - ₹25,000",
    duration: "2-3 visits",
    image: "/dental-clinic-vellore.jpg",
    features: ["Porcelain crowns", "Metal-free options", "Same-day crowns", "10-year warranty"],
    material: "Porcelain/Zirconia",
    description: "Custom-made crowns to restore damaged teeth to full function and natural appearance.",
  },
  {
    name: "Dental Bridges",
    price: "₹15,000 - ₹45,000",
    duration: "2-3 weeks",
    image: "/dental-clinic-vellore.jpg",
    features: ["3-unit bridges", "Implant-supported", "Metal-free ceramic", "Natural appearance"],
    material: "Porcelain/Ceramic",
    description: "Replace missing teeth with fixed bridges that restore your smile and bite function.",
  },
  {
    name: "Composite Fillings",
    price: "₹1,500 - ₹4,000",
    duration: "30-60 minutes",
    image: "/dental-clinic-vellore.jpg",
    features: ["Tooth-colored", "Mercury-free", "Same-day treatment", "Durable materials"],
    material: "Composite Resin",
    description: "Natural-looking fillings that blend seamlessly with your existing teeth.",
  },
  {
    name: "Ceramic Inlays/Onlays",
    price: "₹6,000 - ₹15,000",
    duration: "2 visits",
    image: "/dental-clinic-vellore.jpg",
    features: ["Precision fit", "Stain-resistant", "Long-lasting", "Conservative approach"],
    material: "Ceramic/Porcelain",
    description: "Custom ceramic restorations for larger cavities that preserve more tooth structure.",
  },
  {
    name: "Full Mouth Rehabilitation",
    price: "₹80,000 - ₹2,50,000",
    duration: "3-6 months",
    image: "/dental-clinic-vellore.jpg",
    features: ["Complete smile makeover", "Functional restoration", "Aesthetic enhancement", "Bite correction"],
    material: "Multiple Materials",
    description: "Comprehensive restoration of all teeth for patients with extensive dental problems.",
  },
  {
    name: "Dental Implant Crowns",
    price: "₹15,000 - ₹30,000",
    duration: "3-6 months",
    image: "/dental-clinic-vellore.jpg",
    features: ["Titanium implants", "Custom abutments", "Natural appearance", "Permanent solution"],
    material: "Titanium/Porcelain",
    description: "Complete tooth replacement with implant-supported crowns for optimal function.",
  },
  {
    name: "Tooth-Colored Fillings",
    price: "₹2,000 - ₹5,000",
    duration: "45-90 minutes",
    image: "/dental-clinic-vellore.jpg",
    features: ["Aesthetic appeal", "Bonded restoration", "Fluoride release", "Minimal drilling"],
    material: "Glass Ionomer",
    description: "Advanced filling materials that release fluoride and match your natural tooth color.",
  },
  {
    name: "Post & Core Restoration",
    price: "₹3,000 - ₹8,000",
    duration: "2 visits",
    image: "/dental-clinic-vellore.jpg",
    features: ["Root canal preparation", "Custom posts", "Core buildup", "Crown preparation"],
    material: "Fiber Post/Composite",
    description: "Strengthen root canal treated teeth with posts and cores before crown placement.",
  },
]

const restorativeProcess = [
  {
    step: 1,
    title: "Comprehensive Examination",
    description: "Detailed assessment of damaged teeth with digital X-rays and clinical evaluation",
  },
  {
    step: 2,
    title: "Treatment Planning",
    description: "Custom treatment plan with material options and timeline discussion",
  },
  {
    step: 3,
    title: "Tooth Preparation",
    description: "Careful preparation of teeth while preserving maximum healthy tooth structure",
  },
  {
    step: 4,
    title: "Impression & Temporary",
    description: "Precise impressions taken and temporary restorations placed for comfort",
  },
  {
    step: 5,
    title: "Laboratory Fabrication",
    description: "Custom restorations crafted by skilled technicians using premium materials",
  },
  {
    step: 6,
    title: "Final Placement",
    description: "Careful fitting, adjustment, and permanent cementation of your restoration",
  },
]

const materials = [
  {
    name: "Porcelain",
    benefits: ["Natural appearance", "Stain resistant", "Biocompatible", "Durable"],
    bestFor: "Front teeth, crowns, veneers",
  },
  {
    name: "Zirconia",
    benefits: ["Extremely strong", "Metal-free", "Natural color", "Long-lasting"],
    bestFor: "Back teeth, bridges, implant crowns",
  },
  {
    name: "Composite Resin",
    benefits: ["Tooth-colored", "Bondable", "Conservative", "Repairable"],
    bestFor: "Small to medium fillings",
  },
  {
    name: "Glass Ionomer",
    benefits: ["Fluoride release", "Chemical bond", "Tooth-colored", "Bioactive"],
    bestFor: "Root surface cavities, pediatric",
  },
]

const beforeAfterCases = [
  {
    title: "Smile Makeover with Crowns",
    before: "/dental-clinic-vellore.jpg",
    after: "/dental-clinic-vellore.jpg",
    description: "Complete transformation with porcelain crowns",
  },
  {
    title: "Bridge Replacement",
    before: "/dental-clinic-vellore.jpg",
    after: "/dental-clinic-vellore.jpg",
    description: "Missing teeth replaced with ceramic bridge",
  },
  {
    title: "Large Filling Restoration",
    before: "/dental-clinic-vellore.jpg",
    after: "/dental-clinic-vellore.jpg",
    description: "Extensive decay restored with composite",
  },
  {
    title: "Full Mouth Rehabilitation",
    before: "/dental-clinic-vellore.jpg",
    after: "/dental-clinic-vellore.jpg",
    description: "Complete oral health restoration",
  },
]

const faqs = [
  {
    question: "How long do dental crowns last?",
    answer:
      "With proper care, dental crowns can last 10-15 years or longer. Porcelain and zirconia crowns are particularly durable and can withstand normal chewing forces for many years.",
  },
  {
    question: "Are tooth-colored fillings as strong as silver fillings?",
    answer:
      "Modern composite fillings are very strong and durable. While they may not last quite as long as amalgam in very large restorations, they offer superior aesthetics and bond directly to the tooth.",
  },
  {
    question: "What's the difference between a crown and a filling?",
    answer:
      "Fillings are used for smaller cavities and are placed directly in the tooth. Crowns cover the entire visible portion of the tooth and are used when more extensive restoration is needed.",
  },
  {
    question: "How many visits are needed for a crown?",
    answer:
      "Traditional crowns require 2-3 visits over 2-3 weeks. We also offer same-day crowns using CEREC technology for certain cases, completing treatment in a single appointment.",
  },
  {
    question: "Will my restoration look natural?",
    answer:
      "Yes, we use high-quality materials and precise color matching to ensure your restoration blends seamlessly with your natural teeth. Most people won't be able to tell the difference.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "We use local anesthesia to ensure you're comfortable during treatment. Most patients experience minimal discomfort, and we provide pain management instructions for after the procedure.",
  },
]

export default function RestorativeDentistryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-teal-50/40">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8">
        <Breadcrumb

		<PageHeader title="Restorative Dentistry" subtitle="Expert care with modern technology" />
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Restorative Dentistry', href: '/services/restorative-dentistry' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section - Enhanced */}
      <SectionContainer className="pt-16 pb-20">
        <div className="relative">
          {/* Decorative gradient blobs */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-blue-200/50">
              <Crown className="h-4 w-4" />
              <span>Advanced Restorative Solutions</span>
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Best Restorative Dentistry Doctors in India - Dental Specialist Near Me</h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-4 leading-relaxed">
              Restore your teeth to <span className="font-semibold text-blue-600">optimal health</span>, function, and beauty with our advanced restorative dentistry services.
            </p>
            
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10">
              Dr. Rockson Samuel uses the <span className="font-medium text-teal-600">latest materials and techniques</span> to bring back your confident smile with precision and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 text-base font-semibold px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 7010650063
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 font-semibold px-8"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-500" />
                <span className="font-medium">5000+ Successful Cases</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="font-medium">10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Stats - Enhanced with icons */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="group">
              <GlassCard className="text-center p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">5000+</div>
                <div className="text-gray-600 font-medium">Restorations Completed</div>
              </GlassCard>
            </div>
            
            <div className="group">
              <GlassCard className="text-center p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-teal-600" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </GlassCard>
            </div>
            
            <div className="group">
              <GlassCard className="text-center p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-gray-600 font-medium">Patient Satisfaction</div>
              </GlassCard>
            </div>
            
            <div className="group">
              <GlassCard className="text-center p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">10yr</div>
                <div className="text-gray-600 font-medium">Warranty Available</div>
              </GlassCard>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Services Grid - Enhanced */}
      <SectionContainer className="py-20 bg-white/50">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="px-4 py-2 text-sm font-semibold border-2 border-blue-200 text-blue-700">
              Our Services
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Restorative Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive restoration solutions to repair, replace, and enhance your teeth with precision and artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {restorativeServices.map((service, index) => (
            <div key={index} className="group">
              <GlassCard className="h-full hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-100 overflow-hidden">
                <div className="relative h-52 mb-5 rounded-xl overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {service.material}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{service.name}</h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed min-h-[60px]">{service.description}</p>

                <div className="space-y-3 mb-5 bg-gradient-to-br from-blue-50/50 to-teal-50/50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-medium">Price:</span>
                    <span className="font-bold text-blue-600">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-medium">Duration:</span>
                    <span className="font-semibold text-gray-700">{service.duration}</span>
                  </div>
                </div>

                <div className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-md hover:shadow-lg transition-all duration-300 font-semibold">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </GlassCard>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Treatment Process */}
      <SectionContainer className="py-16 bg-gradient-to-r from-blue-50/50 to-teal-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Restorative Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Systematic approach ensuring optimal results and patient comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restorativeProcess.map((step, index) => (
            <GlassCard key={index} className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Materials Section */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Materials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We use only the highest quality materials for lasting, beautiful results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-700">{material.name}</h3>
              <div className="space-y-2 mb-4">
                {material.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3">
                <p className="text-sm text-gray-600">
                  <strong>Best for:</strong> {material.bestFor}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Before/After Gallery */}
      <SectionContainer className="py-16 bg-gradient-to-r from-blue-50/50 to-teal-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformation Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the remarkable results of our restorative dentistry treatments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beforeAfterCases.map((case_, index) => (
            <GlassCard key={index} className="overflow-hidden">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative h-48">
                  <Image
                    src={case_.before || "/placeholder.svg"}
                    alt="Before treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                    Before
                  </div>
                </div>
                <div className="relative h-48">
                  <Image src={case_.after || "/placeholder.svg"} alt="After treatment" fill className="object-cover" />
                  <div className="absolute bottom-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">{case_.title}</h3>
                <p className="text-sm text-gray-600">{case_.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Restorative Services?</h2>
            <div className="space-y-4">
              {[
                "Advanced materials for natural appearance",
                "Precise digital impressions and planning",
                "Same-day restorations available",
                "10-year warranty on major restorations",
                "Pain-free procedures with sedation options",
                "Comprehensive aftercare and maintenance",
                "Insurance-friendly treatment options",
                "Emergency repair services available",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image src="/dental-clinic-vellore.jpg" alt="Modern Dental Office" fill className="object-cover" />
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16 bg-gradient-to-r from-blue-50/50 to-teal-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about restorative dentistry treatments
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

      {/* CTA Section */}
      <SectionContainer className="py-16">
        <GlassCard className="p-8 text-center bg-gradient-to-r from-blue-50 to-teal-50">
          <Crown className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-6">Ready to Restore Your Smile?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let damaged teeth affect your confidence. Schedule a consultation with Dr. Rockson Samuel to explore
            your restorative options and get back to smiling with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-bold">7010650063</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="h-5 w-5 text-blue-600 mr-2" />
              <span>Mon-Wed: 10AM-8PM</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 text-blue-600 mr-2" />
              <span>Gandhi Nagar, Vellore</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
            >
              <Wrench className="mr-2 h-5 w-5" />
              View Treatment Options
            </Button>
          </div>
        </GlassCard>
      </SectionContainer>

      {/* Reviews Section */}
      <SectionContainer className="py-16 bg-gradient-to-r from-yellow-50/50 to-orange-50/50">
        <ServiceReviews 
          serviceName="Restorative Dentistry" 
          reviews={reviews}
          averageRating={5.0}
          totalReviews={623}
        />
      </SectionContainer>

      {/* Ask the Dentist */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Restorative Dentistry Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Patient questions answered by Dr. Rockson Samuel</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">How long do dental crowns last?</h3>
            <p className="text-gray-600 text-sm mb-4">Porcelain and zirconia crowns typically last 10-15 years with proper care. Some last 20+ years.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Which is better: crown or filling?</h3>
            <p className="text-gray-600 text-sm mb-4">For large cavities or RCT teeth, crowns are better. Small to medium cavities can use fillings.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Do composite fillings stain?</h3>
            <p className="text-gray-600 text-sm mb-4">High-quality composite is stain-resistant. Avoid excessive coffee, tea, smoking for best longevity.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600">
            <Link href="/ask-the-dentist/submit">
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask Your Question
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Semantic Content - Internal Linking */}
      <SectionContainer className="py-16 bg-gradient-to-br from-blue-50/30 to-teal-50/30">
        <ServiceSemanticContent serviceName="Restorative Dentistry" serviceSlug="restorative-dentistry" />
      </SectionContainer>

      {/* Related Services - Enhanced */}
      <SectionContainer className="py-20 bg-gradient-to-r from-blue-50/50 to-teal-50/50">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Related Services
          </h2>
          <p className="text-lg text-gray-600">Comprehensive dental care for complete oral health</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group">
            <GlassCard className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Root Canal Treatment</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">Save infected teeth before restoration with painless endodontic care</p>
              <Link href="/services/root-canal-treatment" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Learn More <ArrowRight className="h-5 w-5" />
              </Link>
            </GlassCard>
          </div>
          
          <div className="group">
            <GlassCard className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-200 h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                <Crown className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors">Prosthodontics</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">Advanced crowns, bridges, and dentures for complete tooth replacement</p>
              <Link href="/services/prosthodontics" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Learn More <ArrowRight className="h-5 w-5" />
              </Link>
            </GlassCard>
          </div>
          
          <div className="group">
            <GlassCard className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">Cosmetic Dentistry</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">Enhance appearance while restoring function for a confident smile</p>
              <Link href="/services/cosmetic-dentistry" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Learn More <ArrowRight className="h-5 w-5" />
              </Link>
            </GlassCard>
          </div>
        </div>
      </SectionContainer>
    </div>
  
		<CTAWidget title={`Book Restorative Dentistry`} description="Get expert dental care from our team" primaryAction={{ text: 'Book Appointment', href: '/contact' }} secondaryAction={{ text: 'Call Now', href: 'tel:+917010650063' }} showRating showAvailability />
)
}
