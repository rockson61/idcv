"use client"

import { Shield, Award, Clock, Heart, Users, Sparkles, Stethoscope, ThumbsUp } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const features = [
  {
    icon: Shield,
    title: "Advanced Technology",
    description: "Latest dental equipment and techniques for precise, comfortable treatments",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Proven expertise in all aspects of dental care and cosmetic procedures",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Open 7 days a week with convenient appointment times for your schedule",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Personalized treatment plans focused on your comfort and dental health goals",
  },
  {
    icon: Users,
    title: "5000+ Happy Patients",
    description: "Trusted by thousands of patients across Vellore and surrounding areas",
  },
  {
    icon: Sparkles,
    title: "Comprehensive Services",
    description: "From routine cleanings to complex procedures, all under one roof",
  },
  {
    icon: Stethoscope,
    title: "Emergency Care",
    description: "24/7 emergency dental services for urgent situations and pain relief",
  },
  {
    icon: ThumbsUp,
    title: "Affordable Pricing",
    description: "Transparent pricing with flexible payment options and insurance acceptance",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full text-sm font-semibold text-teal-700 dark:text-teal-300 mb-4">
            <Award className="h-4 w-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Your Trusted Partner in <span className="text-teal-600">Dental Health</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Experience exceptional dental care with modern technology, expert professionals, and a commitment to your
            comfort and satisfaction
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <GlassCard
                key={index}
                variant="default"
                className="p-6 group hover:scale-105 transition-all duration-300 animate-fade-in bg-white dark:bg-gray-800"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </GlassCard>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <GlassCard variant="accent" className="p-8 max-w-4xl mx-auto bg-teal-50 dark:bg-teal-900/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Ready to Experience Quality Dental Care?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Schedule your consultation today and discover the difference expert care makes
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="tel:7010650063"
                  className="px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                >
                  Call Now
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all whitespace-nowrap"
                >
                  Book Online
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
