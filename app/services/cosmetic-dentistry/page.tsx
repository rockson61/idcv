import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Phone, Calendar, Clock, Star, Sparkles, Smile, Zap, Award, Users, TrendingUp, Shield, Heart, Globe, DollarSign, Target, BookOpen, MessageCircle, Play, Download, MapPin } from "lucide-react"
import { ModernCard, ModernCardContent, ModernCardDescription, ModernCardHeader, ModernCardTitle } from "@/components/ui/modern-card"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ServiceReviews } from "@/components/ui/service-reviews"
import { generateServiceReviews } from "@/lib/review-data"
import { RelevantQAWidget } from "@/components/widgets/relevant-qa-widget"
import { CompactServiceWidget } from "@/components/widgets/compact-service-widget"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { SectionContainer } from "@/components/ui/section-container"

const reviews = generateServiceReviews('Cosmetic Dentistry', 'teeth-whitening')

export const metadata: Metadata = {
  title: 'Best Cosmetic Dentistry in Vellore | Smile Makeover | Teeth Whitening | Dr. Rockson Samuel',
  description: 'Transform your smile with expert cosmetic dentistry in Vellore. Teeth whitening, veneers, smile makeover by Dr. Rockson Samuel. 60% lower costs than other cities. Book consultation now!',
  keywords: [
    'cosmetic dentistry vellore',
    'smile makeover vellore',
    'teeth whitening vellore',
    'veneers vellore',
    'dental aesthetics vellore',
    'cosmetic dentist vellore',
    'dental bonding vellore',
    'gum contouring vellore',
    'tooth reshaping vellore',
    'Dr Rockson Samuel cosmetic dentistry',
    'indira dental clinic cosmetic',
    'affordable cosmetic dentistry vellore'
  ],
  openGraph: {
    title: "Best Cosmetic Dentistry in Vellore | Smile Makeover | Indira Dental Clinic",
    description: "Transform your smile with professional cosmetic dentistry treatments. Teeth whitening, veneers, smile makeover by expert Dr. Rockson Samuel. 60% lower costs.",
    url: "https://www.dentalclinicinvellore.in/services/cosmetic-dentistry",
    images: [
      {
        url: "/cosmetic-dentistry-smile.jpg",
        width: 1200,
        height: 630,
        alt: "Cosmetic Dentistry Services - Beautiful Smile Transformation"
      }
    ]
  }
}

const services = [
  {
    title: "Professional Teeth Whitening",
    description: "Safe and effective teeth whitening treatments to brighten your smile by up to 8 shades in just one session with advanced laser technology.",
    image: "/teeth-whitening.jpg",
    price: "₹3,000 - ₹8,000",
    duration: "60-90 minutes",
    href: "/services/cosmetic-dentistry/teeth-whitening",
    features: ["In-Office Whitening", "Take-Home Kits", "Laser Whitening", "Stain Removal"],
    popular: true,
    savings: "60%",
    benefits: ["Instant results", "Pain-free procedure", "Long-lasting effects", "Safe for sensitive teeth"]
  },
  {
    title: "Porcelain Veneers",
    description: "Ultra-thin porcelain shells that cover the front surface of teeth to create a perfect, natural-looking smile with custom design.",
    image: "/porcelain-veneers.jpg",
    price: "₹8,000 - ₹15,000",
    duration: "2-3 visits",
    href: "/services/cosmetic-dentistry/veneers",
    features: ["Custom Design", "Natural Appearance", "Stain Resistant", "Long-lasting"],
    popular: true,
    savings: "55%",
    benefits: ["Natural look", "Durable material", "Stain resistant", "Custom fit"]
  },
  {
    title: "Dental Bonding",
    description: "Tooth-colored composite resin applied to repair chips, cracks, gaps, and discoloration for an improved smile in single visit.",
    image: "/dental-bonding.jpg",
    price: "₹2,000 - ₹5,000",
    duration: "30-60 minutes",
    href: "/services/cosmetic-dentistry/bonding",
    features: ["Same-Day Treatment", "Conservative Approach", "Color Matching", "Affordable Option"],
    popular: false,
    savings: "50%",
    benefits: ["Same-day results", "Conservative treatment", "Perfect color match", "Budget-friendly"]
  },
  {
    title: "Complete Smile Makeover",
    description: "Comprehensive cosmetic treatment combining multiple procedures to completely transform your smile with digital smile design.",
    image: "/smile-makeover.jpg",
    price: "₹25,000 - ₹75,000",
    duration: "Multiple visits",
    href: "/services/cosmetic-dentistry/smile-makeover",
    features: ["Custom Treatment Plan", "Multiple Procedures", "Digital Smile Design", "Dramatic Results"],
    popular: true,
    savings: "65%",
    benefits: ["Complete transformation", "Personalized plan", "Digital preview", "Life-changing results"]
  },
  {
    title: "Gum Contouring",
    description: "Reshape your gum line to create a more balanced and aesthetically pleasing smile using advanced laser technology.",
    image: "/gum-contouring.jpg",
    price: "₹5,000 - ₹12,000",
    duration: "60-90 minutes",
    href: "/services/cosmetic-dentistry/gum-contouring",
    features: ["Laser Technology", "Minimal Discomfort", "Quick Recovery", "Improved Proportions"],
    popular: false,
    savings: "45%",
    benefits: ["Laser precision", "Minimal discomfort", "Quick healing", "Perfect proportions"]
  },
  {
    title: "Tooth Reshaping",
    description: "Minor adjustments to tooth shape and size to improve overall smile harmony and appearance with conservative approach.",
    image: "/tooth-reshaping.jpg",
    price: "₹1,500 - ₹3,000",
    duration: "30-45 minutes",
    href: "/services/cosmetic-dentistry/tooth-reshaping",
    features: ["Conservative Treatment", "Immediate Results", "Pain-Free", "Enhanced Symmetry"],
    popular: false,
    savings: "40%",
    benefits: ["Conservative approach", "Instant results", "No pain", "Better symmetry"]
  },
]

