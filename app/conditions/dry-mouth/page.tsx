import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dry Mouth (Xerostomia) | Dental Conditions | Indira Dental Clinic Vellore",
  description:
    "Learn about dry mouth causes, symptoms, and treatments. Our Vellore dental clinic offers solutions for xerostomia to improve your oral health and comfort.",
}

export default function DryMouthPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Dry Mouth (Xerostomia)</h1>
        <p className="text-lg text-gray-600">
          Understanding the causes, symptoms, and treatments for insufficient saliva production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Person experiencing dry mouth symptoms"
            width={600}
            height={400}
            className="rounded-lg shadow-md mb-6"
          />

          <h2 id="what-is-dry-mouth" className="text-2xl font-semibold mb-4">
            What is Dry Mouth?
          </h2>
          <p className="mb-4">
            Dry mouth, or xerostomia, is a condition that occurs when your salivary glands don't produce enough saliva
            to keep your mouth moist. Saliva is essential for oral health as it helps prevent tooth decay, aids in
            digestion, makes chewing and swallowing easier, and helps you taste food.
          </p>

          <h2 id="symptoms" className="text-2xl font-semibold mb-4 mt-8">
            Symptoms of Dry Mouth
          </h2>
          <p className="mb-4">Common signs and symptoms of dry mouth include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>A sticky, dry feeling in your mouth</li>
            <li>Frequent thirst</li>
            <li>Sores in the mouth; sores or split skin at the corners of your mouth</li>
            <li>Cracked lips</li>
            <li>A dry feeling in your throat</li>
            <li>A burning or tingling sensation in your mouth and especially on your tongue</li>
            <li>A dry, red, raw tongue</li>
            <li>Problems speaking or difficulty tasting, chewing and swallowing</li>
            <li>Hoarseness, dry nasal passages, sore throat</li>
            <li>Bad breath</li>
          </ul>

          <h2 id="causes" className="text-2xl font-semibold mb-4 mt-8">
            Causes of Dry Mouth
          </h2>
          <p className="mb-4">Dry mouth can be caused by various factors:</p>

          <h3 id="medications" className="text-xl font-medium mb-3 mt-6">
            Medications
          </h3>
          <p className="mb-4">Many prescription and over-the-counter medications can cause dry mouth, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Antihistamines and decongestants</li>
            <li>Blood pressure medications</li>
            <li>Antidepressants</li>
            <li>Painkillers</li>
            <li>Diuretics</li>
            <li>Muscle relaxants</li>
          </ul>

          <h3 id="medical-conditions" className="text-xl font-medium mb-3 mt-6">
            Medical Conditions
          </h3>
          <p className="mb-4">Several health conditions can cause dry mouth, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Sjögren's syndrome (an autoimmune disorder)</li>
            <li>Diabetes</li>
            <li>HIV/AIDS</li>
            <li>Alzheimer's disease</li>
            <li>Stroke</li>
            <li>Anxiety disorders</li>
            <li>Depression</li>
          </ul>

          <h3 id="other-causes" className="text-xl font-medium mb-3 mt-6">
            Other Causes
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Radiation therapy to the head and neck</li>
            <li>Chemotherapy</li>
            <li>Nerve damage</li>
            <li>Dehydration</li>
            <li>Tobacco use</li>
            <li>Alcohol consumption</li>
            <li>Recreational drug use</li>
            <li>Breathing through your mouth</li>
          </ul>

          <h2 id="complications" className="text-2xl font-semibold mb-4 mt-8">
            Complications of Dry Mouth
          </h2>
          <p className="mb-4">If left untreated, dry mouth can lead to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Increased plaque, tooth decay and gum disease</li>
            <li>Mouth sores</li>
            <li>Yeast infection in the mouth (thrush)</li>
            <li>Cracked lips</li>
            <li>Poor nutrition from having problems with chewing and swallowing</li>
            <li>Decreased quality of life</li>
          </ul>

          <h2 id="treatment" className="text-2xl font-semibold mb-4 mt-8">
            Treatment for Dry Mouth
          </h2>
          <p className="mb-4">Treatment for dry mouth depends on the cause and may include:</p>

          <h3 id="medication-changes" className="text-xl font-medium mb-3 mt-6">
            Medication Changes
          </h3>
          <p className="mb-4">
            If your dry mouth is caused by medication, your doctor might adjust your dosage or switch you to a different
            medication that doesn't cause dry mouth.
          </p>

          <h3 id="saliva-stimulants" className="text-xl font-medium mb-3 mt-6">
            Saliva Stimulants
          </h3>
          <p className="mb-4">
            Prescription medications that stimulate saliva production, such as pilocarpine (Salagen) and cevimeline
            (Evoxac).
          </p>

          <h3 id="saliva-substitutes" className="text-xl font-medium mb-3 mt-6">
            Saliva Substitutes
          </h3>
          <p className="mb-4">Over-the-counter artificial saliva products in the form of a spray, swab or gel.</p>

          <h2 id="home-remedies" className="text-2xl font-semibold mb-4 mt-8">
            Home Remedies and Lifestyle Changes
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Sip water frequently throughout the day</li>
            <li>Avoid caffeine, alcohol, and tobacco</li>
            <li>Breathe through your nose, not your mouth</li>
            <li>Use a humidifier at night</li>
            <li>Chew sugar-free gum or suck on sugar-free hard candies</li>
            <li>Avoid salty or spicy foods</li>
            <li>Use alcohol-free mouthwash</li>
            <li>Try over-the-counter saliva substitutes</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-xl font-semibold mb-4 text-primary">Schedule Your Consultation</h3>
          <p className="mb-4">
            If you're experiencing symptoms of dry mouth, contact Indira Dental Clinic today for a comprehensive
            evaluation and personalized treatment plan.
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
            <h3 id="faq-permanent" className="text-xl font-medium mb-2">
              Is dry mouth permanent?
            </h3>
            <p>
              Not necessarily. If dry mouth is caused by medication, changing the medication or dosage may resolve the
              issue. If it's caused by a medical condition, treating the underlying condition may improve symptoms.
              However, some causes of dry mouth, such as radiation therapy, may result in permanent changes to salivary
              gland function.
            </p>
          </div>

          <div>
            <h3 id="faq-serious" className="text-xl font-medium mb-2">
              Is dry mouth serious?
            </h3>
            <p>
              While dry mouth itself isn't usually serious, it can lead to serious oral health problems if left
              untreated, including increased risk of tooth decay, gum disease, and oral infections. It can also
              significantly impact quality of life.
            </p>
          </div>

          <div>
            <h3 id="faq-dentist" className="text-xl font-medium mb-2">
              How can a dentist help with dry mouth?
            </h3>
            <p>
              A dentist can help identify the cause of dry mouth, recommend appropriate treatments, prescribe
              medications to stimulate saliva production, and provide preventive care to protect your teeth from decay.
              They can also recommend products specifically designed for dry mouth relief.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
