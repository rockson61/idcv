'use client'

import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { CheckCircle, IndianRupee, Clock, Award, Shield, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export interface LocationService {
  title?: string
  name?: string // Allow either 'title' or 'name'
  slug?: string
  href?: string // Allow either 'slug' or 'href'
  description?: string
  price?: string // Make price optional for simple service lists
  features?: string[] // Make features optional
  duration?: string
  popular?: boolean
  badge?: string
}

interface EnhancedServicesListProps {
  services: LocationService[]
  locationName: string
  className?: string
}

const defaultServices: LocationService[] = [
  {
    title: 'Dental Implants',
    slug: 'dental-implants',
    description: 'Permanent replacement for missing teeth with 3D guided surgery and lifetime maintenance.',
    features: ['Titanium & zirconia options', 'Same-day provisional crowns', '0% EMI available'],
    popular: true,
  },
  {
    title: 'Painless Root Canal Treatment',
    slug: 'root-canal-treatment',
    description: 'Single-sitting rotary RCTs with digital anaesthesia for immediate relief from tooth pain.',
    features: ['CBCT-based diagnosis', 'Post-op review on WhatsApp', 'Crown recommendations included'],
  },
  {
    title: 'Braces & Aligners',
    slug: 'orthodontics',
    description: 'Metal, ceramic, and Invisalign® aligners for teens and adults seeking confident smiles.',
    features: ['Personalised smile simulation', 'Periodic progress reviews', 'Flexible payment plans'],
  },
  {
    title: 'Smile Design & Veneers',
    slug: 'cosmetic-dentistry/veneers',
    description: 'Minimal-prep veneers, bonding, and whitening to elevate your smile aesthetics instantly.',
    features: ['Digital mock-up preview', 'Shade-matched ceramics', 'Wedding / event smile packages'],
    badge: 'Trending',
  },
  {
    title: 'Child Dentistry',
    slug: 'pediatric-dentistry',
    description: 'Friendly paediatric dental care for toddlers, school-goers, and teens from {location}.',
    features: ['Fluoride & sealants', 'Habit counselling', 'Special needs care'],
  },
  {
    title: 'Full Mouth Rehabilitation',
    slug: 'full-mouth-rehabilitation',
    description: 'Comprehensive bite correction combining implants, crowns, and gum therapy for total transformation.',
    features: ['Multi-specialty planning', 'Phased treatment options', 'Dedicated treatment coordinator'],
  },
]

const defaultConditions = [
  { title: 'Tooth Pain & Sensitivity', href: '/conditions/tooth-sensitivity' },
  { title: 'Cavities & Decay', href: '/conditions/cavities' },
  { title: 'Bleeding or Swollen Gums', href: '/conditions/bleeding-gums' },
  { title: 'Missing Teeth & Denture Issues', href: '/conditions/tooth-abscess' },
  { title: 'Crooked or Gapped Smile', href: '/conditions/malocclusion' },
  { title: 'TMJ & Jaw Discomfort', href: '/conditions/tmj-disorders' },
]

export function EnhancedServicesList({ services, locationName, className = '' }: EnhancedServicesListProps) {
  const effectiveServices = services && services.length > 0 ? services : defaultServices.map((service) => ({
    ...service,
    description: service.description?.replace('{location}', locationName),
  }))

  return (
    <section className={className} id="services">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Dental Services in {locationName}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Comprehensive preventive, restorative, implant, and cosmetic dentistry delivered closer to home. Each plan is
          crafted after a thorough consultation so you receive only the care you genuinely need.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {effectiveServices.map((service, index) => {
          const serviceTitle = service.title || service.name || 'Dental Service'
          const serviceLink = service.href || (service.slug ? `/services/${service.slug}` : '#')
          const serviceFeatures = service.features || []

          return (
            <ModernCard key={index} hover className={`group relative overflow-hidden ${service.popular ? 'ring-2 ring-teal-500' : ''}`}>
              {service.popular && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR CHOICE
                </div>
              )}

              {service.badge && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {service.badge}
                </div>
              )}

              <ModernCardHeader>
                <ModernCardTitle className="flex items-center justify-between">
                  {serviceTitle}
                  {service.duration && (
                    <span className="text-xs text-gray-500 font-normal flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </span>
                  )}
                </ModernCardTitle>
              </ModernCardHeader>

              <ModernCardContent>
                {service.description && <p className="text-gray-600 mb-4 text-sm">{service.description}</p>}

                {service.price && (
                  <div className="mb-4 p-3 bg-teal-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-5 h-5 text-teal-600" />
                      <span className="text-2xl font-bold text-teal-600">{service.price}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Transparent pricing • No hidden costs</p>
                  </div>
                )}

                {serviceFeatures.length > 0 && (
                  <ul className="space-y-2 text-sm text-gray-700">
                    {serviceFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link href={serviceLink} className="mt-4 inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </ModernCardContent>
            </ModernCard>
          )
        })}
      </div>

      {/* Conditions Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Dental Conditions We Treat in {locationName}</h2>
        <p className="mb-4 text-gray-600 max-w-2xl">
          Whether you are dealing with sudden tooth pain or planning a full smile makeover, our dentists diagnose the root
          cause quickly and personalise the path to lasting relief.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {defaultConditions.map((condition) => (
            <Link
              key={condition.href}
              href={condition.href}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-teal-600 transition-colors hover:border-teal-500 hover:text-teal-700"
            >
              {condition.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <Award className="w-8 h-8 text-teal-600" />
          <div>
            <p className="font-semibold text-gray-900">ISO Certified</p>
            <p className="text-xs text-gray-600">Quality protocols</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <Shield className="w-8 h-8 text-blue-600" />
          <div>
            <p className="font-semibold text-gray-900">100% Sterile</p>
            <p className="text-xs text-gray-600">Class B autoclave</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <Zap className="w-8 h-8 text-purple-600" />
          <div>
            <p className="font-semibold text-gray-900">Digital Dentistry</p>
            <p className="text-xs text-gray-600">CBCT • Intraoral Scan</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
          <IndianRupee className="w-8 h-8 text-green-600" />
          <div>
            <p className="font-semibold text-gray-900">Affordable Plans</p>
            <p className="text-xs text-gray-600">EMI & Insurance help</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export const serviceCategories = {
  essential: ['Root Canal Treatment', 'Dental Implants', 'General Dentistry'],
  cosmetic: ['Teeth Whitening', 'Veneers', 'Smile Makeover', 'Bonding'],
  orthodontic: ['Metal Braces', 'Ceramic Braces', 'Invisalign', 'Retainers'],
  specialized: ['Oral Surgery', 'Gum Treatment', 'Pediatric Care', 'Dentures'],
}

