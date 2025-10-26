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
  title: 'Traditional Braces in Vellore | Metal Braces Treatment | Dr. Rockson Samuel',
  description: 'Get traditional metal braces in Vellore at 50% lower cost. Effective orthodontic treatment by Dr. Rockson Samuel with 15+ years experience. Reliable teeth straightening.',
  keywords: 'traditional braces Vellore, metal braces Vellore, orthodontic braces Vellore, teeth straightening Vellore, orthodontic treatment Vellore, Dr. Rockson Samuel',
  openGraph: {
    title: 'Traditional Braces in Vellore | Metal Braces Treatment',
    description: 'Get traditional metal braces in Vellore at 50% lower cost. Effective orthodontic treatment by Dr. Rockson Samuel.',
    type: 'website',
    url: 'https://www.dentalclinicinvellore.in/services/orthodontics/traditional-braces',
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/services/orthodontics/traditional-braces',
  },
}

export default function TraditionalBracesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Breadcrumb */}
      <SectionContainer className="pt-8 pb-4">
        <Breadcrumb
        items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Orthodontics', href: '/services/orthodontics' },
            { title: 'Traditional Braces', href: '/services/orthodontics/traditional-braces' },
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
                Proven Treatment
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Traditional Braces in Vellore
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get reliable, effective orthodontic treatment with traditional metal braces in Vellore. Proven results at 50% lower cost with Dr. Rockson Samuel's expertise.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-teal-600" />
                <span>18-24 months treatment</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2 text-teal-600" />
                <span>Proven effectiveness</span>
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
                  <div className="text-4xl font-bold text-teal-600 mb-2">₹40,000 - ₹80,000</div>
                  <p className="text-gray-600">Complete traditional braces treatment</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Initial Consultation</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Braces Installation</span>
                    <span className="font-semibold">₹15,000 - ₹25,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Monthly Adjustments</span>
                    <span className="font-semibold">₹1,000 - ₹2,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Retainers</span>
                    <span className="font-semibold">₹5,000 - ₹10,000</span>
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

      {/* What are Traditional Braces */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Traditional Braces?</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Traditional braces are the most established and reliable method of orthodontic treatment. They consist of metal brackets bonded to teeth and connected by archwires that gradually move teeth into proper alignment.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Proven Effectiveness</h3>
                  <p className="text-gray-600">Decades of successful treatment with predictable results for all types of orthodontic problems.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Versatile Treatment</h3>
                  <p className="text-gray-600">Can correct complex cases including severe crowding, spacing, and bite issues.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Cost-Effective</h3>
                  <p className="text-gray-600">Most affordable orthodontic treatment option with excellent long-term results.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/orthodontic-braces.jpg"
              alt="Traditional metal braces"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Types of Traditional Braces */}
      <SectionContainer className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Traditional Braces</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer different types of traditional braces to suit your needs and preferences.
          </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Metal Braces</h3>
            <p className="text-gray-600 mb-4">Classic stainless steel brackets and wires - the most durable and cost-effective option.</p>
            <div className="text-sm text-teal-600 font-semibold">₹40,000 - ₹60,000</div>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Ceramic Braces</h3>
            <p className="text-gray-600 mb-4">Tooth-colored brackets that blend with your natural teeth for a more aesthetic appearance.</p>
            <div className="text-sm text-teal-600 font-semibold">₹60,000 - ₹80,000</div>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Ligating Braces</h3>
            <p className="text-gray-600 mb-4">Advanced braces with built-in clips that reduce friction and may shorten treatment time.</p>
            <div className="text-sm text-teal-600 font-semibold">₹50,000 - ₹70,000</div>
          </ModernCard>
        </div>
      </SectionContainer>

      {/* Treatment Process */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Traditional Braces Treatment Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive treatment process ensures optimal results with your traditional braces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation & Planning</h3>
            <p className="text-gray-600">Comprehensive examination, X-rays, and treatment planning to determine the best approach.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Braces Installation</h3>
            <p className="text-gray-600">Brackets are bonded to teeth and archwires are placed to begin the movement process.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Adjustments</h3>
            <p className="text-gray-600">Monthly visits for wire adjustments and progress monitoring throughout treatment.</p>
          </ModernCard>

          <ModernCard className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Retention Phase</h3>
            <p className="text-gray-600">Braces removal and retainer placement to maintain your new smile permanently.</p>
          </ModernCard>
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer className="py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Traditional Braces</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">Decades of successful treatment with predictable results for all types of orthodontic problems.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Handles Complex Cases</h3>
                  <p className="text-gray-600">Can correct severe crowding, spacing, and bite issues that other treatments cannot handle.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost-Effective</h3>
                  <p className="text-gray-600">Most affordable orthodontic treatment option with excellent long-term results and value.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Duration</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">18-24 Months</div>
              <p className="text-gray-600">Average treatment time depending on the complexity of your orthodontic case.</p>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Rate</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
              <p className="text-gray-600">Extremely high success rate for properly diagnosed and treated cases.</p>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Durability</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">Excellent</div>
              <p className="text-gray-600">Metal braces are very durable and can handle the forces needed for tooth movement.</p>
            </ModernCard>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Common questions about traditional braces answered by Dr. Rockson Samuel</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How long do I need to wear traditional braces?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Traditional braces are typically worn for 18-24 months, depending on the complexity of your case. Simple cases may be completed in 18 months, while more complex cases may take up to 24 months.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                Do traditional braces hurt?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                You may experience some discomfort for a few days after braces are installed and after adjustments. This is normal and can be managed with over-the-counter pain medication. The discomfort decreases as you get used to the braces.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How much do traditional braces cost in Vellore?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Traditional braces in Vellore cost ₹40,000 - ₹80,000, which is 50% less than in major cities. This includes consultation, installation, adjustments, and retainers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                Can I eat normally with braces?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                You can eat most foods with braces, but you should avoid hard, sticky, or chewy foods that could damage the brackets or wires. We'll provide you with a comprehensive list of foods to avoid.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                How often do I need to visit for adjustments?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                You'll typically need to visit every 4-6 weeks for adjustments. During these visits, Dr. Samuel will check your progress and make necessary adjustments to continue moving your teeth toward their final positions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionContainer>

      {/* Internal Linking Widgets */}
      <SectionContainer className="py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RelevantQAWidget
            title="Traditional Braces Questions"
            questions={[
              {
                id: '1',
                title: 'How long do traditional braces take?',
                slug: 'traditional-braces-treatment-duration',
                excerpt: 'Traditional braces typically take 18-24 months to complete treatment.',
                helpfulVotes: 65,
                views: 1800,
                createdAt: '2023-12-25T14:30:00Z'
              },
              {
                id: '2',
                title: 'Do traditional braces hurt?',
                slug: 'traditional-braces-pain-level',
                excerpt: 'Some discomfort is normal initially and after adjustments, but it decreases over time.',
                helpfulVotes: 58,
                views: 1600,
                createdAt: '2023-12-22T11:20:00Z'
              },
              {
                id: '3',
                title: 'What foods should I avoid with braces?',
                slug: 'braces-food-restrictions',
                excerpt: 'Avoid hard, sticky, or chewy foods that could damage brackets or wires.',
                helpfulVotes: 72,
                views: 2000,
                createdAt: '2023-12-20T09:15:00Z'
              }
            ]}
            serviceName="traditional braces"
          />

          <CompactServiceWidget
            title="Related Orthodontic Services"
            description="Complementary orthodontic treatments available at our clinic."
            services={[
              { name: "Invisalign", slug: "orthodontics/invisalign", price: "₹80,000 - ₹1,50,000", duration: "6-18 months" },
              { name: "Ceramic Braces", slug: "orthodontics/ceramic-braces", price: "₹60,000 - ₹80,000", duration: "18-24 months" },
              { name: "Retainers", slug: "orthodontics/retainers", price: "₹5,000 - ₹15,000", duration: "Lifetime" },
              { name: "Space Maintainer", slug: "orthodontics/space-maintainer", price: "₹3,000 - ₹8,000", duration: "6-18 months" }
            ]}
            ctaText="View All Orthodontic Services"
            ctaLink="/services/orthodontics"
          />
      </div>
      </SectionContainer>

      {/* CTA Section */}
      <CTAWidget
        title="Ready for Straight Teeth?"
        description="Get reliable orthodontic treatment with traditional braces. Expert care from Dr. Rockson Samuel at 50% lower costs."
        primaryAction={{
          text: "Book Free Consultation",
          href: "/contact"
        }}
        secondaryAction={{
          text: "Ask About Traditional Braces",
          href: "/ask-the-dentist/submit"
        }}
        benefits={[
          "Free consultation and X-rays",
          "Flexible payment plans available",
          "15+ years orthodontic experience",
          "Proven treatment results"
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
            "name": "Traditional Braces Treatment",
            "description": "Metal braces orthodontic treatment for teeth straightening",
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
            "procedureType": "Orthodontic Treatment",
            "bodyLocation": "Teeth",
            "preparation": "Consultation, X-rays, treatment planning",
            "followup": "Regular adjustments and retainer wear",
            "cost": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": "40000-80000"
            }
          })
        }}
      />
    </div>
  )
}