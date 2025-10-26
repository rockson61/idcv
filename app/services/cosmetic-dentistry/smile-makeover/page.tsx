import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Sparkles, Smile } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Smile Makeover | Complete Smile Transformation | Indira Dental Clinic Vellore',
  description: 'Complete smile makeover in Vellore. Transform your smile with veneers, crowns, whitening, orthodontics by Dr. Rockson Samuel. Price: ₹80,000-₹3,00,000. Book: 7010650063',
  keywords: 'smile makeover vellore, smile transformation, cosmetic dentistry vellore, smile design, Dr Rockson Samuel, full smile makeover',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/cosmetic-dentistry/smile-makeover' },
}

const reviews = generateServiceReviews('Smile Makeover', 'default')

export default function SmileMakeoverPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' }, { title: 'Smile Makeover', href: '/services/cosmetic-dentistry/smile-makeover' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800"><Sparkles className="w-4 h-4 inline mr-1" />Complete Transformation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Smile Makeover</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform your smile with our comprehensive smile makeover. Combines multiple cosmetic treatments for a stunning, natural-looking result.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle className="flex items-center gap-3"><Smile className="w-6 h-6 text-yellow-600" />Smile Makeover Includes</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Professional Teeth Whitening',
                  'Porcelain Veneers',
                  'Dental Crowns',
                  'Gum Contouring',
                  'Dental Bonding',
                  'Orthodontic Treatment',
                  'Dental Implants (if needed)',
                  'Full Smile Assessment'
                ].map((treatment, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-sm text-gray-800">{treatment}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Smile Makeover Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { step: '1', title: 'Consultation', desc: 'Digital smile analysis' },
                    { step: '2', title: 'Planning', desc: 'Custom treatment plan' },
                    { step: '3', title: 'Treatment', desc: 'Multiple procedures' },
                    { step: '4', title: 'Result', desc: 'Beautiful new smile' }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{phase.step}</div>
                      <h4 className="font-semibold text-sm mb-1">{phase.title}</h4>
                      <p className="text-xs text-gray-600">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-pink-100 to-orange-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-pink-700 mb-1">₹80,000 - ₹3,00,000</div><div className="text-sm text-gray-600">Depends on treatments</div></div>
                  <div><div className="font-bold text-2xl text-pink-700 mb-1">2-6 months</div><div className="text-sm text-gray-600">Total duration</div></div>
                  <div><div className="font-bold text-2xl text-pink-700 mb-1">Lifetime</div><div className="text-sm text-gray-600">Lasting results</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Smile Makeover" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={67}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-yellow-50 to-pink-50 border-yellow-200">
              <ModernCardContent className="p-8 text-center">
                <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Transform Your Smile Today</h2>
                <p className="text-gray-700 mb-6">Free digital smile analysis and consultation. See your new smile before treatment begins. EMI options available.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free Smile Analysis</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-yellow-600 text-yellow-700">
                    <Link href="https://wa.me/917010650063?text=I%20want%20smile%20makeover" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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
