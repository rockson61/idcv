"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, MessageCircle, AlertTriangle, ArrowRight } from "lucide-react"
import { Alert } from "@/components/ui/alert"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-primary/10 via-primary/5 to-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eFXoylIbKzbzm0NA6WymUePTnzkoiZ.png"
          alt="Family pointing towards dental clinic information"
          fill
          className="object-cover object-right" // Adjust object position as needed
          style={{ opacity: 0.3 }} // Adjust opacity for better text readability
          crossOrigin="anonymous"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-background" />

      <div className="container relative mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 mb-8 md:mb-0 md:ml-auto">
            {/* Top Alert */}
            <Button
              href="/special-offer"
              className="group relative mb-8 rounded-full px-4 py-1.5 text-sm text-primary bg-primary/20 hover:bg-primary/30 transition-colors"
            >
              New Patient Special Offer
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent">
              Top Dental Clinic in Vellore
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12">
              Experience world-class dental treatments at Indira Dental Clinic. Specializing in RCT, Braces, Implants,
              and comprehensive dental care in Vellore.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg px-8" onClick={() => (window.location.href = "tel:07010650063")}>
                <Phone className="mr-2 h-5 w-5" />
                Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                onClick={() =>
                  window.open("https://maps.app.goo.gl/rvyhzFADniQBUDWV8", "_blank", "noopener,noreferrer")
                }
              >
                <MapPin className="mr-2 h-5 w-5" />
                Directions
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8"
                onClick={() => window.open("https://wa.me/917010650063", "_blank", "noopener,noreferrer")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { label: "Years Experience", value: "15+" },
                { label: "Happy Patients", value: "10,000+" },
                { label: "Success Rate", value: "97.5%" },
                { label: "Clinic Locations", value: "4" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 relative h-[400px]">
            {/* This div is intentionally left blank. The background image is now applied to the parent element. */}
          </div>
        </div>

        {/* Emergency Alert */}
        <Alert variant="warning" className="mt-12 max-w-lg mx-auto">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>
              Dental Emergency? We're available 24/7. Call us immediately at{" "}
              <a href="tel:07010650063" className="font-semibold hover:underline">
                07010650063
              </a>
            </span>
          </div>
        </Alert>
      </div>
    </section>
  )
}
