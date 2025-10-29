import { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Star, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Teeth Whitening Home Remedies | Natural Methods | Indira Dental Clinic",
  description: "Safe and effective teeth whitening home remedies. Expert tips from Dr. Rockson Samuel.",
  keywords: "teeth whitening home remedies, natural teeth whitening, teeth ko white kaise kare",
  openGraph: {
    title: "Teeth Whitening Home Remedies | Natural Methods",
    description: "Safe and effective teeth whitening home remedies. Expert tips from Dr. Rockson Samuel.",
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function ServicePage() {
  const faqs = [
  {
    "q": "Does baking soda whiten teeth?",
    "a": "Yes, baking soda can help remove surface stains, but use it sparingly to avoid enamel damage."
  },
  {
    "q": "How to whiten teeth naturally at home?",
    "a": "Brush with baking soda, use hydrogen peroxide rinse, eat crunchy fruits, and avoid staining foods."
  },
  {
    "q": "Are home remedies safe for teeth whitening?",
    "a": "Most are safe when used correctly, but professional whitening is safer and more effective."
  }
]

  return (
    <>
      {/* Medical Procedure Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Natural Teeth Whitening Home Remedies",
            "description": "Safe and effective teeth whitening home remedies. Expert tips from Dr. Rockson Samuel.",
            "provider": {
              "@type": "Dentist",
              "name": "Dr. Rockson Samuel",
              "url": "https://www.google.com/maps?cid=14385819900995297414"
            },
            "availableService": {
              "@type": "MedicalTherapy",
              "name": "Natural Teeth Whitening Home Remedies"
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Services', href: '/services' },
            { title: 'Natural Teeth Whitening Home Remedies', href: '#' }
          ]}
        />

        {/* Hero Section */}
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="text-4xl md:text-5xl text-gray-900">
              Natural Teeth Whitening Home Remedies
            </ModernCardTitle>
            <p className="text-xl text-gray-600 mt-4">
              Expert Care by Dr. Rockson Samuel at Indira Dental Clinic
            </p>
          </ModernCardHeader>
          <ModernCardContent>
            
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Want <strong>whiter teeth naturally</strong>? Dr. Rockson Samuel shares safe <strong>home remedies 
        for teeth whitening</strong>. While home methods can help, professional whitening provides faster 
        and more dramatic results.
      </p>
    

            {/* Quick Contact */}
            <div className="grid md:grid-cols-2 gap-4 mt-8 p-6 bg-teal-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-600">Emergency Helpline</p>
                  <a href="tel:+919876543210" className="text-lg font-semibold text-teal-600 hover:text-teal-800">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-600">Visit Us</p>
                  <a 
                    href="https://www.google.com/maps?cid=14385819900995297414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-teal-600 hover:text-teal-800"
                  >
                    Gandhi Nagar, Vellore
                  </a>
                </div>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Why Choose Us */}
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="flex items-center gap-2">
              <Star className="w-6 h-6 text-teal-600" />
              Why Choose Indira Dental Clinic?
            </ModernCardTitle>
          </ModernCardHeader>
          <ModernCardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">15+ Years Experience</h3>
                  <p className="text-gray-600 text-sm">Dr. Rockson Samuel - Expert dental surgeon with advanced training</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">500+ Google Reviews</h3>
                  <p className="text-gray-600 text-sm">4.9/5 rating - Trusted by patients across Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Latest Technology</h3>
                  <p className="text-gray-600 text-sm">State-of-the-art equipment for painless treatments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Affordable Pricing</h3>
                  <p className="text-gray-600 text-sm">50% lower costs than metro cities, flexible payment plans</p>
                </div>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* FAQs */}
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle>Frequently Asked Questions</ModernCardTitle>
          </ModernCardHeader>
          <ModernCardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ModernCardContent>
        </ModernCard>

        {/* CTA */}
        <CTAWidget
          title="Book Your Appointment"
          description="Experience expert dental care with Dr. Rockson Samuel"
          primaryAction={{ text: "Book Appointment", href: "/contact" }}
          secondaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
        />
      </div>
    </>
  )
}
