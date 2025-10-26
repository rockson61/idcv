import Link from "next/link"
import { ArrowLeft, Check, DollarSign } from "lucide-react"

export const metadata = {
  title: "Affordable Root Canal Treatment for Medical Tourists | Indira Dental Clinic",
  description:
    "Get high-quality root canal treatment at 80-90% lower costs than Western countries. Our dental tourism packages include accommodation assistance and airport transfers.",
  keywords:
    "root canal treatment India, affordable RCT, dental tourism root canal, RCT cost India, best endodontist Vellore",
}

export default function RootCanalTreatmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/dentist-near-me/locations/medical-tourism"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Back to Medical Tourism</span>
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">Root Canal Treatment for International Patients</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <p className="text-lg mb-6">
            At Indira Dental Clinic in Vellore, we offer advanced root canal treatment (RCT) at a fraction of the cost
            compared to the US, UK, Europe, and Australia. Our dental tourism packages provide exceptional endodontic
            care with significant savings.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Root Canal Treatment?</h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Save 80-90% on root canal costs compared to Western countries</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Single-visit RCT in most cases, saving you time and additional trips</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Advanced rotary endodontic technology for precise and comfortable treatment</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Digital radiography for accurate diagnosis and treatment planning</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Experienced endodontist Dr. Rockson Samuel with specialized training</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Root Canal Procedure</h2>

          <p className="mb-4">Our root canal treatment is designed to be as comfortable and efficient as possible:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Thorough diagnosis using digital X-rays and pulp testing</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Effective local anesthesia for painless treatment</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Precise cleaning and shaping of root canals using rotary instruments</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Thorough disinfection protocols to eliminate bacteria</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Biocompatible filling materials for optimal sealing</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Post-treatment crown or restoration to protect the tooth</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Root Canal Treatment Pricing</h3>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Anterior Teeth (Front)</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹3,500 - ₹4,500</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Premolars</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹4,500 - ₹5,500</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Molars</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹5,500 - ₹7,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Re-treatment (Previously RCT)</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹6,000 - ₹9,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Post & Core</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹1,500 - ₹2,500</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Crown (after RCT)</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹5,000 - ₹12,000</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            * Prices are approximate and may vary based on individual case complexity. A detailed treatment plan with
            exact costs will be provided after consultation.
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <h4 className="font-semibold mb-2">International Patient Special</h4>
            <p className="text-sm mb-3">Book your root canal treatment as an international patient and receive:</p>
            <ul className="text-sm space-y-1">
              <li className="flex items-start gap-1">
                <Check size={14} className="text-green-600 mt-1 flex-shrink-0" />
                <span>10% discount on total treatment cost</span>
              </li>
              <li className="flex items-start gap-1">
                <Check size={14} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Free airport pickup and drop</span>
              </li>
              <li className="flex items-start gap-1">
                <Check size={14} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Assistance with accommodation booking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Root Canal Treatment Process for International Patients</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
            <p className="text-gray-600">
              Begin with a video consultation to discuss your symptoms, review any existing X-rays, and develop a
              preliminary treatment plan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Travel Planning</h3>
            <p className="text-gray-600">
              We'll help coordinate your visit, including treatment scheduling, accommodation recommendations, and local
              transportation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Diagnosis & Treatment</h3>
            <p className="text-gray-600">
              Upon arrival, we'll conduct a comprehensive examination, take necessary X-rays, and perform the root canal
              treatment, often in a single visit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2">Temporary Restoration</h3>
            <p className="text-gray-600">
              After the root canal, we'll place a temporary filling or crown to protect the tooth while a permanent
              restoration is prepared.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              5
            </div>
            <h3 className="text-lg font-semibold mb-2">Final Restoration</h3>
            <p className="text-gray-600">
              Depending on your stay duration, we'll place the permanent crown or restoration to ensure long-term
              protection and function.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              6
            </div>
            <h3 className="text-lg font-semibold mb-2">Follow-up Care</h3>
            <p className="text-gray-600">
              We provide detailed aftercare instructions and remain available for virtual consultations after you return
              home.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              How long will I need to stay in India for root canal treatment?
            </h3>
            <p className="text-gray-700">
              For most cases, a stay of 3-5 days is sufficient. We can often complete the root canal procedure in a
              single visit, with a follow-up appointment to check healing and place a permanent restoration if needed.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Is root canal treatment painful?</h3>
            <p className="text-gray-700">
              With modern techniques and effective anesthesia, root canal treatment is typically no more uncomfortable
              than getting a filling. Most patients report being surprised at how painless the procedure is.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">How successful are root canal treatments?</h3>
            <p className="text-gray-700">
              Root canal treatments have a success rate of approximately 95%. With proper care, teeth that have had root
              canal treatment can last a lifetime.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              What if I have complications after returning to my home country?
            </h3>
            <p className="text-gray-700">
              We provide detailed aftercare instructions and remain available for virtual consultations. We can also
              coordinate with local dentists in your area if needed. Our treatments come with a warranty for your peace
              of mind.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Ready to Save Your Natural Tooth?</h2>
        <p className="text-lg mb-6">
          Contact us today to schedule your consultation and learn more about our root canal services for international
          patients.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:rockson68@hotmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            Email Us
          </a>
          <a
            href="tel:7010650063"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            Call: 7010650063
          </a>
          <Link
            href="/contact-us"
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            Contact Form
          </Link>
        </div>
      </div>
    </div>
  )
}
