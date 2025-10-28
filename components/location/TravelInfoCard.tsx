'use client'

import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Bus, Car, Train, Navigation2, MapPin, Clock, IndianRupee, AlertCircle } from 'lucide-react'

interface TravelInfoCardProps {
  fromLocation: string
  distance: string
  travelTime: string
  options: {
    bus?: { available: boolean; frequency?: string; cost?: string; route?: string }
    train?: { available: boolean; station?: string; frequency?: string; cost?: string }
    car?: { available: boolean; route?: string; tolls?: string }
    auto?: { available: boolean; cost?: string }
  }
  className?: string
}

export function TravelInfoCard({
  fromLocation,
  distance,
  travelTime,
  options,
  className = ""
}: TravelInfoCardProps) {
  return (
    <ModernCard className={className}>
      <ModernCardHeader>
        <ModernCardTitle className="flex items-center gap-2">
          <Navigation2 className="w-6 h-6 text-teal-600" />
          How to Reach from {fromLocation}
        </ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent>
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <MapPin className="w-4 h-4" />
              Distance
            </div>
            <p className="text-xl font-bold text-gray-900">{distance}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Clock className="w-4 h-4" />
              Travel Time
            </div>
            <p className="text-xl font-bold text-gray-900">{travelTime}</p>
          </div>
        </div>

        {/* Travel Options */}
        <div className="space-y-4">
          {/* By Bus */}
          {options.bus?.available && (
            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Bus className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">By Bus</h4>
                <p className="text-sm text-gray-600 mb-2">
                  {options.bus.route || `Regular buses from ${fromLocation} to Vellore`}
                </p>
                <div className="flex gap-4 text-xs text-gray-500">
                  {options.bus.frequency && <span>Frequency: {options.bus.frequency}</span>}
                  {options.bus.cost && (
                    <span className="flex items-center gap-1">
                      <IndianRupee className="w-3 h-3" />
                      {options.bus.cost}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* By Train */}
          {options.train?.available && (
            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Train className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">By Train</h4>
                <p className="text-sm text-gray-600 mb-2">
                  {options.train.station || `${fromLocation} to Katpadi Junction, then local transport`}
                </p>
                <div className="flex gap-4 text-xs text-gray-500">
                  {options.train.frequency && <span>Trains: {options.train.frequency}</span>}
                  {options.train.cost && (
                    <span className="flex items-center gap-1">
                      <IndianRupee className="w-3 h-3" />
                      {options.train.cost}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* By Car */}
          {options.car?.available && (
            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
              <div className="p-2 bg-green-100 rounded-lg">
                <Car className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">By Car/Taxi</h4>
                <p className="text-sm text-gray-600 mb-2">
                  {options.car.route || `Drive from ${fromLocation} via main highway`}
                </p>
                <div className="flex gap-4 text-xs text-gray-500">
                  {options.car.tolls && <span>Tolls: {options.car.tolls}</span>}
                  <span className="flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Free parking at clinic
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* By Auto */}
          {options.auto?.available && (
            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Car className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">By Auto-Rickshaw</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Available from {fromLocation} to Vellore
                </p>
                {options.auto.cost && (
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <IndianRupee className="w-3 h-3" />
                    Approx: {options.auto.cost}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Important Note */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-900 font-medium mb-1">
                Travel Tip for {fromLocation} Patients
              </p>
              <p className="text-sm text-gray-600">
                Plan your visit during morning hours (9-11 AM) for less traffic. 
                Call +91 70106 50063 to schedule your appointment and get precise directions.
              </p>
            </div>
          </div>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}

