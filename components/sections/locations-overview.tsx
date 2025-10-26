import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { MapPin, Clock, Phone, Navigation, ArrowRight } from "lucide-react"
import Link from "next/link"

export function LocationsOverview() {
  const mainLocation = {
    name: "Indira Dental Clinic - Main Branch",
    address: "3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu 632006",
    phone: "7010650063",
    hours: "Mon-Sat: 10AM-8PM, Sun: 10AM-1:30PM",
    specialties: ["Root Canal Treatment", "Dental Implants", "Cosmetic Dentistry", "Emergency Care"],
    href: "/in/tamil-nadu/vellore",
  }

  const nearbyLocations = [
    {
      name: "Katpadi Branch",
      area: "Near Railway Station",
      distance: "2.5 km",
      specialties: ["General Dentistry", "Emergency Care"],
      href: "/in/tamil-nadu/vellore/katpadi",
    },
    {
      name: "Sathuvachari Branch",
      area: "Residential Area",
      distance: "4.2 km",
      specialties: ["Pediatric Care", "Orthodontics"],
      href: "/in/tamil-nadu/vellore/sathuvachari",
    },
    {
      name: "Bagayam Branch",
      area: "Near CMC Hospital",
      distance: "3.8 km",
      specialties: ["Oral Surgery", "Implants"],
      href: "/in/tamil-nadu/vellore/bagayam",
    },
  ]

  const servicedAreas = [
    "Gandhi Nagar",
    "Katpadi",
    "Sathuvachari",
    "Bagayam",
    "Kosapet",
    "Thorapadi",
    "Konavattam",
    "Dharapadavedu",
    "Ambur",
    "Ranipet",
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#54CAD3]/5">
      <SectionContainer>
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#005f73]">Our Locations in Vellore</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located across Vellore to serve you better
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#54CAD3] to-[#005f73] mx-auto rounded-full"></div>
        </div>

        {/* Main Location */}
        <GlassCard className="p-8 mb-12 bg-gradient-to-r from-[#54CAD3]/10 to-[#005f73]/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#005f73] mb-2">{mainLocation.name}</h3>
                <div className="flex items-start gap-3 text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 text-[#54CAD3] mt-1 flex-shrink-0" />
                  <span>{mainLocation.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#54CAD3]" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <a href={`tel:${mainLocation.phone}`} className="text-[#54CAD3] hover:underline">
                      {mainLocation.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#54CAD3]" />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-sm text-gray-600">{mainLocation.hours}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#005f73] mb-3">Specialties Available</h4>
                <div className="flex flex-wrap gap-2">
                  {mainLocation.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-[#54CAD3]/20 text-[#005f73] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#54CAD3] to-[#005f73] hover:shadow-lg transition-all" asChild>
                  <Link href="/contact">Book Appointment</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#54CAD3] text-[#54CAD3] hover:bg-[#54CAD3]/10 bg-transparent"
                  asChild
                >
                  <a
                    href="https://maps.google.com/maps?q=Indira+Dental+Clinic+Vellore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>Interactive Map</p>
                <p className="text-sm">Gandhi Nagar, Vellore</p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Nearby Locations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#005f73] text-center mb-8">Other Locations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {nearbyLocations.map((location, index) => (
              <GlassCard key={index} className="p-6 hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-[#005f73]">{location.name}</h4>
                    <p className="text-gray-600">{location.area}</p>
                    <p className="text-sm text-[#54CAD3] font-semibold">{location.distance} from main clinic</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Available Services</h5>
                    <div className="flex flex-wrap gap-1">
                      {location.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-[#54CAD3]/10 text-[#005f73] px-2 py-1 rounded text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-[#54CAD3] text-[#54CAD3] hover:bg-[#54CAD3]/10 bg-transparent"
                    asChild
                  >
                    <Link href={location.href}>
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <GlassCard className="p-8 text-center">
          <h3 className="text-2xl font-bold text-[#005f73] mb-6">Areas We Serve</h3>
          <p className="text-gray-600 mb-6">We provide dental care services across Vellore and surrounding areas</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {servicedAreas.map((area, index) => (
              <span
                key={index}
                className="bg-[#54CAD3]/20 text-[#005f73] px-4 py-2 rounded-full font-medium hover:bg-[#54CAD3]/30 transition-colors cursor-pointer"
              >
                {area}
              </span>
            ))}
          </div>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#54CAD3] text-[#54CAD3] hover:bg-[#54CAD3]/10 bg-transparent"
            asChild
          >
            <Link href="/dentist-near-me/locations">
              View All Locations
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </GlassCard>
      </SectionContainer>
    </section>
  )
}
