import React from "react"
import Link from "next/link"
import { ModernCard } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircle, 
  Clock, 
  User,
  ArrowRight,
  Star
} from "lucide-react"

interface QAPreview {
  id: string
  title: string
  slug: string
  excerpt: string
  helpfulVotes: number
  views: number
  createdAt: string
}

interface RelevantQAWidgetProps {
  title: string
  questions: QAPreview[]
  serviceName?: string
  showViewAll?: boolean
}

export function RelevantQAWidget({
  title,
  questions,
  serviceName,
  showViewAll = true
}: RelevantQAWidgetProps) {
  return (
    <ModernCard className="bg-white border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <Badge variant="outline" className="border-teal-600 text-teal-700">
            <MessageCircle className="w-4 h-4 mr-1" />
            Q&A
          </Badge>
        </div>

        <div className="space-y-4 mb-6">
          {questions.slice(0, 3).map((question) => (
            <div key={question.id} className="border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-colors">
              <Link href={`/ask-the-dentist/${question.slug}`} className="block">
                <h4 className="text-sm font-semibold text-gray-900 mb-2 hover:text-teal-600 transition-colors">
                  {question.title}
                </h4>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {question.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      <span>{question.helpfulVotes} helpful</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span>{question.views} views</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{new Date(question.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Link 
              href="/ask-the-dentist"
              className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              View All Questions & Answers
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        )}

        {serviceName && (
          <div className="mt-4 pt-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-600 mb-2">
              Have questions about {serviceName}?
            </p>
            <Link 
              href="/ask-the-dentist/submit"
              className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              Ask Dr. Rockson Samuel
            </Link>
          </div>
        )}
      </div>
    </ModernCard>
  )
}

export default RelevantQAWidget
