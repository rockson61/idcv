import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Layers } from 'lucide-react'

const reviews = generateServiceReviews('Post and Core', 'root-canal')

export const metadata: Metadata = {
  title: 'Post and Core | Foundation for Crown After RCT | Indira Dental Clinic Vellore',
  description: 'Post and core treatment in Vellore. Strengthen RCT-treated teeth before crown placement by Dr. Rockson Samuel. Price: ₹3,000-₹6,000. Book: 7010650063',
  keywords: 'post and core vellore, dental post, RCT post, crown foundation, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/root-canal-treatment/post-and-core' },
}

export default function PostAndCorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Root Canal Treatment', href: '/services/root-canal-treatment' }, { title: 'Post and Core', href: '/services/root-canal-treatment/post-and-core' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700"><Layers className="w-4 h-4 inline mr-1" />Foundation Build-Up</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Post and Core</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Strengthen root canal-treated teeth with post and core foundation before crown placement. Essential for teeth with extensive damage.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>What is Post and Core?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <p className="text-gray-700 mb-6">After root canal treatment, teeth often lack sufficient structure to support a crown. A post and core provides the necessary foundation by placing a metal post into the root canal and building up the tooth with core material.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">When is it Needed?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />After root canal treatment</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Tooth has lost significant structure</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Not enough tooth to hold crown</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Large cavity before RCT</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Broken or fractured tooth</li>
                  </ul>
                </div>

                <div className="p-6 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3">Benefits:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Provides strong foundation</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Supports dental crown</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Prevents tooth breakage</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Long-lasting solution</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />Saves natural tooth</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-orange-700 mb-1">₹3,000 - ₹6,000</div><div className="text-sm text-gray-600">Per tooth</div></div>
                  <div><div className="font-bold text-2xl text-orange-700 mb-1">1 Visit</div><div className="text-sm text-gray-600">Single appointment</div></div>
                  <div><div className="font-bold text-2xl text-orange-700 mb-1">30-60 min</div><div className="text-sm text-gray-600">Procedure time</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Post and Core" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={78}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <ModernCardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Strengthen Your RCT-Treated Tooth</h2>
                <p className="text-gray-700 mb-6">Post and core provides essential support before crown placement. Dr. Rockson Samuel ensures proper foundation for long-lasting results.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Appointment</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-orange-600 text-orange-600">
                    <Link href="https://wa.me/917010650063?text=I%20need%20post%20and%20core" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
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

