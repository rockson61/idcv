import { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Star, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dental Implant Cost in Delhi vs Vellore - Save 40% | Indira Dental Clinic",
  description: "Compare dental implant costs. Get premium implants at 40% less in Vellore.",
  keywords: "dental implant cost delhi, tooth implant price, affordable implants",
  openGraph: {
    title: "Dental Implant Cost in Delhi vs Vellore - Save 40%",
    description: "Compare dental implant costs. Get premium implants at 40% less in Vellore.",
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function ServicePage() {
  const faqs = [
  {
    "q": "How much does tooth implant cost in Delhi?",
    "a": "Delhi: ₹35,000-60,000 per tooth. Vellore (our clinic): ₹25,000-35,000 - Save ₹10,000-25,000!"
  },
  {
    "q": "Why are implants cheaper in Vellore?",
    "a": "Lower overhead costs and operational expenses while maintaining international quality standards."
  },
  {
    "q": "Do you use original implants?",
    "a": "Yes, we use only genuine Straumann, Nobel Biocare, and other premium international brands."
  }
]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Dental Implant Cost in Delhi vs Vellore",
            "description": "Compare dental implant costs. Get premium implants at 40% less in Vellore.",
            "provider": {
              "@type": "Dentist",
              "name": "Dr. Rockson Samuel",
              "url": "https://www.google.com/maps?cid=14385819900995297414"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Dental Implant Cost', href: '#' }]} />
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="text-4xl md:text-5xl text-gray-900">Dental Implant Cost in Delhi vs Vellore</ModernCardTitle>
            <p className="text-xl text-gray-600 mt-4">Expert Care by Dr. Rockson Samuel at Indira Dental Clinic</p>
          </ModernCardHeader>
          <ModernCardContent>
            
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Premium <strong>dental implants at 40% lower cost</strong> in Vellore. Dr. Rockson Samuel uses same international
        brands (Straumann, Nobel Biocare) at significantly lower prices than Delhi clinics.
      </p>
    
            <div className="grid md:grid-cols-2 gap-4 mt-8 p-6 bg-teal-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-600">Emergency Helpline</p>
                  <a href="tel:+919876543210" className="text-lg font-semibold text-teal-600 hover:text-teal-800">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-600">Visit Us</p>
                  <a href="https://www.google.com/maps?cid=14385819900995297414" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-teal-600 hover:text-teal-800">Gandhi Nagar, Vellore</a>
                </div>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>

        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="flex items-center gap-2"><Star className="w-6 h-6 text-teal-600" />Why Choose Indira Dental Clinic?</ModernCardTitle>
          </ModernCardHeader>
          <ModernCardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">15+ Years Experience</h3>
                  <p className="text-gray-600 text-sm">Dr. Rockson Samuel - Expert dental surgeon</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">500+ Google Reviews</h3>
                  <p className="text-gray-600 text-sm">4.9/5 rating - Trusted across Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Latest Technology</h3>
                  <p className="text-gray-600 text-sm">Painless treatments with advanced equipment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Affordable Pricing</h3>
                  <p className="text-gray-600 text-sm">50% lower than metro cities</p>
                </div>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>

        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle>Frequently Asked Questions</ModernCardTitle>
          </ModernCardHeader>
          <ModernCardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-gray-900">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ModernCardContent>
        </ModernCard>

        <CTAWidget />
      </div>
    </>
  )
}
