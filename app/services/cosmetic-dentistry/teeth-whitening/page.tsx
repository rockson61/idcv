import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Sparkles, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teeth Whitening | Laser Whitening | Indira Dental Clinic Vellore',
  description: 'Professional teeth whitening in Vellore. In-office laser whitening, home whitening kits. Get 3-8 shades whiter by Dr. Rockson Samuel. Price: ₹8,000-₹18,000. Call: 7010650063',
  keywords: 'teeth whitening vellore, laser teeth whitening, professional whitening, bleaching, white teeth, Dr Rockson Samuel, smile whitening',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/cosmetic-dentistry/teeth-whitening' },
}

export default function TeethWhiteningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' }, { title: 'Teeth Whitening', href: '/services/cosmetic-dentistry/teeth-whitening' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800"><Sparkles className="w-4 h-4 inline mr-1" />Brighten Your Smile</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Teeth Whitening</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get 3-8 shades whiter teeth with professional whitening. Safe, effective, long-lasting results.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Whitening Options</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                  <div className="flex items-center gap-2 mb-3"><Zap className="w-5 h-5 text-yellow-600" /><h3 className="font-semibold text-gray-900">In-Office Laser Whitening</h3></div>
                  <p className="text-sm text-gray-600 mb-3">Professional whitening in one visit</p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />3-8 shades whiter in 1 hour</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Immediate results</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Safe for enamel</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹12,000 - ₹18,000</div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <div className="flex items-center gap-2 mb-3"><Sparkles className="w-5 h-5 text-orange-600" /><h3 className="font-semibold text-gray-900">Take-Home Whitening Kit</h3></div>
                  <p className="text-sm text-gray-600 mb-3">Custom trays for at-home whitening</p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Gradual whitening over 2 weeks</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Convenient home use</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Professional strength gel</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹8,000 - ₹12,000</div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <ModernCardContent className="p-8 text-center">
              <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Whiter Teeth Today</h2>
              <p className="text-gray-700 mb-6">Professional whitening is safe and effective. Results last 1-3 years with proper care. Free consultation with Dr. Rockson Samuel.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Whitening</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-yellow-600 text-yellow-700">
                  <Link href="https://wa.me/917010650063?text=I%20want%20teeth%20whitening" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
                </Button>
              </div>
            </ModernCardContent>
          </ModernCard>
        </div>
      </SectionContainer>
    </div>
  )
}
