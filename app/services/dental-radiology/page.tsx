import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { 
  Calendar, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle, 
  Phone,
  MessageCircle,
  ArrowRight,
  Scan,
  Activity
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dental Radiology & Digital X-Rays | Indira Dental Clinic Vellore',
  description: 'Advanced dental imaging services in Vellore. Digital X-rays, OPG, CBCT scans by Dr. Rockson Samuel. Precise diagnosis with minimal radiation. Book appointment: 7010650063',
  keywords: 'dental radiology vellore, digital x-rays, OPG scan, CBCT scan, dental imaging, 3D dental scan, panoramic x-ray, Dr Rockson Samuel',
  openGraph: {
    title: 'Dental Radiology & Digital Imaging | Indira Dental Clinic',
    description: 'Advanced dental imaging with digital X-rays, OPG, and CBCT scans for precise diagnosis.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/dental-radiology',
  },
}

export default function DentalRadiologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      <SectionContainer className="py-8">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Dental Radiology', href: '/services/dental-radiology' },
          ]}
        />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Advanced Diagnostic Imaging
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dental Radiology & Digital Imaging
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              State-of-the-art digital imaging technology for precise diagnosis and treatment planning. 80% less radiation than traditional X-rays.
            </p>
          </div>

          {/* Imaging Services */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Scan className="w-6 h-6 text-blue-600" />
                Our Imaging Services
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Digital Intraoral X-Rays</h3>
                  <p className="text-gray-600 text-sm mb-4">Detailed images of individual teeth and surrounding structures</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Instant results</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />80% less radiation</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />High resolution images</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹300 - ₹500</div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">OPG (Panoramic X-Ray)</h3>
                  <p className="text-gray-600 text-sm mb-4">Full mouth view showing all teeth, jaws, and sinuses</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Complete oral overview</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Implant planning</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Wisdom teeth assessment</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹800 - ₹1,200</div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">CBCT (3D Imaging)</h3>
                  <p className="text-gray-600 text-sm mb-4">Three-dimensional scan for complex surgical planning</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />3D visualization</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Implant planning</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />TMJ analysis</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹3,500 - ₹5,000</div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Bitewing X-Rays</h3>
                  <p className="text-gray-600 text-sm mb-4">Detect cavities between teeth and bone levels</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Cavity detection</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Bone level assessment</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Periodontal health</li>
                  </ul>
                  <div className="text-sm"><strong>Price:</strong> ₹400 - ₹600</div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Benefits */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                Benefits of Digital Dental Imaging
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">80% Less Radiation</h3>
                  <p className="text-sm text-gray-600">Digital sensors require significantly less radiation exposure than traditional film</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                  <Clock className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
                  <p className="text-sm text-gray-600">Images appear immediately on screen, no waiting for film development</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                  <Star className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Enhanced Clarity</h3>
                  <p className="text-sm text-gray-600">Digital enhancement allows better visualization of dental structures</p>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* CTA */}
          <ModernCard className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <ModernCardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Need Dental Imaging or Diagnosis?
              </h2>
              <p className="text-gray-700 mb-6">
                Get accurate diagnosis with our advanced digital imaging technology. Dr. Rockson Samuel provides expert interpretation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Imaging Appointment
                  </Link>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600">
                  <Link href="https://wa.me/917010650063?text=Hi%20Dr.%20Rockson%20Samuel,%20I%20need%20dental%20X-rays%20and%20imaging." target="_blank">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Now
                  </Link>
                </Button>
              </div>

              <div className="flex justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  5.0/5 Rating
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-600 mr-1" />
                  Latest Technology
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-blue-600 mr-1" />
                  7010650063
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

        </div>
      </SectionContainer>
    </div>
  )
}

