import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { 
  DollarSign, CheckCircle, Phone, MessageCircle, Calendar, Plane, Hotel, 
  Car, Utensils, Heart, Shield, Star, Globe, Award, Clock, ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dental Treatment Packages India | All-Inclusive Dental Tourism | Vellore',
  description: 'Comprehensive dental treatment packages for international patients in Vellore. All-inclusive: treatment + accommodation + airport pickup. Implants, braces, smile makeover packages. Book: +91-7010650063',
  keywords: 'dental packages india, dental tourism packages, all inclusive dental care, dental vacation packages, dental implant package india',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/international-patients/packages' },
}

const packages = [
  {
    name: "Single Tooth Implant Package",
    duration: "5-7 days",
    price: "₹35,000 - ₹55,000",
    usd: "$420 - $660",
    savings: "Save $2,500+",
    includes: [
      "Dental implant (German/Swiss)",
      "Temporary crown",
      "X-rays and CBCT scan",
      "5 nights accommodation",
      "Airport pickup & drop",
      "Post-op medications",
      "Follow-up consultations",
    ],
    featured: false,
  },
  {
    name: "All-on-4 Full Arch Package",
    duration: "7-10 days",
    price: "₹3,00,000 - ₹4,50,000",
    usd: "$3,600 - $5,400",
    savings: "Save $18,000+",
    includes: [
      "4 dental implants per arch",
      "Temporary fixed teeth (same day)",
      "Final prosthesis",
      "All X-rays and scans",
      "7 nights hotel stay",
      "Airport transfers",
      "Daily meals",
      "Medications & care kit",
      "6-month follow-up (virtual)",
    ],
    featured: true,
  },
  {
    name: "Smile Makeover Package",
    duration: "7-10 days",
    price: "₹1,50,000 - ₹3,50,000",
    usd: "$1,800 - $4,200",
    savings: "Save $8,000+",
    includes: [
      "8-10 porcelain veneers",
      "Teeth whitening session",
      "Gum contouring (if needed)",
      "Digital smile design",
      "6 nights accommodation",
      "Airport pickup & drop",
      "Tourism guide assistance",
      "Before/after photos",
    ],
    featured: false,
  },
  {
    name: "Complete Invisalign Package",
    duration: "Initial 3-4 days + follow-ups",
    price: "₹1,80,000 - ₹3,80,000",
    usd: "$2,160 - $4,560",
    savings: "Save $3,500+",
    includes: [
      "Complete Invisalign treatment",
      "3D digital smile preview",
      "All aligner sets (18-30)",
      "Initial stay: 3 nights",
      "Airport pickup (first visit)",
      "Virtual progress monitoring",
      "Retainers included",
      "2-3 visit trips over 12-18 months",
    ],
    featured: false,
  },
  {
    name: "Full Mouth Rehabilitation",
    duration: "10-14 days",
    price: "₹4,00,000 - ₹8,00,000",
    usd: "$4,800 - $9,600",
    savings: "Save $30,000+",
    includes: [
      "Complete assessment",
      "Multiple implants (6-8)",
      "Crowns and bridges",
      "Root canal treatments",
      "Gum treatments",
      "10 nights luxury stay",
      "All transfers",
      "Meals included",
      "Dedicated care coordinator",
      "1-year follow-up support",
    ],
    featured: false,
  },
]

export default function TreatmentPackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <SectionContainer className="pt-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'International Patients', href: '/international-patients' }, { title: 'Treatment Packages', href: '/international-patients/packages' }]} />
      </SectionContainer>

      <SectionContainer className="pt-16 pb-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-700"><DollarSign className="w-4 h-4 inline mr-1" />All-Inclusive Packages</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Dental Treatment Packages for International Patients
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Complete all-inclusive packages: Treatment + Accommodation + Airport Transfers + Care. 
            Save 60% while experiencing India's rich culture.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <GlassCard key={index} className={`p-8 ${pkg.featured ? 'border-4 border-blue-500 shadow-2xl' : 'border-2 border-gray-200'}`}>
              {pkg.featured && (
                <Badge className="mb-4 bg-blue-600 text-white">⭐ Most Popular</Badge>
              )}
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {pkg.duration}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                <div>
                  <div className="text-sm text-gray-600">India Price</div>
                  <div className="text-2xl font-bold text-green-600">{pkg.price}</div>
                  <div className="text-sm text-gray-500">{pkg.usd}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">You Save</div>
                  <div className="text-2xl font-bold text-blue-600">{pkg.savings}</div>
                  <div className="text-sm text-green-600 font-semibold">vs Western countries</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Package Includes:</h4>
                <ul className="space-y-2">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className={`w-full ${pkg.featured ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-800'}`} asChild>
                <Link href="/contact">Get This Package</Link>
              </Button>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 text-center max-w-4xl mx-auto">
          <ModernCard className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
            <p className="text-gray-700 mb-6">
              We can create a personalized package based on your specific dental needs, budget, and travel preferences. 
              Contact us for a free customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="https://wa.me/917010650063?text=I%20need%20custom%20dental%20package" target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp: +91-7010650063
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600" asChild>
                <Link href="mailto:rockzen61@gmail.com">
                  <Calendar className="w-5 h-5 mr-2" />
                  Email Quote Request
                </Link>
              </Button>
            </div>
          </ModernCard>
        </div>
      </SectionContainer>
    </div>
  )
}

