import React from "react"
import Link from "next/link"
import { ModernCard } from "@/components/ui/modern-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  Calendar, 
  MessageCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  CheckCircle
} from "lucide-react"

interface CTAWidgetProps {
  title: string
  description: string
  primaryAction: {
    text: string
    href: string
    icon?: React.ComponentType<any>
  }
  secondaryAction?: {
    text: string
    href: string
    icon?: React.ComponentType<any>
  }
  benefits?: string[]
  urgency?: boolean
  showRating?: boolean
  showAvailability?: boolean
}

export function CTAWidget({
  title,
  description,
  primaryAction,
  secondaryAction,
  benefits = [],
  urgency = false,
  showRating = true,
  showAvailability = true
}: CTAWidgetProps) {
  const PrimaryIcon = primaryAction.icon || Phone
  const SecondaryIcon = secondaryAction?.icon || MessageCircle

  return (
    <ModernCard className={`${urgency ? 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200' : 'bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200'}`}>
      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        {benefits.length > 0 && (
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <Button asChild size="lg" className={`${urgency ? 'bg-red-600 hover:bg-red-700' : 'bg-teal-600 hover:bg-teal-700'} text-white font-semibold`}>
            <Link href={primaryAction.href}>
              <PrimaryIcon className="w-5 h-5 mr-2" />
              {primaryAction.text}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          
          {secondaryAction && (
            <Button asChild size="lg" variant="outline" className={`${urgency ? 'border-red-600 text-red-600 hover:bg-red-50' : 'border-teal-600 text-teal-600 hover:bg-teal-50'} font-semibold`}>
              <Link href={secondaryAction.href}>
                <SecondaryIcon className="w-5 h-5 mr-2" />
                {secondaryAction.text}
              </Link>
            </Button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
          {showRating && (
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span>4.9/5 Rating</span>
            </div>
          )}
          
          {showAvailability && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-blue-600 mr-1" />
              <span>Same Day Appointments</span>
            </div>
          )}
          
          <div className="flex items-center">
            <Shield className="w-4 h-4 text-green-600 mr-1" />
            <span>15+ Years Experience</span>
          </div>
        </div>

        {urgency && (
          <div className="mt-4 p-3 bg-red-100 border border-red-200 rounded-lg">
            <div className="text-center">
              <p className="text-sm font-semibold text-red-800">
                Don't wait! Dental problems can worsen quickly.
              </p>
              <p className="text-xs text-red-700 mt-1">
                Call now for immediate assistance:{" "}
                <a href="tel:7010650063" className="font-bold underline">7010650063</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </ModernCard>
  )
}

export default CTAWidget
