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

export const metadata: Metadata = {
  title: 'Porcelain Veneers | Dental Veneers | Indira Dental Clinic Vellore',
  description: 'Premium porcelain veneers in Vellore. Transform your smile with custom veneers by Dr. Rockson Samuel. Natural-looking, stain-resistant. Price: ₹12,000-₹25,000/tooth. Book: 7010650063',
  keywords: 'porcelain veneers vellore, dental veneers, teeth veneers, smile makeover, cosmetic veneers, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/cosmetic-dentistry/veneers' },
}

const reviews = generateServiceReviews('Porcelain Veneers', 'default')

export default function VeneersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' }, { title: 'Veneers', href: '/services/cosmetic-dentistry/veneers' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700"><Sparkles className="w-4 h-4 inline mr-1" />Hollywood Smile</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Porcelain Veneers</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ultra-thin porcelain shells custom-made to cover the front surface of teeth. Instantly transform discolored, chipped, or misaligned teeth.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>What Can Veneers Fix?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Permanently stained or discolored teeth',
                  'Chipped or cracked teeth',
                  'Gaps between teeth',
                  'Misshapen or uneven teeth',
                  'Slightly crooked teeth',
                  'Worn down teeth',
                  'Small teeth (make them larger)',
                  'Teeth with uneven lengths'
                ].map((fix, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-teal-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-sm text-gray-800">{fix}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Veneer Types & Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold text-teal-700 mb-2">Porcelain Veneers</h4>
                    <p className="text-sm text-gray-600 mb-3">Premium, natural-looking, stain-resistant</p>
                    <div className="text-lg font-bold text-teal-600">₹15,000 - ₹25,000/tooth</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold text-teal-700 mb-2">Composite Veneers</h4>
                    <p className="text-sm text-gray-600 mb-3">Affordable, same-day option</p>
                    <div className="text-lg font-bold text-teal-600">₹8,000 - ₹15,000/tooth</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">2-3 Visits</div><div className="text-sm text-gray-600">Porcelain veneers</div></div>
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">10-15 years</div><div className="text-sm text-gray-600">Average lifespan</div></div>
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">No Pain</div><div className="text-sm text-gray-600">Minimal tooth prep</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Porcelain Veneers" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={94}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
              <ModernCardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Your Dream Smile with Veneers</h2>
                <p className="text-gray-700 mb-6">Free smile analysis and veneer consultation. See digital preview of your new smile. Premium quality guaranteed.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600">
                    <Link href="https://wa.me/917010650063?text=I%20want%20porcelain%20veneers" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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
