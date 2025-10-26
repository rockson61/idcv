import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Phone, Clock, Star } from "lucide-react"

export const metadata = {
  title: "Best Dental Clinics in Tamil Nadu | Indira Dental Clinic",
  description:
    "Find top-rated dental clinics across Tamil Nadu. Indira Dental Clinic offers affordable, high-quality dental care in Vellore and surrounding areas.",
  keywords:
    "dental clinic Tamil Nadu, dentist Tamil Nadu, best dentist Vellore, affordable dental care Tamil Nadu, dental tourism India",
}

export default function TamilNaduLocationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/dentist-near-me/locations" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
          <ArrowLeft size={16} />
          <span>Back to All Locations</span>
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">Dental Clinics in Tamil Nadu</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <p className="text-lg mb-6">
            Tamil Nadu is home to some of India&apos;s finest dental clinics, offering world-class dental care at
            affordable prices. At Indira Dental Clinic, we&apos;re proud to serve patients throughout Tamil Nadu with
            our main clinic located in Vellore.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Why Choose Indira Dental Clinic in Tamil Nadu?</h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                <Star size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Experienced Dentists</h3>
                <p>
                  Led by Dr. Rockson Samuel, our team of dental professionals brings years of expertise in all dental
                  specialties.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                <Star size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Advanced Technology</h3>
                <p>
                  Our clinics are equipped with the latest dental technology for precise diagnosis and comfortable
                  treatment.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                <Star size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Affordable Care</h3>
                <p>
                  We offer high-quality dental services at prices significantly lower than Western countries, making us
                  a popular choice for dental tourism.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                <Star size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Comprehensive Services</h3>
                <p>
                  From routine check-ups to complex procedures like implants and full mouth rehabilitation, we offer all
                  dental services under one roof.
                </p>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Popular Dental Treatments in Tamil Nadu</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Dental Implants</h3>
              <p className="text-gray-700">
                Replace missing teeth with permanent, natural-looking implants at 70-80% lower costs than abroad.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Root Canal Treatment</h3>
              <p className="text-gray-700">
                Save infected teeth with painless, single-visit RCT using advanced rotary endodontic technology.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Cosmetic Dentistry</h3>
              <p className="text-gray-700">
                Transform your smile with veneers, whitening, and smile makeovers at affordable prices.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Orthodontic Treatment</h3>
              <p className="text-gray-700">
                Straighten your teeth with braces or clear aligners under the care of experienced orthodontists.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Major Cities We Serve in Tamil Nadu</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold">Vellore</h3>
              <p className="text-sm text-gray-600">Main Clinic Location</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold">Chennai</h3>
              <p className="text-sm text-gray-600">Serving Patients</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold">Coimbatore</h3>
              <p className="text-sm text-gray-600">Serving Patients</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold">Madurai</h3>
              <p className="text-sm text-gray-600">Serving Patients</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold">Salem</h3>
              <p className="text-sm text-gray-600">Serving Patients</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold">Tiruchirapalli</h3>
              <p className="text-sm text-gray-600">Serving Patients</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-3">Dental Tourism in Tamil Nadu</h2>
            <p className="mb-4">
              Tamil Nadu is becoming a popular destination for dental tourism, attracting patients from around the world
              seeking high-quality, affordable dental care. With its rich cultural heritage, beautiful temples, and
              scenic landscapes, patients can combine their dental treatment with a memorable vacation.
            </p>
            <p>
              At Indira Dental Clinic, we offer special packages for international patients, including airport
              transfers, accommodation assistance, and comprehensive treatment plans.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Our Main Clinic in Vellore</h2>

            <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Indira Dental Clinic in Vellore"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium">Address:</p>
                  <p className="text-gray-700">
                    3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium">Phone:</p>
                  <p className="text-gray-700">7010650063</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium">Hours:</p>
                  <ul className="text-gray-700 text-sm">
                    <li className="flex justify-between">
                      <span>Monday - Saturday:</span> <span>10 AM - 8 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span> <span>10 AM - 1:30 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:7010650063"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-medium transition-all"
              >
                Call Now
              </a>
              <Link
                href="/contact-us"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition-all"
              >
                Book Appointment
              </Link>
              <Link
                href="/dentist-near-me/locations/medical-tourism"
                className="block w-full bg-gray-800 hover:bg-gray-900 text-white text-center py-3 rounded-lg font-medium transition-all"
              >
                Dental Tourism Info
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">
              What makes Indira Dental Clinic different from other dental clinics in Tamil Nadu?
            </h3>
            <p className="text-gray-700">
              Indira Dental Clinic combines advanced technology, experienced specialists, and personalized care at
              affordable prices. Dr. Rockson Samuel brings international training and expertise to provide world-class
              dental care in Vellore.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">
              How much can I save on dental treatments in Tamil Nadu compared to Western countries?
            </h3>
            <p className="text-gray-700">
              Patients typically save 70-80% on dental treatments in Tamil Nadu compared to countries like the US, UK,
              Australia, and Canada, without compromising on quality. For example, a dental implant that costs
              $3,000-$5,000 in the US may cost only $500-$800 in Tamil Nadu.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">Is it safe to get dental treatment in Tamil Nadu?</h3>
            <p className="text-gray-700">
              Yes, reputable dental clinics in Tamil Nadu like Indira Dental Clinic follow strict sterilization
              protocols and international standards of care. We use FDA-approved materials and state-of-the-art
              equipment to ensure safe and effective treatments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">How do I plan my dental tourism trip to Tamil Nadu?</h3>
            <p className="text-gray-700">
              Start by contacting us for a virtual consultation to discuss your treatment needs. Our team will help you
              plan your visit, including treatment scheduling, accommodation recommendations, and local transportation.
              We can also assist with airport transfers and sightseeing suggestions.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Ready to Experience World-Class Dental Care in Tamil Nadu?</h2>
        <p className="text-lg mb-6">
          Contact Indira Dental Clinic today to schedule your consultation and learn more about our services.
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
