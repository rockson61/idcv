import { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { RelevantQAWidget } from '@/components/widgets/relevant-qa-widget'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { 
  Calendar, 
  Clock, 
  Users, 
  Shield, 
  Star, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Phone,
  MapPin,
  MessageCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Space Maintainer Treatment | Orthodontics | Indira Dental Clinic',
  description: 'Space maintainers are orthodontic appliances that preserve space for permanent teeth after premature loss of primary teeth. Learn about types, benefits, and care instructions.',
  keywords: 'space maintainer, orthodontics, primary teeth, premature tooth loss, space preservation, orthodontic appliance, Vellore dentist',
  openGraph: {
    title: 'Space Maintainer Treatment | Orthodontics | Indira Dental Clinic',
    description: 'Space maintainers are orthodontic appliances that preserve space for permanent teeth after premature loss of primary teeth.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://indiradentalclinic.com/services/orthodontics/space-maintainer',
  },
}

const breadcrumbItems = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Orthodontics', href: '/services/orthodontics' },
  { title: 'Space Maintainer', href: '/services/orthodontics/space-maintainer' },
]

export default function SpaceMaintainerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={breadcrumbItems} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700 border-teal-200">
              Orthodontic Treatment
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Space Maintainer Treatment
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Preserve space for permanent teeth with custom-made space maintainers after premature loss of primary teeth.
            </p>
          </div>

          {/* Overview */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-teal-600" />
                What is a Space Maintainer?
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A space maintainer is a custom-made orthodontic appliance designed to preserve the space left by a prematurely lost primary tooth. When primary teeth are lost too early, adjacent teeth can drift into the empty space, causing crowding and alignment problems for permanent teeth.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-3">When Space Maintainers Are Needed</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Premature loss of primary teeth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Tooth extraction due to decay</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Trauma-related tooth loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Congenital missing teeth</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Benefits</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Prevents tooth drift</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Maintains proper spacing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Reduces future orthodontic needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Preserves facial symmetry</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Types of Space Maintainers */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-teal-600" />
                Types of Space Maintainers
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Fixed Space Maintainers</h3>
                    <p className="text-gray-600 text-sm mb-4">Permanently attached appliances that cannot be removed by the child.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Band and loop maintainer</li>
                      <li>• Distal shoe maintainer</li>
                      <li>• Lingual arch maintainer</li>
                      <li>• Transpalatal arch</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Removable Space Maintainers</h3>
                    <p className="text-gray-600 text-sm mb-4">Appliances that can be taken out for cleaning and maintenance.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Partial denture</li>
                      <li>• Acrylic space maintainer</li>
                      <li>• Hawley appliance</li>
                      <li>• Functional space maintainer</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Most Common Types</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Band and Loop Maintainer</h4>
                      <p className="text-sm text-gray-600 mb-2">Used when a single primary molar is lost. Consists of a band on the tooth behind the space and a loop extending into the space.</p>
                      <div className="text-xs text-gray-500">
                        <strong>Duration:</strong> 6-12 months<br/>
                        <strong>Cost:</strong> ₹3,000 - ₹5,000
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Distal Shoe Maintainer</h4>
                      <p className="text-sm text-gray-600 mb-2">Used when a primary second molar is lost before the permanent first molar erupts. Guides the permanent tooth into position.</p>
                      <div className="text-xs text-gray-500">
                        <strong>Duration:</strong> 12-18 months<br/>
                        <strong>Cost:</strong> ₹4,000 - ₹7,000
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Lingual Arch Maintainer</h4>
                      <p className="text-sm text-gray-600 mb-2">Used when multiple primary molars are lost. Maintains space on both sides of the mouth.</p>
                      <div className="text-xs text-gray-500">
                        <strong>Duration:</strong> 12-24 months<br/>
                        <strong>Cost:</strong> ₹5,000 - ₹8,000
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Removable Partial Denture</h4>
                      <p className="text-sm text-gray-600 mb-2">Used when multiple teeth are missing. Can also improve appearance and chewing function.</p>
                      <div className="text-xs text-gray-500">
                        <strong>Duration:</strong> 6-18 months<br/>
                        <strong>Cost:</strong> ₹4,000 - ₹6,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Procedure */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-teal-600" />
                Space Maintainer Procedure
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Assessment</h3>
                    <p className="text-xs text-gray-600">Evaluation of space loss and tooth development</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Impressions</h3>
                    <p className="text-xs text-gray-600">Dental impressions for custom appliance</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Fabrication</h3>
                    <p className="text-xs text-gray-600">Custom appliance made in dental lab</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      4
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Placement</h3>
                    <p className="text-xs text-gray-600">Appliance fitted and adjusted</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Timeline</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-800">Initial Visit:</strong>
                      <p className="text-blue-700">Assessment and impressions (1 hour)</p>
                    </div>
                    <div>
                      <strong className="text-blue-800">Lab Time:</strong>
                      <p className="text-blue-700">1-2 weeks for fabrication</p>
                    </div>
                    <div>
                      <strong className="text-blue-800">Placement:</strong>
                      <p className="text-blue-700">Fitting and adjustments (30 minutes)</p>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Care Instructions */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-teal-600" />
                Care Instructions
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">For Fixed Space Maintainers</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Brush normally around the appliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Use fluoride toothpaste</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Avoid sticky foods</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Don't chew on hard objects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Report any looseness immediately</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">For Removable Space Maintainers</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Remove for cleaning daily</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Brush with soft toothbrush</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Soak in denture cleaner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Store in water when not wearing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Wear as directed by dentist</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-3">Important Reminders</h3>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Keep all scheduled follow-up appointments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Contact us immediately if the appliance breaks or becomes loose</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Don't attempt to adjust or repair the appliance yourself</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* FAQ Section */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle>Frequently Asked Questions</ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="age">
                  <AccordionTrigger>At what age are space maintainers typically used?</AccordionTrigger>
                  <AccordionContent>
                    Space maintainers are most commonly used in children aged 6-12 years, when they have a mix of primary and permanent teeth. The exact age depends on when primary teeth are lost prematurely.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="duration">
                  <AccordionTrigger>How long will my child need to wear a space maintainer?</AccordionTrigger>
                  <AccordionContent>
                    The duration varies depending on the type of maintainer and when the permanent tooth is expected to erupt. Most space maintainers are worn for 6-24 months, until the permanent tooth begins to emerge.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="comfort">
                  <AccordionTrigger>Are space maintainers comfortable for children?</AccordionTrigger>
                  <AccordionContent>
                    Most children adapt to space maintainers within a few days. There may be some initial discomfort or speech changes, but these typically resolve quickly. We provide detailed care instructions to ensure comfort.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="eating">
                  <AccordionTrigger>Can my child eat normally with a space maintainer?</AccordionTrigger>
                  <AccordionContent>
                    Yes, children can eat most foods with space maintainers. We recommend avoiding very sticky or hard foods that could damage the appliance. A soft diet may be recommended for the first few days after placement.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost">
                  <AccordionTrigger>What is the cost of a space maintainer?</AccordionTrigger>
                  <AccordionContent>
                    The cost varies depending on the type of space maintainer needed, ranging from ₹3,000 to ₹8,000. This is significantly less expensive than future orthodontic treatment that would be needed without space maintenance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ModernCardContent>
          </ModernCard>

          {/* Internal Linking Widgets */}
          <RelevantQAWidget 
            questions={[
              {
                title: "What Causes Teeth Crowding and How is it Treated?",
                url: "/ask-the-dentist/teeth-crowding-causes-treatment",
                helpfulVotes: 38
              },
              {
                title: "What is Malocclusion and What are the Different Types?",
                url: "/ask-the-dentist/malocclusion-types-treatment", 
                helpfulVotes: 42
              },
              {
                title: "How Do I Care for My Teeth While Wearing Braces?",
                url: "/ask-the-dentist/braces-oral-hygiene-care",
                helpfulVotes: 55
              }
            ]}
          />

          <CompactServiceWidget 
            title="Related Orthodontic Services"
            description="Other orthodontic treatments for children"
            services={[
              {
                name: "Traditional Braces",
                slug: "orthodontics/traditional-braces",
                duration: "18-24 months",
                price: "₹25,000 - ₹45,000"
              },
              {
                name: "Invisalign",
                slug: "orthodontics/invisalign",
                duration: "12-18 months",
                price: "₹35,000 - ₹55,000"
              },
              {
                name: "Serial Extraction",
                slug: "orthodontics/serial-extraction",
                duration: "2-4 years",
                price: "₹8,000 - ₹15,000"
              }
            ]}
          />

          {/* CTA Section */}
          <CTAWidget 
            title="Concerned About Your Child's Tooth Loss?"
            description="Early intervention with space maintainers can prevent complex orthodontic problems. Schedule a consultation with Dr. Rockson Samuel to assess your child's needs."
            primaryAction={{
              text: "Schedule Consultation",
              href: "/contact",
              icon: Calendar
            }}
            secondaryAction={{
              text: "Ask a Question",
              href: "/ask-the-dentist/submit",
              icon: MessageCircle
            }}
            benefits={[
              "Child-friendly approach",
              "Custom-made appliances",
              "Comprehensive follow-up",
              "Affordable treatment"
            ]}
          />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalProcedure",
                "name": "Space Maintainer Treatment",
                "description": "Orthodontic appliance used to preserve space for permanent teeth after premature loss of primary teeth.",
                "provider": {
                  "@type": "DentalClinic",
                  "name": "Indira Dental Clinic",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar",
                    "addressLocality": "Gandhi Nagar, Vellore",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "632006",
                    "addressCountry": "IN"
                  },
                  "telephone": "+917010650063"
                },
                "procedureType": "Orthodontic Treatment",
                "bodyLocation": "Mouth and Teeth",
                "preparation": "Dental evaluation and impressions",
                "followup": "Regular monitoring appointments every 3-6 months",
                "risks": "Appliance breakage, discomfort, need for adjustments"
              })
            }}
          />
        </div>
      </SectionContainer>
    </div>
  )
}
