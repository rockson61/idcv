'use client'

import { Question } from '@/lib/types/ask-dentist'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ThumbsUp, ThumbsDown, Share2, Calendar, User, MessageCircle } from 'lucide-react'
import { RepliesSection } from './replies-section'

interface QuestionDetailProps {
  question: Question
  enhancedAnswer: string
}

export function QuestionDetail({ question, enhancedAnswer }: QuestionDetailProps) {
  const handleHelpfulVote = (helpful: boolean) => {
    // TODO: Implement voting functionality
    console.log(`Voted ${helpful ? 'helpful' : 'not helpful'} for question ${question.id}`)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: question.title,
          text: question.answer.substring(0, 100) + '...',
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="space-y-6">
      {/* Question */}
      <ModernCard>
        <ModernCardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <ModernCardTitle className="text-2xl mb-4">{question.title}</ModernCardTitle>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  Asked by a patient
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(question.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </ModernCardHeader>
        <ModernCardContent>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <MessageCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Question:</h4>
                <p className="text-gray-700 leading-relaxed">{question.question}</p>
              </div>
            </div>
          </div>
        </ModernCardContent>
      </ModernCard>

      {/* Answer */}
      <ModernCard>
        <ModernCardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-sm">DR</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dr. Rockson Samuel</h3>
                  <p className="text-sm text-gray-500">Dental Expert</p>
                </div>
              </div>
            </div>
          </div>
        </ModernCardHeader>
        <ModernCardContent>
          <div className="prose prose-gray max-w-none">
            <div 
              className="text-gray-700 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: enhancedAnswer }}
            />
          </div>
          
          {/* Answer Actions */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Was this answer helpful?</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleHelpfulVote(true)}
                  className="flex items-center space-x-1"
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>Yes ({question.helpfulVotes})</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleHelpfulVote(false)}
                  className="flex items-center space-x-1"
                >
                  <ThumbsDown className="w-4 h-4" />
                  <span>No</span>
                </Button>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center space-x-1"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </Button>
          </div>
        </ModernCardContent>
      </ModernCard>

      {/* Disclaimer */}
      <ModernCard className="bg-blue-50 border-blue-200">
        <ModernCardContent className="py-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-blue-600 text-xs font-bold">i</span>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Medical Disclaimer</h4>
              <p className="text-sm text-blue-800">
                This answer is for informational purposes only and does not constitute medical advice. 
                Please consult with Dr. Rockson Samuel or another qualified dental professional for 
                personalized diagnosis and treatment recommendations.
              </p>
            </div>
          </div>
        </ModernCardContent>
      </ModernCard>

      {/* Replies Section */}
      <RepliesSection replies={question.replies || []} questionId={question.id} />
    </div>
  )
}
