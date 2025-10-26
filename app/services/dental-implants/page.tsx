import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModernCard, ModernCardContent, ModernCardDescription, ModernCardHeader, ModernCardTitle } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { RelevantQAWidget } from "@/components/widgets/relevant-qa-widget"
import { CompactServiceWidget } from "@/components/widgets/compact-service-widget"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { ServiceReviews } from "@/components/ui/service-reviews"
import { generateServiceReviews } from "@/lib/review-data"
import { CheckCircle, Clock, Calendar, Phone, DollarSign, Star, Award, Users, Shield, Heart, Zap, TrendingUp, ArrowRight, MapPin, Globe, Target, BookOpen, MessageCircle, Play, Download } from "lucide-react"

const reviews = generateServiceReviews('Dental Implants', 'dental-implants')

export const metadata: Metadata = {
  title: 'Best Dental Implants in Vellore | Single & Multiple Tooth Implants | Dr. Rockson Samuel',
  description: 'Expert dental implants in Vellore by Dr. Rockson Samuel. Single and multiple tooth implants with lifetime warranty. 55% lower costs than other cities. Book consultation now!',
  keywords: [
    'dental implants vellore',
    'single tooth implant vellore',
    'multiple tooth implants vellore',
    'all on 4 implants vellore',
    'implant supported dentures vellore',
    'dental implant surgery vellore',
    'titanium implants vellore',
    'dental implant cost vellore',
    'Dr Rockson Samuel implants',
    'indira dental clinic implants',
    'affordable dental implants vellore',
    'bone grafting vellore'
  ],
  openGraph: {
    title: 'Best Dental Implants in Vellore | Single & Multiple Tooth Implants | Indira Dental Clinic',
    description: 'Expert dental implants by Dr. Rockson Samuel. Single and multiple tooth implants with lifetime warranty. 55% lower costs than other cities.',
    url: 'https://www.dentalclinicinvellore.in/services/dental-implants',
    images: [
      {
        url: '/dental-implant-stages.png',
        width: 1200,
        height: 630,
        alt: 'Dental Implant Treatment Process'
      }
    ]
  }
}

const implantTypes = [
  {
    title: "Single Tooth Implants",
    description: "Perfect for replacing one or more individual missing teeth without affecting adjacent healthy teeth.",
    image: "/dental-implant-stages.png",
    price: "₹25,000 - ₹35,000",
    duration: "3-6 months",
    features: [
      "Preserves adjacent healthy teeth",
      "Prevents bone loss",
      "Natural look and function",
      "Lifetime warranty"
    ],
    benefits: ["Conservative approach", "Maintains bone density", "Natural appearance", "Easy maintenance"],
    popular: true,
    savings: "55%"
  },
  {
    title: "All-on-4 Implants",
    description: "Revolutionary technique that uses just 4 implants to support a full arch of teeth, ideal for those missing all teeth.",
    image: "/dental-implant-stages.png",
    price: "₹1,50,000 - ₹2,00,000",
    duration: "3-6 months",
    features: [
      "Full arch restoration with only 4 implants",
      "Immediate loading possible",
      "Reduced treatment time",
      "Cost-effective solution"
    ],
    benefits: ["Complete restoration", "Minimal implants needed", "Faster treatment", "Immediate results"],
    popular: true,
    savings: "60%"
  },
  {
    title: "Implant-Supported Dentures",
    description: "Combines the stability of implants with the affordability of dentures for a secure, comfortable fit.",
    image: "/dental-implant-stages.png",
    price: "₹80,000 - ₹1,20,000",
    duration: "2-4 months",
    features: [
      "No slipping or clicking",
      "Improved chewing ability",
      "More affordable than full implants",
      "Secure fit"
    ],
    benefits: ["Stable fit", "Better function", "Affordable option", "Easy to maintain"],
    popular: false,
    savings: "50%"
  },
  {
    title: "Multiple Tooth Implants",
    description: "Replace several missing teeth with individual implants for optimal function and aesthetics.",
    image: "/dental-implant-stages.png",
    price: "₹60,000 - ₹1,50,000",
    duration: "4-8 months",
    features: [
      "Individual tooth replacement",
      "Natural appearance",
      "Preserves bone structure",
      "Long-lasting solution"
    ],
    benefits: ["Natural look", "Individual replacement", "Bone preservation", "Durable results"],
    popular: false,
    savings: "50%"
  }
]

