import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Sparkles } from 'lucide-react'

const reviews = generateServiceReviews('Composite Bonding', 'default')

export const metadata: Metadata = {
  title: 'Dental Bonding | Tooth Bonding | Indira Dental Clinic Vellore',
  description: 'Dental bonding in Vellore. Fix chips, cracks, gaps, discoloration. Composite bonding by Dr. Rockson Samuel. Same-day results. Price: ₹1,500-₹4,000. Call: 7010650063',
  keywords: 'dental bonding vellore, tooth bonding, composite bonding, cosmetic bonding, chipped tooth repair, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/restorative-dentistry/composite-bonding' },
}

export default function CompositeBondingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Restorative Dentistry', href: '/services/restorative-dentistry' }, { title: 'Composite Bonding', href: '/services/restorative-dentistry/composite-bonding' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700"><Sparkles className="w-4 h-4 inline mr-1" />Same-Day Results</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dental Bonding & Composite Bonding</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fix chips, cracks, gaps, and discoloration with tooth-colored composite bonding. Painless, affordable, natural-looking results in one visit.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>What Can Bonding Fix?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Chipped or cracked teeth', 'Gaps between teeth', 'Discolored teeth', 'Misshapen teeth', 'Minor tooth decay', 'Exposed tooth roots', 'Protect worn enamel', 'Lengthen teeth'].map((use, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-teal-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-sm text-gray-800">{use}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div><div className="font-bold text-2xl text-teal-700 mb-1">₹1,500 - ₹4,000</div><div className="text-sm text-gray-600">Per tooth</div></div>
                  <div><div className="font-bold text-2xl text-teal-700 mb-1">1 Visit</div><div className="text-sm text-gray-600">Same-day completion</div></div>
                  <div><div className="font-bold text-2xl text-teal-700 mb-1">30-60 min</div><div className="text-sm text-gray-600">Quick procedure</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
            <ModernCardContent className="p-8 text-center">
              <Sparkles className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Transform Your Smile in One Visit</h2>
              <p className="text-gray-700 mb-6">Composite bonding provides immediate results. No anesthesia needed for most cases. Affordable smile enhancement.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Bonding</Link>
              </Button>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Reviews Section */}
        <div className="mt-8">
          <ServiceReviews 
            serviceName="Composite Bonding" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={198}
          />
        </div>
      </div>
    </SectionContainer>
  </div>
)
}

