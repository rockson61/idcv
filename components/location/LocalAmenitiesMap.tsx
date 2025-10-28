'use client'

import { MapPin, Building2, Landmark, Briefcase, DollarSign, Mail, Hospital, ShoppingBag, Coffee, Hotel } from 'lucide-react'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import Link from 'next/link'

interface Amenity {
  name: string
  type: 'bank' | 'atm' | 'post_office' | 'hospital' | 'tourist' | 'shopping' | 'restaurant' | 'hotel'
  distance?: string
  address?: string
}

interface LocalAmenitiesMapProps {
  locationName: string
  amenities?: Amenity[]
  touristPlaces?: string[]
  className?: string
}

const defaultAmenities: Amenity[] = [
  { name: 'State Bank of India', type: 'bank', distance: '0.5 km', address: 'Main Road' },
  { name: 'ICICI Bank ATM', type: 'atm', distance: '0.3 km', address: 'Near Bus Stand' },
  { name: 'Indian Post Office', type: 'post_office', distance: '0.8 km', address: 'Gandhi Road' },
  { name: 'Primary Health Center', type: 'hospital', distance: '1.2 km', address: 'Hospital Road' },
]

const getAmenityIcon = (type: string) => {
  switch (type) {
    case 'bank': return Building2
    case 'atm': return DollarSign
    case 'post_office': return Mail
    case 'hospital': return Hospital
    case 'tourist': return Landmark
    case 'shopping': return ShoppingBag
    case 'restaurant': return Coffee
    case 'hotel': return Hotel
    default: return MapPin
  }
}

const getAmenityColor = (type: string) => {
  switch (type) {
    case 'bank': return 'text-blue-600 bg-blue-50'
    case 'atm': return 'text-green-600 bg-green-50'
    case 'post_office': return 'text-red-600 bg-red-50'
    case 'hospital': return 'text-purple-600 bg-purple-50'
    case 'tourist': return 'text-orange-600 bg-orange-50'
    case 'shopping': return 'text-pink-600 bg-pink-50'
    case 'restaurant': return 'text-yellow-600 bg-yellow-50'
    case 'hotel': return 'text-indigo-600 bg-indigo-50'
    default: return 'text-gray-600 bg-gray-50'
  }
}

export function LocalAmenitiesMap({ 
  locationName, 
  amenities = defaultAmenities,
  touristPlaces = [],
  className = ""
}: LocalAmenitiesMapProps) {
  return (
    <ModernCard className={className}>
      <ModernCardHeader>
        <ModernCardTitle className="flex items-center gap-2">
          <Landmark className="w-6 h-6 text-teal-600" />
          Local Amenities & Places Near {locationName}
        </ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent>
        <div className="space-y-6">
          {/* Amenities Grid */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Places</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {amenities.map((amenity, index) => {
                const Icon = getAmenityIcon(amenity.type)
                const colorClass = getAmenityColor(amenity.type)
                return (
                  <div key={index} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
                    <div className={`p-2 rounded-lg ${colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{amenity.name}</h4>
                      {amenity.address && (
                        <p className="text-sm text-gray-600 mt-1">{amenity.address}</p>
                      )}
                      {amenity.distance && (
                        <p className="text-sm text-teal-600 mt-1 font-medium">{amenity.distance} away</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Tourist Places */}
          {touristPlaces.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tourist Attractions Nearby</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {touristPlaces.map((place, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                    <Landmark className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-900">{place}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Links */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Navigation</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="#services" className="text-sm px-3 py-1 bg-teal-50 text-teal-700 rounded-full hover:bg-teal-100">Our Services</Link>
              <Link href="#reviews" className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100">Patient Reviews</Link>
              <Link href="#contact" className="text-sm px-3 py-1 bg-purple-50 text-purple-700 rounded-full hover:bg-purple-100">Contact Us</Link>
              <Link href="/services" className="text-sm px-3 py-1 bg-green-50 text-green-700 rounded-full hover:bg-green-100">All Services</Link>
            </div>
          </div>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}

