import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Affordable Dental Bonding in Vellore 2024 | Cosmetic Dentistry | Indira Dental Clinic",
  description:
    "Transform your smile with dental bonding at Indira Dental Clinic in Vellore. Fix chipped, discolored, or gapped teeth with our expert cosmetic dentistry services at budget-friendly prices.",
}

export default function DentalBondingPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Expert Dental Bonding in Vellore</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          <strong>Dental bonding</strong> is a versatile cosmetic dental procedure that can transform your smile in just
          one visit. At Indira Dental Clinic in Vellore, our expert dentists use tooth-colored composite resin to repair
          damaged, discolored, or gapped teeth, giving you a natural-looking and beautiful smile.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What is Dental Bonding?</h2>
            <p>
              Dental bonding is a procedure where a tooth-colored resin material is applied to the tooth surface and
              hardened with a special light. This bonds the material to the tooth to improve a person's smile. Unlike
              veneers or crowns, bonding can be done with minimal preparation of the tooth and often without anesthesia.
            </p>
            <p className="mt-4">
              The composite resin used in bonding can be shaped and polished to match the surrounding teeth, making it
              an excellent solution for minor cosmetic issues.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Dental Bonding Procedure"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">When is Dental Bonding Recommended?</h2>
        <p>Our dentists may recommend dental bonding for:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Repairing chipped or cracked teeth</li>
          <li>Improving the appearance of discolored teeth</li>
          <li>Closing small gaps between teeth</li>
          <li>Making teeth look longer</li>
          <li>Changing the shape of teeth</li>
          <li>Protecting exposed tooth roots due to gum recession</li>
          <li>As a cosmetic alternative to amalgam fillings</li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">The Dental Bonding Procedure</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Preparation:</strong> Little preparation is needed. Anesthesia is often not necessary unless
              bonding is being used to fill a decayed tooth.
            </li>
            <li>
              <strong>Shade Selection:</strong> Your dentist will use a shade guide to select a composite resin color
              that closely matches your natural tooth color.
            </li>
            <li>
              <strong>Surface Preparation:</strong> The surface of the tooth is roughened and a conditioning liquid is
              applied to help the bonding material adhere.
            </li>
            <li>
              <strong>Application:</strong> The tooth-colored, putty-like resin is applied, molded, and smoothed to the
              desired shape.
            </li>
            <li>
              <strong>Curing:</strong> The material is hardened using a special light that activates chemicals in the
              bonding material.
            </li>
            <li>
              <strong>Finishing:</strong> After the material hardens, your dentist will further trim, shape, and polish
              it to match the sheen of the rest of the tooth surface.
            </li>
          </ol>
          <p className="mt-4">The entire procedure typically takes 30 to 60 minutes per tooth to complete.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Advantages of Dental Bonding</h2>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
            <p>One of the least expensive cosmetic dental procedures compared to veneers and crowns.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Quick Procedure</h3>
            <p>Can be completed in a single visit, usually without anesthesia.</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Minimally Invasive</h3>
            <p>Requires minimal removal of tooth enamel compared to veneers or crowns.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Versatile Solution</h3>
            <p>Can address multiple cosmetic issues with a single treatment approach.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Caring for Bonded Teeth</h2>
        <p>To maintain your dental bonding and extend its lifespan:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Avoid biting on hard objects like ice, pens, or fingernails</li>
          <li>Don't use your teeth to open packages or bottles</li>
          <li>Minimize consumption of coffee, tea, and red wine which can stain</li>
          <li>Quit smoking to prevent discoloration</li>
          <li>Maintain good oral hygiene with regular brushing and flossing</li>
          <li>Schedule regular dental check-ups and cleanings</li>
        </ul>

        <blockquote className="bg-blue-50 p-4 border-l-4 border-blue-500 my-6">
          <p className="italic">
            "Dental bonding is an excellent option for patients seeking immediate cosmetic improvements without
            extensive dental work. While not as durable as veneers or crowns, with proper care, bonding can last 3-10
            years before needing touch-ups or replacement."
          </p>
        </blockquote>

        <div className="my-8">
          <h3 className="text-xl font-semibold mb-4">Patient Testimonial</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="italic mb-2">
              "I had a chipped front tooth that made me self-conscious about smiling. Dr. Rockson at Indira Dental
              Clinic recommended dental bonding, and I couldn't be happier with the results! The procedure was quick,
              painless, and the repaired tooth looks completely natural. I can smile confidently again!"
            </p>
            <p className="font-medium">- Kavitha S., Vellore</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Dental Bonding vs. Other Cosmetic Options</h2>
        <table className="w-full border-collapse my-6">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border p-2 text-left">Treatment</th>
              <th className="border p-2 text-left">Pros</th>
              <th className="border p-2 text-left">Cons</th>
              <th className="border p-2 text-left">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Dental Bonding</td>
              <td className="border p-2">Quick, affordable, minimally invasive</td>
              <td className="border p-2">Less durable, can stain</td>
              <td className="border p-2">Minor repairs, small gaps</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Veneers</td>
              <td className="border p-2">Durable, stain-resistant, natural look</td>
              <td className="border p-2">More expensive, requires enamel removal</td>
              <td className="border p-2">Major color or shape changes</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Crowns</td>
              <td className="border p-2">Very durable, full protection</td>
              <td className="border p-2">Most expensive, significant tooth reduction</td>
              <td className="border p-2">Severely damaged teeth</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Cosmetic Dentistry Services</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <Link href="/services/cosmetic-dentistry/veneers" className="text-blue-600 hover:underline">
              Dental Veneers
            </Link>
          </li>
          <li>
            <Link href="/services/cosmetic-dentistry/smile-makeover" className="text-blue-600 hover:underline">
              Smile Makeover
            </Link>
          </li>
          <li>
            <Link href="/services/cosmetic-dentistry/teeth-whitening" className="text-blue-600 hover:underline">
              Teeth Whitening
            </Link>
          </li>
        </ul>

        <div className="bg-primary/10 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Transform Your Smile with Dental Bonding</h3>
          <p className="mb-4">
            If you have minor cosmetic dental concerns, dental bonding could be the quick, affordable solution you're
            looking for. Contact Indira Dental Clinic in Vellore to schedule a consultation and learn if bonding is
            right for you.
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
              <Link href="/services/cosmetic-dentistry">View All Cosmetic Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
