import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, MapPin, Star, Heart, Shield, Smile, Baby, Users, Award, MessageCircle, ArrowRight, CheckCircle } from "lucide-react"
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

const reviews = generateServiceReviews('Pediatric Dentistry', 'default')

export const metadata: Metadata = {
  title: "Pediatric Dentistry in Vellore | Children's Dental Care | Indira Dental Clinic",
  description:
    "Expert pediatric dentistry services in Vellore. Gentle dental care for children with specialized treatments, preventive care, and child-friendly environment at Indira Dental Clinic.",
  keywords: [
    "pediatric dentistry vellore",
    "children dentist vellore",
    "kids dental care vellore",
    "child dentist vellore",
    "pediatric dental clinic vellore",
  ],
}

export default function PediatricDentistryPage() {
  const services = [
    {
      name: "Children's Dental Checkup",
      price: "₹800 - ₹1,200",
      duration: "30-45 minutes",
      description: "Comprehensive oral examination for children with gentle approach",
      features: ["Complete oral examination", "Growth assessment", "Oral hygiene education", "Parent consultation"],
      image: "/childrens-dental-exam.jpg",
    },
    {
      name: "Fluoride Treatment",
      price: "₹500 - ₹800",
      duration: "15-20 minutes",
      description: "Professional fluoride application to strengthen tooth enamel",
      features: ["Cavity prevention", "Enamel strengthening", "Safe application", "Pleasant flavors"],
      image: "/fluoride-treatment.jpg",
    },
    {
      name: "Dental Sealants",
      price: "₹800 - ₹1,500 per tooth",
      duration: "20-30 minutes",
      description: "Protective coating for molars to prevent cavities",
      features: ["Cavity prevention", "Long-lasting protection", "Painless procedure", "Clear or tooth-colored"],
      image: "/dental-sealants.jpg",
    },
    {
      name: "Space Maintainers",
      price: "₹3,000 - ₹6,000",
      duration: "45-60 minutes",
      description: "Custom appliances to maintain space for permanent teeth",
      features: ["Prevents crowding", "Guides tooth eruption", "Custom-made", "Comfortable fit"],
      image: "/space-maintainers.jpg",
    },
    {
      name: "Children's Fillings",
      price: "₹1,200 - ₹2,500",
      duration: "30-45 minutes",
      description: "Tooth-colored fillings for cavities in primary teeth",
      features: ["Pain-free treatment", "Natural appearance", "Durable materials", "Quick procedure"],
      image: "/dental-fillings.jpg",
    },
    {
      name: "Pulp Therapy",
      price: "₹2,500 - ₹4,500",
      duration: "45-60 minutes",
      description: "Treatment for infected or damaged tooth pulp in children",
      features: ["Saves natural tooth", "Pain relief", "Prevents infection", "Gentle technique"],
      image: "/root-canal-procedure.png",
    },
  ]

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Gentle & Caring Approach",
      description: "Child-friendly environment with patient, understanding care",
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-500" />,
      title: "Preventive Focus",
      description: "Emphasis on preventing dental problems before they start",
    },
    {
      icon: <Smile className="w-8 h-8 text-pink-500" />,
      title: "Positive Experience",
      description: "Making dental visits fun and stress-free for children",
    },
    {
      icon: <Baby className="w-8 h-8 text-pink-500" />,
      title: "Age-Appropriate Care",
      description: "Specialized techniques for different developmental stages",
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "Parent Education",
      description: "Guidance for parents on home care and oral hygiene",
    },
    {
      icon: <Award className="w-8 h-8 text-pink-500" />,
      title: "Expert Pediatric Care",
      description: "Specialized training in children's dental development",
    },
  ]

  const treatmentProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Meet the child, assess comfort level, and perform gentle examination",
    },
    {
      step: 2,
      title: "Treatment Planning",
      description: "Discuss findings with parents and create age-appropriate treatment plan",
    },
    {
      step: 3,
      title: "Gentle Treatment",
      description: "Provide care using child-friendly techniques and equipment",
    },
    {
      step: 4,
      title: "Follow-up Care",
      description: "Schedule regular checkups and provide ongoing preventive care",
    },
  ]

  const faqItems = [
    {
      question: "At what age should my child first visit the dentist?",
      answer:
        "Children should have their first dental visit by age 1 or within 6 months of their first tooth appearing. Early visits help establish good oral health habits and allow us to monitor dental development.",
    },
    {
      question: "How can I prepare my child for their dental visit?",
      answer:
        "Read books about dental visits, play 'dentist' at home, and maintain a positive attitude. Avoid using words like 'hurt' or 'pain' and instead focus on the dentist helping keep their teeth healthy and strong.",
    },
    {
      question: "Are dental X-rays safe for children?",
      answer:
        "Yes, dental X-rays are very safe for children. We use digital X-rays which reduce radiation exposure by up to 90% compared to traditional film X-rays. We only take X-rays when necessary for diagnosis.",
    },
    {
      question: "What should I do if my child has a dental emergency?",
      answer:
        "For dental emergencies, contact our clinic immediately at 7010650063. For knocked-out permanent teeth, try to reinsert gently or keep in milk. For severe pain, rinse with warm water and apply cold compress.",
    },
    {
      question: "How often should children have dental checkups?",
      answer:
        "Children should have dental checkups every 6 months, just like adults. Regular visits help prevent problems and allow us to monitor growth and development of teeth and jaws.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-pink-100 text-pink-700 border-pink-200">Pediatric Dentistry</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Gentle Dental Care for
                <span className="text-pink-600"> Children</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Creating positive dental experiences for children in Vellore with specialized pediatric care, preventive
                treatments, and a child-friendly environment that makes dental visits fun and stress-free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Appointment: 7010650063
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
                  src="/childrens-dental-exam.jpg"
                  alt="Children's dental examination at Indira Dental Clinic"
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent rounded-lg" />
              </GlassPanel>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Services Grid */}
      <SectionContainer className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pediatric Dental Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care designed specifically for children's unique needs and comfort
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
                      <Badge className="bg-pink-600 text-white">{service.duration}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{service.name}</CardTitle>
                    <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">Book This Service</Button>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Pediatric Dentistry?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized care that makes dental visits a positive experience for children
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Child-Friendly Treatment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step approach designed to ensure comfort and positive experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentProcess.map((step, index) => (
              <GlassPanel key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
            <p className="text-xl text-gray-600">Common questions about pediatric dental care</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Give Your Child the Best Dental Care</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a consultation with our pediatric dental specialists and ensure your child's oral health is in
              expert hands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
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
          serviceName="Pediatric Dentistry" 
          reviews={reviews}
          averageRating={5.0}
          totalReviews={456}
        />
      </SectionContainer>

      {/* Ask the Dentist - Related Questions */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pediatric Dental Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions from parents answered by Dr. Rockson Samuel
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-pink-700">When should my child first visit the dentist?</h3>
            <p className="text-gray-600 text-sm mb-4">We recommend the first visit by age 1 or when the first tooth appears, whichever comes first.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-pink-700">How to stop thumb sucking?</h3>
            <p className="text-gray-600 text-sm mb-4">Gentle positive reinforcement and habit-breaking appliances can help stop thumb sucking.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-pink-700">Are dental X-rays safe for kids?</h3>
            <p className="text-gray-600 text-sm mb-4">Yes, digital X-rays use 80% less radiation and are completely safe when used appropriately.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-pink-600 text-pink-600">
            <Link href="/ask-the-dentist/submit">
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask Pediatric Question
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Related Services */}
      <SectionContainer className="py-16 bg-gradient-to-r from-pink-50/50 to-purple-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Services for Kids</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete dental care for your child
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">Orthodontics for Kids</h3>
            <p className="text-gray-600 mb-4">Early orthodontic evaluation and treatment</p>
            <Link href="/services/orthodontics" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">Preventive Care</h3>
            <p className="text-gray-600 mb-4">Fluoride, sealants, oral hygiene education</p>
            <Link href="/services/preventive-dentistry" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">Emergency Dental Care</h3>
            <p className="text-gray-600 mb-4">24/7 urgent care for dental emergencies</p>
            <Link href="/services/emergency-dentistry" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </SectionContainer>
    </div>
  )
}
