import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RelatedLinks } from "@/components/related-links"
import { getRelatedLinks } from "@/utils/generate-links"

interface LocationData {
  name: string
  description: string
  minutesFromVellore: number
  areas: string[]
  hotels: Array<{ name: string; type: string; description: string }>
  attractions: Array<{ name: string; description: string }>
  roadTrips?: Array<{ destination: string; distance: number; description: string }>
  nearbyCities?: string[]
}

interface VelloreLocationTemplateProps {
  data: LocationData
}

export function VelloreLocationTemplate({ data }: VelloreLocationTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Best Dental Clinic in {data.name}, Vellore</h1>
      <p className="mb-4">
        Indira Dental Clinic offers affordable, high-quality dental care for {data.name} residents. Led by Dr. Rockson
        Samuel, our clinic provides comprehensive dental services at prices 40-60% lower than tier 1 cities.
      </p>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-3">Affordable Dental Care for {data.name} Residents</h2>
        <p className="mb-4">
          Our dental treatments are 40-60% more affordable than Chennai, Bangalore, and other tier 1 cities. Experience
          world-class dental care{" "}
          {data.minutesFromVellore > 0
            ? `just ${data.minutesFromVellore} minutes from ${data.name}`
            : "in your neighborhood"}
          .
        </p>
        <Button className="bg-white text-blue-600 hover:bg-gray-100">
          <Link href="/contact">Book an Appointment</Link>
        </Button>
      </div>

      <h2 className="text-2xl font-bold mb-4">Where to stay in {data.name}</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {data.hotels.map((hotel, index) => (
          <div key={index} className="bg-white p-4 rounded border">
            <h3 className="font-bold">{hotel.name}</h3>
            <p className="text-sm text-blue-600">{hotel.type}</p>
            <p>{hotel.description}</p>
          </div>
        ))}
      </div>

      {data.roadTrips && (
        <>
          <h2 className="text-2xl font-bold mb-4">Road trips from {data.name}</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {data.roadTrips.map((trip, index) => (
              <div key={index} className="bg-white p-4 rounded border">
                <h3 className="font-bold">{trip.destination}</h3>
                <p className="text-sm">
                  {trip.distance} km from {data.name}
                </p>
                <p>{trip.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <h2 className="text-2xl font-bold mb-4">Areas in {data.name} We Serve</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {data.areas.map((place, index) => (
          <div key={index} className="bg-white p-3 rounded border">
            {place}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Attractions in {data.name}</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {data.attractions.map((attraction, index) => (
          <div key={index} className="bg-white p-4 rounded border">
            <h3 className="font-bold">{attraction.name}</h3>
            <p>{attraction.description}</p>
          </div>
        ))}
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Dental Services for {data.name} Residents</h2>
          <p className="mb-6">
            Residents of {data.name} can access top-quality dental care at <strong>Indira Dental Clinic</strong>,
            located just {data.minutesFromVellore} minutes away in Vellore. Our clinic offers comprehensive dental
            services including{" "}
            <Link href="/services/root-canal-treatment" className="text-primary hover:underline">
              painless root canal treatments
            </Link>
            ,{" "}
            <Link href="/services/dental-implants" className="text-primary hover:underline">
              dental implants
            </Link>
            , and{" "}
            <Link href="/services/braces-orthodontics" className="text-primary hover:underline">
              orthodontic solutions
            </Link>{" "}
            at prices 40-60% lower than other clinics.
          </p>

          <p className="mb-6">
            Whether you're suffering from{" "}
            <Link href="/conditions/tooth-decay" className="text-primary hover:underline">
              tooth decay
            </Link>{" "}
            or need{" "}
            <Link href="/services/dental-crowns" className="text-primary hover:underline">
              dental crowns
            </Link>
            , Dr. Rockson Samuel provides expert care using the latest dental technology. Check our{" "}
            <Link href="/pricing" className="text-primary hover:underline">
              transparent pricing
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>{" "}
            to schedule your appointment today.
          </p>

          <RelatedLinks
            title="Explore More Dental Resources"
            links={getRelatedLinks(`/in/tamil-nadu/vellore/${data.name.toLowerCase().replace(/\s+/g, "")}`)}
            variant="list"
          />
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Dental Services</h2>
          <div className="bg-white p-4 rounded border">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Root Canal Treatment (RCT)</strong> - Painless procedures with modern techniques
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Dental Implants</strong> - Permanent solution for missing teeth
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Braces & Aligners</strong> - Orthodontic solutions for all ages
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Teeth Whitening</strong> - Professional whitening for a brighter smile
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  <strong>Dental Fillings</strong> - Tooth-colored restorations
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Dental Care in {data.name}</h2>
          <div className="bg-white p-4 rounded border">
            <p className="mb-3">
              Indira Dental Clinic provides comprehensive dental care for {data.name} residents at our clinic located at
              3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore.
            </p>
            <p>
              Dr. Rockson Samuel and our team of dental professionals ensure personalized care using the latest dental
              technology at prices 40-60% lower than major cities.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Related Links</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white p-3 rounded border text-center">
          <Link href="/services" className="hover:text-blue-600">
            Our Services
          </Link>
        </div>
        <div className="bg-white p-3 rounded border text-center">
          <Link href="/about-us/dr-rockson-samuel" className="hover:text-blue-600">
            Dr. Rockson Samuel
          </Link>
        </div>
        <div className="bg-white p-3 rounded border text-center">
          <Link href="/pricing" className="hover:text-blue-600">
            Treatment Pricing
          </Link>
        </div>
        <div className="bg-white p-3 rounded border text-center">
          <Link href="/contact" className="hover:text-blue-600">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
