#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Top 20 priority pages from CSV analysis
const priorityPages = [
  // Bad Breath Treatment (NEW PARENT)
  {
    dir: 'app/services/bad-breath-treatment',
    slug: 'page.tsx',
    title: 'Bad Breath Treatment in Vellore',
    description: 'Complete halitosis cure and bad breath treatment by Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
    keywords: 'bad breath treatment, halitosis cure, मुंह की बदबू, Vellore',
    h1: 'Bad Breath Treatment (Halitosis Cure) in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Suffering from <strong>persistent bad breath</strong> (halitosis)? At <strong>Indira Dental Clinic, Vellore</strong>, 
        Dr. Rockson Samuel provides comprehensive <strong>bad breath treatment</strong> to identify root causes and deliver 
        permanent solutions. Don't let bad breath affect your confidence and relationships.
      </p>
    `,
    faqs: [
      { q: 'What causes bad breath?', a: 'Common causes include poor oral hygiene, gum disease, dry mouth, smoking, certain foods, and stomach problems.' },
      { q: 'Can bad breath be cured permanently?', a: 'Yes, with proper diagnosis and treatment, most cases of bad breath can be permanently cured.' },
      { q: 'What are home remedies for bad breath?', a: 'Brush twice daily, floss regularly, use mouthwash, stay hydrated, and eat crunchy fruits and vegetables.' }
    ]
  },

  // Sensitive Teeth Treatment (NEW PARENT)
  {
    dir: 'app/services/sensitive-teeth-treatment',
    slug: 'page.tsx',
    title: 'Sensitive Teeth Treatment in Vellore',
    description: 'Instant relief for sensitive teeth. Expert treatment by Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
    keywords: 'sensitive teeth treatment, tooth sensitivity, instant relief, Vellore',
    h1: 'Sensitive Teeth Treatment in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Experience <strong>instant relief from tooth sensitivity</strong> at <strong>Indira Dental Clinic</strong>. 
        Dr. Rockson Samuel specializes in treating <strong>sensitive teeth</strong> caused by worn enamel, 
        exposed roots, cavities, or gum disease. Get permanent solutions, not just temporary relief.
      </p>
    `,
    faqs: [
      { q: 'What causes sensitive teeth?', a: 'Tooth sensitivity can be caused by worn enamel, exposed tooth roots, cavities, cracked teeth, or gum disease.' },
      { q: 'How to stop sensitive teeth pain immediately?', a: 'Use desensitizing toothpaste, rinse with salt water, avoid acidic foods, and visit a dentist for professional treatment.' },
      { q: 'Is sensitive teeth treatment painful?', a: 'No, modern treatments are painless. Dr. Rockson Samuel uses gentle techniques and local anesthesia when needed.' }
    ]
  },

  // TMJ Treatment (NEW PARENT)
  {
    dir: 'app/services/tmj-treatment',
    slug: 'page.tsx',
    title: 'TMJ Treatment in Vellore | Jaw Pain Relief',
    description: 'TMJ disorder treatment and jaw pain relief by Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
    keywords: 'TMJ treatment, jaw pain relief, temporomandibular joint, Vellore',
    h1: 'TMJ Disorder Treatment & Jaw Pain Relief in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Suffering from <strong>jaw pain, clicking sounds, or difficulty chewing</strong>? Dr. Rockson Samuel at 
        <strong>Indira Dental Clinic</strong> provides expert <strong>TMJ treatment</strong> to relieve pain and 
        restore normal jaw function. Get personalized treatment plans for lasting relief.
      </p>
    `,
    faqs: [
      { q: 'What are TMJ disorder symptoms?', a: 'Symptoms include jaw pain, clicking sounds, difficulty chewing, headaches, and ear pain.' },
      { q: 'Can TMJ be cured?', a: 'Yes, with proper treatment including exercises, medications, and in severe cases, surgical intervention.' },
      { q: 'What exercises help TMJ pain?', a: 'Jaw stretches, relaxation exercises, and physical therapy can help relieve TMJ pain.' }
    ]
  },

  // Toothache Relief - Home Remedies
  {
    dir: 'app/services/emergency-dentistry/tooth-pain-relief',
    slug: 'home-remedies/page.tsx',
    title: 'Toothache Home Remedies | Instant Pain Relief',
    description: 'Effective home remedies for toothache relief. Expert advice from Dr. Rockson Samuel, Vellore.',
    keywords: 'toothache home remedies, tooth pain relief, दांत दर्द का घरेलू उपाय, instant relief',
    h1: 'Toothache Home Remedies for Instant Relief',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Need <strong>immediate toothache relief</strong>? While home remedies can provide temporary relief, 
        Dr. Rockson Samuel at <strong>Indira Dental Clinic</strong> recommends proper dental treatment for 
        permanent solution. Here are safe and effective home remedies you can try.
      </p>
    `,
    faqs: [
      { q: 'What is the fastest home remedy for toothache?', a: 'Rinse with warm salt water, apply clove oil, or use cold compress for immediate relief.' },
      { q: 'Can garlic help toothache?', a: 'Yes, garlic has antibacterial properties. Crush a garlic clove and apply it to the affected tooth.' },
      { q: 'Is paracetamol good for tooth pain?', a: 'Yes, paracetamol can help reduce tooth pain temporarily. Take as directed and visit a dentist soon.' }
    ]
  },

  // Tooth Pain at Night
  {
    dir: 'app/services/emergency-dentistry/tooth-pain-relief',
    slug: 'tooth-pain-at-night/page.tsx',
    title: 'Tooth Pain at Night | Why & How to Stop It',
    description: 'Why tooth pain worsens at night and how to get relief. Expert guidance from Dr. Rockson Samuel.',
    keywords: 'tooth pain at night, nighttime toothache, why teeth hurt at night',
    h1: 'Why Tooth Pain is Worse at Night & How to Stop It',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Does your <strong>toothache worsen at night</strong>? You're not alone. Dr. Rockson Samuel explains 
        why tooth pain intensifies when you lie down and provides effective solutions for nighttime relief.
      </p>
    `,
    faqs: [
      { q: 'Why does tooth pain get worse at night?', a: 'Lying down increases blood flow to the head, causing more pressure on the painful tooth.' },
      { q: 'How to sleep with tooth pain?', a: 'Elevate your head, use cold compress, take pain medication, and avoid lying on the affected side.' },
      { q: 'What can I do for tooth pain at night?', a: 'Rinse with salt water, apply clove oil, take pain medication, and book an emergency dental appointment.' }
    ]
  },

  // Gum Infection Treatment
  {
    dir: 'app/services/periodontics',
    slug: 'gum-infection-treatment/page.tsx',
    title: 'Gum Infection Treatment in Vellore',
    description: 'Expert gum infection treatment and gingivitis cure by Dr. Rockson Samuel at Indira Dental Clinic.',
    keywords: 'gum infection treatment, gingivitis cure, gum disease, Vellore',
    h1: 'Gum Infection Treatment in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Gum infections</strong> can lead to serious complications if left untreated. Dr. Rockson Samuel 
        at <strong>Indira Dental Clinic</strong> provides advanced <strong>gum disease treatment</strong> to 
        save your teeth and restore gum health.
      </p>
    `,
    faqs: [
      { q: 'How to cure gum infection?', a: 'Professional cleaning, antibiotics, improved oral hygiene, and in severe cases, surgical treatment.' },
      { q: 'What are signs of gum infection?', a: 'Red, swollen, bleeding gums, bad breath, loose teeth, and painful chewing.' },
      { q: 'Can gum infection be cured at home?', a: 'Mild cases can improve with proper hygiene, but professional treatment is needed for effective cure.' }
    ]
  },

  // Bleeding Gums Treatment
  {
    dir: 'app/services/periodontics',
    slug: 'bleeding-gums-treatment/page.tsx',
    title: 'Bleeding Gums Treatment | Stop Gum Bleeding',
    description: 'Stop bleeding gums permanently. Expert treatment by Dr. Rockson Samuel, Vellore.',
    keywords: 'bleeding gums treatment, how to stop gum bleeding, मसूड़ों से खून आना',
    h1: 'Bleeding Gums Treatment in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Bleeding gums</strong> while brushing is a warning sign of gum disease. Dr. Rockson Samuel 
        provides expert treatment to <strong>stop gum bleeding</strong> and prevent serious dental problems.
      </p>
    `,
    faqs: [
      { q: 'Why do gums bleed?', a: 'Common causes include gingivitis, vitamin deficiency, aggressive brushing, and certain medications.' },
      { q: 'How to stop gum bleeding immediately?', a: 'Apply pressure with gauze, rinse with salt water, use ice pack, and avoid hot foods.' },
      { q: 'Can bleeding gums be cured?', a: 'Yes, with professional cleaning, proper oral hygiene, and addressing underlying causes.' }
    ]
  },

  // Teeth Whitening Home Remedies
  {
    dir: 'app/services/teeth-whitening',
    slug: 'home-remedies/page.tsx',
    title: 'Teeth Whitening Home Remedies | Natural Methods',
    description: 'Safe and effective teeth whitening home remedies. Expert tips from Dr. Rockson Samuel.',
    keywords: 'teeth whitening home remedies, natural teeth whitening, teeth ko white kaise kare',
    h1: 'Natural Teeth Whitening Home Remedies',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Want <strong>whiter teeth naturally</strong>? Dr. Rockson Samuel shares safe <strong>home remedies 
        for teeth whitening</strong>. While home methods can help, professional whitening provides faster 
        and more dramatic results.
      </p>
    `,
    faqs: [
      { q: 'Does baking soda whiten teeth?', a: 'Yes, baking soda can help remove surface stains, but use it sparingly to avoid enamel damage.' },
      { q: 'How to whiten teeth naturally at home?', a: 'Brush with baking soda, use hydrogen peroxide rinse, eat crunchy fruits, and avoid staining foods.' },
      { q: 'Are home remedies safe for teeth whitening?', a: 'Most are safe when used correctly, but professional whitening is safer and more effective.' }
    ]
  },

  // Wisdom Tooth Recovery Guide
  {
    dir: 'app/services/oral-surgery/impacted-wisdom-teeth',
    slug: 'recovery-guide/page.tsx',
    title: 'Wisdom Tooth Extraction Recovery Guide',
    description: 'Complete recovery guide after wisdom tooth extraction. Expert care tips from Dr. Rockson Samuel.',
    keywords: 'wisdom tooth recovery, post extraction care, healing timeline',
    h1: 'Wisdom Tooth Extraction Recovery Guide',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Proper care after <strong>wisdom tooth extraction</strong> ensures faster healing and prevents 
        complications. Dr. Rockson Samuel provides comprehensive <strong>post-extraction care</strong> 
        instructions for smooth recovery.
      </p>
    `,
    faqs: [
      { q: 'How long does wisdom tooth recovery take?', a: 'Initial healing takes 1-2 weeks, complete healing takes 3-4 weeks.' },
      { q: 'What to eat after wisdom tooth extraction?', a: 'Soft foods like yogurt, soup, mashed potatoes, smoothies, and ice cream for first few days.' },
      { q: 'When can I brush teeth after wisdom tooth extraction?', a: 'Avoid the extraction site for 24 hours, then gently brush other teeth. Rinse with salt water.' }
    ]
  },

  // Cost & Pricing Parent Page
  {
    dir: 'app/pricing',
    slug: 'page.tsx',
    title: 'Dental Treatment Cost in Vellore | Price List 2025',
    description: 'Complete dental treatment price list at Indira Dental Clinic, Vellore. Transparent pricing, no hidden costs.',
    keywords: 'dental treatment cost, price list, Vellore, affordable dentist',
    h1: 'Dental Treatment Cost & Price List in Vellore',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Transparent pricing, no hidden costs</strong> at <strong>Indira Dental Clinic</strong>. 
        Dr. Rockson Samuel provides world-class dental care at <strong>50% lower costs</strong> than metro cities. 
        View our complete price list and payment options.
      </p>
    `,
    faqs: [
      { q: 'How much does dental treatment cost in Vellore?', a: 'Costs vary by treatment. Basic checkup ₹500, fillings ₹1,000-2,500, RCT ₹3,500-10,000, implants ₹25,000-35,000.' },
      { q: 'Do you accept insurance?', a: 'Yes, we accept most dental insurance plans. Contact us for details.' },
      { q: 'Are payment plans available?', a: 'Yes, we offer flexible payment plans for expensive treatments like implants and orthodontics.' }
    ]
  }
];

