import { Metadata } from "next"
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'
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
  title: "Pyria Treatment in Vellore | Pyorrhea Cure | Indira Dental Clinic",
  description: "Complete pyria (pyorrhea) treatment by Dr. Rockson Samuel at Indira Dental Clinic, Vellore.",
  keywords: "pyria treatment, pyorrhea cure, gum disease, Vellore",
  openGraph: {
    title: "Pyria Treatment in Vellore | Pyorrhea Cure",
    description: "Complete pyria (pyorrhea) treatment by Dr. Rockson Samuel at Indira Dental Clinic, Vellore.",
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function ServicePage() {
  const faqs = [
  {
    "q": "What is pyria disease?",
    "a": "Pyria (periodontitis) is an advanced gum infection causing inflammation, bleeding, and bone loss around teeth."
  },
  {
    "q": "Can pyria be cured?",
    "a": "Yes, with professional deep cleaning, antibiotics, and in severe cases, surgical treatment can cure pyria."
  },
  {
    "q": "What is the best medicine for pyria?",
    "a": "Treatment includes antibiotics, antimicrobial mouthwash, and professional cleaning. Consult Dr. Rockson Samuel for personalized treatment."
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
            "name": "Pyria (Pyorrhea) Treatment in Vellore",
            "description": "Complete pyria (pyorrhea) treatment by Dr. Rockson Samuel at Indira Dental Clinic, Vellore.",
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
			<ServiceSemanticContent serviceName="Pyria Treatment" serviceSlug="pyria-treatment" />
		</SectionContainer>

        <Breadcrumb 
		<PageHeader title="Pyria Treatment" subtitle="Expert care with modern technology" />
items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Pyria (Pyorrhea) Treatment', href: '#' }]} />
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="text-4xl md:text-5xl text-gray-900">Pyria (Pyorrhea) Treatment in Vellore</ModernCardTitle>
            <p className="text-xl text-gray-600 mt-4">Expert Care by Dr. Rockson Samuel at Indira Dental Clinic</p>
          </ModernCardHeader>
          <ModernCardContent>
            
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Pyria (Pyorrhea)</strong> is a serious gum infection that damages soft tissue and destroys bone supporting your teeth.
        Dr. Rockson Samuel at <strong>Indira Dental Clinic</strong> provides advanced <strong>pyria treatment</strong> to save your teeth
        and restore gum health permanently.
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
          title="Book Your Appointment"
          description="Experience expert dental care with Dr. Rockson Samuel"
          primaryAction={{ text: "Book Appointment", href: "/contact" }}
          secondaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
        />
      </div>
    </>
  
		<StandardServiceLayout serviceName="Pyria Treatment" serviceSlug="pyria-treatment" showPriceComparison={false} />
)
}
