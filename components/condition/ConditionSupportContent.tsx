'use client'

import Link from 'next/link'
import { SectionContainer } from '@/components/ui/section-container'

interface ConditionSupportContentProps {
  conditionName: string
  conditionSlug: string
  cityName: string
  clinicName?: string
}

const PHONE_NUMBER = '+917010650063'

type ConditionContentConfig = {
  intro?: string
  causes?: string[]
  symptoms?: string[]
  prevention?: string[]
  relatedConditions?: Array<{ title: string; href: string }>
  treatmentMap?: Array<{ issue: string; treatment: string; href: string }>
  faqs?: Array<{ question: string; answer: string }>
}

const conditionOverrides: Record<string, ConditionContentConfig> = {
  'tooth-abscess': {
    causes: [
      'Untreated deep dental cavities that reach the pulp',
      'Fractured or chipped tooth that allows bacteria inside',
      'Advanced gum disease creating periodontal pockets',
      'Failed or incomplete root canal treatment',
      'Weakened immune system or uncontrolled diabetes',
    ],
    symptoms: [
      'Severe throbbing pain that radiates to jaw, ear, or neck',
      'Facial swelling or tender lymph nodes',
      'Sudden rush of foul-tasting fluid in the mouth',
      'Fever, malaise, or difficulty swallowing',
      'Sensitivity to hot, cold, or biting pressure',
      'Red, swollen gums with possible pus discharge',
    ],
    relatedConditions: [
      { title: 'Tooth Decay', href: '/conditions/tooth-decay' },
      { title: 'Gum Disease', href: '/conditions/gum-disease' },
      { title: 'Dental Infection', href: '/conditions/bad-breath' },
      { title: 'Jaw Pain', href: '/conditions/tmj-disorders' },
    ],
    faqs: [
      {
        question: 'Can a tooth abscess heal on its own?',
        answer:
          'An abscess is a serious infection that will not disappear without professional treatment. Drainage, antibiotics, and definitive therapies such as root canal or extraction are required to prevent spread to other tissues.',
      },
      {
        question: 'What is the fastest way to relieve abscess pain?',
        answer:
          'Over-the-counter pain medication and cold compresses can offer temporary relief, but immediate dental care is essential. Our team prioritises emergency appointments to drain the infection safely.',
      },
      {
        question: 'Will I always need a root canal for a tooth abscess?',
        answer:
          'Treatment depends on the location and severity. Root canal therapy can save an infected tooth, but extraction may be recommended if the tooth structure cannot be restored. Your dentist will explain every option in detail.',
      },
    ],
  },
}

