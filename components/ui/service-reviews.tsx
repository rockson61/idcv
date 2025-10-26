"use client"

import { Star, User, Calendar, ThumbsUp } from 'lucide-react'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import type { ServiceReview } from '@/lib/review-data'

interface ServiceReviewsProps {
  serviceName: string
  reviews: ServiceReview[]
  averageRating?: number
  totalReviews?: number
}

export function ServiceReviews({ 
  serviceName, 
  reviews, 
  averageRating = 5.0, 
  totalReviews 
}: ServiceReviewsProps) {
  const displayTotal = totalReviews || reviews.length

  return (
    <ModernCard className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
      <ModernCardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <ModernCardTitle className="flex items-center gap-3">
            <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
            Patient Reviews - {serviceName}
          </ModernCardTitle>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-700">{averageRating.toFixed(1)}</div>
              <div className="flex items-center gap-1 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= averageRating ? 'text-yellow-600 fill-yellow-600' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-600 mt-1">{displayTotal} reviews</div>
            </div>
          </div>
        </div>
      </ModernCardHeader>
      <ModernCardContent>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-6 bg-white rounded-lg border border-yellow-200 shadow-sm">
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      {review.verified && (
                        <Badge className="text-xs bg-green-100 text-green-700 border-green-200">
                          ✓ Verified Patient
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>{review.location}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {review.date}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating ? 'text-yellow-600 fill-yellow-600' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Treatment Type */}
              <div className="mb-3">
                <Badge className="text-xs bg-blue-100 text-blue-700 border-blue-200">
                  {review.treatmentType}
                </Badge>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>

              {/* Helpful Counter */}
              {review.helpful && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.helpful} people found this helpful</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-700 mb-1">98%</div>
              <div className="text-sm text-gray-600">Patient Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700 mb-1">5000+</div>
              <div className="text-sm text-gray-600">Successful Treatments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700 mb-1">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* SEO Schema-friendly review summary */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            <strong>Dr. Rockson Samuel</strong> at <strong>Indira Dental Clinic, Vellore</strong> has received{' '}
            <strong>{displayTotal} verified patient reviews</strong> for <strong>{serviceName}</strong> with an average rating of{' '}
            <strong>{averageRating.toFixed(1)} out of 5 stars</strong>. Patients consistently praise the quality of care,
            professional service, and excellent results.
          </p>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}

