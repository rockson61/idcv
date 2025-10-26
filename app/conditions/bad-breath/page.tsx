import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Bad Breath (Halitosis) Treatment | Indira Dental Clinic Vellore",
  description:
    "Effective treatments for bad breath (halitosis) at Indira Dental Clinic. Learn about causes, prevention, and our professional solutions. Book your consultation today!",
}

export default function BadBreathPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Bad Breath (Halitosis) Treatment</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          <strong>Bad breath</strong>, medically known as <strong>halitosis</strong>, affects millions of people
          worldwide and can cause significant social and psychological distress. At Indira Dental Clinic in Vellore, we
          provide comprehensive diagnosis and effective treatment options for persistent bad breath.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What Causes Bad Breath?</h2>
        <p>Bad breath can be caused by various factors, including:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Poor oral hygiene leading to bacteria buildup</li>
          <li>Food particles trapped between teeth</li>
          <li>Dry mouth (xerostomia)</li>
          <li>Tobacco products</li>
          <li>Certain foods like garlic and onions</li>
          <li>Gum disease and tooth decay</li>
          <li>Medical conditions such as respiratory infections, diabetes, or liver disease</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Diagnostic Approach</h2>
        <p>
          Our experienced dentists at Indira Dental Clinic use advanced diagnostic techniques to identify the root cause
          of your bad breath. This includes:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Comprehensive oral examination</li>
          <li>Detailed medical history review</li>
          <li>Halimeter testing when necessary</li>
          <li>Assessment of saliva flow and quality</li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Treatment Options for Bad Breath</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border p-2 text-left">Treatment</th>
                <th className="border p-2 text-left">Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-medium">Professional Dental Cleaning</td>
                <td className="border p-2">Removes plaque, tartar, and bacteria that cause odor</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Periodontal Treatment</td>
                <td className="border p-2">Addresses gum disease that may be causing bad breath</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Antimicrobial Rinses</td>
                <td className="border p-2">Reduces bacteria that produce odor-causing compounds</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Saliva Stimulants</td>
                <td className="border p-2">Helps with dry mouth conditions that contribute to bad breath</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prevention Tips</h2>
        <p>Maintain fresh breath with these daily habits:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Brush twice daily with fluoride toothpaste</li>
          <li>Floss at least once a day</li>
          <li>Clean your tongue daily</li>
          <li>Stay hydrated</li>
          <li>Avoid tobacco products</li>
          <li>Schedule regular dental check-ups</li>
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
            , about 50% of adults have had bad breath at some point in their lives, making it a common concern that can
            be effectively managed with proper dental care."
          </p>
        </blockquote>

        <h3 className="text-xl font-semibold mt-8 mb-4">Why Choose Indira Dental Clinic for Bad Breath Treatment?</h3>
        <p>
          At Indira Dental Clinic in{" "}
          <Link href="/in/tamil-nadu/vellore" className="text-blue-600 hover:underline">
            Vellore
          </Link>
          , we take a comprehensive approach to treating bad breath. Our clinic is equipped with modern diagnostic tools
          and our dentists have extensive experience in identifying and treating the underlying causes of halitosis.
        </p>

        <div className="my-8">
          <h3 className="text-xl font-semibold mb-4">Patient Testimonial</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="italic mb-2">
              "I was embarrassed about my bad breath for years until I visited Indira Dental Clinic. Dr. Rockson
              identified the cause and provided effective treatment. Now I can confidently speak in close conversations
              without worrying!"
            </p>
            <p className="font-medium">- Priya R., Vellore</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Dental Conditions</h2>
        <ul className="list-disc pl-6 mb-6">
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
          <li>
            <Link href="/conditions/tooth-sensitivity" className="text-blue-600 hover:underline">
              Tooth Sensitivity
            </Link>
          </li>
        </ul>

        <div className="bg-primary/10 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Book Your Consultation Today</h3>
          <p className="mb-4">
            Don't let bad breath affect your confidence and social interactions. Visit our clinic in Vellore for a
            comprehensive evaluation and personalized treatment plan.
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
