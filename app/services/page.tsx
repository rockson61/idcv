import type { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ServiceReviews } from "@/components/ui/service-reviews"
import { generateServiceReviews } from "@/lib/review-data"
import { SectionContainer } from "@/components/ui/section-container"
import {
  Stethoscope,
  Smile,
  Zap,
  Shield,
  Heart,
  Baby,
  Scissors,
  AlertTriangle,
  Phone,
  Calendar,
  Star,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  TrendingUp,
  Users,
  MapPin,
  DollarSign,
  Globe,
  Target,
  BarChart3,
  BookOpen,
  MessageCircle,
  Play,
  Download,
} from "lucide-react"
import Link from "next/link"

const reviews = generateServiceReviews('Dental Services', 'default')

export const metadata: Metadata = {
  title: 'Best Dental Services in Vellore | Complete Dental Care | Indira Dental Clinic',
  description: 'Comprehensive dental services in Vellore by expert Dr. Rockson Samuel. RCT, implants, braces, cosmetic dentistry, general care. 50% lower costs. Book appointment now!',
  keywords: [
    'dental services vellore',
    'dentist vellore',
    'dental clinic vellore',
    'root canal treatment vellore',
    'dental implants vellore',
    'braces vellore',
    'cosmetic dentistry vellore',
    'general dentistry vellore',
    'pediatric dentistry vellore',
    'emergency dentist vellore',
    'Dr Rockson Samuel',
    'indira dental clinic',
    'affordable dental care vellore'
  ],
  openGraph: {
    title: 'Complete Dental Services in Vellore | Indira Dental Clinic',
    description: 'Expert dental care by Dr. Rockson Samuel. Comprehensive services including RCT, implants, braces, cosmetic dentistry. 50% lower costs than other cities.',
    url: 'https://www.dentalclinicinvellore.in/services',
    images: [
      {
        url: '/dental-services-vellore.jpg',
        width: 1200,
        height: 630,
        alt: 'Complete Dental Services in Vellore'
      }
    ]
  }
}

