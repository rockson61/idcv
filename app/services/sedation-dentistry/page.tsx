import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Heart, Smile } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sedation Dentistry | Anxiety-Free Dental Care | Indira Dental Clinic Vellore',
  description: 'Sedation dentistry in Vellore for anxious patients. Nitrous oxide, oral sedation, IV sedation. Comfortable, stress-free dental treatments. Dr. Rockson Samuel. Call: 7010650063',
  keywords: 'sedation dentistry vellore, dental anxiety, nitrous oxide, oral sedation, IV sedation, sleep dentistry, fearless dentistry, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/sedation-dentistry' },
}

export default function SedationDentistryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Sedation Dentistry', href: '/services/sedation-dentistry' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Anxiety-Free Dental Care</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sedation Dentistry</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comfortable, stress-free dental treatments for anxious patients. Safe sedation options for all procedures.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle className="flex items-center gap-3"><Heart className="w-6 h-6 text-purple-600" />Sedation Options</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Nitrous Oxide (Laughing Gas)</h3>
                  <p className="text-sm text-gray-600 mb-3">Mild sedation, quick recovery</p>
                  <div className="text-sm"><strong>Price:</strong> ₹1,000 - ₹2,000</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Oral Sedation</h3>
                  <p className="text-sm text-gray-600 mb-3">Moderate sedation via medication</p>
                  <div className="text-sm"><strong>Price:</strong> ₹2,000 - ₹4,000</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">IV Sedation</h3>
                  <p className="text-sm text-gray-600 mb-3">Deep sedation for complex procedures</p>
                  <div className="text-sm"><strong>Price:</strong> ₹5,000 - ₹10,000</div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
            <ModernCardContent className="p-8 text-center">
              <Smile className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Overcome Dental Anxiety</h2>
              <p className="text-gray-700 mb-6">Don't let fear prevent you from getting dental care. Our sedation options ensure comfortable, stress-free treatment.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Consultation</Link>
                </Button>
              </div>
            </ModernCardContent>
          </ModernCard>
        </div>
      </SectionContainer>
    </div>
  )
}

