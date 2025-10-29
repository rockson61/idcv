import { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Star, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bad Breath Treatment in Vellore | Indira Dental Clinic",
  description: "Complete halitosis cure and bad breath treatment by Dr. Rockson Samuel at Indira Dental Clinic, Vellore.",
  keywords: "bad breath treatment, halitosis cure, मुंह की बदबू, Vellore",
  openGraph: {
    title: "Bad Breath Treatment in Vellore",
    description: "Complete halitosis cure and bad breath treatment by Dr. Rockson Samuel at Indira Dental Clinic, Vellore.",
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function ServicePage() {
  const faqs = [
  {
    "q": "What causes bad breath?",
    "a": "Common causes include poor oral hygiene, gum disease, dry mouth, smoking, certain foods, and stomach problems."
  },
  {
    "q": "Can bad breath be cured permanently?",
    "a": "Yes, with proper diagnosis and treatment, most cases of bad breath can be permanently cured."
  },
  {
    "q": "What are home remedies for bad breath?",
    "a": "Brush twice daily, floss regularly, use mouthwash, stay hydrated, and eat crunchy fruits and vegetables."
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
            "name": "Bad Breath Treatment (Halitosis Cure) in Vellore",
            "description": "Complete halitosis cure and bad breath treatment by Dr. Rockson Samuel at Indira Dental Clinic, Vellore.",
            "provider": {
              "@type": "Dentist",
              "name": "Dr. Rockson Samuel",
              "url": "https://www.google.com/maps?cid=14385819900995297414"
            },
            "availableService": {
              "@type": "MedicalTherapy",
              "name": "Bad Breath Treatment (Halitosis Cure) in Vellore"
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
            { title: 'Bad Breath Treatment (Halitosis Cure)', href: '#' }
          ]}
        />

        {/* Hero Section */}
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="text-4xl md:text-5xl text-gray-900">
              Bad Breath Treatment (Halitosis Cure) in Vellore
            </ModernCardTitle>
            <p className="text-xl text-gray-600 mt-4">
              Expert Care by Dr. Rockson Samuel at Indira Dental Clinic
            </p>
          </ModernCardHeader>
          <ModernCardContent>
            
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Suffering from <strong>persistent bad breath</strong> (halitosis)? At <strong>Indira Dental Clinic, Vellore</strong>, 
        Dr. Rockson Samuel provides comprehensive <strong>bad breath treatment</strong> to identify root causes and deliver 
        permanent solutions. Don't let bad breath affect your confidence and relationships.
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