function buildContent(
  conditionSlug: string,
  conditionName: string,
  cityName: string,
  clinicName: string,
): Required<ConditionContentConfig> {
  const base: ConditionContentConfig = {
    intro: `${conditionName} can affect your daily comfort, sleep, and overall health. At ${clinicName} in ${cityName}, our dentists identify the root cause quickly and guide you through evidence-based care so relief is long-lasting, not temporary.`,
    causes: [
      `Dental cavities or decay that reach the inner nerve`,
      'Gum infection (gingivitis or periodontitis)',
      'Cracked, fractured, or chipped tooth',
      'Exposed tooth root due to gum recession',
      'Impacted or partially erupted wisdom tooth',
      'Teeth grinding (bruxism) or jaw clenching habits',
    ],
    symptoms: [
      'Sharp, throbbing, or constant discomfort',
      'Sensitivity to hot, cold, or sweet foods',
      'Pain while biting or chewing',
      'Gum swelling, redness, or bleeding',
      'Bad breath or unpleasant taste',
      'Fever, headache, or radiating jaw pain',
    ],
    prevention: [
      'Brush twice daily with a fluoride toothpaste and replace the brush every 3 months',
      'Floss once a day to remove plaque between teeth',
      'Limit high-sugar snacks and acidic drinks that erode enamel',
      'Schedule professional cleanings and checkups every 6 months',
      'Treat small cavities or gum issues early before they worsen',
      'Wear a night guard if you grind or clench your teeth',
    ],
    relatedConditions: [
      { title: 'Gum Bleeding', href: '/conditions/bleeding-gums' },
      { title: 'Tooth Sensitivity', href: '/conditions/tooth-sensitivity' },
      { title: 'Jaw Pain', href: '/conditions/tmj-disorders' },
      { title: 'Dental Abscess', href: '/conditions/tooth-abscess' },
      { title: 'Wisdom Tooth Pain', href: '/conditions/impacted-teeth' },
    ],
    treatmentMap: [
      { issue: 'Tooth Decay', treatment: 'Dental Fillings / Root Canal Therapy', href: '/services/root-canal-treatment' },
      { issue: 'Gum Disease', treatment: 'Scaling & Root Planing', href: '/services/periodontics/scaling-root-planing' },
      { issue: 'Cracked or Fractured Tooth', treatment: 'Dental Crown / Bonding', href: '/services/restorative-dentistry/dental-crowns' },
      { issue: 'Infection & Swelling', treatment: 'Antibiotics / Tooth Extraction', href: '/services/tooth-extraction' },
      { issue: 'Impacted Wisdom Tooth', treatment: 'Minor Oral Surgery', href: '/services/oral-surgery/impacted-wisdom-teeth' },
    ],
    faqs: [
      {
        question: `Can ${conditionName.toLowerCase()} go away on its own?`,
        answer:
          `${conditionName} usually indicates an underlying dental problem that requires treatment. Home remedies may relieve pain briefly, but only a dentist can address the root cause to prevent future flare-ups.`,
      },
      {
        question: `What is the best painkiller for ${conditionName.toLowerCase()}?`,
        answer:
          'Over-the-counter pain relievers may help until you see a dentist. Avoid placing aspirin directly on the gums—it can cause tissue burns. Always follow dosage advice from your healthcare provider.',
      },
      {
        question: `Does treatment for ${conditionName.toLowerCase()} hurt?`,
        answer:
          'Modern dentistry prioritises comfort. Local anaesthesia, sedation options, and minimally invasive techniques ensure the procedure is virtually painless. Mild tenderness afterward is normal and manageable.',
      },
      {
        question: `Can ${conditionName.toLowerCase()} cause headaches or ear pain?`,
        answer:
          `${conditionName} can radiate to neighbouring nerves, causing headaches, ear discomfort, or neck pain. If symptoms persist for over 48 hours, book an appointment for an accurate diagnosis.`,
      },
      {
        question: `How long does it take to recover after treatment?`,
        answer:
          'Most patients feel relief within a day or two. Your dentist will share personalised aftercare tips and schedule follow-ups to confirm healing and prevent recurrence.',
      },
    ],
  }

  const override = conditionOverrides[conditionSlug] ?? {}

  return {
    intro: override.intro ?? base.intro!,
    causes: override.causes ?? base.causes!,
    symptoms: override.symptoms ?? base.symptoms!,
    prevention: override.prevention ?? base.prevention!,
    relatedConditions: override.relatedConditions ?? base.relatedConditions!,
    treatmentMap: override.treatmentMap ?? base.treatmentMap!,
    faqs: override.faqs ?? base.faqs!,
  }
}

