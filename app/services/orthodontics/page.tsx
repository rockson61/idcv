import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Phone, Calendar, Clock, Star, Zap, Shield, Users, MessageCircle, Heart } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ServiceReviews } from "@/components/ui/service-reviews"
import { generateServiceReviews } from "@/lib/review-data"

const reviews = generateServiceReviews('Orthodontics', 'orthodontics')

export const metadata: Metadata = {
  title: 'Orthodontics & Braces Treatment in Vellore | Metal & Ceramic Braces | Indira Dental Clinic',
  description: 'Expert orthodontics treatment in Vellore. Metal braces, ceramic braces, Invisalign. Straighten teeth with Dr. Rockson Samuel. 50% lower costs than other cities.',
  keywords: ['orthodontics vellore', 'braces treatment', 'metal braces', 'ceramic braces', 'Invisalign vellore', 'teeth straightening'],
  openGraph: {
    title: "Orthodontics & Braces in Vellore | Invisalign & Traditional Braces",
    description:
      "Professional orthodontic treatment with braces and Invisalign to straighten teeth and improve smiles.",
    images: [
      {
        url: "/orthodontic-braces.jpg",
        width: 1200,
        height: 630,
        alt: "Orthodontic Treatment - Braces and Invisalign",
      },
    ],
  },
}

const services = [
  {
    title: "Traditional Metal Braces",
    description:
      "Proven and effective metal braces that can correct even the most complex orthodontic issues with reliable results.",
    image: "/traditional-braces.jpg",
    price: "₹25,000 - ₹45,000",
    duration: "18-36 months",
    href: "/services/orthodontics/traditional-braces",
    features: ["Most Effective", "Suitable for All Ages", "Durable", "Cost-Effective"],
    popular: true,
  },
  {
    title: "Ceramic Braces",
    description:
      "Tooth-colored ceramic braces that blend with your natural teeth for a more aesthetic orthodontic treatment.",
    image: "/ceramic-braces.jpg",
    price: "₹35,000 - ₹55,000",
    duration: "18-30 months",
    href: "/services/orthodontics/ceramic-braces",
    features: ["Aesthetic Appeal", "Less Visible", "Effective Treatment", "Comfortable"],
  },
  {
    title: "Invisalign Clear Aligners",
    description:
      "Nearly invisible, removable aligners that gradually straighten teeth without the appearance of traditional braces.",
    image: "/invisalign-aligners.jpg",
    price: "₹80,000 - ₹1,50,000",
    duration: "12-24 months",
    href: "/services/orthodontics/invisalign",
    features: ["Nearly Invisible", "Removable", "Comfortable", "Easy Maintenance"],
    popular: true,
  },
  {
    title: "Lingual Braces",
    description: "Braces placed on the inside surface of teeth, making them completely invisible from the outside.",
    image: "/lingual-braces.jpg",
    price: "₹1,00,000 - ₹1,80,000",
    duration: "20-36 months",
    href: "/services/orthodontics/lingual-braces",
    features: ["Completely Hidden", "Custom Made", "Effective", "Professional Appearance"],
  },
  {
    title: "Retainers",
    description: "Custom-made retainers to maintain your new smile after orthodontic treatment is completed.",
    image: "/dental-retainers.jpg",
    price: "₹3,000 - ₹8,000",
    duration: "Ongoing",
    href: "/services/orthodontics/retainers",
    features: ["Maintains Results", "Custom Fit", "Removable Options", "Long-lasting"],
  },
  {
    title: "Early Orthodontic Treatment",
    description: "Interceptive orthodontic treatment for children to guide proper jaw and tooth development.",
    image: "/child-braces.jpg",
    price: "₹15,000 - ₹35,000",
    duration: "6-18 months",
    href: "/services/orthodontics/early-treatment",
    features: ["Prevents Future Issues", "Guides Growth", "Shorter Treatment", "Better Results"],
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "We use digital imaging and 3D treatment planning for precise, efficient orthodontic care.",
  },
  {
    icon: Shield,
    title: "Experienced Care",
    description: "Dr. Rockson Samuel has extensive experience in orthodontics with hundreds of successful cases.",
  },
  {
    icon: Users,
    title: "All Ages Welcome",
    description: "We provide orthodontic treatment for children, teenagers, and adults with personalized care.",
  },
]

const treatmentProcess = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "Comprehensive examination, X-rays, and discussion of treatment options and goals.",
  },
  {
    step: 2,
    title: "Treatment Planning",
    description: "Digital impressions and 3D modeling to create your personalized treatment plan.",
  },
  {
    step: 3,
    title: "Appliance Placement",
    description: "Careful placement of braces or delivery of your first set of clear aligners.",
  },
  {
    step: 4,
    title: "Regular Adjustments",
    description: "Periodic visits for adjustments and monitoring progress throughout treatment.",
  },
  {
    step: 5,
    title: "Retention Phase",
    description: "Custom retainers to maintain your beautiful new smile for years to come.",
  },
]

const faqs = [
  {
    question: "What is the best age to start orthodontic treatment?",
    answer:
      "While treatment can begin at any age, the ideal time is between ages 10-14 when the jaw is still growing. However, adult orthodontics is very common and effective.",
  },
  {
    question: "How long does orthodontic treatment take?",
    answer:
      "Treatment duration varies from 12-36 months depending on the complexity of the case and type of appliance used. Most cases are completed within 18-24 months.",
  },
  {
    question: "Do braces hurt?",
    answer:
      "You may experience some discomfort for a few days after getting braces or adjustments. This is normal and can be managed with over-the-counter pain relievers.",
  },
  {
    question: "Can adults get braces?",
    answer:
      "About 25% of orthodontic patients are adults. We offer discreet options like ceramic braces and Invisalign for adult patients.",
  },
]

