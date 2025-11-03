'use client'

import Link from 'next/link'
import { SectionContainer } from '@/components/ui/section-container'
import { PriceComparisonTable } from '@/components/location/PriceComparisonTable'

interface ServiceSupportContentProps {
  serviceName: string
  serviceSlug: string
  cityName: string
  locationName: string
  clinicName?: string
  showPriceComparison?: boolean
}

const PHONE_NUMBER = '+917010650063'

export function ServiceSupportContent({
  serviceName,
  serviceSlug,
  cityName,
  locationName,
  clinicName = 'Indira Dental Clinic',
  showPriceComparison = true,
}: ServiceSupportContentProps) {
  const normalizedSlug = serviceSlug.replace(/\//g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()
  const sectionIds = {
    contents: `toc-${normalizedSlug}`,
    what: `what-is-${normalizedSlug}`,
    when: `when-needed-${normalizedSlug}`,
    procedure: `procedure-${normalizedSlug}`,
    benefits: `benefits-${normalizedSlug}`,
    cost: `cost-${normalizedSlug}`,
    beforeAfter: `before-after-${normalizedSlug}`,
    why: `why-choose-${normalizedSlug}`,
    faqs: `faqs-${normalizedSlug}`,
    book: `book-${normalizedSlug}`,
  }

  const procedureSteps = [
    {
      title: 'Comprehensive Consultation & Digital Scan',
      description: `We evaluate your oral health, capture digital impressions, and map out a personalised ${serviceName.toLowerCase()} plan suited to your lifestyle and goals.`,
    },
    {
      title: 'Personalised Treatment Blueprint',
      description: `Using 3D planning software, our team designs the ideal approach so every stage of your ${serviceName.toLowerCase()} is precise, comfortable, and predictable.`,
    },
    {
      title: 'Comfort-Focused Clinical Session',
      description: `On the treatment day we follow minimally invasive protocols. Anaesthesia, sedation options, and digital guidance keep you relaxed throughout the appointment.`,
    },
    {
      title: 'Healing, Reviews & Home Guidance',
      description: `We monitor your progress closely, share dietary tips, and provide WhatsApp follow-ups so you feel supported while you heal.`,
    },
    {
      title: 'Result Reveal & Long-Term Maintenance',
      description: `Once healing completes we fine-tune your bite, polish the final restoration, and schedule routine maintenance to keep your results shining.`,
    },
  ]

  const benefitHighlights = [
    `Natural-looking outcome that complements your face and smile line.`,
    `Long-lasting solution tailored for the climate and lifestyle in ${cityName}.`,
    `Advanced sterilisation protocols and digital guidance for safer care.`,
    `Restores confidence so you can speak, smile, and socialise without worry.`,
    `Flexible payment plans and transparent counselling before every milestone.`,
  ]

  const symptomSignals = [
    `You are experiencing discomfort, sensitivity, or cosmetic concerns that this treatment addresses.`,
    `Previous dental work is failing or no longer matches your functional needs.`,
    `Your current bite makes chewing difficult or creates jaw strain.`,
    `You want a durable alternative to temporary fixes or removable appliances.`,
    `Your confidence is affected when smiling, speaking, or attending social events.`,
  ]

  const costPackages = [
    {
      label: `Standard ${serviceName}`,
      price: '₹18,500 onwards',
      includes: 'Consultation, digital planning, primary procedure, two review visits',
    },
    {
      label: `Premium ${serviceName} Experience`,
      price: '₹32,000 onwards',
      includes: '3D scans, priority scheduling, comfort aids, customised aftercare kit',
    },
    {
      label: `${serviceName} + Smile Upgrade Bundle`,
      price: '₹49,000 onwards',
      includes: 'Core procedure, enamel finishing/whitening (if indicated), maintenance plan',
    },
  ]

  const faqs = [
    {
      question: `How long do ${serviceName.toLowerCase()} results last?`,
      answer:
        `With regular reviews and at-home maintenance, most patients enjoy their ${serviceName.toLowerCase()} results for many years. We personalise guidance so your outcome stays stable in the ${cityName} climate.`,
    },
    {
      question: `Is the ${serviceName.toLowerCase()} procedure painful?`,
      answer:
        `The procedure is carefully planned with local anaesthesia and optional sedation. Patients report only mild tenderness afterwards, and our team is available on WhatsApp for recovery tips.`,
    },
    {
      question: `What is the recovery time after ${serviceName.toLowerCase()}?`,
      answer:
        `Most patients resume routine activities within 24–48 hours. We schedule touchpoints to ensure tissues heal well and share a personalised diet and hygiene checklist for the first week.`,
    },
    {
      question: `Can I combine ${serviceName.toLowerCase()} with other treatments?`,
      answer:
        `Yes. Many people pair this service with smile makeovers, gum contouring, or aligner therapy. We design sequencing so your overall transformation is efficient and budget-friendly.`,
    },
    {
      question: `Do you offer EMI or insurance support?`,
      answer:
        `${clinicName} partners with leading healthcare financiers and guides you through paperwork. Ask our front-desk team about monthly instalments and cashless options during your first visit.`,
    },
  ]

  const tocItems = [
    { href: `#${sectionIds.what}`, label: `What Is ${serviceName}?` },
    { href: `#${sectionIds.when}`, label: `When Do You Need ${serviceName}?` },
    { href: `#${sectionIds.procedure}`, label: `Step-by-Step ${serviceName} Procedure` },
    { href: `#${sectionIds.benefits}`, label: `Benefits of ${serviceName} in ${cityName}` },
    { href: `#${sectionIds.cost}`, label: `${serviceName} Cost & Packages` },
    { href: `#${sectionIds.beforeAfter}`, label: `Before & After Results` },
    { href: `#${sectionIds.why}`, label: `Why Choose ${clinicName}` },
    { href: `#${sectionIds.faqs}`, label: `${serviceName} FAQs` },
    { href: `#${sectionIds.book}`, label: `Book Your ${serviceName} Appointment` },
    { href: '#related-services', label: 'Related Services' },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: `${serviceName} in ${cityName}`,
    description: `${serviceName} delivered at ${clinicName} in ${cityName}. Personalised care that restores comfort, function, and confidence.`,
    procedureType: serviceName,
    bodyLocation: 'Oral cavity',
    sameAs: `https://www.dentalclinicinvellore.in/services/${serviceSlug}`,
    medicalSpecialty: 'Dentistry',
    provider: {
      '@type': 'MedicalBusiness',
      name: clinicName,
      address: {
        '@type': 'PostalAddress',
        addressLocality: cityName,
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      telephone: PHONE_NUMBER,
    },
  }

  return (
    <>
      <SectionContainer className="py-12" id={sectionIds.contents}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
        <nav aria-label={`${serviceName} sections`}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {tocItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-teal-500 hover:text-teal-600"
                >
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SectionContainer>

      <SectionContainer className="py-12" id={sectionIds.what}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is {serviceName}?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {serviceName} is a comprehensive solution designed to restore function, protect oral health, and elevate your
          confidence. At {clinicName}, every case begins with advanced diagnostics and a personalised blueprint so the
          final result looks and feels like it has always been part of you.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From digital planning to gentle chairside techniques, our team ensures that each appointment is calm,
          informative, and tailored to your comfort level. Whether you are seeking corrective, cosmetic, or restorative
          outcomes, we help you understand every option before starting treatment.
        </p>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gray-50" id={sectionIds.when}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">When Do You Need {serviceName}?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Consider scheduling a consultation in {cityName} if any of the following situations sound familiar:
        </p>
        <ul className="space-y-3">
          {symptomSignals.map((signal) => (
            <li key={signal} className="flex items-start gap-2 text-gray-700">
              <span className="mt-1 text-teal-600">•</span>
              <span>{signal}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-gray-700">
          Early intervention keeps treatments simpler, more comfortable, and more affordable. If you are unsure whether
          you qualify, book a friendly assessment—we are happy to guide you.
        </p>
      </SectionContainer>

      <SectionContainer className="py-12" id={sectionIds.procedure}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step {serviceName} Procedure</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {procedureSteps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600 font-semibold">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gray-50" id={sectionIds.benefits}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of {serviceName} in {cityName}</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {benefitHighlights.map((benefit) => (
            <li key={benefit} className="rounded-xl border border-teal-100 bg-white p-5 text-gray-700 shadow-sm">
              {benefit}
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer className="py-12" id={sectionIds.cost}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{serviceName} Cost &amp; Packages</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We keep pricing transparent and flexible. Every quotation includes personalised planning, high-quality
          materials, and detailed post-care support. EMI options and no-cost counselling are available for families across
          {` ${cityName} and ${locationName}`}.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Package</th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Starting Cost</th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-600">What&apos;s Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {costPackages.map((pkg) => (
                <tr key={pkg.label}>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">{pkg.label}</td>
                  <td className="px-4 py-3 text-sm font-medium text-teal-600">{pkg.price}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{pkg.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Complimentary smile design previews • Custom maintenance plans • Transparent terms before you start
        </p>
        {showPriceComparison && (
          <div className="mt-8">
            <PriceComparisonTable locationName={cityName} />
          </div>
        )}
      </SectionContainer>

      <SectionContainer className="py-12 bg-gray-50" id={sectionIds.beforeAfter}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Before &amp; After Results</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Before Treatment</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Concerns about comfort, chewing efficiency, or smile confidence often keep patients from socialising or
              enjoying their favourite meals. Photographs and scans captured at this stage help us design the ideal
              transformation.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">After Treatment</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Following {serviceName.toLowerCase()}, patients report renewed confidence, improved oral health, and
              effortless day-to-day comfort. Request a gallery preview during your consultation to see smile journeys from
              neighbours in {cityName}.
            </p>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-12" id={sectionIds.why}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose {clinicName} for {serviceName}?</h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Award-winning clinicians with 15+ years of multidisciplinary expertise.</li>
          <li>• 3D guided planning, in-house CBCT, and digital smile design for predictable outcomes.</li>
          <li>• Strict infection control, calming ambience, and dedicated recovery lounges.</li>
          <li>• Personal treatment coordinators who assist with scheduling, EMI, and aftercare.</li>
          <li>• 1000+ success stories from patients across {cityName}, {locationName}, and the wider Tamil Nadu region.</li>
        </ul>
        <div className="mt-4 space-x-3 text-sm text-teal-600">
          <Link href="/about-us/dr-rockson-samuel" className="hover:underline">
            Meet Our Dentist →
          </Link>
          <Link href="/gallery" className="hover:underline">
            Explore Our Technology →
          </Link>
        </div>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gray-50" id={sectionIds.faqs}>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{serviceName} FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 outline-none transition-colors group-open:text-teal-600">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-12" id={sectionIds.book}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your {serviceName} Appointment</h2>
        <p className="text-gray-700 leading-relaxed">
          Ready to feel the difference that compassionate, technology-led dentistry can make? Our {clinicName} team in
          {cityName} is only a message away. Share your concerns, upload previous reports, and we will craft a roadmap
          tailored exclusively for you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-teal-700"
          >
            Book Online Consultation
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
            WhatsApp Our Dentist Team
          </a>
        </div>
      </SectionContainer>

      <SectionContainer className="hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </SectionContainer>
    </>
  )
}

