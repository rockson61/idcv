import type { Metadata } from "next"
import Image from "next/image"
import { Phone, Clock, MapPin, Shield, CheckCircle, AlertTriangle, Calendar } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Oral Surgery Services in Vellore | Tooth Extraction & Surgical Procedures | Dr. Rockson Samuel",
  description:
    "Expert oral surgery services in Vellore including wisdom tooth extraction, dental implant surgery, and advanced surgical procedures. Dr. Rockson Samuel - 15+ years surgical experience.",
  keywords:
    "oral surgery vellore, tooth extraction vellore, wisdom tooth removal, dental surgery, oral surgeon vellore, Dr. Rockson Samuel, surgical dentistry",
}

const surgicalServices = [
  {
    name: "Wisdom Tooth Extraction",
    price: "₹3,000 - ₹8,000",
    duration: "30-60 minutes",
    image: "/wisdom-tooth-extraction.jpg",
    features: ["Painless extraction", "Same-day procedure", "Post-op care included", "Sedation available"],
    urgency: "Moderate",
    description: "Safe removal of impacted or problematic wisdom teeth using advanced surgical techniques.",
  },
  {
    name: "Dental Implant Surgery",
    price: "₹25,000 - ₹35,000",
    duration: "60-90 minutes",
    image: "/dental-implant-surgery.jpg",
    features: ["Titanium implants", "3D guided surgery", "Immediate loading option", "Lifetime warranty"],
    urgency: "Elective",
    description: "Precision implant placement for permanent tooth replacement with natural function.",
  },
  {
    name: "Tooth Extraction (Simple)",
    price: "₹800 - ₹2,000",
    duration: "15-30 minutes",
    image: "/simple-tooth-extraction.jpg",
    features: ["Local anesthesia", "Minimal discomfort", "Quick healing", "Aftercare instructions"],
    urgency: "Urgent",
    description: "Gentle removal of damaged or decayed teeth that cannot be saved.",
  },
  {
    name: "Surgical Tooth Extraction",
    price: "₹2,000 - ₹5,000",
    duration: "45-75 minutes",
    image: "/surgical-extraction.jpg",
    features: ["Advanced techniques", "Bone preservation", "Sutures included", "Pain management"],
    urgency: "Urgent",
    description: "Complex extractions requiring surgical approach for impacted or broken teeth.",
  },
  {
    name: "Bone Grafting",
    price: "₹8,000 - ₹15,000",
    duration: "60-90 minutes",
    image: "/bone-grafting.jpg",
    features: ["Synthetic bone material", "Membrane protection", "Implant preparation", "Healing monitoring"],
    urgency: "Elective",
    description: "Bone augmentation procedures to prepare sites for dental implants.",
  },
  {
    name: "Sinus Lift Surgery",
    price: "₹15,000 - ₹25,000",
    duration: "90-120 minutes",
    image: "/sinus-lift.jpg",
    features: ["Lateral window technique", "Bone graft material", "Membrane placement", "Implant readiness"],
    urgency: "Elective",
    description: "Sinus floor elevation to create adequate bone height for upper jaw implants.",
  },
  {
    name: "Cyst Removal",
    price: "₹5,000 - ₹12,000",
    duration: "45-90 minutes",
    image: "/cyst-removal.jpg",
    features: ["Complete excision", "Histopathology", "Bone healing", "Follow-up care"],
    urgency: "Moderate",
    description: "Surgical removal of oral cysts with complete healing and tissue preservation.",
  },
  {
    name: "Apicoectomy",
    price: "₹8,000 - ₹15,000",
    duration: "60-90 minutes",
    image: "/apicoectomy.jpg",
    features: ["Root tip removal", "Retrograde filling", "Microsurgery", "Tissue preservation"],
    urgency: "Moderate",
    description: "Surgical root canal treatment when conventional therapy fails.",
  },
]

const surgicalProcess = [
  {
    step: 1,
    title: "Consultation & Diagnosis",
    description: "Comprehensive examination with 3D imaging to plan the surgical procedure",
  },
  {
    step: 2,
    title: "Pre-surgical Preparation",
    description: "Medical history review, consent process, and pre-operative instructions",
  },
  {
    step: 3,
    title: "Anesthesia Administration",
    description: "Local anesthesia or sedation for comfortable, pain-free surgery",
  },
  {
    step: 4,
    title: "Surgical Procedure",
    description: "Precise surgical technique using advanced instruments and protocols",
  },
  {
    step: 5,
    title: "Post-operative Care",
    description: "Immediate care, suturing if needed, and detailed aftercare instructions",
  },
  {
    step: 6,
    title: "Follow-up & Healing",
    description: "Regular monitoring of healing progress and suture removal if applicable",
  },
]

