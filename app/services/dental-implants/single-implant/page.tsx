import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Single Tooth Implant | Replace One Missing Tooth | Indira Dental Clinic Vellore',
  description: 'Single tooth dental implant in Vellore. Permanent tooth replacement by Dr. Rockson Samuel. German implants, lifetime warranty. Price: ₹25,000-₹45,000. Book: 7010650063',
  keywords: 'single tooth implant vellore, one tooth implant, replace missing tooth, dental implant cost, Dr Rockson Samuel, permanent tooth',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/dental-implants/single-implant' },
}

const reviews = generateServiceReviews('Single Tooth Implant', 'dental-implants')

export default function SingleImplantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Dental Implants', href: '/services/dental-implants' }, { title: 'Single Tooth Implant', href: '/services/dental-implants/single-implant' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700"><Zap className="w-4 h-4 inline mr-1" />Permanent Solution</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Single Tooth Dental Implant</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Replace one missing tooth with a permanent dental implant. Looks, feels, and functions exactly like your natural tooth.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Why Choose Dental Implant Over Bridge?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-teal-50 rounded-lg">
                  <h3 className="font-semibold text-teal-800 mb-3">✅ Dental Implant Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />No damage to adjacent teeth</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Prevents bone loss</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Lasts lifetime (25+ years)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Looks 100% natural</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />No special maintenance</li>
                  </ul>
                </div>
                <div className="p-6 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3">❌ Dental Bridge Drawbacks</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start text-red-700">• Grinds down healthy teeth</li>
                    <li className="flex items-start text-red-700">• Bone loss continues</li>
                    <li className="flex items-start text-red-700">• Lasts only 7-10 years</li>
                    <li className="flex items-start text-red-700">• Can look artificial</li>
                    <li className="flex items-start text-red-700">• Difficult to clean</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Single Implant Treatment Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { step: '1', title: 'Consultation', desc: '3D scan & planning' },
                    { step: '2', title: 'Implant Surgery', desc: '30-60 minutes' },
                    { step: '3', title: 'Healing', desc: '3-6 months' },
                    { step: '4', title: 'Crown Placement', desc: 'Permanent tooth' }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{phase.step}</div>
                      <h4 className="font-semibold text-sm mb-1">{phase.title}</h4>
                      <p className="text-xs text-gray-600">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-indigo-700 mb-1">₹25,000 - ₹45,000</div><div className="text-sm text-gray-600">Complete treatment</div></div>
                  <div><div className="font-bold text-2xl text-indigo-700 mb-1">98% Success</div><div className="text-sm text-gray-600">Long-term success rate</div></div>
                  <div><div className="font-bold text-2xl text-indigo-700 mb-1">Lifetime</div><div className="text-sm text-gray-600">Warranty on implant</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Single Tooth Implant" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={234}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
              <ModernCardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Permanent Tooth Replacement</h2>
                <p className="text-gray-700 mb-6">Free 3D implant consultation. German implants with lifetime warranty. EMI options available. Dr. Rockson Samuel - 15+ years experience.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free 3D Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600">
                    <Link href="https://wa.me/917010650063?text=I%20need%20single%20tooth%20implant" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
                  </Button>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

