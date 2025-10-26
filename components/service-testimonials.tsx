import { Star } from "lucide-react"

interface Testimonial {
  name: string
  location: string
  quote: string
  rating: number
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[]
}

export function ServiceTestimonials({ testimonials }: ServiceTestimonialsProps) {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Patients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="italic mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
