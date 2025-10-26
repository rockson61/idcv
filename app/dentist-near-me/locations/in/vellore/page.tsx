import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Best Dental Clinic in Vellore | Indira Dental Clinic",
  description:
    "Indira Dental Clinic offers top-quality dental care in Vellore. Specializing in RCT, braces, implants & dental fillings with Dr. Rockson Samuel.",
  keywords:
    "dental clinic Vellore, dentist Vellore, best dentist Vellore, Dr Rockson Samuel, dental implants Vellore, root canal treatment Vellore",
}

export default function VelloreLocationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/dentist-near-me/locations/in/tamil-nadu"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Back to Tamil Nadu Locations</span>
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">Indira Dental Clinic in Vellore</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Indira Dental Clinic in Vellore"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-lg mb-6">
            Indira Dental Clinic is a premier dental care facility in Vellore, Tamil Nadu, led by Dr. Rockson Samuel. We
            offer comprehensive dental services using the latest technology and techniques to provide exceptional care
            to our patients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Our Specialties</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                  <span>Root Canal Treatment (RCT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                  <span>Dental Implants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                  <span>Orthodontic Treatment (Braces)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                  <span>Cosmetic Dentistry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                  <span>Dental Fillings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                  <span>Pediatric Dentistry</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Star className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                  <span>Experienced dental professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                  <span>State-of-the-art equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                  <span>Painless treatment techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                  <span>Affordable pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                  <span>Convenient location</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                  <span>Flexible appointment scheduling</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Meet Dr. Rockson Samuel</h2>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/3">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Dr. Rockson Samuel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-2">Dr. Rockson Samuel</h3>
              <p className="text-gray-600 mb-1">General Dentist</p>
              <p className="mb-4">
                Dr. Rockson Samuel is a highly skilled dental professional with extensive experience in all aspects of
                dentistry. He specializes in root canal treatments, dental implants, and cosmetic procedures, providing
                exceptional care to patients in Vellore and beyond.
              </p>
              <p>
                With a commitment to continuing education and staying updated with the latest advancements in dental
                technology, Dr. Samuel ensures that his patients receive the highest standard of care in a comfortable
                and welcoming environment.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Dental Services in Vellore</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Root Canal Treatment</h3>
              <p className="text-gray-700 mb-2">
                Painless and effective treatment to save infected teeth using advanced rotary endodontic technology.
              </p>
              <Link
                href="/services/root-canal-treatment"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Dental Implants</h3>
              <p className="text-gray-700 mb-2">
                Permanent solution for missing teeth with natural-looking, functional dental implants.
              </p>
              <Link href="/services/dental-implants" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Orthodontic Treatment</h3>
              <p className="text-gray-700 mb-2">
                Straighten your teeth with braces or clear aligners for a beautiful, aligned smile.
              </p>
              <Link
                href="/services/orthodontic-treatment"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Cosmetic Dentistry</h3>
              <p className="text-gray-700 mb-2">
                Transform your smile with veneers, whitening, and other cosmetic procedures.
              </p>
              <Link
                href="/services/cosmetic-dentistry"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Dental Fillings</h3>
              <p className="text-gray-700 mb-2">
                Restore damaged teeth with tooth-colored composite fillings for a natural appearance.
              </p>
              <Link href="/services/dental-fillings" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">Pediatric Dentistry</h3>
              <p className="text-gray-700 mb-2">
                Specialized dental care for children in a friendly, comfortable environment.
              </p>
              <Link
                href="/services/pediatric-dentistry"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn more →
              </Link>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-3">Dental Tourism in Vellore</h2>
            <p className="mb-4">
              Vellore is becoming a popular destination for dental tourism, offering high-quality dental care at a
              fraction of the cost compared to Western countries. At Indira Dental Clinic, we welcome international
              patients and provide comprehensive care packages.
            </p>
            <Link
              href="/dentist-near-me/locations/medical-tourism"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn more about our dental tourism services →
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Clinic Information</h2>

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
                      <span>Monday:</span> <span>10 AM - 8 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tuesday:</span> <span>10 AM - 8 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Wednesday:</span> <span>10 AM - 8 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Thursday:</span> <span>10 AM - 8 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday:</span> <span>10 AM - 8 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span> <span>10 AM - 8 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span> <span>10 AM - 1:30 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Location Map</h3>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Map of Indira Dental Clinic in Vellore"
                  fill
                  className="object-cover"
                />
              </div>
              <a
                href="https://maps.google.com/?q=Indira+Dental+Clinic+Vellore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block"
              >
                View on Google Maps
              </a>
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
              <a
                href="mailto:rockson68@hotmail.com"
                className="block w-full bg-gray-800 hover:bg-gray-900 text-white text-center py-3 rounded-lg font-medium transition-all"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Patient Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <p className="text-gray-700 mb-3">
              &quot;Dr. Rockson Samuel is an excellent dentist. I had my root canal treatment done here and it was
              completely painless. The clinic is clean, modern, and the staff is very friendly. Highly
              recommended!&quot;
            </p>
            <p className="font-medium">- Priya S.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <p className="text-gray-700 mb-3">
              &quot;I got my dental implants done at Indira Dental Clinic and I&apos;m extremely satisfied with the
              results. The procedure was well-explained, and the follow-up care was excellent. The price was also very
              reasonable.&quot;
            </p>
            <p className="font-medium">- Rajesh K.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <p className="text-gray-700 mb-3">
              &quot;My daughter had her braces treatment at Indira Dental Clinic. Dr. Rockson was very patient and
              gentle with her. The staff made her feel comfortable during every visit. We&apos;re very happy with the
              results!&quot;
            </p>
            <p className="font-medium">- Lakshmi M.</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/patient-reviews" className="text-blue-600 hover:text-blue-800 font-medium">
            View all patient reviews →
          </Link>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Ready to Schedule Your Appointment?</h2>
        <p className="text-lg mb-6">
          Contact Indira Dental Clinic today to book your consultation with Dr. Rockson Samuel.
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
