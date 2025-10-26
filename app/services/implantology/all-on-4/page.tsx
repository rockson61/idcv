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

const reviews = generateServiceReviews('All-on-4 Implants', 'dental-implants')

export const metadata: Metadata = {
  title: 'All-on-4 Dental Implants | Full Arch Restoration | Indira Dental Clinic Vellore',
  description: 'All-on-4 dental implants in Vellore. Full arch restoration with just 4 implants. Same-day teeth by Dr. Rockson Samuel. Price: ₹2,50,000-₹4,00,000. Call: 7010650063',
  keywords: 'all on 4 implants vellore, full arch implants, same day teeth, full mouth implants, Dr Rockson Samuel, permanent dentures',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/implantology/all-on-4' },
}

export default function AllOn4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Implantology', href: '/services/dental-implants' }, { title: 'All-on-4', href: '/services/implantology/all-on-4' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700"><Zap className="w-4 h-4 inline mr-1" />Revolutionary Solution</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">All-on-4 Dental Implants</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Replace entire arch with just 4 implants. Same-day teeth, permanent solution, full smile restoration.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Why All-on-4?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Only 4 implants needed (not 6-8)', 'Same-day teeth possible', 'No bone grafting usually', 'Fixed, non-removable', 'Eat normally immediately', 'Natural look and feel', 'Cost-effective solution', 'Lifetime warranty on implants'].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-4 bg-teal-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-700 mb-2">₹2,50,000 - ₹4,00,000</div>
                <div className="text-sm text-gray-700">Per arch (upper or lower) | Includes: 4 implants + full arch prosthesis</div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
            <ModernCardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Transform Your Smile with All-on-4</h2>
              <p className="text-gray-700 mb-6">Get a complete set of fixed teeth in one day. Permanent solution with natural function and aesthetics.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free 3D Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600">
                  <Link href="https://wa.me/917010650063?text=I%20want%20All-on-4%20implants" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
              </Button>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Reviews Section */}
        <div className="mt-8">
          <ServiceReviews 
            serviceName="All-on-4 Dental Implants" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={156}
          />
        </div>
      </div>
    </SectionContainer>
  </div>
)
}

