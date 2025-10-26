import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Bluetooth as Tooth, Smile, Zap, Shield, Heart, Baby, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ServicesOverview() {
  const services = [
    {
      icon: Tooth,
      title: "Root Canal Treatment",
      description: "Pain-free RCT with advanced techniques. Single sitting & multi-visit options available.",
      image: "/root-canal-procedure.png",
      price: "₹3,000 - ₹8,000",
      features: ["Single Sitting RCT", "Painless Procedure", "Digital X-Ray", "Crown Included"],
      href: "/services/root-canal-treatment",
      popular: true,
    },
    {
      icon: Shield,
      title: "Dental Implants",
      description: "Permanent tooth replacement with titanium implants. Lifetime warranty available.",
      image: "/dental-implant-stages.png",
      price: "₹25,000 - ₹45,000",
      features: ["Titanium Implants", "Lifetime Warranty", "Natural Look", "Bone Grafting"],
      href: "/services/dental-implants",
    },
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with veneers, whitening, and smile makeovers.",
      image: "/cosmetic-dentistry-smile.jpg",
      price: "₹5,000 - ₹25,000",
      features: ["Teeth Whitening", "Veneers", "Smile Makeover", "Bonding"],
      href: "/services/cosmetic-dentistry",
    },
    {
      icon: Zap,
      title: "Orthodontics & Braces",
      description: "Straighten teeth with traditional braces, ceramic braces, or Invisalign.",
      image: "/orthodontic-braces.jpg",
      price: "₹30,000 - ₹80,000",
      features: ["Metal Braces", "Ceramic Braces", "Invisalign", "Retainers"],
      href: "/services/orthodontics",
    },
    {
      icon: Heart,
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and check-ups.",
      image: "/dental-checkup.png",
      price: "₹500 - ₹5,000",
      features: ["Regular Check-ups", "Dental Cleaning", "Fillings", "Extractions"],
      href: "/services/general-dentistry",
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly, comfortable environment.",
      image: "/childrens-dental-exam.jpg",
      price: "₹800 - ₹3,000",
      features: ["Child-Friendly Care", "Preventive Treatment", "Fluoride Application", "Sealants"],
      href: "/services/pediatric-dentistry",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#54CAD3]/5">
      <SectionContainer>
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#005f73]">Our Dental Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care with state-of-the-art technology and personalized treatment plans
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#54CAD3] to-[#005f73] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <GlassCard key={index} className="group hover:scale-105 transition-all duration-300 overflow-hidden">
                {service.popular && (
                  <div className="bg-gradient-to-r from-[#54CAD3] to-[#005f73] text-white text-sm font-bold px-4 py-2 text-center">
                    Most Popular
                  </div>
                )}

                <div className="p-6 space-y-4">
                  {/* Service Image */}
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-[#005f73] group-hover:text-[#54CAD3] transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-lg font-bold text-[#54CAD3]">{service.price}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#54CAD3]" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        className="flex-1 bg-gradient-to-r from-[#54CAD3] to-[#005f73] hover:shadow-lg transition-all"
                        asChild
                      >
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#54CAD3] text-[#54CAD3] hover:bg-[#54CAD3]/10 bg-transparent"
                        asChild
                      >
                        <Link href="/contact">Book</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            )
          })}
        </div>

        {/* Emergency Services Banner */}
        <GlassCard className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Dental Emergency?</h3>
            <p className="text-lg opacity-90">
              We provide 24/7 emergency dental care. Don't suffer in pain - call us immediately!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold" asChild>
                <a href="tel:7010650063">Emergency Call: 7010650063</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/services/emergency-dentistry">Emergency Services</Link>
              </Button>
            </div>
          </div>
        </GlassCard>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#54CAD3] text-[#54CAD3] hover:bg-[#54CAD3]/10 px-8 bg-transparent"
            asChild
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </SectionContainer>
    </section>
  )
}
