"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, MapPin, Clock, Star, Award, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Expert Dental Care in Vellore",
      subtitle: "Dr. Rockson Samuel - 15+ Years Experience",
      description: "Comprehensive dental treatments with state-of-the-art technology and compassionate care",
      cta: "Book Consultation",
      ctaLink: "tel:7010650063",
    },
    {
      title: "Advanced Root Canal Treatment",
      subtitle: "Painless & Single Sitting RCT Available",
      description: "Experience comfortable root canal therapy with the latest techniques and technology",
      cta: "Learn More",
      ctaLink: "/services/root-canal-treatment",
    },
    {
      title: "Transform Your Smile",
      subtitle: "Cosmetic Dentistry & Orthodontics",
      description: "Teeth whitening, veneers, braces, and Invisalign for your perfect smile",
      cta: "View Services",
      ctaLink: "/services/cosmetic-dentistry",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Patients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Shield, value: "98%", label: "Success Rate" },
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full text-sm font-semibold text-teal-700 dark:text-teal-300">
              <Star className="h-4 w-4 fill-current" />
              Top Rated Dental Clinic in Vellore
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                {slides[currentSlide].title}
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">{slides[currentSlide].description}</p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-teal-600" />
                <span className="font-medium">7010650063</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-600" />
                <span className="font-medium">Gandhi Nagar, Vellore</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-teal-600" />
                <span className="font-medium">Open 7 Days</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href={slides[currentSlide].ctaLink}>
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 hover:bg-gray-100 text-gray-900 dark:border-white dark:text-white dark:hover:bg-white/10 bg-transparent font-semibold"
                asChild
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-8 bg-teal-600" : "w-2 bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-scale-in">
            <GlassCard variant="default" className="p-8 bg-white/80 dark:bg-gray-800/80">
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/professional-dentist-portrait.png"
                  alt="Dr. Rockson Samuel - Expert Dentist"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <GlassCard variant="accent" className="p-4 bg-teal-600/95 text-white">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-white text-teal-600 flex items-center justify-center font-bold text-xl">
                        RS
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Dr. Rockson Samuel</h3>
                        <p className="text-sm text-white/90">BDS, General Dentist</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-xs text-white/90 ml-1">(500+ Reviews)</span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-in">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <GlassCard
                key={index}
                variant="default"
                className="p-6 text-center group hover:scale-105 transition-transform bg-white/80 dark:bg-gray-800/80"
              >
                <div className="flex justify-center mb-3">
                  <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                    <IconComponent className="h-6 w-6 text-teal-600 dark:text-teal-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-teal-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </GlassCard>
            )
          })}
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-teal-600 to-blue-600 py-3 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 animate-pulse" />
              <span className="font-semibold">24/7 Emergency Dental Care Available</span>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="bg-white text-teal-600 hover:bg-gray-100 font-semibold"
              asChild
            >
              <a href="tel:7010650063">Call Now: 7010650063</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
