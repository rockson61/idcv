import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { 
  Calendar, 
  Clock, 
  Users, 
  Shield, 
  Star, 
  CheckCircle, 
  Phone,
  MessageCircle,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sinus Lift Surgery | Oral Surgery | Indira Dental Clinic Vellore',
  description: 'Expert sinus lift procedures in Vellore by Dr. Rockson Samuel. Add bone to upper jaw for dental implants. Advanced techniques with high success rate.',
  keywords: 'sinus lift vellore, sinus augmentation, upper jaw surgery, dental implants, bone grafting, Dr Rockson Samuel',
  openGraph: {
    title: 'Sinus Lift Surgery | Oral Surgery | Indira Dental Clinic',
    description: 'Expert sinus lift for upper jaw dental implants. Advanced techniques by Dr. Rockson Samuel.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/oral-surgery/sinus-lift',
  },
}

const breadcrumbItems = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Oral Surgery', href: '/services/oral-surgery' },
  { title: 'Sinus Lift', href: '/services/oral-surgery/sinus-lift' },
]

export default function SinusLiftPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={breadcrumbItems} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700 border-teal-200">
              Oral Surgery
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sinus Lift Surgery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Add bone to your upper jaw in the area of molars and premolars to prepare for dental implants with advanced sinus augmentation procedures.
            </p>
          </div>

          {/* Overview */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-teal-600" />
                What is a Sinus Lift?
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A sinus lift, also known as sinus augmentation, is a surgical procedure that adds bone to your upper jaw in the area of your molars and premolars. The bone is added between your jaw and the maxillary sinuses, which are on either side of your nose. To make room for the bone, the sinus membrane is moved upward, or "lifted."
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-3">When Sinus Lift is Needed</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Insufficient bone height in upper jaw</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Sinus too close to the jaw</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Bone loss from missing teeth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Periodontal disease bone loss</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Benefits of Sinus Lift</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Enables upper jaw implants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>High success rate (90-95%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Predictable results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Restores function and aesthetics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Types of Sinus Lift */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-teal-600" />
                Types of Sinus Lift Procedures
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Lateral Window Technique</h3>
                  <p className="text-gray-600 text-sm mb-4">Traditional approach with access from the side of the jaw.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• For significant bone augmentation</li>
                    <li>• More predictable results</li>
                    <li>• Healing time: 6-9 months</li>
                    <li>• Cost: ₹15,000 - ₹25,000</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Crestal Approach</h3>
                  <p className="text-gray-600 text-sm mb-4">Minimally invasive technique through implant site.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Less invasive procedure</li>
                    <li>• Can be done with implant placement</li>
                    <li>• Faster recovery</li>
                    <li>• Cost: ₹12,000 - ₹18,000</li>
                  </ul>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Recovery */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-teal-600" />
                Recovery Timeline
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                  <Clock className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Week 1-2</h3>
                  <p className="text-sm text-gray-600 mb-3">Initial Recovery</p>
                  <ul className="text-xs text-gray-600 space-y-1 text-left">
                    <li>• Swelling is normal</li>
                    <li>• Avoid blowing nose</li>
                    <li>• Take antibiotics</li>
                  </ul>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Month 3-6</h3>
                  <p className="text-sm text-gray-600 mb-3">Bone Maturation</p>
                  <ul className="text-xs text-gray-600 space-y-1 text-left">
                    <li>• Bone graft integrating</li>
                    <li>• Regular checkups</li>
                    <li>• X-ray monitoring</li>
                  </ul>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                  <Clock className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Month 6+</h3>
                  <p className="text-sm text-gray-600 mb-3">Ready for Implants</p>
                  <ul className="text-xs text-gray-600 space-y-1 text-left">
                    <li>• Full bone integration</li>
                    <li>• Implant placement ready</li>
                    <li>• Long-term success</li>
                  </ul>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Related Services */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle>Related Oral Surgery Services</ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/services/oral-surgery/bone-grafting" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-300 transition-all hover:shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Bone Grafting</h4>
                  <p className="text-sm text-gray-600 mb-3">Jaw bone reconstruction</p>
                  <div className="text-xs text-teal-600 font-semibold">₹8,000 - ₹25,000</div>
                </Link>
                
                <Link href="/services/dental-implants" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-300 transition-all hover:shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Dental Implants</h4>
                  <p className="text-sm text-gray-600 mb-3">Permanent tooth replacement</p>
                  <div className="text-xs text-teal-600 font-semibold">₹25,000 - ₹45,000</div>
                </Link>
                
                <Link href="/services/oral-surgery" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-300 transition-all hover:shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">All Oral Surgery</h4>
                  <p className="text-sm text-gray-600 mb-3">View all surgical procedures</p>
                  <div className="text-xs text-teal-600 font-semibold flex items-center">
                    View More <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* CTA Section */}
          <ModernCard className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
            <ModernCardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Need Sinus Lift for Upper Jaw Implants?
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Don't let insufficient bone height prevent you from getting upper jaw dental implants. Schedule a consultation with Dr. Rockson Samuel to discuss sinus lift options.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  <Link href="https://wa.me/917010650063?text=Hi%20Dr.%20Rockson%20Samuel,%20I%20would%20like%20to%20know%20more%20about%20sinus%20lift%20surgery." target="_blank">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Consultation
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span>5.0/5 Rating (126 reviews)</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-600 mr-1" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-blue-600 mr-1" />
                  <span>24/7 Emergency Care</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Advanced techniques</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">90-95% success rate</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive care</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Flexible payment plans</span>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Common Questions */}
          <ModernCard className="bg-white border-gray-200">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-teal-600" />
                Common Questions About Sinus Lift
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Link href="/ask-the-dentist" className="block">
                    <h4 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">
                      Is sinus lift surgery safe?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Yes, sinus lift is a safe, well-established procedure with a 90-95% success rate when performed by experienced surgeons.
                    </p>
                  </Link>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Link href="/ask-the-dentist" className="block">
                    <h4 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">
                      How long is the recovery?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Initial recovery takes 7-10 days. Full bone integration takes 6-9 months before implant placement.
                    </p>
                  </Link>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Link href="/ask-the-dentist" className="block">
                    <h4 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">
                      What is the cost of sinus lift?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Sinus lift costs range from ₹12,000 to ₹20,000 depending on the technique and amount of bone needed.
                    </p>
                  </Link>
                </div>

                <div className="text-center mt-4">
                  <Link href="/ask-the-dentist" className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700">
                    Ask Dr. Rockson Samuel Your Question
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

        </div>
      </SectionContainer>
    </div>
  )
}

