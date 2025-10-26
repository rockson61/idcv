"use client"

import { useEffect } from "react"

interface Location {
  id: number
  name: string
  address: string
  phone: string
  hours: string
  rating: number
  reviewCount: number
  coordinates: {
    lat: number
    lng: number
  }
}

interface LocationSchemaProps {
  locations: Location[]
}

function LocationSchema({ locations }: LocationSchemaProps) {
  useEffect(() => {
    // Create the JSON-LD schema for each location
    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: locations.map((location, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Dentist",
          name: location.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: location.address.split(",")[0],
            addressLocality: "Vellore",
            addressRegion: "Tamil Nadu",
            postalCode: "632006",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: location.coordinates.lat,
            longitude: location.coordinates.lng,
          },
          telephone: location.phone,
          openingHours: "Mo-Sa 10:00-20:00, Su 10:00-13:30",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: location.rating,
            reviewCount: location.reviewCount,
          },
          priceRange: "₹₹",
          image: "https://example.com/images/indira-dental-clinic.jpg",
          url: "https://indiradentalclinic.com",
        },
      })),
    }

    // Add the schema to the document head
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [locations])

  return null
}

export default LocationSchema
export { LocationSchema }
