import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      age: 32,
      location: "Gandhi Nagar, Vellore",
      image: "/indian-woman-smiling.png",
      rating: 5,
      treatment: "Root Canal Treatment",
      testimonial:
        "Dr. Rockson made my root canal completely painless! I was so scared initially, but his gentle approach and expertise made the entire process comfortable. The clinic is very clean and modern. Highly recommended!",
      date: "2 weeks ago",
    },
    {
      name: "Rajesh Kumar",
      age: 45,
      location: "Katpadi, Vellore",
      image: "/indian-man-smiling.png",
      rating: 5,
      treatment: "Dental Implants",
      testimonial:
        "Got my dental implant done by Dr. Rockson. The procedure was smooth and the results are amazing! My new tooth looks and feels completely natural. Worth every penny spent.",
      date: "1 month ago",
    },
    {
      name: "Meera Patel",
      age: 28,
      location: "Sathuvachari, Vellore",
      image: "/indian-woman-professional.png",
      rating: 5,
      treatment: "Cosmetic Dentistry",
      testimonial:
        "Amazing smile makeover! Dr. Rockson transformed my smile with teeth whitening and veneers. I'm so much more confident now. The staff is also very friendly and professional.",
      date: "3 weeks ago",
    },
    {
      name: "Arjun Reddy",
      age: 35,
      location: "Bagayam, Vellore",
      image: "/indian-professional-man.png",
      rating: 5,
      treatment: "Orthodontics",
      testimonial:
        "Dr. Rockson straightened my teeth with braces. The treatment plan was well explained and the results exceeded my expectations. Very satisfied with the service and care received.",
      date: "2 months ago",
    },
    {
      name: "Lakshmi Devi",
      age: 52,
      location: "Gandhi Nagar, Vellore",
      image: "/middle-aged-indian-woman.png",
      rating: 5,
      treatment: "General Dentistry",
      testimonial:
        "Regular dental check-ups with Dr. Rockson have kept my teeth healthy. He explains everything clearly and the treatment is always gentle. Best dentist in Vellore!",
      date: "1 week ago",
    },
    {
      name: "Vikram Singh",
      age: 29,
      location: "Ranipet",
      image: "/young-indian-man.png",
      rating: 5,
      treatment: "Emergency Care",
      testimonial:
        "Had a dental emergency late at night. Dr. Rockson was available and provided immediate relief. His 24/7 emergency service is a lifesaver. Truly grateful for his care.",
      date: "4 days ago",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#54CAD3]/5">
      <SectionContainer>
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#005f73]">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from our satisfied patients across Vellore
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#54CAD3] to-[#005f73] mx-auto rounded-full"></div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <GlassCard className="inline-block p-8">
            <div className="space-y-4">
              <div className="text-6xl font-bold text-[#005f73]">4.9</div>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 text-yellow-500 fill-current" />
                ))}
              </div>
              <div className="text-gray-600">
                <div className="text-lg font-semibold">Based on 126+ Reviews</div>
                <div className="text-sm">Google Reviews & Patient Feedback</div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} className="p-6 hover:scale-105 transition-all duration-300">
              <div className="space-y-4">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-[#54CAD3] opacity-50" />

                {/* Rating */}
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= testimonial.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.testimonial}"</p>

                {/* Treatment Info */}
                <div className="bg-[#54CAD3]/10 rounded-lg p-3">
                  <div className="text-sm font-semibold text-[#005f73]">Treatment: {testimonial.treatment}</div>
                </div>

                {/* Patient Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="relative w-12 h-12">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#005f73]">
                      {testimonial.name}, {testimonial.age}
                    </div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                    <div className="text-xs text-gray-500">{testimonial.date}</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Review Platforms */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#005f73] mb-8">Find Us On</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <GlassCard className="p-4 hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#54CAD3]">4.9★</div>
                <div className="text-sm text-gray-600">Google Reviews</div>
              </div>
            </GlassCard>
            <GlassCard className="p-4 hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#54CAD3]">4.8★</div>
                <div className="text-sm text-gray-600">JustDial</div>
              </div>
            </GlassCard>
            <GlassCard className="p-4 hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#54CAD3]">4.9★</div>
                <div className="text-sm text-gray-600">Practo</div>
              </div>
            </GlassCard>
            <GlassCard className="p-4 hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#54CAD3]">5.0★</div>
                <div className="text-sm text-gray-600">Facebook</div>
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
