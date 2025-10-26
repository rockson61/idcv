import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { CheckCircle, Clock, Shield, Star, Users, Award, ArrowRight, Phone, Calendar, Zap } from 'lucide-react'
import { RelevantQAWidget } from '@/components/widgets/relevant-qa-widget'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import { CTAWidget } from '@/components/widgets/cta-widget'

export const metadata: Metadata = {
  title: 'Single Sitting RCT in Vellore | Pain-Free Root Canal Treatment | Dr. Rockson Samuel',
  description: 'Get single sitting RCT in Vellore with advanced techniques. Pain-free root canal treatment by Dr. Rockson Samuel. Save 50% on costs with same-day completion.',
  keywords: 'single sitting RCT Vellore, root canal treatment Vellore, pain-free RCT Vellore, same day root canal Vellore, best dentist Vellore, Dr. Rockson Samuel',
  openGraph: {
    title: 'Single Sitting RCT in Vellore | Pain-Free Root Canal Treatment',
    description: 'Get single sitting RCT in Vellore with advanced techniques. Pain-free root canal treatment by Dr. Rockson Samuel.',
    type: 'website',
    url: 'https://www.dentalclinicinvellore.in/services/root-canal-treatment/single-sitting-rct',
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/root-canal-treatment/single-sitting-rct',
  },
}

