import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ceramic Braces | Tooth-Colored Braces | Indira Dental Clinic Vellore',
  description: 'Aesthetic ceramic braces in Vellore. Tooth-colored, less visible braces by Dr. Rockson Samuel. Adults preferred choice. Price: ₹35,000-₹60,000. Book: 7010650063',
  keywords: 'ceramic braces vellore, tooth colored braces, clear braces, aesthetic braces, adult braces, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/orthodontics/ceramic-braces' },
}

const reviews = generateServiceReviews('Ceramic Braces', 'orthodontics')

export default function CeramicBracesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Orthodontics', href: '/services/orthodontics' }, { title: 'Ceramic Braces', href: '/services/orthodontics/ceramic-braces' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-pink-100 text-pink-700"><Eye className="w-4 h-4 inline mr-1" />Less Visible & Aesthetic</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ceramic Braces (Tooth-Colored)</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Same effectiveness as metal braces, but tooth-colored for a more aesthetic appearance. Perfect for adults and professionals.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Ceramic Braces Benefits</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Tooth-Colored', desc: 'Brackets blend with natural teeth color - less noticeable' },
                  { title: 'Same Effectiveness', desc: 'Works just as well as traditional metal braces' },
                  { title: 'Stain-Resistant', desc: 'High-quality ceramic resists yellowing and staining' },
                  { title: 'Adult-Friendly', desc: 'More professional appearance for working adults' },
                  { title: 'Comfortable', desc: 'Smooth ceramic material is gentle on lips and cheeks' },
                  { title: 'All Cases', desc: 'Can treat simple to complex orthodontic issues' }
                ].map((benefit, idx) => (
                  <div key={idx} className="p-4 bg-pink-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center"><CheckCircle className="w-5 h-5 text-pink-600 mr-2" />{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div><div className="font-bold text-2xl text-pink-700 mb-1">₹35,000 - ₹60,000</div><div className="text-sm text-gray-600">Complete treatment</div></div>
                  <div><div className="font-bold text-2xl text-pink-700 mb-1">18-30 months</div><div className="text-sm text-gray-600">Treatment duration</div></div>
                  <div><div className="font-bold text-2xl text-pink-700 mb-1">4-6 weeks</div><div className="text-sm text-gray-600">Between visits</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Ceramic Braces" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={89}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
              <ModernCardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Aesthetic Ceramic Braces</h2>
                <p className="text-gray-700 mb-6">Less visible braces for a confident smile during treatment. Free orthodontic consultation with Dr. Rockson Samuel.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-pink-600 text-pink-600">
                    <Link href="https://wa.me/917010650063?text=I%20want%20ceramic%20braces" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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

