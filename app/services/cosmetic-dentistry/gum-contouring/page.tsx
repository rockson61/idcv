import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Sparkles, Scissors } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gum Contouring | Gummy Smile Treatment | Indira Dental Clinic Vellore',
  description: 'Laser gum contouring in Vellore. Fix gummy smile, reshape gums by Dr. Rockson Samuel. Painless laser treatment. Price: ₹8,000-₹25,000. Book: 7010650063',
  keywords: 'gum contouring vellore, gummy smile treatment, laser gum reshaping, gum lift, cosmetic gum surgery, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/cosmetic-dentistry/gum-contouring' },
}

const reviews = generateServiceReviews('Gum Contouring', 'default')

export default function GumContouringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' }, { title: 'Gum Contouring', href: '/services/cosmetic-dentistry/gum-contouring' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-pink-100 text-pink-700"><Scissors className="w-4 h-4 inline mr-1" />Laser Precision</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gum Contouring & Reshaping</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fix gummy smile and reshape uneven gums with painless laser gum contouring. Immediate results, minimal downtime.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>What is Gum Contouring?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <p className="text-gray-700 mb-6">Gum contouring (also called gum reshaping or gum lift) is a cosmetic dental procedure that reshapes the gum line to improve the appearance of your smile. Perfect for treating gummy smiles and uneven gum lines.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-pink-50 rounded-lg">
                  <h3 className="font-semibold text-pink-800 mb-3">What Can Gum Contouring Fix?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Gummy smile (excessive gum showing)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Uneven gum line</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Teeth look too short</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Asymmetrical gum line</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Excess gum tissue</li>
                  </ul>
                </div>

                <div className="p-6 bg-rose-50 rounded-lg">
                  <h3 className="font-semibold text-rose-800 mb-3">Laser Gum Contouring Benefits</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Painless procedure</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />No bleeding or stitches</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Quick healing (1-2 weeks)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Immediate results</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Minimal discomfort</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Gum Contouring Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { step: '1', title: 'Consultation', desc: 'Smile analysis & planning' },
                    { step: '2', title: 'Laser Treatment', desc: 'Precise gum reshaping' },
                    { step: '3', title: 'Healing', desc: 'Fast recovery 1-2 weeks' }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{phase.step}</div>
                      <h4 className="font-semibold text-sm mb-1">{phase.title}</h4>
                      <p className="text-xs text-gray-600">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-red-700 mb-1">₹8,000 - ₹25,000</div><div className="text-sm text-gray-600">Depends on extent</div></div>
                  <div><div className="font-bold text-2xl text-red-700 mb-1">1 Session</div><div className="text-sm text-gray-600">30-60 minutes</div></div>
                  <div><div className="font-bold text-2xl text-red-700 mb-1">Permanent</div><div className="text-sm text-gray-600">Lasting results</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Gum Contouring" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={52}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
              <ModernCardContent className="p-8 text-center">
                <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Fix Your Gummy Smile Today</h2>
                <p className="text-gray-700 mb-6">Painless laser gum contouring for a perfect smile. Free consultation and digital smile preview. Dr. Rockson Samuel - Cosmetic dentistry expert.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free Smile Analysis</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-pink-600 text-pink-600">
                    <Link href="https://wa.me/917010650063?text=I%20want%20gum%20contouring" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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

