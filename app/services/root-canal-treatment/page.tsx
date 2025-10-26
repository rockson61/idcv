import type { Metadata } from "next"
import { ModernCard, ModernCardContent, ModernCardDescription, ModernCardHeader, ModernCardTitle } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { RelevantQAWidget } from "@/components/widgets/relevant-qa-widget"
import { ConditionWidget } from "@/components/widgets/condition-widget"
import { ServiceReviews } from "@/components/ui/service-reviews"
import { generateServiceReviews } from "@/lib/review-data"
import { Heart, Shield, CheckCircle2, Phone, Calendar, Clock, Star, AlertTriangle, Zap, Target, Award, Users, TrendingUp, ArrowRight, MapPin, Globe, DollarSign, BookOpen, MessageCircle, Play, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const reviews = generateServiceReviews('Root Canal Treatment', 'root-canal')

export const metadata: Metadata = {
  title: 'Best Root Canal Treatment in Vellore | Painless RCT | Dr. Rockson Samuel',
  description: 'Expert root canal treatment in Vellore by Dr. Rockson Samuel. Painless RCT with advanced techniques. 50% lower costs. Save your natural tooth with 95% success rate. Book appointment today!',
  keywords: [
    'root canal treatment vellore',
    'painless RCT vellore',
    'endodontic treatment vellore',
    'tooth pain relief vellore',
    'Dr Rockson Samuel RCT',
    'best root canal dentist vellore',
    'single sitting RCT vellore',
    'molar RCT vellore',
    'front tooth RCT vellore',
    'affordable root canal vellore',
    'indira dental clinic RCT',
    'emergency root canal vellore'
  ],
  openGraph: {
    title: 'Best Root Canal Treatment in Vellore | Painless RCT | Indira Dental Clinic',
    description: 'Expert root canal treatment by Dr. Rockson Samuel. Painless RCT with advanced techniques. 50% lower costs. Save your natural tooth with 95% success rate.',
    url: 'https://www.dentalclinicinvellore.in/services/root-canal-treatment',
    images: [
      {
        url: '/root-canal-procedure.png',
        width: 1200,
        height: 630,
        alt: 'Root Canal Treatment Procedure'
      }
    ]
  }
}

const rctBenefits = [
  {
    icon: Heart,
    title: "Save Your Natural Tooth",
    description: "Preserve your original tooth structure instead of extraction and replacement with advanced endodontic techniques.",
  },
  {
    icon: Shield,
    title: "Eliminate Pain & Infection",
    description: "Remove infected pulp to stop pain and prevent spread of infection with precision treatment methods.",
  },
  {
    icon: Zap,
    title: "Painless Procedure",
    description: "Advanced anesthesia and techniques ensure comfortable treatment with minimal discomfort throughout the procedure.",
  },
  {
    icon: Target,
    title: "High Success Rate",
    description: "Over 95% success rate with proper care and follow-up, ensuring long-lasting results and tooth preservation.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solution",
    description: "Save 50% on treatment costs compared to other cities while maintaining the highest quality of care.",
  },
  {
    icon: Clock,
    title: "Quick Recovery",
    description: "Minimal downtime with same-day treatment options and rapid healing process for most patients.",
  },
]

const treatmentSteps = [
  {
    step: 1,
    title: "Examination & Diagnosis",
    description: "Thorough examination with digital X-rays to assess tooth condition and plan treatment approach.",
    duration: "15-20 minutes",
    features: ["Digital X-rays", "Pain assessment", "Treatment planning", "Cost estimation"]
  },
  {
    step: 2,
    title: "Local Anesthesia",
    description: "Advanced pain management to ensure complete comfort throughout the procedure with minimal discomfort.",
    duration: "5-10 minutes",
    features: ["Topical anesthesia", "Local anesthesia", "Pain-free injection", "Comfort monitoring"]
  },
  {
    step: 3,
    title: "Access & Cleaning",
    description: "Create access hole and carefully remove infected pulp from root canals using precision instruments.",
    duration: "30-45 minutes",
    features: ["Precision access", "Pulp removal", "Canal cleaning", "Infection control"]
  },
  {
    step: 4,
    title: "Shaping & Disinfection",
    description: "Clean, shape, and disinfect root canals using rotary instruments and antimicrobial solutions.",
    duration: "20-30 minutes",
    features: ["Rotary endodontics", "Canal shaping", "Disinfection", "Quality control"]
  },
  {
    step: 5,
    title: "Filling & Sealing",
    description: "Fill canals with biocompatible material and seal access hole for complete protection.",
    duration: "15-20 minutes",
    features: ["Biocompatible filling", "Airtight sealing", "Protection", "Quality assurance"]
  },
  {
    step: 6,
    title: "Crown Placement",
    description: "Place protective crown to restore tooth strength and appearance for long-term success.",
    duration: "Follow-up visit",
    features: ["Crown preparation", "Color matching", "Final restoration", "Follow-up care"]
  },
]

const symptoms = [
  "Severe toothache when chewing or applying pressure",
  "Prolonged sensitivity to hot or cold temperatures",
  "Discoloration of the tooth",
  "Swelling and tenderness in nearby gums",
  "A persistent or recurring pimple on the gums",
  "Spontaneous pain that wakes you at night",
  "Pain that radiates to other areas of the face",
  "Difficulty sleeping due to tooth pain",
]

const aftercareInstructions = [
  {
    icon: Shield,
    title: "Take Prescribed Medications",
    description: "Follow medication schedule for pain management and infection prevention as directed by Dr. Rockson Samuel.",
  },
  {
    icon: Heart,
    title: "Avoid Hard Foods",
    description: "Stick to soft foods for the first few days after treatment to allow proper healing and recovery.",
  },
  {
    icon: CheckCircle2,
    title: "Maintain Oral Hygiene",
    description: "Continue brushing and flossing gently around the treated area to maintain optimal oral health.",
  },
  {
    icon: Calendar,
    title: "Attend Follow-up Visits",
    description: "Keep all scheduled appointments for crown placement and monitoring to ensure long-term success.",
  },
]

const patientTestimonials = [
  {
    name: "Priya Sharma",
    location: "Gandhi Nagar, Vellore",
    treatment: "Single Sitting RCT",
    rating: 5,
    testimonial: "I was terrified of getting a root canal, but Dr. Rockson made it completely painless. The entire procedure was done in one sitting, and I felt no discomfort. Highly recommend!",
    image: "/indian-woman-smiling.png",
  },
  {
    name: "Rajesh Kumar",
    location: "Katpadi, Vellore",
    treatment: "Molar RCT with Crown",
    rating: 5,
    testimonial: "Had severe tooth pain for weeks. Dr. Rockson's root canal treatment gave me immediate relief. The crown looks perfect and feels natural. Excellent care!",
    image: "/indian-man-smiling.png",
  },
  {
    name: "Meera Krishnan",
    location: "Sathuvachari, Vellore",
    treatment: "Front Tooth RCT",
    rating: 5,
    testimonial: "Dr. Rockson saved my front tooth with expert root canal treatment. The result is amazing - you can't even tell it was treated. Professional and caring service.",
    image: "/indian-woman-professional.png",
  }
]

const faqs = [
  {
    question: "Is root canal treatment painful?",
    answer: "Modern root canal treatment is virtually painless. We use advanced local anesthesia and pain management techniques to ensure your comfort throughout the procedure. Most patients report feeling no pain during treatment, and any post-procedure discomfort is minimal and manageable."
  },
  {
    question: "How long does root canal treatment take?",
    answer: "Most root canal treatments can be completed in 1-2 visits. Simple cases (front teeth) may be completed in a single 60-90 minute session, while complex cases (molars) might require 2 visits. Dr. Rockson Samuel offers same-day treatment options when appropriate."
  },
  {
    question: "What is the success rate of root canal treatment?",
    answer: "Root canal treatment has a success rate of over 95% when performed by experienced professionals like Dr. Rockson Samuel. With proper care and a crown, the treated tooth can last a lifetime. We use advanced techniques and materials to ensure optimal results."
  },
  {
    question: "Do I need a crown after root canal treatment?",
    answer: "In most cases, yes. A crown protects the treated tooth from fracture and restores its full function. Front teeth may not always need a crown, but back teeth (premolars and molars) typically require crown protection for long-term success."
  },
  {
    question: "How much does root canal treatment cost in Vellore?",
    answer: "Our root canal treatment costs are 50% lower than other cities. Front tooth RCT starts from ₹3,000, premolar RCT from ₹5,000, and molar RCT from ₹8,000. All prices include consultation, X-rays, and temporary filling. We offer transparent pricing with no hidden costs."
  },
  {
    question: "Can root canal treatment be done in one sitting?",
    answer: "Yes, many root canal treatments can be completed in a single sitting, especially for front teeth and simple cases. Dr. Rockson Samuel uses advanced techniques and equipment to make same-day treatment possible while maintaining the highest quality of care."
  }
]

export default function RootCanalTreatmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Root Canal Treatment', href: '/services/root-canal-treatment' },
          ]}
        />

        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-teal-600 text-teal-700 font-semibold">
                Endodontic Treatment
              </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-[family-name:var(--font-exo-2)]">
                <em className="text-teal-600 not-italic">Painless</em> <Link href="/services/root-canal-treatment" className="hover:text-teal-600 transition-colors">Root Canal Treatment</Link> in <strong>Vellore</strong>
              </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Save your <strong className="text-gray-900">natural tooth</strong> with advanced, <strong className="text-teal-600">painless root canal treatment</strong> by{" "}
            <Link href="/about-us/dr-rockson-samuel" className="font-bold text-gray-900 hover:text-teal-600 transition-colors">Dr. Rockson Samuel (BDS, PgDM, BDM)</Link>. Using <strong className="text-gray-900">modern techniques</strong> and equipment for{" "}
            <strong className="text-gray-900">comfortable, effective <Link href="/services/endodontics" className="text-teal-600 hover:text-teal-700">endodontic therapy</Link></strong> at{" "}
            <strong className="text-teal-600">50% lower costs</strong> than other cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold" asChild>
                  <a href="tel:7010650063">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 7010650063
                  </a>
                </Button>
            <Button size="lg" variant="outline" className="border-2 border-teal-600 text-gray-900 hover:bg-teal-50 bg-white font-semibold" asChild>
                  <Link href="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
              </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ModernCard className="text-center p-6">
              <Target className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </ModernCard>
            <ModernCard className="text-center p-6">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">2000+</div>
              <div className="text-sm text-gray-600">RCT Completed</div>
            </ModernCard>
            <ModernCard className="text-center p-6">
              <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </ModernCard>
            <ModernCard className="text-center p-6">
              <DollarSign className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </ModernCard>
          </div>
        </section>

        {/* When You Need RCT */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              When Do You Need Root Canal Treatment?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Recognizing the symptoms early can help save your tooth and prevent more serious complications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ModernCard className="p-8">
              <AlertTriangle className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Symptoms</h3>
              <div className="space-y-4">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-700 text-sm">
                  <strong>Don't ignore these symptoms!</strong> Early treatment can save your tooth and prevent more
                  serious complications.
                </p>
              </div>
            </ModernCard>

            <ModernCard className="p-8">
              <Heart className="w-12 h-12 text-teal-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Root Canal Over Extraction?</h3>
              <div className="space-y-4">
                {rctBenefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <benefit.icon className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-700 text-sm">
                  <strong>Save your natural tooth!</strong> Root canal treatment is more cost-effective than extraction
                  and replacement.
                </p>
              </div>
            </ModernCard>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Root Canal Treatment Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Step-by-step approach ensuring comfortable, effective treatment with optimal results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentSteps.map((step, index) => (
              <ModernCard key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>
                <Badge variant="outline" className="text-xs border-teal-600 text-teal-600 mb-4">
                  {step.duration}
                </Badge>
                <div className="space-y-1">
                  {step.features.map((feature, i) => (
                    <div key={i} className="text-xs text-gray-600 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-teal-600 mr-1" />
                      {feature}
                    </div>
                  ))}
                </div>
              </ModernCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <ModernCard className="p-6 inline-block">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-teal-600" />
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Total Treatment Time</h3>
                  <p className="text-gray-600 text-sm">1-2 visits, 60-90 minutes per session</p>
                </div>
              </div>
            </ModernCard>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Affordable root canal treatment with no hidden costs. Payment plans available at 50% lower costs than other cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ModernCard className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Front Tooth RCT</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">₹3,000</div>
              <p className="text-gray-600 text-sm mb-4">Single canal, simpler procedure</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Digital X-rays included</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Temporary filling</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Follow-up care</span>
                </div>
              </div>
            </ModernCard>

            <ModernCard className="p-6 text-center border-2 border-teal-600 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white">
                Most Common
              </Badge>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Premolar RCT</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">₹5,000</div>
              <p className="text-gray-600 text-sm mb-4">Two canals, moderate complexity</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Digital X-rays included</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Rotary endodontics</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Crown recommendation</span>
                </div>
              </div>
            </ModernCard>

            <ModernCard className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Molar RCT</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">₹8,000</div>
              <p className="text-gray-600 text-sm mb-4">3-4 canals, complex procedure</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Advanced techniques</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Multiple visit option</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Crown strongly advised</span>
                </div>
              </div>
            </ModernCard>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              *Prices include consultation, X-rays, and temporary filling. Crown placement is additional.
            </p>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold" asChild>
              <a href="tel:7010650063">Get Exact Quote - Call Now</a>
            </Button>
          </div>
        </section>

        {/* Aftercare */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Post-Treatment Care</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Proper aftercare ensures successful healing and long-lasting results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aftercareInstructions.map((instruction, index) => (
              <ModernCard key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <instruction.icon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{instruction.title}</h3>
                <p className="text-gray-600 text-sm">{instruction.description}</p>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* Patient Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real experiences from patients who chose root canal treatment over extraction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {patientTestimonials.map((testimonial, index) => (
              <ModernCard key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic text-sm mb-3">"{testimonial.testimonial}"</p>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">{testimonial.treatment}</span>
                </div>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Common questions about root canal treatment answered by Dr. Rockson Samuel
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <ModernCard key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* Related Q&A Widget */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RelevantQAWidget
              title="Root Canal Treatment Questions"
              questions={[
                {
                  id: '1',
                  title: 'Is root canal treatment painful?',
                  slug: 'root-canal-treatment-pain',
                  excerpt: 'Modern root canal treatment is virtually painless with advanced anesthesia and techniques.',
                  helpfulVotes: 45,
                  views: 1200,
                  createdAt: '2023-12-15T10:00:00Z'
                },
                {
                  id: '2',
                  title: 'How long does root canal treatment take?',
                  slug: 'root-canal-treatment-duration',
                  excerpt: 'Most RCT procedures can be completed in 1-2 visits, with single-sitting options available.',
                  helpfulVotes: 38,
                  views: 980,
                  createdAt: '2023-12-10T14:30:00Z'
                },
                {
                  id: '3',
                  title: 'What is the success rate of root canal treatment?',
                  slug: 'root-canal-treatment-success-rate',
                  excerpt: 'Root canal treatment has over 95% success rate when performed by experienced professionals.',
                  helpfulVotes: 42,
                  views: 1100,
                  createdAt: '2023-12-08T09:15:00Z'
                }
              ]}
              serviceName="root canal treatment"
            />

            <ConditionWidget
              title="Related Dental Conditions"
              description="Common conditions that may require root canal treatment or related care."
              conditions={[
                {
                  name: "Tooth Decay",
                  slug: "tooth-decay",
                  severity: "moderate",
                  treatment: "Fillings, RCT if severe",
                  duration: "1-2 visits"
                },
                {
                  name: "Dental Abscess",
                  slug: "dental-abscess",
                  severity: "severe",
                  treatment: "Emergency RCT",
                  duration: "Immediate"
                },
                {
                  name: "Tooth Sensitivity",
                  slug: "tooth-sensitivity",
                  severity: "mild",
                  treatment: "Desensitizing treatment",
                  duration: "1 visit"
                }
              ]}
              showEmergency={true}
              showTreatment={true}
            />
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-16">
          <ServiceReviews 
            serviceName="Root Canal Treatment" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={342}
          />
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <ModernCard className="p-8 md:p-12 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200">
            <Heart className="w-16 h-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Save Your Tooth Today</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Don't let tooth pain control your life. Schedule your root canal consultation with{" "}
              <strong className="text-gray-900">Dr. Rockson Samuel</strong> and experience painless, effective treatment that saves your natural tooth at{" "}
              <strong className="text-gray-900">50% lower costs</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold" asChild>
                <a href="tel:7010650063">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: 7010650063
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-teal-600 text-gray-900 hover:bg-teal-50 bg-white font-bold" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <span>•</span>
              <span>Free Consultation</span>
              <span>•</span>
              <span>50% Cost Savings</span>
              <span>•</span>
              <span>95% Success Rate</span>
            </div>
          </ModernCard>
        </section>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Indira Dental Clinic - Root Canal Treatment",
              description: "Expert root canal treatment services in Vellore including painless RCT, endodontic therapy, and tooth preservation by Dr. Rockson Samuel.",
              url: "https://www.dentalclinicinvellore.in/services/root-canal-treatment",
              telephone: "+91 70106 50063",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar",
                addressLocality: "Vellore",
                addressRegion: "Tamil Nadu",
                postalCode: "632006",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "10:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "13:30",
                },
              ],
              medicalSpecialty: "Endodontics",
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Single Sitting Root Canal Treatment",
                  description: "Complete root canal treatment in a single visit using advanced techniques.",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Multi-Visit Root Canal Treatment",
                  description: "Complex root canal treatment completed over multiple visits for optimal results.",
                },
              ],
            }),
          }}
        />
      </div>
    </div>
  )
}