const services = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    icon: Stethoscope,
    description: "Comprehensive oral health care including routine checkups, cleanings, and preventive treatments for optimal dental wellness.",
    treatments: [
      "Dental Checkups & Examinations",
      "Professional Teeth Cleaning",
      "Dental Fillings (Composite & Amalgam)",
      "Tooth Extractions",
      "Fluoride Treatments",
      "Oral Cancer Screening",
    ],
    price: "₹500 - ₹3,000",
    duration: "30-60 minutes",
    href: "/services/general-dentistry",
    popular: true,
    savings: "50%",
    features: ["Pain-free procedures", "Latest technology", "Same-day appointments"]
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: Smile,
    description: "Transform your smile with advanced cosmetic dental procedures for enhanced aesthetics and confidence.",
    treatments: [
      "Teeth Whitening & Bleaching",
      "Porcelain Veneers",
      "Dental Bonding",
      "Smile Makeover",
      "Gum Contouring",
      "Tooth Reshaping",
    ],
    price: "₹2,000 - ₹25,000",
    duration: "1-3 hours",
    href: "/services/cosmetic-dentistry",
    popular: true,
    savings: "60%",
    features: ["Natural-looking results", "Long-lasting effects", "Custom treatment plans"]
  },
  {
    id: "orthodontics",
    title: "Orthodontics & Braces",
    icon: Zap,
    description: "Straighten teeth and correct bite issues with traditional braces and modern aligners for a perfect smile.",
    treatments: [
      "Traditional Metal Braces",
      "Ceramic Braces",
      "Invisalign Clear Aligners",
      "Retainers",
      "Bite Correction",
      "Early Orthodontic Treatment",
    ],
    price: "₹25,000 - ₹80,000",
    duration: "12-24 months",
    href: "/services/orthodontics",
    popular: true,
    savings: "45%",
    features: ["Flexible payment plans", "Progress tracking", "Expert supervision"]
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    icon: Shield,
    description: "Permanent tooth replacement solution with titanium implants for natural-looking, long-lasting results.",
    treatments: [
      "Single Tooth Implants",
      "Multiple Tooth Implants",
      "Full Mouth Reconstruction",
      "Implant-Supported Dentures",
      "Bone Grafting",
      "Sinus Lift Procedures",
    ],
    price: "₹25,000 - ₹50,000",
    duration: "3-6 months",
    href: "/services/dental-implants",
    popular: true,
    savings: "55%",
    features: ["Lifetime warranty", "Advanced materials", "Minimal discomfort"]
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    icon: Heart,
    description: "Save infected or damaged teeth with advanced endodontic treatment techniques and pain-free procedures.",
    treatments: [
      "Single Sitting RCT",
      "Multi-Visit RCT",
      "Retreatment",
      "Apicoectomy",
      "Pulp Capping",
      "Post & Core Placement",
    ],
    price: "₹3,000 - ₹8,000",
    duration: "1-3 visits",
    href: "/services/root-canal-treatment",
    popular: true,
    savings: "50%",
    features: ["Pain-free treatment", "Single sitting option", "Digital X-rays"]
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    icon: Baby,
    description: "Specialized dental care for children with gentle, child-friendly treatment approaches and fun environment.",
    treatments: [
      "Children's Dental Checkups",
      "Fluoride Treatments",
      "Dental Sealants",
      "Space Maintainers",
      "Pulp Therapy",
      "Habit Breaking Appliances",
    ],
    price: "₹500 - ₹5,000",
    duration: "30-45 minutes",
    href: "/services/pediatric-dentistry",
    popular: false,
    savings: "40%",
    features: ["Child-friendly environment", "Gentle approach", "Parent education"]
  },
  {
    id: "periodontics",
    title: "Periodontics",
    icon: Scissors,
    description: "Treatment of gum diseases and supporting structures of teeth for optimal oral health and gum wellness.",
    treatments: [
      "Scaling & Root Planing",
      "Gum Disease Treatment",
      "Gum Grafting",
      "Crown Lengthening",
      "Periodontal Maintenance",
      "Laser Gum Therapy",
    ],
    price: "₹2,000 - ₹15,000",
    duration: "1-2 hours",
    href: "/services/periodontics",
    popular: false,
    savings: "45%",
    features: ["Laser treatment", "Non-surgical options", "Long-term maintenance"]
  },
  {
    id: "emergency-dentistry",
    title: "Emergency Dentistry",
    icon: AlertTriangle,
    description: "Immediate dental care for urgent situations and dental emergencies with 24/7 availability.",
    treatments: [
      "Severe Toothache Relief",
      "Dental Trauma Treatment",
      "Broken Tooth Repair",
      "Lost Filling Replacement",
      "Abscess Treatment",
      "Emergency Extractions",
    ],
    price: "₹1,000 - ₹5,000",
    duration: "30-90 minutes",
    href: "/services/emergency-dentistry",
    popular: true,
    savings: "30%",
    features: ["24/7 availability", "Same-day treatment", "Immediate relief"]
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Dr. Rockson Samuel brings over 15 years of dental expertise and specialized training",
  },
  {
    icon: Star,
    title: "500+ Happy Patients",
    description: "Trusted by hundreds across Vellore and Tamil Nadu with 4.9/5 rating",
  },
  {
    icon: CheckCircle2,
    title: "Latest Technology",
    description: "State-of-the-art equipment and modern treatment techniques for better results",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Open 7 days a week with extended hours for your convenience",
  },
]

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Gandhi Nagar, Vellore",
    rating: 5,
    treatment: "Dental Implants",
    text: "Dr. Rockson Samuel provided excellent dental implant treatment. The procedure was painless and the results are amazing. I saved 50% compared to Chennai prices!",
    image: "/indian-woman-smiling.png"
  },
  {
    name: "Rajesh Kumar",
    location: "Katpadi, Vellore",
    rating: 5,
    treatment: "Root Canal Treatment",
    text: "Best dental clinic in Vellore! The RCT was completed in a single sitting with no pain. Highly recommended for all dental treatments.",
    image: "/indian-man-smiling.png"
  },
  {
    name: "Sunita Singh",
    location: "Sathuvachari, Vellore",
    rating: 5,
    treatment: "Braces Treatment",
    text: "My daughter got braces treatment here and we're very satisfied with the results. The clinic is modern and the staff is very friendly.",
    image: "/indian-woman-happy.jpg"
  }
]