export default function SingleSittingRCTPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8 pb-4">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Root Canal Treatment', href: '/services/root-canal-treatment' },
            { title: 'Single Sitting RCT', href: '/services/root-canal-treatment/single-sitting-rct' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-teal-100 text-teal-800 border-teal-200">
                <Zap className="w-4 h-4 mr-2" />
                Same Day Treatment
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Single Sitting RCT in Vellore
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Complete your root canal treatment in just one visit! Get pain-free, same-day RCT in Vellore with advanced techniques by Dr. Rockson Samuel at 50% lower cost.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-teal-600" />
                <span>1-2 hours procedure</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2 text-teal-600" />
                <span>Pain-free treatment</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="w-4 h-4 mr-2 text-teal-600" />
                <span>15+ years experience</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Emergency Appointment
                </Button>
              </Link>
              <Link href="/ask-the-dentist/submit">
                <Button variant="outline" size="lg" className="border-teal-300 text-teal-700 hover:bg-teal-50 px-8 py-3">
                  Ask Dr. Samuel
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Treatment Cost</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-2">₹3,000 - ₹8,000</div>
                  <p className="text-gray-600">Per single sitting RCT</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Cleaning & Shaping</span>
                    <span className="font-semibold">₹1,500 - ₹3,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Filling & Sealing</span>
                    <span className="font-semibold">₹1,000 - ₹2,500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Crown (Optional)</span>
                    <span className="font-semibold">₹500 - ₹2,500</span>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Save 50% compared to other cities</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionContainer>

      {/* What is Single Sitting RCT */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Single Sitting RCT?</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Single sitting RCT (Root Canal Treatment) is an advanced dental procedure that completes the entire root canal treatment in just one visit, eliminating the need for multiple appointments and temporary fillings.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Same Day Completion</h3>
                  <p className="text-gray-600">Complete treatment in 1-2 hours instead of multiple visits.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Advanced Technology</h3>
                  <p className="text-gray-600">Uses rotary instruments and modern techniques for precision.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Pain-Free Experience</h3>
                  <p className="text-gray-600">Minimal discomfort with advanced anesthesia techniques.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/root-canal-procedure.png"
              alt="Single sitting RCT procedure"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Procedure Steps */}
      <SectionContainer className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Single Sitting RCT Procedure</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures complete root canal treatment in just one visit with maximum comfort and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Diagnosis & Anesthesia</h3>
            <p className="text-gray-600">X-ray examination and local anesthesia for complete comfort during treatment.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Access & Cleaning</h3>
            <p className="text-gray-600">Create access to root canal and remove infected pulp using rotary instruments.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Shaping & Disinfection</h3>
            <p className="text-gray-600">Shape the canal and disinfect using advanced irrigation techniques.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Filling & Sealing</h3>
            <p className="text-gray-600">Fill the canal with biocompatible material and seal with permanent filling.</p>
          </ModernCard>
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Single Sitting RCT</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Time Efficient</h3>
                  <p className="text-gray-600">Complete treatment in one visit instead of 3-4 separate appointments, saving your valuable time.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reduced Risk</h3>
                  <p className="text-gray-600">Eliminates risk of contamination between visits and reduces chances of reinfection.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenience</h3>
                  <p className="text-gray-600">Perfect for busy professionals and patients traveling from other cities for treatment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Rate</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
              <p className="text-gray-600">Success rate for single sitting RCT with proper technique and care.</p>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recovery Time</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">24-48 Hours</div>
              <p className="text-gray-600">Minimal recovery time with most patients returning to normal activities the next day.</p>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pain Level</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">Minimal</div>
              <p className="text-gray-600">Advanced anesthesia ensures comfortable treatment with minimal post-operative discomfort.</p>
            </ModernCard>
          </div>
        </div>
      </SectionContainer>

      {/* When is Single Sitting RCT Suitable */}
      <SectionContainer className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">When is Single Sitting RCT Suitable?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Single sitting RCT is ideal for specific cases where the tooth and surrounding tissues are in good condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ModernCard className="p-6 border-green-200 bg-green-50">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-green-800">Suitable Cases</h3>
            </div>
            <ul className="space-y-2 text-green-700">
              <li>• Single-rooted teeth (front teeth)</li>
              <li>• Teeth with minimal infection</li>
              <li>• Straight root canals</li>
              <li>• No abscess or swelling</li>
              <li>• Good oral hygiene</li>
              <li>• Patient cooperation</li>
            </ul>
          </ModernCard>

          <ModernCard className="p-6 border-red-200 bg-red-50">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-red-800">Not Suitable For</h3>
            </div>
            <ul className="space-y-2 text-red-700">
              <li>• Multi-rooted teeth with complex anatomy</li>
              <li>• Severe infection or abscess</li>
              <li>• Curved or calcified canals</li>
              <li>• Previous failed RCT</li>
              <li>• Poor oral hygiene</li>
              <li>• Medical complications</li>
            </ul>
          </ModernCard>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Common questions about single sitting RCT answered by Dr. Rockson Samuel</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                Is single sitting RCT safe?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes, single sitting RCT is safe when performed by experienced dentists using modern techniques. Dr. Rockson Samuel has 15+ years of experience and uses advanced equipment for safe, effective treatment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How long does single sitting RCT take?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Single sitting RCT typically takes 1-2 hours depending on the complexity of the case. This includes diagnosis, treatment, and final restoration in one visit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                What is the cost of single sitting RCT in Vellore?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Single sitting RCT in Vellore costs ₹3,000 - ₹8,000, which is 50% less than in major cities. This includes all procedures completed in one visit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                Will I feel pain during single sitting RCT?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                No, you won't feel pain during the procedure. We use advanced local anesthesia techniques to ensure complete comfort throughout the treatment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                Do I need a crown after single sitting RCT?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                A crown is recommended after RCT to protect the treated tooth and restore its function. We can place a temporary crown immediately and a permanent one in a follow-up visit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionContainer>

      {/* Internal Linking Widgets */}
      <SectionContainer className="py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RelevantQAWidget
            title="Single Sitting RCT Questions"
            questions={[
              {
                id: '1',
                title: 'Is single sitting RCT painful?',
                slug: 'single-sitting-rct-pain-level',
                excerpt: 'Single sitting RCT is virtually painless with advanced anesthesia techniques.',
                helpfulVotes: 55,
                views: 1500,
                createdAt: '2023-12-26T11:45:00Z'
              },
              {
                id: '2',
                title: 'How long does single sitting RCT take?',
                slug: 'single-sitting-rct-duration',
                excerpt: 'Single sitting RCT typically takes 1-2 hours to complete.',
                helpfulVotes: 48,
                views: 1200,
                createdAt: '2023-12-25T14:30:00Z'
              },
              {
                id: '3',
                title: 'What is the cost of single sitting RCT?',
                slug: 'single-sitting-rct-cost-breakdown',
                excerpt: 'Single sitting RCT costs ₹3,000-8,000 in Vellore, 50% less than other cities.',
                helpfulVotes: 42,
                views: 1100,
                createdAt: '2023-12-24T09:20:00Z'
              }
            ]}
            serviceName="single sitting RCT"
          />

          <CompactServiceWidget
            title="Related Dental Services"
            description="Complementary services that work well with single sitting RCT."
            services={[
              { name: "Dental Crowns", slug: "restorative-dentistry/crowns", price: "₹8,000 - ₹15,000", duration: "2 visits" },
              { name: "Dental Fillings", slug: "general-dentistry/fillings", price: "₹800 - ₹2,500", duration: "30-60 min" },
              { name: "Teeth Cleaning", slug: "general-dentistry/cleaning", price: "₹500 - ₹1,500", duration: "30-45 min" },
              { name: "Emergency Dentistry", slug: "emergency-dentistry", price: "₹1,000 - ₹5,000", duration: "1-2 hours" }
            ]}
            ctaText="View All Services"
            ctaLink="/services"
          />
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <CTAWidget
        title="Need Emergency Root Canal Treatment?"
        description="Get same-day, pain-free root canal treatment with single sitting RCT. Expert care from Dr. Rockson Samuel at 50% lower costs."
        primaryAction={{
          text: "Book Emergency Appointment",
          href: "/contact"
        }}
        secondaryAction={{
          text: "Ask About Single Sitting RCT",
          href: "/ask-the-dentist/submit"
        }}
        benefits={[
          "Same-day treatment completion",
          "Pain-free procedure",
          "Flexible payment plans available",
          "15+ years RCT experience"
        ]}
        urgency={true}
        showRating={true}
        showAvailability={true}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Single Sitting Root Canal Treatment",
            "description": "Complete root canal treatment in one visit using advanced techniques",
            "provider": {
              "@type": "MedicalOrganization",
              "name": "Indira Dental Clinic",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vellore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "India"
              }
            },
            "procedureType": "Root Canal Treatment",
            "bodyLocation": "Tooth",
            "preparation": "Diagnosis, X-rays, anesthesia",
            "followup": "Regular checkups and maintenance",
            "cost": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": "3000-8000"
            }
          })
        }}
      />
    </div>
  )
}