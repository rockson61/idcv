import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ServiceReviews } from "@/components/ui/service-reviews"
import { generateServiceReviews } from "@/lib/review-data"
import { MessageCircle, ArrowRight } from "lucide-react"

const reviews = generateServiceReviews('Endodontics', 'root-canal')
import {
  AlertTriangle,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  Calendar,
  Zap,
  Heart,
  Eye,
  Thermometer,
  Activity,
  Award,
  Users,
  Star,
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Root Canal Treatment in Vellore | Endodontics | Dr. Rockson Samuel",
  description:
    "Expert root canal treatment in Vellore by Dr. Rockson Samuel. Painless endodontic procedures with 98% success rate. Advanced technology, same-day appointments available.",
  keywords: [
    "root canal treatment vellore",
    "endodontics vellore",
    "painless root canal",
    "Dr. Rockson Samuel",
    "tooth pain treatment",
    "dental infection treatment",
    "single sitting root canal",
    "microscopic endodontics",
  ],
  openGraph: {
    title: "Root Canal Treatment in Vellore | Endodontics | Dr. Rockson Samuel",
    description: "Expert root canal treatment with 98% success rate. Painless procedures using advanced technology.",
    images: [{ url: "/root-canal-procedure.png", width: 1200, height: 630 }],
  },
}

const endodonticServices = [
  {
    name: "Single Sitting Root Canal",
    description: "Complete root canal treatment in one appointment using advanced rotary instruments",
    price: "₹8,000 - ₹15,000",
    duration: "60-90 minutes",
    successRate: "98%",
    features: ["Same day completion", "Rotary endodontics", "Digital X-rays", "Immediate crown placement"],
  },
  {
    name: "Multi-Visit Root Canal",
    description: "Traditional approach for complex cases requiring multiple appointments",
    price: "₹6,000 - ₹12,000",
    duration: "2-3 visits",
    successRate: "96%",
    features: ["Thorough disinfection", "Calcium hydroxide dressing", "Step-by-step healing", "Lower cost option"],
  },
  {
    name: "Microscopic Endodontics",
    description: "Precision treatment using dental microscope for enhanced visualization",
    price: "₹12,000 - ₹20,000",
    duration: "90-120 minutes",
    successRate: "99%",
    features: ["10x magnification", "Precise cleaning", "Minimal tissue removal", "Superior outcomes"],
  },
  {
    name: "Retreatment (Revision RCT)",
    description: "Re-treatment of previously failed root canal procedures",
    price: "₹10,000 - ₹18,000",
    duration: "2-3 visits",
    successRate: "85%",
    features: ["Crown removal", "Cleaning old filling", "New disinfection", "Fresh restoration"],
  },
  {
    name: "Apicoectomy",
    description: "Surgical root canal treatment when conventional treatment fails",
    price: "₹15,000 - ₹25,000",
    duration: "60-90 minutes",
    successRate: "90%",
    features: ["Surgical precision", "Root tip removal", "Retrograde filling", "Tissue regeneration"],
  },
  {
    name: "Pulpotomy (Pediatric)",
    description: "Partial root canal treatment for children's primary teeth",
    price: "₹3,000 - ₹6,000",
    duration: "30-45 minutes",
    successRate: "95%",
    features: ["Child-friendly approach", "Minimal discomfort", "Tooth preservation", "Stainless steel crown"],
  },
  {
    name: "Emergency Root Canal",
    description: "Urgent treatment for severe tooth pain and dental emergencies",
    price: "₹8,000 - ₹16,000",
    duration: "45-75 minutes",
    successRate: "97%",
    features: ["24/7 availability", "Immediate pain relief", "Same day treatment", "Emergency protocols"],
  },
  {
    name: "Root Canal with Crown",
    description: "Complete treatment package including root canal and crown restoration",
    price: "₹15,000 - ₹30,000",
    duration: "2-3 visits",
    successRate: "98%",
    features: ["Complete restoration", "Zirconia crown", "Color matching", "5-year warranty"],
  },
]

