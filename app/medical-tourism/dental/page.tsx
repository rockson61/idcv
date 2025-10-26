import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Dental Medical Tourism in India | Indira Dental Clinic",
  description:
    "Discover world-class dental care at affordable prices with dental tourism in India. Learn about treatments, benefits, and why choose Indira Dental Clinic for your dental needs.",
}

export default function DentalMedicalTourismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Dental Medical Tourism in India</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose India for Dental Tourism?</h2>
        <p className="mb-4">
          India has emerged as a leading destination for dental tourism, offering a perfect blend of high-quality dental
          care, affordable prices, and a rich cultural experience. Here's why thousands of patients choose India for
          their dental treatments:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>World-class dental facilities with state-of-the-art technology</li>
          <li>Highly skilled and experienced dentists, many with international training</li>
          <li>Significant cost savings compared to Western countries (up to 70% less)</li>
          <li>Minimal to no waiting times for procedures</li>
          <li>English-speaking staff for easy communication</li>
          <li>Opportunity to combine dental treatment with a memorable vacation</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Popular Dental Treatments for Medical Tourists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Dental Implants", description: "Long-lasting solution for missing teeth" },
            { title: "Smile Makeover", description: "Comprehensive treatment for a perfect smile" },
            { title: "Veneers", description: "Improve the appearance of front teeth" },
            { title: "Root Canal Treatment", description: "Save severely damaged teeth" },
            { title: "Teeth Whitening", description: "Professional brightening for a dazzling smile" },
            { title: "Orthodontic Treatment", description: "Straighten teeth with braces or clear aligners" },
          ].map((treatment, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{treatment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{treatment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Dental Tourism Experience at Indira Dental Clinic</h2>
        <p className="mb-4">
          At Indira Dental Clinic, we offer a seamless dental tourism experience tailored to your needs:
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-2">
            <strong>Initial Consultation:</strong> We offer online consultations to assess your dental needs and provide
            a treatment plan.
          </li>
          <li className="mb-2">
            <strong>Travel Planning:</strong> Our team assists with travel arrangements, including visa information and
            local accommodation recommendations.
          </li>
          <li className="mb-2">
            <strong>Treatment:</strong> Receive top-quality dental care from our experienced professionals using
            advanced technology.
          </li>
          <li className="mb-2">
            <strong>Recovery and Tourism:</strong> We provide guidance on post-treatment care and can suggest local
            attractions to visit during your recovery period.
          </li>
          <li className="mb-2">
            <strong>Follow-up Care:</strong> We ensure continuity of care with follow-up consultations, even after you
            return home.
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cost Savings with Dental Tourism</h2>
        <p className="mb-4">
          Dental treatments in India can offer significant cost savings without compromising on quality. Here's a
          comparison of average costs for common procedures:
        </p>
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Procedure</th>
              <th className="border border-gray-300 p-2">Cost in USA ($)</th>
              <th className="border border-gray-300 p-2">Cost in India ($)</th>
              <th className="border border-gray-300 p-2">Savings (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Dental Implant</td>
              <td className="border border-gray-300 p-2">3,000 - 4,500</td>
              <td className="border border-gray-300 p-2">500 - 1,500</td>
              <td className="border border-gray-300 p-2">60 - 80%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Veneers (per tooth)</td>
              <td className="border border-gray-300 p-2">900 - 2,500</td>
              <td className="border border-gray-300 p-2">250 - 500</td>
              <td className="border border-gray-300 p-2">70 - 80%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Root Canal</td>
              <td className="border border-gray-300 p-2">700 - 1,500</td>
              <td className="border border-gray-300 p-2">100 - 300</td>
              <td className="border border-gray-300 p-2">80 - 85%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Teeth Whitening</td>
              <td className="border border-gray-300 p-2">500 - 1,000</td>
              <td className="border border-gray-300 p-2">100 - 200</td>
              <td className="border border-gray-300 p-2">80 - 90%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm italic">
          Note: Costs are approximate and may vary based on individual cases and specific treatments required.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Indira Dental Clinic for Your Dental Tourism Journey?
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Experienced team of dental specialists with international exposure</li>
          <li>State-of-the-art facilities with the latest dental technology</li>
          <li>Personalized care and treatment plans</li>
          <li>Transparent pricing with no hidden costs</li>
          <li>Assistance with travel arrangements and accommodation</li>
          <li>Located in Vellore, a city known for medical excellence and rich cultural heritage</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Start Your Dental Tourism Journey Today</h2>
        <p className="mb-4">
          Experience world-class dental care while exploring the beauty and culture of India. Contact Indira Dental
          Clinic to start planning your dental tourism journey.
        </p>
        <div className="flex space-x-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "Is it safe to travel to India for dental treatment?",
              answer:
                "Yes, India has many world-class dental clinics that adhere to international standards of hygiene and safety. At Indira Dental Clinic, we follow strict sterilization protocols and use high-quality materials to ensure patient safety.",
            },
            {
              question: "How long do I need to stay in India for dental treatment?",
              answer:
                "The duration of your stay depends on the treatment you need. Some procedures like teeth whitening can be done in a single visit, while others like dental implants may require multiple visits over a few weeks or months. We can provide a detailed timeline during your initial consultation.",
            },
            {
              question: "Can I combine my dental treatment with sightseeing in India?",
              answer:
                "Many of our international patients combine their dental treatment with a vacation in India. We can help you plan your trip to include local sightseeing and cultural experiences in between your dental appointments.",
            },
            {
              question: "What if I need follow-up care after I return home?",
              answer:
                "We provide comprehensive post-treatment instructions and are available for online follow-up consultations. If needed, we can also coordinate with a local dentist in your home country for any necessary follow-up care.",
            },
          ].map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
