import type { Metadata } from "next"
import Image from "next/image"
import { Phone, Clock, MapPin, Users, CheckCircle, Smile, Calendar, Award } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Prosthodontics in Vellore | Dentures, Partial Dentures & Prosthetic Solutions | Dr. Rockson Samuel",
  description:
    "Expert prosthodontic services in Vellore including complete dentures, partial dentures, implant-supported prosthetics. Dr. Rockson Samuel - Advanced prosthetic dentistry.",
  keywords:
    "prosthodontics vellore, dentures vellore, partial dentures, complete dentures, implant dentures, prosthetic dentistry, Dr. Rockson Samuel, removable prosthetics",
}

const prosthodonticServices = [
  {
    name: "Complete Dentures",
    price: "₹15,000 - ₹35,000",
    duration: "4-6 weeks",
    image: "/complete-dentures.jpg",
    features: ["Custom fit", "Natural appearance", "Comfortable wear", "Adjustment included"],
    type: "Removable",
    description: "Full replacement of all teeth with custom-made dentures for optimal function and aesthetics.",
  },
  {
    name: "Partial Dentures",
    price: "₹8,000 - ₹25,000",
    duration: "3-4 weeks",
    image: "/partial-dentures.jpg",
    features: ["Flexible clasps", "Tooth-colored base", "Easy maintenance", "Comfortable fit"],
    type: "Removable",
    description: "Replace multiple missing teeth while preserving remaining natural teeth.",
  },
  {
    name: "Implant-Supported Dentures",
    price: "₹80,000 - ₹2,00,000",
    duration: "3-6 months",
    image: "/implant-dentures.jpg",
    features: ["Secure retention", "No slipping", "Better chewing", "Bone preservation"],
    type: "Fixed/Removable",
    description: "Dentures anchored by dental implants for superior stability and function.",
  },
  {
    name: "Flexible Partial Dentures",
    price: "₹12,000 - ₹30,000",
    duration: "2-3 weeks",
    image: "/flexible-partials.jpg",
    features: ["Metal-free", "Comfortable", "Aesthetic clasps", "Lightweight"],
    type: "Removable",
    description: "Modern flexible materials for comfortable, aesthetic partial denture solutions.",
  },
  {
    name: "Immediate Dentures",
    price: "₹20,000 - ₹45,000",
    duration: "Same day",
    image: "/immediate-dentures.jpg",
    features: ["Same-day placement", "No waiting period", "Temporary solution", "Follow-up adjustments"],
    type: "Temporary",
    description: "Dentures placed immediately after tooth extraction so you're never without teeth.",
  },
  {
    name: "Overdentures",
    price: "₹40,000 - ₹80,000",
    duration: "6-8 weeks",
    image: "/overdentures.jpg",
    features: ["Root preservation", "Better retention", "Improved stability", "Bone maintenance"],
    type: "Removable",
    description: "Dentures that fit over preserved tooth roots or implants for enhanced stability.",
  },
  {
    name: "All-on-4 Prosthetics",
    price: "₹2,50,000 - ₹4,00,000",
    duration: "3-6 months",
    image: "/all-on-4.jpg",
    features: ["Full arch restoration", "4 implants only", "Same-day teeth", "Permanent solution"],
    type: "Fixed",
    description: "Complete arch restoration using only four strategically placed implants.",
  },
  {
    name: "Precision Attachments",
    price: "₹25,000 - ₹50,000",
    duration: "4-6 weeks",
    image: "/precision-attachments.jpg",
    features: ["Hidden clasps", "Superior retention", "Aesthetic appeal", "Long-lasting"],
    type: "Removable",
    description: "Advanced attachment systems for superior retention without visible clasps.",
  },
]

const prosthodonticProcess = [
  {
    step: 1,
    title: "Comprehensive Evaluation",
    description: "Detailed examination of oral tissues, remaining teeth, and jaw relationships",
  },
  {
    step: 2,
    title: "Treatment Planning",
    description: "Custom treatment plan considering function, aesthetics, and patient preferences",
  },
  {
    step: 3,
    title: "Preliminary Impressions",
    description: "Initial impressions to create custom trays for precise final impressions",
  },
  {
    step: 4,
    title: "Final Impressions",
    description: "Detailed impressions using custom trays for accurate prosthetic fabrication",
  },
  {
    step: 5,
    title: "Bite Registration",
    description: "Recording proper jaw relationships for optimal function and comfort",
  },
  {
    step: 6,
    title: "Try-in & Adjustments",
    description: "Fitting trial prosthetics and making necessary adjustments for perfect fit",
  },
  {
    step: 7,
    title: "Final Delivery",
    description: "Delivery of completed prosthetics with care instructions and follow-up",
  },
]

const prosthodonticBenefits = [
  {
    icon: Smile,
    title: "Restored Confidence",
    description: "Regain your beautiful smile and confidence in social situations",
  },
  {
    icon: Users,
    title: "Improved Function",
    description: "Better chewing ability and clearer speech with properly fitted prosthetics",
  },
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Precision-made prosthetics using advanced materials and techniques",
  },
  {
    icon: CheckCircle,
    title: "Long-term Solution",
    description: "Durable prosthetics designed to last for years with proper care",
  },
]

const careInstructions = [
  {
    category: "Daily Care",
    instructions: [
      "Remove and rinse after eating",
      "Brush with soft-bristled brush",
      "Use denture cleaner, not toothpaste",
      "Soak overnight in cleaning solution",
    ],
  },
  {
    category: "Handling",
    instructions: [
      "Handle over a towel or water",
      "Never use hot water",
      "Store in water when not wearing",
      "Avoid dropping or bending",
    ],
  },
  {
    category: "Oral Hygiene",
    instructions: [
      "Clean gums and tongue daily",
      "Massage gums gently",
      "Use fluoride rinse if recommended",
      "Regular dental checkups",
    ],
  },
]

