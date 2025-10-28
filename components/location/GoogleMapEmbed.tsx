'use client'

import { MapPin, Navigation2 } from 'lucide-react'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'

interface GoogleMapEmbedProps {
  locationName: string
  latitude?: number
  longitude?: number
  address?: string
  className?: string
}

export function GoogleMapEmbed({ 
  locationName, 
  latitude = 12.9165, 
  longitude = 79.1325,
  address,
  className = ""
}: GoogleMapEmbedProps) {
  // Use the correct Indira Dental Clinic embed URL
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2784186240674!2d79.1369615!3d12.9540278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad394e9843620f%3A0xc7a4b2fb0991e086!2sIndira%20Dental%20Clinic%20%7C%20Dr%20Rockson%20Samuel%20%7C%20Top%20Dentist%20in%20Vellore%20for%20RCT%2C%20Braces%2C%20Implants%2C%20%26%20Dental%20Fillings!5e0!3m2!1sen!2sin!4v1761639111586!5m2!1sen!2sin"
  
  const getDirectionsUrl = () => {
    if (latitude && longitude) {
      return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
    }
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locationName + ', Vellore, Tamil Nadu')}`
  }

  return (
    <ModernCard className={className}>
      <ModernCardHeader>
        <ModernCardTitle className="flex items-center gap-2">
          <MapPin className="w-6 h-6 text-teal-600" />
          Location Map - {locationName}
        </ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent>
        <div className="space-y-4">
          {/* Map Embed */}
          <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Indira Dental Clinic | Dr Rockson Samuel | Top Dentist in Vellore - Serving ${locationName}`}
            />
          </div>

          {/* Address and Directions */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Indira Dental Clinic & Implant Center</h3>
              <p className="text-sm text-gray-600">
                {address || `Gandhi Nagar, Vellore, Tamil Nadu - 632001`}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Serving {locationName} and surrounding areas
              </p>
              {/* Google Business Profile Link */}
              <a
                href="https://www.google.com/maps?cid=14385819900995297414"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mt-2 font-medium"
              >
                ⭐ View Our Google Reviews (500+) →
              </a>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap"
              >
                <Navigation2 className="w-5 h-5" />
                Get Directions
              </a>
              <a
                href="https://www.google.com/maps?cid=14385819900995297414"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                <MapPin className="w-5 h-5" />
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Distance</p>
              <p className="font-semibold text-gray-900">Nearby</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Travel Time</p>
              <p className="font-semibold text-gray-900">15-30 min</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600">Parking</p>
              <p className="font-semibold text-gray-900">Free</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <p className="text-sm text-gray-600">Open</p>
              <p className="font-semibold text-gray-900">9 AM - 9 PM</p>
            </div>
          </div>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}

