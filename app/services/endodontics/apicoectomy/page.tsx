import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Activity } from 'lucide-react'

const reviews = generateServiceReviews('Apicoectomy', 'root-canal')

export const metadata: Metadata = {
  title: 'Apicoectomy | Root End Surgery | Indira Dental Clinic Vellore',
  description: 'Apicoectomy (root end surgery) in Vellore. Save tooth after failed root canal. Microsurgical endodontics by Dr. Rockson Samuel. Price: ₹8,000-₹15,000. Call: 7010650063',
  keywords: 'apicoectomy vellore, root end surgery, endodontic surgery, failed root canal, Dr Rockson Samuel, surgical endodontics',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/endodontics/apicoectomy' },
}

export default function ApicoectomyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Endodontics', href: '/services/endodontics' }, { title: 'Apicoectomy', href: '/services/endodontics/apicoectomy' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700"><Activity className="w-4 h-4 inline mr-1" />Advanced Endodontic Surgery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Apicoectomy (Root End Surgery)</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Save your tooth when root canal treatment fails. Microsurgical procedure to remove infected root tip and surrounding tissue.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>What is Apicoectomy?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <p className="text-gray-700 mb-4">An apicoectomy is a minor surgical procedure where the tip (apex) of the tooth root and surrounding infected tissue are removed. It's the last resort to save a tooth when conventional root canal re-treatment is not possible or has failed.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">When is it Needed?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Root canal has failed</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Persistent infection at root tip</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Complex root anatomy prevents re-treatment</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Crown/post prevents access to root</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Procedure Details</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Local anesthesia</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />45-90 minutes duration</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Minimal discomfort</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />95% success rate</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-700 mb-2">₹8,000 - ₹15,000</div>
                <div className="text-sm text-gray-700">Per tooth | Includes surgical fee, anesthesia, and follow-up</div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <ModernCardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Save Your Tooth with Apicoectomy</h2>
              <p className="text-gray-700 mb-6">Don't extract your tooth. Dr. Rockson Samuel performs precise apicoectomy to save your natural tooth.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600">
                  <Link href="https://wa.me/917010650063?text=I%20need%20apicoectomy" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
              </Button>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Reviews Section */}
        <div className="mt-8">
          <ServiceReviews 
            serviceName="Apicoectomy (Root End Surgery)" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={89}
          />
        </div>
      </div>
    </SectionContainer>
  </div>
)
}

