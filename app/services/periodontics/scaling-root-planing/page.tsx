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
import { CheckCircle, Clock, Shield, Star, Users, Award, ArrowRight, Phone, Calendar, Heart, MessageCircle } from 'lucide-react'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { RelevantQAWidget } from '@/components/widgets/relevant-qa-widget'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import { CTAWidget } from '@/components/widgets/cta-widget'

const reviews = generateServiceReviews('Scaling and Root Planing', 'default')

export const metadata: Metadata = {
  title: 'Scaling and Root Planing in Vellore | Deep Cleaning Treatment | Dr. Rockson Samuel',
  description: 'Get scaling and root planing deep cleaning in Vellore at 50% lower cost. Professional periodontal treatment by Dr. Rockson Samuel with 15+ years experience.',
  keywords: 'scaling root planing Vellore, deep cleaning Vellore, periodontal treatment Vellore, gum disease treatment Vellore, Dr. Rockson Samuel',
  openGraph: {
    title: 'Scaling and Root Planing in Vellore | Deep Cleaning Treatment',
    description: 'Get scaling and root planing deep cleaning in Vellore at 50% lower cost. Professional periodontal treatment by Dr. Rockson Samuel.',
    type: 'website',
    url: 'https://www.dentalclinicinvellore.in/services/periodontics/scaling-root-planing',
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/periodontics/scaling-root-planing',
  },
}