const faqs = [
  {
    question: "What dental services do you offer in Vellore?",
    answer: "We offer comprehensive dental services including general dentistry, cosmetic dentistry, orthodontics, dental implants, root canal treatment, pediatric dentistry, periodontics, and emergency dental care. All services are provided by experienced Dr. Rockson Samuel using latest technology."
  },
  {
    question: "How much do dental services cost in Vellore?",
    answer: "Our dental services cost 50% less than other cities. General dentistry starts from ₹500, cosmetic procedures from ₹2,000, braces from ₹25,000, and dental implants from ₹25,000. We provide transparent pricing with no hidden costs."
  },
  {
    question: "Do you provide emergency dental care?",
    answer: "Yes, we provide 24/7 emergency dental care for urgent situations like severe toothache, dental trauma, broken teeth, and abscesses. Call 7010650063 for immediate assistance."
  },
  {
    question: "Is dental treatment in Vellore safe and reliable?",
    answer: "Absolutely! Dr. Rockson Samuel has 15+ years of experience and uses state-of-the-art equipment. Our clinic follows strict hygiene protocols and international safety standards."
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
          ]}
        />

        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-teal-600 text-teal-700 font-semibold">
            Comprehensive Dental Care
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Complete Dental Services in Vellore
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            From routine checkups to advanced procedures, <strong className="text-gray-900">Dr. Rockson Samuel</strong>{" "}
            and our expert team provide comprehensive dental care using the{" "}
            <strong className="text-gray-900">latest technology</strong>. Experience painless, professional treatment at{" "}
            <strong className="text-gray-900">50% lower costs</strong> than other cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold" asChild>
              <a href="tel:7010650063">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 7010650063
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-teal-600 text-gray-900 hover:bg-teal-50 bg-white font-semibold"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ModernCard className="text-center p-6">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Patients</div>
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
              <div className="text-3xl font-bold text-gray-900 mb-2">50%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </ModernCard>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Indira Dental Clinic?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience the difference with our <strong className="text-gray-900">expert care</strong>,{" "}
              <strong className="text-gray-900">advanced technology</strong>, and{" "}
              <strong className="text-gray-900">affordable pricing</strong>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <ModernCard key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <item.icon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Complete Dental Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer a <strong className="text-gray-900">comprehensive range</strong> of dental services to meet all your
              oral health needs, from preventive care to advanced treatments at <strong className="text-gray-900">50% lower costs</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ModernCard key={service.id} hover className="h-full relative">
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                    Popular
                  </Badge>
                )}
                <ModernCardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-teal-50 mr-4">
                      <service.icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <div>
                      <ModernCardTitle className="text-xl">{service.title}</ModernCardTitle>
                      <Badge variant="outline" className="mt-1 text-xs">
                        Save {service.savings}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-700">{service.description}</p>
                </ModernCardHeader>
                <ModernCardContent>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Treatments Include:</h4>
                      <ul className="space-y-1">
                        {service.treatments.slice(0, 4).map((treatment, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-center">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                            {treatment}
                          </li>
                        ))}
                        {service.treatments.length > 4 && (
                          <li className="text-sm text-teal-600 font-semibold">
                            +{service.treatments.length - 4} more treatments
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 block">Price Range:</span>
                        <div className="font-bold text-gray-900">{service.price}</div>
                      </div>
                      <div>
                        <span className="text-gray-600 block">Duration:</span>
                        <div className="font-bold text-gray-900">{service.duration}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link href={service.href}>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                      Learn More & Book
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </ModernCardContent>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real testimonials from <strong className="text-gray-900">satisfied patients</strong> who have experienced
              our exceptional dental care and saved thousands on treatment costs.
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

        {/* FAQs */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Get answers to common questions about our <strong className="text-gray-900">dental services</strong> and{" "}
              <strong className="text-gray-900">treatment process</strong>
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ModernCard key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </ModernCard>
            ))}
          </div>
        </section>

        {/* Emergency Care Section */}
        <section className="mb-16">
          <ModernCard className="p-8 bg-red-50 border-2 border-red-300">
            <div className="text-center">
              <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dental Emergency?</h2>
              <p className="text-lg text-gray-900 mb-6 max-w-2xl mx-auto">
                Don't wait! Dental emergencies require <strong className="text-gray-900">immediate attention</strong>. We
                provide same-day emergency appointments for severe pain, trauma, or urgent dental issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold" asChild>
                  <a href="tel:7010650063">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency: 7010650063
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-red-600 text-gray-900 hover:bg-red-50 bg-white font-bold"
                  asChild
                >
                  <Link href="/services/emergency-dentistry">Learn About Emergency Care</Link>
                </Button>
              </div>
            </div>
          </ModernCard>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <ModernCard className="p-8 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Dental Journey?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Schedule your consultation today and discover why{" "}
              <strong className="text-gray-900">hundreds of patients</strong> trust Dr. Rockson Samuel for their dental
              care needs. Save <strong className="text-gray-900">50% on treatment costs</strong> compared to other cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Appointment
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-600 text-gray-900 hover:bg-teal-50 bg-white font-bold"
                asChild
              >
                <a href="tel:7010650063">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Consultation
                </a>
              </Button>
            </div>
          </ModernCard>
        </section>

        {/* Reviews Section */}
        <section className="mb-16">
          <ServiceReviews 
            serviceName="All Dental Services" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={1250}
          />
        </section>

        {/* Ask the Dentist */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions About Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get expert answers from Dr. Rockson Samuel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-teal-700">Which service do I need?</h3>
              <p className="text-gray-600 text-sm mb-4">Book a consultation for proper diagnosis and personalized treatment planning.</p>
              <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
            <GlassCard className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-teal-700">Do you accept insurance?</h3>
              <p className="text-gray-600 text-sm mb-4">Yes, we work with most major dental insurance providers. EMI options also available.</p>
              <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
            <GlassCard className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-teal-700">How much do treatments cost?</h3>
              <p className="text-gray-600 text-sm mb-4">Our prices are 50-60% lower than other cities. Transparent pricing, no hidden costs.</p>
              <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600">
              <Link href="/ask-the-dentist/submit">
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask Your Question
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}