const benefits = [
  {
    icon: Sparkles,
    title: "Enhanced Confidence",
    description: "A beautiful smile boosts self-confidence and makes a positive first impression in personal and professional settings.",
  },
  {
    icon: Smile,
    title: "Natural Results",
    description: "Our cosmetic treatments are designed to look completely natural while dramatically improving your smile's appearance.",
  },
  {
    icon: Zap,
    title: "Advanced Techniques",
    description: "We use the latest cosmetic dentistry techniques and materials for superior, long-lasting results.",
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    description: "All procedures are performed using safe, proven methods with minimal discomfort and quick recovery.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Each treatment is customized to your unique needs and aesthetic goals for optimal results.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Get premium cosmetic dentistry at 60% lower costs than other cities without compromising quality.",
  },
]

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Gandhi Nagar, Vellore",
    rating: 5,
    treatment: "Teeth Whitening",
    text: "Dr. Rockson Samuel provided amazing teeth whitening treatment. My smile is now 8 shades brighter! The procedure was painless and I saved 60% compared to Chennai prices.",
    image: "/indian-woman-smiling.png"
  },
  {
    name: "Rajesh Kumar",
    location: "Katpadi, Vellore",
    rating: 5,
    treatment: "Porcelain Veneers",
    text: "I got porcelain veneers for my front teeth and the results are incredible! The veneers look completely natural and I'm so confident now. Highly recommended!",
    image: "/indian-man-smiling.png"
  },
  {
    name: "Sunita Singh",
    location: "Sathuvachari, Vellore",
    rating: 5,
    treatment: "Smile Makeover",
    text: "Complete smile makeover transformed my confidence completely. Dr. Rockson Samuel's expertise and the modern technology used made the process comfortable and the results amazing.",
    image: "/indian-woman-happy.jpg"
  }
]

const faqs = [
  {
    question: "How long do cosmetic dentistry results last?",
    answer: "Results vary by treatment. Teeth whitening lasts 1-3 years, porcelain veneers can last 10-15 years, and dental bonding typically lasts 3-7 years with proper care. We provide detailed maintenance instructions to maximize longevity."
  },
  {
    question: "Is cosmetic dentistry painful?",
    answer: "Most cosmetic procedures are minimally invasive and cause little to no discomfort. We use local anesthesia when needed and offer sedation options for anxious patients. Our advanced techniques ensure maximum comfort."
  },
  {
    question: "How much does a smile makeover cost in Vellore?",
    answer: "Costs vary based on treatments included, but our prices are 60% lower than other cities. General teeth whitening starts from ₹3,000, veneers from ₹8,000, and complete smile makeovers from ₹25,000. We offer transparent pricing and financing options."
  },
  {
    question: "Can cosmetic dentistry fix crooked teeth?",
    answer: "Yes, we can address mild to moderate alignment issues with veneers or recommend orthodontic treatment for more significant corrections before cosmetic procedures. Each case is evaluated individually for the best approach."
  },
  {
    question: "How long does the cosmetic dentistry process take?",
    answer: "Simple procedures like teeth whitening take 60-90 minutes, while complex treatments like veneers require 2-3 visits. Complete smile makeovers may take several weeks to months depending on the extent of treatment needed."
  },
  {
    question: "Do you offer financing for cosmetic dentistry?",
    answer: "Yes, we offer flexible payment plans and financing options to make cosmetic dentistry affordable. We also provide EMI options and can work with your budget to create a treatment plan that fits your financial situation."
  }
]

