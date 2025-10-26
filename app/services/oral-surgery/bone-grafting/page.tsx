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
  title: 'Bone Grafting | Oral Surgery | Indira Dental Clinic Vellore',
  description: 'Expert bone grafting procedures in Vellore by Dr. Rockson Samuel. Restore jaw bone for dental implants. Advanced techniques with 95% success rate.',
  keywords: 'bone grafting vellore, oral surgery, jaw bone reconstruction, dental implants preparation, Dr Rockson Samuel',
  openGraph: {
    title: 'Bone Grafting | Oral Surgery | Indira Dental Clinic',
    description: 'Expert bone grafting for dental implants. Advanced techniques by Dr. Rockson Samuel in Vellore.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/oral-surgery/bone-grafting',
  },
}

const breadcrumbItems = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Oral Surgery', href: '/services/oral-surgery' },
  { title: 'Bone Grafting', href: '/services/oral-surgery/bone-grafting' },
]

export default function BoneGraftingPage() {
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
              Bone Grafting for Dental Implants
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Restore lost bone structure in your jaw with advanced bone grafting procedures to support dental implants and improve oral health.
            </p>
          </div>

          {/* Overview */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-teal-600" />
                What is Bone Grafting?
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Bone grafting is a surgical procedure that replaces missing bone in the jaw with graft material to restore bone volume and density. This procedure is often necessary when preparing for dental implants or when bone loss has occurred due to periodontal disease, tooth extraction, or trauma.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-3">When Bone Grafting is Needed</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Insufficient bone for dental implants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Bone loss from periodontal disease</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Tooth extraction with bone loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Trauma or injury to the jaw</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Benefits of Bone Grafting</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Enables dental implant placement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Restores facial structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Prevents further bone loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Improves chewing function</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Types of Bone Grafts */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-teal-600" />
                Types of Bone Grafts
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Autograft (Your Own Bone)</h3>
                  <p className="text-gray-600 text-sm mb-4">Bone taken from another part of your body.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Highest success rate (95%+)</li>
                    <li>• No risk of rejection</li>
                    <li>• Contains living cells</li>
                    <li>• Cost: ₹15,000 - ₹25,000</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Allograft (Donor Bone)</h3>
                  <p className="text-gray-600 text-sm mb-4">Processed bone from human donors, thoroughly sterilized.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• No second surgical site</li>
                    <li>• Good success rate (85-90%)</li>
                    <li>• Readily available</li>
                    <li>• Cost: ₹8,000 - ₹15,000</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Xenograft (Animal Bone)</h3>
                  <p className="text-gray-600 text-sm mb-4">Bone from animals, processed to be biocompatible.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• No donor site needed</li>
                    <li>• Good structural support</li>
                    <li>• Cost-effective option</li>
                    <li>• Cost: ₹6,000 - ₹12,000</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Alloplast (Synthetic)</h3>
                  <p className="text-gray-600 text-sm mb-4">Synthetic materials like hydroxyapatite.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• No disease transmission risk</li>
                    <li>• Predictable results</li>
                    <li>• Easy to handle</li>
                    <li>• Cost: ₹5,000 - ₹10,000</li>
                  </ul>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Recovery Timeline */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-teal-600" />
                Recovery and Healing Timeline
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                  <Clock className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Week 1-2</h3>
                  <p className="text-sm text-gray-600 mb-3">Initial Healing</p>
                  <ul className="text-xs text-gray-600 space-y-1 text-left">
                    <li>• Swelling and discomfort</li>
                    <li>• Soft diet recommended</li>
                    <li>• Prescribed medications</li>
                  </ul>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Month 3-6</h3>
                  <p className="text-sm text-gray-600 mb-3">Bone Integration</p>
                  <ul className="text-xs text-gray-600 space-y-1 text-left">
                    <li>• Gradual bone formation</li>
                    <li>• Regular follow-ups</li>
                    <li>• X-ray monitoring</li>
                  </ul>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                  <Clock className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Month 6-12</h3>
                  <p className="text-sm text-gray-600 mb-3">Complete Healing</p>
                  <ul className="text-xs text-gray-600 space-y-1 text-left">
                    <li>• Full bone integration</li>
                    <li>• Ready for implants</li>
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
                <Link href="/services/oral-surgery/sinus-lift" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-300 transition-all hover:shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Sinus Lift</h4>
                  <p className="text-sm text-gray-600 mb-3">Upper jaw bone augmentation</p>
                  <div className="text-xs text-teal-600 font-semibold">₹12,000 - ₹20,000</div>
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
                Need Bone Grafting for Dental Implants?
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Don't let insufficient bone prevent you from getting dental implants. Schedule a consultation with Dr. Rockson Samuel to discuss bone grafting options.
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
                  <Link href="https://wa.me/917010650063?text=Hi%20Dr.%20Rockson%20Samuel,%20I%20would%20like%20to%20know%20more%20about%20bone%20grafting%20for%20dental%20implants." target="_blank">
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
                  <span className="text-gray-700">Multiple graft options</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">95% success rate</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Follow-up care included</span>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Related Questions */}
          <ModernCard className="bg-white border-gray-200">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-teal-600" />
                Common Questions About Bone Grafting
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Link href="/ask-the-dentist" className="block">
                    <h4 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">
                      Is bone grafting painful?
                    </h4>
                    <p className="text-sm text-gray-600">
                      The procedure is performed under local anesthesia. Some discomfort is normal but manageable with medication.
                    </p>
                  </Link>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Link href="/ask-the-dentist" className="block">
                    <h4 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">
                      How long before I can get dental implants?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Typically 3-6 months for the bone graft to fully integrate before placing implants.
                    </p>
                  </Link>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Link href="/ask-the-dentist" className="block">
                    <h4 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">
                      What is the success rate of bone grafting?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Success rate is 85-95% when performed by experienced surgeons with proper post-care.
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

