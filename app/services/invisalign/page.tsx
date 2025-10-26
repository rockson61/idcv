import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookAppointment } from "@/components/book-appointment"
import { ServiceTestimonials } from "@/components/service-testimonials"
import { ServiceFAQ } from "@/components/service-faq"

export const metadata: Metadata = {
  title: "Invisalign® Treatment in Vellore | Dr. Rockson Samuel - Cosmetic Dentist",
  description:
    "Expert Invisalign® treatment in Vellore by Dr. Rockson Samuel. Compare clear aligners vs. traditional braces, view pricing, and book your consultation today!",
  openGraph: {
    title: "Invisalign® Treatment in Vellore | Dr. Rockson Samuel",
    description:
      "Transform your smile with Invisalign® clear aligners. Expert treatment by Dr. Rockson Samuel, leading cosmetic dentist in Vellore. Book your consultation today!",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rQXThHyKgCmHkfFqu3jzNrhld9aR7y.png",
        width: 400,
        height: 500,
        alt: "Dr. Rockson Samuel - General and Cosmetic Dentist in Vellore",
      },
    ],
  },
  alternates: {
    canonical: "https://yourwebsite.com/services/invisalign",
  },
}

const YOUR_LATITUDE = 12.9699
const YOUR_LONGITUDE = 79.1555

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dr. Rockson Samuel Dental Clinic",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rQXThHyKgCmHkfFqu3jzNrhld9aR7y.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Clinic Address",
    addressLocality: "Vellore",
    addressRegion: "Tamil Nadu",
    postalCode: "632001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: YOUR_LATITUDE,
    longitude: YOUR_LONGITUDE,
  },
  url: "https://yourwebsite.com/services/invisalign",
  telephone: "YOUR_PHONE_NUMBER",
  priceRange: "₹₹₹",
  medicalSpecialty: ["Cosmetic Dentistry", "Orthodontics"],
  availableService: {
    "@type": "MedicalProcedure",
    name: "Invisalign Treatment",
    description: "Clear aligner therapy for straightening teeth without traditional braces",
  },
  employee: {
    "@type": "Dentist",
    name: "Dr. Rockson Samuel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rQXThHyKgCmHkfFqu3jzNrhld9aR7y.png",
    medicalSpecialty: ["General Dentistry", "Cosmetic Dentistry"],
    qualification: "BDS",
  },
}

