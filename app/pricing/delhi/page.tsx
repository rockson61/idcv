import { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Star, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Treatment Cost Delhi vs Vellore - Price List | Indira Dental Clinic",
  description: "Compare dental costs: Delhi vs Vellore. Save 40-60% on all treatments.",
  keywords: "dental cost delhi, price comparison, affordable dentist Vellore",
  openGraph: {
    title: "Dental Treatment Cost Delhi vs Vellore - Price List",
    description: "Compare dental costs: Delhi vs Vellore. Save 40-60% on all treatments.",
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function ServicePage() {
  const faqs = [
  {
    "q": "Why is dental treatment cheaper in Vellore?",
    "a": "Lower operational costs, no commercial rent, and focus on patient care over marketing expenses."
  },
  {
    "q": "Is quality compromised for lower prices?",
    "a": "Absolutely not! We use same materials, technology, and international standards as top Delhi clinics."
  },
  {
    "q": "Do Delhi patients come to Vellore?",
    "a": "Yes, many patients from Delhi, NCR travel to Vellore for significant savings on expensive treatments."
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
            "name": "Delhi vs Vellore Dental Treatment Cost Comparison",
            "description": "Compare dental costs: Delhi vs Vellore. Save 40-60% on all treatments.",
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
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Delhi vs Vellore Dental Treatment Cost Comparison' }]} />
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="text-4xl md:text-5xl text-gray-900">Delhi vs Vellore Dental Treatment Cost Comparison</ModernCardTitle>
            <p className="text-xl text-gray-600 mt-4">Expert Care by Dr. Rockson Samuel at Indira Dental Clinic</p>
          </ModernCardHeader>
          <ModernCardContent>
            
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Save 40-60% on dental treatments</strong> compared to Delhi! Indira Dental Clinic offers
        world-class care at affordable prices without compromising quality.
      </p>
      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-teal-50">
              <th className="border border-gray-300 px-4 py-3 text-left">Treatment</th>
              <th className="border border-gray-300 px-4 py-3 text-right">Delhi Price</th>
              <th className="border border-gray-300 px-4 py-3 text-right">Vellore Price</th>
              <th className="border border-gray-300 px-4 py-3 text-right">You Save</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Root Canal (Molar)</td>
              <td className="border border-gray-300 px-4 py-3 text-right">₹12,000-18,000</td>
              <td className="border border-gray-300 px-4 py-3 text-right">₹7,000-10,000</td>
              <td className="border border-gray-300 px-4 py-3 text-right font-semibold text-green-600">₹5,000-8,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">Single Implant</td>
              <td className="border border-gray-300 px-4 py-3 text-right">₹40,000-65,000</td>
              <td className="border border-gray-300 px-4 py-3 text-right">₹25,000-35,000</td>
              <td className="border border-gray-300 px-4 py-3 text-right font-semibold text-green-600">₹15,000-30,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Teeth Whitening</td>
              <td className="border border-gray-300 px-4 py-3 text-right">₹10,000-25,000</td>
              <td className="border border-gray-300 px-4 py-3 text-right">₹4,000-10,000</td>
              <td className="border border-gray-300 px-4 py-3 text-right font-semibold text-green-600">₹6,000-15,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">Metal Braces (Full)</td>
              <td className="border border-gray-300 px-4 py-3 text-right">₹45,000-80,000</td>
              <td className="border border-gray-300 px-4 py-3 text-right">₹30,000-50,000</td>
              <td className="border border-gray-300 px-4 py-3 text-right font-semibold text-green-600">₹15,000-30,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Invisalign</td>
              <td className="border border-gray-300 px-4 py-3 text-right">₹1,50,000-3,00,000</td>
              <td className="border border-gray-300 px-4 py-3 text-right">₹80,000-1,50,000</td>
              <td className="border border-gray-300 px-4 py-3 text-right font-semibold text-green-600">₹70,000-1,50,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    
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
