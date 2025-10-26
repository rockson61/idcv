export function LocationSchema({ locationName, locationDescription, pagePath, hasFaq = false, faqItems = [] }) {
  // Schema generation code

  // When generating FAQ schema, add null check
  const faqSchema =
    hasFaq && faqItems && faqItems.length > 0
      ? {
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
      : null

  // Rest of the component
}
