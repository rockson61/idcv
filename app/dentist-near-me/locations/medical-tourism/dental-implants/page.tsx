import Link from "next/link"
import { ArrowLeft, Check, DollarSign } from "lucide-react"

export const metadata = {
  title: "Affordable Dental Implants for Medical Tourists | Indira Dental Clinic",
  description:
    "Get high-quality dental implants at 70-80% lower costs than Western countries. Our dental tourism packages include accommodation assistance and airport transfers.",
  keywords:
    "dental implants India, affordable dental implants, dental tourism implants, dental implant cost India, best implant dentist Vellore",
}

export default function DentalImplantsPage() {
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

      <h1 className="text-3xl md:text-4xl font-bold mb-6">Dental Implants for International Patients</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <p className="text-lg mb-6">
            At Indira Dental Clinic in Vellore, we offer world-class dental implant treatments at a fraction of the cost
            compared to the US, UK, Europe, and Australia. Our dental tourism packages are designed to provide you with
            exceptional care, significant savings, and a comfortable experience.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Dental Implants?</h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Save 70-80% on dental implant costs compared to Western countries</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Experienced implantologist Dr. Rockson Samuel with international training</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Premium quality implants from leading global manufacturers</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>State-of-the-art digital planning and guided implant placement</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Comprehensive care including accommodation assistance and airport transfers</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Dental Implant Procedures</h2>

          <p className="mb-4">We offer a range of dental implant solutions to meet your specific needs:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Single tooth implants</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Multiple tooth implants</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Full-arch implant-supported dentures</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>All-on-4 and All-on-6 implant solutions</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Bone grafting and sinus lift procedures when needed</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Dental Implant Pricing</h3>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Single Tooth Implant</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹25,000 - ₹35,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Implant + Abutment + Crown</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹35,000 - ₹45,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">All-on-4 (per arch)</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹1,50,000 - ₹2,00,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Bone Grafting</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹10,000 - ₹25,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Sinus Lift</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹15,000 - ₹30,000</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            * Prices are approximate and may vary based on individual case complexity. A detailed treatment plan with
            exact costs will be provided after consultation.
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <h4 className="font-semibold mb-2">International Patient Special</h4>
            <p className="text-sm mb-3">Book your dental implant treatment as an international patient and receive:</p>
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
        <h2 className="text-2xl font-semibold mb-6">Dental Implant Treatment Process for International Patients</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
            <p className="text-gray-600">
              Begin with a video consultation to discuss your needs, review any existing records, and develop a
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
            <h3 className="text-lg font-semibold mb-2">In-Person Assessment</h3>
            <p className="text-gray-600">
              Upon arrival, we'll conduct a comprehensive examination, take necessary scans, and finalize your treatment
              plan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2">Implant Placement</h3>
            <p className="text-gray-600">
              The dental implant surgery is performed using the latest techniques for minimal discomfort and optimal
              results.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              5
            </div>
            <h3 className="text-lg font-semibold mb-2">Healing Period</h3>
            <p className="text-gray-600">
              Depending on your case, you may return home during the osseointegration period (3-6 months) or stay for
              the entire treatment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              6
            </div>
            <h3 className="text-lg font-semibold mb-2">Final Restoration</h3>
            <p className="text-gray-600">
              Return for the placement of your custom-made crown, bridge, or denture, completing your smile
              transformation.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              How long will I need to stay in India for dental implant treatment?
            </h3>
            <p className="text-gray-700">
              For a standard single implant, you'll typically need two visits: 3-4 days for the initial implant
              placement, then another 3-4 days for the final crown placement after 3-6 months. For more complex cases
              like All-on-4, a stay of 10-14 days may be required.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Are the dental implants used of international quality?</h3>
            <p className="text-gray-700">
              Yes, we use only premium implant systems from globally recognized manufacturers that meet international
              standards for quality and reliability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              What if I have complications after returning to my home country?
            </h3>
            <p className="text-gray-700">
              We provide detailed aftercare instructions and remain available for virtual consultations. We also can
              coordinate with local dentists in your area if needed. Our implants come with a warranty for your peace of
              mind.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">How do I start the process as an international patient?</h3>
            <p className="text-gray-700">
              Contact us via email or phone to schedule a video consultation. We'll guide you through the entire
              process, from initial assessment to planning your visit to India.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Ready to Transform Your Smile?</h2>
        <p className="text-lg mb-6">
          Contact us today to schedule your consultation and learn more about our dental implant services for
          international patients.
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
