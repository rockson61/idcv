import type React from "react"
import { Bus, Train, Car } from "lucide-react"

const TransportOption = ({
  icon: Icon,
  title,
  routes,
}: {
  icon: React.ElementType
  title: string
  routes: string[]
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Icon className="text-blue-600" size={24} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {routes.map((route, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2 mt-0.5">
              {index + 1}
            </span>
            <span>{route}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PublicTransport() {
  const busRoutes = [
    "Bus Route 17: Gandhi Nagar to Indira Dental Clinic (5 mins)",
    "Bus Route 21: Katpadi Railway Station to Clinic (8 mins)",
    "Bus Route 25: CMC Hospital to Clinic (20 mins)",
    "City Bus 42: Vellore Fort to Clinic (15 mins)",
    "Mini Bus 7: Old Bus Stand to Clinic (10 mins)",
  ]

  const trainRoutes = [
    "Katpadi Railway Station: 1 km from clinic (5 mins by auto)",
    "Vellore Cantonment Station: 5 km from clinic (15 mins by auto)",
    "Direct trains from Chennai, Bangalore, and Tirupati",
  ]

  const autoRoutes = [
    "Auto stand at Katpadi Railway Station",
    "Auto stand at Gandhi Nagar Bus Stop",
    "Auto stand at VIT Main Gate",
    "Pre-paid auto service available at railway stations",
    "App-based taxi services available throughout Vellore",
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Public Transport Options</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Indira Dental Clinic is easily accessible via various public transport options from all parts of Vellore and
          surrounding areas.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <TransportOption icon={Bus} title="Bus Routes" routes={busRoutes} />

          <TransportOption icon={Train} title="Train Connectivity" routes={trainRoutes} />

          <TransportOption icon={Car} title="Auto & Taxi" routes={autoRoutes} />
        </div>
      </div>
    </section>
  )
}
