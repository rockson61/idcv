import Link from "next/link"
import { ArrowLeft, Check, DollarSign } from "lucide-react"

export const metadata = {
  title: "Affordable Orthodontic Treatment for Medical Tourists | Indira Dental Clinic",
  description:
    "Get high-quality braces and clear aligners at 70-80% lower costs than Western countries. Our dental tourism packages include comprehensive orthodontic care.",
  keywords:
    "orthodontic treatment India, affordable braces, dental tourism orthodontics, clear aligners India, best orthodontist Vellore",
}

export default function OrthodonticTreatmentPage() {
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

      <h1 className="text-3xl md:text-4xl font-bold mb-6">Orthodontic Treatment for International Patients</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <p className="text-lg mb-6">
            At Indira Dental Clinic in Vellore, we offer comprehensive orthodontic treatments at a fraction of the cost
            compared to the US, UK, Europe, and Australia. Straighten your teeth and achieve a beautiful smile while
            enjoying significant savings with our dental tourism packages.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Orthodontic Treatment?</h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Save 70-80% on orthodontic treatments compared to Western countries</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Experienced orthodontist Dr. Rockson Samuel with specialized training</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Advanced digital treatment planning for precise results</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Multiple orthodontic options including traditional braces, ceramic braces, and clear aligners</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Comprehensive care with remote monitoring for international patients</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Orthodontic Treatment Options</h2>

          <p className="mb-4">We offer a variety of orthodontic solutions to meet your specific needs:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Traditional metal braces - effective and economical</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Ceramic braces - tooth-colored for a more discreet appearance</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Self-ligating braces - requiring fewer adjustments</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Clear aligners - removable and nearly invisible</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Accelerated orthodontics - for faster treatment times</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" />
              <span>Retainers - to maintain your results after treatment</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Orthodontic Treatment Pricing</h3>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Metal Braces (Full)</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹25,000 - ₹35,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Ceramic Braces (Full)</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹35,000 - ₹45,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Self-Ligating Braces</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹40,000 - ₹50,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Clear Aligners (Full)</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹60,000 - ₹1,00,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Limited Treatment</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹15,000 - ₹25,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-blue-100">
              <span className="font-medium">Retainers (per arch)</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="font-semibold">₹3,000 - ₹8,000</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            * Prices are approximate and may vary based on individual case complexity. A detailed treatment plan with
            exact costs will be provided after consultation.
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <h4 className="font-semibold mb-2">International Patient Special</h4>
            <p className="text-sm mb-3">Book your orthodontic treatment as an international patient and receive:</p>
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
                <span>Complimentary remote monitoring between visits</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Orthodontic Treatment Process for International Patients</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
            <p className="text-gray-600">
              Begin with a video consultation to discuss your orthodontic needs, review any existing records, and
              develop a preliminary treatment plan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Treatment Planning</h3>
            <p className="text-gray-600">
              We'll create a customized treatment plan based on your specific needs and preferences, including the type
              of braces and estimated treatment duration.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">First Visit to India</h3>
            <p className="text-gray-600">
              During your first visit (7-10 days), we'll take comprehensive records, place your braces or start clear
              aligner treatment, and provide detailed care instructions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2">Remote Monitoring</h3>
            <p className="text-gray-600">
              Between visits, we'll monitor your progress through virtual consultations and provide guidance for any
              adjustments needed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              5
            </div>
            <h3 className="text-lg font-semibold mb-2">Follow-up Visits</h3>
            <p className="text-gray-600">
              Depending on your treatment plan, you'll need to return for adjustments every 3-6 months. Each visit
              typically requires 3-5 days in India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 font-bold mb-4">
              6
            </div>
            <h3 className="text-lg font-semibold mb-2">Treatment Completion</h3>
            <p className="text-gray-600">
              During your final visit, we'll remove your braces, provide retainers, and give you instructions for
              maintaining your new smile.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              How many visits to India will I need for orthodontic treatment?
            </h3>
            <p className="text-gray-700">
              Most international patients require 4-6 visits over the course of treatment, which typically lasts 12-24
              months. The initial visit is the longest (7-10 days), with follow-up visits requiring 3-5 days each.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Can I get orthodontic treatment if I have other dental issues?
            </h3>
            <p className="text-gray-700">
              Yes, we often address other dental concerns before or during orthodontic treatment. Issues like cavities,
              gum disease, or missing teeth will be evaluated during your initial consultation and incorporated into
              your comprehensive treatment plan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              What if an emergency occurs when I'm back in my home country?
            </h3>
            <p className="text-gray-700">
              We provide detailed emergency care instructions and remain available for virtual consultations. We can
              also guide you on finding local orthodontic support for temporary relief until your next scheduled visit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Are clear aligners as effective as traditional braces?</h3>
            <p className="text-gray-700">
              Clear aligners are highly effective for many orthodontic issues, but complex cases may benefit more from
              traditional braces. During your consultation, we'll recommend the most appropriate treatment option based
              on your specific needs and goals.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Ready to Start Your Orthodontic Journey?</h2>
        <p className="text-lg mb-6">
          Contact us today to schedule your consultation and learn more about our orthodontic services for international
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
