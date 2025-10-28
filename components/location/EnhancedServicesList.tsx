'use client'

import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { CheckCircle, IndianRupee, Clock, Award, Shield, Zap , ArrowRight} from 'lucide-react'
import Link from 'next/link'

interface Service {
  title?: string
  name?: string  // Allow either 'title' or 'name'
  slug?: string
  href?: string  // Allow either 'slug' or 'href'
  description?: string
  price: string
  features?: string[]  // Make features optional
  duration?: string
  popular?: boolean
  badge?: string
}

interface EnhancedServicesListProps {
  services: Service[]
  locationName: string
  className?: string
}

export function EnhancedServicesList({ services, locationName, className = "" }: EnhancedServicesListProps) {
  return (
    <section className={className} id="services">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Dental Services for {locationName} Patients
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive dental care with modern technology and affordable pricing. 
          All treatments performed by Dr. Rockson Samuel with 15+ years of experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ModernCard 
            key={index} 
            hover 
            className={`group relative overflow-hidden ${service.popular ? 'ring-2 ring-teal-500' : ''}`}
          >
            {/* Popular Badge */}
            {service.popular && (
              <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
            )}

            {/* Custom Badge */}
            {service.badge && (
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                {service.badge}
              </div>
            )}

            <ModernCardHeader>
              <ModernCardTitle className="flex items-center justify-between">
                {service.title}
                {service.duration && (
                  <span className="text-xs text-gray-500 font-normal flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {service.duration}
                  </span>
                )}
              </ModernCardTitle>
            </ModernCardHeader>
            
            <ModernCardContent>
              {service.description && (
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              )}
              
              {/* Price Display */}
              <div className="mb-4 p-3 bg-teal-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-teal-600" />
                  <span className="text-2xl font-bold text-teal-600">{service.price}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Transparent pricing • No hidden costs</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-700">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {service.slug && (
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </ModernCardContent>
          </ModernCard>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <Award className="w-8 h-8 text-teal-600" />
          <div>
            <p className="font-semibold text-gray-900">Quality Care</p>
            <p className="text-xs text-gray-600">15+ Years</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <Shield className="w-8 h-8 text-blue-600" />
          <div>
            <p className="font-semibold text-gray-900">Safe Treatment</p>
            <p className="text-xs text-gray-600">Sterilized</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <Zap className="w-8 h-8 text-purple-600" />
          <div>
            <p className="font-semibold text-gray-900">Modern Tech</p>
            <p className="text-xs text-gray-600">Latest Equipment</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <IndianRupee className="w-8 h-8 text-green-600" />
          <div>
            <p className="font-semibold text-gray-900">Affordable</p>
            <p className="text-xs text-gray-600">EMI Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Service categories for better organization
export const serviceCategories = {
  essential: ['Root Canal Treatment', 'Dental Implants', 'General Dentistry'],
  cosmetic: ['Teeth Whitening', 'Veneers', 'Smile Makeover', 'Bonding'],
  orthodontic: ['Metal Braces', 'Ceramic Braces', 'Invisalign', 'Retainers'],
  specialized: ['Oral Surgery', 'Gum Treatment', 'Pediatric Care', 'Dentures']
};

