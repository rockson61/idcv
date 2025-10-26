import Script from "next/script"

interface FaqSchemaProps {
  faqItems: Array<{
    question: string
    answer: string
  }>
}

export function FaqSchema({ faqItems }: FaqSchemaProps) {
  if (!faqItems || faqItems.length === 0) {
    return null
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