// Template for service pages
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
      {/* Medical Procedure Schema */}
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
            },
            "availableService": {
              "@type": "MedicalTherapy",
              "name": "${page.h1}"
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
            { title: '${page.h1.split(' in ')[0]}' }
          ]}
        />

        {/* Hero Section */}
        <ModernCard className="mb-8">
          <ModernCardHeader>
            <ModernCardTitle className="text-4xl md:text-5xl text-gray-900">
              ${page.h1}
            </ModernCardTitle>
            <p className="text-xl text-gray-600 mt-4">
              Expert Care by Dr. Rockson Samuel at Indira Dental Clinic
            </p>
          </ModernCardHeader>
          <ModernCardContent>
            ${page.content}

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
                <AccordionItem key={index} value={\`item-\${index}\`}>
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
        <CTAWidget />
      </div>
    </>
  )
}
`;

// Create directories and files
console.log('🚀 Generating Priority Service Pages...\n');

let created = 0;
let errors = 0;

priorityPages.forEach((page, index) => {
  try {
    const fullPath = path.join(__dirname, '..', page.dir);
    const filePath = path.join(fullPath, page.slug);

    // Create directory if it doesn't exist
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }

    // Generate and write page
    const pageContent = generateServicePage(page);
    fs.writeFileSync(filePath, pageContent);

    created++;
    console.log(`✅ Created: ${page.title}`);
  } catch (error) {
    errors++;
    console.error(`❌ Error creating ${page.title}:`, error.message);
  }
});

console.log(`\n📊 Generation Complete!`);
console.log(`✅ Created: ${created} pages`);
console.log(`❌ Errors: ${errors}`);
console.log(`\n🎯 Next: Run 'npm run build' to test`);

