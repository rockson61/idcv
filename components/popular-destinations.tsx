import Image from "next/image"

interface DestinationProps {
  name: string
  description: string
  distance: string
  imageUrl: string
}

const Destination = ({ name, description, distance, imageUrl }: DestinationProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="flex items-center text-blue-600">
          <span className="font-medium">{distance} from clinic</span>
        </div>
      </div>
    </div>
  )
}

export default function PopularDestinations() {
  const destinations = [
    {
      name: "Vellore Fort",
      description: "Historic 16th-century fort and archaeological museum",
      distance: "4.5 km",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Golden Temple",
      description: "Sripuram's Sri Lakshmi Narayani Golden Temple",
      distance: "7 km",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "CMC Hospital",
      description: "Renowned Christian Medical College & Hospital",
      distance: "3 km",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "VIT University",
      description: "Prestigious engineering and technology university",
      distance: "2.5 km",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Amirthi Zoological Park",
      description: "Wildlife sanctuary and zoo in Javadu Hills",
      distance: "25 km",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Jalakandeswarar Temple",
      description: "Ancient temple inside Vellore Fort complex",
      distance: "4.5 km",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Popular Destinations in Vellore</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore these famous landmarks and attractions near Indira Dental Clinic during your visit to Vellore.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Destination
              key={index}
              name={destination.name}
              description={destination.description}
              distance={destination.distance}
              imageUrl={destination.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
