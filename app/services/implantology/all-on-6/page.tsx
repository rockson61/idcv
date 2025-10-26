import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Zap, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'All-on-6 Dental Implants | Full Arch Restoration | Indira Dental Clinic Vellore',
  description: 'All-on-6 dental implants in Vellore. Enhanced stability with 6 implants per arch. Better for larger jaws by Dr. Rockson Samuel. Price: ₹3,00,000-₹5,00,000. Book: 7010650063',
  keywords: 'all on 6 implants vellore, full arch implants, permanent dentures, full mouth implants, Dr Rockson Samuel, same day teeth',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/implantology/all-on-6' },
}

const reviews = generateServiceReviews('All-on-6 Implants', 'dental-implants')

export default function AllOn6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Implantology', href: '/services/dental-implants' }, { title: 'All-on-6', href: '/services/implantology/all-on-6' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700"><TrendingUp className="w-4 h-4 inline mr-1" />Enhanced Stability</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">All-on-6 Dental Implants</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced full arch restoration with 6 implants for enhanced stability. Better support, longer lasting, ideal for larger jaws.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>All-on-6 vs All-on-4: Which is Better?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-300">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center"><Zap className="w-5 h-5 mr-2" />All-on-6 Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />50% more implants = better stability</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Better load distribution</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Longer lifespan (30+ years)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Better for larger jaws</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />More bite force capacity</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Better emergency backup</li>
                  </ul>
                  <div className="mt-4 font-bold text-blue-700">Recommended for most patients</div>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">All-on-4 Limitations</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">• Only 4 implants per arch</li>
                    <li className="flex items-start">• Less stability over time</li>
                    <li className="flex items-start">• Higher stress on each implant</li>
                    <li className="flex items-start">• Not ideal for larger jaws</li>
                    <li className="flex items-start">• Limited bite force</li>
                    <li className="flex items-start">• If one fails, only 3 left</li>
                  </ul>
                  <div className="mt-4 text-sm text-gray-600">Good for minimal bone volume</div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">All-on-6 Treatment Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { step: '1', title: 'Consultation', desc: '3D CBCT scan & planning', time: 'Day 1' },
                    { step: '2', title: 'Surgery', desc: 'Place 6 implants', time: 'Day 1' },
                    { step: '3', title: 'Temp Teeth', desc: 'Same-day fixed teeth', time: 'Day 1' },
                    { step: '4', title: 'Final Teeth', desc: 'Permanent prosthesis', time: '4-6 months' }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{phase.step}</div>
                      <h4 className="font-semibold text-sm mb-1">{phase.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">{phase.desc}</p>
                      <div className="text-xs text-blue-600 font-semibold">{phase.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">₹3,00,000 - ₹5,00,000</div><div className="text-sm text-gray-600">Per arch (6 implants + prosthesis)</div></div>
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">99% Success</div><div className="text-sm text-gray-600">Higher than All-on-4</div></div>
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">30+ Years</div><div className="text-sm text-gray-600">Expected lifespan</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="All-on-6 Dental Implants" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={78}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <ModernCardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Superior All-on-6 Implants</h2>
                <p className="text-gray-700 mb-6">Free 3D consultation and treatment planning. German/Swiss implants. Lifetime warranty. Same-day teeth possible. Dr. Rockson Samuel - 2000+ successful implants.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free 3D Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600">
                    <Link href="https://wa.me/917010650063?text=I%20want%20All-on-6%20implants" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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

