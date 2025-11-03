import { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MarketingContent } from '@/components/marketing/MarketingContent'
import { CheckCircle2, Star, Phone, MapPin } from "lucide-react"
import Link from 'next/link'

const marketingIntro = {
  eyebrow: 'Transparent Pricing',
  heading: 'Affordable dentistry without surprise add-ons',
  description:
    'Indira Dental Clinic believes world-class dentistry should stay within reach. Explore how our pricing philosophy, financing options, and preventive focus keep treatments predictable and budget-friendly.',
}

const marketingSections = [
  {
    id: 'pricing-philosophy',
    eyebrow: 'Cost Philosophy',
    heading: 'Every rupee explained before you sit in the chair',
    content: [
      'We price treatments based on clinical time, materials, and specialist involvement—never on hidden chairside fees. From simple fillings to full-mouth implants, you receive a printed quote, procedure outline, and maintenance plan before we begin.',
    ],
    bullets: [
      'Detailed estimates for each treatment phase, including follow-up visits',
      'Optional upgrades (ceramic, zirconia, aligners) clearly labelled',
      'No weekend or emergency surcharges for existing patients',
      'Annual preventive packages to reduce long-term costs',
    ],
  },
  {
    id: 'payment-support',
    eyebrow: 'Payment Support',
    heading: 'Flexible payment solutions designed for families, students, and NRIs',
    highlights: [
      { title: '0% EMI plans', description: 'Partnered financiers spread implant, aligner, and smile makeover costs over 6–18 months with zero hidden fees.' },
      { title: 'Insurance desk', description: 'We assist with cashless tie-ups, reimbursement paperwork, and pre-authorisations so you maximise coverage.' },
      { title: 'Group & corporate rates', description: 'Family and employee plans unlock bundled preventive care and cosmetic upgrades.' },
      { title: 'Dental tourism bundles', description: 'International patients receive treatment + accommodation itineraries costing 70% less than Western clinics.' },
    ],
  },
  {
    id: 'value-drivers',
    eyebrow: 'Value Drivers',
    heading: 'What’s included in every treatment quote',
    bullets: [
      'Digital diagnostics (CBCT, intraoral scans, photography) and detailed case discussions',
      'Sterilisation & safety consumables meeting ISO standards',
      'Post-treatment reviews, WhatsApp follow-ups, and maintenance plans',
      'Access to multi-specialist board opinions for complex cases at no extra charge',
    ],
  },
]

const marketingFaqs = [
  {
    question: 'Can I split my treatment into phases to manage cost?',
    answer: 'Yes. We routinely sequence restorative and cosmetic treatments over multiple visits so you can prioritise urgent care while budgeting for long-term goals.',
  },
  {
    question: 'Do treatment quotes include lab work and follow-up visits?',
    answer: 'Absolutely. All lab costs, provisional restorations, and scheduled reviews are itemised upfront so you know the full investment from day one.',
  },
  {
    question: 'Are student or senior citizen discounts available?',
    answer: 'We offer seasonal preventive and orthodontic discounts for students, seniors, and healthcare professionals. Ask our coordinators for the latest offers when you book.',
  },
]

const marketingCTA = {
  heading: 'Ready for a transparent treatment estimate?',
  description: 'Share your X-rays or smile goals and receive a personalised plan with clear pricing, financing options, and timelines before your first visit.',
  primary: { text: 'Request a personalised quote', href: '/contact' },
  secondary: { text: 'Call 7010 650 063', href: 'tel:+917010650063' },
  tertiary: { text: 'WhatsApp our coordinators', href: 'https://wa.me/917010650063' },
}

export const metadata: Metadata = {
  title: "Dental Treatment Cost in Vellore | Price List 2025 | Indira Dental Clinic",
  description: "Complete dental treatment price list at Indira Dental Clinic, Vellore. Transparent pricing, no hidden costs.",
  keywords: "dental treatment cost, price list, Vellore, affordable dentist",
  openGraph: {
    title: "Dental Treatment Cost in Vellore | Price List 2025",
    description: "Complete dental treatment price list at Indira Dental Clinic, Vellore. Transparent pricing, no hidden costs.",
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function ServicePage() {
  const faqs = [
  {
    "q": "How much does dental treatment cost in Vellore?",
    "a": "Costs vary by treatment. Basic checkup ₹500, fillings ₹1,000-2,500, RCT ₹3,500-10,000, implants ₹25,000-35,000."
  },
  {
    "q": "Do you accept insurance?",
    "a": "Yes, we accept most dental insurance plans. Contact us for details."
  },
  {
    "q": "Are payment plans available?",
    "a": "Yes, we offer flexible payment plans for expensive treatments like implants and orthodontics."
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
            "name": "Dental Treatment Cost & Price List in Vellore",
            "description": "Complete dental treatment price list at Indira Dental Clinic, Vellore. Transparent pricing, no hidden costs.",
            "provider": {
              "@type": "Dentist",
              "name": "Dr. Rockson Samuel",
              "url": "https://www.google.com/maps?cid=14385819900995297414"
            },
            "availableService": {
              "@type": "MedicalTherapy",
              "name": "Dental Treatment Cost & Price List in Vellore"
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
            { title: 'Dental Treatment Cost & Price List', href: '#' }
          ]}
        />

        {/* Hero Section */}
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="text-4xl md:text-5xl text-gray-900">
              Dental Treatment Cost & Price List in Vellore
            </ModernCardTitle>
            <p className="text-xl text-gray-600 mt-4">
              Expert Care by Dr. Rockson Samuel at Indira Dental Clinic
            </p>
          </ModernCardHeader>
          <ModernCardContent>
            
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Transparent pricing, no hidden costs</strong> at <strong>Indira Dental Clinic</strong>. 
        Dr. Rockson Samuel provides world-class dental care at <strong>50% lower costs</strong> than metro cities. 
        View our complete price list and payment options.
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

        <MarketingContent
          intro={marketingIntro}
          sections={marketingSections}
          faqs={marketingFaqs}
          cta={marketingCTA}
        />

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
