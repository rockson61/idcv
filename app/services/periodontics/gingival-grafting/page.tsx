import { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
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
  MapPin
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gingival Grafting | Periodontics | Indira Dental Clinic',
  description: 'Gingival grafting is a periodontal procedure to restore receded gum tissue and protect exposed tooth roots. Learn about the procedure, benefits, and recovery.',
  keywords: 'gingival grafting, gum grafting, gum recession, periodontal surgery, gum tissue restoration, Vellore dentist',
  openGraph: {
    title: 'Gingival Grafting | Periodontics | Indira Dental Clinic',
    description: 'Gingival grafting is a periodontal procedure to restore receded gum tissue and protect exposed tooth roots.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://indiradentalclinic.com/services/periodontics/gingival-grafting',
  },
}

const breadcrumbItems = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Periodontics', href: '/services/periodontics' },
  { title: 'Gingival Grafting', href: '/services/periodontics/gingival-grafting' },
]

export default function GingivalGraftingPage() {
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
              Gingival Grafting
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Restore receded gum tissue and protect exposed tooth roots with advanced gingival grafting procedures.
            </p>
          </div>

          {/* Overview */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-teal-600" />
                What is Gingival Grafting?
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Gingival grafting, also known as gum grafting, is a periodontal surgical procedure that restores receded gum tissue around teeth. When gums recede, tooth roots become exposed, leading to sensitivity, increased risk of decay, and aesthetic concerns. Grafting procedures restore the protective gum tissue and improve both function and appearance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-3">Causes of Gum Recession</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Aggressive tooth brushing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Periodontal disease</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Genetics and thin gum tissue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Teeth grinding (bruxism)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Benefits of Grafting</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Reduces tooth sensitivity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Protects exposed roots</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Improves aesthetics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Prevents further recession</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Types of Grafts */}
          <ModernCard className="mb-8">
            <ModernCardHeader>
              <ModernCardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-teal-600" />
                Types of Gingival Grafts
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Connective Tissue Graft</h3>
                    <p className="text-gray-600 text-sm mb-4">Most common type using tissue from the roof of the mouth (palate).</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• High success rate</li>
                      <li>• Natural appearance</li>
                      <li>• Minimal discomfort</li>
                      <li>• Cost: ₹8,000 - ₹12,000</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Free Gingival Graft</h3>
                    <p className="text-gray-600 text-sm mb-4">Uses tissue directly from the palate to increase gum thickness.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Increases gum thickness</li>
                      <li>• Good for thin gums</li>
                      <li>• Prevents future recession</li>
                      <li>• Cost: ₹6,000 - ₹10,000</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Pedicle Graft</h3>
                    <p className="text-gray-600 text-sm mb-4">Uses nearby gum tissue that remains attached to its blood supply.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• No donor site needed</li>
                      <li>• Faster healing</li>
                      <li>• Limited to specific areas</li>
                      <li>• Cost: ₹5,000 - ₹8,000</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Allograft/Acellular Dermis</h3>
                    <p className="text-gray-600 text-sm mb-4">Uses processed donor tissue or synthetic materials.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• No donor site required</li>
                      <li>• Reduced discomfort</li>
                      <li>• Good success rate</li>
                      <li>• Cost: ₹7,000 - ₹11,000</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Choosing the Right Graft Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Connective Tissue Graft - Best For:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Single tooth recession</li>
                        <li>• Moderate recession depth</li>
                        <li>• Patients wanting natural results</li>
                        <li>• Most common cases</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Free Gingival Graft - Best For:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Very thin gum tissue</li>
                        <li>• Multiple teeth affected</li>
                        <li>• Preventive treatment</li>
                        <li>• High-risk patients</li>
                      </ul>
                    </div>
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
                Gingival Grafting Procedure
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Preparation</h3>
                    <p className="text-xs text-gray-600">Anesthesia and site preparation</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Graft Harvest</h3>
                    <p className="text-xs text-gray-600">Tissue collection from donor site</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                    <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Graft Placement</h3>
                    <p className="text-xs text-gray-600">Tissue positioned and secured</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      4
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Suturing</h3>
                    <p className="text-xs text-gray-600">Careful closure and stabilization</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Detailed Procedure Steps</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Anesthesia and Preparation</h4>
                        <p className="text-sm text-gray-600">Local anesthesia is administered to ensure complete comfort. The surgical site is prepared and isolated.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Graft Harvesting</h4>
                        <p className="text-sm text-gray-600">Tissue is carefully harvested from the palate or other donor site, preserving its integrity and blood supply.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Recipient Site Preparation</h4>
                        <p className="text-sm text-gray-600">The area receiving the graft is prepared to ensure optimal blood supply and graft integration.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Graft Placement and Suturing</h4>
                        <p className="text-sm text-gray-600">The graft is positioned precisely and secured with fine sutures to ensure proper healing and integration.</p>
                      </div>
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
                      <li>• Avoid touching the area</li>
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
                      <li>• Complete tissue integration</li>
                      <li>• Final aesthetic results</li>
                      <li>• Regular maintenance</li>
                      <li>• Monitoring progress</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Post-Surgical Care Instructions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">Do's</h4>
                      <ul className="space-y-1 text-green-700">
                        <li>• Take prescribed antibiotics</li>
                        <li>• Use ice packs for swelling</li>
                        <li>• Maintain soft diet initially</li>
                        <li>• Keep follow-up appointments</li>
                        <li>• Practice gentle oral hygiene</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">Don'ts</h4>
                      <ul className="space-y-1 text-green-700">
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
                  <AccordionTrigger>Is gingival grafting painful?</AccordionTrigger>
                  <AccordionContent>
                    The procedure is performed under local anesthesia, so you won't feel pain during surgery. Some discomfort and swelling are normal after the procedure, but this is manageable with prescribed pain medication and typically resolves within a few days.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="duration">
                  <AccordionTrigger>How long does the procedure take?</AccordionTrigger>
                  <AccordionContent>
                    The duration depends on the number of teeth being treated and the type of graft used. Typically, the procedure takes 1-2 hours. More extensive cases may require multiple appointments.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="success">
                  <AccordionTrigger>What is the success rate of gingival grafting?</AccordionTrigger>
                  <AccordionContent>
                    Gingival grafting has a high success rate of 85-95% when performed by experienced periodontists. Success depends on proper post-surgical care, good oral hygiene, and regular follow-up appointments.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="appearance">
                  <AccordionTrigger>Will the graft look natural?</AccordionTrigger>
                  <AccordionContent>
                    Yes, modern grafting techniques produce very natural-looking results. The grafted tissue integrates with existing gum tissue and becomes virtually indistinguishable from the original tissue over time.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost">
                  <AccordionTrigger>What is the cost of gingival grafting?</AccordionTrigger>
                  <AccordionContent>
                    The cost varies based on the type of graft and number of teeth treated, typically ranging from ₹5,000 to ₹15,000 per tooth. We offer flexible payment plans to make treatment affordable.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ModernCardContent>
          </ModernCard>

          {/* Related Questions */}
          <ModernCard className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg">
            <ModernCardHeader>
              <ModernCardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Related Dental Questions
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    What is Periodontal Disease and How is it Treated?
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn about gum disease, its causes, symptoms, and treatment options including scaling, root planing, and surgical procedures.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/ask-the-dentist/periodontal-disease-treatment">
                      Read Answer <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    What Causes Receding Gums and How Can They be Treated?
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Discover the causes of gum recession and various treatment options including gum grafting procedures.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/ask-the-dentist/receding-gums-causes-treatment">
                      Read Answer <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    What Causes Tooth Sensitivity and How Can it be Treated?
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Understand the causes of tooth sensitivity and effective treatment options to reduce discomfort.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/ask-the-dentist/tooth-sensitivity-causes-treatment">
                      Read Answer <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Related Services */}
          <ModernCard className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg">
            <ModernCardHeader>
              <ModernCardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Related Periodontal Services
              </ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-2">Scaling and Root Planing</h3>
                  <p className="text-gray-600 text-sm mb-2">Deep cleaning procedure to remove plaque and tartar</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1-2 hours</span>
                    <span>₹3,000 - ₹6,000</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3" asChild>
                    <a href="/services/periodontics/scaling-root-planing">Learn More</a>
                  </Button>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-2">Pocket Reduction Surgery</h3>
                  <p className="text-gray-600 text-sm mb-2">Surgical procedure to reduce periodontal pockets</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1-3 hours</span>
                    <span>₹8,000 - ₹25,000</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3" asChild>
                    <a href="/services/periodontics/pocket-reduction-surgery">Learn More</a>
                  </Button>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-2">Periodontal Maintenance</h3>
                  <p className="text-gray-600 text-sm mb-2">Ongoing care to maintain gum health</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>30-60 min</span>
                    <span>₹1,500 - ₹3,000</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3" asChild>
                    <a href="/services/periodontics">Learn More</a>
                  </Button>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* CTA Section */}
          <ModernCard className="p-8 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <ModernCardHeader className="text-center">
              <ModernCardTitle className="text-3xl font-bold mb-4">
                Concerned About Gum Recession?
              </ModernCardTitle>
              <p className="text-teal-100 text-lg mb-6">
                Don't let gum recession progress. Schedule a consultation with Dr. Rockson Samuel to discuss gingival grafting and restore your gum health.
              </p>
            </ModernCardHeader>
            <ModernCardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600" asChild>
                  <a href="/ask-the-dentist/submit">
                    <Phone className="mr-2 h-5 w-5" />
                    Ask a Question
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm">Advanced grafting techniques</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm">Natural-looking results</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm">Comprehensive follow-up</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm">Long-term gum health</span>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalProcedure",
                "name": "Gingival Grafting",
                "description": "Periodontal surgical procedure to restore receded gum tissue and protect exposed tooth roots.",
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
                "followup": "Regular follow-up appointments every 2-4 weeks initially",
                "risks": "Swelling, discomfort, temporary sensitivity, graft failure"
              })
            }}
          />
        </div>
      </SectionContainer>
    </div>
  )
}
