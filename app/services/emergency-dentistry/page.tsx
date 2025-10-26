import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, Clock, MapPin, AlertTriangle, Zap, CheckCircle, MessageCircle, ArrowRight, Shield, Star, Heart, Calendar } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ServiceReviews } from "@/components/ui/service-reviews"
import { generateServiceReviews } from "@/lib/review-data"

const reviews = generateServiceReviews('Emergency Dentistry', 'default')

export const metadata: Metadata = {
  title: "24/7 Emergency Dental Care in Vellore | Urgent Dental Services | Dr. Rockson Samuel",
  description:
    "24/7 emergency dental services in Vellore. Immediate relief for severe toothache, broken teeth, dental trauma. Dr. Rockson Samuel - Emergency dentist available.",
  keywords:
    "emergency dentist vellore, 24/7 dental care, urgent dental treatment, toothache relief, dental emergency, Dr. Rockson Samuel, emergency dental clinic",
}

const emergencyServices = [
  {
    name: "Severe Toothache Relief",
    price: "₹500 - ₹2,000",
    responseTime: "Immediate",
    image: "/severe-toothache.jpg",
    features: ["Pain assessment", "Immediate relief", "Prescription medication", "Follow-up care"],
    urgency: "Critical",
    description: "Immediate pain relief for severe dental pain that cannot wait for regular hours.",
  },
  {
    name: "Broken/Chipped Tooth Repair",
    price: "₹1,500 - ₹5,000",
    responseTime: "Within 1 hour",
    image: "/broken-tooth-repair.jpg",
    features: ["Temporary restoration", "Pain management", "Protective covering", "Permanent solution plan"],
    urgency: "Urgent",
    description: "Emergency repair of broken or chipped teeth to prevent further damage.",
  },
  {
    name: "Knocked-Out Tooth",
    price: "₹3,000 - ₹8,000",
    responseTime: "Within 30 minutes",
    image: "/knocked-out-tooth.jpg",
    features: ["Tooth reimplantation", "Stabilization", "Root canal if needed", "Long-term monitoring"],
    urgency: "Critical",
    description: "Emergency reimplantation of knocked-out teeth - time is critical for success.",
  },
  {
    name: "Dental Abscess Treatment",
    price: "₹2,000 - ₹6,000",
    responseTime: "Immediate",
    image: "/dental-abscess.jpg",
    features: ["Drainage procedure", "Antibiotic therapy", "Pain relief", "Infection control"],
    urgency: "Critical",
    description: "Immediate treatment of dental infections that can be life-threatening.",
  },
  {
    name: "Lost Filling/Crown",
    price: "₹800 - ₹3,000",
    responseTime: "Within 2 hours",
    image: "/lost-filling.jpg",
    features: ["Temporary restoration", "Sensitivity relief", "Protective measures", "Permanent replacement"],
    urgency: "Moderate",
    description: "Emergency replacement of lost fillings or crowns to prevent sensitivity.",
  },
  {
    name: "Orthodontic Emergencies",
    price: "₹500 - ₹2,500",
    responseTime: "Within 4 hours",
    image: "/orthodontic-emergency.jpg",
    features: ["Wire adjustment", "Bracket repair", "Pain relief", "Temporary fixes"],
    urgency: "Moderate",
    description: "Emergency repairs for broken braces, wires, or orthodontic appliances.",
  },
  {
    name: "Facial Trauma",
    price: "₹5,000 - ₹15,000",
    responseTime: "Immediate",
    image: "/facial-trauma.jpg",
    features: ["Trauma assessment", "Soft tissue repair", "Tooth stabilization", "Referral if needed"],
    urgency: "Critical",
    description: "Emergency treatment for facial injuries affecting teeth and oral structures.",
  },
  {
    name: "Bleeding Control",
    price: "₹1,000 - ₹3,000",
    responseTime: "Immediate",
    image: "/bleeding-control.jpg",
    features: ["Bleeding assessment", "Immediate control", "Suturing if needed", "Post-care instructions"],
    urgency: "Urgent",
    description: "Emergency control of oral bleeding from various causes.",
  },
]