const warningSignsData = [
  {
    icon: AlertTriangle,
    title: "Severe Tooth Pain",
    description: "Intense, throbbing pain that worsens when lying down or with hot/cold foods",
    urgency: "Immediate",
  },
  {
    icon: Thermometer,
    title: "Temperature Sensitivity",
    description: "Sharp pain when consuming hot or cold foods and drinks that lingers",
    urgency: "Within 24 hours",
  },
  {
    icon: Activity,
    title: "Swelling & Tenderness",
    description: "Facial swelling, tender lymph nodes, or gum swelling around the tooth",
    urgency: "Immediate",
  },
  {
    icon: Eye,
    title: "Tooth Discoloration",
    description: "Darkening or graying of the tooth indicating nerve damage",
    urgency: "Within a week",
  },
  {
    icon: Heart,
    title: "Persistent Bad Taste",
    description: "Ongoing bad taste in mouth or bad breath from infected tooth",
    urgency: "Within 48 hours",
  },
  {
    icon: Zap,
    title: "Pain When Chewing",
    description: "Sharp pain or discomfort when biting down or chewing food",
    urgency: "Within 72 hours",
  },
]

const treatmentProcess = [
  {
    step: 1,
    title: "Diagnosis & X-rays",
    description: "Comprehensive examination with digital X-rays to assess tooth condition",
    duration: "15-20 minutes",
  },
  {
    step: 2,
    title: "Local Anesthesia",
    description: "Complete numbing of the area to ensure painless treatment",
    duration: "5-10 minutes",
  },
  {
    step: 3,
    title: "Access Opening",
    description: "Small opening created in the tooth crown to access the pulp chamber",
    duration: "10-15 minutes",
  },
  {
    step: 4,
    title: "Cleaning & Shaping",
    description: "Infected pulp removed and root canals cleaned and shaped",
    duration: "30-45 minutes",
  },
  {
    step: 5,
    title: "Disinfection",
    description: "Thorough disinfection of root canals to eliminate bacteria",
    duration: "10-15 minutes",
  },
  {
    step: 6,
    title: "Filling & Sealing",
    description: "Root canals filled with biocompatible material and sealed",
    duration: "15-20 minutes",
  },
  {
    step: 7,
    title: "Crown Placement",
    description: "Temporary or permanent crown placed to restore tooth function",
    duration: "20-30 minutes",
  },
]

const painManagement = [
  {
    phase: "Before Treatment",
    methods: [
      "Topical anesthetic gel",
      "Local anesthesia injection",
      "Nitrous oxide (if needed)",
      "Pre-medication for anxiety",
    ],
    effectiveness: "100% pain-free procedure",
  },
  {
    phase: "During Treatment",
    methods: ["Continuous monitoring", "Additional anesthesia if needed", "Gentle technique", "Patient communication"],
    effectiveness: "No discomfort during procedure",
  },
  {
    phase: "After Treatment",
    methods: [
      "Prescribed pain medication",
      "Anti-inflammatory drugs",
      "Cold compress application",
      "Soft diet recommendations",
    ],
    effectiveness: "Minimal post-treatment discomfort",
  },
]

const technologyFeatures = [
  {
    name: "Digital X-rays",
    description: "Instant, high-resolution images with 90% less radiation",
    benefit: "Accurate diagnosis",
  },
  {
    name: "Rotary Endodontics",
    description: "Flexible nickel-titanium instruments for efficient cleaning",
    benefit: "Faster treatment",
  },
  {
    name: "Apex Locator",
    description: "Electronic measurement of root canal length",
    benefit: "Precise treatment",
  },
  {
    name: "Ultrasonic Irrigation",
    description: "Advanced cleaning with ultrasonic activation",
    benefit: "Better disinfection",
  },
  {
    name: "Dental Microscope",
    description: "10x magnification for enhanced precision",
    benefit: "Superior outcomes",
  },
  {
    name: "Laser Therapy",
    description: "Laser disinfection and tissue healing",
    benefit: "Faster recovery",
  },
]

