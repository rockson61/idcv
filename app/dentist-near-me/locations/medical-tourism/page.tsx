import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Globe, Banknote, Award, Clock, ArrowRight, Check, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Tourism in Tamil Nadu | Affordable Dental Care - Dr. Rockson Samuel",
  description:
    "Experience world-class dental care at 70% less cost with Dr. Rockson Samuel in Vellore, Tamil Nadu. Premium dental treatments including implants, RCT, and cosmetic dentistry for international patients.",
  keywords:
    "dental tourism India, affordable dental care Tamil Nadu, dental implants India, best dentist Vellore, medical tourism, Dr. Rockson Samuel",
}

const treatments = [
  {
    name: "Dental Implants",
    indiaPrice: "₹15,000 - ₹35,000",
    usPrice: "$3,000 - $5,000",
    ukPrice: "£2,500 - £4,000",
    savings: "Up to 75%",
    path: "/dentist-near-me/locations/medical-tourism/dental-implants",
    description: "Premium quality dental implants with lifetime warranty",
  },
  {
    name: "Root Canal Treatment",
    indiaPrice: "₹3,500 - ₹8,000",
    usPrice: "$1,000 - $1,500",
    ukPrice: "£700 - £1,000",
    savings: "Up to 70%",
    path: "/dentist-near-me/locations/medical-tourism/root-canal-treatment",
    description: "Single-visit RCT with advanced rotary instruments",
  },
  {
    name: "Cosmetic Dentistry",
    indiaPrice: "₹2,000 - ₹25,000",
    usPrice: "$500 - $3,000",
    ukPrice: "£400 - £2,500",
    savings: "Up to 65%",
    path: "/dentist-near-me/locations/medical-tourism/cosmetic-dentistry",
    description: "Veneers, teeth whitening, and smile makeovers",
  },
  {
    name: "Orthodontic Treatment",
    indiaPrice: "₹25,000 - ₹45,000",
    usPrice: "$3,500 - $8,000",
    ukPrice: "£2,500 - £6,000",
    savings: "Up to 80%",
    path: "/dentist-near-me/locations/medical-tourism/orthodontic-treatment",
    description: "Invisible aligners and ceramic braces",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "United States",
    treatment: "Full Mouth Rehabilitation",
    quote:
      "I saved over $15,000 on my dental work by choosing Dr. Rockson Samuel in Vellore. The quality of care was exceptional, and I got to explore beautiful Tamil Nadu during my recovery.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    country: "United Kingdom",
    treatment: "Dental Implants",
    quote:
      "After being quoted £8,000 for implants in London, I paid just £2,200 in India with Dr. Samuel. The clinic is modern, clean, and the staff is incredibly professional.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    country: "Australia",
    treatment: "Smile Makeover",
    quote:
      "My smile transformation with Dr. Rockson was life-changing and cost less than half of what I would have paid in Sydney. The results exceeded my expectations!",
    rating: 5,
  },
]

