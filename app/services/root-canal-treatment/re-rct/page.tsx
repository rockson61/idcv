import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, RefreshCw, AlertTriangle } from 'lucide-react'

const reviews = generateServiceReviews('Re-RCT (Root Canal Retreatment)', 'root-canal')

export const metadata: Metadata = {
  title: 'Re-RCT | Root Canal Retreatment | Indira Dental Clinic Vellore',
  description: 'Re-RCT (root canal retreatment) in Vellore. Fix failed root canal, save tooth by Dr. Rockson Samuel. Second chance for your tooth. Price: ₹6,000-₹12,000. Book: 7010650063',
  keywords: 're-rct vellore, root canal retreatment, failed root canal, repeat RCT, endodontic retreatment, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/root-canal-treatment/re-rct' },
}

export default function ReRCTPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Root Canal Treatment', href: '/services/root-canal-treatment' }, { title: 'Re-RCT', href: '/services/root-canal-treatment/re-rct' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800"><RefreshCw className="w-4 h-4 inline mr-1" />Second Chance Treatment</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Re-RCT (Root Canal Retreatment)</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">When initial root canal fails, retreatment can save your tooth. Expert endodontic retreatment by Dr. Rockson Samuel.</p>
          </div>

          <ModernCard className="mb-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-300">
            <ModernCardContent className="p-8">
              <div className="mb-6">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Signs Your Root Canal Has Failed</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Persistent pain after RCT',
                  'Swelling or abscess forms',
                  'Sensitivity to hot/cold returns',
                  'Tenderness when chewing',
                  'Darkening of the tooth',
                  'Pimple on gum near tooth',
                  'X-ray shows infection',
                  'Crown feels loose'
                ].map((sign, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-white rounded-lg border border-red-200">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-800">{sign}</span>
                  </div>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Why Root Canals Fail</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-3">Common Causes:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />Missed canals during first RCT</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />Incomplete cleaning of canals</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />Curved or blocked canals</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />Leaking restoration/crown</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />New decay at margins</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />Complex root anatomy</li>
                  </ul>
                </div>

                <div className="p-6 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">Re-RCT Success Rate:</h3>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Success Rate</span>
                      <span className="font-bold text-green-600">75-90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-green-600 h-4 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">Re-RCT gives your tooth a second chance. If successful, you avoid extraction and implant (which costs 5x more).</p>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Alternative if Re-RCT fails:</div>
                    <div className="font-semibold text-sm">Apicoectomy (root-end surgery) or Extraction + Implant</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-orange-700 mb-1">₹6,000 - ₹12,000</div><div className="text-sm text-gray-600">Per tooth</div></div>
                  <div><div className="font-bold text-2xl text-orange-700 mb-1">1-2 visits</div><div className="text-sm text-gray-600">Usually</div></div>
                  <div><div className="font-bold text-2xl text-orange-700 mb-1">85% Success</div><div className="text-sm text-gray-600">Average rate</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Re-RCT (Root Canal Retreatment)" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={92}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <ModernCardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Save Your Tooth with Re-RCT</h2>
                <p className="text-gray-700 mb-6">Don't give up on your tooth. Expert endodontic retreatment by Dr. Rockson Samuel can save teeth when first RCT fails.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Re-RCT</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-orange-600 text-orange-600">
                    <Link href="https://wa.me/917010650063?text=I%20need%20Re-RCT" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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

