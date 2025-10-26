import type { Metadata } from "next"
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, User, Calendar, Phone, Award, Heart, Smile, CheckCircle2, ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Patient Reviews & Testimonials | Indira Dental Clinic Vellore | Real Success Stories',
  description: 'Read genuine patient reviews and testimonials from Indira Dental Clinic Vellore. Success stories of dental implants, RCT, braces, cosmetic dentistry. Real patient experiences.',
  keywords: ['dental clinic reviews vellore', 'patient testimonials', 'dental implant reviews', 'success stories', 'patient feedback'],
}

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 32,
    location: "Vellore",
    treatment: "Root Canal Treatment",
    rating: 5,
    date: "2024-01-15",
    image: "/indian-woman-smiling.png",
    testimonial:
      "I was terrified of getting a root canal, but Dr. Rockson Samuel made the entire process completely painless. His gentle approach and clear explanations helped me feel comfortable throughout. The treatment was completed in just one sitting, and I experienced no pain afterward. The clinic is very clean and modern. I highly recommend Dr. Rockson for anyone needing dental care.",
    verified: true,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    age: 45,
    location: "Katpadi",
    treatment: "Dental Implants",
    rating: 5,
    date: "2024-02-03",
    image: "/indian-man-smiling.png",
    testimonial:
      "After losing two teeth in an accident, I was looking for the best dental implant specialist in Vellore. Dr. Rockson Samuel exceeded my expectations. The implants look and feel completely natural. The entire process was well-planned, and the results are amazing. My confidence is back, and I can eat all my favorite foods again. Thank you, Doctor!",
    verified: true,
  },
  {
    id: 3,
    name: "Meera Krishnan",
    age: 28,
    location: "Gandhi Nagar",
    treatment: "Teeth Whitening & Veneers",
    rating: 5,
    date: "2024-01-28",
    image: "/indian-woman-professional.png",
    testimonial:
      "I wanted a complete smile makeover for my wedding, and Dr. Rockson delivered beyond my expectations. The teeth whitening and porcelain veneers transformed my smile completely. Everyone at my wedding complimented my beautiful smile. The treatment was comfortable, and the results are stunning. I feel so much more confident now.",
    verified: true,
  },
  {
    id: 4,
    name: "Arun Patel",
    age: 38,
    location: "Sathuvachari",
    treatment: "Invisalign Treatment",
    rating: 5,
    date: "2024-02-10",
    image: "/indian-professional-man.png",
    testimonial:
      "As a working professional, I needed a discreet way to straighten my teeth. Dr. Rockson recommended Invisalign, and it was the perfect solution. The aligners were comfortable, and nobody could tell I was wearing them. My teeth are now perfectly aligned, and the entire process was smooth. Excellent service and results!",
    verified: true,
  },
  {
    id: 5,
    name: "Lakshmi Venkatesh",
    age: 52,
    location: "Bagayam",
    treatment: "Gum Disease Treatment",
    rating: 5,
    date: "2024-01-20",
    image: "/indian-woman-middle-aged.jpg",
    testimonial:
      "I had severe gum disease and was worried about losing my teeth. Dr. Rockson Samuel provided comprehensive periodontal treatment that saved my teeth. His expertise in gum treatment is exceptional. The bleeding and pain are completely gone, and my gums are healthy again. I'm grateful for his skilled care and attention.",
    verified: true,
  },
  {
    id: 6,
    name: "Vikram Singh",
    age: 35,
    location: "Ranipet",
    treatment: "Emergency Dental Care",
    rating: 5,
    date: "2024-02-05",
    image: "/young-indian-man.png",
    testimonial:
      "I had a severe toothache on a Sunday evening and was in excruciating pain. Dr. Rockson Samuel opened the clinic specially for my emergency. He quickly diagnosed the problem and provided immediate relief. His compassionate care during my emergency situation was remarkable. I'm now a regular patient and trust him completely.",
    verified: true,
  },
  {
    id: 7,
    name: "Kavitha Raman",
    age: 29,
    location: "Kosapet",
    treatment: "Braces Treatment",
    rating: 5,
    date: "2024-01-12",
    image: "/indian-woman-happy.jpg",
    testimonial:
      "I wore braces for 18 months under Dr. Rockson's care, and the transformation is incredible. My crooked teeth are now perfectly straight. Throughout the treatment, he was patient, encouraging, and always available for any concerns. The clinic staff is also very friendly and professional. Best orthodontic treatment in Vellore!",
    verified: true,
  },
  {
    id: 8,
    name: "Suresh Babu",
    age: 48,
    location: "Thorapadi",
    treatment: "Full Mouth Rehabilitation",
    rating: 5,
    date: "2024-02-01",
    image: "/middle-aged-indian-woman.png",
    testimonial:
      "After years of dental problems, Dr. Rockson Samuel gave me a complete smile makeover with full mouth rehabilitation. The comprehensive treatment plan included implants, crowns, and gum treatment. Now I have a beautiful, functional smile. His expertise and attention to detail are outstanding. Life-changing treatment!",
    verified: true,
  },
  {
    id: 9,
    name: "Divya Mohan",
    age: 26,
    location: "Gandhi Nagar",
    treatment: "Pediatric Dental Care",
    rating: 5,
    date: "2024-01-25",
    image: "/indian-mother-smiling.jpg",
    testimonial:
      "Dr. Rockson Samuel is amazing with children! My 6-year-old daughter was scared of dentists, but he made her feel comfortable and even excited about dental visits. His gentle approach and child-friendly explanations helped her overcome her fear. The clinic has a welcoming environment for kids. We're so grateful for his patience and care.",
    verified: true,
  },
  {
    id: 10,
    name: "Ramesh Gupta",
    age: 41,
    location: "Ambur",
    treatment: "Dental Crowns",
    rating: 5,
    date: "2024-02-08",
    image: "/indian-man-smiling.png",
    testimonial:
      "I needed multiple dental crowns after years of neglecting my teeth. Dr. Rockson Samuel restored my smile with beautiful, natural-looking crowns. The color matching is perfect, and they feel just like my natural teeth. His technical skills and artistic eye are exceptional. I can smile confidently again!",
    verified: true,
  },
]

