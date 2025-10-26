import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Heart, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Preventive Dentistry | Teeth Cleaning & Oral Health | Indira Dental Clinic Vellore',
  description: 'Preventive dental care in Vellore. Regular checkups, teeth cleaning, fluoride treatments, sealants by Dr. Rockson Samuel. Prevent dental problems. Call: 7010650063',
  keywords: 'preventive dentistry vellore, teeth cleaning, dental checkup, fluoride treatment, dental sealants, oral hygiene, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/preventive-dentistry' },
}

export default function PreventiveDentistryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Preventive Dentistry', href: '/services/preventive-dentistry' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700">Prevention is Better Than Cure</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Preventive Dentistry Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Maintain optimal oral health with regular preventive care. Save money and avoid complex treatments.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle className="flex items-center gap-3"><Heart className="w-6 h-6 text-green-600" />Preventive Services</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Regular Dental Checkups</h3>
                  <p className="text-sm text-gray-600 mb-3">Comprehensive examination every 6 months</p>
                  <div className="text-sm"><strong>Price:</strong> ₹500 - ₹800</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Professional Teeth Cleaning</h3>
                  <p className="text-sm text-gray-600 mb-3">Remove plaque, tartar, and stains</p>
                  <div className="text-sm"><strong>Price:</strong> ₹1,000 - ₹1,500</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Fluoride Treatment</h3>
                  <p className="text-sm text-gray-600 mb-3">Strengthen enamel and prevent cavities</p>
                  <div className="text-sm"><strong>Price:</strong> ₹500 - ₹800</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Dental Sealants</h3>
                  <p className="text-sm text-gray-600 mb-3">Protect molars from decay</p>
                  <div className="text-sm"><strong>Price:</strong> ₹800 - ₹1,200 per tooth</div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
            <ModernCardContent className="p-8 text-center">
              <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your Preventive Care Today</h2>
              <p className="text-gray-700 mb-6">Regular preventive care saves money and keeps your smile healthy. Schedule your checkup with Dr. Rockson Samuel.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Checkup</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600">
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