const benefits = [
  "Advanced surgical techniques for minimal trauma",
  "3D imaging for precise treatment planning",
  "Sedation options for anxious patients",
  "Same-day procedures when possible",
  "Comprehensive post-operative care",
  "Emergency surgical services available",
]

const faqs = [
  {
    question: "Is oral surgery painful?",
    answer:
      "Modern oral surgery is performed under effective anesthesia, making the procedure comfortable. Post-operative pain is managed with appropriate medications and typically resolves within a few days.",
  },
  {
    question: "How long is the recovery time after oral surgery?",
    answer:
      "Recovery time varies by procedure. Simple extractions heal in 3-7 days, while complex surgeries like implants may take several weeks to months for complete healing.",
  },
  {
    question: "What should I eat after oral surgery?",
    answer:
      "Stick to soft foods like yogurt, soup, and smoothies for the first few days. Avoid hot, spicy, or hard foods that could irritate the surgical site.",
  },
  {
    question: "When can I return to work after surgery?",
    answer:
      "Most patients can return to work within 1-3 days, depending on the procedure and their healing response. We provide specific guidelines based on your surgery.",
  },
  {
    question: "Are there any risks with oral surgery?",
    answer:
      "Oral surgery is generally safe when performed by experienced surgeons. We discuss all potential risks and take precautions to minimize complications.",
  },
  {
    question: "Do you offer sedation for nervous patients?",
    answer:
      "Yes, we offer various sedation options including nitrous oxide and IV sedation to help anxious patients feel comfortable during surgery.",
  },
]

export default function OralSurgeryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50/30 to-orange-50/30">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Oral Surgery', href: '/services/oral-surgery' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="pt-24 pb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Advanced Surgical Procedures
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Expert Oral Surgery Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Advanced surgical procedures performed by Dr. Rockson Samuel with 15+ years of surgical experience. From
            simple extractions to complex implant surgeries, we ensure safe, comfortable treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency: 7010650063
            </Button>
            <Button size="lg" variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <GlassCard className="text-center p-6">
            <div className="text-3xl font-bold text-red-600 mb-2">2000+</div>
            <div className="text-gray-600">Successful Surgeries</div>
          </GlassCard>
          <GlassCard className="text-center p-6">
            <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </GlassCard>
          <GlassCard className="text-center p-6">
            <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </GlassCard>
        </div>
      </SectionContainer>

      {/* Services Grid */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Surgical Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive oral surgery procedures using advanced techniques and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {surgicalServices.map((service, index) => (
            <GlassCard key={index} className="group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                    service.urgency === "Urgent"
                      ? "bg-red-100 text-red-700"
                      : service.urgency === "Moderate"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-green-100 text-green-700"
                  }`}
                >
                  {service.urgency}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Price:</span>
                  <span className="font-semibold text-red-600">{service.price}</span>
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

              <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                Book Consultation
              </Button>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Surgical Process */}
      <SectionContainer className="py-16 bg-gradient-to-r from-red-50/50 to-orange-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Surgical Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Step-by-step approach ensuring safe, comfortable surgical experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {surgicalProcess.map((step, index) => (
            <GlassCard key={index} className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Benefits */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Oral Surgery Services?</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 7010650063
              </Button>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image src="/oral-surgery-procedure.jpg" alt="Oral Surgery Procedure" fill className="object-cover" />
          </div>
        </div>
      </SectionContainer>

      {/* Before/After Gallery */}
      <SectionContainer className="py-16 bg-gradient-to-r from-red-50/50 to-orange-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Surgical Results</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the successful outcomes of our surgical procedures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <GlassCard key={item} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={`/surgery-result-${item}.jpg`}
                  alt={`Surgical Result ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Case Study {item}</h3>
                <p className="text-sm text-gray-600">Successful surgical outcome with complete healing</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Common questions about oral surgery procedures</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-lg font-bold mb-3 text-red-700">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Emergency Contact */}
      <SectionContainer className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Surgical Emergency?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We provide emergency oral surgery services. Contact us immediately for urgent surgical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Emergency: 7010650063
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Contact Info */}
      <SectionContainer className="py-16">
        <GlassCard className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Schedule Your Surgical Consultation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 text-red-600 mr-2" />
              <span>7010650063</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="h-5 w-5 text-red-600 mr-2" />
              <span>Mon-Sat: 10AM-8PM</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 text-red-600 mr-2" />
              <span>Gandhi Nagar, Vellore</span>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
          >
            Book Surgical Consultation
          </Button>
        </GlassCard>
      </SectionContainer>
    </div>
  )
}
