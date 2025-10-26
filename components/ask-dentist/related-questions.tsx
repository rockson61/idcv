import Link from 'next/link'
import { getAllQuestions } from '@/lib/data/ask-dentist-questions'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Question } from '@/lib/types/ask-dentist'

interface RelatedQuestionsProps {
  currentSlug: string
  tags: string[]
}

export function RelatedQuestions({ currentSlug, tags }: RelatedQuestionsProps) {
  const allQuestions = getAllQuestions()
  
  // Find related questions based on shared tags
  const relatedQuestions = allQuestions
    .filter(question => question.slug !== currentSlug)
    .filter(question => question.tags.some(tag => tags.includes(tag)))
    .slice(0, 5)

  if (relatedQuestions.length === 0) {
    return null
  }

  return (
    <ModernCard className="p-6">
      <ModernCardHeader>
        <ModernCardTitle className="text-lg">Related Questions</ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent>
        <div className="space-y-4">
          {relatedQuestions.map((question) => (
            <Link
              key={question.id}
              href={`/ask-the-dentist/${question.slug || '#'}`}
              className="block p-3 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-colors"
            >
              <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-2">
                {question.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{question.helpfulVotes} helpful</span>
                <span>{new Date(question.createdAt).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <Link
            href="/ask-the-dentist"
            className="text-teal-600 hover:text-teal-700 text-sm font-medium"
          >
            View all questions →
          </Link>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}
