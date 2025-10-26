import { Metadata } from 'next'
import Link from 'next/link'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Shield, Lock, Eye, UserCheck, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Indira Dental Clinic Vellore',
  description: 'Privacy policy for Indira Dental Clinic. How we collect, use, and protect your personal and medical information.',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 py-12">
      <SectionContainer>
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Privacy Policy', href: '/privacy-policy' }]} />
        
        <div className="max-w-4xl mx-auto mt-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last Updated: December 2024</p>
          </div>

          <GlassCard className="p-8 mb-8">
            <p className="text-gray-700 mb-6">
              At Indira Dental Clinic, we are committed to protecting your privacy and ensuring the security of your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <div className="space-y-8">
              {/* Information We Collect */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-teal-600" />
                  <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
                </div>
                <div className="ml-9 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Personal Information:</h3>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Name, contact information (phone, email, address)</li>
                      <li>Date of birth and age</li>
                      <li>Medical and dental history</li>
                      <li>Insurance information</li>
                      <li>Payment information</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Automatically Collected Information:</h3>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>IP address and browser information</li>
                      <li>Device information</li>
                      <li>Usage data and analytics</li>
                      <li>Cookies and tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-teal-600" />
                  <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
                </div>
                <div className="ml-9">
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>To provide dental care and treatment services</li>
                    <li>To schedule and manage appointments</li>
                    <li>To process payments and billing</li>
                    <li>To communicate with you about your treatment</li>
                    <li>To send appointment reminders and follow-ups</li>
                    <li>To improve our services and website</li>
                    <li>To comply with legal and regulatory requirements</li>
                    <li>To send marketing communications (with your consent)</li>
                  </ul>
                </div>
              </section>

              {/* Information Sharing */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-teal-600" />
                  <h2 className="text-2xl font-bold text-gray-900">3. Information Sharing and Disclosure</h2>
                </div>
                <div className="ml-9 space-y-3 text-gray-700">
                  <p>We may share your information with:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Healthcare Providers:</strong> Specialists, labs, and other medical professionals involved in your care</li>
                    <li><strong>Insurance Companies:</strong> For claims processing and verification</li>
                    <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                    <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations (with strict confidentiality agreements)</li>
                  </ul>
                  <p className="mt-3">We do NOT sell or rent your personal information to third parties.</p>
                </div>
              </section>

              {/* Data Security */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-teal-600" />
                  <h2 className="text-2xl font-bold text-gray-900">4. Data Security</h2>
                </div>
                <div className="ml-9 text-gray-700 space-y-3">
                  <p>We implement appropriate technical and organizational security measures to protect your information:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Secure servers and encrypted data transmission</li>
                    <li>Restricted access to personal information</li>
                    <li>Regular security audits and updates</li>
                    <li>Staff training on data protection</li>
                    <li>Physical security of medical records</li>
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                <div className="ml-9 text-gray-700 space-y-2">
                  <p>You have the right to:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Access your personal and medical information</li>
                    <li>Request corrections to your information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent for data processing</li>
                    <li>File a complaint with relevant authorities</li>
                  </ul>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                <div className="ml-9 text-gray-700">
                  <p className="mb-3">We use cookies and similar tracking technologies to:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Remember your preferences</li>
                    <li>Analyze website traffic</li>
                    <li>Improve user experience</li>
                    <li>Provide personalized content</li>
                  </ul>
                  <p className="mt-3">You can control cookies through your browser settings.</p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
                <div className="ml-9 text-gray-700">
                  <p>For patients under 18, we require parental/guardian consent before collecting personal information. Parents have the right to review and request deletion of their child's information.</p>
                </div>
              </section>

              {/* Changes to Policy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
                <div className="ml-9 text-gray-700">
                  <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated "Last Updated" date.</p>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-teal-50 p-6 rounded-lg border-2 border-teal-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                <p className="text-gray-700 mb-4">If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Indira Dental Clinic</strong></p>
                  <p>3rd Floor, 54, Katpadi Main Road, Gandhi Nagar, Vellore - 632006</p>
                  <p><strong>Phone:</strong> <a href="tel:7010650063" className="text-teal-600 hover:underline">7010650063</a></p>
                  <p><strong>Email:</strong> <a href="mailto:rockzen61@gmail.com" className="text-teal-600 hover:underline">rockzen61@gmail.com</a></p>
                </div>
              </section>
            </div>
          </GlassCard>

          <div className="text-center mt-8">
            <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
