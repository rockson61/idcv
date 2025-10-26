import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Baby, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fluoride Treatment for Kids | Cavity Prevention | Indira Dental Clinic Vellore',
  description: 'Professional fluoride treatment for children in Vellore. Prevent cavities, strengthen enamel by Dr. Rockson Samuel. Safe, painless. Price: ₹500-₹1,000. Book: 7010650063',
  keywords: 'fluoride treatment vellore, fluoride for kids, cavity prevention, children dentist, pediatric fluoride, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/pediatric-dentistry/fluoride-treatment' },
}

const reviews = generateServiceReviews('Fluoride Treatment for Kids', 'default')

export default function FluorideTreatmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' }, { title: 'Fluoride Treatment', href: '/services/pediatric-dentistry/fluoride-treatment' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700"><Shield className="w-4 h-4 inline mr-1" />Cavity Prevention</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fluoride Treatment for Kids</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional fluoride application to strengthen teeth and prevent cavities. Safe, painless, quick procedure for children.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle className="flex items-center gap-3"><Baby className="w-6 h-6 text-green-600" />Why Fluoride for Kids?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <p className="text-gray-700 mb-6">Children's teeth are more vulnerable to cavities. Professional fluoride treatment provides extra protection beyond regular toothpaste, especially for kids at high risk of tooth decay.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Benefits of Fluoride Treatment</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Strengthens tooth enamel</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Prevents cavities (up to 40%)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Reverses early decay</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Protects permanent teeth</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Quick & painless</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Safe for all ages</li>
                  </ul>
                </div>

                <div className="p-6 bg-teal-50 rounded-lg">
                  <h3 className="font-semibold text-teal-800 mb-3">Who Needs Fluoride Treatment?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />All children ages 6 months - 16 years</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Kids with history of cavities</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Children who snack frequently</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Kids with braces</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Those with weak enamel</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Areas without fluoridated water</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Fluoride Treatment Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { step: '1', title: 'Clean Teeth', desc: 'Professional cleaning first', time: '10 min' },
                    { step: '2', title: 'Apply Fluoride', desc: 'Gel, foam, or varnish', time: '5 min' },
                    { step: '3', title: 'Wait & Rinse', desc: 'Let it absorb', time: '1-4 min' }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{phase.step}</div>
                      <h4 className="font-semibold text-sm mb-1">{phase.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">{phase.desc}</p>
                      <div className="text-xs text-green-600 font-semibold">{phase.time}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-sm text-gray-600">
                  <strong>Total Time:</strong> 15-20 minutes | <strong>Frequency:</strong> Every 6 months
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-green-700 mb-1">₹500 - ₹1,000</div><div className="text-sm text-gray-600">Per session</div></div>
                  <div><div className="font-bold text-2xl text-green-700 mb-1">40% Less</div><div className="text-sm text-gray-600">Cavity reduction</div></div>
                  <div><div className="font-bold text-2xl text-green-700 mb-1">Every 6mo</div><div className="text-sm text-gray-600">Recommended frequency</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Fluoride Treatment for Kids" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={128}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
              <ModernCardContent className="p-8 text-center">
                <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Protect Your Child's Teeth Today</h2>
                <p className="text-gray-700 mb-6">Quick, painless fluoride treatment. Child-friendly environment. Dr. Rockson Samuel is gentle with kids. Free dental checkup included.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book for My Child</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600">
                    <Link href="https://wa.me/917010650063?text=Fluoride%20treatment%20for%20my%20child" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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

