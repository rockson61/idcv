#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Batch 3: Next 10 priority pages
const batch3Pages = [
  // Root Canal Pain Management
  {
    dir: 'app/services/root-canal-treatment/pain-management',
    slug: 'page.tsx',
    title: 'Root Canal Pain Management | Painless RCT Vellore',
    description: 'Completely painless root canal treatment. Advanced pain management by Dr. Rockson Samuel.',
    keywords: 'painless root canal, RCT pain management, root canal treatment Vellore',
    h1: 'Painless Root Canal Treatment in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Fear of pain stopping you from getting root canal? Dr. Rockson Samuel specializes in <strong>completely painless RCT</strong>
        using advanced anesthesia and modern techniques. Experience comfortable, stress-free treatment.
      </p>
    `,
    faqs: [
      { q: 'Do root canals hurt?', a: 'No, modern RCT is painless with proper anesthesia. You\'ll only feel pressure, no pain during procedure.' },
      { q: 'What pain relief is used for RCT?', a: 'Local anesthesia, sedation dentistry, and post-treatment pain medication ensure complete comfort.' },
      { q: 'How long does RCT pain last?', a: 'Mild discomfort for 2-3 days after treatment is normal. Pain medication helps manage it easily.' }
    ]
  },

  // Teeth Whitening Cost Delhi
  {
    dir: 'app/services/teeth-whitening/cost-delhi',
    slug: 'page.tsx',
    title: 'Teeth Whitening Cost in Delhi vs Vellore - Save 60%',
    description: 'Compare teeth whitening costs. Professional treatment at 60% less in Vellore.',
    keywords: 'teeth whitening cost delhi, professional bleaching price, zoom whitening',
    h1: 'Teeth Whitening Cost in Delhi vs Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Get <strong>professional teeth whitening</strong> at fraction of Delhi prices! Dr. Rockson Samuel offers
        Zoom whitening, laser bleaching, and take-home kits at 60% lower cost.
      </p>
    `,
    faqs: [
      { q: 'How much does teeth whitening cost in Delhi?', a: 'Delhi: ₹8,000-25,000. Vellore (our clinic): ₹3,000-10,000 depending on method.' },
      { q: 'Which teeth whitening is best?', a: 'Professional Zoom whitening provides fastest results (1-2 hours), home kits are gradual but effective.' },
      { q: 'How long does teeth whitening last?', a: 'Results last 1-3 years with proper care and avoiding staining foods/drinks.' }
    ]
  },

  // Teeth Whitening Mumbai
  {
    dir: 'app/services/teeth-whitening/cost-mumbai',
    slug: 'page.tsx',
    title: 'Teeth Whitening Cost in Mumbai vs Vellore',
    description: 'Save on teeth whitening - Mumbai prices vs Vellore. Same quality, 50% less cost.',
    keywords: 'teeth whitening cost mumbai, bleaching price, professional whitening',
    h1: 'Teeth Whitening Cost in Mumbai vs Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Mumbai's premium whitening at Vellore's affordable prices! Dr. Rockson Samuel delivers
        <strong>professional teeth whitening</strong> using same international products at half the cost.
      </p>
    `,
    faqs: [
      { q: 'Teeth whitening cost in Mumbai?', a: 'Mumbai: ₹10,000-30,000. Vellore (our clinic): ₹3,000-10,000 - Save ₹7,000-20,000!' },
      { q: 'Is teeth whitening safe?', a: 'Yes, professional whitening is completely safe when done by qualified dentist like Dr. Rockson Samuel.' },
      { q: 'Can I get same results in Vellore as Mumbai?', a: 'Absolutely! We use same international products and advanced technology.' }
    ]
  },

  // Orthodontics Cost Mumbai
  {
    dir: 'app/services/orthodontics/cost-mumbai',
    slug: 'page.tsx',
    title: 'Braces Cost in Mumbai vs Vellore - Price Comparison',
    description: 'Compare orthodontic treatment costs. Get braces at 40% less in Vellore.',
    keywords: 'braces cost mumbai, orthodontic treatment price, metal ceramic braces',
    h1: 'Braces Cost in Mumbai vs Vellore - Complete Guide',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Save ₹20,000-40,000 on braces</strong> by choosing Indira Dental Clinic, Vellore over Mumbai clinics.
        Dr. Rockson Samuel provides same quality orthodontic care at significantly lower prices.
      </p>
    `,
    faqs: [
      { q: 'Braces cost in Mumbai?', a: 'Mumbai: ₹45,000-1,50,000. Vellore (our clinic): ₹25,000-80,000 depending on type.' },
      { q: 'Which braces are cheapest?', a: 'Traditional metal braces are most affordable and equally effective.' },
      { q: 'How long does braces treatment take?', a: 'Typically 12-24 months depending on complexity of alignment needed.' }
    ]
  },

  // Orthodontics Cost Bangalore
  {
    dir: 'app/services/orthodontics/cost-bangalore',
    slug: 'page.tsx',
    title: 'Braces Cost in Bangalore vs Vellore - Save Money',
    description: 'Bangalore orthodontic prices vs Vellore. Quality treatment at lower cost.',
    keywords: 'braces cost bangalore, invisible braces, ceramic braces price',
    h1: 'Braces Cost in Bangalore vs Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Bangalore patients traveling to Vellore for <strong>affordable orthodontic treatment</strong>!
        Dr. Rockson Samuel offers all types of braces at 30-50% lower cost.
      </p>
    `,
    faqs: [
      { q: 'How much do braces cost in Bangalore?', a: 'Bangalore: ₹40,000-1,30,000. Vellore (our clinic): ₹25,000-80,000.' },
      { q: 'Invisible braces cost in Bangalore?', a: 'Bangalore: ₹80,000-2,00,000. Vellore (our clinic): ₹50,000-1,20,000.' },
      { q: 'Is quality same as Bangalore clinics?', a: 'Yes, same or better quality with Dr. Rockson Samuel\'s 15+ years expertise.' }
    ]
  },

  // Implants Cost Mumbai
  {
    dir: 'app/services/dental-implants/cost-mumbai',
    slug: 'page.tsx',
    title: 'Dental Implant Cost in Mumbai vs Vellore - Save ₹30K',
    description: 'Mumbai implant prices vs Vellore. Premium Straumann implants at lower cost.',
    keywords: 'dental implant cost mumbai, tooth implant price, affordable implants',
    h1: 'Dental Implant Cost in Mumbai vs Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Save ₹15,000-30,000 per implant</strong> by choosing Vellore over Mumbai!
        Dr. Rockson Samuel uses same premium brands (Straumann, Nobel Biocare) at significantly lower prices.
      </p>
    `,
    faqs: [
      { q: 'Dental implant cost in Mumbai?', a: 'Mumbai: ₹40,000-70,000 per tooth. Vellore (our clinic): ₹25,000-35,000.' },
      { q: 'Which implant brands do you use?', a: 'We use international brands: Straumann, Nobel Biocare, Osstem - same as top Mumbai clinics.' },
      { q: 'All-on-4 implants cost?', a: 'Mumbai: ₹2,50,000-3,50,000. Vellore: ₹1,50,000-2,00,000 per arch.' }
    ]
  },

  // Implants Cost Bangalore
  {
    dir: 'app/services/dental-implants/cost-bangalore',
    slug: 'page.tsx',
    title: 'Dental Implant Cost in Bangalore vs Vellore',
    description: 'Bangalore implant costs compared. Get premium implants at lower prices in Vellore.',
    keywords: 'dental implant cost bangalore, single tooth implant, full mouth implants',
    h1: 'Dental Implant Cost in Bangalore vs Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Why pay Bangalore prices? Get <strong>same quality dental implants</strong> at Indira Dental Clinic, Vellore
        for 35-45% less. Dr. Rockson Samuel uses international implants with lifetime warranty.
      </p>
    `,
    faqs: [
      { q: 'Implant cost in Bangalore?', a: 'Bangalore: ₹38,000-65,000. Vellore (our clinic): ₹25,000-35,000 per tooth.' },
      { q: 'Do implants come with warranty?', a: 'Yes, lifetime warranty on implant fixture and 5-year warranty on crown.' },
      { q: 'Is dental tourism to Vellore worth it?', a: 'Absolutely! Patients save ₹20,000+ per implant while getting expert care.' }
    ]
  },

  // Pricing Delhi
  {
    dir: 'app/pricing/delhi',
    slug: 'page.tsx',
    title: 'Dental Treatment Cost Delhi vs Vellore - Price List',
    description: 'Compare dental costs: Delhi vs Vellore. Save 40-60% on all treatments.',
    keywords: 'dental cost delhi, price comparison, affordable dentist Vellore',
    h1: 'Delhi vs Vellore Dental Treatment Cost Comparison',
    content: `
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
    `,
    faqs: [
      { q: 'Why is dental treatment cheaper in Vellore?', a: 'Lower operational costs, no commercial rent, and focus on patient care over marketing expenses.' },
      { q: 'Is quality compromised for lower prices?', a: 'Absolutely not! We use same materials, technology, and international standards as top Delhi clinics.' },
      { q: 'Do Delhi patients come to Vellore?', a: 'Yes, many patients from Delhi, NCR travel to Vellore for significant savings on expensive treatments.' }
    ]
  },

  // Pricing Mumbai
  {
    dir: 'app/pricing/mumbai',
    slug: 'page.tsx',
    title: 'Dental Cost Mumbai vs Vellore - Price Comparison 2025',
    description: 'Mumbai dental prices compared to Vellore. Save up to 50% on all treatments.',
    keywords: 'dental cost mumbai, price comparison, dental tourism Vellore',
    h1: 'Mumbai vs Vellore Dental Treatment Price Comparison',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Mumbai residents are discovering <strong>huge savings</strong> by getting dental treatment in Vellore!
        Indira Dental Clinic offers world-class care at prices 40-60% lower than Mumbai.
      </p>
    `,
    faqs: [
      { q: 'How much cheaper is Vellore than Mumbai?', a: 'Average savings of 40-60% on all major dental treatments including implants, braces, and RCT.' },
      { q: 'Is it worth traveling to Vellore?', a: 'Yes! Savings of ₹50,000-1,00,000 on major treatments easily cover travel costs with significant savings.' },
      { q: 'Do you help with accommodation?', a: 'Yes, we provide assistance with nearby hotels and guest houses for outstation patients.' }
    ]
  },

  // Dentures Cost Comparison
  {
    dir: 'app/services/dentures/complete-dentures-cost',
    slug: 'page.tsx',
    title: 'Complete Dentures Cost in Vellore | Full Set Price',
    description: 'Affordable complete dentures cost. Quality artificial teeth by Dr. Rockson Samuel.',
    keywords: 'complete dentures cost, full set dentures, artificial teeth price',
    h1: 'Complete Dentures Cost & Price Guide in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Need <strong>full set of teeth</strong>? Dr. Rockson Samuel provides high-quality <strong>complete dentures</strong>
        at affordable prices. Natural appearance, comfortable fit, and lasting durability.
      </p>
    `,
    faqs: [
      { q: 'How much do complete dentures cost?', a: 'Acrylic dentures: ₹8,000-15,000 per arch. Flexible dentures: ₹15,000-25,000 per arch.' },
      { q: 'How long do dentures last?', a: 'With proper care, dentures last 5-10 years before needing replacement.' },
      { q: 'Can I eat normally with dentures?', a: 'Yes, after adjustment period (2-4 weeks), you can eat most foods normally.' }
    ]
  },

  // Partial Dentures Cost
  {
    dir: 'app/services/dentures/partial-dentures-cost',
    slug: 'page.tsx',
    title: 'Partial Dentures Cost in Vellore | Removable Teeth',
    description: 'Affordable partial dentures for missing teeth. Expert fitting by Dr. Rockson Samuel.',
    keywords: 'partial dentures cost, removable partial denture, missing teeth solution',
    h1: 'Partial Dentures Cost & Options in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Replace <strong>missing teeth</strong> affordably with <strong>partial dentures</strong>. Dr. Rockson Samuel
        creates custom-fitted removable dentures that look natural and feel comfortable.
      </p>
    `,
    faqs: [
      { q: 'Partial denture cost?', a: 'Acrylic base: ₹5,000-10,000. Metal frame (cast partial): ₹12,000-20,000.' },
      { q: 'Partial denture vs dental bridge?', a: 'Partial dentures are removable and less expensive. Bridges are fixed and more permanent.' },
      { q: 'How many teeth can partial denture replace?', a: 'Can replace 1 to 14 teeth in same arch depending on your needs.' }
    ]
  },

  // Teeth Cleaning Charges
  {
    dir: 'app/services/general-dentistry/teeth-cleaning',
    slug: 'cost/page.tsx',
    title: 'Teeth Cleaning Charges in Vellore | Scaling Cost',
    description: 'Affordable teeth cleaning and scaling charges. Professional service at low cost.',
    keywords: 'teeth cleaning charges, scaling cost, dental cleaning price',
    h1: 'Teeth Cleaning & Scaling Charges in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Professional teeth cleaning</strong> at most affordable rates! Dr. Rockson Samuel recommends
        teeth cleaning every 6 months for optimal oral health.
      </p>
    `,
    faqs: [
      { q: 'How much does teeth cleaning cost?', a: 'Basic cleaning: ₹500-800. Deep cleaning (scaling & polishing): ₹1,000-1,500.' },
      { q: 'Is teeth cleaning painful?', a: 'No, modern ultrasonic cleaning is virtually painless. Slight sensitivity is normal.' },
      { q: 'How often should I get teeth cleaned?', a: 'Every 6 months for most people. Every 3-4 months if you have gum disease.' }
    ]
  },

  // Bad Breath (Halitosis) Main Info Page
  {
    dir: 'app/services/bad-breath-treatment',
    slug: 'halitosis-cure/page.tsx',
    title: 'Halitosis Cure in Vellore | Permanent Bad Breath Solution',
    description: 'Permanent cure for halitosis (chronic bad breath). Expert diagnosis and treatment by Dr. Rockson Samuel.',
    keywords: 'halitosis cure, chronic bad breath, permanent solution, Vellore',
    h1: 'Halitosis (Chronic Bad Breath) Cure in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Chronic bad breath</strong> (halitosis) can indicate serious dental or medical issues. Dr. Rockson Samuel
        provides comprehensive diagnosis to identify root cause and deliver <strong>permanent cure</strong>.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Causes of Halitosis</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
        <li><strong>Poor oral hygiene</strong> - Most common cause</li>
        <li><strong>Gum disease</strong> (periodontitis) - Bacterial infection</li>
        <li><strong>Dry mouth</strong> (xerostomia) - Reduced saliva flow</li>
        <li><strong>Tooth decay</strong> and <strong>cavities</strong> - Hidden infection</li>
        <li><strong>Tongue coating</strong> - Bacterial buildup on tongue</li>
        <li><strong>Stomach problems</strong> - Acid reflux, H. pylori</li>
        <li><strong>Smoking</strong> and tobacco use</li>
        <li><strong>Certain foods</strong> - Onions, garlic, coffee</li>
      </ul>
    `,
    faqs: [
      { q: 'Can halitosis be cured permanently?', a: 'Yes, by identifying and treating the underlying cause - usually dental issues like gum disease or cavities.' },
      { q: 'What is the best treatment for halitosis?', a: 'Professional dental cleaning, treating gum disease, improving oral hygiene, and addressing any medical causes.' },
      { q: 'How to test for halitosis?', a: 'Dr. Rockson Samuel uses halimeter test to measure sulfur compounds and determine cause of bad breath.' }
    ]
  },

  // Tooth Decay Home Treatment
  {
    dir: 'app/services/general-dentistry',
    slug: 'tooth-decay-treatment/page.tsx',
    title: 'Tooth Decay Treatment in Vellore | Cavity Cure',
    description: 'Effective tooth decay and cavity treatment. Expert care by Dr. Rockson Samuel.',
    keywords: 'tooth decay treatment, cavity treatment, dental caries, Vellore',
    h1: 'Tooth Decay & Cavity Treatment in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Stop tooth decay</strong> before it's too late! Dr. Rockson Samuel provides comprehensive
        <strong>cavity treatment</strong> from fillings to root canals, saving your natural teeth.
      </p>
    `,
    faqs: [
      { q: 'Can tooth decay be reversed?', a: 'Early decay (demineralization) can be reversed with fluoride. Advanced decay needs filling or RCT.' },
      { q: 'What are stages of tooth decay?', a: 'Stage 1: White spots. Stage 2: Enamel decay. Stage 3: Dentin decay. Stage 4: Pulp involvement. Stage 5: Abscess.' },
      { q: 'Home remedies for tooth decay?', a: 'Fluoride rinse, salt water, clove oil, and oil pulling help, but professional treatment is essential.' }
    ]
  },

  // Dental Cleaning Cost Bangalore
  {
    dir: 'app/services/general-dentistry/teeth-cleaning',
    slug: 'cost-bangalore/page.tsx',
    title: 'Teeth Cleaning Cost in Bangalore vs Vellore',
    description: 'Compare teeth cleaning prices. Professional scaling at lower cost in Vellore.',
    keywords: 'teeth cleaning cost bangalore, scaling price, dental cleaning',
    h1: 'Teeth Cleaning Cost in Bangalore vs Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Professional teeth cleaning</strong> at prices 40% lower than Bangalore!
        Dr. Rockson Samuel uses ultrasonic scaling for thorough, painless cleaning.
      </p>
    `,
    faqs: [
      { q: 'Teeth cleaning cost in Bangalore?', a: 'Bangalore: ₹1,200-2,500. Vellore (our clinic): ₹500-1,500 for complete cleaning.' },
      { q: 'What is included in teeth cleaning?', a: 'Ultrasonic scaling, manual scaling, polishing, fluoride treatment, and oral hygiene instructions.' },
      { q: 'Is scaling harmful?', a: 'No, professional scaling by qualified dentist is safe and essential for gum health.' }
    ]
  }
];

