export function FaqSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should I visit the dentist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most patients, we recommend a dental check-up and professional cleaning every six months. However, Dr. Rockson Samuel may suggest more frequent visits based on your specific oral health needs, especially if you have gum disease, are at high risk for cavities, or have other ongoing dental issues.",
        },
      },
      {
        "@type": "Question",
        name: "What causes tooth decay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tooth decay occurs when plaque, a sticky film of bacteria, builds up on teeth and produces acids that erode tooth enamel. This is typically caused by frequent consumption of sugary foods and beverages, poor oral hygiene, dry mouth conditions, or lack of fluoride. Regular brushing, flossing, and dental check-ups at Indira Dental Clinic can help prevent tooth decay.",
        },
      },
      {
        "@type": "Question",
        name: "How can I improve my oral hygiene at home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maintain good oral hygiene by brushing your teeth twice daily with fluoride toothpaste, flossing daily, using an antimicrobial mouthwash, eating a balanced diet, limiting sugary snacks and beverages, and avoiding tobacco products. Dr. Rockson Samuel can provide personalized recommendations during your visit to Indira Dental Clinic in Vellore.",
        },
      },
      {
        "@type": "Question",
        name: "Is root canal treatment painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern root canal procedures at Indira Dental Clinic are virtually painless thanks to advanced techniques and effective anesthesia. Most patients report that the procedure is no more uncomfortable than getting a filling. Dr. Rockson Samuel ensures patient comfort throughout the treatment, and any post-procedure discomfort can typically be managed with over-the-counter pain relievers.",
        },
      },
      {
        "@type": "Question",
        name: "What options do I have for replacing missing teeth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At Indira Dental Clinic, we offer several options for replacing missing teeth, including dental implants, bridges, and dentures. Dental implants provide the most natural-looking and functioning replacement, while bridges and dentures may be more suitable depending on your specific situation and budget. Dr. Rockson Samuel will discuss all available options during your consultation.",
        },
      },
      {
        "@type": "Question",
        name: "How long do dental implants last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With proper care and maintenance, dental implants can last a lifetime. The implant itself (the titanium post) has a success rate of over 95% after 10 years. The crown attached to the implant may need replacement after 10-15 years due to normal wear and tear. Regular check-ups with Dr. Rockson Samuel at Indira Dental Clinic will help ensure the longevity of your dental implants.",
        },
      },
      {
        "@type": "Question",
        name: "What insurance plans do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Indira Dental Clinic accepts most major dental insurance plans. Our administrative team will help verify your coverage and benefits before treatment. We also work with patients to maximize their insurance benefits and provide estimates of out-of-pocket costs. Please contact our office at 7010650063 for specific information about your insurance plan.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer payment plans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Indira Dental Clinic offers flexible payment plans to help make dental care more affordable. We understand that quality dental treatment is an investment, and our team works with patients to create payment arrangements that fit their budget. Please discuss payment options with our staff during your visit.",
        },
      },
      {
        "@type": "Question",
        name: "How do I schedule an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can schedule an appointment with Dr. Rockson Samuel at Indira Dental Clinic by calling our office at 7010650063 during business hours. Alternatively, you can use our online appointment request form on our website. Our staff will follow up to confirm your appointment time and answer any questions you may have.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do in case of a dental emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In case of a dental emergency, contact Indira Dental Clinic immediately at 7010650063. We reserve time in our daily schedule for emergency patients. For after-hours emergencies, our answering service will direct you to Dr. Rockson Samuel or the on-call dentist. For severe injuries or uncontrolled bleeding, please go to the nearest emergency room.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if I knock out a tooth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you knock out a tooth, retrieve it by the crown (not the root), rinse it gently without scrubbing, and try to reinsert it into the socket. If that's not possible, place the tooth in milk or a tooth preservation solution and seek immediate dental care at Indira Dental Clinic. Time is critical – the tooth has the best chance of being saved if you see Dr. Rockson Samuel within 30-60 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Are dental X-rays safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern dental X-rays use very low radiation doses and are considered safe. At Indira Dental Clinic, we use digital X-rays, which reduce radiation exposure by up to 90% compared to traditional film X-rays. We also use protective lead aprons and thyroid collars as additional safety measures. The diagnostic benefits of dental X-rays far outweigh the minimal risks when used appropriately.",
        },
      },
      {
        "@type": "Question",
        name: "How important are baby teeth if they're going to fall out anyway?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Baby teeth are crucial despite being temporary. They help children speak clearly, chew properly, and maintain space for permanent teeth. Premature loss of baby teeth can lead to alignment issues with permanent teeth. Additionally, untreated decay in baby teeth can affect the developing permanent teeth beneath them. Dr. Rockson Samuel emphasizes the importance of caring for baby teeth as part of overall oral health at Indira Dental Clinic.",
        },
      },
      {
        "@type": "Question",
        name: "What types of braces do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At Indira Dental Clinic, Dr. Rockson Samuel offers various orthodontic options including traditional metal braces, ceramic (clear) braces, and clear aligners. Each type has its advantages, and the best option depends on your specific needs, lifestyle, and preferences. During your consultation, we'll discuss all available options to find the most suitable treatment for you.",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
}
