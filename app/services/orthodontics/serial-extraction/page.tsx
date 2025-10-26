import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Baby, Target, Activity } from 'lucide-react'

const reviews = generateServiceReviews('Serial Extraction', 'orthodontics')

export const metadata: Metadata = {
  title: 'Serial Extraction | Guided Tooth Removal for Kids | Indira Dental Clinic Vellore',
  description: 'Serial extraction orthodontic treatment in Vellore. Planned tooth removal for severe crowding in children by Dr. Rockson Samuel. Prevent future problems. Book: 7010650063',
  keywords: 'serial extraction vellore, guided tooth extraction, orthodontic extraction, kids tooth removal, pediatric orthodontics, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/orthodontics/serial-extraction' },
}

export default function SerialExtractionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Orthodontics', href: '/services/orthodontics' }, { title: 'Serial Extraction', href: '/services/orthodontics/serial-extraction' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700"><Baby className="w-4 h-4 inline mr-1" />For Kids Ages 8-12</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Serial Extraction (Guided Tooth Removal)</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Planned, sequential removal of baby teeth to guide permanent teeth eruption and reduce severe crowding. Preventive orthodontic treatment for children.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle className="flex items-center gap-3"><Target className="w-6 h-6 text-orange-600" />What is Serial Extraction?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <p className="text-gray-700 mb-6">Serial extraction is a planned, systematic removal of certain baby (primary) teeth in a specific sequence to guide the eruption of permanent teeth. This is done when there's severe crowding and insufficient space for permanent teeth to come in properly.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">When is it Needed?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Severe crowding detected early (ages 7-9)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Not enough space for permanent teeth</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Ectopic eruption (teeth coming in wrong position)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Prevent impacted permanent teeth</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Reduce future orthodontic treatment time</li>
                  </ul>
                </div>

                <div className="p-6 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-3">Benefits:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Guide teeth into better positions naturally</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Reduce severity of crowding</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Shorter braces treatment later</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />May avoid extraction of permanent teeth</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Better facial profile development</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Serial Extraction Sequence</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { step: '1', age: 'Age 8-9', tooth: 'Primary canines', desc: 'First baby canines removed' },
                    { step: '2', age: 'Age 9-10', tooth: 'Primary molars', desc: 'First baby molars removed' },
                    { step: '3', age: 'Age 10-11', tooth: 'Premolars', desc: 'Sometimes permanent premolars' },
                    { step: '4', age: 'Age 12-14', tooth: 'Braces', desc: 'Final alignment if needed' }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{phase.step}</div>
                      <div className="text-xs text-orange-600 font-semibold mb-1">{phase.age}</div>
                      <h4 className="font-semibold text-sm mb-1">{phase.tooth}</h4>
                      <p className="text-xs text-gray-600">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-red-50 rounded-lg border-2 border-red-200">
                <h3 className="font-semibold text-red-800 mb-3">⚠️ Important Note:</h3>
                <p className="text-sm text-gray-700">
                  Serial extraction is NOT for all crowded cases! It's only recommended for <strong>severe crowding</strong> where 
                  there's a <strong>significant space deficiency</strong>. Dr. Rockson will carefully evaluate your child and 
                  recommend this only if absolutely necessary. Timing is critical - must be done at specific ages.
                </p>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-green-700 mb-1">₹3,000 - ₹8,000</div><div className="text-sm text-gray-600">Total cost (all extractions)</div></div>
                  <div><div className="font-bold text-2xl text-green-700 mb-1">3-4 years</div><div className="text-sm text-gray-600">Total treatment span</div></div>
                  <div><div className="font-bold text-2xl text-green-700 mb-1">Ages 8-12</div><div className="text-sm text-gray-600">Ideal age range</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Serial Extraction" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={45}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
              <ModernCardContent className="p-8 text-center">
                <Activity className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Early Orthodontic Evaluation for Your Child</h2>
                <p className="text-gray-700 mb-6">If your child has severe crowding, early intervention can prevent bigger problems. Free consultation to assess if serial extraction is right for your child. Dr. Rockson Samuel - Pediatric orthodontics specialist.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Evaluation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-orange-600 text-orange-600">
                    <Link href="https://wa.me/917010650063?text=Serial%20extraction%20consultation%20for%20my%20child" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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