const benefits = [
  {
    icon: Heart,
    title: "Natural Look and Feel",
    description: "Dental implants look, feel, and function like your natural teeth, allowing you to eat, speak, and smile with confidence."
  },
  {
    icon: Shield,
    title: "Prevents Bone Loss",
    description: "Implants stimulate bone growth and prevent the jawbone deterioration that occurs when teeth are missing."
  },
  {
    icon: Zap,
    title: "Long-Lasting Solution",
    description: "With proper care, dental implants can last a lifetime, making them a cost-effective long-term investment."
  },
  {
    icon: Star,
    title: "Improved Oral Health",
    description: "Unlike bridges, dental implants don't require reducing adjacent teeth, preserving more of your natural tooth structure."
  },
  {
    icon: Users,
    title: "Enhanced Comfort",
    description: "Implants eliminate the discomfort and inconvenience of removable dentures, as they become a permanent part of your mouth."
  },
  {
    icon: Award,
    title: "Improved Speech",
    description: "Poorly fitted dentures can slip, causing mumbling. Implants allow you to speak without worrying about dentures slipping."
  }
]

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Dr. Rockson Samuel evaluates your oral health, takes 3D scans, and creates a personalized treatment plan."
  },
  {
    step: "02",
    title: "Implant Placement",
    description: "The titanium implant is surgically placed into the jawbone under local anesthesia with minimal discomfort."
  },
  {
    step: "03",
    title: "Healing & Osseointegration",
    description: "The implant fuses with your jawbone through osseointegration, creating a strong foundation for your new tooth."
  },
  {
    step: "04",
    title: "Abutment Placement",
    description: "Once osseointegration is complete, an abutment is attached to connect the implant to the crown."
  },
  {
    step: "05",
    title: "Crown Placement",
    description: "A custom-made crown that matches your natural teeth is attached, completing your smile restoration."
  }
]

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Gandhi Nagar, Vellore",
    rating: 5,
    treatment: "Single Tooth Implant",
    text: "Dr. Rockson Samuel provided excellent dental implant treatment. The procedure was painless and the results are amazing. I saved 55% compared to Chennai prices and now have a perfect smile!",
    image: "/indian-woman-smiling.png"
  },
  {
    name: "Rajesh Kumar",
    location: "Katpadi, Vellore",
    rating: 5,
    treatment: "Multiple Implants",
    text: "I had two molars replaced with implants and they feel just like my natural teeth. The procedure was well-explained and the follow-up care was thorough. Highly recommended!",
    image: "/indian-man-smiling.png"
  },
  {
    name: "Sunita Singh",
    location: "Sathuvachari, Vellore",
    rating: 5,
    treatment: "All-on-4 Implants",
    text: "Complete smile transformation with All-on-4 implants. Dr. Rockson Samuel's expertise and the modern technology used made the process comfortable and the results amazing.",
    image: "/indian-woman-happy.jpg"
  }
]

