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

const reviews = generateServiceReviews('Dental Bridges', 'default')

export const metadata: Metadata = {
  title: 'Dental Bridges | Replace Missing Teeth | Indira Dental Clinic Vellore',
  description: 'Dental bridges in Vellore. Fixed, removable, implant-supported bridges by Dr. Rockson Samuel. Replace 1-4 missing teeth. Price: ₹8,000-₹25,000. Call: 7010650063',
  keywords: 'dental bridges vellore, tooth replacement, fixed bridge, removable bridge, implant bridge, missing teeth, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/prosthodontics/dental-bridges' },
}

export default function DentalBridgesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Prosthodontics', href: '/services/prosthodontics' }, { title: 'Dental Bridges', href: '/services/prosthodontics/dental-bridges' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Bridge the Gap</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dental Bridges</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Replace missing teeth with fixed or removable bridges. Restore your smile, chewing function, and confidence.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Types of Dental Bridges</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Traditional Fixed Bridge', price: '₹12,000 - ₹25,000', desc: 'Anchored by crowns on adjacent teeth' },
                  { name: 'Cantilever Bridge', price: '₹10,000 - ₹20,000', desc: 'Supported by one adjacent tooth' },
                  { name: 'Implant-Supported Bridge', price: '₹40,000 - ₹80,000', desc: 'Anchored by dental implants' }
                ].map((bridge, idx) => (
                  <div key={idx} className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{bridge.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{bridge.desc}</p>
                    <div className="text-sm font-bold text-blue-600">{bridge.price}</div>
                  </div>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <ModernCardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Replace Missing Teeth with Bridges</h2>
              <p className="text-gray-700 mb-6">Don't let missing teeth affect your smile and function. Get custom dental bridges from Dr. Rockson Samuel.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600">
                  <Link href="https://wa.me/917010650063?text=I%20need%20dental%20bridge" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
              </Button>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Reviews Section */}
        <div className="mt-8">
          <ServiceReviews 
            serviceName="Dental Bridges" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={178}
          />
        </div>
      </div>
    </SectionContainer>
  </div>
)
}

