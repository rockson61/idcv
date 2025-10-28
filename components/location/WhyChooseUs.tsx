'use client'

import { ModernCard } from '@/components/ui/modern-card'
import { Shield, Award, Clock, IndianRupee, Users, Stethoscope, Heart, Star } from 'lucide-react'

interface WhyChooseUsProps {
  locationName: string
  className?: string
}

export function WhyChooseUs({ locationName, className = "" }: WhyChooseUsProps) {
  const reasons = [
    {
      icon: Shield,
      title: 'Expert Dental Care',
      description: 'Dr. Rockson Samuel with 15+ years of experience treating patients from ' + locationName,
      color: 'text-teal-600 bg-teal-50'
    },
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      description: 'Transparent pricing with EMI options. Save 20-40% compared to other clinics',
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: Award,
      title: 'Modern Technology',
      description: 'Latest dental equipment, digital X-rays, and international treatment standards',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Open 9 AM to 9 PM daily including weekends for your convenience',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: Users,
      title: 'Trusted by Thousands',
      description: `1000+ satisfied patients from ${locationName} and nearby areas`,
      color: 'text-orange-600 bg-orange-50'
    },
    {
      icon: Heart,
      title: 'Painless Procedures',
      description: 'Advanced pain management techniques for comfortable dental treatments',
      color: 'text-pink-600 bg-pink-50'
    },
    {
      icon: Stethoscope,
      title: 'Comprehensive Care',
      description: 'All dental services under one roof - from cleaning to complex surgeries',
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      icon: Star,
      title: '4.9/5 Rating',
      description: 'Consistently rated as the best dental clinic by patients',
      color: 'text-yellow-600 bg-yellow-50'
    },
  ];

  return (
    <section className={className}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Why {locationName} Patients Choose Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover why thousands of patients from {locationName} trust Indira Dental Clinic for their dental care needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <ModernCard key={index} className="group hover:shadow-lg transition-all">
              <div className="p-6">
                <div className={`p-3 ${reason.color} rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {reason.description}
                </p>
              </div>
            </ModernCard>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 text-center p-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg">
        <h3 className="text-2xl font-bold mb-2">
          Ready to Experience the Difference?
        </h3>
        <p className="mb-4 text-teal-50">
          Join {locationName} residents who've discovered quality dental care at affordable prices
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation
          </a>
          <a
            href="tel:+917010650063"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
          >
            Call: +91 70106 50063
          </a>
        </div>
      </div>
    </section>
  )
}

