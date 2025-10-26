import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModernCard } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Star, 
  Clock, 
  Shield,
  Phone,
  Calendar,
  MapPin
} from "lucide-react"

interface CompactServiceWidgetProps {
  title: string
  description: string
  services: Array<{
    name: string
    slug: string
    price?: string
    duration?: string
  }>
  ctaText?: string
  ctaLink?: string
  showPricing?: boolean
  showLocation?: boolean
}

export function CompactServiceWidget({
  title,
  description,
  services,
  ctaText = "Learn More",
  ctaLink = "/services",
  showPricing = true,
  showLocation = true
}: CompactServiceWidgetProps) {
  return (
    <ModernCard className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
          </div>
          <Badge variant="outline" className="border-teal-600 text-teal-700 text-xs">
            <Star className="w-3 h-3 mr-1" />
            4.9/5
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {services.slice(0, 4).map((service, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div className="flex-1">
                <Link 
                  href={`/services/${service.slug}`}
                  className="text-sm font-semibold text-gray-900 hover:text-teal-600 transition-colors"
                >
                  {service.name}
                </Link>
                {service.duration && (
                  <div className="flex items-center text-xs text-gray-600 mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    {service.duration}
                  </div>
                )}
              </div>
              {showPricing && service.price && (
                <div className="text-right">
                  <div className="text-sm font-bold text-teal-600">{service.price}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
            <Link href={ctaLink}>
              {ctaText}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          
          <Button asChild size="sm" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
            <Link href="/contact">
              <Phone className="w-4 h-4 mr-1" />
              Book Now
            </Link>
          </Button>
        </div>

        {showLocation && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center text-xs text-gray-600">
              <MapPin className="w-3 h-3 mr-1" />
              <span>Conveniently located in Gandhi Nagar, Vellore</span>
            </div>
          </div>
        )}
      </div>
    </ModernCard>
  )
}

export default CompactServiceWidget