const process = [
  {
    step: "01",
    title: "Free Consultation",
    description: "Schedule a free consultation where Dr. Rockson Samuel will evaluate your smile and discuss your aesthetic goals."
  },
  {
    step: "02",
    title: "Digital Smile Design",
    description: "Using advanced technology, we create a digital preview of your new smile to show you the expected results."
  },
  {
    step: "03",
    title: "Custom Treatment Plan",
    description: "We develop a personalized treatment plan that addresses your specific needs and fits your budget."
  },
  {
    step: "04",
    title: "Treatment Execution",
    description: "Our expert team performs the cosmetic procedures using state-of-the-art equipment and techniques."
  },
  {
    step: "05",
    title: "Follow-up Care",
    description: "We provide comprehensive aftercare instructions and follow-up appointments to ensure optimal results."
  }
]

export default function CosmeticDentistryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
          ]}
        />

      {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-teal-600 text-teal-700 font-semibold">
            Cosmetic Dentistry
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Smile with Expert Cosmetic Dentistry
            </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Achieve the smile of your dreams with our advanced cosmetic dentistry treatments. From teeth whitening to
            complete smile makeovers, <strong className="text-gray-900">Dr. Rockson Samuel</strong> creates beautiful, natural-looking results at{" "}
            <strong className="text-gray-900">60% lower costs</strong> than other cities.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold" asChild>
                <Link href="tel:7010650063">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 7010650063
                </Link>
              </Button>
              <Button
              size="lg"
              variant="outline"
              className="border-2 border-teal-600 text-gray-900 hover:bg-teal-50 bg-white font-semibold"
                asChild
              >
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Consultation
                </Link>
              </Button>
            </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ModernCard className="text-center p-6">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-sm text-gray-600">Smile Transformations</div>
            </ModernCard>
            <ModernCard className="text-center p-6">
              <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </ModernCard>
            <ModernCard className="text-center p-6">
              <Star className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Patient Rating</div>
            </ModernCard>
            <ModernCard className="text-center p-6">
              <DollarSign className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">60%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </ModernCard>
          </div>
        </section>

      {/* Services Grid */}
        <section className="mb-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Cosmetic Dentistry Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our comprehensive range of cosmetic treatments designed to enhance your smile's beauty and boost
              your confidence at <strong className="text-gray-900">affordable prices</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
              <ModernCard
              key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group relative h-full"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">Popular</Badge>
                </div>
              )}
              <div className="relative h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-teal-700">
                      Save {service.savings}
                    </Badge>
                  </div>
              </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">{service.description}</p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                      <span className="font-semibold text-teal-600">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <Link
                  href={service.href}
                    className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              </ModernCard>
          ))}
        </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Cosmetic Dentistry</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover how cosmetic dentistry can improve not just your smile, but your overall quality of life and confidence.
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ModernCard key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Cosmetic Dentistry Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From consultation to completion, we guide you through every step of your smile transformation journey.
            </p>
                  </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <ModernCard key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smile Transformation Stories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real testimonials from patients who have experienced our exceptional cosmetic dentistry treatments and achieved their dream smiles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ModernCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
                <p className="text-gray-700 mb-3">"{testimonial.text}"</p>
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
              Get answers to common questions about cosmetic dentistry treatments and our services.
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

        {/* Reviews Section */}
        <section className="mb-16">
          <ServiceReviews 
            serviceName="Cosmetic Dentistry" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={523}
          />
        </section>

        {/* Ask the Dentist - Related Questions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Cosmetic Dentistry</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real patient questions answered by Dr. Rockson Samuel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-teal-700">How long does teeth whitening last?</h3>
              <p className="text-gray-600 text-sm mb-4">Professional whitening results typically last 1-3 years with proper care and maintenance.</p>
              <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
            <GlassCard className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-teal-700">Are veneers permanent?</h3>
              <p className="text-gray-600 text-sm mb-4">Veneers are a permanent treatment as a small amount of enamel is removed. They last 10-15 years.</p>
              <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
            <GlassCard className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-teal-700">Is cosmetic dentistry covered by insurance?</h3>
              <p className="text-gray-600 text-sm mb-4">Most cosmetic procedures are not covered, but we offer flexible EMI options for your convenience.</p>
              <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600">
              <Link href="/ask-the-dentist/submit">
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask Your Own Question
              </Link>
            </Button>
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Dental Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our other specialized treatments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 transition-colors">Orthodontics & Braces</h3>
              <p className="text-gray-600 mb-4">Straighten teeth with braces or Invisalign</p>
              <Link href="/services/orthodontics" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
            <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 transition-colors">Dental Implants</h3>
              <p className="text-gray-600 mb-4">Permanent tooth replacement solution</p>
              <Link href="/services/dental-implants" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
            <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 transition-colors">Prosthodontics</h3>
              <p className="text-gray-600 mb-4">Crowns, bridges, and dentures</p>
              <Link href="/services/prosthodontics" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
        </div>
        </section>

      {/* CTA Section */}
        <section className="text-center">
          <ModernCard className="p-8 md:p-12 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready for Your Dream Smile?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with Dr. Rockson Samuel to discuss your smile goals and create a personalized
              treatment plan. Transform your smile at <strong className="text-gray-900">60% lower costs</strong> than other cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold" asChild>
                <Link href="tel:7010650063">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 7010650063
                </Link>
            </Button>
            <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-600 text-gray-900 hover:bg-teal-50 bg-white font-bold"
              asChild
            >
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
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
              <span>60% Cost Savings</span>
            <span>•</span>
            <span>Financing Available</span>
            </div>
          </ModernCard>
        </section>

        {/* Related Q&A and Services Widgets */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RelevantQAWidget
              title="Cosmetic Dentistry Questions"
              questions={[
                {
                  id: '1',
                  title: 'How long do teeth whitening results last?',
                  slug: 'teeth-whitening-results-duration',
                  excerpt: 'Professional teeth whitening results can last 1-3 years with proper maintenance.',
                  helpfulVotes: 55,
                  views: 1500,
                  createdAt: '2023-12-26T11:45:00Z'
                },
                {
                  id: '2',
                  title: 'Are porcelain veneers worth it?',
                  slug: 'porcelain-veneers-benefits',
                  excerpt: 'Porcelain veneers provide natural-looking, long-lasting smile transformation.',
                  helpfulVotes: 48,
                  views: 1200,
                  createdAt: '2023-12-25T14:30:00Z'
                },
                {
                  id: '3',
                  title: 'What is the cost of smile makeover?',
                  slug: 'smile-makeover-cost-breakdown',
                  excerpt: 'Smile makeover costs vary based on treatments needed and materials used.',
                  helpfulVotes: 42,
                  views: 1100,
                  createdAt: '2023-12-24T09:20:00Z'
                }
              ]}
              serviceName="cosmetic dentistry"
            />

            <CompactServiceWidget
              title="Related Cosmetic Services"
              description="Complementary cosmetic treatments for complete smile transformation."
              services={[
                { name: "Teeth Whitening", slug: "cosmetic-dentistry/teeth-whitening", price: "₹3,000 - ₹8,000", duration: "60-90 min" },
                { name: "Porcelain Veneers", slug: "cosmetic-dentistry/veneers", price: "₹15,000 - ₹25,000", duration: "2-3 visits" },
                { name: "Dental Bonding", slug: "cosmetic-dentistry/bonding", price: "₹2,000 - ₹5,000", duration: "30-60 min" },
                { name: "Gum Contouring", slug: "cosmetic-dentistry/gum-contouring", price: "₹5,000 - ₹10,000", duration: "1-2 hours" }
              ]}
              ctaText="View All Cosmetic Services"
              ctaLink="/services/cosmetic-dentistry"
            />
          </div>
        </section>

        {/* CTA Widget */}
        <CTAWidget
          title="Ready for Your Smile Transformation?"
          description="Get the beautiful smile you've always wanted with expert cosmetic dentistry from Dr. Rockson Samuel."
          primaryAction={{
            text: "Book Free Consultation",
            href: "/contact"
          }}
          secondaryAction={{
            text: "Ask About Cosmetic Options",
            href: "/ask-the-dentist/submit"
          }}
          benefits={[
            "Free smile analysis and consultation",
            "Flexible payment plans available",
            "15+ years cosmetic experience",
            "Natural-looking results guaranteed"
          ]}
          showRating={true}
          showAvailability={true}
        />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Indira Dental Clinic - Cosmetic Dentistry",
              description: "Professional cosmetic dentistry services in Vellore including teeth whitening, porcelain veneers, dental bonding, and smile makeovers by Dr. Rockson Samuel.",
            url: "https://www.dentalclinicinvellore.in/services/cosmetic-dentistry",
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
            medicalSpecialty: "Cosmetic Dentistry",
            availableService: services.map((service) => ({
              "@type": "MedicalProcedure",
              name: service.title,
              description: service.description,
            })),
          }),
        }}
      />
      </div>
    </div>
  )
}