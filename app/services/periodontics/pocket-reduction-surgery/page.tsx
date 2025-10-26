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
  title: 'Pocket Reduction Surgery | Periodontics | Indira Dental Clinic',
  description: 'Pocket reduction surgery is a periodontal procedure to reduce deep gum pockets and prevent further bone loss. Learn about the procedure, benefits, and recovery.',
  keywords: 'pocket reduction surgery, periodontics, gum surgery, periodontal pockets, bone loss, gum disease treatment, Vellore dentist',
  openGraph: {
    title: 'Pocket Reduction Surgery | Periodontics | Indira Dental Clinic',
    description: 'Pocket reduction surgery is a periodontal procedure to reduce deep gum pockets and prevent further bone loss.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://indiradentalclinic.com/services/periodontics/pocket-reduction-surgery',
  },
}

const breadcrumbItems = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Periodontics', href: '/services/periodontics' },
  { title: 'Pocket Reduction Surgery', href: '/services/periodontics/pocket-reduction-surgery' },
]

export default function PocketReductionSurgeryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      <SectionContainer className="py-8">
        <Breadcrumb items={breadcrumbItems} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700 border-teal-200">
              Periodontal Surgery
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pocket Reduction Surgery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Advanced periodontal surgery to eliminate deep gum pockets and halt progressive bone loss for long-term oral health.
            </p>
          </div>

          {/* Overview */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-teal-600" />
                What is Pocket Reduction Surgery?
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Pocket reduction surgery, also known as osseous surgery or flap surgery, is a periodontal procedure designed to reduce deep gum pockets that have formed due to advanced periodontal disease. These pockets harbor harmful bacteria and can lead to further bone and tissue destruction.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-3">When Surgery is Needed</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Gum pockets deeper than 5mm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Non-surgical treatment ineffective</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Progressive bone loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Tooth mobility concerns</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Goals of Surgery</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Eliminate deep pockets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Remove diseased tissue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Regenerate bone structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Prevent tooth loss</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Procedure Steps */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-teal-600" />
                Pocket Reduction Procedure
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Anesthesia</h3>
                    <p className="text-xs text-gray-600">Local anesthesia administered for comfort</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Flap Creation</h3>
                    <p className="text-xs text-gray-600">Gum tissue carefully lifted to access roots</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Cleaning</h3>
                    <p className="text-xs text-gray-600">Thorough removal of plaque and tartar</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      4
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Closure</h3>
                    <p className="text-xs text-gray-600">Gum tissue repositioned and sutured</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Detailed Procedure Steps</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Pre-surgical Preparation</h4>
                        <p className="text-sm text-gray-600">Comprehensive evaluation, X-rays, and treatment planning. Pre-operative instructions provided.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Anesthesia Administration</h4>
                        <p className="text-sm text-gray-600">Local anesthesia ensures complete comfort throughout the procedure.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Surgical Access</h4>
                        <p className="text-sm text-gray-600">Gum tissue is carefully lifted to expose tooth roots and bone structure.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Deep Cleaning</h4>
                        <p className="text-sm text-gray-600">Thorough removal of plaque, tartar, and diseased tissue from root surfaces.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        5
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Bone Reshaping</h4>
                        <p className="text-sm text-gray-600">Irregular bone surfaces are smoothed to eliminate pockets and promote healing.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        6
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Tissue Repositioning</h4>
                        <p className="text-sm text-gray-600">Gum tissue is repositioned and sutured to promote optimal healing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Benefits */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Star className="w-6 h-6 text-teal-600" />
                Benefits of Pocket Reduction Surgery
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Eliminates Deep Pockets</h3>
                      <p className="text-gray-600 text-sm">Removes areas where bacteria can accumulate and cause further damage.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Prevents Tooth Loss</h3>
                      <p className="text-gray-600 text-sm">Stops the progression of periodontal disease that leads to tooth loss.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Improves Oral Hygiene</h3>
                      <p className="text-gray-600 text-sm">Makes it easier to maintain good oral hygiene with reduced pocket depths.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Reduces Inflammation</h3>
                      <p className="text-gray-600 text-sm">Eliminates chronic inflammation that can affect overall health.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Long-term Stability</h3>
                      <p className="text-gray-600 text-sm">Provides stable foundation for teeth and prevents further bone loss.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Better Aesthetics</h3>
                      <p className="text-gray-600 text-sm">Improves gum appearance and overall smile aesthetics.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Recovery */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-teal-600" />
                Recovery and Aftercare
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <Clock className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Immediate Recovery</h3>
                    <p className="text-sm text-gray-600 mb-3">First 24-48 hours</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Mild discomfort and swelling</li>
                      <li>• Soft diet recommended</li>
                      <li>• Avoid smoking</li>
                      <li>• Take prescribed medications</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Short-term Recovery</h3>
                    <p className="text-sm text-gray-600 mb-3">1-2 weeks</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Gradual return to normal diet</li>
                      <li>• Gentle oral hygiene</li>
                      <li>• Suture removal</li>
                      <li>• Follow-up appointments</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <Clock className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Long-term Healing</h3>
                    <p className="text-sm text-gray-600 mb-3">3-6 months</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Complete tissue healing</li>
                      <li>• Regular maintenance</li>
                      <li>• Professional cleanings</li>
                      <li>• Monitoring progress</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Post-Surgical Care Instructions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-800 mb-2">Do's</h4>
                      <ul className="space-y-1 text-blue-700">
                        <li>• Take prescribed antibiotics</li>
                        <li>• Use ice packs for swelling</li>
                        <li>• Maintain soft diet initially</li>
                        <li>• Keep follow-up appointments</li>
                        <li>• Practice gentle oral hygiene</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-2">Don'ts</h4>
                      <ul className="space-y-1 text-blue-700">
                        <li>• Avoid smoking or tobacco</li>
                        <li>• Don't rinse vigorously</li>
                        <li>• Avoid hard or crunchy foods</li>
                        <li>• Don't skip medications</li>
                        <li>• Avoid strenuous activities</li>
                      </ul>
                    </div>
                  </div>
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
                <AccordionItem value="pain">
                  <AccordionTrigger>Is pocket reduction surgery painful?</AccordionTrigger>
                  <AccordionContent>
                    The procedure is performed under local anesthesia, so you won't feel pain during surgery. Some discomfort and swelling are normal after the procedure, but this is manageable with prescribed pain medication and typically resolves within a few days.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="duration">
                  <AccordionTrigger>How long does the procedure take?</AccordionTrigger>
                  <AccordionContent>
                    The duration depends on the number of teeth being treated and the extent of the disease. Typically, the procedure takes 1-3 hours. More extensive cases may require multiple appointments.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="success">
                  <AccordionTrigger>What is the success rate of pocket reduction surgery?</AccordionTrigger>
                  <AccordionContent>
                    Pocket reduction surgery has a high success rate of 85-95% when combined with proper oral hygiene and regular maintenance. Success depends on patient compliance with post-surgical care and ongoing maintenance.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="alternative">
                  <AccordionTrigger>Are there alternatives to pocket reduction surgery?</AccordionTrigger>
                  <AccordionContent>
                    Non-surgical treatments like scaling and root planing are tried first. If these are ineffective, pocket reduction surgery becomes necessary. Other alternatives include laser therapy or regenerative procedures, depending on the specific case.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost">
                  <AccordionTrigger>What is the cost of pocket reduction surgery?</AccordionTrigger>
                  <AccordionContent>
                    The cost varies based on the number of teeth treated and complexity of the case, typically ranging from ₹8,000 to ₹25,000 per quadrant. We offer flexible payment plans to make treatment affordable.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ModernCardContent>
          </ModernCard>

          {/* Internal Linking Widgets */}
          <RelevantQAWidget 
            questions={[
              {
                title: "What is Periodontal Disease and How is it Treated?",
                url: "/ask-the-dentist/periodontal-disease-treatment",
                helpfulVotes: 48
              },
              {
                title: "What Causes Receding Gums and How Can They be Treated?",
                url: "/ask-the-dentist/receding-gums-causes-treatment", 
                helpfulVotes: 52
              },
              {
                title: "What Causes Tooth Sensitivity and How Can it be Treated?",
                url: "/ask-the-dentist/tooth-sensitivity-causes-treatment",
                helpfulVotes: 61
              }
            ]}
          />

          <CompactServiceWidget 
            title="Related Periodontal Services"
            description="Complementary periodontal treatments available"
            services={[
              {
                name: "Scaling and Root Planing",
                slug: "periodontics/scaling-root-planing",
                duration: "1-2 hours",
                price: "₹3,000 - ₹6,000"
              },
              {
                name: "Gingival Grafting",
                slug: "periodontics/gingival-grafting",
                duration: "1-2 hours",
                price: "₹8,000 - ₹15,000"
              },
              {
                name: "Periodontal Maintenance",
                slug: "periodontics",
                duration: "30-60 min",
                price: "₹1,500 - ₹3,000"
              }
            ]}
          />

          {/* CTA Section */}
          <CTAWidget 
            title="Concerned About Deep Gum Pockets?"
            description="Don't let periodontal disease progress. Schedule a consultation with Dr. Rockson Samuel to discuss pocket reduction surgery and restore your oral health."
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
              "Advanced surgical techniques",
              "Comprehensive follow-up care",
              "Pain management protocols",
              "Long-term maintenance"
            ]}
          />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalProcedure",
                "name": "Pocket Reduction Surgery",
                "description": "Periodontal surgical procedure to reduce deep gum pockets and prevent further bone loss.",
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
                "procedureType": "Periodontal Surgery",
                "bodyLocation": "Gums and Supporting Structures",
                "preparation": "Comprehensive periodontal evaluation and treatment planning",
                "followup": "Regular maintenance appointments every 3-4 months",
                "risks": "Swelling, discomfort, temporary sensitivity, need for additional treatment"
              })
            }}
          />
        </div>
      </SectionContainer>
    </div>
  )
}
