import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Complete Guide to Root Canal Treatment | Indira Dental Clinic",
  description:
    "Learn everything about root canal treatment: procedure steps, recovery, myths vs. facts, and why Indira Dental Clinic in Vellore is your best choice for painless RCT.",
}

export default function RootCanalGuidePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Complete Guide to Root Canal Treatment</h1>

        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span>Published: March 15, 2024</span>
          <span className="mx-2">•</span>
          <span>By Dr. Rockson Samuel</span>
          <span className="mx-2">•</span>
          <span>10 min read</span>
        </div>

        <div className="rounded-lg overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Root Canal Treatment Procedure"
            width={800}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            <strong>Root canal treatment</strong> (endodontic treatment) is one of the most common dental procedures
            performed to save a tooth that would otherwise need to be extracted. Despite its reputation, modern root
            canal treatment is relatively comfortable and highly effective. In this comprehensive guide, we'll explore
            everything you need to know about root canal treatment, from why it's necessary to what to expect during and
            after the procedure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What is Root Canal Treatment?</h2>
          <p>
            Root canal treatment is a dental procedure that treats infection at the center of a tooth (the root canal
            system). The treatment involves removing the infected or inflamed pulp (the soft tissue inside the tooth
            containing nerves, blood vessels, and connective tissue), carefully cleaning and shaping the inside of the
            canal, then filling and sealing the space.
          </p>
          <p className="mt-4">
            The purpose of a root canal is to eliminate bacteria from the infected root canal, prevent reinfection, and
            save the natural tooth. Without treatment, the tissue surrounding the tooth will become infected, and
            abscesses may form, leading to pain and swelling.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">When is Root Canal Treatment Necessary?</h2>
          <p>You may need a root canal if you experience:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Severe toothache when chewing or applying pressure</li>
            <li>Prolonged sensitivity to hot or cold temperatures</li>
            <li>Discoloration (darkening) of the tooth</li>
            <li>Swelling and tenderness in nearby gums</li>
            <li>Persistent or recurring pimple on the gums</li>
            <li>Deep decay or a crack that has reached the pulp</li>
            <li>Previous traumatic injury to the tooth</li>
          </ul>
          <p>
            Sometimes, no symptoms are present, but your dentist may identify the need for a root canal during a routine
            examination or through X-rays.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-4">The Root Canal Procedure: Step by Step</h3>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Diagnosis and Preparation:</strong>
                <p>
                  Your dentist will take X-rays to examine the shape of the root canals and determine if there are signs
                  of infection in the surrounding bone. Local anesthesia is administered to numb the area around the
                  tooth.
                </p>
              </li>
              <li>
                <strong>Dental Dam Placement:</strong>
                <p>
                  A rubber dam (a sheet of rubber) is placed around the tooth to keep it dry and free from saliva during
                  treatment.
                </p>
              </li>
              <li>
                <strong>Access Opening:</strong>
                <p>An opening is made through the crown of the tooth to access the pulp chamber and root canals.</p>
              </li>
              <li>
                <strong>Pulp Removal:</strong>
                <p>
                  The infected or inflamed pulp is carefully removed using specialized instruments. The pulp chamber and
                  root canals are then cleaned and shaped.
                </p>
              </li>
              <li>
                <strong>Canal Cleaning:</strong>
                <p>The canals are thoroughly cleaned using irrigation solutions to remove debris and bacteria.</p>
              </li>
              <li>
                <strong>Filling the Canals:</strong>
                <p>
                  Once the canals are clean, they are filled with a biocompatible material called gutta-percha, which is
                  placed with an adhesive cement to ensure complete sealing of the canals.
                </p>
              </li>
              <li>
                <strong>Temporary or Permanent Filling:</strong>
                <p>
                  A temporary filling is placed to close the access opening. In some cases, a permanent filling or crown
                  may be placed immediately.
                </p>
              </li>
              <li>
                <strong>Final Restoration:</strong>
                <p>
                  In most cases, a crown or other restoration is placed on the tooth to protect it, restore its full
                  function, and improve its appearance.
                </p>
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Single-Sitting vs. Multi-Visit Root Canal Treatment</h2>
          <p>
            Root canal treatment can be completed in either a single appointment or multiple visits, depending on
            various factors:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Single-Sitting RCT</h3>
              <p className="mb-2">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-5 mb-2">
                <li>Front teeth with single canals</li>
                <li>Minimal infection</li>
                <li>No anatomical complexities</li>
                <li>Patients with time constraints</li>
              </ul>
              <p>
                <strong>Advantages:</strong> Fewer appointments, immediate relief, reduced risk of contamination between
                visits
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Multi-Visit RCT</h3>
              <p className="mb-2">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-5 mb-2">
                <li>Molars with multiple canals</li>
                <li>Severe infection or abscess</li>
                <li>Complex canal anatomy</li>
                <li>Retreatment cases</li>
              </ul>
              <p>
                <strong>Advantages:</strong> Allows time for medication to work, better for complex cases, reduces
                patient fatigue
              </p>
            </div>
          </div>

          <p>
            At Indira Dental Clinic in Vellore, Dr. Rockson Samuel will recommend the most appropriate approach based on
            your specific case.{" "}
            <Link href="/services/root-canal-treatment/single-sitting-rct" className="text-blue-600 hover:underline">
              Learn more about our single-sitting RCT
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">After Root Canal Treatment: What to Expect</h2>
          <p>After your root canal treatment:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <strong>Numbness:</strong> Your mouth will remain numb for a few hours after the procedure.
            </li>
            <li>
              <strong>Sensitivity:</strong> You may experience mild discomfort for a few days, especially when chewing.
              This is normal and can be managed with over-the-counter pain medications.
            </li>
            <li>
              <strong>Temporary Crown:</strong> If a permanent crown wasn't placed, avoid chewing on the treated tooth
              until the permanent restoration is in place.
            </li>
            <li>
              <strong>Oral Hygiene:</strong> Continue to brush and floss normally, being gentle around the treated area.
            </li>
            <li>
              <strong>Follow-up:</strong> Attend all scheduled follow-up appointments to ensure proper healing.
            </li>
          </ul>

          <blockquote className="bg-blue-50 p-4 border-l-4 border-blue-500 my-6">
            <p className="italic">
              "According to the{" "}
              <a
                href="https://www.aae.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                American Association of Endodontists
              </a>
              , more than 25 million root canal treatments are performed each year, with a success rate of over 95%.
              Modern techniques and anesthetics have made root canal treatment as comfortable as getting a filling."
            </p>
          </blockquote>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Root Canal Myths vs. Facts</h2>
          <table className="w-full border-collapse my-6">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border p-2 text-left">Myth</th>
                <th className="border p-2 text-left">Fact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Root canal treatment is painful</td>
                <td className="border p-2">
                  Modern techniques and anesthetics make the procedure virtually painless, similar to getting a filling
                </td>
              </tr>
              <tr>
                <td className="border p-2">It's better to extract the tooth</td>
                <td className="border p-2">
                  Saving your natural tooth is always the best option when possible, as it maintains proper chewing
                  function and natural appearance
                </td>
              </tr>
              <tr>
                <td className="border p-2">Root canal treatment causes illness</td>
                <td className="border p-2">
                  There is no scientific evidence linking root canal treatment to disease elsewhere in the body
                </td>
              </tr>
              <tr>
                <td className="border p-2">Root canal treated teeth don't last</td>
                <td className="border p-2">
                  With proper care, a tooth that has had root canal treatment can last a lifetime
                </td>
              </tr>
              <tr>
                <td className="border p-2">Multiple appointments are always needed</td>
                <td className="border p-2">
                  Many root canal treatments can be completed in a single visit, depending on the case
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Why Choose Indira Dental Clinic for Root Canal Treatment?
          </h2>
          <p>
            At Indira Dental Clinic in Vellore, we specialize in providing comfortable, effective root canal treatments
            using the latest techniques and technologies:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <strong>Advanced Technology:</strong> We use digital imaging, rotary endodontic instruments, and apex
              locators for precise and efficient treatment.
            </li>
            <li>
              <strong>Experienced Specialists:</strong> Dr. Rockson Samuel has extensive experience in endodontic
              procedures, ensuring optimal results.
            </li>
            <li>
              <strong>Comfort-Focused Approach:</strong> We prioritize your comfort with effective anesthesia and a
              gentle touch.
            </li>
            <li>
              <strong>Comprehensive Care:</strong> From diagnosis to final restoration, we provide complete care under
              one roof.
            </li>
            <li>
              <strong>Flexible Options:</strong> We offer both single-sitting and multi-visit root canal treatments
              based on your specific needs.
            </li>
          </ul>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Patient Testimonial</h3>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="italic mb-2">
                "I was terrified when my dentist told me I needed a root canal, but Dr. Rockson at Indira Dental Clinic
                made the experience surprisingly comfortable. He explained everything clearly, the procedure was
                painless, and my tooth feels great now. I wish I hadn't delayed treatment due to fear!"
              </p>
              <p className="font-medium">- Ravi K., Vellore</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Preventing the Need for Root Canal Treatment</h2>
          <p>While not all root canal situations can be prevented, you can reduce your risk by:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Practicing good oral hygiene (brushing twice daily and flossing once daily)</li>
            <li>Visiting your dentist regularly for check-ups and cleanings</li>
            <li>Wearing a mouthguard during sports to prevent dental trauma</li>
            <li>Avoiding chewing hard foods like ice or hard candy</li>
            <li>Addressing tooth decay promptly before it reaches the pulp</li>
            <li>Treating gum disease early to prevent it from affecting the roots</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Related Services</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <Link href="/services/root-canal-treatment/single-sitting-rct" className="text-blue-600 hover:underline">
                Single-Sitting Root Canal Treatment
              </Link>
            </li>
            <li>
              <Link href="/services/root-canal-treatment/multi-visit-rct" className="text-blue-600 hover:underline">
                Multi-Visit Root Canal Treatment
              </Link>
            </li>
            <li>
              <Link href="/services/root-canal-treatment/re-rct" className="text-blue-600 hover:underline">
                Root Canal Retreatment (Re-RCT)
              </Link>
            </li>
            <li>
              <Link href="/services/root-canal-treatment/post-and-core" className="text-blue-600 hover:underline">
                Post and Core Treatment
              </Link>
            </li>
          </ul>

          <div className="bg-primary/10 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-4">Schedule Your Consultation</h3>
            <p className="mb-4">
              If you're experiencing tooth pain or have been told you need a root canal, don't delay treatment. Contact
              Indira Dental Clinic in Vellore today to schedule a consultation with Dr. Rockson Samuel.
            </p>
            <p className="mb-4">
              <strong>Location:</strong>{" "}
              <a
                href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Indira Dental Clinic, Vellore
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">📅 Book Your Consultation</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/services/root-canal-treatment">Learn More About Our RCT Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
