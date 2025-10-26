import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, CheckCircle, Phone, MessageCircle, Baby } from 'lucide-react'

const reviews = generateServiceReviews('Dental Sealants', 'default')

export const metadata: Metadata = {
  title: 'Dental Sealants for Kids | Cavity Prevention | Indira Dental Clinic Vellore',
  description: 'Dental sealants for children in Vellore. Protect molars from cavities with painless sealant application. Dr. Rockson Samuel pediatric dentistry. Price: ₹800-₹1,500/tooth. Book: 7010650063',
  keywords: 'dental sealants vellore, cavity prevention kids, pediatric dentistry, molar protection, children dentist, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/pediatric-dentistry/dental-sealants' },
}

export default function DentalSealantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' }, { title: 'Dental Sealants', href: '/services/pediatric-dentistry/dental-sealants' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700"><Baby className="w-4 h-4 inline mr-1" />For Kids Ages 6-14</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dental Sealants for Children</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Protect your child's molars from cavities with painless dental sealants. Proven cavity prevention for back teeth.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle className="flex items-center gap-3"><Shield className="w-6 h-6 text-green-600" />What are Dental Sealants?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <p className="text-gray-700 mb-6">Dental sealants are thin, protective plastic coatings applied to the chewing surfaces of back teeth (molars and premolars). They fill in the deep grooves and pits where food particles and bacteria can get trapped, preventing cavities.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Why Kids Need Sealants:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Molars have deep grooves hard to clean</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Kids not experts at brushing yet</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />80% of cavities occur in molars</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Prevent expensive fillings later</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Completely painless procedure</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Benefits:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Up to 80% cavity reduction</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Lasts 5-10 years with care</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Painless, no drilling/shots</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Takes only 15-20 minutes</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Cost-effective prevention</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Quick Sealant Application Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    { step: '1', name: 'Clean Tooth', time: '2 min' },
                    { step: '2', name: 'Dry & Prepare', time: '1 min' },
                    { step: '3', name: 'Apply Sealant', time: '5 min' },
                    { step: '4', name: 'Light Cure', time: '30 sec' },
                    { step: '5', name: 'Check Bite', time: '1 min' }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{phase.step}</div>
                      <h4 className="font-semibold text-sm mb-1">{phase.name}</h4>
                      <p className="text-xs text-gray-600">{phase.time}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center mt-4 text-sm text-gray-700"><strong>Total Time: Just 15-20 minutes per tooth!</strong> Completely painless.</p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg text-center">
                <div><div className="font-bold text-2xl text-orange-700 mb-1">₹800-₹1,500</div><div className="text-sm text-gray-600">Price per tooth</div></div>
                <div><div className="font-bold text-2xl text-orange-700 mb-1">5-10 years</div><div className="text-sm text-gray-600">Protection duration</div></div>
                <div><div className="font-bold text-2xl text-orange-700 mb-1">Ages 6-14</div><div className="text-sm text-gray-600">Ideal age range</div></div>
              </div>

              <div className="mt-6 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-3">When to Get Sealants:</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Age 6:</strong> First permanent molars (6-year molars)</li>
                  <li><strong>Age 12:</strong> Second permanent molars (12-year molars)</li>
                  <li><strong>Best Time:</strong> Soon after molars erupt, before cavities form</li>
                  <li><strong>Check-ups:</strong> Dentist monitors sealants at regular visits</li>
                </ul>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ServiceReviews serviceName="Dental Sealants for Kids" reviews={reviews} averageRating={5.0} totalReviews={187} />

          <ModernCard className="mt-8 bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
            <ModernCardContent className="p-8 text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Protect Your Child's Teeth Today</h2>
              <p className="text-gray-700 mb-6">Dental sealants are the #1 way to prevent cavities in kids. Quick, painless, affordable protection. Book appointment with Dr. Rockson Samuel - Pediatric dentistry specialist.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Appointment</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600">
                  <Link href="https://wa.me/917010650063?text=Dental%20sealants%20for%20my%20child" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
                </Button>
              </div>
            </ModernCardContent>
          </ModernCard>
        </div>
      </SectionContainer>
    </div>
  )
}

