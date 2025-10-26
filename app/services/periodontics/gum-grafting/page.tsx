import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Activity, Heart } from 'lucide-react'

const reviews = generateServiceReviews('Gum Grafting', 'default')

export const metadata: Metadata = {
  title: 'Gum Grafting Surgery | Gingival Grafting | Indira Dental Clinic Vellore',
  description: 'Gum grafting surgery in Vellore. Treat receding gums, exposed roots by Dr. Rockson Samuel. Advanced gingival grafting. Price: ₹8,000-₹15,000/tooth. Book: 7010650063',
  keywords: 'gum grafting vellore, gingival grafting, receding gums treatment, gum recession, exposed roots, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/periodontics/gum-grafting' },
}

export default function GumGraftingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Periodontics', href: '/services/periodontics' }, { title: 'Gum Grafting', href: '/services/periodontics/gum-grafting' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700"><Activity className="w-4 h-4 inline mr-1" />Surgical Gum Restoration</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gum Grafting (Gingival Grafting)</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced surgical procedure to cover exposed tooth roots and restore receding gums. Improve appearance, reduce sensitivity, protect teeth.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>When is Gum Grafting Needed?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3">Signs You Need Gum Grafting:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Receding gums (gum line moving up)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Exposed tooth roots visible</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Severe tooth sensitivity to hot/cold</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Teeth look longer than before</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Gum recession from brushing too hard</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Gum disease causing gum loss</li>
                  </ul>
                </div>

                <div className="p-6 bg-pink-50 rounded-lg">
                  <h3 className="font-semibold text-pink-800 mb-3">Benefits of Gum Grafting:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Cover exposed roots</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Reduce/eliminate sensitivity</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Prevent further recession</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Improve gum/tooth appearance</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Protect teeth from root decay</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Prevent tooth loss</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Types of Gum Grafts</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { type: 'Connective Tissue Graft', desc: 'Most common, tissue from roof of mouth', price: '₹8,000-₹12,000' },
                    { type: 'Free Gingival Graft', desc: 'Tissue directly from palate', price: '₹7,000-₹10,000' },
                    { type: 'Pedicle Graft', desc: 'Tissue from nearby gum', price: '₹6,000-₹9,000' }
                  ].map((graft, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">{graft.type}</h4>
                      <p className="text-xs text-gray-600 mb-2">{graft.desc}</p>
                      <div className="text-sm font-bold text-red-600">{graft.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-red-700 mb-1">₹8,000 - ₹15,000</div><div className="text-sm text-gray-600">Per tooth</div></div>
                  <div><div className="font-bold text-2xl text-red-700 mb-1">1-2 hours</div><div className="text-sm text-gray-600">Procedure time</div></div>
                  <div><div className="font-bold text-2xl text-red-700 mb-1">2-4 weeks</div><div className="text-sm text-gray-600">Healing time</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Gum Grafting Surgery" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={89}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
              <ModernCardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Restore Your Gum Health</h2>
                <p className="text-gray-700 mb-6">Don't let receding gums cause sensitivity and tooth loss. Expert gum grafting by Dr. Rockson Samuel. Advanced microsurgical techniques for better results.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600">
                    <Link href="https://wa.me/917010650063?text=I%20need%20gum%20grafting" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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