// Add this to your page component
export default function InvisalignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Invisalign Braces: Pros and Cons of Clear Aligners &amp; Cost
              </h1>

              <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg"
                  alt="Woman smiling with perfect teeth after Invisalign treatment"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  unoptimized
                />
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                  Photo by Anna Shvets from Pexels
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
              <p className="mb-6">
                If you are considering <strong>aligners</strong> for a <strong>straighter smile</strong>, you might be
                wondering about the <strong>pros and cons of Invisalign</strong>. Unlike{" "}
                <strong>traditional braces</strong>, <strong>Invisalign braces</strong> are{" "}
                <strong>nearly invisible</strong>, offering a discreet way to <strong>straighten teeth</strong>. This
                guide explores everything about <strong>Invisalign treatment</strong>, including benefits, costs, and
                how to find an <strong>Invisalign doctor</strong>.
              </p>

              <h2 className="text-2xl font-semibold mb-3">What Are Invisalign Braces?</h2>
              <p className="mb-6">
                <strong>Invisalign aligners</strong> are a type of <strong>clear aligner</strong> made of{" "}
                <strong>custom-made</strong> plastic. Unlike <strong>traditional metal braces</strong>, they use a{" "}
                <strong>series of aligners</strong> to move teeth gradually.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/6627600/pexels-photo-6627600.jpeg"
                    alt="Invisalign clear aligners"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    unoptimized
                  />
                  <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                    Photo by Karolina Grabowska from Pexels
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg"
                    alt="Invisalign vs traditional braces"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    unoptimized
                  />
                  <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                    Photo by Anna Shvets from Pexels
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-3">How Invisalign Treatment Works</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>
                  A <strong>dentist</strong> or <strong>orthodontist</strong> creates a <strong>treatment plan</strong>.
                </li>
                <li>
                  You receive a <strong>set of aligners</strong> that must be worn for{" "}
                  <strong>20-22 hours daily</strong>.
                </li>
                <li>
                  Every <strong>two weeks</strong>, you switch to a new <strong>clear aligner</strong>.
                </li>
                <li>
                  Over time, teeth shift into their <strong>new smile</strong> position.
                </li>
              </ol>

              <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg"
                  alt="Dentist explaining Invisalign treatment to patient"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  unoptimized
                />
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                  Photo by Anna Shvets from Pexels
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-3">Benefits of Invisalign Treatment</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Nearly invisible</strong> compared to <strong>traditional braces</strong>.
                </li>
                <li>
                  No <strong>brackets and wires</strong>, allowing better <strong>oral hygiene</strong>.
                </li>
                <li>
                  Custom-fit aligners for <strong>predictable tooth movements</strong>.
                </li>
                <li>
                  Suitable for mild to moderate <strong>dental issues</strong>.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-3">How Much Does Invisalign Cost?</h2>
              <p className="mb-4">
                The <strong>cost of Invisalign treatment</strong> depends on factors like{" "}
                <strong>treatment duration</strong> and severity of <strong>dental issues</strong>. The{" "}
                <strong>cost of Invisalign</strong> ranges from <strong>$3,000 to $8,000</strong>, similar to{" "}
                <strong>traditional braces</strong>.
              </p>

              {/* Dentist Profile Section */}
              <section className="py-12 bg-white" id="dentist-profile">
                <div className="container mx-auto px-4">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/3">
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rQXThHyKgCmHkfFqu3jzNrhld9aR7y.png"
                          alt="Dr. Rockson Samuel - General and Cosmetic Dentist in Vellore"
                          width={400}
                          height={500}
                          className="w-full object-cover"
                          priority
                        />
                      </div>
                      <div className="bg-white p-6 shadow-lg rounded-b-lg">
                        <h3 className="text-2xl font-bold text-primary mb-2">Dr. Rockson Samuel</h3>
                        <p className="text-gray-600 font-medium">General and Cosmetic Dentist, BDS</p>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">✓</span>
                            <span>Expert in Cosmetic Dentistry</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-primary mr-2">✓</span>
                            <span>Certified Invisalign Provider</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-primary mr-2">✓</span>
                            <span>Advanced Dental Aesthetics Training</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-primary mr-2">✓</span>
                            <span>Smile Makeover Specialist</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <h2 className="text-3xl font-bold mb-6">Meet Your Dental Care Expert in Vellore</h2>
                      <p className="text-lg mb-6">
                        Dr. Rockson Samuel is a leading general and cosmetic dentist in Vellore, combining artistic
                        vision with technical expertise to create beautiful, healthy smiles. His patient-centered
                        approach and commitment to continuing education ensure that you receive the most advanced and
                        comfortable dental care available.
                      </p>

                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Expertise & Credentials</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Bachelor of Dental Surgery (BDS)</li>
                          <li>Certified in Advanced Cosmetic Dentistry</li>
                          <li>Invisalign® Certified Provider</li>
                          <li>Member, Indian Dental Association</li>
                          <li>Advanced Training in Digital Smile Design</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4">Specializations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary">Cosmetic Dentistry</h4>
                            <p>Expert in veneers, teeth whitening, and smile makeovers</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary">Invisalign Treatment</h4>
                            <p>Certified provider of clear aligner therapy</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary">Restorative Dentistry</h4>
                            <p>Specializing in crowns, bridges, and implant restorations</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary">Preventive Care</h4>
                            <p>Comprehensive dental health maintenance and education</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Orthodontic Treatment Tables Section */}
              <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Orthodontic Treatment Options</h2>

                  {/* Braces Comparison Table */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6">Types of Braces Available at Our Vellore Clinic</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                        <thead className="bg-primary text-white">
                          <tr>
                            <th className="py-3 px-4 text-left">Type of Braces</th>
                            <th className="py-3 px-4 text-left">Cost Range (₹)</th>
                            <th className="py-3 px-4 text-left">Visibility</th>
                            <th className="py-3 px-4 text-left">Treatment Time</th>
                            <th className="py-3 px-4 text-left">Best For</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Metal Braces</td>
                            <td className="py-4 px-4">25,000 - 45,000</td>
                            <td className="py-4 px-4">Highly Visible</td>
                            <td className="py-4 px-4">18-24 months</td>
                            <td className="py-4 px-4">Complex cases, budget-conscious patients</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Ceramic Braces</td>
                            <td className="py-4 px-4">35,000 - 60,000</td>
                            <td className="py-4 px-4">Less Visible</td>
                            <td className="py-4 px-4">18-24 months</td>
                            <td className="py-4 px-4">Teens and adults concerned about appearance</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Self-Ligating Braces</td>
                            <td className="py-4 px-4">45,000 - 70,000</td>
                            <td className="py-4 px-4">Moderately Visible</td>
                            <td className="py-4 px-4">12-18 months</td>
                            <td className="py-4 px-4">Patients wanting fewer adjustments</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Lingual Braces</td>
                            <td className="py-4 px-4">80,000 - 1,50,000</td>
                            <td className="py-4 px-4">Hidden (Behind Teeth)</td>
                            <td className="py-4 px-4">18-24 months</td>
                            <td className="py-4 px-4">Professionals, public figures</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Aligners Comparison Table */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6">Clear Aligner Options in Vellore</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                        <thead className="bg-primary text-white">
                          <tr>
                            <th className="py-3 px-4 text-left">Aligner Brand</th>
                            <th className="py-3 px-4 text-left">Cost Range (₹)</th>
                            <th className="py-3 px-4 text-left">Treatment Time</th>
                            <th className="py-3 px-4 text-left">Change Frequency</th>
                            <th className="py-3 px-4 text-left">Unique Features</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Invisalign</td>
                            <td className="py-4 px-4">1,20,000 - 2,50,000</td>
                            <td className="py-4 px-4">12-18 months</td>
                            <td className="py-4 px-4">1-2 weeks</td>
                            <td className="py-4 px-4">SmartTrack material, iTero scanning, proven results</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">ClearCorrect</td>
                            <td className="py-4 px-4">90,000 - 1,80,000</td>
                            <td className="py-4 px-4">12-18 months</td>
                            <td className="py-4 px-4">2 weeks</td>
                            <td className="py-4 px-4">Thinner material, more comfort, gradual movements</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Flash Aligners</td>
                            <td className="py-4 px-4">80,000 - 1,50,000</td>
                            <td className="py-4 px-4">9-15 months</td>
                            <td className="py-4 px-4">1 week</td>
                            <td className="py-4 px-4">Indian brand, affordable, good for mild cases</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">32Watts Clear Aligners</td>
                            <td className="py-4 px-4">70,000 - 1,30,000</td>
                            <td className="py-4 px-4">9-15 months</td>
                            <td className="py-4 px-4">2 weeks</td>
                            <td className="py-4 px-4">Made in India, competitive pricing</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Treatment Comparison Table */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Orthodontic Treatment Comparison</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                        <thead className="bg-primary text-white">
                          <tr>
                            <th className="py-3 px-4 text-left">Feature</th>
                            <th className="py-3 px-4 text-left">Traditional Braces</th>
                            <th className="py-3 px-4 text-left">Invisalign</th>
                            <th className="py-3 px-4 text-left">Lingual Braces</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Aesthetics</td>
                            <td className="py-4 px-4">Visible metal or ceramic brackets</td>
                            <td className="py-4 px-4">Nearly invisible clear aligners</td>
                            <td className="py-4 px-4">Hidden behind teeth</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Comfort</td>
                            <td className="py-4 px-4">Moderate discomfort, cheek irritation</td>
                            <td className="py-4 px-4">Minimal discomfort, smooth edges</td>
                            <td className="py-4 px-4">Tongue irritation initially</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Removability</td>
                            <td className="py-4 px-4">Fixed, not removable</td>
                            <td className="py-4 px-4">Removable for eating and cleaning</td>
                            <td className="py-4 px-4">Fixed, not removable</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Cleaning</td>
                            <td className="py-4 px-4">Challenging, requires special tools</td>
                            <td className="py-4 px-4">Easy, normal brushing and flossing</td>
                            <td className="py-4 px-4">Very challenging</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Food Restrictions</td>
                            <td className="py-4 px-4">Many restrictions</td>
                            <td className="py-4 px-4">No restrictions (remove to eat)</td>
                            <td className="py-4 px-4">Many restrictions</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Treatment Time</td>
                            <td className="py-4 px-4">18-24 months average</td>
                            <td className="py-4 px-4">12-18 months average</td>
                            <td className="py-4 px-4">18-24 months average</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Visit Frequency</td>
                            <td className="py-4 px-4">Every 4-6 weeks</td>
                            <td className="py-4 px-4">Every 6-8 weeks</td>
                            <td className="py-4 px-4">Every 4-6 weeks</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">Cost in Vellore</td>
                            <td className="py-4 px-4">₹25,000 - ₹70,000</td>
                            <td className="py-4 px-4">₹1,20,000 - ₹2,50,000</td>
                            <td className="py-4 px-4">₹80,000 - ₹1,50,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> All treatments are performed by Dr. Rockson Samuel or other qualified
                        orthodontists at our Vellore clinic. Treatment times and costs may vary based on individual case
                        complexity. Schedule a consultation for a personalized treatment plan and accurate cost
                        estimate.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Invisalign Cost in India (2025 Updated)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">City</th>
                        <th className="border border-gray-300 px-4 py-2">Invisalign Cost (Approx.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mumbai</td>
                        <td className="border border-gray-300 px-4 py-2">₹1,50,000 – ₹3,50,000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Delhi</td>
                        <td className="border border-gray-300 px-4 py-2">₹1,25,000 – ₹3,00,000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Bangalore</td>
                        <td className="border border-gray-300 px-4 py-2">₹1,50,000 – ₹3,20,000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Hyderabad</td>
                        <td className="border border-gray-300 px-4 py-2">₹1,20,000 – ₹2,80,000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Chennai</td>
                        <td className="border border-gray-300 px-4 py-2">₹1,30,000 – ₹3,00,000</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 px-4 py-2 font-bold">Vellore (Our Clinic)</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">
                          ₹1,30,000 – ₹2,40,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <p className="font-medium">
                    <span className="text-yellow-800">💡 Why Is Invisalign Expensive?</span>
                  </p>
                  <p className="mt-2">
                    Invisalign uses 3D scanning, AI-driven treatment planning, and SmartTrack® technology, ensuring
                    precise teeth alignment. At our Vellore clinic, we offer{" "}
                    <strong>prices up to 40% lower than other top cities</strong> while maintaining the same quality of
                    care. Financing options & EMI plans are available.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-3">Invisalign vs. Metal Braces</h2>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">Feature</th>
                      <th className="border border-gray-300 px-4 py-2">Invisalign</th>
                      <th className="border border-gray-300 px-4 py-2">Metal Braces</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Visibility</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Nearly invisible</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">Highly visible</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Comfort</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Custom-made</strong>, smooth plastic
                      </td>
                      <td className="border border-gray-300 px-4 py-2">Can cause discomfort</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Oral Hygiene</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Easy to <strong>brush and floss</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">Harder to clean</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Treatment Duration</td>
                      <td className="border border-gray-300 px-4 py-2">12-18 months</td>
                      <td className="border border-gray-300 px-4 py-2">18-24 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-semibold mb-3">Is Invisalign the Best Option for You?</h2>
              <p className="mb-6">
                <strong>Invisalign may</strong> not be ideal for severe <strong>orthodontic treatment</strong> cases.
                However, it is a great <strong>alternative to traditional metal braces</strong> for those seeking a{" "}
                <strong>discreet option for straightening teeth</strong>.
              </p>

              <h2 className="text-2xl font-semibold mb-3">How to Find an Invisalign Doctor</h2>
              <p className="mb-6">
                To <strong>find an Invisalign doctor</strong>, check the official <strong>Align Technology</strong>{" "}
                website or consult local <strong>dentists and orthodontists</strong>.
              </p>

              <h2 className="text-2xl font-semibold mb-3">Caring for Your Aligners</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Brush and floss</strong> before wearing aligners.
                </li>
                <li>
                  Avoid <strong>eating or drinking</strong> anything but water.
                </li>
                <li>
                  Use a <strong>clear plastic</strong> aligner cleaner.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-3">Insurance Coverage &amp; Payment Plans</h2>
              <p className="mb-6">
                Many <strong>dental insurance plans</strong> cover <strong>Invisalign treatment</strong>.{" "}
                <strong>Flexible spending accounts</strong> can also help{" "}
                <strong>make the treatment more affordable</strong>.
              </p>

              <h2 className="text-2xl font-semibold mb-3">Final Thoughts on Invisalign Treatment</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Invisalign is the best</strong> for discreet <strong>teeth straightening</strong>.
                </li>
                <li>
                  <strong>Covered by dental insurance</strong> in many cases.
                </li>
                <li>
                  <strong>May not be the best</strong> for severe <strong>orthodontics</strong> cases.
                </li>
                <li>
                  <strong>Considering Invisalign?</strong> Consult an <strong>Invisalign trained</strong> specialist
                  today!
                </li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">
                  <strong>Summary:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Invisalign braces</strong> are a modern <strong>treatment option</strong>.
                  </li>
                  <li>
                    The <strong>cost of treatment</strong> is comparable to <strong>regular braces</strong>.
                  </li>
                  <li>
                    <strong>Find out if Invisalign</strong> is right for your <strong>needs and preferences</strong>.
                  </li>
                  <li>
                    <strong>Since Invisalign</strong> is <strong>nearly invisible</strong>, it's ideal for adults and
                    teens.
                  </li>
                  <li>
                    <strong>Covered by dental insurance</strong>, with <strong>payment plan</strong> options available.
                  </li>
                </ul>
                <p className="mt-4">
                  Let us know your thoughts or <strong>find an Invisalign doctor</strong> today!
                </p>
              </div>

              <div className="mb-8">
                <BookAppointment />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Smile?</h3>
                  <p className="mb-4">Schedule a consultation with our Invisalign specialists today.</p>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Book a Consultation</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Special Pricing Offer</h3>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-green-700 mb-2">40% Lower Than Major Cities!</p>
                    <p className="text-sm mb-2">Our Invisalign treatment starts at:</p>
                    <p className="text-2xl font-bold mb-2">₹1,30,000</p>
                    <p className="text-xs text-gray-600">*Price varies based on treatment complexity</p>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#pricing">View Full Pricing</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Related Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/orthodontics" className="text-blue-600 hover:underline">
                        Orthodontics
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/teeth-whitening" className="text-blue-600 hover:underline">
                        Teeth Whitening
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/dental-implants" className="text-blue-600 hover:underline">
                        Dental Implants
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/cosmetic-dentistry" className="text-blue-600 hover:underline">
                        Cosmetic Dentistry
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ServiceTestimonials
            testimonials={[
              {
                name: "Priya S.",
                location: "Vellore",
                quote:
                  "I was hesitant about getting braces at my age, but Invisalign has been amazing! No one even notices I'm wearing them, and my teeth are already looking better after just 3 months.",
                rating: 5,
              },
              {
                name: "Rahul M.",
                location: "Katpadi",
                quote:
                  "The team made the entire Invisalign process so easy. They explained everything clearly and were always available to answer my questions. My smile has never looked better!",
                rating: 5,
              },
              {
                name: "Anjali K.",
                location: "Sathuvachari",
                quote:
                  "As a professional who meets clients daily, Invisalign was the perfect solution for me. I could straighten my teeth without the noticeable metal braces. Highly recommend!",
                rating: 5,
              },
            ]}
          />
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">FAQs</h2>
          <ServiceFAQ
            faqs={[
              {
                question: "1. What are the pros and cons of Invisalign®?",
                answer:
                  "<strong>Pros:</strong> Invisalign® offers a nearly invisible way to straighten your teeth, is removable for better <strong>dental care</strong>, and provides more comfort than <strong>braces</strong>.<br><strong>Cons:</strong> The <strong>treatment cost</strong> may be higher than traditional <strong>braces</strong>, and it requires discipline to wear them for the recommended 22 hours a day.",
              },
              {
                question: "2. How much does Invisalign® treatment cost?",
                answer:
                  "The <strong>cost of Invisalign</strong> varies depending on the complexity of the case. It is <strong>comparable to the cost</strong> of <strong>traditional braces</strong>, but additional treatments that may be required can impact pricing.",
              },
              {
                question: "3. How do Invisalign aligners straighten your teeth?",
                answer:
                  "<strong>Invisalign aligners</strong> are <strong>made of clear</strong> plastic and work by gradually shifting the teeth into place. <strong>Wearing a series</strong> of custom-made aligners ensures <strong>predictable tooth movements</strong>.",
              },
              {
                question: "4. Is Invisalign® better than traditional braces?",
                answer:
                  "<strong>Invisalign clear aligners</strong> offer an <strong>alternative to traditional metal braces</strong> for those who want to <strong>straighten their teeth without</strong> brackets and wires. However, some <strong>cases may require</strong> traditional <strong>braces use</strong> for complex misalignments.",
              },
              {
                question: "5. What is the Invisalign® treatment process?",
                answer:
                  "The <strong>Invisalign treatment process</strong> starts with a consultation with an <strong>orthodontist</strong> or <strong>dental</strong> provider. A <strong>treatment plan</strong> is created using <strong>align technology</strong>, and custom <strong>plastic aligners</strong> are produced to gradually shift the teeth.",
              },
              {
                question: "6. How long does Invisalign® treatment take?",
                answer:
                  "The <strong>duration of treatment</strong> varies based on individual needs. Most patients achieve a <strong>new smile</strong> in 6 to 18 months.",
              },
              {
                question: "7. Does Invisalign® require special dental care?",
                answer:
                  "Yes, <strong>brushing your teeth</strong> after eating and before wearing aligners is crucial. Patients should also <strong>brush and floss</strong> regularly to maintain oral health during treatment.",
              },
              {
                question: "8. Can Invisalign® fix all dental issues?",
                answer:
                  "<strong>Invisalign aligners</strong> are effective for mild to moderate <strong>dental issues</strong>, including gaps and misalignments. However, severe cases may require <strong>additional treatments that may</strong> involve <strong>braces use</strong>.",
              },
              {
                question: "9. Is Invisalign® covered by dental insurance?",
                answer:
                  "Some <strong>dental insurance plans</strong> cover part of the <strong>treatment cost</strong>, making <strong>Invisalign treatment</strong> more affordable. <strong>Payment plans</strong> may also be available to make the treatment more accessible.",
              },
              {
                question: "10. Who is a good candidate for Invisalign®?",
                answer:
                  "<strong>Invisalign trained</strong> dentists and <strong>orthodontists</strong> assess <strong>whether Invisalign</strong> is right for each patient. It is a <strong>choice for adults</strong> and teens looking for a discreet way to achieve a <strong>straighter</strong> smile.",
              },
            ]}
          />
        </div>
      </div>
    </>
  )
}
