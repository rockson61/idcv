import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Scissors, Activity } from 'lucide-react'

const reviews = generateServiceReviews('Gum Surgery', 'default')

export const metadata: Metadata = {
  title: 'Gum Surgery | Periodontal Surgery | Indira Dental Clinic Vellore',
  description: 'Advanced gum surgery in Vellore. Flap surgery, osseous surgery, gingivectomy by Dr. Rockson Samuel. Treat severe gum disease. Price: ₹10,000-₹25,000. Book: 7010650063',
  keywords: 'gum surgery vellore, periodontal surgery, flap surgery, gingivectomy, gum disease surgery, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/periodontics/gum-surgery' },
}

export default function GumSurgeryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Periodontics', href: '/services/periodontics' }, { title: 'Gum Surgery', href: '/services/periodontics/gum-surgery' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700"><Scissors className="w-4 h-4 inline mr-1" />Advanced Surgical Care</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Periodontal Gum Surgery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Surgical treatment for advanced gum disease. Restore gum health, save teeth, eliminate pockets, and improve oral health.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle className="flex items-center gap-3"><Activity className="w-6 h-6 text-red-600" />Types of Gum Surgery</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Flap Surgery (Pocket Reduction)', desc: 'Clean deep pockets, reduce gum pocket depth', indication: 'Moderate to severe gum disease', price: '₹10,000-₹20,000' },
                  { name: 'Gingivectomy', desc: 'Remove excess gum tissue', indication: 'Gummy smile, overgrown gums', price: '₹8,000-₹15,000' },
                  { name: 'Osseous Surgery', desc: 'Reshape bone supporting teeth', indication: 'Advanced periodontitis with bone loss', price: '₹15,000-₹25,000' },
                  { name: 'Crown Lengthening', desc: 'Expose more tooth structure', indication: 'Short teeth, broken teeth below gum', price: '₹8,000-₹12,000' }
                ].map((surgery, idx) => (
                  <div key={idx} className="p-6 bg-red-50 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-2">{surgery.name}</h3>
                    <p className="text-sm text-gray-700 mb-2">{surgery.desc}</p>
                    <div className="text-xs text-gray-600 mb-3"><strong>For:</strong> {surgery.indication}</div>
                    <div className="text-sm font-bold text-red-600">{surgery.price}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Gum Surgery Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { step: '1', title: 'Evaluation', desc: 'Gum assessment, X-rays' },
                    { step: '2', title: 'Anesthesia', desc: 'Local numbing' },
                    { step: '3', title: 'Surgery', desc: '1-2 hours procedure' },
                    { step: '4', title: 'Healing', desc: '2-4 weeks recovery' }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{phase.step}</div>
                      <h4 className="font-semibold text-sm mb-1">{phase.title}</h4>
                      <p className="text-xs text-gray-600">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Gum Surgery" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={143}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <ModernCardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Expert Periodontal Surgery</h2>
                <p className="text-gray-700 mb-6">Advanced gum surgery to save your teeth and restore gum health. Dr. Rockson Samuel uses modern surgical techniques for minimal discomfort and faster healing.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Schedule Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600">
                    <Link href="https://wa.me/917010650063?text=I%20need%20gum%20surgery" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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

