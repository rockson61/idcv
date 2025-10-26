import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Smile } from 'lucide-react'

const reviews = generateServiceReviews('Dentures', 'default')

export const metadata: Metadata = {
  title: 'Dentures | Complete & Partial Dentures | Indira Dental Clinic Vellore',
  description: 'Quality dentures in Vellore. Complete dentures, partial dentures, flexible dentures, implant-supported dentures. Dr. Rockson Samuel. Price: ₹8,000-₹2,00,000. Call: 7010650063',
  keywords: 'dentures vellore, complete dentures, partial dentures, flexible dentures, false teeth, removable dentures, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/prosthodontics/dentures' },
}

export default function DenturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Prosthodontics', href: '/services/prosthodontics' }, { title: 'Dentures', href: '/services/prosthodontics/dentures' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-pink-100 text-pink-700">Complete Tooth Replacement</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dentures & False Teeth</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Replace all or multiple missing teeth with custom dentures. Comfortable, natural-looking, and affordable.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Denture Options</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Complete Dentures', price: '₹15,000 - ₹35,000', desc: 'Full set of upper/lower teeth', time: '4-6 weeks' },
                  { name: 'Partial Dentures', price: '₹8,000 - ₹25,000', desc: 'Replace multiple missing teeth', time: '3-4 weeks' },
                  { name: 'Flexible Dentures', price: '₹12,000 - ₹30,000', desc: 'Comfortable, no metal clasps', time: '2-3 weeks' },
                  { name: 'Implant-Supported Dentures', price: '₹80,000 - ₹2,00,000', desc: 'Secure, no slipping', time: '3-6 months' }
                ].map((denture, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{denture.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{denture.desc}</p>
                    <div className="space-y-1 text-sm">
                      <div><strong>Price:</strong> {denture.price}</div>
                      <div><strong>Timeline:</strong> {denture.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
            <ModernCardContent className="p-8 text-center">
              <Smile className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Your Dentures Today</h2>
              <p className="text-gray-700 mb-6">Custom-fitted dentures restore your smile and eating ability. Free consultation with Dr. Rockson Samuel.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-pink-600 text-pink-600">
                  <Link href="https://wa.me/917010650063?text=I%20need%20dentures" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
              </Button>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Reviews Section */}
        <div className="mt-8">
          <ServiceReviews 
            serviceName="Dentures" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={267}
          />
        </div>
      </div>
    </SectionContainer>
  </div>
)
}

