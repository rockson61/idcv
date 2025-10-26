import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Phone, MapPin, Clock, Star, Award, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#54CAD3]/10 via-white to-[#005f73]/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#54CAD3] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#005f73] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#54CAD3] rounded-full blur-3xl"></div>
      </div>

      <SectionContainer className="relative z-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[#54CAD3]/20">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[#54CAD3]/20">
                <Users className="h-4 w-4 text-[#54CAD3]" />
                <span className="font-semibold">1000+ Happy Patients</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[#54CAD3]/20">
                <Award className="h-4 w-4 text-[#005f73]" />
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#005f73]">Best Dentist in</span>
                <br />
                <span className="bg-gradient-to-r from-[#54CAD3] to-[#005f73] bg-clip-text text-transparent">
                  Vellore
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dr. Rockson Samuel - Your trusted dental care partner with 15+ years of experience in
                <span className="font-semibold text-[#005f73]">
                  {" "}
                  Root Canal Treatment, Dental Implants, Braces & Cosmetic Dentistry
                </span>
              </p>
            </div>

            {/* Key Services */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#54CAD3]" />
                <span className="font-medium">Root Canal Treatment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#54CAD3]" />
                <span className="font-medium">Dental Implants</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#54CAD3]" />
                <span className="font-medium">Braces & Aligners</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#54CAD3]" />
                <span className="font-medium">Cosmetic Dentistry</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#54CAD3] to-[#005f73] hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
                asChild
              >
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#54CAD3] text-[#54CAD3] hover:bg-[#54CAD3]/10 text-lg px-8 py-6 bg-transparent"
                asChild
              >
                <a href="tel:7010650063">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 7010650063
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#54CAD3]" />
                <span>Gandhi Nagar, Vellore</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#54CAD3]" />
                <span>Mon-Sat: 10AM-8PM</span>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Image & Info Cards */}
          <div className="relative animate-slide-up">
            {/* Main Doctor Image */}
            <div className="relative">
              <GlassCard className="p-8 mb-6">
                <div className="text-center space-y-4">
                  <div className="relative w-48 h-48 mx-auto">
                    <Image
                      src="/professional-dentist-portrait.png"
                      alt="Dr Rockson Samuel - Best Dentist in Vellore"
                      fill
                      className="rounded-full object-cover border-4 border-[#54CAD3]/20"
                      priority
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#54CAD3] text-white p-2 rounded-full">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#005f73]">Dr. Rockson Samuel</h3>
                    <p className="text-[#54CAD3] font-semibold">General Dentist</p>
                    <p className="text-gray-600 mt-2">BDS, 15+ Years Experience</p>
                  </div>
                </div>
              </GlassCard>

              {/* Floating Info Cards */}
              <div className="absolute -left-6 top-20 animate-float">
                <GlassCard className="p-4 w-48">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#005f73]">1000+</div>
                    <div className="text-sm text-gray-600">Successful Treatments</div>
                  </div>
                </GlassCard>
              </div>

              <div className="absolute -right-6 bottom-20 animate-float" style={{ animationDelay: "1s" }}>
                <GlassCard className="p-4 w-48">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#54CAD3]">24/7</div>
                    <div className="text-sm text-gray-600">Emergency Care</div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-[#005f73] mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-[#54CAD3] mb-2">1000+</div>
            <div className="text-gray-600">Happy Patients</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-[#005f73] mb-2">4.9★</div>
            <div className="text-gray-600">Patient Rating</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-[#54CAD3] mb-2">24/7</div>
            <div className="text-gray-600">Emergency Care</div>
          </GlassCard>
        </div>
      </SectionContainer>
    </section>
  )
}
