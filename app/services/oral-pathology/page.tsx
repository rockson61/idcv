import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { Calendar, Clock, Shield, Star, CheckCircle, Phone, MessageCircle, ArrowRight, Microscope, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Oral Pathology & Disease Diagnosis | Indira Dental Clinic Vellore',
  description: 'Expert oral pathology services in Vellore. Oral cancer screening, biopsy, lesion diagnosis by Dr. Rockson Samuel. Early detection saves lives. Call: 7010650063',
  keywords: 'oral pathology vellore, oral cancer screening, mouth lesions, oral biopsy, oral diseases, Dr Rockson Samuel, oral diagnosis',
  openGraph: {
    title: 'Oral Pathology & Disease Diagnosis | Indira Dental Clinic',
    description: 'Expert diagnosis of oral diseases and conditions. Early detection and treatment planning.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/oral-pathology',
  },
}

export default function OralPathologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Oral Pathology', href: '/services/oral-pathology' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200">Disease Diagnosis & Prevention</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Oral Pathology & Diagnosis</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Expert diagnosis of oral diseases, lesions, and abnormalities. Early detection and treatment planning for optimal oral health.
            </p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle className="flex items-center gap-3"><Microscope className="w-6 h-6 text-red-600" />Diagnostic Services</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Oral Cancer Screening</h3>
                  <p className="text-sm text-gray-600 mb-4">Comprehensive examination for early cancer detection</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Visual examination</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Palpation of tissues</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Screening tools</li>
                  </ul>
                  <div className="mt-4 text-sm"><strong>Price:</strong> ₹500 - ₹1,000</div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Oral Biopsy</h3>
                  <p className="text-sm text-gray-600 mb-4">Tissue sampling for definitive diagnosis</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Incisional biopsy</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Excisional biopsy</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Histopathology</li>
                  </ul>
                  <div className="mt-4 text-sm"><strong>Price:</strong> ₹2,000 - ₹5,000</div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <ModernCardContent className="p-8 text-center">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Early Detection Saves Lives</h2>
              <p className="text-gray-700 mb-6">Get regular oral cancer screenings. Early detection significantly improves treatment outcomes.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Schedule Screening</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600">
                  <Link href="https://wa.me/917010650063" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
                </Button>
              </div>
            </ModernCardContent>
          </ModernCard>
        </div>
      </SectionContainer>
    </div>
  )
}