const emergencyProcess = [
  {
    step: 1,
    title: "Call Emergency Line",
    description: "Contact our 24/7 emergency hotline: 7010650063 for immediate assistance",
  },
  {
    step: 2,
    title: "Initial Assessment",
    description: "Our team will assess your emergency and provide immediate guidance",
  },
  {
    step: 3,
    title: "Immediate Care",
    description: "Rush to our clinic for immediate emergency treatment and pain relief",
  },
  {
    step: 4,
    title: "Emergency Treatment",
    description: "Dr. Rockson Samuel provides immediate treatment to address the emergency",
  },
  {
    step: 5,
    title: "Pain Management",
    description: "Comprehensive pain management and medication as needed",
  },
  {
    step: 6,
    title: "Follow-up Plan",
    description: "Detailed follow-up care plan and appointment scheduling",
  },
]

const firstAidTips = [
  {
    emergency: "Severe Toothache",
    tips: [
      "Rinse mouth with warm salt water",
      "Take over-the-counter pain medication",
      "Apply cold compress to outside of cheek",
      "Avoid hot or cold foods",
    ],
  },
  {
    emergency: "Knocked-Out Tooth",
    tips: [
      "Handle tooth by crown, not root",
      "Rinse gently with water if dirty",
      "Try to reinsert in socket if possible",
      "Keep moist in milk or saliva",
    ],
  },
  {
    emergency: "Broken Tooth",
    tips: [
      "Save any broken pieces",
      "Rinse mouth with warm water",
      "Apply cold compress for swelling",
      "Cover sharp edges with dental wax",
    ],
  },
]

const faqs = [
  {
    question: "What constitutes a dental emergency?",
    answer:
      "Severe tooth pain, knocked-out teeth, broken teeth with pain, dental abscesses, uncontrolled bleeding, and facial trauma are all dental emergencies requiring immediate attention.",
  },
  {
    question: "Are you available 24/7 for emergencies?",
    answer:
      "Yes, we provide 24/7 emergency dental services. Call our emergency hotline 7010650063 anytime for immediate assistance.",
  },
  {
    question: "How quickly can I be seen for an emergency?",
    answer:
      "For critical emergencies, we see patients immediately. For urgent cases, typically within 1-2 hours. We prioritize based on severity of the condition.",
  },
  {
    question: "What should I do while waiting to see the dentist?",
    answer:
      "Follow our first aid guidance, take over-the-counter pain medication as directed, apply cold compress for swelling, and avoid chewing on the affected area.",
  },
  {
    question: "Do you accept insurance for emergency visits?",
    answer:
      "Yes, we accept most dental insurance plans. For uninsured patients, we offer flexible payment options and emergency payment plans.",
  },
  {
    question: "Can I prevent dental emergencies?",
    answer:
      "Many emergencies can be prevented with regular dental checkups, wearing mouthguards during sports, avoiding hard foods, and maintaining good oral hygiene.",
  },
]