const faqData = [
  {
    question: "Is root canal treatment painful?",
    answer:
      "Modern root canal treatment is virtually painless. We use advanced anesthesia techniques and gentle procedures to ensure your comfort throughout the treatment. Most patients report feeling no pain during the procedure.",
  },
  {
    question: "How long does a root canal take?",
    answer:
      "A single sitting root canal typically takes 60-90 minutes. Complex cases may require 2-3 visits. We use advanced rotary instruments to complete most treatments in one appointment.",
  },
  {
    question: "What is the success rate of root canal treatment?",
    answer:
      "Our success rate is 98% for single sitting root canals and 96% for multi-visit treatments. With proper care and crown placement, treated teeth can last a lifetime.",
  },
  {
    question: "Do I need a crown after root canal treatment?",
    answer:
      "Yes, a crown is usually recommended after root canal treatment to protect the tooth from fracture and restore full function. We offer same-day crown placement in many cases.",
  },
  {
    question: "What are the alternatives to root canal treatment?",
    answer:
      "The main alternative is tooth extraction followed by replacement with a dental implant, bridge, or partial denture. However, saving your natural tooth with root canal treatment is usually the best option.",
  },
  {
    question: "How much does root canal treatment cost?",
    answer:
      "Root canal treatment costs range from ₹6,000 to ₹25,000 depending on the complexity and technique used. We offer flexible payment options and insurance assistance.",
  },
  {
    question: "Can I eat normally after root canal treatment?",
    answer:
      "You should avoid chewing on the treated tooth until the permanent crown is placed. Stick to soft foods for the first 24-48 hours and avoid very hot or cold foods initially.",
  },
  {
    question: "How long do root canal treated teeth last?",
    answer:
      "With proper care and crown placement, root canal treated teeth can last 15-20 years or even a lifetime. Regular dental checkups and good oral hygiene are essential for longevity.",
  },
  {
    question: "What should I do if I have severe tooth pain?",
    answer:
      "Contact us immediately for emergency treatment. We offer same-day appointments for dental emergencies. In the meantime, take over-the-counter pain medication and avoid hot/cold foods.",
  },
  {
    question: "Is retreatment possible if the first root canal fails?",
    answer:
      "Yes, retreatment (revision RCT) is possible in most cases. We remove the old filling material, re-clean the canals, and seal them again. Success rates for retreatment are around 85%.",
  },
]

