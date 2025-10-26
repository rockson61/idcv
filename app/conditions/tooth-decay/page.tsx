import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { RelevantQAWidget } from "@/components/widgets/relevant-qa-widget"
import { CompactServiceWidget } from "@/components/widgets/compact-service-widget"
import { CTAWidget } from "@/components/widgets/cta-widget"

export const metadata: Metadata = {
  title: "Tooth Decay Treatment | Cavity Prevention | Indira Dental Clinic",
  description:
    "Expert treatment for tooth decay and cavities at Indira Dental Clinic in Vellore. Learn about prevention, fillings, and restorative options. Schedule today!",
}

export default function ToothDecayPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { title: 'Home', href: '/' },
          { title: 'Conditions', href: '/conditions' },
          { title: 'Tooth Decay', href: '/conditions/tooth-decay' },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-6">Tooth Decay Treatment</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          <strong>Tooth decay</strong> (dental caries) is one of the most common dental problems worldwide. At Indira
          Dental Clinic in Vellore, we provide comprehensive care for preventing and treating tooth decay at all stages,
          from early detection to advanced restorative procedures.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Tooth Decay</h2>
        <p>
          Tooth decay is the destruction of tooth structure caused by acids produced by bacteria in dental plaque. The
          decay process begins with the loss of minerals from the tooth enamel and can progress through several stages
          if left untreated:
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Stage 1: White Spots</h3>
            <p>Early demineralization appears as white spots on teeth. This stage is reversible with proper care.</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Stage 2: Enamel Decay</h3>
            <p>The enamel begins to break down, forming a cavity that requires a filling.</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Stage 3: Dentin Decay</h3>
            <p>Decay reaches the softer dentin layer, causing increased sensitivity and rapid progression.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Stage 4: Pulp Involvement</h3>
            <p>Decay reaches the tooth's nerve center, causing pain and requiring root canal treatment.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Stage 5: Abscess Formation</h3>
            <p>
              Infection spreads beyond the root tip, forming an abscess that can cause serious health complications.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Risk Factors for Tooth Decay</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Poor oral hygiene</li>
          <li>Frequent snacking and sipping sugary drinks</li>
          <li>Inadequate fluoride exposure</li>
          <li>Dry mouth (reduced saliva)</li>
          <li>Eating disorders</li>
          <li>Acid reflux disease</li>
          <li>Worn dental devices or fillings</li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Our Treatment Options</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border p-2 text-left">Treatment</th>
                <th className="border p-2 text-left">Best For</th>
                <th className="border p-2 text-left">Procedure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-medium">Fluoride Treatments</td>
                <td className="border p-2">Early decay (white spots)</td>
                <td className="border p-2">Professional application of concentrated fluoride to remineralize enamel</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Dental Fillings</td>
                <td className="border p-2">Small to moderate cavities</td>
                <td className="border p-2">
                  Removal of decayed material and filling with composite resin, amalgam, or other materials
                </td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Dental Crowns</td>
                <td className="border p-2">Extensive decay</td>
                <td className="border p-2">Custom-fitted cap that covers the entire tooth surface</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Root Canal Therapy</td>
                <td className="border p-2">Pulp infection</td>
                <td className="border p-2">Removal of infected pulp, cleaning of canals, and sealing</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Extraction</td>
                <td className="border p-2">Severely damaged teeth</td>
                <td className="border p-2">Removal of tooth when restoration isn't possible</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prevention of Tooth Decay</h2>
        <p>
          At Indira Dental Clinic, we believe prevention is the best approach to tooth decay. Our preventive
          recommendations include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Regular Dental Check-ups:</strong> Every 6 months for examination and professional cleaning
          </li>
          <li>
            <strong>Proper Brushing and Flossing:</strong> Brush twice daily with fluoride toothpaste and floss once
            daily
          </li>
          <li>
            <strong>Balanced Diet:</strong> Limit sugary foods and drinks, especially between meals
          </li>
          <li>
            <strong>Dental Sealants:</strong> Protective coating applied to the chewing surfaces of back teeth
          </li>
          <li>
            <strong>Fluoride Use:</strong> Use fluoride toothpaste and consider fluoride rinses if recommended
          </li>
          <li>
            <strong>Xylitol Products:</strong> Chewing gum or mints containing xylitol can reduce bacteria
          </li>
        </ul>

        <blockquote className="bg-blue-50 p-4 border-l-4 border-blue-500 my-6">
          <p className="italic">
            "According to the{" "}
            <a
              href="https://www.who.int/news-room/fact-sheets/detail/oral-health"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              World Health Organization
            </a>
            , dental caries affects nearly 3.5 billion people worldwide. Early intervention and preventive care are
            crucial for maintaining oral health and preventing complications."
          </p>
        </blockquote>

        <div className="my-8">
          <h3 className="text-xl font-semibold mb-4">Patient Testimonial</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="italic mb-2">
              "I had been avoiding the dentist due to fear until I developed severe toothache. Dr. Rockson at Indira
              Dental Clinic made me feel comfortable and explained all my treatment options. Thanks to their gentle
              approach and modern techniques, my teeth are now healthy and I no longer fear dental visits."
            </p>
            <p className="font-medium">- Anitha K., Vellore</p>
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
            <Link href="/conditions/tooth-sensitivity" className="text-blue-600 hover:underline">
              Tooth Sensitivity
            </Link>
          </li>
        </ul>

        {/* Related Q&A and Services Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
          <RelevantQAWidget
            title="Tooth Decay Questions"
            questions={[
              {
                id: '1',
                title: 'What causes tooth decay?',
                slug: 'tooth-decay-causes-prevention',
                excerpt: 'Tooth decay is caused by bacteria in plaque that produce acids, breaking down tooth enamel.',
                helpfulVotes: 48,
                views: 1300,
                createdAt: '2023-12-20T10:30:00Z'
              },
              {
                id: '2',
                title: 'How can I prevent cavities?',
                slug: 'cavity-prevention-tips',
                excerpt: 'Prevent cavities with proper brushing, flossing, regular checkups, and limiting sugary foods.',
                helpfulVotes: 52,
                views: 1400,
                createdAt: '2023-12-18T14:15:00Z'
              },
              {
                id: '3',
                title: 'Do dental fillings hurt?',
                slug: 'dental-fillings-pain-free',
                excerpt: 'Modern dental fillings are virtually painless with local anesthesia and advanced techniques.',
                helpfulVotes: 41,
                views: 1100,
                createdAt: '2023-12-15T09:45:00Z'
              }
            ]}
            serviceName="tooth decay treatment"
          />

          <CompactServiceWidget
            title="Tooth Decay Treatment Services"
            description="Comprehensive treatment options for tooth decay at all stages."
            services={[
              { name: "Dental Fillings", slug: "general-dentistry/fillings", price: "₹800 - ₹2,500", duration: "30-60 min" },
              { name: "Root Canal Treatment", slug: "root-canal-treatment", price: "₹3,000 - ₹8,000", duration: "1-2 hours" },
              { name: "Dental Crowns", slug: "restorative-dentistry/crowns", price: "₹8,000 - ₹15,000", duration: "2 visits" },
              { name: "Fluoride Treatment", slug: "general-dentistry/fluoride", price: "₹500 - ₹1,000", duration: "15-30 min" }
            ]}
            ctaText="View All Services"
            ctaLink="/services"
          />
        </div>

        <div className="bg-primary/10 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Schedule Your Dental Check-up Today</h3>
          <p className="mb-4">
            Don't wait until tooth decay causes pain or requires extensive treatment. Visit our clinic in Vellore for a
            comprehensive dental examination and personalized prevention plan.
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
              <Link href="/services/general-dentistry/fillings">Learn About Our Filling Services</Link>
            </Button>
          </div>
        </div>

        {/* CTA Widget */}
        <CTAWidget
          title="Don't Let Tooth Decay Progress"
          description="Early treatment saves your tooth and prevents costly procedures. Get expert care from Dr. Rockson Samuel."
          primaryAction={{
            text: "Book Emergency Appointment",
            href: "/contact"
          }}
          secondaryAction={{
            text: "Ask About Prevention",
            href: "/ask-the-dentist/submit"
          }}
          benefits={[
            "Same day appointments available",
            "Pain-free treatment options",
            "Affordable pricing",
            "15+ years experience"
          ]}
          urgency={true}
          showRating={true}
          showAvailability={true}
        />
      </div>
    </main>
  )
}