const faqs = [
  {
    question: "Am I a good candidate for dental implants?",
    answer: "Most people with good general and oral health are candidates for dental implants. Ideal candidates have healthy gums, sufficient bone density, good oral hygiene habits, and no uncontrolled chronic conditions. Even with bone loss, Dr. Rockson Samuel can perform bone grafting procedures to create a solid foundation for implants."
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care and maintenance, dental implants can last a lifetime. The titanium post can remain in place for life with good oral hygiene and regular dental check-ups. The crown typically lasts 10-15 years before needing replacement. We provide a lifetime warranty on our implants."
  },
  {
    question: "Is the dental implant procedure painful?",
    answer: "Most patients are surprised by how comfortable the procedure is. The surgery is performed under local anesthesia, so you won't feel any pain during the procedure. Dr. Rockson Samuel also offers sedation options for anxious patients. Post-procedure discomfort is minimal and can be managed with over-the-counter pain medications."
  },
  {
    question: "How much do dental implants cost in Vellore?",
    answer: "At our Vellore dental clinic, dental implant costs start from ₹25,000 for a single tooth implant. All-on-4 implants start from ₹1,50,000 per arch. Our prices are 55% lower than other cities. We offer flexible payment plans and 0% EMI options to make dental implants more affordable."
  },
  {
    question: "How long does the entire dental implant process take?",
    answer: "The complete dental implant process typically takes 3-6 months from start to finish. This includes consultation and planning (1-2 weeks), implant placement surgery (1-2 hours per implant), osseointegration (2-6 months), abutment placement (2 weeks healing), and final crown placement (1-2 weeks). In some cases, we offer immediate loading options."
  },
  {
    question: "How do I care for my dental implants?",
    answer: "Dental implants require the same care as natural teeth: brush twice daily, floss daily around the implant, use antimicrobial mouthwash, visit for regular check-ups every 6 months, avoid chewing hard items, and quit smoking. We provide detailed care instructions specific to your situation."
  }
]

