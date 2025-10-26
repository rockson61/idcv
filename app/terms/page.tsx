import { Metadata } from 'next'
import Link from 'next/link'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { FileText, AlertCircle, CheckCircle, XCircle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Indira Dental Clinic Vellore',
  description: 'Terms and conditions for services at Indira Dental Clinic. Patient rights, responsibilities, and clinic policies.',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/terms' },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 py-12">
      <SectionContainer>
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Terms & Conditions', href: '/terms' }]} />
        
        <div className="max-w-4xl mx-auto mt-8">
          <div className="text-center mb-12">
            <Scale className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">Last Updated: December 2024</p>
          </div>

          <GlassCard className="p-8 mb-8">
            <p className="text-gray-700 mb-6">
              By using the services of Indira Dental Clinic or accessing our website, you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>

            <div className="space-y-8">
              {/* Acceptance */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <div className="ml-9 text-gray-700 space-y-2">
                  <p>By booking an appointment, receiving treatment, or using our website, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</p>
                </div>
              </section>

              {/* Services */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">2. Services Provided</h2>
                </div>
                <div className="ml-9 text-gray-700 space-y-3">
                  <p>Indira Dental Clinic provides professional dental care services including but not limited to:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>General dentistry and preventive care</li>
                    <li>Cosmetic dentistry procedures</li>
                    <li>Orthodontic treatments</li>
                    <li>Oral surgery and implants</li>
                    <li>Pediatric dentistry</li>
                    <li>Emergency dental care</li>
                  </ul>
                  <p className="mt-3">All treatments are performed by licensed dental professionals.</p>
                </div>
              </section>

              {/* Appointments */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Appointments and Cancellations</h2>
                <div className="ml-9 text-gray-700 space-y-3">
                  <div>
                    <h3 className="font-semibold mb-2">Booking:</h3>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Appointments can be booked via phone, WhatsApp, or our website</li>
                      <li>Confirmation will be provided via SMS/WhatsApp</li>
                      <li>Please arrive 10 minutes before your scheduled time</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cancellations:</h3>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Please provide at least 24 hours notice for cancellations</li>
                      <li>Late cancellations or no-shows may incur a fee</li>
                      <li>Emergency situations will be considered on a case-by-case basis</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Payments */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payments and Pricing</h2>
                <div className="ml-9 text-gray-700 space-y-3">
                  <ul className="list-disc ml-6 space-y-2">
                    <li>All prices are quoted in Indian Rupees (INR)</li>
                    <li>Payment is due at the time of service unless prior arrangements are made</li>
                    <li>We accept cash, UPI, credit/debit cards, and bank transfers</li>
                    <li>Treatment estimates are provided before procedures begin</li>
                    <li>Prices may vary based on individual treatment needs</li>
                    <li>Insurance claims assistance available (patient responsibility to verify coverage)</li>
                  </ul>
                </div>
              </section>

              {/* Patient Responsibilities */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">5. Patient Responsibilities</h2>
                </div>
                <div className="ml-9 text-gray-700">
                  <p className="mb-3">Patients are responsible for:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Providing accurate medical and dental history</li>
                    <li>Disclosing all medications and allergies</li>
                    <li>Following pre and post-treatment instructions</li>
                    <li>Attending scheduled follow-up appointments</li>
                    <li>Maintaining good oral hygiene as advised</li>
                    <li>Informing us of any changes in health status</li>
                    <li>Timely payment for services rendered</li>
                  </ul>
                </div>
              </section>

              {/* Treatment Outcomes */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">6. Treatment Outcomes and Limitations</h2>
                </div>
                <div className="ml-9 text-gray-700 space-y-3">
                  <p>While we strive for the best possible results:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Individual results may vary based on patient-specific factors</li>
                    <li>No guarantee of specific outcomes can be made</li>
                    <li>All procedures carry inherent risks which will be explained</li>
                    <li>Success depends on patient compliance with post-treatment care</li>
                    <li>Some treatments may require multiple visits or adjustments</li>
                  </ul>
                </div>
              </section>

              {/* Informed Consent */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Informed Consent</h2>
                <div className="ml-9 text-gray-700">
                  <p>Before any procedure, patients will:</p>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>Receive full explanation of the proposed treatment</li>
                    <li>Be informed of risks, benefits, and alternatives</li>
                    <li>Have opportunity to ask questions</li>
                    <li>Provide written consent for treatment</li>
                    <li>For minors: parent/guardian consent required</li>
                  </ul>
                </div>
              </section>

              {/* Refunds */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">8. Refund and Cancellation Policy</h2>
                </div>
                <div className="ml-9 text-gray-700 space-y-2">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Refunds for cancelled treatments before commencement: Full refund</li>
                    <li>Partial treatment completed: Pro-rated refund may apply</li>
                    <li>Completed treatments: Generally non-refundable</li>
                    <li>Warranty/guarantee terms specific to each treatment type</li>
                    <li>Disputes resolved through mutual discussion</li>
                  </ul>
                </div>
              </section>

              {/* Website Use */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Website Use and Content</h2>
                <div className="ml-9 text-gray-700 space-y-2">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Website content is for informational purposes only</li>
                    <li>Does not constitute medical advice</li>
                    <li>All content is property of Indira Dental Clinic</li>
                    <li>Unauthorized use or reproduction prohibited</li>
                    <li>We reserve the right to modify website content without notice</li>
                  </ul>
                </div>
              </section>

              {/* Liability */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                <div className="ml-9 text-gray-700">
                  <p>Indira Dental Clinic shall not be liable for:</p>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>Indirect or consequential damages</li>
                    <li>Complications arising from patient non-compliance</li>
                    <li>Pre-existing conditions not disclosed by patient</li>
                    <li>Website technical issues or downtime</li>
                    <li>Third-party service failures (labs, specialists, etc.)</li>
                  </ul>
                </div>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privacy and Confidentiality</h2>
                <div className="ml-9 text-gray-700">
                  <p>Patient information is protected under our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>. We maintain strict confidentiality in accordance with medical ethics and applicable laws.</p>
                </div>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <div className="ml-9 text-gray-700">
                  <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.</p>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law and Jurisdiction</h2>
                <div className="ml-9 text-gray-700">
                  <p>These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Vellore, Tamil Nadu.</p>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                <p className="text-gray-700 mb-4">For questions about these Terms and Conditions:</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Indira Dental Clinic</strong></p>
                  <p>Dr. Rockson Samuel (BDS, PgDM, BDM)</p>
                  <p>3rd Floor, 54, Katpadi Main Road, Gandhi Nagar, Vellore - 632006</p>
                  <p><strong>Phone:</strong> <a href="tel:7010650063" className="text-blue-600 hover:underline">7010650063</a></p>
                  <p><strong>Email:</strong> <a href="mailto:rockzen61@gmail.com" className="text-blue-600 hover:underline">rockzen61@gmail.com</a></p>
                </div>
              </section>
            </div>
          </GlassCard>

          <div className="text-center mt-8 space-x-6">
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium">
              Privacy Policy →
            </Link>
            <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

