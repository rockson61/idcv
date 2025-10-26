import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Clock, Star, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Best Dentist in Gandhi Nagar, Vellore | Indira Dental Clinic | Dr. Rockson Samuel',
  description: 'Top-rated dentist in Gandhi Nagar, Vellore. Indira Dental Clinic by Dr. Rockson Samuel. Root canal, braces, implants, cosmetic dentistry. Walking distance. Call: 7010650063',
  keywords: 'dentist Gandhi Nagar Vellore, dental clinic Gandhi Nagar, Dr Rockson Samuel, dentist near me Gandhi Nagar, best dentist Vellore',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/in/tamil-nadu/vellore/gandhi' },
}

export default function GandhiNagarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Tamil Nadu', href: '/in/tamil-nadu' }, { title: 'Vellore', href: '/in/tamil-nadu/vellore' }, { title: 'Gandhi Nagar', href: '/in/tamil-nadu/vellore/gandhi' }]} />
      </SectionContainer>

      <SectionContainer className="py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700"><MapPin className="w-4 h-4 inline mr-1" />Gandhi Nagar, Vellore</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Best Dentist in Gandhi Nagar, Vellore</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Indira Dental Clinic - Your trusted neighborhood dental care provider in Gandhi Nagar. Dr. Rockson Samuel (BDS, PgDM, BDM).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <GlassCard className="text-center p-6">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">5.0★</div>
              <div className="text-sm text-gray-600">126 Google Reviews</div>
            </GlassCard>
            <GlassCard className="text-center p-6">
              <MapPin className="w-12 h-12 text-teal-600 mx-auto mb-3" />
              <div className="text-lg font-bold text-gray-900 mb-1">Gandhi Nagar</div>
              <div className="text-sm text-gray-600">Katpadi Main Road</div>
            </GlassCard>
            <GlassCard className="text-center p-6">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-lg font-bold text-gray-900 mb-1">Mon-Sat</div>
              <div className="text-sm text-gray-600">10AM - 8PM</div>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">About Indira Dental Clinic - Gandhi Nagar</h2>
            <p className="text-gray-700 mb-4">Located in the heart of Gandhi Nagar, Vellore, Indira Dental Clinic is easily accessible to residents and commuters. We're situated on Katpadi Main Road, near Shell Petrol Pump, making it convenient for patients from Gandhi Nagar, Suthanthira Ponvizha Nagar, and surrounding areas.</p>
            
            <h3 className="text-xl font-bold mb-4 mt-6">Our Services in Gandhi Nagar:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Root Canal Treatment (RCT)',
                'Dental Implants',
                'Invisalign Clear Aligners',
                'Orthodontic Braces',
                'Teeth Whitening',
                'Cosmetic Dentistry',
                'Pediatric Dentistry',
                'Emergency Dental Care',
                'Dental Crowns & Bridges',
                'Gum Treatment',
                'Wisdom Tooth Extraction',
                'Smile Makeover'
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4 mt-6">Location & Directions:</h3>
            <p className="text-gray-700 mb-4"><strong>Address:</strong> 3rd Floor, 54, Katpadi Main Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore - 632006</p>
            <p className="text-gray-700 mb-4"><strong>Landmarks:</strong> Near Shell Petrol Pump, Above SBI Bank, Katpadi Main Road</p>
            <p className="text-gray-700 mb-4"><strong>Parking:</strong> Street parking available</p>

            <h3 className="text-xl font-bold mb-4 mt-6">Why Choose Us in Gandhi Nagar?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span className="text-gray-700"><strong>Walking Distance:</strong> Easily accessible from Gandhi Nagar residential areas</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span className="text-gray-700"><strong>Experienced Dentist:</strong> Dr. Rockson Samuel - 15+ years experience</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span className="text-gray-700"><strong>Modern Equipment:</strong> Latest dental technology and sterilization</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span className="text-gray-700"><strong>Affordable Pricing:</strong> Transparent costs, no hidden charges</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span className="text-gray-700"><strong>Emergency Care:</strong> Same-day appointments available</span></li>
            </ul>
          </GlassCard>

          <div className="text-center bg-gradient-to-r from-teal-600 to-blue-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Book Your Appointment Today</h2>
            <p className="text-xl mb-6">Visit us at Gandhi Nagar, Vellore's trusted dental clinic</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Call: 7010650063
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
                <Link href="/contact">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

