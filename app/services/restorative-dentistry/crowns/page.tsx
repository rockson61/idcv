import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dental Crowns | Restorative Dentistry | Indira Dental Clinic Vellore",
  description:
    "Custom-made dental crowns to restore damaged teeth. Our porcelain and zirconia crowns provide strength and natural appearance. Book your consultation today!",
}

export default function CrownsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Dental Crowns</h1>
        <p className="text-lg text-gray-600">
          Restore damaged teeth with custom-made dental crowns that look and function like natural teeth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Dental crown being placed on a tooth"
            width={600}
            height={400}
            className="rounded-lg shadow-md mb-6"
          />

          <h2 id="what-are-dental-crowns" className="text-2xl font-semibold mb-4">
            What Are Dental Crowns?
          </h2>
          <p className="mb-4">
            Dental crowns are custom-made caps that fit over damaged or weakened teeth. They restore the tooth's shape,
            size, strength, and appearance. Crowns are cemented into place and fully encase the visible portion of a
            tooth that lies at and above the gum line.
          </p>

          <h2 id="when-are-crowns-needed" className="text-2xl font-semibold mb-4 mt-8">
            When Are Dental Crowns Needed?
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To protect a weak tooth from breaking or to hold together parts of a cracked tooth</li>
            <li>To restore an already broken tooth or a tooth that has been severely worn down</li>
            <li>To cover and support a tooth with a large filling when there isn't a lot of tooth left</li>
            <li>To hold a dental bridge in place</li>
            <li>To cover misshapen or severely discolored teeth</li>
            <li>To cover a dental implant</li>
            <li>To make a cosmetic modification</li>
          </ul>

          <h2 id="types-of-crowns" className="text-2xl font-semibold mb-4 mt-8">
            Types of Dental Crowns
          </h2>
          <p className="mb-4">
            At Indira Dental Clinic, we offer several types of dental crowns to meet your specific needs:
          </p>

          <h3 id="porcelain-crowns" className="text-xl font-medium mb-3 mt-6">
            Porcelain Crowns
          </h3>
          <p className="mb-4">
            Porcelain crowns provide the best natural color match to your existing teeth and are ideal for front teeth.
            They're also suitable for people with metal allergies.
          </p>

          <h3 id="porcelain-fused-to-metal" className="text-xl font-medium mb-3 mt-6">
            Porcelain-Fused-to-Metal Crowns
          </h3>
          <p className="mb-4">
            These crowns combine the strength of metal with the aesthetics of porcelain, making them durable and
            natural-looking.
          </p>

          <h3 id="zirconia-crowns" className="text-xl font-medium mb-3 mt-6">
            Zirconia Crowns
          </h3>
          <p className="mb-4">
            Made from a strong, durable type of crystal, zirconia crowns are extremely resistant to fracture and wear.
            They're also biocompatible and look very natural.
          </p>

          <h2 id="crown-procedure" className="text-2xl font-semibold mb-4 mt-8">
            The Dental Crown Procedure
          </h2>
          <p className="mb-4">Getting a dental crown typically requires two visits to our clinic:</p>

          <h3 id="first-visit" className="text-xl font-medium mb-3 mt-6">
            First Visit
          </h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Examination and preparation of the tooth</li>
            <li>Taking impressions for the custom crown</li>
            <li>Placement of a temporary crown</li>
          </ol>

          <h3 id="second-visit" className="text-xl font-medium mb-3 mt-6">
            Second Visit
          </h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Removal of the temporary crown</li>
            <li>Checking and adjusting the permanent crown for fit, color, and bite</li>
            <li>Permanent cementation of the crown</li>
          </ol>

          <h2 id="caring-for-crowns" className="text-2xl font-semibold mb-4 mt-8">
            Caring for Your Dental Crowns
          </h2>
          <p className="mb-4">
            With proper care, dental crowns can last 10-15 years or longer. Here's how to care for your crown:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Practice good oral hygiene by brushing twice a day and flossing daily</li>
            <li>Avoid chewing hard foods like ice or hard candy</li>
            <li>If you grind your teeth, consider getting a nightguard</li>
            <li>Visit us regularly for check-ups and professional cleanings</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-xl font-semibold mb-4 text-primary">Schedule Your Consultation</h3>
          <p className="mb-4">
            If you have a damaged or weakened tooth that might need a crown, contact Indira Dental Clinic today to
            schedule a consultation.
          </p>
          <div className="mb-6">
            <h4 className="font-medium mb-2">Contact Us</h4>
            <p className="mb-1">
              📞{" "}
              <a href="tel:+919876543210" className="text-blue-600 hover:underline">
                +91 98765 43210
              </a>
            </p>
            <p className="mb-1">
              ✉️{" "}
              <a href="mailto:info@indiradentalclinic.com" className="text-blue-600 hover:underline">
                info@indiradentalclinic.com
              </a>
            </p>
            <p>
              🗺️{" "}
              <a
                href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </p>
          </div>
          <Link
            href="/contact"
            className="block w-full bg-primary text-white text-center py-3 rounded-md hover:bg-primary/90 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="border-t pt-8 mt-8">
        <h2 id="faq" className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 id="faq-pain" className="text-xl font-medium mb-2">
              Is getting a dental crown painful?
            </h3>
            <p>
              No, the procedure is performed under local anesthesia to ensure you don't feel pain during the tooth
              preparation. Some patients may experience mild sensitivity after the procedure, but this typically
              subsides within a few days.
            </p>
          </div>

          <div>
            <h3 id="faq-cost" className="text-xl font-medium mb-2">
              How much do dental crowns cost?
            </h3>
            <p>
              The cost varies depending on the type of crown material, the complexity of the case, and your specific
              needs. We offer various payment options and can help you understand your insurance coverage. Contact us
              for a personalized estimate.
            </p>
          </div>

          <div>
            <h3 id="faq-insurance" className="text-xl font-medium mb-2">
              Are dental crowns covered by insurance?
            </h3>
            <p>
              Many dental insurance plans provide partial coverage for crowns, especially when they're medically
              necessary. Our team can help verify your benefits and explain your out-of-pocket costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
