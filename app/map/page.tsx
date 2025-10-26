import type { Metadata } from "next"
import { CustomGoogleMap } from "@/components/custom-google-map"

export const metadata: Metadata = {
  title: "Interactive Map | Indira Dental Clinic Vellore",
  description:
    "Explore our interactive map showing 100 landmarks in Vellore with directions to Indira Dental Clinic. Find the most convenient route from your location to Dr. Rockson Samuel's dental clinic.",
}

export default function MapPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Indira Dental Clinic - Interactive Map</h1>
      <p className="mb-8">
        Explore our interactive map showing 100 landmarks and areas within a 30km radius of Vellore. Click on any
        landmark to see information and get directions to Indira Dental Clinic.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <CustomGoogleMap />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Visit Our Clinic</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Indira Dental Clinic</h3>
            <p className="mb-1">Dr. Rockson Samuel</p>
            <p className="mb-1">3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar</p>
            <p className="mb-1">Vellore, Tamil Nadu 632006</p>
            <p className="mb-4">Phone: 070106 50063</p>

            <h4 className="font-semibold mb-1">Hours of Operation:</h4>
            <p className="mb-1">Monday to Saturday: 10:00 AM - 8:00 PM</p>
            <p className="mb-4">Sunday: 10:00 AM - 1:30 PM</p>

            <a href="tel:07010650063" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium">
              Call Now
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Our Services</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Root Canal Treatment (RCT)</li>
              <li>Dental Braces</li>
              <li>Dental Implants</li>
              <li>Dental Fillings</li>
              <li>Teeth Whitening</li>
              <li>Dental Crowns and Bridges</li>
              <li>Teeth Cleaning</li>
              <li>Wisdom Tooth Extraction</li>
              <li>Pediatric Dentistry</li>
              <li>Cosmetic Dentistry</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
