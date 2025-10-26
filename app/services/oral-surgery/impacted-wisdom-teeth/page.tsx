import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, AlertTriangle, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impacted Wisdom Tooth Removal | Surgical Extraction | Indira Dental Clinic Vellore',
  description: 'Expert impacted wisdom tooth removal in Vellore. Painless surgical extraction by Dr. Rockson Samuel. 3D imaging, sedation available. Price: ₹4,000-₹10,000. Book: 7010650063',
  keywords: 'impacted wisdom tooth vellore, wisdom tooth removal, surgical extraction, impacted teeth, Dr Rockson Samuel, painless extraction',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/oral-surgery/impacted-wisdom-teeth' },
}

const reviews = generateServiceReviews('Impacted Wisdom Tooth Removal', 'default')

export default function ImpactedWisdomTeethPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Oral Surgery', href: '/services/oral-surgery' }, { title: 'Impacted Wisdom Teeth', href: '/services/oral-surgery/impacted-wisdom-teeth' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700"><Activity className="w-4 h-4 inline mr-1" />Surgical Expertise</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Impacted Wisdom Tooth Removal</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Expert surgical removal of impacted wisdom teeth. 3D imaging for precise planning, sedation available for comfort.</p>
          </div>

          <ModernCard className="mb-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-300">
            <ModernCardContent className="p-8">
              <div className="text-center mb-6">
                <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Signs You Need Wisdom Tooth Removal</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Pain or swelling in back of mouth',
                  'Difficulty opening mouth',
                  'Bad breath or bad taste',
                  'Red, swollen, bleeding gums',
                  'Jaw pain or stiffness',
                  'Crowding of other teeth',
                  'Recurring infections',
                  'Cyst formation (X-ray finding)'
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
            <ModernCardHeader><ModernCardTitle>Types of Impacted Wisdom Teeth</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { type: 'Soft Tissue Impaction', desc: 'Partially erupted through gum', difficulty: 'Easy', price: '₹4,000-₹6,000' },
                  { type: 'Partial Bony Impaction', desc: 'Partially covered by bone', difficulty: 'Moderate', price: '₹6,000-₹8,000' },
                  { type: 'Complete Bony Impaction', desc: 'Fully covered by bone', difficulty: 'Complex', price: '₹8,000-₹10,000' },
                  { type: 'Horizontal Impaction', desc: 'Growing sideways', difficulty: 'Most Complex', price: '₹10,000-₹12,000' }
                ].map((imp, idx) => (
                  <div key={idx} className="p-6 bg-orange-50 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">{imp.type}</h3>
                    <p className="text-sm text-gray-600 mb-3">{imp.desc}</p>
                    <div className="space-y-1 text-sm">
                      <div><strong>Difficulty:</strong> {imp.difficulty}</div>
                      <div><strong>Price:</strong> <span className="text-orange-600 font-bold">{imp.price}</span></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Surgical Extraction Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { step: '1', title: '3D Imaging', desc: 'CBCT scan for planning' },
                    { step: '2', title: 'Sedation', desc: 'Local/IV sedation' },
                    { step: '3', title: 'Extraction', desc: '45-90 minutes' },
                    { step: '4', title: 'Recovery', desc: '1-2 weeks healing' }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{phase.step}</div>
                      <h4 className="font-semibold text-sm mb-1">{phase.title}</h4>
                      <p className="text-xs text-gray-600">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Impacted Wisdom Tooth Removal" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={187}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <ModernCardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Expert Wisdom Tooth Removal</h2>
                <p className="text-gray-700 mb-6">Painless surgical extraction with 3D imaging. Sedation available. Dr. Rockson Samuel - 5000+ successful extractions. Same-day appointment available.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Extraction</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-orange-600 text-orange-600">
                    <Link href="https://wa.me/917010650063?text=I%20have%20impacted%20wisdom%20tooth" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />Emergency WhatsApp</Link>
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

