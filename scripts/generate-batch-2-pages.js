#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Batch 2: Next 10 priority pages
const batch2Pages = [
  // Pyria Treatment
  {
    dir: 'app/services/periodontics/pyria-treatment',
    slug: 'page.tsx',
    title: 'Pyria Treatment in Vellore | Pyorrhea Cure',
    description: 'Complete pyria (pyorrhea) treatment by Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
    keywords: 'pyria treatment, pyorrhea cure, gum disease, Vellore',
    h1: 'Pyria (Pyorrhea) Treatment in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Pyria (Pyorrhea)</strong> is a serious gum infection that damages soft tissue and destroys bone supporting your teeth.
        Dr. Rockson Samuel at <strong>Indira Dental Clinic</strong> provides advanced <strong>pyria treatment</strong> to save your teeth
        and restore gum health permanently.
      </p>
    `,
    faqs: [
      { q: 'What is pyria disease?', a: 'Pyria (periodontitis) is an advanced gum infection causing inflammation, bleeding, and bone loss around teeth.' },
      { q: 'Can pyria be cured?', a: 'Yes, with professional deep cleaning, antibiotics, and in severe cases, surgical treatment can cure pyria.' },
      { q: 'What is the best medicine for pyria?', a: 'Treatment includes antibiotics, antimicrobial mouthwash, and professional cleaning. Consult Dr. Rockson Samuel for personalized treatment.' }
    ]
  },

  // Laser Gum Treatment
  {
    dir: 'app/services/periodontics/laser-gum-treatment',
    slug: 'page.tsx',
    title: 'Laser Gum Treatment in Vellore | Modern Therapy',
    description: 'Advanced laser gum treatment for gum disease. Painless and effective therapy by Dr. Rockson Samuel.',
    keywords: 'laser gum treatment, laser therapy, gum disease, Vellore',
    h1: 'Laser Gum Treatment in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Experience <strong>painless gum disease treatment</strong> with advanced <strong>laser therapy</strong> at Indira Dental Clinic.
        Dr. Rockson Samuel uses state-of-the-art laser technology for faster healing and better results.
      </p>
    `,
    faqs: [
      { q: 'Is laser gum treatment painful?', a: 'No, laser treatment is virtually painless and requires minimal anesthesia.' },
      { q: 'How long does laser gum treatment take?', a: 'Treatment time varies but typically takes 1-2 hours depending on severity.' },
      { q: 'What are benefits of laser gum treatment?', a: 'Less pain, faster healing, reduced bleeding, lower infection risk, and more precise treatment.' }
    ]
  },

  // Sensitive Teeth Instant Relief
  {
    dir: 'app/services/sensitive-teeth-treatment/instant-relief',
    slug: 'page.tsx',
    title: 'Instant Relief for Sensitive Teeth in Vellore',
    description: 'Get instant relief from tooth sensitivity. Expert treatment by Dr. Rockson Samuel.',
    keywords: 'sensitive teeth instant relief, tooth sensitivity, immediate relief',
    h1: 'How to Stop Sensitive Teeth Pain Immediately',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Need <strong>instant relief from sensitive teeth</strong>? Dr. Rockson Samuel provides both immediate 
        pain relief and long-term solutions for tooth sensitivity at Indira Dental Clinic, Vellore.
      </p>
    `,
    faqs: [
      { q: 'How to stop sensitive teeth pain immediately?', a: 'Use desensitizing toothpaste, rinse with salt water, apply clove oil, and avoid hot/cold foods.' },
      { q: 'What causes sudden tooth sensitivity?', a: 'Worn enamel, exposed roots, cavities, cracked teeth, or recent dental work can cause sudden sensitivity.' },
      { q: 'Is tooth sensitivity permanent?', a: 'No, most cases can be treated permanently with professional dental care and proper oral hygiene.' }
    ]
  },

  // TMJ Jaw Pain Relief
  {
    dir: 'app/services/tmj-treatment/jaw-pain-relief',
    slug: 'page.tsx',
    title: 'Jaw Pain Relief Treatment in Vellore | TMJ Cure',
    description: 'Effective jaw pain relief and TMJ treatment by Dr. Rockson Samuel at Indira Dental Clinic.',
    keywords: 'jaw pain relief, TMJ treatment, temporomandibular joint, Vellore',
    h1: 'Jaw Pain Relief & TMJ Treatment in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Suffering from <strong>chronic jaw pain</strong>? Dr. Rockson Samuel specializes in <strong>TMJ disorder treatment</strong>
        to provide lasting relief and restore normal jaw function.
      </p>
    `,
    faqs: [
      { q: 'What helps jaw pain fast?', a: 'Apply ice/heat, take pain medication, do jaw exercises, avoid hard foods, and consult a dentist.' },
      { q: 'How to relieve TMJ pain?', a: 'Gentle jaw exercises, stress reduction, proper bite alignment, and professional treatment can relieve TMJ pain.' },
      { q: 'Is TMJ treatment expensive?', a: 'Cost varies by treatment. At Indira Dental Clinic, we offer affordable solutions with flexible payment plans.' }
    ]
  },

  // Types of Braces
  {
    dir: 'app/services/orthodontics/types-of-braces',
    slug: 'page.tsx',
    title: 'Types of Braces in Vellore | Complete Guide 2025',
    description: 'Compare all types of braces - metal, ceramic, lingual, and invisible aligners. Expert guidance by Dr. Rockson Samuel.',
    keywords: 'types of braces, metal braces, ceramic braces, invisible braces, Vellore',
    h1: 'Types of Braces - Complete Comparison Guide',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Confused about <strong>which braces are best</strong>? Dr. Rockson Samuel explains all <strong>types of dental braces</strong>
        to help you choose the perfect option for your smile transformation.
      </p>
    `,
    faqs: [
      { q: 'What are the different types of braces?', a: 'Metal braces, ceramic braces, lingual braces (behind teeth), and invisible aligners (Invisalign).' },
      { q: 'Which type of braces is best?', a: 'Depends on your needs. Metal braces are most effective, ceramic are aesthetic, invisalign is removable.' },
      { q: 'Which braces work fastest?', a: 'Traditional metal braces typically work fastest, completing treatment in 12-24 months.' }
    ]
  },

  // Braces Cost Delhi
  {
    dir: 'app/services/orthodontics/cost-delhi',
    slug: 'page.tsx',
    title: 'Braces Cost in Delhi vs Vellore - Price Comparison',
    description: 'Compare braces cost in Delhi and Vellore. Save 50% at Indira Dental Clinic with same quality.',
    keywords: 'braces cost delhi, teeth braces price, invisible braces cost',
    h1: 'Braces Cost in Delhi vs Vellore - Complete Price Guide',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Save up to <strong>50% on braces cost</strong> at Indira Dental Clinic, Vellore compared to Delhi prices.
        Get the same quality treatment by Dr. Rockson Samuel at affordable rates with flexible payment plans.
      </p>
    `,
    faqs: [
      { q: 'How much do braces cost in Delhi?', a: 'Delhi: ₹40,000-1,20,000. Vellore (our clinic): ₹25,000-80,000 - Save 30-50%!' },
      { q: 'Are braces cheaper in Vellore than Delhi?', a: 'Yes, significantly cheaper while maintaining the same quality standards and expertise.' },
      { q: 'Do you offer payment plans for braces?', a: 'Yes, we offer flexible monthly payment plans to make treatment affordable.' }
    ]
  },

  // Dental Implants Types
  {
    dir: 'app/services/dental-implants/types-and-classification',
    slug: 'page.tsx',
    title: 'Types of Dental Implants | Complete Classification Guide',
    description: 'Learn about all types of dental implants. Expert guide by Dr. Rockson Samuel, Vellore.',
    keywords: 'types of dental implants, implant classification, titanium implants',
    h1: 'Types of Dental Implants - Complete Guide',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Understand <strong>different types of dental implants</strong> to make informed decisions. Dr. Rockson Samuel
        explains endosteal, subperiosteal, zygomatic implants and their applications.
      </p>
    `,
    faqs: [
      { q: 'What are the types of dental implants?', a: 'Endosteal (in jawbone), Subperiosteal (on jawbone), Zygomatic (in cheekbone), and Mini implants.' },
      { q: 'Which implant is best?', a: 'Endosteal titanium implants are most common and effective for most patients.' },
      { q: 'How long do dental implants last?', a: 'With proper care, dental implants can last 20-30 years or even a lifetime.' }
    ]
  },

  // Implants Cost Delhi
  {
    dir: 'app/services/dental-implants/cost-delhi',
    slug: 'page.tsx',
    title: 'Dental Implant Cost in Delhi vs Vellore - Save 40%',
    description: 'Compare dental implant costs. Get premium implants at 40% less in Vellore.',
    keywords: 'dental implant cost delhi, tooth implant price, affordable implants',
    h1: 'Dental Implant Cost in Delhi vs Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Premium <strong>dental implants at 40% lower cost</strong> in Vellore. Dr. Rockson Samuel uses same international
        brands (Straumann, Nobel Biocare) at significantly lower prices than Delhi clinics.
      </p>
    `,
    faqs: [
      { q: 'How much does tooth implant cost in Delhi?', a: 'Delhi: ₹35,000-60,000 per tooth. Vellore (our clinic): ₹25,000-35,000 - Save ₹10,000-25,000!' },
      { q: 'Why are implants cheaper in Vellore?', a: 'Lower overhead costs and operational expenses while maintaining international quality standards.' },
      { q: 'Do you use original implants?', a: 'Yes, we use only genuine Straumann, Nobel Biocare, and other premium international brands.' }
    ]
  },

  // Root Canal Cost Delhi
  {
    dir: 'app/services/root-canal-treatment/cost-delhi',
    slug: 'page.tsx',
    title: 'Root Canal Cost in Delhi vs Vellore - Price Guide',
    description: 'RCT cost comparison. Save 50% at Indira Dental Clinic, Vellore.',
    keywords: 'root canal cost delhi, rct price, root canal charges',
    h1: 'Root Canal Treatment Cost in Delhi vs Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Painless root canal treatment</strong> at half the Delhi prices! Dr. Rockson Samuel provides
        world-class RCT using latest technology at affordable rates.
      </p>
    `,
    faqs: [
      { q: 'How much does RCT cost in Delhi?', a: 'Delhi: ₹5,000-15,000. Vellore (our clinic): ₹3,500-10,000 depending on tooth type.' },
      { q: 'Is root canal painful?', a: 'No, modern RCT is completely painless with local anesthesia and advanced techniques.' },
      { q: 'How many sittings for RCT?', a: 'Usually 1-2 sittings. Single-sitting RCT is available for most cases.' }
    ]
  },

  // Bad Breath Home Remedies
  {
    dir: 'app/services/bad-breath-treatment/home-remedies',
    slug: 'page.tsx',
    title: 'Bad Breath Home Remedies | Natural Halitosis Cure',
    description: 'Effective home remedies for bad breath. Expert tips from Dr. Rockson Samuel.',
    keywords: 'bad breath home remedies, halitosis cure, मुंह की बदबू घरेलू उपाय',
    h1: 'Bad Breath Home Remedies That Actually Work',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Try these <strong>effective home remedies for bad breath</strong> recommended by Dr. Rockson Samuel.
        While home remedies help, professional treatment ensures permanent cure.
      </p>
    `,
    faqs: [
      { q: 'How to get rid of bad breath permanently?', a: 'Proper oral hygiene, professional cleaning, treat gum disease, stay hydrated, and avoid smoking.' },
      { q: 'What home remedy kills bad breath?', a: 'Rinse with salt water, chew fennel seeds, use baking soda paste, drink green tea, and eat apples/carrots.' },
      { q: 'Can lemon cure bad breath?', a: 'Yes, lemon water helps temporarily by stimulating saliva production and killing bacteria.' }
    ]
  }
];

// Template for service pages (same as before)
const generateServicePage = (page) => `import { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTAWidget } from "@/components/cta-widget"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Star, Phone, MapPin } from "lucide-react"
import Link from "next/link"

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

// Create directories and files
console.log('🚀 Generating Batch 2 Service Pages...\n');

let created = 0;
let errors = 0;

batch2Pages.forEach((page) => {
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
    console.error(`❌ Error creating ${page.title}:`, error.message);
  }
});

console.log(`\n📊 Batch 2 Complete!`);
console.log(`✅ Created: ${created} pages`);
console.log(`❌ Errors: ${errors}`);
console.log(`\n🎯 Total New Pages: 20`);

