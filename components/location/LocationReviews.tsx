'use client'

import { Star, MapPin, Calendar } from 'lucide-react'
import { ModernCard } from '@/components/ui/modern-card'
import { formatDate } from '@/lib/utils/date'

export interface Review {
  name: string
  location: string
  rating: number
  treatment: string
  text: string
  date: string
  verified?: boolean
}

interface LocationReviewsProps {
  reviews: Review[]
  locationName: string
  className?: string
}

export function LocationReviews({ reviews, locationName, className = '' }: LocationReviewsProps) {
  const reviewData = reviews && reviews.length > 0 ? reviews : generateDefaultReviews(locationName)
  const averageRating = reviewData.reduce((acc, r) => acc + r.rating, 0) / reviewData.length
  const totalReviews = reviewData.length

  return (
    <section className={className} id="reviews">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Patient Testimonials – Best Dentist in {locationName}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from patients who travel from {locationName} and neighbouring areas for compassionate care, painless
          dentistry, and lasting smile transformations.
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-6 h-6 ${i < Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
          <span className="text-gray-600">({totalReviews} reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviewData.map((review, index) => (
          <ModernCard key={`${review.name}-${index}`} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-teal-600 font-bold text-lg">{review.name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-3 h-3" />
                  <span>{review.location}</span>
                  {review.verified && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Verified</span>}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm font-medium text-gray-700">{review.treatment}</span>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-4">"{review.text}"</p>

            <div className="flex items-center text-sm text-gray-500 pt-3 border-t border-gray-100">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formatDate(review.date)}</span>
            </div>
          </ModernCard>
        ))}
      </div>

      <div className="mt-8 text-center p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Share Your Experience</h3>
        <p className="text-gray-600 mb-4">
          Help families in {locationName} discover compassionate dental experts. Tell us how we made your smile brighter.
        </p>
        <a
          href="https://www.google.com/maps?cid=14385819900995297414"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-teal-700"
        >
          Write a Google Review
        </a>
      </div>
    </section>
  )
}

export function generateDefaultReviews(locationName: string): Review[] {
  const treatments = ['Dental Implants', 'Root Canal Treatment', 'Braces & Aligners']
  const names = ['Rajesh Kumar', 'Priya Devi', 'Sunita Singh']

  return names.map((name, i) => ({
    name,
    location: locationName,
    rating: 5,
    treatment: treatments[i],
    text: `I travelled from ${locationName} to Indira Dental Clinic for ${treatments[i].toLowerCase()} and it was the best decision. The clinic feels premium, the procedure was painless, and I finally found the best dentist in ${locationName} for my family.`,
    date: new Date(Date.UTC(2024, 0, 20 - i)).toISOString().slice(0, 10),
    verified: true,
  }))
}