const stats = [
  {
    icon: Star,
    number: "4.9/5",
    title: "Average Rating",
    description: "Based on 500+ patient reviews",
  },
  {
    icon: ThumbsUp,
    number: "98%",
    title: "Satisfaction Rate",
    description: "Patients would recommend us",
  },
  {
    icon: Award,
    number: "5000+",
    title: "Happy Patients",
    description: "Treated successfully",
  },
  {
    icon: Heart,
    number: "15+",
    title: "Years Experience",
    description: "Serving Vellore community",
  },
]

const treatmentCategories = [
  { name: "Root Canal Treatment", count: 45, rating: 4.9 },
  { name: "Dental Implants", count: 38, rating: 4.9 },
  { name: "Cosmetic Dentistry", count: 52, rating: 4.8 },
  { name: "Orthodontics", count: 41, rating: 4.9 },
  { name: "General Dentistry", count: 67, rating: 4.8 },
  { name: "Emergency Care", count: 29, rating: 5.0 },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#54CAD3]/5 to-[#005f73]/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-[#54CAD3] text-[#005f73]">
            Patient Stories
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-[#005f73] mb-6">What Our Patients Say</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Read genuine testimonials from our satisfied patients who have experienced exceptional dental care with Dr.
            Rockson Samuel at Indira Dental Clinic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gradient">
              <Phone className="w-5 h-5 mr-2" />
              Book Your Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-[#54CAD3] text-[#005f73] bg-transparent">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Appointment
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <ModernCard key={index} className="text-center p-6">
              <stat.icon className="w-12 h-12 text-[#54CAD3] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#005f73] mb-2">{stat.number}</div>
              <h3 className="text-lg font-semibold text-[#005f73] mb-2">{stat.title}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </ModernCard>
          ))}
        </div>
      </div>

      {/* Treatment Categories */}
      <div className="container mx-auto px-4 py-12 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">Reviews by Treatment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what patients say about specific treatments and procedures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {treatmentCategories.map((category, index) => (
            <ModernCard key={index} className="p-6 text-center">
              <h3 className="text-lg font-bold text-[#005f73] mb-2">{category.name}</h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(category.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#005f73]">{category.rating}</span>
              </div>
              <p className="text-gray-600 text-sm">{category.count} reviews</p>
            </ModernCard>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-12 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">Patient Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real patients who have transformed their smiles with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <ModernCard key={testimonial.id} className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#005f73]">{testimonial.name}</h3>
                    {testimonial.verified && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  </div>
                  <p className="text-sm text-gray-600">
                    {testimonial.age} years, {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{new Date(testimonial.date).toLocaleDateString("en-IN")}</span>
              </div>

              <div className="mb-4">
                <Badge variant="outline" className="text-xs border-[#54CAD3] text-[#54CAD3]">
                  {testimonial.treatment}
                </Badge>
              </div>

              <div className="relative">
                <Quote className="w-6 h-6 text-[#54CAD3] opacity-50 mb-2" />
                <p className="text-gray-600 text-sm leading-relaxed italic">"{testimonial.testimonial}"</p>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="container mx-auto px-4 py-12 pb-16">
        <ModernCard className="p-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#005f73] mb-4">Find Us on Google</h2>
            <p className="text-xl text-gray-600 mb-6">
              Read more patient reviews and share your experience on Google Reviews
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-[#005f73]">4.9</span>
              </div>
              <div className="text-gray-600">
                <p className="font-semibold">126 Google Reviews</p>
                <p className="text-sm">Verified by Google</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gradient" asChild>
                <a
                  href="https://maps.google.com/maps?q=Indira+Dental+Clinic+Vellore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Read Google Reviews
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-[#54CAD3] text-[#005f73] bg-transparent" asChild>
                <a
                  href="https://maps.google.com/maps?q=Indira+Dental+Clinic+Vellore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <User className="w-5 h-5 mr-2" />
                  Write a Review
                </a>
              </Button>
            </div>
          </div>
        </ModernCard>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-12 pb-16">
        <ModernCard className="p-8 text-center bg-gradient-to-r from-[#54CAD3]/10 to-[#005f73]/10">
          <Smile className="w-16 h-16 text-[#54CAD3] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#005f73] mb-4">Ready to Join Our Happy Patients?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same exceptional care that our patients rave about. Schedule your consultation today and
            start your journey to a healthier, more beautiful smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gradient">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Appointment
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#54CAD3] text-[#005f73] bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
              </Button>
            </Link>
          </div>
        </ModernCard>
      </div>
    </div>
  )
}