export default function EmergencyDentistryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50/30 to-orange-50/30">
      {/* Emergency Alert Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-center">
            <AlertTriangle className="h-6 w-6 mr-3 animate-pulse" />
            <span className="text-lg font-bold">24/7 EMERGENCY DENTAL HOTLINE: </span>
            <a href="tel:7010650063" className="text-xl font-bold ml-2 hover:underline">
              7010650063
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <SectionContainer className="pt-16 pb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            24/7 Emergency Care Available
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Emergency Dental Care
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            When dental emergencies strike, every minute counts. Dr. Rockson Samuel and our emergency team are available
            24/7 to provide immediate relief and treatment for urgent dental conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 animate-pulse"
            >
              <Phone className="mr-2 h-5 w-5" />
              CALL NOW: 7010650063
            </Button>
            <Button size="lg" variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent">
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </div>
        </div>

        {/* Emergency Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <GlassCard className="text-center p-6 border-l-4 border-red-500">
            <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-gray-600">Available</div>
          </GlassCard>
          <GlassCard className="text-center p-6 border-l-4 border-orange-500">
            <div className="text-3xl font-bold text-orange-600 mb-2">&lt;30min</div>
            <div className="text-gray-600">Response Time</div>
          </GlassCard>
          <GlassCard className="text-center p-6 border-l-4 border-red-500">
            <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-gray-600">Pain Relief</div>
          </GlassCard>
          <GlassCard className="text-center p-6 border-l-4 border-orange-500">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </GlassCard>
        </div>
      </SectionContainer>

      {/* Emergency Services */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immediate treatment for all types of dental emergencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyServices.map((service, index) => (
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
                    service.urgency === "Critical"
                      ? "bg-red-100 text-red-700 animate-pulse"
                      : service.urgency === "Urgent"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-yellow-100 text-yellow-700"
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
                  <span className="text-sm text-gray-500">Response:</span>
                  <span className="font-medium text-green-600">{service.responseTime}</span>
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
                Call Emergency Line
              </Button>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Emergency Process */}
      <SectionContainer className="py-16 bg-gradient-to-r from-red-50/50 to-orange-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Response Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures you get immediate care when you need it most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emergencyProcess.map((step, index) => (
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

      {/* First Aid Tips */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency First Aid Tips</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">What to do while waiting for emergency dental care</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {firstAidTips.map((tip, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-xl font-bold mb-4 text-red-700">{tip.emergency}</h3>
              <ul className="space-y-3">
                {tip.tips.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* 24/7 Availability */}
      <SectionContainer className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="text-center">
          <Clock className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available 24/7</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dental emergencies don't wait for business hours. Neither do we. Our emergency team is available around the
            clock to provide immediate care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Weekdays</div>
              <div>24/7 Emergency Care</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Weekends</div>
              <div>24/7 Emergency Care</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Holidays</div>
              <div>24/7 Emergency Care</div>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
            <Phone className="mr-2 h-5 w-5" />
            Call Emergency Line: 7010650063
          </Button>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Care FAQ</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Common questions about emergency dental services</p>
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
      <SectionContainer className="py-16">
        <GlassCard className="p-8 text-center bg-gradient-to-r from-red-50 to-orange-50">
          <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-6">Don't Wait - Call Now!</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Dental emergencies require immediate attention. The sooner you call, the better we can help preserve your
            teeth and relieve your pain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 text-red-600 mr-2" />
              <span className="font-bold">7010650063</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="h-5 w-5 text-red-600 mr-2" />
              <span>24/7 Available</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 text-red-600 mr-2" />
              <span>Gandhi Nagar, Vellore</span>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 animate-pulse"
          >
            <Phone className="mr-2 h-5 w-5" />
            EMERGENCY HOTLINE: 7010650063
          </Button>
        </GlassCard>
      </SectionContainer>

      {/* Reviews Section */}
      <SectionContainer className="py-16 bg-gradient-to-r from-yellow-50/50 to-orange-50/50">
        <ServiceReviews 
          serviceName="Emergency Dentistry" 
          reviews={reviews}
          averageRating={5.0}
          totalReviews={378}
        />
      </SectionContainer>

      {/* Ask the Dentist - Related Questions */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Dental Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Urgent questions answered by Dr. Rockson Samuel
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-red-700">What should I do if my tooth is knocked out?</h3>
            <p className="text-gray-600 text-sm mb-4">Keep it moist in milk, don't touch the root, and see us within 30 minutes for best chance of saving it.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-red-700">How to stop severe toothache at night?</h3>
            <p className="text-gray-600 text-sm mb-4">Rinse with warm salt water, take OTC pain relievers, use cold compress. Call us immediately for emergency care.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-red-700">Is a broken tooth an emergency?</h3>
            <p className="text-gray-600 text-sm mb-4">Yes, if painful or sharp edges cutting your mouth. Save the pieces and see us immediately.</p>
            <Link href="/ask-the-dentist" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600">
            <Link href="/ask-the-dentist/submit">
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask Emergency Question
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Related Services */}
      <SectionContainer className="py-16 bg-gradient-to-r from-red-50/50 to-orange-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Emergency Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive urgent dental care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Oral Surgery</h3>
            <p className="text-gray-600 mb-4">Emergency extractions and surgical procedures</p>
            <Link href="/services/oral-surgery" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Root Canal Treatment</h3>
            <p className="text-gray-600 mb-4">Emergency RCT for infected teeth</p>
            <Link href="/services/root-canal-treatment" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
          <GlassCard className="p-6 hover:shadow-xl transition-shadow group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">Maxillofacial Surgery</h3>
            <p className="text-gray-600 mb-4">Facial trauma and jaw emergency care</p>
            <Link href="/services/maxillofacial-surgery" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </SectionContainer>
    </div>
  )
}
