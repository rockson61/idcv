import Link from "next/link"
import { MapPin, Phone, Clock, Star } from "lucide-react"
import Image from "next/image"

interface LocationCardProps {
  name: string
  address: string
  phone: string
  hours: string
  rating: number
  reviewCount: number
  imageUrl: string
  slug: string
  distance?: string
  isMainLocation?: boolean
}

export function LocationCard({
  name,
  address,
  phone,
  hours,
  rating,
  reviewCount,
  imageUrl,
  slug,
  distance,
  isMainLocation = false,
}: LocationCardProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg border ${isMainLocation ? "border-dental-teal/30 bg-dental-teal/5" : "border-gray-200 bg-white"}`}
    >
      <div className="relative h-48">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isMainLocation && (
          <div className="absolute top-3 right-3 bg-dental-teal text-white px-3 py-1 rounded-full text-xs font-medium">
            Main Location
          </div>
        )}
        {distance && (
          <div className="absolute bottom-3 right-3 bg-white/90 text-dental-navy px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            {distance} away
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <div className="flex items-center mb-3">
          <div className="flex items-center text-yellow-500 mr-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-500" : "fill-gray-200"}`} />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {rating.toFixed(1)} ({reviewCount} reviews)
          </span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-dental-teal flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-sm text-gray-600">{address}</span>
          </div>
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-dental-teal flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-sm text-gray-600">{phone}</span>
          </div>
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-dental-teal flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-sm text-gray-600">{hours}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Link
            href={`/in/tamil-nadu/${slug}`}
            className="flex-1 bg-dental-navy text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-dental-navy/90 transition-colors"
          >
            View Details
          </Link>
          <Link
            href={`https://maps.app.goo.gl/mckxYfwVuYhkzPg69`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-dental text-white text-center py-2 rounded-lg text-sm font-medium"
          >
            Get Directions
          </Link>
        </div>
      </div>
    </div>
  )
}
