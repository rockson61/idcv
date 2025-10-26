import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Metal Braces | Traditional Braces | Indira Dental Clinic Vellore',
  description: 'Affordable metal braces in Vellore. Traditional orthodontic braces by Dr. Rockson Samuel. Effective teeth straightening. Price: ₹25,000-₹45,000. Book: 7010650063',
  keywords: 'metal braces vellore, traditional braces, orthodontic braces, teeth straightening, affordable braces, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/orthodontics/metal-braces' },
}

const reviews = generateServiceReviews('Metal Braces', 'orthodontics')

export default function MetalBracesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Orthodontics', href: '/services/orthodontics' }, { title: 'Metal Braces', href: '/services/orthodontics/metal-braces' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700"><Zap className="w-4 h-4 inline mr-1" />Most Effective & Affordable</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Metal Braces (Traditional Braces)</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The gold standard in orthodontic treatment. Most effective, durable, and affordable option for teeth straightening.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Why Choose Metal Braces?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Most Effective', desc: 'Can treat even severe misalignment and bite issues' },
                  { title: 'Most Affordable', desc: '30-40% cheaper than clear aligners or ceramic braces' },
                  { title: 'Fastest Results', desc: 'Stronger force means quicker tooth movement' },
                  { title: 'Most Durable', desc: 'Stainless steel resists breakage and staining' },
                  { title: 'No Compliance Needed', desc: 'Fixed in place - works 24/7 without your effort' },
                  { title: 'All Ages', desc: 'Suitable for children, teens, and adults' }
                ].map((benefit, idx) => (
                  <div key={idx} className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" />{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div><div className="font-bold text-2xl text-blue-700 mb-1">₹25,000 - ₹45,000</div><div className="text-sm text-gray-600">Complete treatment</div></div>
                  <div><div className="font-bold text-2xl text-blue-700 mb-1">18-24 months</div><div className="text-sm text-gray-600">Average duration</div></div>
                  <div><div className="font-bold text-2xl text-blue-700 mb-1">Monthly</div><div className="text-sm text-gray-600">Adjustment visits</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Metal Braces" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={156}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <ModernCardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Affordable Metal Braces Today</h2>
                <p className="text-gray-700 mb-6">Free orthodontic consultation and treatment planning. EMI options available. Dr. Rockson Samuel - 15+ years experience.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600">
                    <Link href="https://wa.me/917010650063?text=I%20want%20metal%20braces" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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