export default function OrthodonticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#54CAD3]/5 to-[#005f73]/5">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Orthodontics', href: '/services/orthodontics' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="pt-16 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-gradient-to-r from-[#54CAD3] to-[#005f73] text-white mb-4">Orthodontics</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#005f73] to-[#54CAD3] bg-clip-text text-transparent">
              Straighten Your Teeth with Expert Orthodontic Care
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Achieve a perfectly aligned smile with our comprehensive orthodontic treatments. From traditional braces
              to Invisalign clear aligners, Dr. Rockson Samuel provides personalized care for all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-gradient">
                <Link href="tel:7010650063">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 7010650063
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#54CAD3] text-[#54CAD3] hover:bg-[#54CAD3]/10 bg-transparent"
              >
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Consultation
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <GlassCard className="p-8">
              <Image
                src="/orthodontic-braces.jpg"
                alt="Orthodontic Treatment - Braces and Clear Aligners"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </GlassCard>
          </div>
        </div>
      </SectionContainer>

      {/* Services Grid */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005f73] mb-4">Our Orthodontic Treatment Options</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose from a variety of orthodontic solutions designed to fit your lifestyle, budget, and aesthetic
            preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 group relative"
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
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#005f73] mb-2 group-hover:text-[#54CAD3] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#54CAD3]" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-[#005f73]">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#54CAD3] hover:text-[#005f73] font-medium transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Treatment Process */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005f73] mb-4">Your Orthodontic Journey</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding what to expect during your orthodontic treatment helps ensure the best possible results.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {treatmentProcess.map((process, index) => (
            <GlassCard key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#54CAD3] to-[#005f73] rounded-full text-white font-bold text-lg mb-4">
                {process.step}
              </div>
              <h3 className="text-lg font-bold text-[#005f73] mb-2">{process.title}</h3>
              <p className="text-sm text-gray-600">{process.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005f73] mb-4">Why Choose Our Orthodontic Care?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience the difference of expert orthodontic care with personalized treatment plans and advanced
            technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <GlassCard key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#54CAD3] to-[#005f73] rounded-full mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#005f73] mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005f73] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about orthodontic treatment and braces.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-lg font-semibold text-[#005f73] mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Reviews Section */}
      <SectionContainer className="py-16 bg-gradient-to-r from-yellow-50/50 to-orange-50/50">
        <ServiceReviews 
          serviceName="Orthodontics & Braces" 
          reviews={reviews}
          averageRating={5.0}
          totalReviews={534}
        />
      </SectionContainer>

      {/* Ask the Dentist - Related Questions */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Orthodontic Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real patient questions answered by Dr. Rockson Samuel
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-[#005f73]">Do braces hurt?</h3>
            <p className="text-gray-600 text-sm mb-4">Initial discomfort lasts 3-5 days. We provide pain management tips and wax for comfort.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-[#005f73]">Can I get braces as an adult?</h3>
            <p className="text-gray-600 text-sm mb-4">Yes! 25% of our patients are adults. We offer ceramic braces and Invisalign for discretion.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-[#005f73]">Invisalign vs traditional braces?</h3>
            <p className="text-gray-600 text-sm mb-4">Invisalign is less visible but more expensive. Traditional braces work faster for complex cases.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-[#005f73] text-[#005f73]">
            <Link href="/ask-the-dentist/submit">
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask Your Orthodontic Question
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Related Services */}
      <SectionContainer className="py-16 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Dental Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete your smile transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#005f73] transition-colors">Cosmetic Dentistry</h3>
            <p className="text-gray-600 mb-4">Teeth whitening, veneers, smile makeover</p>
            <Link href="/services/cosmetic-dentistry" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#005f73] transition-colors">Dental Implants</h3>
            <p className="text-gray-600 mb-4">Replace missing teeth permanently</p>
            <Link href="/services/dental-implants" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#005f73] transition-colors">Jaw Surgery</h3>
            <p className="text-gray-600 mb-4">Correct severe bite and jaw issues</p>
            <Link href="/services/maxillofacial-surgery" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="pb-16">
        <GlassCard className="text-center p-8 md:p-12 bg-gradient-to-r from-[#54CAD3]/10 to-[#005f73]/10">
          <h2 className="text-3xl font-bold text-[#005f73] mb-4">Ready to Start Your Smile Journey?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Schedule a free orthodontic consultation to discuss your treatment options and create a personalized plan
            for your perfect smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-gradient">
              <Link href="tel:7010650063">Call Now: 7010650063</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#54CAD3] text-[#54CAD3] hover:bg-[#54CAD3]/10 bg-transparent"
            >
              <Link href="/contact">Book Free Consultation</Link>
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
            <span>Flexible Payment Plans</span>
          </div>
        </GlassCard>
      </SectionContainer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Indira Dental Clinic - Orthodontics",
            description:
              "Professional orthodontic treatment in Vellore including traditional braces, ceramic braces, Invisalign clear aligners, and retainers by Dr. Rockson Samuel.",
            url: "https://www.dentalclinicinvellore.in/services/orthodontics",
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
            medicalSpecialty: "Orthodontics",
            availableService: services.map((service) => ({
              "@type": "MedicalProcedure",
              name: service.title,
              description: service.description,
            })),
          }),
        }}
      />
    </div>
  )
}
