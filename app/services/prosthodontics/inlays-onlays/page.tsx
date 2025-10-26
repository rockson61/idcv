import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dental Inlays & Onlays | Indirect Fillings | Indira Dental Clinic Vellore',
  description: 'Premium dental inlays and onlays in Vellore. Conservative alternative to crowns by Dr. Rockson Samuel. Porcelain/ceramic. Price: ₹8,000-₹15,000. Book: 7010650063',
  keywords: 'dental inlays vellore, dental onlays, indirect fillings, porcelain inlay, ceramic onlay, Dr Rockson Samuel, tooth restoration',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/prosthodontics/inlays-onlays' },
}

const reviews = generateServiceReviews('Dental Inlays & Onlays', 'default')

export default function InlaysOnlaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Prosthodontics', href: '/services/prosthodontics' }, { title: 'Inlays & Onlays', href: '/services/prosthodontics/inlays-onlays' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700"><Layers className="w-4 h-4 inline mr-1" />Conservative Restoration</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dental Inlays & Onlays</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Premium indirect fillings for damaged teeth. More conservative than crowns, stronger than regular fillings.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Inlay vs Onlay vs Crown vs Filling</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-indigo-200">
                      <th className="text-left p-3 font-semibold">Treatment</th>
                      <th className="text-left p-3 font-semibold">Damage Level</th>
                      <th className="text-left p-3 font-semibold">Tooth Structure Saved</th>
                      <th className="text-left p-3 font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold">Regular Filling</td>
                      <td className="p-3">Small cavity</td>
                      <td className="p-3 text-green-600">Most (95%+)</td>
                      <td className="p-3">₹1,000-₹2,500</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-indigo-50">
                      <td className="p-3 font-semibold">Inlay</td>
                      <td className="p-3">Medium cavity (inside cusps)</td>
                      <td className="p-3 text-green-600">More (80-90%)</td>
                      <td className="p-3 font-bold text-indigo-600">₹8,000-₹12,000</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-purple-50">
                      <td className="p-3 font-semibold">Onlay</td>
                      <td className="p-3">Large cavity (covers cusps)</td>
                      <td className="p-3 text-yellow-600">Moderate (60-80%)</td>
                      <td className="p-3 font-bold text-purple-600">₹10,000-₹15,000</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold">Crown</td>
                      <td className="p-3">Severe damage/RCT</td>
                      <td className="p-3 text-red-600">Least (40-60%)</td>
                      <td className="p-3">₹8,000-₹18,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-6 bg-indigo-50 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-4">When to Choose Inlays/Onlays?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">✅ Perfect For:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Cavity too large for filling</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Not severe enough for crown</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Want to preserve tooth structure</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Back teeth (molars, premolars)</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Old filling replacement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">💎 Advantages:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Preserves healthy tooth structure</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Stronger than regular fillings</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Perfect fit & seal</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Lasts 15-30 years</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Natural appearance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">2 Visits</div><div className="text-sm text-gray-600">Total appointments</div></div>
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">15-30 Years</div><div className="text-sm text-gray-600">Lifespan</div></div>
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">100%</div><div className="text-sm text-gray-600">Custom-made</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Dental Inlays & Onlays" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={43}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
              <ModernCardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Save More Tooth Structure with Inlays/Onlays</h2>
                <p className="text-gray-700 mb-6">Conservative, strong, long-lasting restoration. Premium porcelain/ceramic materials. Dr. Rockson Samuel - Expert prosthodontist.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-indigo-600 text-indigo-600">
                    <Link href="https://wa.me/917010650063?text=I%20need%20inlay%20or%20onlay" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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

