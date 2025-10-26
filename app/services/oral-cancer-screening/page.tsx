import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, AlertTriangle, Eye, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Oral Cancer Screening | Early Detection | Indira Dental Clinic Vellore',
  description: 'Comprehensive oral cancer screening in Vellore. Early detection screening, biopsy, diagnosis by Dr. Rockson Samuel. Early detection saves lives. Book: 7010650063',
  keywords: 'oral cancer screening vellore, mouth cancer detection, oral cancer biopsy, early cancer detection, oral examination, Dr Rockson Samuel, cancer prevention',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/oral-cancer-screening' },
}

export default function OralCancerScreeningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-pink-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Oral Cancer Screening', href: '/services/oral-cancer-screening' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700"><AlertTriangle className="w-4 h-4 inline mr-1" />Early Detection Saves Lives</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Oral Cancer Screening & Detection</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive oral cancer screening using advanced diagnostic techniques. Early detection significantly improves treatment outcomes and survival rates.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle className="flex items-center gap-3"><Eye className="w-6 h-6 text-red-600" />Screening Process</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Visual Examination</h3>
                  <p className="text-sm text-gray-700">Thorough inspection of lips, tongue, cheeks, floor of mouth, palate, and throat for any abnormalities, lesions, or color changes.</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Physical Palpation</h3>
                  <p className="text-sm text-gray-700">Gentle palpation of neck, jaw, and oral tissues to detect lumps, swelling, or abnormal masses.</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg">
                  <h3 className="font-semibold text-pink-800 mb-2">Advanced Screening Tools</h3>
                  <p className="text-sm text-gray-700">Use of VELscope or similar adjunctive screening devices for enhanced detection of abnormal tissue.</p>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="mb-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-300">
            <ModernCardContent className="p-8">
              <div className="text-center mb-6">
                <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Warning Signs to Watch For</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Persistent mouth sores (>2 weeks)', 'White or red patches in mouth', 'Lumps or thickening of tissues', 'Difficulty swallowing or chewing', 'Persistent sore throat or hoarseness', 'Numbness in mouth or lips', 'Unexplained bleeding', 'Ear pain without infection'].map((sign, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-white rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-800">{sign}</span>
                  </div>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
            <ModernCardContent className="p-8 text-center">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Schedule Your Oral Cancer Screening</h2>
              <p className="text-gray-700 mb-2"><strong>Recommended: Annual screening for adults 18+</strong></p>
              <p className="text-gray-600 mb-6">Early detection offers 80-90% survival rate. Don't wait - get screened today.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Screening Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600">
                  <Link href="https://wa.me/917010650063?text=I%20need%20oral%20cancer%20screening" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />Emergency Contact</Link>
                </Button>
              </div>
              <div className="text-sm text-gray-600"><strong>Price: ₹500 - ₹1,000</strong> | <strong>Duration: 15-30 minutes</strong></div>
            </ModernCardContent>
          </ModernCard>
        </div>
      </SectionContainer>
    </div>
  )
}

