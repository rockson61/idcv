import { Metadata } from 'next'
import Link from 'next/link'
import { AlertCircle, CheckCircle, Phone, Calendar, ArrowRight } from 'lucide-react'
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from '@/components/ui/modern-card'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { CTAWidget } from '@/components/widgets/cta-widget'

export const metadata: Metadata = {
  title: "Gingivitis Causes, Symptoms & Treatment | Dr. Rockson Samuel | Vellore",
  description: 'Expert gingivitis treatment in Vellore by Dr. Rockson Samuel. Advanced diagnosis and treatment for gingivitis at Indira Dental Clinic.',
  keywords: 'gingivitis, gingivitis treatment, dental conditions, vellore dentist',
}

export default function GingivitisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Conditions', href: '/conditions' },
              { title: 'Gingivitis', href: '#' }
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <AlertCircle className="w-4 h-4" />
            Dental Condition
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Gingivitis Causes, Symptoms & Treatment
              </span>
            </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert diagnosis and treatment for gingivitis at Indira Dental Clinic by Dr. Rockson Samuel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <ModernCard>
              <ModernCardHeader>
                <ModernCardTitle>About Gingivitis</ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent className="prose max-w-none">
                <p>
                  Gingivitis is a common dental condition that requires professional treatment. 
                  At Indira Dental Clinic, Dr. Rockson Samuel (BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach) 
                  provides comprehensive diagnosis and treatment.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">Symptoms</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Common symptoms vary by condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Early detection is important</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Professional diagnosis recommended</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Treatment Options</h3>
                <p>
                  Dr. Rockson Samuel offers multiple treatment approaches tailored to your specific condition, 
                  using modern technology and proven techniques.
                </p>
              </ModernCardContent>
            </ModernCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ModernCard className="bg-gradient-to-br from-teal-600 to-blue-600 text-white">
              <ModernCardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Get Treatment</h3>
                <p className="mb-6 opacity-90">Book consultation for gingivitis</p>
                <Link
                  href="/contact"
                  className="block w-full bg-white text-teal-600 text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Book Appointment
                </Link>
              </ModernCardContent>
            </ModernCard>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <CTAWidget 
            title="Need Treatment for Gingivitis?"
            description="Dr. Rockson Samuel provides expert care for gingivitis in Vellore"
            primaryAction={{
              text: "Book Consultation",
              href: "/contact"
            }}
          />
        </div>
      </div>
    </div>
  )
}