const faqs = [
  {
    question: "How long does it take to get used to dentures?",
    answer:
      "Most patients adjust to new dentures within 2-4 weeks. Initially, you may experience some discomfort, increased saliva, or difficulty speaking, but these issues typically resolve as you adapt to your new prosthetics.",
  },
  {
    question: "Can I eat normally with dentures?",
    answer:
      "Yes, but there's an adjustment period. Start with soft foods cut into small pieces, chew slowly using both sides of your mouth, and gradually introduce harder foods as you become more comfortable.",
  },
  {
    question: "How often should dentures be replaced?",
    answer:
      "Complete dentures typically last 5-7 years, while partial dentures may last 5-10 years. However, regular adjustments and relines may be needed as your mouth changes over time.",
  },
  {
    question: "Are implant-supported dentures worth the extra cost?",
    answer:
      "Implant-supported dentures offer superior stability, better chewing function, and help preserve jawbone. While more expensive initially, they often provide better long-term value and quality of life.",
  },
  {
    question: "Will people be able to tell I'm wearing dentures?",
    answer:
      "Modern dentures are designed to look very natural. With proper fit and high-quality materials, most people won't be able to tell you're wearing dentures, especially with practice speaking and eating.",
  },
  {
    question: "How do I care for my dentures?",
    answer:
      "Clean dentures daily with a soft brush and denture cleaner, soak overnight, handle carefully, and maintain good oral hygiene. Regular dental visits are important for adjustments and oral health monitoring.",
  },
]

export default function ProsthodonticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Prosthodontics', href: '/services/prosthodontics' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="pt-24 pb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            Complete Prosthetic Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Prosthodontics & Dentures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Restore your smile and confidence with our comprehensive prosthodontic services. From traditional dentures
            to advanced implant-supported prosthetics, Dr. Rockson Samuel provides personalized solutions for every
            need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: 7010650063
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-200 text-purple-700 hover:bg-purple-50 bg-transparent"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Free Consultation
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <GlassCard className="text-center p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">3000+</div>
            <div className="text-gray-600">Dentures Delivered</div>
          </GlassCard>
          <GlassCard className="text-center p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
            <div className="text-gray-600">Years Experience</div>
          </GlassCard>
          <GlassCard className="text-center p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Patient Satisfaction</div>
          </GlassCard>
          <GlassCard className="text-center p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">5yr</div>
            <div className="text-gray-600">Warranty Available</div>
          </GlassCard>
        </div>
      </SectionContainer>

      {/* Services Grid */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prosthodontic Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive prosthetic solutions to replace missing teeth and restore oral function
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prosthodonticServices.map((service, index) => (
            <GlassCard key={index} className="group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                  {service.type}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Price:</span>
                  <span className="font-semibold text-purple-600">{service.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration:</span>
                  <span className="font-medium">{service.duration}</span>
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

              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Learn More
              </Button>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Treatment Process */}
      <SectionContainer className="py-16 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prosthodontic Treatment Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive approach ensuring perfect fit, function, and aesthetics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prosthodonticProcess.map((step, index) => (
            <GlassCard key={index} className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Prosthodontic Care</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the life-changing benefits of properly fitted prosthetic devices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prosthodonticBenefits.map((benefit, index) => (
            <GlassCard key={index} className="text-center p-6">
              <benefit.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Care Instructions */}
      <SectionContainer className="py-16 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Denture Care Instructions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proper care ensures longevity and optimal function of your prosthetic devices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careInstructions.map((care, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-700">{care.category}</h3>
              <ul className="space-y-3">
                {care.instructions.map((instruction, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{instruction}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Before/After Gallery */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smile Transformations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our prosthodontic treatments have transformed our patients' lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <GlassCard key={item} className="overflow-hidden">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative h-32">
                  <Image src={`/denture-before-${item}.jpg`} alt="Before dentures" fill className="object-cover" />
                  <div className="absolute bottom-1 left-1 bg-red-600 text-white px-1 py-0.5 rounded text-xs font-medium">
                    Before
                  </div>
                </div>
                <div className="relative h-32">
                  <Image src={`/denture-after-${item}.jpg`} alt="After dentures" fill className="object-cover" />
                  <div className="absolute bottom-1 right-1 bg-green-600 text-white px-1 py-0.5 rounded text-xs font-medium">
                    After
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm mb-1">Complete Denture Case {item}</h3>
                <p className="text-xs text-gray-600">Restored function and confidence</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about prosthodontic treatments and denture care
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-lg font-bold mb-3 text-purple-700">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="py-16">
        <GlassCard className="p-8 text-center bg-gradient-to-r from-purple-50 to-pink-50">
          <Smile className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-6">Ready to Restore Your Smile?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let missing teeth hold you back. Schedule a consultation with Dr. Rockson Samuel to explore your
            prosthodontic options and regain your confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 text-purple-600 mr-2" />
              <span className="font-bold">7010650063</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="h-5 w-5 text-purple-600 mr-2" />
              <span>Mon-Wed: 10AM-8PM</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 text-purple-600 mr-2" />
              <span>Gandhi Nagar, Vellore</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-200 text-purple-700 hover:bg-purple-50 bg-transparent"
            >
              <Users className="mr-2 h-5 w-5" />
              View Treatment Options
            </Button>
          </div>
        </GlassCard>
      </SectionContainer>
    </div>
  )
}
