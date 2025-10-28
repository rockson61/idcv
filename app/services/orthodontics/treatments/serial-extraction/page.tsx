import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Stethoscope, CheckCircle, Phone, Calendar, MapPin, Clock, Star, 
  ArrowRight, Shield, Award, Users 
} from 'lucide-react'
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from '@/components/ui/modern-card'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { CTAWidget } from '@/components/widgets/cta-widget'

export const metadata: Metadata = {
  title: 'Serial Extraction | Orthodontics in Vellore | Indira Dental Clinic',
  description: 'Expert serial extraction services in orthodontics at Indira Dental Clinic, Vellore. Dr. Rockson Samuel provides advanced care with modern technology.',
  keywords: 'serial extraction, orthodontics, treatments, dental clinic vellore, dr rockson samuel',
  openGraph: {
    title: 'Serial Extraction | Orthodontics in Vellore',
    description: 'Expert serial extraction in orthodontics',
    images: ['/images/clinic-exterior.jpg'],
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Serial Extraction",
  "description": "Professional serial extraction at Indira Dental Clinic, Vellore",
  "provider": {
    "@type": "Dentist",
    "name": "Dr. Rockson Samuel",
    "jobTitle": "BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach",
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
      }
    }
  }
};

const faqs = [
  {
    question: "What is serial extraction?",
    answer: "Serial Extraction is a dental procedure that helps improve your oral health. Dr. Rockson Samuel at Indira Dental Clinic provides expert care using advanced techniques."
  },
  {
    question: "How is serial extraction treated in Vellore?",
    answer: "At Indira Dental Clinic, Dr. Rockson Samuel uses modern orthodontics techniques to address serial extraction. The treatment is customized based on your specific needs and condition."
  },
  {
    question: "What is the cost of serial extraction treatment?",
    answer: "Treatment costs vary based on the complexity of your case. At Indira Dental Clinic, we offer competitive pricing 40-60% lower than metro cities. Contact us for a personalized consultation and quote."
  },
  {
    question: "Is serial extraction treatment painful?",
    answer: "Modern orthodontics procedures are designed for patient comfort. We use advanced anesthesia and pain management techniques to ensure a comfortable experience."
  },
  {
    question: "Why choose Indira Dental Clinic for serial extraction?",
    answer: "Dr. Rockson Samuel brings 15+ years of expertise in orthodontics, using state-of-the-art equipment and proven techniques. We offer affordable pricing, personalized care, and excellent results."
  }
];

export default function SerialExtractionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumb
              items={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                { title: 'Orthodontics', href: '/services/orthodontics' },
                { title: 'Treatments', href: '/services/orthodontics/treatments' },
                { title: 'Serial Extraction', href: '#' }
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Stethoscope className="w-4 h-4" />
              Orthodontics Treatment
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Best Serial Extraction Doctors in India - Oral Surgeon Near Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert serial extraction care at Indira Dental Clinic, Vellore. 
              Dr. Rockson Samuel provides advanced orthodontics with modern technology and personalized treatment plans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-8">
              <ModernCard>
                <ModernCardHeader>
                  <ModernCardTitle>About Serial Extraction</ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent className="prose max-w-none">
                  <p>
                    At Indira Dental Clinic in Vellore, we specialize in orthodontics 
                    including comprehensive serial extraction care. Dr. Rockson Samuel 
                    (BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach) has over 15 years 
                    of experience providing expert treatments treatments.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">Key Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-4 not-prose">
                    <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Expert Care</h4>
                        <p className="text-sm text-gray-600">15+ years of specialized experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Advanced Technology</h4>
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

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Treatment Approach</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-600 font-semibold text-sm flex-shrink-0">1</span>
                      <div><strong>Consultation:</strong> Thorough examination and diagnosis</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-600 font-semibold text-sm flex-shrink-0">2</span>
                      <div><strong>Planning:</strong> Customized treatment plan</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-600 font-semibold text-sm flex-shrink-0">3</span>
                      <div><strong>Treatment:</strong> Expert care with advanced techniques</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-600 font-semibold text-sm flex-shrink-0">4</span>
                      <div><strong>Follow-up:</strong> Regular monitoring for optimal results</div>
                    </li>
                  </ol>
                </ModernCardContent>
              </ModernCard>

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

            <div className="space-y-6">
              <ModernCard className="bg-gradient-to-br from-teal-600 to-blue-600 text-white">
                <ModernCardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
                  <p className="mb-6 opacity-90">Get expert serial extraction care in Vellore</p>
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
                        <div className="text-sm opacity-75">Hours</div>
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
                    Book Now
                  </Link>
                </ModernCardContent>
              </ModernCard>

              <ModernCard>
                <ModernCardHeader>
                  <ModernCardTitle>Related Services</ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent>
                  <div className="space-y-2">
                    <Link
                      href="/services/orthodontics"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group"
                    >
                      <span className="text-gray-900 group-hover:text-teal-600">All Orthodontics</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600" />
                    </Link>
                    <Link
                      href="/services"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group"
                    >
                      <span className="text-gray-900 group-hover:text-teal-600">All Services</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600" />
                    </Link>
                  </div>
                </ModernCardContent>
              </ModernCard>

              <ModernCard className="bg-gradient-to-br from-blue-50 to-teal-50">
                <ModernCardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Star className="w-6 h-6 text-yellow-500" />
                      <div>
                        <div className="font-semibold text-gray-900">500+ Reviews</div>
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

          <CTAWidget 
            title="Ready for Serial Extraction?"
            description="Book your consultation with Dr. Rockson Samuel. Expert orthodontics, modern technology, affordable prices."
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
