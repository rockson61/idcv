'use client'

import { Badge } from '@/components/ui/badge'
import { MapPin, Users, Clock, Shield, Star, Award, Landmark, Factory, Building } from 'lucide-react'

interface LocationHeaderProps {
  locationName: string
  taluk?: string
  pincode?: string
  distance: string
  category?: 'major_town' | 'town' | 'village' | 'industrial' | 'historic'
  specialFeatures?: string[]
  className?: string
}

const categoryConfig = {
  major_town: { icon: Building, color: 'bg-blue-100 text-blue-700', label: 'Major Town' },
  town: { icon: MapPin, color: 'bg-green-100 text-green-700', label: 'Town' },
  village: { icon: MapPin, color: 'bg-gray-100 text-gray-700', label: 'Village' },
  industrial: { icon: Factory, color: 'bg-purple-100 text-purple-700', label: 'Industrial Area' },
  historic: { icon: Landmark, color: 'bg-orange-100 text-orange-700', label: 'Historic Town' },
};

export function LocationHeader({
  locationName,
  taluk,
  pincode,
  distance,
  category = 'town',
  specialFeatures = [],
  className = ""
}: LocationHeaderProps) {
  const config = categoryConfig[category] || categoryConfig.town;
  const Icon = config.icon;

  return (
    <div className={`text-center mb-12 ${className}`}>
      {/* Category Badge */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className={`inline-flex items-center gap-2 px-4 py-2 ${config.color} rounded-full text-sm font-medium`}>
          <Icon className="w-4 h-4" />
          {config.label}
        </div>
        {pincode && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            <MapPin className="w-4 h-4" />
            PIN: {pincode}
          </div>
        )}
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        {locationName}
        {taluk && taluk !== locationName && (
          <span className="block text-3xl md:text-4xl text-gray-600 mt-2">{taluk}, Vellore</span>
        )}
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
        Welcome to Indira Dental Clinic - your trusted dental care provider serving {locationName} and surrounding areas. 
        Located in Vellore, just <strong className="text-teal-600">{distance}</strong> away.
      </p>

      {/* Special Features */}
      {specialFeatures.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {specialFeatures.map((feature, index) => (
            <span key={index} className="px-3 py-1 bg-white border border-teal-200 text-teal-700 rounded-full text-xs font-medium">
              {feature}
            </span>
          ))}
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <Shield className="w-8 h-8 text-teal-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">Expert Care</span>
          <span className="text-xs text-gray-500 mt-1">Certified</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <Users className="w-8 h-8 text-blue-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">15+ Years</span>
          <span className="text-xs text-gray-500 mt-1">Experience</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <Star className="w-8 h-8 text-yellow-500 mb-2" />
          <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
          <span className="text-xs text-gray-500 mt-1">1000+ Reviews</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <Clock className="w-8 h-8 text-purple-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">9 AM - 9 PM</span>
          <span className="text-xs text-gray-500 mt-1">7 Days/Week</span>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-teal-600" />
          <span>ISO Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-teal-600" />
          <span>Sterilized Equipment</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-teal-600" />
          <span>1000+ Happy Patients from {locationName}</span>
        </div>
      </div>
    </div>
  )
}

