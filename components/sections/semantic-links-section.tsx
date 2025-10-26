import Link from 'next/link'
import { GlassCard } from '@/components/ui/glass-card'
import { ArrowRight } from 'lucide-react'

interface SemanticLinksSectionProps {
  pageType?: 'homepage' | 'service' | 'condition'
}

export function SemanticLinksSection({ pageType = 'homepage' }: SemanticLinksSectionProps) {
  if (pageType === 'homepage') {
    return (
      <section className="py-16 bg-gradient-to-br from-white via-teal-50/20 to-blue-50/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Comprehensive Dental Care in Vellore
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From preventive care to advanced treatments, we're your trusted dental health partner
            </p>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 leading-relaxed mb-6">
                At <Link href="/about-us" className="text-teal-600 hover:text-teal-700 font-semibold underline">Indira Dental Clinic</Link>, led by{' '}
                <Link href="/about-us/dr-rockson-samuel" className="text-teal-600 hover:text-teal-700 font-semibold underline">Dr. Rockson Samuel</Link>{' '}
                (BDS, PgDM, BDM), we provide world-class dental care to patients across{' '}
                <Link href="/in/tamil-nadu/vellore" className="text-blue-600 hover:text-blue-700 font-semibold underline">Vellore</Link>,{' '}
                <Link href="/in/tamil-nadu/vellore/gandhi" className="text-blue-600 hover:text-blue-700 font-semibold underline">Gandhi Nagar</Link>,{' '}
                <Link href="/in/tamil-nadu/vellore/katpadi" className="text-blue-600 hover:text-blue-700 font-semibold underline">Katpadi</Link>, and surrounding areas.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our clinic specializes in{' '}
                <Link href="/services/root-canal-treatment" className="text-teal-600 hover:text-teal-700 font-semibold underline">painless root canal treatment (RCT)</Link>,{' '}
                <Link href="/services/dental-implants" className="text-teal-600 hover:text-teal-700 font-semibold underline">advanced dental implants</Link>,{' '}
                <Link href="/services/orthodontics" className="text-teal-600 hover:text-teal-700 font-semibold underline">orthodontic braces</Link>, and{' '}
                <Link href="/services/cosmetic-dentistry" className="text-teal-600 hover:text-teal-700 font-semibold underline">cosmetic dentistry</Link>.
                Whether you need{' '}
                <Link href="/services/orthodontics/invisalign" className="text-teal-600 hover:text-teal-700 font-semibold underline">Invisalign clear aligners</Link>,{' '}
                <Link href="/services/cosmetic-dentistry/teeth-whitening" className="text-teal-600 hover:text-teal-700 font-semibold underline">professional teeth whitening</Link>, or{' '}
                <Link href="/services/emergency-dentistry" className="text-teal-600 hover:text-teal-700 font-semibold underline">emergency dental care</Link>,
                we deliver exceptional results with compassionate service.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand dental health concerns like{' '}
                <Link href="/conditions/tooth-decay" className="text-blue-600 hover:text-blue-700 font-semibold underline">tooth decay</Link>,{' '}
                <Link href="/conditions/gum-disease" className="text-blue-600 hover:text-blue-700 font-semibold underline">gum disease</Link>,{' '}
                <Link href="/conditions/tooth-sensitivity" className="text-blue-600 hover:text-blue-700 font-semibold underline">tooth sensitivity</Link>, and{' '}
                <Link href="/conditions/bad-breath" className="text-blue-600 hover:text-blue-700 font-semibold underline">bad breath</Link>.
                Our comprehensive approach addresses not just symptoms but root causes, ensuring long-lasting oral health.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Have questions about dental treatments?{' '}
                <Link href="/ask-the-dentist" className="text-teal-600 hover:text-teal-700 font-semibold underline">Ask our dentist</Link>{' '}
                for expert advice, explore our{' '}
                <Link href="/pricing" className="text-teal-600 hover:text-teal-700 font-semibold underline">transparent pricing</Link>, or{' '}
                <Link href="/testimonials" className="text-teal-600 hover:text-teal-700 font-semibold underline">read patient reviews</Link>.
                Ready to transform your smile?{' '}
                <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-semibold underline">Book your consultation today</Link>!
              </p>
            </div>

            {/* Quick Links Grid */}
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              <GlassCard className="p-4 hover:shadow-lg transition-shadow">
                <Link href="/services" className="block group">
                  <h3 className="font-semibold text-teal-700 mb-2 flex items-center justify-between">
                    All Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-xs text-gray-600">Comprehensive dental treatments</p>
                </Link>
              </GlassCard>
              
              <GlassCard className="p-4 hover:shadow-lg transition-shadow">
                <Link href="/conditions" className="block group">
                  <h3 className="font-semibold text-blue-700 mb-2 flex items-center justify-between">
                    Dental Conditions
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-xs text-gray-600">Learn about oral health issues</p>
                </Link>
              </GlassCard>
              
              <GlassCard className="p-4 hover:shadow-lg transition-shadow">
                <Link href="/dentist-near-me" className="block group">
                  <h3 className="font-semibold text-purple-700 mb-2 flex items-center justify-between">
                    Find Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-xs text-gray-600">Convenient Vellore locations</p>
                </Link>
              </GlassCard>
              
              <GlassCard className="p-4 hover:shadow-lg transition-shadow">
                <Link href="/international-patients" className="block group">
                  <h3 className="font-semibold text-green-700 mb-2 flex items-center justify-between">
                    Medical Tourism
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-xs text-gray-600">60-70% cost savings</p>
                </Link>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  return null
}