export function ConditionSupportContent({ conditionName, conditionSlug, cityName, clinicName = 'Indira Dental Clinic' }: ConditionSupportContentProps) {
  const content = buildContent(conditionSlug, conditionName, cityName, clinicName)
  const sectionIds = {
    toc: `${conditionSlug}-toc`,
    what: `${conditionSlug}-what`,
    causes: `${conditionSlug}-causes`,
    symptoms: `${conditionSlug}-symptoms`,
    when: `${conditionSlug}-when`,
    treatments: `${conditionSlug}-treatments`,
    remedies: `${conditionSlug}-remedies`,
    prevention: `${conditionSlug}-prevention`,
    why: `${conditionSlug}-why`,
    faqs: `${conditionSlug}-faqs`,
    book: `${conditionSlug}-book`,
    related: `${conditionSlug}-related`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const conditionSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: `${conditionName} in ${cityName}`,
    description: `${conditionName} diagnosis and treatment at ${clinicName} in ${cityName}. Personalised relief for dental pain.`,
    associatedAnatomy: 'Oral cavity',
    possibleTreatment: content.treatmentMap.map((row) => ({ '@type': 'MedicalTherapy', name: row.treatment })),
    epidemiology: `Common among adults seeking dental care in ${cityName}.`,
  }

  const tocItems = [
    { href: `#${sectionIds.what}`, label: `What Is ${conditionName}?` },
    { href: `#${sectionIds.causes}`, label: 'Common Causes' },
    { href: `#${sectionIds.symptoms}`, label: 'Symptoms to Watch For' },
    { href: `#${sectionIds.when}`, label: 'When to See a Dentist' },
    { href: `#${sectionIds.treatments}`, label: 'Treatment Options' },
    { href: `#${sectionIds.remedies}`, label: 'Home Remedies & Myths' },
    { href: `#${sectionIds.prevention}`, label: 'Prevention Tips' },
    { href: `#${sectionIds.why}`, label: `Why Choose ${clinicName}` },
    { href: `#${sectionIds.faqs}`, label: 'FAQs' },
    { href: `#${sectionIds.book}`, label: 'Book Appointment' },
    { href: `#${sectionIds.related}`, label: 'Related Conditions' },
  ]

  return (
    <>
      <SectionContainer className="py-12" id={sectionIds.toc}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {tocItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-teal-500 hover:text-teal-600"
              >
                <span>{item.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer className="py-12" id={sectionIds.what}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is {conditionName}?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{content.intro}</p>
        <p className="text-gray-700 leading-relaxed">
          Ignoring {conditionName.toLowerCase()} can lead to complications such as abscess formation, gum infection, or
          even tooth loss. If you are unsure whether your symptoms are serious, schedule a comprehensive evaluation—our
          team will walk you through imaging, diagnosis, and the best path to relief.
        </p>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gray-50" id={sectionIds.causes}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Causes of {conditionName}</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {content.causes.map((cause) => (
            <li key={cause} className="rounded-xl border border-gray-200 bg-white p-5 text-gray-700 shadow-sm">
              {cause}
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer className="py-12" id={sectionIds.symptoms}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Symptoms to Watch For</h2>
        <ul className="space-y-3 text-gray-700">
          {content.symptoms.map((symptom) => (
            <li key={symptom}>• {symptom}</li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gray-50" id={sectionIds.when}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">When to See a Dentist</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Visit a dentist right away if you experience any of the following warning signs. Early intervention keeps the
          treatment simpler and more comfortable.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li>• Pain lasting more than two days or disrupting sleep</li>
          <li>• Swelling in the jaw, cheek, or neck</li>
          <li>• Difficulty opening your mouth or swallowing</li>
          <li>• Pain radiating to the ear, head, or temples</li>
          <li>• Visible pus, bleeding, or foul taste in the mouth</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-red-700"
          >
            Book Emergency Appointment
          </Link>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center rounded-xl border border-red-600 px-6 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
          >
            Call {PHONE_NUMBER.replace('+91', '+91-')}
          </a>
        </div>
      </SectionContainer>

      <SectionContainer className="py-12" id={sectionIds.treatments}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Options</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Treatment depends on the root cause. Our dentists in {cityName} combine restorative, periodontal, and surgical
          expertise to customise your care plan.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Cause</th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Recommended Treatment</th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Learn More</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {content.treatmentMap.map((row) => (
                <tr key={row.issue}>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">{row.issue}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{row.treatment}</td>
                  <td className="px-4 py-3 text-sm">
                    <Link href={row.href} className="text-teal-600 hover:underline">
                      View Service →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gray-50" id={sectionIds.remedies}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Home Remedies &amp; Myths</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Warm salt-water rinses, cold compresses, and over-the-counter analgesics can provide short-term relief. However,
          avoid risky internet cures such as placing aspirin on gums or using undiluted clove oil. These methods can burn
          soft tissues and delay essential dental care.
        </p>
        <p className="text-gray-700">
          Home care is only a temporary measure. Schedule an examination so we can pinpoint the cause and stop the pain
          from returning.
        </p>
      </SectionContainer>

      <SectionContainer className="py-12" id={sectionIds.prevention}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Prevention Tips</h2>
        <ul className="grid gap-4 md:grid-cols-2 text-gray-700">
          {content.prevention.map((tip) => (
            <li key={tip} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              {tip}
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gray-50" id={sectionIds.why}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose {clinicName} for {conditionName} Care?</h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Experienced dentists trained in painless dentistry and emergency care.</li>
          <li>• 3D digital X-rays and intraoral scanners for precise diagnosis.</li>
          <li>• Same-day appointments and WhatsApp support for urgent cases.</li>
          <li>• Modern sterilisation, NABH-aligned protocols, and private operatories.</li>
          <li>• Personalised treatment plans for children, adults, and seniors.</li>
        </ul>
        <div className="mt-4 space-x-3 text-sm text-teal-600">
          <Link href="/about-us" className="hover:underline">
            About Us →
          </Link>
          <Link href="/about-us/our-team" className="hover:underline">
            Meet Our Team →
          </Link>
        </div>
      </SectionContainer>

      <SectionContainer className="py-12" id={sectionIds.faqs}>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQs about {conditionName}</h2>
        <div className="space-y-4">
          {content.faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 outline-none transition-colors group-open:text-teal-600">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gray-50" id={sectionIds.book}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Appointment</h2>
        <p className="text-gray-700 leading-relaxed">
          Stop {conditionName.toLowerCase()} before it worsens. Visit {clinicName} in {cityName} for gentle, digital, and
          personalised dental care tailored to your comfort.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-teal-700"
          >
            Book Online
          </Link>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center rounded-xl border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-600 transition-colors hover:bg-teal-50"
          >
            Call {PHONE_NUMBER.replace('+91', '+91-')}
          </a>
          <a
            href="https://wa.me/917010650063"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl border border-green-500 px-6 py-3 text-sm font-semibold text-green-600 transition-colors hover:bg-green-50"
          >
            WhatsApp Us
          </a>
        </div>
      </SectionContainer>

      <SectionContainer className="py-12" id={sectionIds.related}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Conditions</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {content.relatedConditions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-teal-600 transition-colors hover:border-teal-500 hover:text-teal-700"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="hidden">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </SectionContainer>
    </>
  )
}

