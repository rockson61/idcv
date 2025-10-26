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

const reviews = generateServiceReviews('Dental Fillings', 'default')

export const metadata: Metadata = {
  title: 'Dental Fillings | Cavity Treatment | Indira Dental Clinic Vellore',
  description: 'Tooth-colored dental fillings in Vellore. Composite, amalgam, glass ionomer fillings. Painless cavity treatment. Dr. Rockson Samuel. Price: ₹1,000-₹2,500. Call: 7010650063',
  keywords: 'dental fillings vellore, cavity filling, composite filling, tooth colored filling, amalgam filling, Dr Rockson Samuel, cavity treatment',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/restorative-dentistry/dental-fillings' },
}

export default function DentalFillingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Restorative Dentistry', href: '/services/restorative-dentistry' }, { title: 'Dental Fillings', href: '/services/restorative-dentistry/dental-fillings' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Cavity Repair</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dental Fillings</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Restore cavities with tooth-colored fillings. Painless procedure, natural appearance, same-day completion.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Filling Options</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Composite Filling', price: '₹1,200 - ₹2,500', features: ['Tooth-colored', 'Natural appearance', 'Front/back teeth'] },
                  { name: 'Amalgam Filling', price: '₹800 - ₹1,500', features: ['Silver color', 'Most durable', 'Back teeth only'] },
                  { name: 'Glass Ionomer', price: '₹1,000 - ₹2,000', features: ['Fluoride release', 'Temporary use', 'Children friendly'] }
                ].map((filling, idx) => (
                  <div key={idx} className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">{filling.name}</h3>
                    {filling.features.map((f, i) => <div key={i} className="flex items-center text-sm mb-2"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />{f}</div>)}
                    <div className="mt-3 text-sm font-bold text-blue-600">{filling.price}</div>
                  </div>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200">
            <ModernCardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Fix Your Cavity Today</h2>
              <p className="text-gray-700 mb-6">Don't let cavities worsen. Get same-day fillings with Dr. Rockson Samuel. Painless, natural-looking results.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Appointment</Link>
              </Button>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Reviews Section */}
        <div className="mt-8">
          <ServiceReviews 
            serviceName="Dental Fillings" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={523}
          />
        </div>
      </div>
    </SectionContainer>
  </div>
)
}