// Template (same as before)
const generateServicePage = (page) => `import { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTAWidget } from "@/components/cta-widget"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Star, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "${page.title} | Indira Dental Clinic",
  description: "${page.description}",
  keywords: "${page.keywords}",
  openGraph: {
    title: "${page.title}",
    description: "${page.description}",
    images: ['/dental-clinic-vellore.jpg'],
  },
}

export default function ServicePage() {
  const faqs = ${JSON.stringify(page.faqs, null, 2)}

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "${page.h1}",
            "description": "${page.description}",
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
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: '${page.h1.split(' in ')[0]}' }]} />
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="text-4xl md:text-5xl text-gray-900">${page.h1}</ModernCardTitle>
            <p className="text-xl text-gray-600 mt-4">Expert Care by Dr. Rockson Samuel at Indira Dental Clinic</p>
          </ModernCardHeader>
          <ModernCardContent>
            ${page.content}
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
                <AccordionItem key={index} value={\`item-\${index}\`}>
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
`;

// Create files
console.log('🚀 Generating Batch 3 Service Pages...\n');

let created = 0;
let errors = 0;

batch3Pages.forEach((page) => {
  try {
    const fullPath = path.join(__dirname, '..', page.dir);
    const filePath = path.join(fullPath, page.slug);

    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }

    const pageContent = generateServicePage(page);
    fs.writeFileSync(filePath, pageContent);

    created++;
    console.log(`✅ Created: ${page.title}`);
  } catch (error) {
    errors++;
    console.error(`❌ Error:`, error.message);
  }
});

console.log(`\n📊 Batch 3 Complete!`);
console.log(`✅ Created: ${created} pages`);
console.log(`\n🎯 Total New Service Pages: 30`);

