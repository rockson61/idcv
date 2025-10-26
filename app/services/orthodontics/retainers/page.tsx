import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, RefreshCw, Lock } from 'lucide-react'

const reviews = generateServiceReviews('Orthodontic Retainers', 'orthodontics')

export const metadata: Metadata = {
  title: 'Orthodontic Retainers | Maintain Straight Teeth | Indira Dental Clinic Vellore',
  description: 'Custom orthodontic retainers in Vellore. Fixed & removable retainers to maintain straight teeth after braces by Dr. Rockson Samuel. Price: ₹3,000-₹8,000. Book: 7010650063',
  keywords: 'orthodontic retainers vellore, dental retainers, fixed retainers, removable retainers, after braces care, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/orthodontics/retainers' },
}

export default function RetainersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Orthodontics', href: '/services/orthodontics' }, { title: 'Retainers', href: '/services/orthodontics/retainers' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700"><Lock className="w-4 h-4 inline mr-1" />Maintain Your Results</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Orthodontic Retainers</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Keep your teeth straight after braces! Custom retainers prevent teeth from shifting back to original positions.</p>
          </div>

          <ModernCard className="mb-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-300">
            <ModernCardContent className="p-8">
              <div className="text-center mb-6">
                <Shield className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">⚠️ WARNING: Teeth WILL Shift Without Retainers!</h2>
                <p className="text-gray-700 text-lg">After braces are removed, teeth naturally want to move back. <strong>Wearing retainers is NOT optional</strong> - it's essential to maintain your beautiful new smile. Studies show 50-70% of patients who don't wear retainers experience significant relapse within 2 years.</p>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Types of Retainers</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-3">Removable Retainers</h3>
                  <p className="text-sm text-gray-600 mb-4">Clear plastic retainers (Essix) or wire retainers (Hawley)</p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Easy to clean</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Can remove for eating</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Hawley is adjustable</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Essix is nearly invisible</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹3,000 - ₹6,000</div>
                  <div className="text-sm"><strong>Wear:</strong> 22 hours/day initially, then nights only</div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Fixed Retainers (Bonded)</h3>
                  <p className="text-sm text-gray-600 mb-4">Thin wire bonded to back of teeth</p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />24/7 protection</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />No compliance needed</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Completely invisible</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Lasts 5-10 years</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹5,000 - ₹8,000</div>
                  <div className="text-sm"><strong>Wear:</strong> Permanent, bonded in place</div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Retainer Wear Schedule</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-white rounded-lg">
                    <div className="font-bold text-lg mb-1">First 3-6 Months</div>
                    <div className="text-sm text-gray-600">22 hours/day (remove only for eating/brushing)</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <div className="font-bold text-lg mb-1">Next 6-12 Months</div>
                    <div className="text-sm text-gray-600">Nights only (8-10 hours)</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <div className="font-bold text-lg mb-1">After 1 Year</div>
                    <div className="text-sm text-gray-600">3-4 nights per week (lifelong)</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">⚠️ What Happens If You Don't Wear Retainers?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Teeth shift back to original positions (50-70% chance)</li>
                  <li>• Bite becomes misaligned again</li>
                  <li>• Gaps reappear between teeth</li>
                  <li>• Crowding returns</li>
                  <li>• May need braces again (expensive!)</li>
                  <li>• Wasted time, money, and effort from original treatment</li>
                </ul>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Orthodontic Retainers" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={167}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
              <ModernCardContent className="p-8 text-center">
                <RefreshCw className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Your Custom Retainers</h2>
                <p className="text-gray-700 mb-6">Protect your orthodontic investment! Custom-made retainers ensure your teeth stay straight for life. Lost or broken retainer? We can make a replacement.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                  <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Order Retainer</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-600">
                    <Link href="https://wa.me/917010650063?text=I%20need%20orthodontic%20retainer" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
                  </Button>
                </div>
                <div className="flex justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center"><Star className="w-4 h-4 text-yellow-500 mr-1" />5.0/5 Rating</div>
                  <div className="flex items-center"><Shield className="w-4 h-4 text-green-600 mr-1" />1 Year Warranty</div>
                  <div className="flex items-center"><Phone className="w-4 h-4 text-blue-600 mr-1" />7010650063</div>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

