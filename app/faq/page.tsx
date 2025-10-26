import type { Metadata } from "next"
import Link from "next/link"
import { FaqSchema } from "@/components/schema/FaqSchema"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from "@/components/ui/modern-card"
import { Button } from "@/components/ui/button"
import { RelevantQAWidget } from "@/components/widgets/relevant-qa-widget"
import { CompactServiceWidget } from "@/components/widgets/compact-service-widget"
import { CTAWidget } from "@/components/widgets/cta-widget"

export const metadata: Metadata = {
  title: 'Dental FAQ | Common Questions About Dental Treatment | Indira Dental Clinic Vellore',
  description: 'Frequently asked questions about dental treatments. Get answers about RCT, implants, braces, cosmetic dentistry. Expert guidance from Indira Dental Clinic Vellore.',
}

export default function FaqPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { title: "Home", href: "/" },
          { title: "FAQ", href: "/faq" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Find answers to the most common questions about dental care, treatments, and our services at Indira Dental
            Clinic.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a
              href="#general"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              General Questions
            </a>
            <a
              href="#oral-hygiene"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Oral Hygiene
            </a>
            <a
              href="#treatments"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Treatments & Procedures
            </a>
            <a
              href="#root-canal"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Root Canal Treatment
            </a>
            <a
              href="#dental-implants"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Dental Implants
            </a>
            <a
              href="#orthodontics"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Orthodontics
            </a>
            <a
              href="#cosmetic"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Cosmetic Dentistry
            </a>
            <a
              href="#pediatric"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Pediatric Dentistry
            </a>
            <a
              href="#insurance"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Insurance & Payments
            </a>
            <a
              href="#appointments"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Appointments
            </a>
            <a
              href="#emergency"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Emergency Care
            </a>
          </div>

          {/* General Questions Section */}
          <section id="general" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">General Questions</h2>
            <div className="space-y-8">
              <div id="general-q1" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How often should I visit the dentist?</h3>
                <p className="text-gray-700">
                  For most patients, we recommend a dental check-up and professional cleaning every six months. However,
                  Dr. Rockson Samuel may suggest more frequent visits based on your specific oral health needs,
                  especially if you have gum disease, are at high risk for cavities, or have other ongoing dental
                  issues.
                </p>
              </div>

              <div id="general-q2" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What causes tooth decay?</h3>
                <p className="text-gray-700">
                  Tooth decay occurs when plaque, a sticky film of bacteria, builds up on teeth and produces acids that
                  erode tooth enamel. This is typically caused by frequent consumption of sugary foods and beverages,
                  poor oral hygiene, dry mouth conditions, or lack of fluoride. Regular brushing, flossing, and dental
                  check-ups at Indira Dental Clinic can help prevent tooth decay.
                </p>
              </div>

              <div id="general-q3" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">At what age should children first visit the dentist?</h3>
                <p className="text-gray-700">
                  Children should have their first dental visit by age 1 or within 6 months after their first tooth
                  erupts. Early dental visits help establish a positive relationship with dental care and allow Dr.
                  Rockson Samuel to monitor oral development and provide guidance on proper oral hygiene practices for
                  children.
                </p>
              </div>

              <div id="general-q4" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Why do my gums bleed when I brush?</h3>
                <p className="text-gray-700">
                  Bleeding gums are often a sign of gingivitis, the early stage of gum disease caused by plaque buildup
                  along the gumline. Improper brushing techniques, using a hard-bristled toothbrush, hormonal changes,
                  certain medications, and vitamin deficiencies can also cause gum bleeding. If you experience
                  persistent bleeding, schedule an appointment with Dr. Rockson Samuel at Indira Dental Clinic for an
                  evaluation.
                </p>
              </div>

              <div id="general-q5" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What causes bad breath and how can I prevent it?</h3>
                <p className="text-gray-700">
                  Bad breath (halitosis) can be caused by poor oral hygiene, gum disease, dry mouth, tobacco use,
                  certain foods, and medical conditions. To prevent bad breath, brush twice daily, floss daily, clean
                  your tongue, stay hydrated, limit odor-causing foods, avoid tobacco, and visit Dr. Rockson Samuel
                  regularly for check-ups and professional cleanings at Indira Dental Clinic.
                </p>
              </div>
            </div>
          </section>

          {/* Oral Hygiene Section */}
          <section id="oral-hygiene" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Oral Hygiene</h2>
            <div className="space-y-8">
              <div id="oral-hygiene-q1" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How can I improve my oral hygiene at home?</h3>
                <p className="text-gray-700">
                  Maintain good oral hygiene by brushing your teeth twice daily with fluoride toothpaste, flossing
                  daily, using an antimicrobial mouthwash, eating a balanced diet, limiting sugary snacks and beverages,
                  and avoiding tobacco products. Dr. Rockson Samuel can provide personalized recommendations during your
                  visit to Indira Dental Clinic in Vellore.
                </p>
              </div>

              <div id="oral-hygiene-q2" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What is the proper way to brush teeth?</h3>
                <p className="text-gray-700">
                  Use a soft-bristled toothbrush and fluoride toothpaste. Hold the brush at a 45-degree angle to the
                  gums and use gentle, circular motions. Brush all surfaces of each tooth (outer, inner, and chewing
                  surfaces) for a total of two minutes. Don't forget to brush your tongue to remove bacteria. Replace
                  your toothbrush every 3-4 months or sooner if bristles are frayed.
                </p>
              </div>

              <div id="oral-hygiene-q3" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How important is flossing really?</h3>
                <p className="text-gray-700">
                  Flossing is essential for complete oral hygiene as it removes plaque and food particles from between
                  teeth and under the gumline where toothbrushes can't reach. These areas are highly susceptible to
                  decay and gum disease. Dr. Rockson Samuel recommends flossing at least once daily to maintain optimal
                  oral health and prevent cavities and periodontal disease.
                </p>
              </div>

              <div id="oral-hygiene-q4" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Should I use mouthwash? Which kind is best?</h3>
                <p className="text-gray-700">
                  Mouthwash can be a beneficial addition to your oral hygiene routine, but it's not a substitute for
                  brushing and flossing. Therapeutic mouthwashes containing fluoride, antimicrobial agents, or
                  ingredients that reduce plaque can help prevent cavities, reduce gingivitis, and freshen breath. Dr.
                  Rockson Samuel can recommend a specific mouthwash based on your individual oral health needs during
                  your visit to Indira Dental Clinic.
                </p>
              </div>

              <div id="oral-hygiene-q5" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  What's the difference between manual and electric toothbrushes?
                </h3>
                <p className="text-gray-700">
                  Both manual and electric toothbrushes can effectively clean teeth when used properly. Electric
                  toothbrushes may be more efficient at removing plaque and are beneficial for people with limited
                  manual dexterity, orthodontic appliances, or those who tend to brush too hard. The best toothbrush is
                  one that you'll use consistently and correctly. Dr. Rockson Samuel can provide personalized
                  recommendations based on your specific needs.
                </p>
              </div>
            </div>
          </section>

          {/* Treatments & Procedures Section */}
          <section id="treatments" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Treatments & Procedures</h2>
            <div className="space-y-8">
              <div id="treatments-q1" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What options do I have for replacing missing teeth?</h3>
                <p className="text-gray-700">
                  At Indira Dental Clinic, we offer several options for replacing missing teeth, including dental
                  implants, bridges, and dentures. Dental implants provide the most natural-looking and functioning
                  replacement, while bridges and dentures may be more suitable depending on your specific situation and
                  budget. Dr. Rockson Samuel will discuss all available options during your consultation.
                </p>
              </div>

              <div id="treatments-q2" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What are dental fillings made of?</h3>
                <p className="text-gray-700">
                  At Indira Dental Clinic, we offer various filling materials including composite resin (tooth-colored),
                  amalgam (silver), gold, and porcelain. Composite fillings are popular for their aesthetic appeal and
                  are bonded directly to the tooth. Dr. Rockson Samuel will recommend the most appropriate filling
                  material based on the location of the cavity, extent of decay, and your preferences.
                </p>
              </div>

              <div id="treatments-q3" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How long do dental crowns last?</h3>
                <p className="text-gray-700">
                  With proper care and maintenance, dental crowns typically last 10-15 years, though some can last much
                  longer. Factors affecting longevity include oral hygiene practices, bite habits, material of the
                  crown, and location in the mouth. Regular check-ups with Dr. Rockson Samuel at Indira Dental Clinic
                  will help ensure the integrity and longevity of your dental crowns.
                </p>
              </div>

              <div id="treatments-q4" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  What is the difference between a bridge and a partial denture?
                </h3>
                <p className="text-gray-700">
                  A dental bridge is a fixed prosthetic that replaces missing teeth by anchoring to adjacent natural
                  teeth or implants. It cannot be removed by the patient. A partial denture is a removable appliance
                  that replaces multiple missing teeth and can be taken out for cleaning. Dr. Rockson Samuel will help
                  determine which option is best for your specific needs at Indira Dental Clinic.
                </p>
              </div>

              <div id="treatments-q5" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Are dental X-rays safe?</h3>
                <p className="text-gray-700">
                  Modern dental X-rays use very low radiation doses and are considered safe. At Indira Dental Clinic, we
                  use digital X-rays, which reduce radiation exposure by up to 90% compared to traditional film X-rays.
                  We also use protective lead aprons and thyroid collars as additional safety measures. The diagnostic
                  benefits of dental X-rays far outweigh the minimal risks when used appropriately.
                </p>
              </div>
            </div>
          </section>

          {/* Root Canal Treatment Section */}
          <section id="root-canal" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Root Canal Treatment</h2>
            <div className="space-y-8">
              <div id="root-canal-q1" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Is root canal treatment painful?</h3>
                <p className="text-gray-700">
                  Modern root canal procedures at Indira Dental Clinic are virtually painless thanks to advanced
                  techniques and effective anesthesia. Most patients report that the procedure is no more uncomfortable
                  than getting a filling. Dr. Rockson Samuel ensures patient comfort throughout the treatment, and any
                  post-procedure discomfort can typically be managed with over-the-counter pain relievers.
                </p>
              </div>

              <div id="root-canal-q2" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How do I know if I need a root canal?</h3>
                <p className="text-gray-700">
                  Signs that you might need a root canal include severe toothache, prolonged sensitivity to hot or cold,
                  tooth discoloration, swelling and tenderness in nearby gums, and a persistent pimple on the gums.
                  However, sometimes there are no symptoms. Regular check-ups with Dr. Rockson Samuel at Indira Dental
                  Clinic can help detect problems before they become severe.
                </p>
              </div>

              <div id="root-canal-q3" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What happens during a root canal procedure?</h3>
                <p className="text-gray-700">
                  During a root canal, Dr. Rockson Samuel will remove the infected or inflamed pulp from inside the
                  tooth, carefully clean and shape the root canal system, then fill and seal the space. Afterward,
                  you'll need a crown or other restoration to protect the tooth and restore it to full function. The
                  procedure is typically completed in one or two appointments at Indira Dental Clinic.
                </p>
              </div>

              <div id="root-canal-q4" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How long does a root canal take?</h3>
                <p className="text-gray-700">
                  A typical root canal treatment at Indira Dental Clinic takes about 60-90 minutes per session. Simple
                  cases may be completed in a single visit, while more complex cases might require two or more
                  appointments. Dr. Rockson Samuel will provide you with a time estimate based on your specific
                  situation during your consultation.
                </p>
              </div>

              <div id="root-canal-q5" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What's the success rate of root canal treatment?</h3>
                <p className="text-gray-700">
                  Root canal treatments have a high success rate of approximately 95%. With proper care, most teeth that
                  have undergone root canal therapy can last a lifetime. Regular check-ups with Dr. Rockson Samuel at
                  Indira Dental Clinic and maintaining good oral hygiene are essential for the long-term success of root
                  canal-treated teeth.
                </p>
              </div>
            </div>
          </section>

          {/* Dental Implants Section */}
          <section id="dental-implants" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Dental Implants</h2>
            <div className="space-y-8">
              <div id="dental-implants-q1" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How long do dental implants last?</h3>
                <p className="text-gray-700">
                  With proper care and maintenance, dental implants can last a lifetime. The implant itself (the
                  titanium post) has a success rate of over 95% after 10 years. The crown attached to the implant may
                  need replacement after 10-15 years due to normal wear and tear. Regular check-ups with Dr. Rockson
                  Samuel at Indira Dental Clinic will help ensure the longevity of your dental implants.
                </p>
              </div>

              <div id="dental-implants-q2" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Am I a candidate for dental implants?</h3>
                <p className="text-gray-700">
                  Most people with good general and oral health are candidates for dental implants. Adequate bone
                  density in the jaw is necessary to support the implant. Certain conditions like uncontrolled diabetes,
                  severe gum disease, or heavy smoking may affect candidacy. Dr. Rockson Samuel will evaluate your
                  specific situation during a comprehensive examination at Indira Dental Clinic.
                </p>
              </div>

              <div id="dental-implants-q3" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What is the process for getting dental implants?</h3>
                <p className="text-gray-700">
                  The dental implant process typically involves several steps: initial consultation and planning,
                  implant placement surgery, healing period (osseointegration), placement of the abutment, and finally,
                  attachment of the crown or prosthetic tooth. The entire process usually takes 3-6 months, depending on
                  individual healing times and case complexity. Dr. Rockson Samuel will guide you through each step at
                  Indira Dental Clinic.
                </p>
              </div>

              <div id="dental-implants-q4" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Are dental implants painful?</h3>
                <p className="text-gray-700">
                  The implant placement procedure is performed under local anesthesia, so you shouldn't feel pain during
                  the surgery. Some discomfort, swelling, and bruising may occur after the anesthesia wears off, but
                  these symptoms are typically manageable with over-the-counter pain medications. Most patients report
                  that the procedure is less uncomfortable than they anticipated. Dr. Rockson Samuel and the team at
                  Indira Dental Clinic prioritize your comfort throughout the process.
                </p>
              </div>

              <div id="dental-implants-q5" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How do I care for dental implants?</h3>
                <p className="text-gray-700">
                  Dental implants require the same care as natural teeth: brushing twice daily, flossing daily, and
                  regular professional cleanings and check-ups with Dr. Rockson Samuel at Indira Dental Clinic. Avoid
                  chewing on hard items like ice or hard candy, and if you grind your teeth, consider getting a night
                  guard to protect your implants and natural teeth from excessive force.
                </p>
              </div>
            </div>
          </section>

          {/* Orthodontics Section */}
          <section id="orthodontics" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Orthodontics</h2>
            <div className="space-y-8">
              <div id="orthodontics-q1" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What types of braces do you offer?</h3>
                <p className="text-gray-700">
                  At Indira Dental Clinic, Dr. Rockson Samuel offers various orthodontic options including traditional
                  metal braces, ceramic (clear) braces, and clear aligners. Each type has its advantages, and the best
                  option depends on your specific needs, lifestyle, and preferences. During your consultation, we'll
                  discuss all available options to find the most suitable treatment for you.
                </p>
              </div>

              <div id="orthodontics-q2" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How long does orthodontic treatment take?</h3>
                <p className="text-gray-700">
                  The duration of orthodontic treatment varies depending on the complexity of the case, the type of
                  treatment, and patient compliance. On average, treatment with braces or clear aligners takes 18-24
                  months. Some minor corrections may take as little as 6 months, while more complex cases might require
                  up to 3 years. Dr. Rockson Samuel will provide you with a personalized treatment timeline during your
                  consultation at Indira Dental Clinic.
                </p>
              </div>

              <div id="orthodontics-q3" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Are clear aligners as effective as traditional braces?</h3>
                <p className="text-gray-700">
                  Clear aligners can be as effective as traditional braces for many orthodontic issues, particularly
                  mild to moderate cases. However, complex cases involving significant bite problems or tooth rotations
                  may be better treated with traditional braces. Dr. Rockson Samuel will evaluate your specific needs
                  and recommend the most effective treatment option at Indira Dental Clinic.
                </p>
              </div>

              <div id="orthodontics-q4" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">At what age should orthodontic treatment begin?</h3>
                <p className="text-gray-700">
                  The American Association of Orthodontists recommends an initial orthodontic evaluation by age 7, as
                  some orthodontic problems are easier to correct when detected early. However, orthodontic treatment
                  can be successful at any age. Dr. Rockson Samuel treats patients of all ages at Indira Dental Clinic,
                  from children to adults seeking to improve their smile and oral health.
                </p>
              </div>

              <div id="orthodontics-q5" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Will I need to wear a retainer after braces?</h3>
                <p className="text-gray-700">
                  Yes, wearing a retainer after orthodontic treatment is essential to maintain the new position of your
                  teeth. Initially, you may need to wear your retainer full-time, gradually transitioning to nighttime
                  wear only. Some patients may need to wear retainers indefinitely to prevent teeth from shifting back
                  to their original positions. Dr. Rockson Samuel will provide specific instructions based on your
                  individual case at Indira Dental Clinic.
                </p>
              </div>
            </div>
          </section>

          {/* Cosmetic Dentistry Section */}
          <section id="cosmetic" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Cosmetic Dentistry</h2>
            <div className="space-y-8">
              <div id="cosmetic-q1" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What cosmetic dental procedures do you offer?</h3>
                <p className="text-gray-700">
                  At Indira Dental Clinic, Dr. Rockson Samuel offers a comprehensive range of cosmetic dental procedures
                  including teeth whitening, dental veneers, dental bonding, tooth-colored fillings, dental crowns, and
                  smile makeovers. During your consultation, we'll discuss your aesthetic goals and recommend the most
                  appropriate treatments to achieve your desired smile.
                </p>
              </div>

              <div id="cosmetic-q2" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How long do dental veneers last?</h3>
                <p className="text-gray-700">
                  With proper care and maintenance, porcelain veneers typically last 10-15 years, while composite
                  veneers usually last 5-7 years. Factors affecting longevity include oral hygiene practices, bite
                  habits, and avoiding behaviors that could damage the veneers (like using teeth as tools or biting very
                  hard foods). Regular check-ups with Dr. Rockson Samuel at Indira Dental Clinic will help ensure the
                  longevity of your veneers.
                </p>
              </div>

              <div id="cosmetic-q3" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Is teeth whitening safe?</h3>
                <p className="text-gray-700">
                  Professional teeth whitening performed by Dr. Rockson Samuel at Indira Dental Clinic is safe and
                  effective. We use high-quality whitening agents and customize the treatment to minimize sensitivity
                  and maximize results. Over-the-counter whitening products can be safe when used as directed, but
                  professional treatments provide more predictable results and are performed under dental supervision.
                </p>
              </div>

              <div id="cosmetic-q4" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How long does teeth whitening last?</h3>
                <p className="text-gray-700">
                  The results of professional teeth whitening can last from several months to a few years, depending on
                  your habits and lifestyle. Consuming staining substances like coffee, tea, red wine, and tobacco can
                  cause teeth to re-stain more quickly. Touch-up treatments and good oral hygiene can help maintain your
                  bright smile. Dr. Rockson Samuel can provide personalized advice on maintaining your whitening results
                  at Indira Dental Clinic.
                </p>
              </div>

              <div id="cosmetic-q5" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What is the difference between veneers and crowns?</h3>
                <p className="text-gray-700">
                  Veneers are thin shells that cover only the front surface of teeth to improve appearance, requiring
                  minimal tooth reduction. Crowns cover the entire tooth and are used when there is significant damage
                  or decay, requiring more substantial tooth preparation. Dr. Rockson Samuel will recommend the most
                  appropriate option based on your specific needs and goals during your consultation at Indira Dental
                  Clinic.
                </p>
              </div>
            </div>
          </section>

          {/* Pediatric Dentistry Section */}
          <section id="pediatric" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Pediatric Dentistry</h2>
            <div className="space-y-8">
              <div id="pediatric-q1" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How can I prepare my child for their first dental visit?</h3>
                <p className="text-gray-700">
                  To prepare your child for their first dental visit, talk positively about the dentist, read children's
                  books about dental visits, play pretend dentist at home, and avoid using scary words or sharing
                  negative dental experiences. Let them know that Dr. Rockson Samuel and the team at Indira Dental
                  Clinic will count and clean their teeth to keep them healthy and strong. Maintaining a positive,
                  relaxed attitude helps children feel more comfortable.
                </p>
              </div>

              <div id="pediatric-q2" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Are dental sealants necessary for children?</h3>
                <p className="text-gray-700">
                  Dental sealants are highly recommended for children as they provide an effective barrier against
                  cavity-causing bacteria in the deep grooves of molars, where toothbrushes often can't reach. They're
                  quick, painless to apply, and can reduce cavity risk by up to 80%. Dr. Rockson Samuel typically
                  recommends sealants for permanent molars as soon as they erupt, usually between ages 6-12, at Indira
                  Dental Clinic.
                </p>
              </div>

              <div id="pediatric-q3" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  How important are baby teeth if they're going to fall out anyway?
                </h3>
                <p className="text-gray-700">
                  Baby teeth are crucial despite being temporary. They help children speak clearly, chew properly, and
                  maintain space for permanent teeth. Premature loss of baby teeth can lead to alignment issues with
                  permanent teeth. Additionally, untreated decay in baby teeth can affect the developing permanent teeth
                  beneath them. Dr. Rockson Samuel emphasizes the importance of caring for baby teeth as part of overall
                  oral health at Indira Dental Clinic.
                </p>
              </div>

              <div id="pediatric-q4" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  When should my child start using toothpaste with fluoride?
                </h3>
                <p className="text-gray-700">
                  The American Dental Association recommends using a smear (size of a grain of rice) of fluoride
                  toothpaste for children under 3 years, and a pea-sized amount for children 3-6 years. Fluoride helps
                  strengthen tooth enamel and prevent cavities. Dr. Rockson Samuel can provide personalized guidance on
                  fluoride use based on your child's specific needs and risk factors during your visit to Indira Dental
                  Clinic.
                </p>
              </div>

              <div id="pediatric-q5" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How can I prevent baby bottle tooth decay?</h3>
                <p className="text-gray-700">
                  To prevent baby bottle tooth decay, avoid putting your baby to bed with a bottle containing anything
                  other than water. Clean your baby's gums after feedings with a soft cloth, begin brushing as soon as
                  the first tooth appears, limit sugary drinks, and schedule your child's first dental visit by their
                  first birthday. Dr. Rockson Samuel at Indira Dental Clinic can provide additional guidance on
                  maintaining your child's oral health.
                </p>
              </div>
            </div>
          </section>

          {/* Insurance & Payments Section */}
          <section id="insurance" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Insurance & Payments</h2>
            <div className="space-y-8">
              <div id="insurance-q1" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What insurance plans do you accept?</h3>
                <p className="text-gray-700">
                  Indira Dental Clinic accepts most major dental insurance plans. Our administrative team will help
                  verify your coverage and benefits before treatment. We also work with patients to maximize their
                  insurance benefits and provide estimates of out-of-pocket costs. Please contact our office at
                  7010650063 for specific information about your insurance plan.
                </p>
              </div>

              <div id="insurance-q2" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Do you offer payment plans?</h3>
                <p className="text-gray-700">
                  Yes, Indira Dental Clinic offers flexible payment plans to help make dental care more affordable. We
                  understand that quality dental treatment is an investment, and our team works with patients to create
                  payment arrangements that fit their budget. Please discuss payment options with our staff during your
                  visit.
                </p>
              </div>

              <div id="insurance-q3" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What is your cancellation policy?</h3>
                <p className="text-gray-700">
                  We request at least 24 hours' notice for appointment cancellations or rescheduling. This allows us to
                  offer the appointment time to other patients who may need urgent care. Repeated late cancellations or
                  missed appointments may result in a cancellation fee. We understand that emergencies happen, so please
                  contact our office at 7010650063 as soon as possible if you need to change your appointment.
                </p>
              </div>

              <div id="insurance-q4" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How much will my treatment cost?</h3>
                <p className="text-gray-700">
                  Treatment costs vary depending on the specific procedures needed, insurance coverage, and individual
                  circumstances. At Indira Dental Clinic, Dr. Rockson Samuel and our team provide detailed treatment
                  plans with cost estimates before beginning any treatment. We believe in transparent pricing and will
                  discuss all financial aspects of your care upfront.
                </p>
              </div>

              <div id="insurance-q5" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Do you offer senior discounts?</h3>
                <p className="text-gray-700">
                  Yes, Indira Dental Clinic offers special considerations for our senior patients. We understand that
                  many seniors are on fixed incomes and may have specific dental needs. Please inquire about our senior
                  programs and discounts when scheduling your appointment with Dr. Rockson Samuel.
                </p>
              </div>
            </div>
          </section>

          {/* Appointments Section */}
          <section id="appointments" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Appointments</h2>
            <div className="space-y-8">
              <div id="appointments-q1" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How do I schedule an appointment?</h3>
                <p className="text-gray-700">
                  You can schedule an appointment with Dr. Rockson Samuel at Indira Dental Clinic by calling our office
                  at 7010650063 during business hours. Alternatively, you can use our online appointment request form on
                  our website. Our staff will follow up to confirm your appointment time and answer any questions you
                  may have.
                </p>
              </div>

              <div id="appointments-q2" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What should I bring to my first appointment?</h3>
                <p className="text-gray-700">
                  For your first visit to Indira Dental Clinic, please bring your identification, insurance card (if
                  applicable), a list of current medications, and your complete medical and dental history. If you have
                  recent dental X-rays from a previous dentist, bringing those can be helpful. Arriving 15 minutes early
                  to complete any necessary paperwork is recommended.
                </p>
              </div>

              <div id="appointments-q3" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How long does a typical appointment take?</h3>
                <p className="text-gray-700">
                  The duration of appointments at Indira Dental Clinic varies depending on the type of visit. Routine
                  check-ups and cleanings typically take 45-60 minutes, while more complex procedures may require longer
                  appointments. Dr. Rockson Samuel values thoroughness and quality care, ensuring each patient receives
                  the time and attention they need.
                </p>
              </div>

              <div id="appointments-q4" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Do you see patients on weekends?</h3>
                <p className="text-gray-700">
                  Indira Dental Clinic is open on Sundays from 10 am to 1:30 pm to accommodate patients who cannot visit
                  during weekdays. Our weekday hours are 10 am to 8 pm, Monday through Saturday. Please call our office
                  at 7010650063 to check availability and schedule your appointment with Dr. Rockson Samuel.
                </p>
              </div>

              <div id="appointments-q5" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How often should I have a dental check-up and cleaning?</h3>
                <p className="text-gray-700">
                  Most patients should have a dental check-up and professional cleaning every six months. However, Dr.
                  Rockson Samuel may recommend more frequent visits based on your specific oral health needs, such as if
                  you have gum disease, a high risk of cavities, or other ongoing dental issues. Regular preventive care
                  at Indira Dental Clinic helps maintain optimal oral health and detect problems early.
                </p>
              </div>
            </div>
          </section>

          {/* Emergency Care Section */}
          <section id="emergency" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Emergency Care</h2>
            <div className="space-y-8">
              <div id="emergency-q1" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What should I do in case of a dental emergency?</h3>
                <p className="text-gray-700">
                  In case of a dental emergency, contact Indira Dental Clinic immediately at 7010650063. We reserve time
                  in our daily schedule for emergency patients. For after-hours emergencies, our answering service will
                  direct you to Dr. Rockson Samuel or the on-call dentist. For severe injuries or uncontrolled bleeding,
                  please go to the nearest emergency room.
                </p>
              </div>

              <div id="emergency-q2" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What should I do if I knock out a tooth?</h3>
                <p className="text-gray-700">
                  If you knock out a tooth, retrieve it by the crown (not the root), rinse it gently without scrubbing,
                  and try to reinsert it into the socket. If that's not possible, place the tooth in milk or a tooth
                  preservation solution and seek immediate dental care at Indira Dental Clinic. Time is critical – the
                  tooth has the best chance of being saved if you see Dr. Rockson Samuel within 30-60 minutes.
                </p>
              </div>

              <div id="emergency-q3" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How should I handle a cracked or broken tooth?</h3>
                <p className="text-gray-700">
                  For a cracked or broken tooth, rinse your mouth with warm water, apply a cold compress to reduce
                  swelling, and take over-the-counter pain relievers if needed. Contact Indira Dental Clinic at
                  7010650063 as soon as possible to schedule an emergency appointment with Dr. Rockson Samuel. Avoid
                  chewing on the affected side until you receive treatment.
                </p>
              </div>

              <div id="emergency-q4" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What constitutes a dental emergency?</h3>
                <p className="text-gray-700">
                  Dental emergencies include severe toothache, knocked-out teeth, loose or displaced teeth, broken teeth
                  with pain, injuries to the soft tissues of the mouth, abscess or infection with swelling, and broken
                  dental appliances that cause pain or injury. If you're experiencing any of these issues, contact
                  Indira Dental Clinic immediately at 7010650063 to speak with Dr. Rockson Samuel or our staff.
                </p>
              </div>

              <div id="emergency-q5" className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  How can I manage tooth pain until my emergency appointment?
                </h3>
                <p className="text-gray-700">
                  To manage tooth pain until your emergency appointment at Indira Dental Clinic, rinse with warm salt
                  water, take over-the-counter pain relievers as directed (avoid aspirin for bleeding issues), apply a
                  cold compress to reduce swelling, and use clove oil on the affected area for temporary relief. Avoid
                  very hot, cold, or sweet foods and beverages that may worsen the pain. Dr. Rockson Samuel will address
                  the underlying cause during your emergency visit.
                </p>
              </div>
            </div>
          </section>

          {/* Related Q&A and Services Widgets */}
          <section className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RelevantQAWidget
                title="Popular Dental Questions"
                questions={[
                  {
                    id: '1',
                    title: 'What causes tooth sensitivity?',
                    slug: 'tooth-sensitivity-causes-treatment',
                    excerpt: 'Tooth sensitivity occurs when the protective enamel layer wears down, exposing the underlying dentin.',
                    helpfulVotes: 55,
                    views: 1500,
                    createdAt: '2023-12-26T11:45:00Z'
                  },
                  {
                    id: '2',
                    title: 'How long do dental implants last?',
                    slug: 'dental-implants-longevity',
                    excerpt: 'Dental implants can last a lifetime with proper care and maintenance.',
                    helpfulVotes: 42,
                    views: 1200,
                    createdAt: '2023-12-25T14:30:00Z'
                  },
                  {
                    id: '3',
                    title: 'Is root canal treatment painful?',
                    slug: 'root-canal-treatment-pain',
                    excerpt: 'Modern root canal treatment is virtually painless with advanced anesthesia and techniques.',
                    helpfulVotes: 45,
                    views: 1100,
                    createdAt: '2023-12-24T09:20:00Z'
                  }
                ]}
                serviceName="dental care"
              />

              <CompactServiceWidget
                title="Popular Dental Services"
                description="Most requested dental treatments at Indira Dental Clinic."
                services={[
                  { name: "Root Canal Treatment", slug: "root-canal-treatment", price: "₹3,000 - ₹8,000", duration: "1-2 hours" },
                  { name: "Dental Implants", slug: "dental-implants", price: "₹25,000 - ₹45,000", duration: "2-3 hours" },
                  { name: "Orthodontic Braces", slug: "orthodontics", price: "₹30,000 - ₹80,000", duration: "18-24 months" },
                  { name: "Cosmetic Dentistry", slug: "cosmetic-dentistry", price: "₹5,000 - ₹25,000", duration: "1-3 hours" }
                ]}
                ctaText="View All Services"
                ctaLink="/services"
              />
            </div>
          </section>

          {/* CTA Widget */}
          <CTAWidget
            title="Still Have Questions?"
            description="Get personalized answers from Dr. Rockson Samuel. Ask your specific dental questions and get expert guidance."
            primaryAction={{
              text: "Ask Dr. Rockson Samuel",
              href: "/ask-the-dentist/submit"
            }}
            secondaryAction={{
              text: "Book Consultation",
              href: "/contact"
            }}
            benefits={[
              "Personalized answers from expert dentist",
              "Quick response within 24 hours",
              "Free consultation available",
              "15+ years experience"
            ]}
            showRating={true}
            showAvailability={true}
          />

          <div className="mt-12 text-center">
            <p className="text-lg mb-4">Still have questions? We're here to help!</p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <FaqSchema />
    </>
  )
}
