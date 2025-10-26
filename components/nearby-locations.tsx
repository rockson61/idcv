import { GlassmorphicCard } from "@/components/ui/glassmorphic-card"
import { MapPin, Clock, Car, Bus, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Alert } from "@/components/ui/alert"

const locations = [
  {
    area: "Gandhi Nagar",
    distance: "0.5 km",
    timeByMode: {
      walking: "5 mins walk",
      driving: "2 mins drive",
      transit: "5 mins by bus",
    },
    landmarks: ["Shell Petrol Pump", "Gandhi Nagar Bus Stop"],
    routes: ["Bus Route 17", "Auto available"],
    address: "3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar",
    locationLink: "/in/tamil-nadu/vellore/gandhi-nagar",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
  {
    area: "Katpadi",
    distance: "1 km",
    timeByMode: {
      walking: "15 mins walk",
      driving: "5 mins drive",
      transit: "8 mins by bus",
    },
    landmarks: ["Katpadi Railway Station", "VIT Main Gate"],
    routes: ["Bus Route 21", "Train station nearby"],
    address: "Near Katpadi Junction, Main Road",
    locationLink: "/in/tamil-nadu/vellore/katpadi",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
  {
    area: "VIT University",
    distance: "2.5 km",
    timeByMode: {
      walking: "30 mins walk",
      driving: "10 mins drive",
      transit: "15 mins by bus",
    },
    landmarks: ["VIT Main Gate", "SBI Bank"],
    routes: ["College Bus", "Auto stand"],
    address: "Near VIT University Main Gate",
    locationLink: "/in/tamil-nadu/vellore/katpadi",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
  {
    area: "CMC Hospital",
    distance: "3 km",
    timeByMode: {
      walking: "35 mins walk",
      driving: "12 mins drive",
      transit: "20 mins by bus",
    },
    landmarks: ["CMC Main Hospital", "Ida Scudder Road"],
    routes: ["Bus Route 25", "Hospital shuttle"],
    address: "Near CMC Hospital Complex",
    locationLink: "/in/tamil-nadu/vellore/bagayam",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
]

const nearbyTowns = [
  {
    name: "Abdullapuram",
    distance: "15 min drive",
    link: "/in/tamil-nadu/abdullapuram",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
  {
    name: "Anaicut",
    distance: "20 min drive",
    link: "/in/tamil-nadu/anaicut",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
  {
    name: "Gudiyatham",
    distance: "30 min drive",
    link: "/in/tamil-nadu/gudiyatham",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
  {
    name: "Pallikonda",
    distance: "25 min drive",
    link: "/in/tamil-nadu/pallikonda",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
  {
    name: "Ambur",
    distance: "35 min drive",
    link: "/in/tamil-nadu/ambur",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
  {
    name: "Arcot",
    distance: "20 min drive",
    link: "/in/tamil-nadu/arcot",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
  {
    name: "Walajah",
    distance: "25 min drive",
    link: "/in/tamil-nadu/walajah",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
  {
    name: "Sholinghur",
    distance: "40 min drive",
    link: "/in/tamil-nadu/sholinghur",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
  {
    name: "Arakkonam",
    distance: "45 min drive",
    link: "/in/tamil-nadu/arakkonam",
    mapsUrl: "https://maps.app.goo.gl/rvyhzFADniQBUDWV8",
  },
]

export function NearbyLocations() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Nearby Locations</h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          <Alert variant="warning">Please wear a mask during your visit. Temperature screening is mandatory.</Alert>
          <Alert variant="success">Our clinic follows strict sterilization protocols for your safety.</Alert>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {locations.map((location, index) => (
            <GlassmorphicCard key={index} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{location.area}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{location.distance} from clinic</span>
                  </div>
                </div>
                <Link
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
                >
                  Get Directions
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="flex flex-col items-center text-center p-2 bg-background rounded-lg">
                  <Clock className="h-4 w-4 mb-1 text-muted-foreground" />
                  <span className="text-xs">{location.timeByMode.walking}</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 bg-background rounded-lg">
                  <Car className="h-4 w-4 mb-1 text-muted-foreground" />
                  <span className="text-xs">{location.timeByMode.driving}</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 bg-background rounded-lg">
                  <Bus className="h-4 w-4 mb-1 text-muted-foreground" />
                  <span className="text-xs">{location.timeByMode.transit}</span>
                </div>
              </div>

              <div className="text-sm mb-4">
                <div className="mb-2">
                  <span className="font-medium">Landmarks:</span> {location.landmarks.join(", ")}
                </div>
                <div>
                  <span className="font-medium">Transport:</span> {location.routes.join(", ")}
                </div>
              </div>

              <Link
                href={location.locationLink}
                className="flex items-center text-primary text-sm font-medium hover:underline"
              >
                View dental services in {location.area}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </GlassmorphicCard>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Serving Nearby Towns</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {nearbyTowns.map((town, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
              <div>
                <h4 className="font-medium">{town.name}</h4>
                <p className="text-sm text-muted-foreground">{town.distance}</p>
              </div>
              <div className="flex space-x-2">
                <Link
                  href={town.link}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href={town.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
                >
                  Directions
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