export default function MedicalTourismPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">World-Class Dental Care at Indian Prices</h1>
              <p className="text-xl mb-8">
                Experience premium dental treatments with Dr. Rockson Samuel in Vellore, Tamil Nadu at up to 70% less
                cost than Western countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#treatments"
                  className="bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <Globe className="w-5 h-5 mr-2" /> Explore Treatments
                </Link>
                <Link
                  href="tel:7010650063"
                  className="bg-transparent hover:bg-blue-500 border-2 border-white text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" /> Contact Us
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Dental Tourism in Tamil Nadu"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/90 text-blue-700 px-4 py-2 rounded-lg font-bold">Save up to 70%</div>
                    <div className="bg-white/90 text-blue-700 px-4 py-2 rounded-lg font-bold">ISO Certified Clinic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dental Tourism in Tamil Nadu?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Banknote className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Significant Cost Savings</h3>
              <p className="text-gray-700">
                Save 60-80% on dental treatments compared to prices in the US, UK, and Australia without compromising on
                quality.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">World-Class Expertise</h3>
              <p className="text-gray-700">
                Dr. Rockson Samuel is internationally trained with extensive experience in advanced dental procedures.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Minimal Wait Times</h3>
              <p className="text-gray-700">
                No long waiting lists. Get your treatment scheduled quickly and efficiently during your visit.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural Experience</h3>
              <p className="text-gray-700">
                Combine your dental treatment with exploring the rich culture, heritage, and natural beauty of Tamil
                Nadu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Dental Tourism Treatments</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Compare our affordable prices with international rates and see the incredible savings while receiving the
            same high-quality care.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-4 px-6 text-left">Treatment</th>
                  <th className="py-4 px-6 text-left">Price in India</th>
                  <th className="py-4 px-6 text-left">Price in US</th>
                  <th className="py-4 px-6 text-left">Price in UK</th>
                  <th className="py-4 px-6 text-left">Your Savings</th>
                  <th className="py-4 px-6 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {treatments.map((treatment, index) => (
                  <tr key={treatment.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-4 px-6 font-medium">
                      {treatment.name}
                      <p className="text-sm text-gray-500 mt-1">{treatment.description}</p>
                    </td>
                    <td className="py-4 px-6 text-blue-700 font-semibold">{treatment.indiaPrice}</td>
                    <td className="py-4 px-6 text-gray-500">{treatment.usPrice}</td>
                    <td className="py-4 px-6 text-gray-500">{treatment.ukPrice}</td>
                    <td className="py-4 px-6 text-green-600 font-semibold">{treatment.savings}</td>
                    <td className="py-4 px-6">
                      <Link
                        href={treatment.path}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        Details <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="tel:7010650063"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" /> Call for Personalized Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Your Dental Tourism Journey</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2">Initial Consultation</h3>
              <p className="text-gray-700 mb-4">
                Contact us via email or phone for a virtual consultation. Send us your dental records and we'll create a
                personalized treatment plan.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Free virtual consultation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Detailed treatment plan</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Transparent cost estimate</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2">Travel Planning</h3>
              <p className="text-gray-700 mb-4">
                We'll help you plan your visit to Vellore, including accommodation recommendations and local
                transportation options.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Accommodation assistance</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Airport pickup arrangement</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Sightseeing recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2">Treatment & Follow-up</h3>
              <p className="text-gray-700 mb-4">
                Receive your dental treatment with Dr. Rockson Samuel and enjoy comprehensive aftercare and follow-up
                support.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">State-of-the-art treatment</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Detailed aftercare instructions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Virtual follow-up consultations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">International Patient Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.country}</p>
                  </div>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.treatment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/patient-reviews" className="text-blue-600 hover:text-blue-800 font-medium">
              Read More Patient Reviews <ArrowRight className="w-4 h-4 ml-1 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clinic Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-6">Our Clinic in Vellore</h2>
                <p className="text-gray-700 mb-6">
                  Indira Dental Clinic is equipped with the latest dental technology and follows international
                  sterilization protocols to ensure the highest standards of care for our patients.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                    <p className="text-gray-700">
                      3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu
                      632006
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-700 font-medium">Opening Hours:</p>
                      <p className="text-gray-700">Monday - Saturday: 10 AM - 8 PM</p>
                      <p className="text-gray-700">Sunday: 10 AM - 1:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-700 font-medium">Contact:</p>
                      <p className="text-gray-700">Phone: 7010650063</p>
                      <p className="text-gray-700">Email: rockson68@hotmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Indira Dental Clinic in Vellore"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Dental Tourism Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Dr. Rockson Samuel for a free virtual consultation and discover how much you can save on your dental
            treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:7010650063"
              className="bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" /> Call: 7010650063
            </Link>
            <Link
              href="mailto:rockson68@hotmail.com"
              className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center"
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
