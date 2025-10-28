import { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Star, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Partial Dentures Cost in Vellore | Removable Teeth | Indira Dental Clinic",
  description: "Affordable partial dentures for missing teeth. Expert fitting by Dr. Rockson Samuel.",
  keywords: "partial dentures cost, removable partial denture, missing teeth solution",
  openGraph: {
    title: "Partial Dentures Cost in Vellore | Removable Teeth",
    description: "Affordable partial dentures for missing teeth. Expert fitting by Dr. Rockson Samuel.",
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function ServicePage() {
  const faqs = [
  {
    "q": "Partial denture cost?",
    "a": "Acrylic base: ₹5,000-10,000. Metal frame (cast partial): ₹12,000-20,000."
  },
  {
    "q": "Partial denture vs dental bridge?",
    "a": "Partial dentures are removable and less expensive. Bridges are fixed and more permanent."
  },
  {
    "q": "How many teeth can partial denture replace?",
    "a": "Can replace 1 to 14 teeth in same arch depending on your needs."
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
            "name": "Partial Dentures Cost & Options in Vellore",
            "description": "Affordable partial dentures for missing teeth. Expert fitting by Dr. Rockson Samuel.",
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
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Partial Dentures Cost & Options' }]} />
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="text-4xl md:text-5xl text-gray-900">Partial Dentures Cost & Options in Vellore</ModernCardTitle>
            <p className="text-xl text-gray-600 mt-4">Expert Care by Dr. Rockson Samuel at Indira Dental Clinic</p>
          </ModernCardHeader>
          <ModernCardContent>
            
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Replace <strong>missing teeth</strong> affordably with <strong>partial dentures</strong>. Dr. Rockson Samuel
        creates custom-fitted removable dentures that look natural and feel comfortable.
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
                  <p className="text-gray-600 text-sm">40-60% lower than metro cities</p>
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
