import { Metadata } from "next"
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Star, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Root Canal Cost in Delhi vs Vellore - Price Guide | Indira Dental Clinic",
  description: "RCT cost comparison. Save 50% at Indira Dental Clinic, Vellore.",
  keywords: "root canal cost delhi, rct price, root canal charges",
  openGraph: {
    title: "Root Canal Cost in Delhi vs Vellore - Price Guide",
    description: "RCT cost comparison. Save 50% at Indira Dental Clinic, Vellore.",
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function ServicePage() {
  const faqs = [
  {
    "q": "How much does RCT cost in Delhi?",
    "a": "Delhi: ₹5,000-15,000. Vellore (our clinic): ₹3,500-10,000 depending on tooth type."
  },
  {
    "q": "Is root canal painful?",
    "a": "No, modern RCT is completely painless with local anesthesia and advanced techniques."
  },
  {
    "q": "How many sittings for RCT?",
    "a": "Usually 1-2 sittings. Single-sitting RCT is available for most cases."
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
            "name": "Root Canal Treatment Cost in Delhi vs Vellore",
            "description": "RCT cost comparison. Save 50% at Indira Dental Clinic, Vellore.",
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
		<SectionContainer className="py-12">
			<ServiceSemanticContent serviceName="Cost Delhi" serviceSlug="cost-delhi" />
		</SectionContainer>

        <Breadcrumb 
		<PageHeader title="Cost Delhi" subtitle="Expert care with modern technology" />
items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Root Canal Treatment Cost', href: '#' }]} />
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="text-4xl md:text-5xl text-gray-900">Root Canal Treatment Cost in Delhi vs Vellore</ModernCardTitle>
            <p className="text-xl text-gray-600 mt-4">Expert Care by Dr. Rockson Samuel at Indira Dental Clinic</p>
          </ModernCardHeader>
          <ModernCardContent>
            
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Painless root canal treatment</strong> at half the Delhi prices! Dr. Rockson Samuel provides
        world-class RCT using latest technology at affordable rates.
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

        <CTAWidget
          title="Book Your Appointment in Delhi"
          description="Compare costs and book your dental treatment"
          primaryAction={{ text: "Book Appointment", href: "/contact" }}
          secondaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
        />
      </div>
    </>
  )
}
