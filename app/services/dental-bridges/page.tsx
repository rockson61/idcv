import { ServiceContentTemplate } from "@/components/service-content-template"

export const metadata = {
  title: "Dental Bridges in Vellore | Replace Missing Teeth | Indira Dental Clinic",
  description:
    "Replace missing teeth with natural-looking dental bridges. Expert treatment by Dr. Rockson Samuel at Indira Dental Clinic, Vellore. Restore your smile today!",
}

export default function DentalBridgesPage() {
  return (
    <ServiceContentTemplate
      title="Dental Bridges"
      description="Restore your smile and bite with custom dental bridges"
      image="/dental-bridges.jpg"
      content={`
        <h2 class="text-2xl font-bold mb-4">About Dental Bridges</h2>
        <p class="mb-4">
          <strong>Dental bridges</strong> are fixed prosthetic devices used to replace one or more missing teeth. A bridge literally "bridges" the gap created by missing teeth, using adjacent teeth as anchors to support the <strong>artificial replacement teeth</strong>.
        </p>
        <p class="mb-4">
          At Indira Dental Clinic, Dr. Rockson Samuel creates custom dental bridges that look, feel, and function like natural teeth, helping you regain a <strong>complete, confident smile</strong>.
        </p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Types of Dental Bridges</h3>
        <ul class="list-disc pl-6 mb-4 space-y-3">
          <li>
            <strong>Traditional Bridges:</strong> Most common type, using crowns on adjacent teeth to support the artificial tooth/teeth in between
          </li>
          <li>
            <strong>Cantilever Bridges:</strong> Used when there are adjacent teeth on only one side of the missing tooth
          </li>
          <li>
            <strong>Maryland Bridges:</strong> Conservative option using a metal or porcelain framework bonded to the back of adjacent teeth
          </li>
          <li>
            <strong>Implant-Supported Bridges:</strong> Most stable option, anchored to dental implants rather than natural teeth
          </li>
        </ul>

        <h3 class="text-xl font-bold mt-6 mb-3">Why Choose Dental Bridges?</h3>
        <p class="mb-4">Missing teeth can cause several problems:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Difficulty chewing and eating certain foods</li>
          <li>Speech problems or changes in pronunciation</li>
          <li>Shifting of remaining teeth into empty spaces</li>
          <li>Changes in bite alignment</li>
          <li>Facial sagging and premature aging appearance</li>
          <li>Loss of confidence when smiling</li>
        </ul>
      `}
      procedureSteps={[
        {
          title: "Initial Consultation",
          description:
            "Dr. Rockson Samuel examines your teeth, takes X-rays, and discusses your options. We create a treatment plan tailored to your needs and budget.",
        },
        {
          title: "Tooth Preparation",
          description:
            "The anchor teeth (abutment teeth) are reshaped by removing a portion of enamel to make room for the crowns that will support the bridge.",
        },
        {
          title: "Impressions",
          description:
            "Detailed impressions of your teeth are taken to create a precise model. This ensures your bridge will fit perfectly and match your natural teeth.",
        },
        {
          title: "Temporary Bridge",
          description:
            "A temporary bridge is placed to protect your prepared teeth and maintain aesthetics while your permanent bridge is being fabricated.",
        },
        {
          title: "Bridge Placement",
          description:
            "Once your custom bridge is ready (usually 2-3 weeks), the temporary bridge is removed and the permanent bridge is carefully fitted, adjusted, and cemented in place.",
        },
        {
          title: "Follow-Up",
          description:
            "A follow-up appointment is scheduled to ensure the bridge is comfortable and functioning properly. Minor adjustments can be made if needed.",
        },
      ]}
      benefits={[
        "Restores ability to chew and speak properly",
        "Maintains face shape and prevents facial sagging",
        "Prevents remaining teeth from shifting",
        "Distributes bite forces properly",
        "Improves appearance and smile confidence",
        "Fixed solution - doesn't need to be removed",
        "Natural-looking and durable",
        "More affordable than dental implants",
        "Lasts 5-15 years with proper care",
      ]}
      pricing={[
        { service: "Traditional Bridge (3-unit)", price: "15,000 - 25,000" },
        { service: "Maryland Bridge", price: "12,000 - 18,000" },
        { service: "Cantilever Bridge", price: "14,000 - 22,000" },
        { service: "Implant-Supported Bridge (per unit)", price: "30,000 - 45,000" },
      ]}
      aftercare={`
        <h3 class="text-lg font-bold mb-3">Caring for Your Dental Bridge</h3>
        <ul class="space-y-3">
          <li><strong>Brush Twice Daily:</strong> Clean your bridge and natural teeth thoroughly with fluoride toothpaste</li>
          <li><strong>Floss Daily:</strong> Use special floss threaders or interdental brushes to clean under the bridge</li>
          <li><strong>Regular Dental Visits:</strong> Schedule check-ups and professional cleanings every 6 months</li>
          <li><strong>Avoid Hard Foods:</strong> Don't chew ice, hard candies, or very hard foods that could damage the bridge</li>
          <li><strong>No Sticky Foods:</strong> Avoid sticky candies and foods that could dislodge the bridge</li>
          <li><strong>Balanced Diet:</strong> Maintain a healthy diet to support overall oral health</li>
          <li><strong>Don't Use Teeth as Tools:</strong> Never use your teeth to open packages or bottles</li>
          <li><strong>Wear Night Guard:</strong> If you grind your teeth, wear a night guard to protect your bridge</li>
        </ul>
        
        <h3 class="text-lg font-bold mt-4 mb-3">When to Call Your Dentist</h3>
        <p>Contact Dr. Rockson Samuel if you experience:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Bridge feels loose or moves</li>
          <li>Pain or sensitivity around the bridge</li>
          <li>Swelling or bleeding gums</li>
          <li>Difficulty chewing or changes in bite</li>
          <li>Damage or chipping to the bridge</li>
        </ul>
      `}
      relatedServices={[
        { title: "Dental Implants", slug: "dental-implants" },
        { title: "Dental Crowns", slug: "dental-crowns" },
        { title: "Dentures", slug: "dentures" },
      ]}
    />
  )
}