export default function EndodonticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50/30 to-orange-50/30">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Endodontics', href: '/services/endodontics' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-red-100 text-red-800 mb-4">Endodontics Specialist</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Expert Root Canal Treatment in Vellore
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Save your natural teeth with our advanced, painless root canal procedures. Dr. Rockson Samuel offers
              state-of-the-art endodontic treatment with a 98% success rate and same-day completion options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
              >
                <Link href="tel:7010650063">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency: 7010650063
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent">
                <Link href="/contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">5000+</div>
                <div className="text-sm text-gray-600">Treatments</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <GlassCard className="p-8 bg-gradient-to-br from-red-50/50 to-orange-50/50">
              <Image
                src="/root-canal-procedure.png"
                alt="Root Canal Treatment Process"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </GlassCard>
          </div>
        </div>
      </SectionContainer>

      {/* Warning Signs Section */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-700 mb-4">When Do You Need Root Canal Treatment?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't ignore these warning signs. Early treatment can save your tooth and prevent serious complications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {warningSignsData.map((sign, index) => (
            <GlassCard
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <sign.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-red-700 mb-2">{sign.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{sign.description}</p>
                  <Badge variant={sign.urgency === "Immediate" ? "destructive" : "secondary"} className="text-xs">
                    {sign.urgency}
                  </Badge>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-8">
          <GlassCard className="inline-block p-6 bg-gradient-to-r from-red-50 to-orange-50">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <div className="text-left">
                <div className="font-bold text-red-700">Experiencing severe tooth pain?</div>
                <div className="text-sm text-gray-600">Call us immediately for emergency treatment</div>
              </div>
              <Button asChild className="bg-red-600 hover:bg-red-700 ml-4">
                <Link href="tel:7010650063">Call Now</Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </SectionContainer>

      {/* Services Section */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-700 mb-4">Our Endodontic Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive root canal treatments using the latest technology and techniques for optimal results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {endodonticServices.map((service, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-4">
                <h3 className="font-bold text-red-700 mb-2 group-hover:text-orange-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Price:</span>
                    <span className="font-semibold text-red-600">{service.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold">{service.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Success Rate:</span>
                    <span className="font-semibold text-green-600">{service.successRate}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Treatment Process */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-700 mb-4">Our 7-Step Treatment Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures thorough treatment and optimal outcomes for every patient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatmentProcess.map((step, index) => (
            <GlassCard key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="font-bold text-red-700 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{step.description}</p>
              <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{step.duration}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Pain Management */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-700 mb-4">Complete Pain Management</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our comprehensive pain management protocols ensure your comfort throughout the entire treatment process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painManagement.map((phase, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-red-700 mb-2">{phase.phase}</h3>
                <Badge className="bg-green-100 text-green-800 text-xs">{phase.effectiveness}</Badge>
              </div>

              <div className="space-y-2">
                {phase.methods.map((method, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Technology Section */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-700 mb-4">Advanced Technology</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We use the latest endodontic technology to ensure precise, efficient, and comfortable treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologyFeatures.map((tech, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-red-100 to-orange-100 rounded-full group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-red-700 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{tech.description}</p>
                  <Badge variant="outline" className="border-red-300 text-red-600 text-xs">
                    {tech.benefit}
                  </Badge>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-700 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about root canal treatment and endodontic procedures.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-semibold text-red-700 group-hover:text-orange-600 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center group-open:rotate-45 transition-transform">
                      <span className="text-red-600 font-bold">+</span>
                    </div>
                  </div>
                </summary>
                <div className="mt-4 pt-4 border-t border-red-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="pb-16">
        <GlassCard className="text-center p-8 md:p-12 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-red-700 mb-4">Don't Let Tooth Pain Control Your Life</h2>
            <p className="text-gray-600 mb-8">
              Our expert endodontic treatment can save your natural tooth and eliminate pain permanently. Schedule your
              consultation today and experience the difference of advanced, painless root canal therapy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
              >
                <Link href="tel:7010650063">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: 7010650063
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent">
                <Link href="/contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-600">5000+ Successful Treatments</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-600">98% Success Rate</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-600">Painless Procedures</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </SectionContainer>

      {/* Reviews Section */}
      <SectionContainer className="py-16 bg-gradient-to-r from-yellow-50/50 to-orange-50/50">
        <ServiceReviews 
          serviceName="Endodontics & Root Canal" 
          reviews={reviews}
          averageRating={5.0}
          totalReviews={542}
        />
      </SectionContainer>

      {/* Ask the Dentist */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Endodontic Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Common root canal questions answered</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-red-700">How painful is a root canal?</h3>
            <p className="text-gray-600 text-sm mb-4">Modern root canal treatment is painless with proper anesthesia. Most patients report less pain than the original toothache.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-red-700">Can root canal be done in one sitting?</h3>
            <p className="text-gray-600 text-sm mb-4">Yes! Single sitting RCT is possible for most cases. Saves time and multiple visits.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-red-700">What happens if I don't get RCT?</h3>
            <p className="text-gray-600 text-sm mb-4">Infection spreads, abscess forms, severe pain worsens, eventual tooth loss. RCT saves your tooth.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600">
            <Link href="/ask-the-dentist/submit">
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask RCT Question
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Related Services */}
      <SectionContainer className="py-16 bg-gradient-to-r from-red-50/50 to-orange-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Endodontic Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Apicoectomy</h3>
            <p className="text-gray-600 mb-4">Root end surgery for failed RCT</p>
            <Link href="/services/endodontics/apicoectomy" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Dental Crowns</h3>
            <p className="text-gray-600 mb-4">Protect RCT-treated teeth</p>
            <Link href="/services/prosthodontics/dental-crowns" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Emergency Dentistry</h3>
            <p className="text-gray-600 mb-4">24/7 emergency RCT available</p>
            <Link href="/services/emergency-dentistry" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </SectionContainer>
    </div>
  )
}
