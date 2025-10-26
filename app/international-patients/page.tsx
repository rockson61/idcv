import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { 
  Plane, Globe, DollarSign, Heart, Shield, Star, CheckCircle, Phone, 
  MessageCircle, Calendar, MapPin, Clock, Utensils, Hotel, Car, Languages,
  Award, TrendingUp, Users, Target, Sparkles, ArrowRight, Mail
} from 'lucide-react'

const reviews = generateServiceReviews('International Dental Care', 'default')

export const metadata: Metadata = {
  title: 'Dental Tourism India | International Patients | Quality Care at 60% Lower Cost | Vellore',
  description: 'Dental tourism in India at Indira Dental Clinic, Vellore. International patients get world-class dental care at 60% lower cost. Airport pickup, accommodation, treatment packages by Dr. Rockson Samuel. Book: +91-7010650063',
  keywords: 'dental tourism india, dental treatment india, international dental patients, affordable dental care india, dental vacation india, dental tourism vellore, Dr Rockson Samuel international patients',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/international-patients' },
}

const whyIndia = [
  {
    icon: DollarSign,
    title: "60% Lower Costs",
    description: "Save thousands compared to USA, UK, Australia, Canada. High-quality care at fraction of the price.",
    stat: "₹25,000 vs $3,000",
  },
  {
    icon: Award,
    title: "World-Class Quality",
    description: "Same international standards, latest technology, experienced dentists with global training.",
    stat: "15+ Years Experience",
  },
  {
    icon: Languages,
    title: "English Speaking",
    description: "All staff speak fluent English. Easy communication, no language barriers.",
    stat: "100% English Support",
  },
  {
    icon: Heart,
    title: "Complete Care Package",
    description: "Airport pickup, accommodation, treatment, post-care - everything arranged for you.",
    stat: "All-Inclusive",
  },
]

const popularTreatments = [
  {
    name: "Dental Implants (Full Mouth)",
    india: "₹2,50,000 - ₹4,00,000",
    usa: "$15,000 - $30,000",
    savings: "Save $12,000+",
    duration: "7-10 days",
  },
  {
    name: "All-on-4 Dental Implants",
    india: "₹2,50,000 - ₹4,00,000",
    usa: "$20,000 - $40,000",
    savings: "Save $18,000+",
    duration: "5-7 days",
  },
  {
    name: "Invisalign Full Treatment",
    india: "₹1,50,000 - ₹3,50,000",
    usa: "$5,000 - $8,000",
    savings: "Save $3,000+",
    duration: "12-18 months (2-3 visits)",
  },
  {
    name: "Smile Makeover (Veneers)",
    india: "₹1,20,000 - ₹3,00,000",
    usa: "$10,000 - $25,000",
    savings: "Save $8,000+",
    duration: "7-10 days",
  },
  {
    name: "Root Canal + Crown",
    india: "₹8,000 - ₹18,000",
    usa: "$1,500 - $3,000",
    savings: "Save $1,200+",
    duration: "2-3 days",
  },
  {
    name: "Teeth Whitening (Laser)",
    india: "₹12,000 - ₹18,000",
    usa: "$500 - $1,000",
    savings: "Save $300+",
    duration: "1 hour",
  },
]

const whatWeProvide = [
  "Free initial consultation (virtual or in-person)",
  "Detailed treatment plan with transparent pricing",
  "Airport pickup and drop service",
  "Accommodation arrangements (budget to luxury)",
  "Treatment coordination and scheduling",
  "English-speaking staff and dentists",
  "Post-treatment care instructions",
  "Follow-up consultations (virtual)",
  "Tourism guidance for Vellore attractions",
  "Visa invitation letter if needed",
]

const process = [
  {
    step: "1",
    title: "Contact Us",
    description: "Email your dental X-rays or photos. We'll review and provide free consultation.",
    icon: MessageCircle,
  },
  {
    step: "2",
    title: "Treatment Plan",
    description: "Receive detailed treatment plan with costs, timeline, and accommodation options.",
    icon: Target,
  },
  {
    step: "3",
    title: "Book Travel",
    description: "We help with visa invitation letter. Book your flights to Chennai/Bangalore airport.",
    icon: Plane,
  },
  {
    step: "4",
    title: "Arrival",
    description: "Airport pickup (3 hours from Chennai). Check into arranged accommodation.",
    icon: Car,
  },
  {
    step: "5",
    title: "Treatment",
    description: "Receive world-class dental care as per your treatment plan.",
    icon: Heart,
  },
  {
    step: "6",
    title: "Recovery & Tourism",
    description: "Post-treatment care. Explore Vellore attractions during recovery.",
    icon: Sparkles,
  },
]

