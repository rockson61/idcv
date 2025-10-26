import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, EyeOff, Sparkles } from 'lucide-react'

const reviews = generateServiceReviews('Lingual Braces', 'orthodontics')

export const metadata: Metadata = {
  title: 'Lingual Braces | Invisible Braces Behind Teeth | Indira Dental Clinic Vellore',
  description: 'Lingual braces in Vellore - 100% invisible braces placed behind teeth by Dr. Rockson Samuel. Perfect for professionals, adults. Price: ₹1,20,000-₹2,50,000. Book: 7010650063',
  keywords: 'lingual braces vellore, invisible braces, braces behind teeth, hidden braces, incognito braces, adult braces, Dr Rockson Samuel',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/services/orthodontics/lingual-braces' },
}

export default function LingualBracesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Orthodontics', href: '/services/orthodontics' }, { title: 'Lingual Braces', href: '/services/orthodontics/lingual-braces' }]} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700"><EyeOff className="w-4 h-4 inline mr-1" />100% Invisible</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Lingual Braces (Hidden Braces)</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The ultimate invisible orthodontic solution! Braces placed on the inside (tongue side) of teeth - completely hidden from view. Perfect for professionals, models, and anyone wanting total discretion.</p>
          </div>

          <ModernCard className="mb-8">
            <ModernCardHeader><ModernCardTitle>Why Lingual Braces?</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-indigo-50 rounded-lg">
                  <h3 className="font-semibold text-indigo-800 mb-3">✅ Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />100% invisible from the front</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Same effectiveness as regular braces</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Custom-made for your teeth</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />No one knows you're wearing braces</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Perfect for professionals and models</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />Fixed (not removable) - works 24/7</li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-3">⚠️ Considerations</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• More expensive than regular braces</li>
                    <li>• Initial tongue irritation (1-2 weeks adaptation)</li>
                    <li>• Speech may be slightly affected initially</li>
                    <li>• More difficult to clean</li>
                    <li>• Longer appointment times</li>
                    <li>• Not all orthodontists offer this specialty</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Lingual Braces vs. Other Options</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-indigo-200">
                        <th className="text-left p-3">Feature</th>
                        <th className="text-center p-3">Lingual Braces</th>
                        <th className="text-center p-3">Invisalign</th>
                        <th className="text-center p-3">Ceramic Braces</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="p-3 font-semibold">Visibility</td>
                        <td className="p-3 text-center text-green-600 font-bold">100% Hidden</td>
                        <td className="p-3 text-center text-yellow-600">95% Invisible</td>
                        <td className="p-3 text-center text-orange-600">70% Invisible</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-semibold">Effectiveness</td>
                        <td className="p-3 text-center text-green-600">Excellent</td>
                        <td className="p-3 text-center text-yellow-600">Good-Excellent</td>
                        <td className="p-3 text-center text-green-600">Excellent</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-semibold">Removable?</td>
                        <td className="p-3 text-center">No (Fixed)</td>
                        <td className="p-3 text-center text-green-600">Yes</td>
                        <td className="p-3 text-center">No (Fixed)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-semibold">Cost</td>
                        <td className="p-3 text-center font-bold text-indigo-700">₹1,20,000-₹2,50,000</td>
                        <td className="p-3 text-center">₹1,50,000-₹3,50,000</td>
                        <td className="p-3 text-center">₹35,000-₹60,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Best For</td>
                        <td className="p-3 text-center">Professionals, Models</td>
                        <td className="p-3 text-center">Adults, Mild cases</td>
                        <td className="p-3 text-center">All ages</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">₹1,20,000 - ₹2,50,000</div><div className="text-sm text-gray-600">Complete treatment</div></div>
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">18-36 months</div><div className="text-sm text-gray-600">Average duration</div></div>
                  <div><div className="font-bold text-2xl text-purple-700 mb-1">100%</div><div className="text-sm text-gray-600">Invisible</div></div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard className="mb-8 bg-gradient-to-br from-indigo-50 to-purple-50">
            <ModernCardHeader><ModernCardTitle>Ideal Candidates for Lingual Braces</ModernCardTitle></ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Working professionals (doctors, lawyers, executives)',
                  'Public speakers and presenters',
                  'Models and actors',
                  'Musicians playing wind instruments',
                  'Adults who want complete discretion',
                  'Patients with specific aesthetic needs',
                  'Anyone who wants invisible treatment',
                  'Patients willing to invest in premium care'
                ].map((candidate, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-sm text-gray-800">{candidate}</span>
                  </div>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Reviews Section */}
          <ServiceReviews 
            serviceName="Lingual Braces" 
            reviews={reviews}
            averageRating={5.0}
            totalReviews={67}
          />

          <div className="mt-8">
            <ModernCard className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
              <ModernCardContent className="p-8 text-center">
                <Sparkles className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Get 100% Invisible Braces</h2>
                <p className="text-gray-700 mb-6">Transform your smile without anyone knowing you're wearing braces. Free consultation and treatment planning. Dr. Rockson Samuel - Advanced lingual orthodontics.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                  <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-indigo-600 text-indigo-600">
                    <Link href="https://wa.me/917010650063?text=I%20want%20lingual%20braces" target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
                  </Button>
                </div>
                <div className="flex justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center"><Star className="w-4 h-4 text-yellow-500 mr-1" />5.0/5 Rating</div>
                  <div className="flex items-center"><Shield className="w-4 h-4 text-green-600 mr-1" />Premium Quality</div>
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