export default function ScalingRootPlaningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8 pb-4">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Periodontics', href: '/services/periodontics' },
            { title: 'Scaling and Root Planing', href: '/services/periodontics/scaling-root-planing' },
          ]}
        />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-teal-100 text-teal-800 border-teal-200">
                <Heart className="w-4 h-4 mr-2" />
                Gum Health Treatment
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Scaling and Root Planing in Vellore
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get professional deep cleaning treatment for gum disease in Vellore. Scaling and root planing by Dr. Rockson Samuel at 50% lower cost with 15+ years experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-teal-600" />
                <span>1-2 hours per session</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2 text-teal-600" />
                <span>Non-surgical treatment</span>
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
                  Book Treatment
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
                  <p className="text-gray-600">Per quadrant treatment</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Initial Consultation</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Scaling (Per Quadrant)</span>
                    <span className="font-semibold">₹1,500 - ₹2,500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Root Planing (Per Quadrant)</span>
                    <span className="font-semibold">₹1,500 - ₹2,500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Follow-up Visit</span>
                    <span className="font-semibold">₹500 - ₹1,000</span>
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

      {/* What is Scaling and Root Planing */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Scaling and Root Planing?</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Scaling and root planing is a deep cleaning procedure that removes plaque, tartar, and bacteria from below the gumline. It's the first line of defense against periodontal disease and helps restore gum health.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Scaling</h3>
                  <p className="text-gray-600">Removes plaque and tartar from tooth surfaces above and below the gumline.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Root Planing</h3>
                  <p className="text-gray-600">Smooths root surfaces to help gums reattach and prevent future bacterial buildup.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Non-Surgical</h3>
                  <p className="text-gray-600">Conservative treatment that can prevent the need for more invasive procedures.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/scaling-root-planing.jpg"
              alt="Scaling and root planing procedure"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Treatment Process */}
      <SectionContainer className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Scaling and Root Planing Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive deep cleaning process ensures optimal gum health and prevents further periodontal disease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
            <p className="text-gray-600">Comprehensive examination and periodontal charting to assess gum health and pocket depths.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Anesthesia</h3>
            <p className="text-gray-600">Local anesthesia is administered to ensure comfort during the deep cleaning procedure.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scaling</h3>
            <p className="text-gray-600">Removal of plaque and tartar from tooth surfaces above and below the gumline.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Root Planing</h3>
            <p className="text-gray-600">Smoothing of root surfaces to promote gum reattachment and prevent bacterial buildup.</p>
          </ModernCard>
          </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Scaling and Root Planing</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Heart className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gum Health Restoration</h3>
                  <p className="text-gray-600">Removes bacteria and toxins that cause gum inflammation and periodontal disease.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Prevents Tooth Loss</h3>
                  <p className="text-gray-600">Early intervention can prevent the progression of periodontal disease and tooth loss.</p>
        </div>
      </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Non-Surgical Treatment</h3>
                  <p className="text-gray-600">Conservative approach that avoids the need for more invasive surgical procedures.</p>
                </div>
              </div>
        </div>
      </div>

          <div className="space-y-6">
            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Sessions</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">1-4 Sessions</div>
              <p className="text-gray-600">Number of sessions depends on the severity of periodontal disease.</p>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recovery Time</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">24-48 Hours</div>
              <p className="text-gray-600">Minimal recovery time with proper oral hygiene and care instructions.</p>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Rate</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">85-90%</div>
              <p className="text-gray-600">High success rate when combined with proper oral hygiene maintenance.</p>
            </ModernCard>
      </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Common questions about scaling and root planing answered by Dr. Rockson Samuel</p>
      </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                Is scaling and root planing painful?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                The procedure is performed under local anesthesia, so you shouldn't feel pain during treatment. Some patients may experience mild discomfort afterward, which can be managed with over-the-counter pain medication.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How long does scaling and root planing take?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Each session typically takes 1-2 hours, depending on the amount of cleaning needed. Most patients require 1-4 sessions to complete the treatment, with sessions scheduled 1-2 weeks apart.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                What is the cost of scaling and root planing in Vellore?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Scaling and root planing in Vellore costs ₹3,000 - ₹8,000 per quadrant, which is 50% less than in major cities. The total cost depends on how many quadrants need treatment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How often do I need scaling and root planing?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Most patients need scaling and root planing every 3-6 months, depending on their oral hygiene and periodontal health. Regular maintenance visits help prevent recurrence of periodontal disease.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                What should I expect after treatment?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                You may experience mild sensitivity and slight bleeding for a few days. We'll provide detailed care instructions and may recommend a special mouthwash or toothpaste to aid healing.
              </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
      </SectionContainer>

      {/* Internal Linking Widgets */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RelevantQAWidget
            title="Scaling and Root Planing Questions"
            questions={[
              {
                id: '1',
                title: 'Is scaling and root planing painful?',
                slug: 'scaling-root-planing-pain-level',
                excerpt: 'The procedure is performed under local anesthesia, so you shouldn\'t feel pain during treatment.',
                helpfulVotes: 65,
                views: 1800,
                createdAt: '2023-12-25T14:30:00Z'
              },
              {
                id: '2',
                title: 'How often do I need deep cleaning?',
                slug: 'deep-cleaning-frequency',
                excerpt: 'Most patients need scaling and root planing every 3-6 months depending on oral hygiene.',
                helpfulVotes: 58,
                views: 1600,
                createdAt: '2023-12-22T11:20:00Z'
              },
              {
                id: '3',
                title: 'What is the cost of deep cleaning in Vellore?',
                slug: 'deep-cleaning-cost-vellore',
                excerpt: 'Scaling and root planing costs ₹3,000-8,000 per quadrant in Vellore, 50% less than other cities.',
                helpfulVotes: 72,
                views: 2000,
                createdAt: '2023-12-20T09:15:00Z'
              }
            ]}
            serviceName="scaling and root planing"
          />

          <CompactServiceWidget
            title="Related Periodontal Services"
            description="Complementary periodontal treatments available at our clinic."
            services={[
              { name: "Pocket Reduction Surgery", slug: "periodontics/pocket-reduction-surgery", price: "₹8,000 - ₹15,000", duration: "1-2 hours" },
              { name: "Gingival Grafting", slug: "periodontics/gingival-grafting", price: "₹12,000 - ₹20,000", duration: "1-2 hours" },
              { name: "Periodontal Maintenance", slug: "periodontics/maintenance", price: "₹1,500 - ₹3,000", duration: "30-45 min" },
              { name: "Gum Disease Treatment", slug: "periodontics/gum-disease", price: "₹5,000 - ₹12,000", duration: "1-2 hours" }
            ]}
            ctaText="View All Periodontal Services"
            ctaLink="/services/periodontics"
          />
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <CTAWidget
        title="Need Gum Disease Treatment?"
        description="Restore your gum health with professional scaling and root planing. Expert periodontal care from Dr. Rockson Samuel at 50% lower costs."
        primaryAction={{
          text: "Book Treatment",
          href: "/contact"
        }}
        secondaryAction={{
          text: "Ask About Deep Cleaning",
          href: "/ask-the-dentist/submit"
        }}
        benefits={[
          "Free consultation and assessment",
          "Flexible payment plans available",
          "15+ years periodontal experience",
          "Non-surgical treatment option"
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
            "name": "Scaling and Root Planing",
            "description": "Deep cleaning procedure for periodontal disease treatment",
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
            "procedureType": "Periodontal Treatment",
            "bodyLocation": "Gums",
            "preparation": "Assessment, anesthesia",
            "followup": "Regular maintenance visits",
            "cost": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": "3000-8000"
            }
          })
        }}
      />

      {/* Reviews Section */}
      <SectionContainer className="py-16 bg-gradient-to-r from-yellow-50/50 to-orange-50/50">
        <ServiceReviews 
          serviceName="Scaling and Root Planing" 
          reviews={reviews}
          averageRating={5.0}
          totalReviews={215}
        />
      </SectionContainer>
    </div>
  )
}