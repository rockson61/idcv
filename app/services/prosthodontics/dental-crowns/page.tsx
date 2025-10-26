import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle } from 'lucide-react'

const reviews = generateServiceReviews('Dental Crowns', 'default')

export const metadata: Metadata = {
  title: 'Dental Crowns | Tooth Caps | Indira Dental Clinic Vellore',
  description: 'High-quality dental crowns in Vellore. Porcelain, zirconia, metal crowns by Dr. Rockson Samuel. Restore damaged teeth. Price: ₹5,000-₹15,000. Call: 7010650063',
  keywords: 'dental crowns vellore, tooth caps, porcelain crowns, zirconia crowns, metal crowns, dental restoration, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/prosthodontics/dental-crowns' },
}

export default function DentalCrownsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Prosthodontics', href: '/services/prosthodontics' }, { title: 'Dental Crowns', href: '/services/prosthodontics/dental-crowns' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Tooth Restoration</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dental Crowns & Caps</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Restore damaged teeth with custom-made dental crowns. Natural appearance, strong function, long-lasting results.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Types of Dental Crowns</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Porcelain Crown', price: '₹8,000 - ₹15,000', features: ['Most natural look', 'Metal-free', 'Front teeth ideal'] },
                  { name: 'Zirconia Crown', price: '₹10,000 - ₹18,000', features: ['Strongest material', 'Tooth-colored', 'Any tooth'] },
                  { name: 'Metal Crown', price: '₹5,000 - ₹8,000', features: ['Most durable', 'Back teeth', 'Cost-effective'] }
                ].map((crown, idx) => (
                  <div key={idx} className="p-6 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">{crown.name}</h3>
                    {crown.features.map((f, i) => <div key={i} className="flex items-center text-sm mb-2"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />{f}</div>)}
                    <div className="mt-3 text-sm font-bold text-purple-600">{crown.price}</div>
                  </div>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <ModernCardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Restore Your Damaged Tooth</h2>
              <p className="text-gray-700 mb-6">Custom dental crowns restore strength, function, and appearance. Dr. Rockson Samuel ensures perfect fit and natural look.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-600">
                  <Link href="https://wa.me/917010650063?text=I%20need%20dental%20crown" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
              </Button>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Reviews Section */}
        <div className="mt-8">
          <ServiceReviews 
            serviceName="Dental Crowns" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={289}
          />
        </div>
      </div>
    </SectionContainer>
  </div>
)
}