const faqs = [
  {
    question: "How much can I save with dental tourism in India?",
    answer: "Typically 50-70% savings compared to USA, UK, Australia, Canada. For example, dental implants cost $3,000-$5,000 per tooth in USA but only ₹25,000-₹45,000 ($300-$540) in India for the same quality.",
  },
  {
    question: "Is the quality of dental care in India good?",
    answer: "Absolutely! Indian dentists are highly qualified (many trained in USA/UK), clinics use latest technology, and maintain international hygiene standards. Dr. Rockson Samuel has 15+ years experience and uses German/Swiss dental implants.",
  },
  {
    question: "Do you speak English?",
    answer: "Yes! All our doctors and staff speak fluent English. Dr. Rockson Samuel is comfortable communicating in English, ensuring clear understanding of your treatment.",
  },
  {
    question: "How do I get to Vellore from the airport?",
    answer: "We provide airport pickup from Chennai (3 hours) or Bangalore (4 hours) airports. Our driver will meet you at arrivals with a name board. Cost: ₹4,000-₹6,000 round trip.",
  },
  {
    question: "What about accommodation near the clinic?",
    answer: "We can arrange accommodation from budget hotels (₹1,500/night) to luxury options (₹5,000+/night), all within 1-2 km of our clinic. Many have English-speaking staff.",
  },
  {
    question: "Can I combine dental treatment with tourism?",
    answer: "Yes! Vellore has the famous Golden Temple, Jalakandeswarar Temple, and Vellore Fort. We're also near Chennai beaches (3 hrs) and Bangalore IT city (4 hrs). Perfect for a dental vacation!",
  },
]

export default function InternationalPatientsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <SectionContainer className="pt-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'International Patients', href: '/international-patients' }]} />
      </SectionContainer>

      {/* Hero */}
      <SectionContainer className="pt-16 pb-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700"><Globe className="w-4 h-4 inline mr-1" />Welcome International Patients</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Dental Tourism in <em className="text-blue-600 not-italic">India</em> - Vellore
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            World-class dental care at <strong className="text-blue-600">60% lower cost</strong> than USA, UK, Australia, Canada. 
            Experience quality treatment, cultural tourism, and significant savings with <strong>Dr. Rockson Samuel (BDS, PgDM, BDM)</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
              <Link href="/international-patients/packages">
                <Globe className="w-5 h-5 mr-2" />
                View Treatment Packages
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600" asChild>
              <Link href="https://wa.me/917010650063?text=International%20patient%20inquiry" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: +91-7010650063
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <GlassCard className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
            <div className="text-sm text-gray-600">Cost Savings</div>
          </GlassCard>
          <GlassCard className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">5.0★</div>
            <div className="text-sm text-gray-600">Patient Rating</div>
          </GlassCard>
          <GlassCard className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </GlassCard>
          <GlassCard className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">International Patients</div>
          </GlassCard>
        </div>
      </SectionContainer>

      {/* Why Choose India */}
      <SectionContainer className="py-16 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose India for Dental Treatment?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyIndia.map((reason, index) => (
            <GlassCard key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
              <reason.icon className="h-14 w-14 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600 mb-4">{reason.description}</p>
              <div className="text-2xl font-bold text-blue-600">{reason.stat}</div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Price Comparison */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing Comparison</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much you save with dental treatment in India
          </p>
        </div>
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Treatment</th>
                <th className="px-6 py-4 text-center">India (Vellore)</th>
                <th className="px-6 py-4 text-center">USA/UK/Australia</th>
                <th className="px-6 py-4 text-center">Your Savings</th>
                <th className="px-6 py-4 text-center">Duration</th>
              </tr>
            </thead>
            <tbody>
              {popularTreatments.map((treatment, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">{treatment.name}</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">{treatment.india}</td>
                  <td className="px-6 py-4 text-center text-red-600 font-bold">{treatment.usa}</td>
                  <td className="px-6 py-4 text-center">
                    <Badge className="bg-green-100 text-green-700 border-green-200 font-bold">{treatment.savings}</Badge>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">{treatment.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">💰 <strong>Even after flights and accommodation, you save 40-50%!</strong></p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/international-patients/packages">
              View Complete Treatment Packages →
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* What We Provide */}
      <SectionContainer className="py-16 bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Care Package for International Patients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We handle everything - you just focus on getting healthy</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {whatWeProvide.map((service, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-800 font-medium">{service}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Process Timeline */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Dental Tourism Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple 6-step process from inquiry to recovery</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {process.map((step, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <step.icon className="w-8 h-8 text-blue-500" />
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Reviews */}
      <SectionContainer className="py-16 bg-gradient-to-r from-yellow-50/50 to-orange-50/50">
        <ServiceReviews 
          serviceName="International Dental Tourism" 
          reviews={reviews}
          averageRating={5.0}
          totalReviews={67}
        />
      </SectionContainer>

      {/* FAQs */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">International Patient FAQs</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-lg font-bold mb-3 text-blue-700">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <Globe className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Save 60% on Dental Care?</h2>
          <p className="text-xl mb-8">
            Get free consultation, treatment plan, and cost estimate. No obligations. 
            Join 50+ international patients who chose quality and affordability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Mail className="mr-2 h-5 w-5" />
              Email: rockzen61@gmail.com
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              Call/WhatsApp: +91-7010650063
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/international-patients/packages" className="p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Treatment Packages</div>
              <div className="text-sm opacity-90">View pricing & inclusions</div>
            </Link>
            <Link href="/international-patients/accommodation" className="p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
              <Hotel className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Accommodation Help</div>
              <div className="text-sm opacity-90">Budget to luxury options</div>
            </Link>
            <Link href="/international-patients/travel" className="p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
              <Plane className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Travel & Pickup</div>
              <div className="text-sm opacity-90">Airport transfers arranged</div>
            </Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