export default function DentalImplantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
    <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Dental Implants', href: '/services/dental-implants' },
          ]}
        />

        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-teal-600 text-teal-700 font-semibold">
            Dental Implants
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Advanced Dental Implants in Vellore
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the gold standard in tooth replacement with dental implants at{" "}
            <strong className="text-gray-900">Dr. Rockson Samuel's</strong> clinic in Vellore. Our advanced implant solutions provide{" "}
            <strong className="text-gray-900">permanent, natural-looking teeth</strong> that restore both function and confidence with a{" "}
            <strong className="text-gray-900">remarkable 98% success rate</strong> at <strong className="text-gray-900">55% lower costs</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold" asChild>
            <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
            </Link>
              </Button>
            <Button size="lg" variant="outline" className="border-2 border-teal-600 text-gray-900 hover:bg-teal-50 bg-white font-semibold" asChild>
              <a href="tel:7010650063">
                <Phone className="w-5 h-5 mr-2" />
                Call: 7010650063
              </a>
              </Button>
          </div>
        </section>

        {/* Stats Section */}
      <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ModernCard className="text-center p-6">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-sm text-gray-600">Successful Implants</div>
            </ModernCard>
            <ModernCard className="text-center p-6">
              <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </ModernCard>
            <ModernCard className="text-center p-6">
              <Star className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Patient Rating</div>
            </ModernCard>
            <ModernCard className="text-center p-6">
              <DollarSign className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">55%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </ModernCard>
        </div>
      </section>

        {/* Implant Types */}
      <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Dental Implants We Offer</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer comprehensive dental implant solutions to meet every patient's unique needs and budget requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implantTypes.map((implant, index) => (
              <ModernCard key={index} className="h-full relative">
                {implant.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                    Popular
                  </Badge>
                )}
                <div className="relative h-48 mb-4">
                  <Image
                    src={implant.image}
                    alt={implant.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-teal-700">
                      Save {implant.savings}
                    </Badge>
        </div>
                </div>
                <ModernCardHeader>
                  <ModernCardTitle className="text-xl">{implant.title}</ModernCardTitle>
                  <ModernCardDescription>{implant.description}</ModernCardDescription>
                </ModernCardHeader>
                <ModernCardContent>
                  <div className="space-y-4">
                <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {implant.features.map((feature, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center">
                            <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                            {feature}
              </li>
                        ))}
            </ul>
          </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
                        <span className="text-gray-600 block">Price Range:</span>
                        <div className="font-bold text-teal-600">{implant.price}</div>
                </div>
                <div>
                        <span className="text-gray-600 block">Duration:</span>
                        <div className="font-bold text-gray-900">{implant.duration}</div>
                </div>
              </div>

                <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {implant.benefits.map((benefit, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                </div>
              </div>
            </div>
                </ModernCardContent>
              </ModernCard>
            ))}
        </div>
      </section>

        {/* Benefits Section */}
      <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Choosing Dental Implants</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover why dental implants are the gold standard for tooth replacement and how they can improve your quality of life.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Dental Implant Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From consultation to completion, we guide you through every step of your dental implant journey with precision and care.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dental Implant Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real testimonials from patients who have experienced our exceptional dental implant treatments and achieved their dream smiles.
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
              Get answers to common questions about dental implants and our treatment process.
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
            serviceName="Dental Implants" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={456}
          />
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <ModernCard className="p-8 md:p-12 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Restore Your Smile with Dental Implants?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Take the first step towards a complete, confident smile with a free dental implant consultation with{" "}
              <strong className="text-gray-900">Dr. Rockson Samuel</strong>. Save <strong className="text-gray-900">55% on treatment costs</strong> compared to other cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-teal-600 text-gray-900 hover:bg-teal-50 bg-white font-bold" asChild>
                <a href="tel:7010650063">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 7010650063
                </a>
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
              <span>55% Cost Savings</span>
              <span>•</span>
              <span>Lifetime Warranty</span>
            </div>
          </ModernCard>
      </section>

        {/* Related Q&A and Services Widgets */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RelevantQAWidget
              title="Dental Implant Questions"
              questions={[
                {
                  id: '1',
                  title: 'How long do dental implants last?',
                  slug: 'dental-implants-longevity',
                  excerpt: 'Dental implants can last a lifetime with proper care and maintenance.',
                  helpfulVotes: 65,
                  views: 1800,
                  createdAt: '2023-12-25T14:30:00Z'
                },
                {
                  id: '2',
                  title: 'Are dental implants painful?',
                  slug: 'dental-implants-pain-level',
                  excerpt: 'Most patients report minimal discomfort during and after implant surgery.',
                  helpfulVotes: 58,
                  views: 1600,
                  createdAt: '2023-12-22T11:20:00Z'
                },
                {
                  id: '3',
                  title: 'What is the cost of dental implants?',
                  slug: 'dental-implants-cost-breakdown',
                  excerpt: 'Dental implant costs vary based on type, location, and additional procedures needed.',
                  helpfulVotes: 72,
                  views: 2000,
                  createdAt: '2023-12-20T09:15:00Z'
                }
              ]}
              serviceName="dental implants"
            />

            <CompactServiceWidget
              title="Related Dental Services"
              description="Complementary services that work well with dental implants."
              services={[
                { name: "Bone Grafting", slug: "oral-surgery/bone-grafting", price: "₹8,000 - ₹15,000", duration: "1-2 hours" },
                { name: "Sinus Lift", slug: "oral-surgery/sinus-lift", price: "₹12,000 - ₹20,000", duration: "1-2 hours" },
                { name: "Teeth Extraction", slug: "oral-surgery/tooth-extraction", price: "₹1,500 - ₹3,000", duration: "30-60 min" },
                { name: "Dental Crowns", slug: "restorative-dentistry/crowns", price: "₹8,000 - ₹15,000", duration: "2 visits" }
              ]}
              ctaText="View All Services"
              ctaLink="/services"
            />
          </div>
        </section>

        {/* CTA Widget */}
        <CTAWidget
          title="Ready for Your New Smile?"
          description="Transform your life with dental implants. Get expert care from Dr. Rockson Samuel at 50% lower costs."
          primaryAction={{
            text: "Book Free Consultation",
            href: "/contact"
          }}
          secondaryAction={{
            text: "Ask About Implants",
            href: "/ask-the-dentist/submit"
          }}
          benefits={[
            "Free consultation and X-rays",
            "Flexible payment plans available",
            "15+ years implant experience",
            "Same-day temporary teeth option"
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
              name: "Indira Dental Clinic - Dental Implants",
              description: "Expert dental implant services in Vellore including single tooth implants, multiple implants, All-on-4 implants, and implant-supported dentures by Dr. Rockson Samuel.",
              url: "https://www.dentalclinicinvellore.in/services/dental-implants",
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
              medicalSpecialty: "Dental Implants",
              availableService: implantTypes.map((implant) => ({
                "@type": "MedicalProcedure",
                name: implant.title,
                description: implant.description,
              })),
            }),
          }}
        />
        </div>
    </div>
  )
}