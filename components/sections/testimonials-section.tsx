"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, ThumbsUp, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Priya Sharma",
      age: 32,
      location: "Gandhi Nagar, Vellore",
      treatment: "Root Canal Treatment",
      rating: 5,
      image: "/indian-woman-smiling.png",
      text: "Dr. Rockson Samuel made my root canal treatment completely painless. I was so scared initially, but his gentle approach and modern equipment made the entire process comfortable. The follow-up care was excellent too!",
      date: "2 weeks ago",
      verified: true,
    },
    {
      name: "Rajesh Kumar",
      age: 45,
      location: "Katpadi, Vellore",
      treatment: "Dental Implants",
      rating: 5,
      image: "/indian-man-smiling.png",
      text: "After losing my tooth in an accident, Dr. Rockson gave me back my confidence with dental implants. The results look so natural, nobody can tell the difference. The entire team was professional and caring throughout the process.",
      date: "1 month ago",
      verified: true,
    },
    {
      name: "Meera Krishnan",
      age: 28,
      location: "Sathuvachari, Vellore",
      treatment: "Orthodontic Braces",
      rating: 5,
      image: "/indian-woman-professional.png",
      text: "I got ceramic braces for my crooked teeth. Dr. Rockson explained everything clearly and the treatment was exactly as planned. My smile transformation is amazing! Worth every penny and every visit.",
      date: "3 months ago",
      verified: true,
    },
    {
      name: "Arun Patel",
      age: 38,
      location: "Bagayam, Vellore",
      treatment: "Teeth Whitening",
      rating: 5,
      image: "/indian-professional-man.png",
      text: "Professional teeth whitening service that gave me instant results. The clinic is very clean and modern. Dr. Rockson is very knowledgeable and friendly. Highly recommend for anyone looking for cosmetic dentistry!",
      date: "2 months ago",
      verified: true,
    },
    {
      name: "Lakshmi Devi",
      age: 52,
      location: "Gandhi Nagar, Vellore",
      treatment: "General Dentistry",
      rating: 5,
      image: "/indian-mother-smiling.jpg",
      text: "Been coming to Dr. Rockson for 5 years now. He takes great care of our entire family's dental needs. Very trustworthy and skilled dentist. The staff is always welcoming and professional.",
      date: "1 week ago",
      verified: true,
    },
    {
      name: "Vikram Singh",
      age: 29,
      location: "Kosapet, Vellore",
      treatment: "Emergency Care",
      rating: 5,
      image: "/young-indian-man.png",
      text: "Had a dental emergency late at night. Dr. Rockson was available and provided immediate relief. His 24/7 emergency service is a lifesaver! Can't thank him enough for the prompt care.",
      date: "3 weeks ago",
      verified: true,
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentReview = testimonials[currentTestimonial]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-theme-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-theme-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 bg-theme-primary/10 text-theme-primary border-theme-primary/20">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Patient Reviews
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-theme-primary to-theme-accent bg-clip-text text-transparent">
              Patients Say
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Read genuine reviews from our satisfied patients who have experienced exceptional dental care at Indira
            Dental Clinic with Dr. Rockson Samuel.
          </p>
        </div>

        {/* Main Featured Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Patient Image & Info */}
                <div className="md:col-span-2 bg-gradient-to-br from-theme-primary/10 to-theme-accent/10 p-8 flex flex-col items-center justify-center relative">
                  <div className="absolute top-4 right-4">
                    <Quote className="h-16 w-16 text-theme-primary/20" />
                  </div>

                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                      <Image
                        src={currentReview.image || "/placeholder.svg"}
                        alt={currentReview.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {currentReview.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg">
                        <ThumbsUp className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{currentReview.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {currentReview.age} years • {currentReview.location}
                    </p>
                    <Badge className="bg-theme-primary/20 text-theme-primary border-theme-primary/30">
                      {currentReview.treatment}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="md:col-span-3 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">({currentReview.rating}.0)</span>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{currentReview.date}</span>
                  </div>

                  <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200 mb-6 italic">
                    "{currentReview.text}"
                  </blockquote>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-theme-primary hover:text-theme-primary hover:bg-theme-primary/10"
                    >
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Helpful (24)
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0 border-2 hover:bg-theme-primary hover:text-white hover:border-theme-primary transition-all bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentTestimonial(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-theme-primary w-8"
                      : "bg-gray-300 dark:bg-gray-600 w-2 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0 border-2 hover:bg-theme-primary hover:text-white hover:border-theme-primary transition-all bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentTestimonial(index)
              }}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index === currentTestimonial
                  ? "ring-2 ring-theme-primary shadow-xl shadow-theme-primary/20"
                  : "bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <ThumbsUp className="h-2 w-2 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.treatment}
                  </Badge>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{testimonial.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "4.9/5", label: "Average Rating", icon: Star },
            { value: "500+", label: "Happy Patients", icon: ThumbsUp },
            { value: "98%", label: "Success Rate", icon: MessageSquare },
            { value: "15+", label: "Years Experience", icon: Quote },
          ].map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-theme-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-theme-primary" />
              </div>
              <div className="text-3xl font-bold text-theme-primary mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-theme-primary to-theme-accent text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Join Our Happy Patients</h3>
            <p className="text-lg mb-8 opacity-90">
              Experience the same exceptional dental care that our patients rave about. Book your consultation today and
              see why we're Vellore's most trusted dental clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100 shadow-xl" asChild>
                <a href="tel:+917010650063">Book Your Consultation</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-transparent"
                asChild
              >
                <a href="/testimonials">Read More Reviews</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
