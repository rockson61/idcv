import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tooth Sensitivity Treatment | Indira Dental Clinic Vellore",
  description:
    "Expert treatment for sensitive teeth at Indira Dental Clinic. Learn about causes, prevention, and our effective solutions for tooth sensitivity. Book now!",
}

export default function ToothSensitivityPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Tooth Sensitivity Treatment</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          <strong>Tooth sensitivity</strong> (dentin hypersensitivity) is a common dental problem characterized by
          sharp, temporary pain when teeth are exposed to certain stimuli such as hot, cold, sweet, or acidic foods and
          beverages. At Indira Dental Clinic in Vellore, we provide comprehensive diagnosis and effective treatment
          options for sensitive teeth.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What Causes Tooth Sensitivity?</h2>
        <p>
          Tooth sensitivity occurs when the dentin (the layer beneath the enamel) becomes exposed. This can happen due
          to:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Enamel erosion from acidic foods and beverages</li>
          <li>Tooth decay or cavities</li>
          <li>Gum recession exposing tooth roots</li>
          <li>Worn fillings or fractured teeth</li>
          <li>Teeth grinding or clenching (bruxism)</li>
          <li>Recent dental procedures (temporary sensitivity)</li>
          <li>Excessive use of teeth whitening products</li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Diagnosing Tooth Sensitivity</h3>
          <p>
            At Indira Dental Clinic, our dentists will perform a comprehensive examination to identify the cause of your
            tooth sensitivity, which may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Visual examination of teeth and gums</li>
            <li>Dental history review</li>
            <li>Testing tooth response to temperature changes</li>
            <li>Dental X-rays to check for decay or other issues</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Treatment Options for Sensitive Teeth</h2>
        <p>Our approach to treating tooth sensitivity depends on the underlying cause and severity of your symptoms:</p>

        <table className="w-full border-collapse my-6">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border p-2 text-left">Treatment</th>
              <th className="border p-2 text-left">How It Works</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Desensitizing Toothpaste</td>
              <td className="border p-2">
                Contains compounds that block transmission of sensation from the tooth surface to the nerve
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Fluoride Gel Treatment</td>
              <td className="border p-2">Strengthens tooth enamel and reduces sensitivity</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Dental Bonding</td>
              <td className="border p-2">Applies resin to exposed root surfaces to protect them</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Gum Grafting</td>
              <td className="border p-2">Covers exposed roots with gum tissue to reduce sensitivity</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Root Canal Therapy</td>
              <td className="border p-2">For severe cases where other treatments haven't worked</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prevention Tips</h2>
        <p>Prevent tooth sensitivity with these daily habits:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Use a soft-bristled toothbrush and gentle brushing technique</li>
          <li>Avoid acidic foods and beverages when possible</li>
          <li>Wait 30 minutes after eating acidic foods before brushing</li>
          <li>Use fluoride toothpaste designed for sensitive teeth</li>
          <li>Wear a nightguard if you grind your teeth</li>
          <li>Maintain regular dental check-ups</li>
        </ul>

        <blockquote className="bg-blue-50 p-4 border-l-4 border-blue-500 my-6">
          <p className="italic">
            "According to the{" "}
            <a
              href="https://www.ada.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              American Dental Association
            </a>
            , approximately 1 in 8 adults suffers from tooth sensitivity. With proper dental care and treatment, most
            cases can be effectively managed."
          </p>
        </blockquote>

        <div className="my-8">
          <h3 className="text-xl font-semibold mb-4">Patient Testimonial</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="italic mb-2">
              "I couldn't enjoy ice cream or hot coffee without wincing in pain. After visiting Dr. Rockson at Indira
              Dental Clinic, he identified the cause of my sensitivity and recommended a treatment plan. Within weeks, I
              was able to enjoy my favorite foods again without discomfort!"
            </p>
            <p className="font-medium">- Suresh T., Vellore</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Dental Conditions</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <Link href="/conditions/bad-breath" className="text-blue-600 hover:underline">
              Bad Breath
            </Link>
          </li>
          <li>
            <Link href="/conditions/gum-disease" className="text-blue-600 hover:underline">
              Gum Disease
            </Link>
          </li>
          <li>
            <Link href="/conditions/tooth-decay" className="text-blue-600 hover:underline">
              Tooth Decay
            </Link>
          </li>
        </ul>

        <div className="bg-primary/10 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Get Relief from Tooth Sensitivity</h3>
          <p className="mb-4">
            Don't let sensitive teeth prevent you from enjoying your favorite foods and beverages. Visit our clinic in
            Vellore for a comprehensive evaluation and personalized treatment plan.
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
              <Link href="/contact">📅 Book Your Appointment</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
