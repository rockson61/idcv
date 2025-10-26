import Link from "next/link"
import { ArrowLeft, Check, DollarSign } from "lucide-react"

export const metadata = {
  title: "Affordable Cosmetic Dentistry for Medical Tourists | Indira Dental Clinic",
  description:
    "Get high-quality cosmetic dental treatments at 70-80% lower costs than Western countries. Our dental tourism packages include veneers, whitening, and smile makeovers.",
  keywords:
    "cosmetic dentistry India, affordable smile makeover, dental tourism veneers, teeth whitening India, best cosmetic dentist Vellore",
}

export default function CosmeticDentistryPage() {
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

      <h1 className="text-3xl md:text-4xl font-bold mb-6">Cosmetic Dentistry for International Patients</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <p className="text-lg mb-6">
            At Indira Dental Clinic in Vellore, we offer world-class cosmetic dentistry treatments at a fraction of the
            cost compared to the US, UK, Europe, and Australia. Transform your smile while enjoying significant savings
            with our dental tourism packages.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Cosmetic Dentistry?</h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Save 70-80% on cosmetic dental treatments compared to Western countries</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Experienced cosmetic dentist Dr. Rockson Samuel with artistic approach</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Premium quality materials from leading global manufacturers</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Digital smile design for predictable and personalized results</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Comprehensive care including accommodation assistance and airport transfers</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Cosmetic Dentistry Treatments</h2>

          <p className="mb-4">We offer a comprehensive range of cosmetic dental procedures to enhance your smile:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Porcelain veneers for a complete smile transformation</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Professional teeth whitening for a brighter smile</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Composite bonding for minor corrections and repairs</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Ceramic crowns and bridges for restored function and aesthetics</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Smile makeovers combining multiple treatments for optimal results</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Gum contouring for improved gum-to-tooth proportions</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Cosmetic Dentistry Pricing</h3>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Porcelain Veneers</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹8,000 - ₹15,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Composite Veneers</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹4,000 - ₹7,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Teeth Whitening</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹5,000 - ₹10,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Composite Bonding</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹2,000 - ₹4,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Ceramic Crown</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹5,000 - ₹12,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Gum Contouring</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹3,000 - ₹8,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Smile Makeover</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹30,000 - ₹1,50,000</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            * Prices are approximate and may vary based on individual case complexity. A detailed treatment plan with
            exact costs will be provided after consultation.
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <h4 className="font-semibold mb-2">International Patient Special</h4>
            <p className="text-sm mb-3">Book your cosmetic dental treatment as an international patient and receive:</p>
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
        <h2 className="text-2xl font-semibold mb-6">Cosmetic Dentistry Process for International Patients</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
            <p className="text-gray-600">
              Begin with a video consultation to discuss your smile goals, review photos, and develop a preliminary
              treatment plan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Digital Smile Design</h3>
            <p className="text-gray-600">
              We create a digital preview of your new smile, allowing you to visualize the results before treatment
              begins.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Travel Planning</h3>
            <p className="text-gray-600">
              We'll help coordinate your visit, including treatment scheduling, accommodation recommendations, and local
              transportation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2">In-Person Assessment</h3>
            <p className="text-gray-600">
              Upon arrival, we'll conduct a comprehensive examination, take necessary scans, and finalize your treatment
              plan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              5
            </div>
            <h3 className="text-lg font-semibold mb-2">Treatment Phase</h3>
            <p className="text-gray-600">
              Depending on your chosen procedures, treatment may be completed in a single visit or over multiple
              appointments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              6
            </div>
            <h3 className="text-lg font-semibold mb-2">Final Results & Follow-up</h3>
            <p className="text-gray-600">
              Enjoy your new smile and receive detailed care instructions. We remain available for virtual consultations
              after you return home.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              How long will I need to stay in India for cosmetic dental treatments?
            </h3>
            <p className="text-gray-700">
              The duration depends on your specific treatment plan. For veneers or crowns, typically 7-10 days are
              required. Teeth whitening can be completed in 1-2 days. A comprehensive smile makeover might require 10-14
              days or multiple visits.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">How long do cosmetic dental treatments last?</h3>
            <p className="text-gray-700">
              With proper care, porcelain veneers can last 10-15 years, ceramic crowns 10-20 years, and composite
              bonding 5-7 years. Professional teeth whitening results typically last 1-3 years depending on lifestyle
              factors.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Are the materials used of international quality?</h3>
            <p className="text-gray-700">
              Yes, we use only premium materials from globally recognized manufacturers that meet international
              standards for quality, aesthetics, and durability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">What if I'm not satisfied with the results?</h3>
            <p className="text-gray-700">
              Your satisfaction is our priority. We work closely with you throughout the process to ensure the results
              meet your expectations. Minor adjustments can be made during your stay to ensure you're completely happy
              with your new smile.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Ready to Transform Your Smile?</h2>
        <p className="text-lg mb-6">
          Contact us today to schedule your consultation and learn more about our cosmetic dentistry services for
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
