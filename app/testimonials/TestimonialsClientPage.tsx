"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Calendar } from "lucide-react"

export default function TestimonialsClientPage() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Vellore",
      treatment: "Dental Implants",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      content:
        "After losing my front teeth in an accident, I was hesitant to smile. Dr. Rockson Samuel recommended dental implants, and the results are incredible! The procedure was much less painful than I expected, and now I have a smile that looks completely natural. The team at Vellore Dental Clinic made the entire process comfortable and stress-free.",
      date: "February 2024",
    },
    {
      id: 2,
      name: "Priya Venkatesh",
      location: "Katpadi, Vellore",
      treatment: "Cosmetic Dentistry",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      content:
        "I had severe staining and a few crooked teeth that made me self-conscious. Dr. Samuel suggested a combination of teeth whitening and veneers. The transformation is amazing! He carefully explained each procedure and made sure I was comfortable throughout. I've received so many compliments on my new smile. Truly the best dental experience I've had in Vellore.",
      date: "January 2024",
    },
    {
      id: 3,
      name: "Aravind Chandran",
      location: "Gudiyatham",
      treatment: "Root Canal Treatment",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      content:
        "I had been suffering from severe tooth pain for weeks and was terrified of getting a root canal. Dr. Rockson explained everything clearly and performed the procedure with such skill that I barely felt anything. His gentle approach and the modern equipment at the clinic made what I thought would be a nightmare into a surprisingly comfortable experience. I can now eat without pain for the first time in months!",
      date: "December 2023",
    },
    {
      id: 4,
      name: "Lakshmi Narayan",
      location: "Vellore",
      treatment: "Orthodontic Treatment",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      content:
        "My daughter needed braces, and we were referred to Dr. Samuel by a family friend. The care and attention she received were exceptional. Dr. Samuel took time to explain the treatment plan and answered all our questions. The clear aligners he recommended were perfect for her, and the transformation of her smile has been remarkable. The clinic staff were always friendly and accommodating with scheduling.",
      date: "November 2023",
    },
    {
      id: 5,
      name: "Mohammed Imran",
      location: "Ranipet",
      treatment: "Dental Implants",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      content:
        "I visited several dental clinics in Vellore before finding Dr. Rockson's clinic. His expertise in implant dentistry is truly impressive. I had two molars replaced, and the implants feel just like my natural teeth. The procedure was well-explained, and the follow-up care was thorough. The only minor issue was the initial consultation wait time, but the quality of care made it worthwhile.",
      date: "October 2023",
    },
    {
      id: 6,
      name: "Anjali Subramanian",
      location: "Vellore",
      treatment: "Emergency Dental Care",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      content:
        "I chipped my front tooth during a weekend and was in a panic. I called Dr. Samuel's emergency line, and he arranged to see me the same day despite it being a Sunday! He fixed my tooth beautifully, and you can't even tell it was damaged. This level of care and commitment is rare to find. I'm extremely grateful and now bring my entire family to his clinic for all our dental needs.",
      date: "September 2023",
    },
    {
      id: 7,
      name: "Venkat Raman",
      location: "Ambur",
      treatment: "Full Mouth Rehabilitation",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      content:
        "After years of neglecting my dental health, I needed extensive work. Dr. Samuel created a comprehensive treatment plan that addressed all my issues over several months. The transformation has been life-changing - I can eat comfortably, speak clearly, and smile confidently. Despite the extensive work required, Dr. Samuel made the process manageable and far less intimidating than I expected.",
      date: "August 2023",
    },
    {
      id: 8,
      name: "Sarita Patel",
      location: "Vellore",
      treatment: "Pediatric Dentistry",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      content:
        "My 5-year-old son was terrified of dentists after a bad experience elsewhere. Dr. Samuel's approach with children is remarkable. He took the time to make my son comfortable, showed him the equipment, and turned the check-up into a fun experience. Now my son actually looks forward to his dental visits! The kid-friendly waiting area with toys and games is a thoughtful touch that helps reduce anxiety.",
      date: "July 2023",
    },
  ]

  const videoTestimonials = [
    {
      id: 1,
      name: "Ramesh Subramaniam",
      treatment: "All-on-4 Dental Implants",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "2:45",
    },
    {
      id: 2,
      name: "Divya Krishnan",
      treatment: "Smile Makeover",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "3:12",
    },
    {
      id: 3,
      name: "Karthik Venkatesh",
      treatment: "Invisalign Treatment",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "1:58",
    },
  ]

  const treatmentCategories = [
    "All Reviews",
    "Dental Implants",
    "Root Canal",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Pediatric Dentistry",
    "Emergency Care",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 gradient-text">Patient Testimonials</h1>
        <p className="text-lg mb-6">
          Don't just take our word for it. Read what our patients have to say about their experiences at Indira Dental
          Clinic. We're proud to maintain a{" "}
          <a
            href="https://www.google.co.in/maps/place/Indira+Dental+Clinic+%7C+Dr+Rockson+Samuel+%7C+Top+Dentist+in+Vellore+for+RCT,+Braces,+Implants,+%26+Dental+Fillings/@12.9540278,79.1369615,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad394e9843620f:0xc7a4b2fb0991e086!8m2!3d12.9540278!4d79.1369615!16s%2Fg%2F11vq058sc7?entry=ttu#lrd=0x3bad394e9843620f:0xc7a4b2fb0991e086,3"
            className="text-dental-teal hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            5-star rating on Google
          </a>{" "}
          with over 100 reviews.
        </p>
      </div>

      {/* Testimonial Highlights */}
      <div className="bg-slate-50 p-8 rounded-lg mb-12">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-lg">Patient Satisfaction Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
            <p className="text-lg">Successful Treatments</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">15+ Years</div>
            <p className="text-lg">of Dental Excellence</p>
          </div>
        </div>
      </div>

      {/* Filter Options */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Filter Reviews by Treatment</h2>
        <div className="flex flex-wrap gap-2">
          {treatmentCategories.map((category, index) => (
            <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="mb-2">
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Video Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Video Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {videoTestimonials.map((video) => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={`${video.name} video testimonial`}
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-80 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{video.name}</h3>
                <p className="text-sm text-gray-600">{video.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Written Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Patient Reviews</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-2">{testimonial.date}</span>
                    </div>
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mt-2">
                      {testimonial.treatment}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700">"{testimonial.content}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">Load More Reviews</Button>
        </div>
      </div>

      {/* Before & After Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Before & After Transformations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex gap-2 mb-4">
              <div className="w-1/2">
                <p className="text-center text-sm font-medium mb-2">Before</p>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Before dental treatment"
                  width={150}
                  height={150}
                  className="w-full rounded-md"
                />
              </div>
              <div className="w-1/2">
                <p className="text-center text-sm font-medium mb-2">After</p>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="After dental treatment"
                  width={150}
                  height={150}
                  className="w-full rounded-md"
                />
              </div>
            </div>
            <h3 className="font-semibold">Dental Implant Case</h3>
            <p className="text-sm text-gray-600">
              Patient recovered full functionality and aesthetics with dental implants
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex gap-2 mb-4">
              <div className="w-1/2">
                <p className="text-center text-sm font-medium mb-2">Before</p>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Before dental treatment"
                  width={150}
                  height={150}
                  className="w-full rounded-md"
                />
              </div>
              <div className="w-1/2">
                <p className="text-center text-sm font-medium mb-2">After</p>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="After dental treatment"
                  width={150}
                  height={150}
                  className="w-full rounded-md"
                />
              </div>
            </div>
            <h3 className="font-semibold">Smile Makeover</h3>
            <p className="text-sm text-gray-600">Complete transformation with veneers and whitening</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex gap-2 mb-4">
              <div className="w-1/2">
                <p className="text-center text-sm font-medium mb-2">Before</p>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Before dental treatment"
                  width={150}
                  height={150}
                  className="w-full rounded-md"
                />
              </div>
              <div className="w-1/2">
                <p className="text-center text-sm font-medium mb-2">After</p>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="After dental treatment"
                  width={150}
                  height={150}
                  className="w-full rounded-md"
                />
              </div>
            </div>
            <h3 className="font-semibold">Orthodontic Treatment</h3>
            <p className="text-sm text-gray-600">Teeth alignment corrected with invisible aligners</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery">
            <Button variant="outline">View More Before & After Cases</Button>
          </Link>
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Google Reviews</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 48 48">
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <div>
              <h3 className="font-bold">Google Rating</h3>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 font-medium">4.9/5</span>
                <span className="ml-2 text-sm text-gray-500">(120+ reviews)</span>
              </div>
            </div>
            <a
              href="https://g.page/example-dental-vellore"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-primary hover:underline text-sm font-medium"
            >
              View all Google Reviews
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full bg-gray-200 mr-2"></div>
                <div>
                  <p className="font-medium">Sanjay Mehta</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm">
                "Best dental clinic in Vellore! Dr. Samuel is extremely professional and gentle. Highly recommend for
                implants."
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full bg-gray-200 mr-2"></div>
                <div>
                  <p className="font-medium">Kavitha Rajan</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm">
                "My family has been visiting this clinic for years. Clean facility, minimal waiting time, and excellent
                care for children."
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full bg-gray-200 mr-2"></div>
                <div>
                  <p className="font-medium">Rahul Sharma</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm">
                "Had a root canal treatment here and was surprised by how painless it was. State-of-the-art equipment
                and caring staff."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Form */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Share Your Experience</h2>
        <div className="bg-slate-50 p-8 rounded-lg">
          <p className="mb-6">
            We value your feedback! If you've been treated at our Vellore dental clinic, please take a moment to share
            your experience.
          </p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">
                  Your Name
                </label>
                <input type="text" id="name" className="w-full p-2 border rounded-md" placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="treatment" className="block font-medium">
                  Treatment Received
                </label>
                <select id="treatment" className="w-full p-2 border rounded-md">
                  <option value="">Select Treatment</option>
                  <option value="dental-implants">Dental Implants</option>
                  <option value="root-canal">Root Canal Treatment</option>
                  <option value="cosmetic-dentistry">Cosmetic Dentistry</option>
                  <option value="orthodontics">Orthodontic Treatment</option>
                  <option value="general-dentistry">General Dentistry</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Your Rating</label>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className="h-8 w-8 text-gray-300 hover:text-yellow-400 focus:outline-none"
                  >
                    <svg className="h-full w-full" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="testimonial" className="block font-medium">
                Your Experience
              </label>
              <textarea
                id="testimonial"
                rows={4}
                className="w-full p-2 border rounded-md"
                placeholder="Share your experience with our dental clinic..."
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Would you like to include a photo?</label>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 border border-dashed border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50"
                >
                  Upload Photo
                </button>
                <span className="text-xs text-gray-500">Optional: Before/After photos help others see results</span>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="consent" className="mr-2" />
              <label htmlFor="consent" className="text-sm">
                I consent to having my testimonial and photo displayed on the website and social media.
              </label>
            </div>

            <Button type="submit">Submit Your Testimonial</Button>
          </form>
        </div>
      </div>

      {/* Refer a Friend */}
      <div className="bg-primary text-white p-8 rounded-lg mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Refer a Friend</h2>
            <p className="mb-6">
              Love your experience at our Vellore dental clinic? Refer a friend or family member and both of you will
              receive a special discount on your next treatment.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>You get 10% off your next treatment</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Your friend gets 15% off their first visit</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No limit on number of referrals</span>
              </li>
            </ul>
          </div>
          <div>
            <form className="bg-white p-6 rounded-lg">
              <div className="space-y-4">
                <div>
                  <label htmlFor="your-name" className="block text-black font-medium mb-1">
                    Your Name
                  </label>
                  <input id="your-name" type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label htmlFor="friend-name" className="block text-black font-medium mb-1">
                    Friend's Name
                  </label>
                  <input id="friend-name" type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label htmlFor="friend-email" className="block text-black font-medium mb-1">
                    Friend's Email
                  </label>
                  <input id="friend-email" type="email" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label htmlFor="friend-phone" className="block text-black font-medium mb-1">
                    Friend's Phone
                  </label>
                  <input id="friend-phone" type="tel" className="w-full p-2 border rounded-md" />
                </div>
                <Button type="submit" className="w-full">
                  Send Referral
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Experience the Difference at Vellore's Premier Dental Clinic</h2>
        <p className="mb-6 text-lg">
          Join our family of 5,000+ satisfied patients and discover why we're the most trusted dental care provider in
          Vellore.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              📅 Book Your Free Consultation Today!
            </Button>
          </Link>
          <a href="tel:+919876543210">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Call Now: +91 98765 43210
            </Button>
          </a>
        </div>
      </div>
      <section className="py-12 bg-dental-navy/5 rounded-3xl mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold gradient-text mb-6">Share Your Experience</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Had a great experience at Indira Dental Clinic? We'd love to hear about it! Your feedback helps us improve
            and helps others find quality dental care in Vellore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.co.in/maps/place/Indira+Dental+Clinic+%7C+Dr+Rockson+Samuel+%7C+Top+Dentist+in+Vellore+for+RCT,+Braces,+Implants,+%26+Dental+Fillings/@12.9540278,79.1369615,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad394e9843620f:0xc7a4b2fb0991e086!8m2!3d12.9540278!4d79.1369615!16s%2Fg%2F11vq058sc7?entry=ttu#lrd=0x3bad394e9843620f:0xc7a4b2fb0991e086,3"
              className="bg-gradient-dental text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:shadow-lg transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="h-5 w-5" />
              Leave a Google Review
            </a>
            <button
              className="bg-white text-dental-navy border border-dental-teal px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-dental-teal/10 transition-all"
              onClick={() => document.getElementById("booking-modal")?.classList.remove("hidden")}
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
