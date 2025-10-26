import { ServiceContentTemplate } from "@/components/service-content-template"

export const metadata = {
  title: "Dentures in Vellore | Complete & Partial Dentures | Indira Dental Clinic",
  description:
    "Get comfortable, natural-looking dentures in Vellore. Complete and partial dentures by Dr. Rockson Samuel. Restore your smile and chewing function. Book consultation!",
}

export default function DenturesPage() {
  return (
    <ServiceContentTemplate
      title="Complete & Partial Dentures"
      description="Restore your smile with comfortable, custom-fitted dentures"
      image="/placeholder.svg?height=400&width=800"
      content={`
        <h2 class="text-2xl font-bold mb-4">About Dentures</h2>
        <p class="mb-4">
          <strong>Dentures</strong> are removable prosthetic devices designed to replace missing teeth and restore your smile, chewing ability, and facial structure. Modern dentures are comfortable, natural-looking, and can significantly improve your <strong>quality of life</strong>.
        </p>
        <p class="mb-4">
          At Indira Dental Clinic, Dr. Rockson Samuel creates custom dentures that fit comfortably, look natural, and function effectively, helping you eat, speak, and smile with confidence.
        </p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Types of Dentures</h3>
        <ul class="list-disc pl-6 mb-4 space-y-3">
          <li>
            <strong>Complete Dentures:</strong> Replace all teeth in the upper or lower jaw (or both)
          </li>
          <li>
            <strong>Partial Dentures:</strong> Replace several missing teeth while natural teeth remain
          </li>
          <li>
            <strong>Immediate Dentures:</strong> Placed immediately after tooth extraction
          </li>
          <li>
            <strong>Implant-Supported Dentures:</strong> Secured by dental implants for maximum stability
          </li>
          <li>
            <strong>Flexible Dentures:</strong> Made from flexible thermoplastic materials for comfort
          </li>
        </ul>

        <h3 class="text-xl font-bold mt-6 mb-3">When Do You Need Dentures?</h3>
        <p class="mb-4">Dentures may be recommended if you have:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Lost most or all of your teeth</li>
          <li>Teeth that are beyond repair</li>
          <li>Severe gum disease affecting multiple teeth</li>
          <li>Difficulty eating or speaking due to missing teeth</li>
          <li>Changes in facial appearance from tooth loss</li>
          <li>Multiple failing teeth that need extraction</li>
        </ul>
      `}
      procedureSteps={[
        {
          title: "Consultation and Examination",
          description:
            "Dr. Rockson Samuel evaluates your oral health, takes X-rays, and discusses your needs and expectations. We determine the best type of denture for you.",
        },
        {
          title: "Treatment Planning",
          description:
            "If teeth need to be extracted, we plan the extraction and healing timeline. For immediate dentures, we take impressions before extractions.",
        },
        {
          title: "Impressions and Measurements",
          description:
            "Detailed impressions of your gums and any remaining teeth are taken. We also record jaw relationships and select the appropriate tooth shade and shape.",
        },
        {
          title: "Try-In Appointment",
          description:
            "A wax model with artificial teeth is created. You try this model to check fit, appearance, and comfort. Adjustments are made as needed.",
        },
        {
          title: "Final Denture Fabrication",
          description:
            "Once you approve the try-in, the final denture is fabricated in the dental laboratory using high-quality materials.",
        },
        {
          title: "Delivery and Adjustment",
          description:
            "Your new dentures are placed and adjusted for comfort and proper fit. We provide detailed instructions on care and maintenance. Follow-up visits ensure optimal fit.",
        },
      ]}
      benefits={[
        "Restores ability to eat and chew comfortably",
        "Improves speech and pronunciation",
        "Supports facial muscles and prevents sagging",
        "Enhances appearance and boosts confidence",
        "Affordable tooth replacement option",
        "Can be removed for easy cleaning",
        "Custom-made for perfect fit",
        "Natural-looking results",
        "Improves nutrition by allowing you to eat a varied diet",
        "Prevents remaining teeth from shifting",
      ]}
      pricing={[
        { service: "Complete Dentures (per arch)", price: "15,000 - 30,000" },
        { service: "Partial Dentures (acrylic)", price: "8,000 - 15,000" },
        { service: "Flexible Partial Dentures", price: "12,000 - 20,000" },
        { service: "Implant-Supported Dentures", price: "80,000 - 1,50,000" },
        { service: "Immediate Dentures", price: "18,000 - 35,000" },
      ]}
      aftercare={`
        <h3 class="text-lg font-bold mb-3">Caring for Your Dentures</h3>
        <ul class="space-y-3">
          <li><strong>Clean Daily:</strong> Remove and brush your dentures daily with a soft denture brush and non-abrasive denture cleaner</li>
          <li><strong>Soak Overnight:</strong> Place dentures in water or denture solution when not wearing them to prevent warping</li>
          <li><strong>Handle Carefully:</strong> Always clean dentures over a folded towel or basin of water to prevent breaking if dropped</li>
          <li><strong>Clean Your Mouth:</strong> Clean your gums, tongue, and palate with a soft brush before reinserting dentures</li>
          <li><strong>Regular Check-Ups:</strong> Visit Dr. Rockson Samuel every 6 months for denture adjustment and oral examination</li>
          <li><strong>Don't Use Hot Water:</strong> Hot water can warp dentures; use lukewarm water for cleaning</li>
          <li><strong>Remove at Night:</strong> Take out dentures while sleeping to give your gums a rest (unless advised otherwise)</li>
          <li><strong>Avoid Harsh Products:</strong> Don't use whitening toothpaste, bleach, or abrasive cleaners on dentures</li>
        </ul>
        
        <h3 class="text-lg font-bold mt-4 mb-3">Adjusting to New Dentures</h3>
        <p>It's normal to experience an adjustment period with new dentures:</p>
        <ul class="list-disc pl-6 mt-2 space-y-2">
          <li><strong>Week 1-2:</strong> Dentures may feel bulky; speaking and eating may be challenging</li>
          <li><strong>Week 3-4:</strong> You'll adapt to the feel; eating becomes easier</li>
          <li><strong>Month 2-3:</strong> Most people are fully comfortable with their dentures</li>
          <li>Start with soft foods and gradually introduce harder foods</li>
          <li>Practice speaking by reading aloud</li>
          <li>Be patient - it takes time to adjust fully</li>
        </ul>

        <h3 class="text-lg font-bold mt-4 mb-3">When to Contact Your Dentist</h3>
        <p>Call our clinic if you experience:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Persistent sore spots or pain</li>
          <li>Dentures that feel loose or don't fit properly</li>
          <li>Cracked or damaged dentures</li>
          <li>Difficulty eating or speaking after adjustment period</li>
          <li>Signs of infection (swelling, bleeding, unusual discharge)</li>
        </ul>
      `}
      relatedServices={[
        { title: "Dental Implants", slug: "dental-implants" },
        { title: "Dental Bridges", slug: "dental-bridges" },
        { title: "Full Mouth Rehabilitation", slug: "full-mouth-rehabilitation" },
      ]}
    />
  )
}
