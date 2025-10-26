import { ServiceContentTemplate } from "@/components/service-content-template"

export const metadata = {
  title: "Professional Teeth Whitening in Vellore | Indira Dental Clinic",
  description:
    "Get a brighter, whiter smile with professional teeth whitening at Indira Dental Clinic. Safe, effective treatments by Dr. Rockson Samuel. Book your appointment today!",
}

export default function TeethWhiteningPage() {
  return (
    <ServiceContentTemplate
      title="Professional Teeth Whitening"
      description="Transform your smile with our advanced teeth whitening treatments"
      image="/teeth-whitening.jpg"
      content={`
        <h2 class="text-2xl font-bold mb-4">About Professional Teeth Whitening</h2>
        <p class="mb-4">
          <strong>Professional teeth whitening</strong> at Indira Dental Clinic offers the safest and most effective way to achieve a <strong>brighter, whiter smile</strong>. Our advanced whitening treatments can lighten your teeth by several shades in just one visit.
        </p>
        <p class="mb-4">
          Dr. Rockson Samuel uses <strong>professional-grade whitening systems</strong> that are stronger and more effective than over-the-counter products, while being safe for your teeth and gums.
        </p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Types of Teeth Whitening</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>In-Office Whitening:</strong> Fast results in one 60-90 minute session</li>
          <li><strong>Take-Home Kits:</strong> Custom trays for gradual whitening at home</li>
          <li><strong>Combination Treatment:</strong> In-office + take-home for optimal results</li>
        </ul>

        <h3 class="text-xl font-bold mt-6 mb-3">What Causes Tooth Discoloration?</h3>
        <p class="mb-4">Several factors can cause teeth to become stained or discolored:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Coffee, tea, red wine, and dark-colored beverages</li>
          <li>Tobacco use (smoking or chewing)</li>
          <li>Certain medications</li>
          <li>Aging and natural enamel thinning</li>
          <li>Poor dental hygiene</li>
          <li>Trauma to teeth</li>
        </ul>
      `}
      procedureSteps={[
        {
          title: "Consultation and Assessment",
          description:
            "Dr. Rockson Samuel examines your teeth and determines the cause of discoloration. We discuss your goals and expectations to create a customized whitening plan.",
        },
        {
          title: "Preparation",
          description:
            "Your teeth are cleaned and polished to remove surface stains. We protect your gums and soft tissues with a special barrier gel.",
        },
        {
          title: "Whitening Application",
          description:
            "Professional-grade whitening gel is applied to your teeth. For in-office whitening, we may use a special LED light to activate the gel and enhance results.",
        },
        {
          title: "Multiple Applications",
          description:
            "The whitening gel is applied in 15-20 minute intervals, typically 2-3 times during the session for optimal results.",
        },
        {
          title: "Final Results",
          description:
            "Your teeth are rinsed and we apply a fluoride treatment to reduce sensitivity. You'll see immediate results with teeth several shades whiter!",
        },
      ]}
      benefits={[
        "Noticeably whiter teeth in just one visit",
        "Safe and controlled whitening process",
        "Professional supervision by experienced dentist",
        "Long-lasting results with proper care",
        "Customized treatment for your specific needs",
        "Minimal tooth sensitivity compared to DIY methods",
        "Boosts confidence and self-esteem",
        "More cost-effective than repeated store-bought treatments",
      ]}
      pricing={[
        { service: "In-Office Whitening (Single Session)", price: "8,000 - 12,000" },
        { service: "Take-Home Whitening Kit", price: "5,000 - 8,000" },
        { service: "Combination Treatment", price: "12,000 - 18,000" },
      ]}
      aftercare={`
        <h3 class="text-lg font-bold mb-3">Post-Whitening Care Instructions</h3>
        <ul class="space-y-3">
          <li><strong>Avoid Staining Foods:</strong> For 48 hours after treatment, avoid coffee, tea, red wine, berries, and dark-colored foods</li>
          <li><strong>No Tobacco:</strong> Refrain from smoking or using tobacco products for at least 48 hours</li>
          <li><strong>Use Sensitive Toothpaste:</strong> If you experience sensitivity, use toothpaste designed for sensitive teeth</li>
          <li><strong>Maintain Good Hygiene:</strong> Brush twice daily and floss regularly to maintain your results</li>
          <li><strong>Regular Cleanings:</strong> Visit for professional cleanings every 6 months</li>
          <li><strong>Touch-Up Treatments:</strong> Consider touch-up treatments every 6-12 months to maintain brightness</li>
          <li><strong>Use a Straw:</strong> When drinking staining beverages, use a straw to minimize contact with teeth</li>
        </ul>
        
        <h3 class="text-lg font-bold mt-4 mb-3">How Long Do Results Last?</h3>
        <p>With proper care, professional teeth whitening results can last 1-3 years. Factors affecting longevity include:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Your diet and beverage consumption</li>
          <li>Oral hygiene habits</li>
          <li>Tobacco use</li>
          <li>Touch-up treatments</li>
        </ul>
      `}
      relatedServices={[
        { title: "Dental Veneers", slug: "cosmetic-dentistry/veneers" },
        { title: "Dental Bonding", slug: "cosmetic-dentistry/bonding" },
        { title: "Smile Makeover", slug: "cosmetic-dentistry/smile-makeover" },
      ]}
    />
  )
}
