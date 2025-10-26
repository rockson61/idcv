import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Baby, Users } from 'lucide-react'

const reviews = generateServiceReviews('Early Orthodontic Treatment', 'orthodontics')

export const metadata: Metadata = {
  title: 'Early Orthodontic Treatment for Kids | Phase 1 Orthodontics | Indira Dental Clinic Vellore',
  description: 'Early orthodontic treatment (interceptive orthodontics) in Vellore for children ages 7-11. Guide jaw growth, prevent future problems by Dr. Rockson Samuel. Book: 7010650063',
  keywords: 'early orthodontic treatment vellore, phase 1 orthodontics, interceptive orthodontics, kids braces, children orthodontics, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/orthodontics/early-treatment' },
}

export default function EarlyOrthodonticTreatmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Orthodontics', href: '/services/orthodontics' }, { title: 'Early Treatment', href: '/services/orthodontics/early-treatment' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700"><Baby className="w-4 h-4 inline mr-1" />Ages 7-11 Recommended</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Early Orthodontic Treatment (Phase 1)</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Interceptive orthodontics for children to guide jaw development, create space for permanent teeth, and prevent future orthodontic problems.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle className="flex items-center gap-3"><Users className="w-6 h-6 text-green-600" />Why Early Treatment?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <p className="text-gray-700 mb-6">The American Association of Orthodontists recommends children have their first orthodontic evaluation by age 7. Early treatment (Phase 1) addresses developing problems while the child is still growing.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">What Early Treatment Can Fix:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Severe crowding (lack of space)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Crossbite (teeth biting inside)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Underbite (lower jaw ahead)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Severe overbite (deep bite)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Protruding front teeth</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Thumb sucking effects</li>
                  </ul>
                </div>

                <div className="p-6 bg-teal-50 rounded-lg">
                  <h3 className="font-semibold text-teal-800 mb-3">Benefits of Early Intervention:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Guide jaw growth properly</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Create space for permanent teeth</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Reduce future treatment time</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Prevent extraction of permanent teeth</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Improve facial appearance</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Boost child's confidence</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Treatment Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { step: '1', title: 'Evaluation', desc: 'Age 7 assessment', time: '1 visit' },
                    { step: '2', title: 'Phase 1', desc: 'Active treatment', time: '12-18 months' },
                    { step: '3', title: 'Rest Period', desc: 'Growth monitoring', time: '2-4 years' },
                    { step: '4', title: 'Phase 2', desc: 'Final alignment', time: '12-24 months' }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{phase.step}</div>
                      <h4 className="font-semibold text-sm mb-1">{phase.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">{phase.desc}</p>
                      <div className="text-xs text-green-600 font-semibold">{phase.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-green-700 mb-1">₹15,000 - ₹35,000</div><div className="text-sm text-gray-600">Phase 1 treatment</div></div>
                  <div><div className="font-bold text-2xl text-green-700 mb-1">12-18 months</div><div className="text-sm text-gray-600">Phase 1 duration</div></div>
                  <div><div className="font-bold text-2xl text-green-700 mb-1">Age 7+</div><div className="text-sm text-gray-600">Ideal starting age</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Early Orthodontic Treatment" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={134}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
              <ModernCardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Schedule Early Orthodontic Evaluation</h2>
                <p className="text-gray-700 mb-6">Free consultation for children ages 7-11. Early detection and treatment can prevent serious problems later. Dr. Rockson Samuel specializes in pediatric orthodontics.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free Evaluation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600">
                    <Link href="https://wa.me/917010650063?text=Early%20orthodontic%20evaluation%20for%20my%20child" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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

