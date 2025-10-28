import { Metadata } from 'next'
import Link from 'next/link'
import { 
  CheckCircle, Phone, Calendar, MapPin, Clock, Star, 
  ArrowRight, Shield, Award, Users, Stethoscope 
} from 'lucide-react'
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from '@/components/ui/modern-card'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { CTAWidget } from '@/components/widgets/cta-widget'

export const metadata: Metadata = {
  title: 'Sleep Apnea Treatment in Vellore | Indira Dental Clinic',
  description: 'Expert sleep apnea treatment services at Indira Dental Clinic, Vellore. Dr. Rockson Samuel provides advanced sleep apnea treatment with modern technology and affordable pricing.',
  keywords: 'sleep apnea treatment, sleep apnea treatment vellore, specialized services, dental clinic vellore, dr rockson samuel',
  openGraph: {
    title: 'Sleep Apnea Treatment in Vellore | Indira Dental Clinic',
    description: 'Expert sleep apnea treatment services in Vellore',
    images: ['/images/clinic-exterior.jpg'],
  },
}

// Schema Markup
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Sleep Apnea Treatment",
  "description": "Professional sleep apnea treatment treatment at Indira Dental Clinic, Vellore",
  "provider": {
    "@type": "Dentist",
    "name": "Dr. Rockson Samuel",
    "jobTitle": "General Dentist & Community Leader",
    "worksFor": {
      "@type": "Dentist",
      "name": "Indira Dental Clinic & Implant Center",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gandhi Nagar",
        "addressLocality": "Vellore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "632001",
        "addressCountry": "IN"
      },
      "telephone": "+91-XXXXXXXXXX",
      "priceRange": "₹₹"
    }
  },
  "procedureType": "Dental",
  "bodyLocation": "Mouth"
};

const faqs = [
  {
    question: "What is sleep apnea treatment?",
    answer: "Sleep Apnea Treatment is a dental procedure designed to improve your oral health. At Indira Dental Clinic, Dr. Rockson Samuel uses advanced techniques to ensure the best results."
  },
  {
    question: "How much does sleep apnea treatment cost in Vellore?",
    answer: "The cost of sleep apnea treatment varies based on individual needs. At Indira Dental Clinic, we offer competitive pricing 40-60% lower than metro cities. Contact us for a personalized quote."
  },
  {
    question: "Is sleep apnea treatment painful?",
    answer: "Modern sleep apnea treatment procedures are designed to be comfortable. We use advanced anesthesia techniques and pain management protocols to ensure a pain-free experience."
  },
  {
    question: "How long does sleep apnea treatment take?",
    answer: "The duration depends on the complexity of your case. Dr. Rockson Samuel will provide a detailed timeline during your consultation."
  },
  {
    question: "Why choose Indira Dental Clinic for sleep apnea treatment?",
    answer: "Dr. Rockson Samuel (BDS, PgDM, BDM) brings expertise in specialized services with 15+ years of experience, modern equipment, and affordable pricing in Vellore."
  }
];

