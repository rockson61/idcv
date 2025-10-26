import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Clock, Shield, Star, CheckCircle, Phone, MessageCircle, AlertTriangle } from 'lucide-react'

const reviews = generateServiceReviews('Tooth Extraction', 'default')

export const metadata: Metadata = {
  title: 'Tooth Extraction | Painless Removal | Indira Dental Clinic Vellore',
  description: 'Safe, painless tooth extraction in Vellore. Simple & surgical extractions, wisdom teeth removal by Dr. Rockson Samuel. Same-day procedure. Call: 7010650063',
  keywords: 'tooth extraction vellore, wisdom tooth removal, painless extraction, surgical extraction, tooth removal, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/oral-surgery/tooth-extraction' },
}

export default function ToothExtractionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Oral Surgery', href: '/services/oral-surgery' }, { title: 'Tooth Extraction', href: '/services/oral-surgery/tooth-extraction' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700">Painless & Safe</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tooth Extraction Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Safe, painless tooth removal using modern techniques. From simple extractions to complex wisdom teeth removal.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Types of Extractions</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Simple Extraction</h3>
                  <p className="text-sm text-gray-600 mb-3">For visible, easily accessible teeth</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />15-30 minutes</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Local anesthesia</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Quick recovery</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹800 - ₹2,000</div>
                </div>
                <div className="p-6 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Surgical Extraction</h3>
                  <p className="text-sm text-gray-600 mb-3">For impacted or broken teeth</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />45-90 minutes</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Sedation available</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Sutures used</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹2,000 - ₹5,000</div>
                </div>
                <div className="p-6 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Wisdom Teeth Removal</h3>
                  <p className="text-sm text-gray-600 mb-3">Specialized extraction of third molars</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />1-2 hours</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />All 4 can be done together</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Sedation recommended</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹3,000 - ₹8,000 per tooth</div>
                </div>
                <div className="p-6 bg-pink-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Emergency Extraction</h3>
                  <p className="text-sm text-gray-600 mb-3">Urgent removal for severe pain/infection</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Same-day service</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Immediate relief</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />24/7 availability</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹1,500 - ₹4,000</div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <ModernCardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Tooth Extraction?</h2>
              <p className="text-gray-700 mb-6">Safe, comfortable tooth removal with expert care. Dr. Rockson Samuel has performed 5000+ successful extractions.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Extraction</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600">
                  <Link href="https://wa.me/917010650063?text=I%20need%20tooth%20extraction" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />Emergency: WhatsApp</Link>
                </Button>
              </div>
              <div className="flex justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center"><Star className="w-4 h-4 text-yellow-500 mr-1" />5.0/5 Rating</div>
                <div className="flex items-center"><Shield className="w-4 h-4 text-green-600 mr-1" />15+ Years Experience</div>
                <div className="flex items-center"><Phone className="w-4 h-4 text-blue-600 mr-1" />7010650063</div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <div className="mt-8">
            <ServiceReviews 
              serviceName="Tooth Extraction" 
              reviews={reviews}
              averageRating={5.0}
              totalReviews={412}
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

