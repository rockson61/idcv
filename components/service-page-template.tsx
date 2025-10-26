import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Calendar, Clock, Star, CheckCircle, ArrowRight, Heart, Users, Award, AlertCircle } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ServicePageTemplateProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  price: string
  duration: string
  successRate?: string
  benefits: Array<{
    icon: React.ElementType
    title: string
    description: string
  }>
  procedure: Array<{
    step: number
    title: string
    description: string
    duration?: string
  }>
  beforeAfter?: Array<{
    title: string
    before: string
    after: string
    description: string
  }>
  testimonials?: Array<{
    name: string
    image: string
    rating: number
    text: string
    treatment: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
  relatedServices?: Array<{
    title: string
    href: string
    image: string
  }>
  aftercare?: string[]
  warnings?: string[]
  stats?: Array<{
    value: string
    label: string
  }>
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  price,
  duration,
  successRate,
  benefits,
  procedure,
  beforeAfter,
  testimonials,
  faqs,
  relatedServices,
  aftercare,
  warnings,
  stats,
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#54CAD3]/5 to-[#005f73]/5">
      {/* Hero Section */}
      <SectionContainer className="pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-[#54CAD3]/10 text-[#005f73] border-[#54CAD3] mb-4">{subtitle}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#005f73] to-[#54CAD3] bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{description}</p>

            {stats && (
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#54CAD3]">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="btn-gradient" asChild>
                <a href="tel:7010650063">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 7010650063
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#54CAD3] text-[#005f73] hover:bg-[#54CAD3]/10 bg-transparent"
                asChild
              >
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <GlassCard className="p-4 overflow-hidden">
              <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                <Image src={heroImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-[#005f73] mb-1">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-gray-600">Duration</div>
                  <div className="font-bold text-sm">{duration}</div>
                </div>
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-[#005f73] mb-1">
                    <span className="text-lg">₹</span>
                  </div>
                  <div className="text-xs text-gray-600">Price</div>
                  <div className="font-bold text-sm">{price}</div>
                </div>
                {successRate && (
                  <div className="p-3 bg-white/50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 text-[#005f73] mb-1">
                      <Star className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-gray-600">Success</div>
                    <div className="font-bold text-sm">{successRate}</div>
                  </div>
                )}
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionContainer>

      {/* Warnings Section */}
      {warnings && warnings.length > 0 && (
        <SectionContainer className="pb-16">
          <GlassCard className="p-6 border-l-4 border-orange-500 bg-orange-50/50">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-orange-900 mb-3">Important Information</h3>
                <ul className="space-y-2">
                  {warnings.map((warning, index) => (
                    <li key={index} className="text-orange-800 text-sm">
                      • {warning}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </SectionContainer>
      )}

      {/* Benefits Section */}
      <SectionContainer className="pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">Benefits of {title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the advantages of choosing this treatment</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-[#54CAD3] to-[#005f73] rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#005f73] mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Treatment Process */}
      <SectionContainer className="pb-16 bg-gradient-to-r from-[#54CAD3]/5 to-[#005f73]/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">Treatment Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Step-by-step guide to your treatment journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {procedure.map((step, index) => (
            <div key={index} className="relative">
              {index < procedure.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#54CAD3] to-[#005f73]" />
              )}
              <GlassCard className="p-6 mb-6 ml-16 relative hover:shadow-xl transition-all duration-300">
                <div className="absolute -left-16 top-6 w-12 h-12 bg-gradient-to-br from-[#54CAD3] to-[#005f73] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {step.step}
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#005f73]">{step.title}</h3>
                  {step.duration && (
                    <Badge variant="outline" className="border-[#54CAD3] text-[#54CAD3]">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Before/After Gallery */}
      {beforeAfter && beforeAfter.length > 0 && (
        <SectionContainer className="pb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">Transformation Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results from our patients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfter.map((case_, index) => (
              <GlassCard key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative h-48">
                    <Image
                      src={case_.before || "/placeholder.svg"}
                      alt="Before treatment"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative h-48">
                    <Image
                      src={case_.after || "/placeholder.svg"}
                      alt="After treatment"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#005f73] mb-2">{case_.title}</h3>
                  <p className="text-sm text-gray-600">{case_.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <SectionContainer className="pb-16 bg-gradient-to-r from-[#54CAD3]/5 to-[#005f73]/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">Patient Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from patients who experienced this treatment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#005f73]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic text-sm">"{testimonial.text}"</p>
              </GlassCard>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Aftercare */}
      {aftercare && aftercare.length > 0 && (
        <SectionContainer className="pb-16">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold text-[#005f73] mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-[#54CAD3]" />
                Post-Treatment Care
              </h2>
              <div className="space-y-4">
                {aftercare.map((instruction, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{instruction}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </SectionContainer>
      )}

      {/* FAQ Section */}
      <SectionContainer className="pb-16 bg-gradient-to-r from-[#54CAD3]/5 to-[#005f73]/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about {title.toLowerCase()}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-semibold text-[#005f73] group-hover:text-[#54CAD3] transition-colors">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-6 h-6 bg-[#54CAD3]/10 rounded-full flex items-center justify-center group-open:rotate-45 transition-transform">
                      <span className="text-[#54CAD3] font-bold">+</span>
                    </div>
                  </div>
                </summary>
                <div className="mt-4 pt-4 border-t border-[#54CAD3]/20">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <SectionContainer className="pb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">Related Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore other treatments that might interest you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <Link key={index} href={service.href}>
                <GlassCard className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#005f73] group-hover:text-[#54CAD3] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-[#54CAD3] font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* CTA Section */}
      <SectionContainer className="pb-16">
        <GlassCard className="text-center p-8 md:p-12 bg-gradient-to-r from-[#54CAD3]/10 to-[#005f73]/10">
          <h2 className="text-3xl font-bold text-[#005f73] mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your consultation with Dr. Rockson Samuel today and take the first step towards a healthier, more
            confident smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gradient" asChild>
              <a href="tel:7010650063">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 7010650063
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#54CAD3] text-[#005f73] hover:bg-[#54CAD3]/10 bg-transparent"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#54CAD3]" />
              <span>2000+ Happy Patients</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#54CAD3]" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#54CAD3]" />
              <span>15+ Years Experience</span>
            </div>
          </div>
        </GlassCard>
      </SectionContainer>
    </div>
  )
}
