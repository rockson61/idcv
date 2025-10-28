'use client'

import Link from 'next/link'
import { MapPin, ArrowRight, Navigation2, Clock } from 'lucide-react'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'

interface NearbyLocation {
  name: string
  distance: string
  slug: string
  travelTime?: string
  pincode?: string
}

interface NearbyLocationsWidgetProps {
  currentLocation: string
  locations: NearbyLocation[]
  title?: string
  className?: string
}

export function NearbyLocationsWidget({ 
  currentLocation, 
  locations, 
  title,
  className = "" 
}: NearbyLocationsWidgetProps) {
  return (
    <ModernCard className={className}>
      <ModernCardHeader>
        <ModernCardTitle className="flex items-center gap-2">
          <Navigation2 className="w-6 h-6 text-teal-600" />
          {title || `Other Dental Service Locations Near ${currentLocation}`}
        </ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent>
        <p className="text-gray-600 mb-6">
          We serve patients from all these locations around {currentLocation}. Click to see services and information for your area.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((location, index) => (
            <Link
              key={index}
              href={location.slug ? `/in/tamil-nadu/vellore/${location.slug}` : '/in/tamil-nadu/vellore'}
              className="group p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-1">
                    {location.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{location.distance}</span>
                  </div>
                  {location.travelTime && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{location.travelTime}</span>
                    </div>
                  )}
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
              
              {location.pincode && (
                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded inline-block">
                  PIN: {location.pincode}
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-6 text-center pt-6 border-t border-gray-200">
          <Link 
            href="/in/tamil-nadu/vellore"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
          >
            View All Vellore Locations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}

// Quick nearby locations component (compact version)
export function QuickNearbyLinks({ locations, currentLocation }: { locations: NearbyLocation[], currentLocation: string }) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Also Serving: 
      </h3>
      <div className="flex flex-wrap gap-2">
        {locations.map((location, index) => (
          <Link
            key={index}
            href={location.slug ? `/in/tamil-nadu/vellore/${location.slug}` : '/in/tamil-nadu/vellore'}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm hover:bg-teal-100 transition-colors"
          >
            <MapPin className="w-3 h-3" />
            {location.name}
            <span className="text-xs text-teal-600">({location.distance})</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

