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
import { CheckCircle, Clock, Shield, Star, Users, Award, ArrowRight, Phone, Calendar } from 'lucide-react'
import { RelevantQAWidget } from '@/components/widgets/relevant-qa-widget'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import { CTAWidget } from '@/components/widgets/cta-widget'

export const metadata: Metadata = {
  title: 'Single Tooth Implants in Vellore | Best Dental Implant Treatment | Dr. Rockson Samuel',
  description: 'Get single tooth implants in Vellore at 50% lower cost. Expert treatment by Dr. Rockson Samuel with 15+ years experience. Pain-free, permanent solution for missing teeth.',
  keywords: 'single tooth implants Vellore, dental implants Vellore, tooth replacement Vellore, dental implant cost Vellore, best dentist Vellore, Dr. Rockson Samuel',
  openGraph: {
    title: 'Single Tooth Implants in Vellore | Best Dental Implant Treatment',
    description: 'Get single tooth implants in Vellore at 50% lower cost. Expert treatment by Dr. Rockson Samuel with 15+ years experience.',
    type: 'website',
    url: 'https://www.dentalclinicinvellore.in/services/dental-implants/single-tooth-implants',
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/dental-implants/single-tooth-implants',
  },
}

export default function SingleToothImplantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8 pb-4">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Dental Implants', href: '/services/dental-implants' },
            { title: 'Single Tooth Implants', href: '/services/dental-implants/single-tooth-implants' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-teal-100 text-teal-800 border-teal-200">
                <Award className="w-4 h-4 mr-2" />
                Most Popular Treatment
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Single Tooth Implants in Vellore
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Replace your missing tooth with a permanent, natural-looking solution. Get single tooth implants in Vellore at 50% lower cost with expert care from Dr. Rockson Samuel.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-teal-600" />
                <span>2-3 hours procedure</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2 text-teal-600" />
                <span>Lifetime guarantee</span>
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
                  Book Free Consultation
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
                  <div className="text-4xl font-bold text-teal-600 mb-2">₹25,000 - ₹35,000</div>
                  <p className="text-gray-600">Per single tooth implant</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Implant Fixture</span>
                    <span className="font-semibold">₹18,000 - ₹25,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Abutment</span>
                    <span className="font-semibold">₹3,000 - ₹5,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Crown</span>
                    <span className="font-semibold">₹4,000 - ₹5,000</span>
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

      {/* What are Single Tooth Implants */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Single Tooth Implants?</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A single tooth implant is a titanium post that replaces the root of a missing tooth. It provides a strong foundation for a custom-made crown that looks, feels, and functions like your natural tooth.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Permanent Solution</h3>
                  <p className="text-gray-600">Unlike bridges or dentures, implants are permanent and don't require replacement.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Preserves Bone</h3>
                  <p className="text-gray-600">Prevents bone loss and maintains facial structure.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Natural Function</h3>
                  <p className="text-gray-600">Restores full chewing ability and speech clarity.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/dental-implant-stages.png"
              alt="Single tooth implant procedure stages"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Single Tooth Implant Procedure</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our step-by-step process ensures the best results with minimal discomfort and maximum precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation & Planning</h3>
            <p className="text-gray-600">Comprehensive examination, X-rays, and treatment planning using advanced 3D imaging.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Implant Placement</h3>
            <p className="text-gray-600">Titanium implant is surgically placed into the jawbone under local anesthesia.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Healing Period</h3>
            <p className="text-gray-600">3-6 months for osseointegration - the implant fuses with the jawbone.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Crown Placement</h3>
            <p className="text-gray-600">Custom-made crown is attached to the implant for a natural-looking result.</p>
          </ModernCard>
          </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Single Tooth Implants</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Durability</h3>
                  <p className="text-gray-600">Implants can last a lifetime with proper care, making them a cost-effective long-term solution.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Impact on Adjacent Teeth</h3>
                  <p className="text-gray-600">Unlike bridges, implants don't require grinding down healthy neighboring teeth.</p>
        </div>
      </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Star className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Appearance</h3>
                  <p className="text-gray-600">Custom-made crowns match your natural teeth perfectly in color, shape, and size.</p>
                </div>
              </div>
        </div>
      </div>

          <div className="space-y-6">
            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Rate</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
              <p className="text-gray-600">Success rate for single tooth implants with proper care and maintenance.</p>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recovery Time</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">1-2 Weeks</div>
              <p className="text-gray-600">Initial healing period before returning to normal activities.</p>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pain Level</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">Minimal</div>
              <p className="text-gray-600">Most patients report minimal discomfort during and after the procedure.</p>
            </ModernCard>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Common questions about single tooth implants answered by Dr. Rockson Samuel</p>
      </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How long does a single tooth implant last?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                With proper care and maintenance, single tooth implants can last a lifetime. The titanium implant integrates with your jawbone permanently, while the crown may need replacement every 15-20 years depending on wear.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                Is the implant procedure painful?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                The procedure is performed under local anesthesia, so you won't feel pain during the surgery. Most patients experience minimal discomfort afterward, which can be managed with over-the-counter pain medication.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How much does a single tooth implant cost in Vellore?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Single tooth implants in Vellore cost ₹25,000 - ₹35,000, which is 50% less than in major cities like Mumbai or Delhi. This includes the implant, abutment, and crown.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                Can anyone get a single tooth implant?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Most people are candidates for single tooth implants. However, you need sufficient bone density and good overall health. During consultation, we'll assess your suitability and discuss any necessary preparatory treatments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How long is the entire treatment process?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                The complete process takes 3-6 months. This includes initial consultation, implant placement, healing period (osseointegration), and crown placement. We provide temporary solutions during the healing period.
              </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
      </SectionContainer>

      {/* Internal Linking Widgets */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RelevantQAWidget
            title="Single Tooth Implant Questions"
            questions={[
              {
                id: '1',
                title: 'How long do single tooth implants last?',
                slug: 'single-tooth-implants-longevity',
                excerpt: 'Single tooth implants can last a lifetime with proper care and maintenance.',
                helpfulVotes: 65,
                views: 1800,
                createdAt: '2023-12-25T14:30:00Z'
              },
              {
                id: '2',
                title: 'Are single tooth implants painful?',
                slug: 'single-tooth-implants-pain-level',
                excerpt: 'Most patients report minimal discomfort during and after single tooth implant surgery.',
                helpfulVotes: 58,
                views: 1600,
                createdAt: '2023-12-22T11:20:00Z'
              },
              {
                id: '3',
                title: 'What is the cost of single tooth implants?',
                slug: 'single-tooth-implants-cost-breakdown',
                excerpt: 'Single tooth implants cost ₹25,000-35,000 in Vellore, 50% less than other cities.',
                helpfulVotes: 72,
                views: 2000,
                createdAt: '2023-12-20T09:15:00Z'
              }
            ]}
            serviceName="single tooth implants"
          />

          <CompactServiceWidget
            title="Related Dental Services"
            description="Complementary services that work well with single tooth implants."
            services={[
              { name: "Multiple Tooth Implants", slug: "dental-implants/multiple-tooth", price: "₹45,000 - ₹80,000", duration: "3-4 hours" },
              { name: "Bone Grafting", slug: "oral-surgery/bone-grafting", price: "₹8,000 - ₹15,000", duration: "1-2 hours" },
              { name: "Teeth Extraction", slug: "oral-surgery/tooth-extraction", price: "₹1,500 - ₹3,000", duration: "30-60 min" },
              { name: "Dental Crowns", slug: "restorative-dentistry/crowns", price: "₹8,000 - ₹15,000", duration: "2 visits" }
            ]}
            ctaText="View All Services"
            ctaLink="/services"
          />
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <CTAWidget
        title="Ready for Your Single Tooth Implant?"
        description="Transform your smile with a permanent, natural-looking single tooth implant. Get expert care from Dr. Rockson Samuel at 50% lower costs."
        primaryAction={{
          text: "Book Free Consultation",
          href: "/contact"
        }}
        secondaryAction={{
          text: "Ask About Single Tooth Implants",
          href: "/ask-the-dentist/submit"
        }}
        benefits={[
          "Free consultation and X-rays",
          "Flexible payment plans available",
          "15+ years implant experience",
          "Same-day temporary teeth option"
        ]}
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
            "name": "Single Tooth Implant",
            "description": "Permanent tooth replacement solution using titanium implants",
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
            "procedureType": "Dental Implant",
            "bodyLocation": "Tooth",
            "preparation": "Consultation, X-rays, treatment planning",
            "followup": "Regular checkups and maintenance",
            "cost": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": "25000-35000"
            }
          })
        }}
      />
      </div>
  )
}