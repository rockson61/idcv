import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Shield, Clock, Award, Heart, Zap, Users, CheckCircle, Star } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Technology",
      description:
        "State-of-the-art dental equipment including digital X-rays, laser dentistry, and 3D imaging for precise diagnosis and treatment.",
      color: "text-[#54CAD3]",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description:
        "Round-the-clock emergency dental services. We're always here when you need us most, even during weekends and holidays.",
      color: "text-red-500",
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description:
        "Dr. Rockson Samuel brings over 15 years of expertise in comprehensive dental care with thousands of successful treatments.",
      color: "text-[#005f73]",
    },
    {
      icon: Heart,
      title: "Painless Treatment",
      description:
        "Advanced pain management techniques and gentle procedures ensure comfortable treatment experience for all patients.",
      color: "text-pink-500",
    },
    {
      icon: Zap,
      title: "Quick & Efficient",
      description:
        "Streamlined processes and efficient treatment protocols minimize your time in the chair while maximizing results.",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      title: "Family-Friendly",
      description:
        "Comprehensive dental care for all ages, from pediatric dentistry to geriatric care, in a welcoming environment.",
      color: "text-green-500",
    },
  ]

  const guarantees = [
    "100% Sterilization & Safety Protocols",
    "Transparent Pricing with No Hidden Costs",
    "Warranty on All Major Treatments",
    "Flexible Payment Plans Available",
    "Insurance Claims Assistance",
    "Follow-up Care & Support",
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#54CAD3]/5 to-white">
      <SectionContainer>
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#005f73]">Why Choose Indira Dental Clinic?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with Vellore's most trusted dental care provider
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#54CAD3] to-[#005f73] mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <GlassCard key={index} className="p-8 text-center hover:scale-105 transition-all duration-300 group">
                <div className="space-y-4">
                  <div
                    className={`inline-flex p-4 rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#005f73] group-hover:text-[#54CAD3] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </GlassCard>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <GlassCard className="p-6 text-center">
            <div className="text-4xl font-bold text-[#54CAD3] mb-2">1000+</div>
            <div className="text-gray-600">Happy Patients</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-4xl font-bold text-[#005f73] mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-4xl font-bold text-[#54CAD3] mb-2">4.9★</div>
            <div className="text-gray-600">Patient Rating</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-4xl font-bold text-[#005f73] mb-2">24/7</div>
            <div className="text-gray-600">Emergency Care</div>
          </GlassCard>
        </div>

        {/* Guarantees Section */}
        <GlassCard className="p-8 bg-gradient-to-r from-[#005f73]/5 to-[#54CAD3]/5">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[#005f73] mb-4">Our Guarantees</h3>
            <p className="text-gray-600">We stand behind our work with these commitments to you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-[#54CAD3] flex-shrink-0" />
                <span className="font-medium text-gray-700">{guarantee}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Patient Testimonial Highlight */}
        <div className="mt-16 text-center">
          <GlassCard className="p-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium text-gray-700 italic">
                "Dr. Rockson and his team at Indira Dental Clinic provided exceptional care. The clinic is modern,
                clean, and the staff is incredibly professional. I highly recommend them for any dental needs."
              </blockquote>
              <div className="text-[#54CAD3] font-semibold">- Priya Sharma, Gandhi Nagar, Vellore</div>
            </div>
          </GlassCard>
        </div>
      </SectionContainer>
    </section>
  )
}