export default function SleepApneaTreatmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumb
              items={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                { title: 'Specialized Services', href: '/services/specialized-services' },
                { title: 'Sleep Apnea Treatment' }
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Stethoscope className="w-4 h-4" />
              Specialized Services
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-[family-name:var(--font-exo-2)]">
                Best Sleep Apnea Treatment Doctors in India - Sleep Dentist Near Me
              </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert sleep apnea treatment services by Dr. Rockson Samuel at Indira Dental Clinic. 
              Modern techniques, affordable pricing, and exceptional care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Overview */}
              <ModernCard>
                <ModernCardHeader>
                  <ModernCardTitle>About Sleep Apnea Treatment</ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent className="prose max-w-none">
                  <p>
                    At Indira Dental Clinic in Vellore, we provide comprehensive sleep apnea treatment services 
                    using the latest technology and techniques. Dr. Rockson Samuel (BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach) 
                    has over 15 years of experience in specialized services.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">Why Choose Us for Sleep Apnea Treatment?</h3>
                  <div className="grid md:grid-cols-2 gap-4 not-prose">
                    <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Expert Care</h4>
                        <p className="text-sm text-gray-600">Dr. Rockson Samuel's 15+ years experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Modern Technology</h4>
                        <p className="text-sm text-gray-600">Latest equipment and techniques</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                      <Award className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Affordable Pricing</h4>
                        <p className="text-sm text-gray-600">40-60% lower than metro cities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                      <Users className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Patient-Centered</h4>
                        <p className="text-sm text-gray-600">Personalized treatment plans</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Treatment Process</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-600 font-semibold text-sm flex-shrink-0">1</span>
                      <div>
                        <strong>Initial Consultation:</strong> Comprehensive examination and diagnosis
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-600 font-semibold text-sm flex-shrink-0">2</span>
                      <div>
                        <strong>Treatment Planning:</strong> Customized plan based on your needs
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-600 font-semibold text-sm flex-shrink-0">3</span>
                      <div>
                        <strong>Procedure:</strong> Expert care using advanced techniques
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-600 font-semibold text-sm flex-shrink-0">4</span>
                      <div>
                        <strong>Follow-up:</strong> Regular monitoring for optimal results
                      </div>
                    </li>
                  </ol>
                </ModernCardContent>
              </ModernCard>

              {/* FAQs */}
              <ModernCard>
                <ModernCardHeader>
                  <ModernCardTitle>Frequently Asked Questions</ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </ModernCardContent>
              </ModernCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <ModernCard className="bg-gradient-to-br from-teal-600 to-blue-600 text-white">
                <ModernCardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Book Your Appointment</h3>
                  <p className="mb-6 opacity-90">
                    Get expert sleep apnea treatment treatment in Vellore
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <div>
                        <div className="text-sm opacity-75">Call Us</div>
                        <div className="font-semibold">+91-XXXXXXXXXX</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" />
                      <div>
                        <div className="text-sm opacity-75">Working Hours</div>
                        <div className="font-semibold">Mon-Sat: 9 AM - 8 PM</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <div>
                        <div className="text-sm opacity-75">Location</div>
                        <div className="font-semibold">Gandhi Nagar, Vellore</div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full bg-white text-teal-600 text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Book Appointment
                  </Link>
                </ModernCardContent>
              </ModernCard>

              {/* Related Services */}
              <ModernCard>
                <ModernCardHeader>
                  <ModernCardTitle>Related Services</ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent>
                  <div className="space-y-2">
                    <Link
                      href="/services/specialized-services"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group"
                    >
                      <span className="text-gray-900 group-hover:text-teal-600">All Specialized Services Services</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600" />
                    </Link>
                    <Link
                      href="/services"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group"
                    >
                      <span className="text-gray-900 group-hover:text-teal-600">All Services</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600" />
                    </Link>
                    <Link
                      href="/pricing"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group"
                    >
                      <span className="text-gray-900 group-hover:text-teal-600">View Pricing</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600" />
                    </Link>
                  </div>
                </ModernCardContent>
              </ModernCard>

              {/* Trust Indicators */}
              <ModernCard className="bg-gradient-to-br from-blue-50 to-teal-50">
                <ModernCardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Star className="w-6 h-6 text-yellow-500" />
                      <div>
                        <div className="font-semibold text-gray-900">500+ Google Reviews</div>
                        <div className="text-sm text-gray-600">4.9/5 Rating</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-teal-600" />
                      <div>
                        <div className="font-semibold text-gray-900">10,000+ Patients</div>
                        <div className="text-sm text-gray-600">Treated Successfully</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">15+ Years</div>
                        <div className="text-sm text-gray-600">Experience</div>
                      </div>
                    </div>
                  </div>
                </ModernCardContent>
              </ModernCard>
            </div>
          </div>

          {/* CTA */}
          <CTAWidget 
            title="Ready for Sleep Apnea Treatment?"
            description="Book your consultation with Dr. Rockson Samuel today. Expert care, modern technology, affordable prices."
            primaryAction={{
              text: "Book Appointment",
              href: "/contact"
            }}
            secondaryAction={{
              text: "Call Now",
              href: "tel:+91XXXXXXXXXX"
            }}
          />
        </div>
      </div>
    </>
  )
}
