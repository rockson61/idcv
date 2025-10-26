'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllQuestions } from '@/lib/data/ask-dentist-questions'
import { Question } from '@/lib/types/ask-dentist'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, User, Eye, ThumbsUp, MessageCircle } from 'lucide-react'

interface QuestionListProps {
  searchQuery?: string
  selectedTags?: string[]
}

export function QuestionList({ searchQuery = '', selectedTags = [] }: QuestionListProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [questionsPerPage] = useState(6)

  useEffect(() => {
    let isMounted = true
    
    const fetchQuestions = () => {
      if (!isMounted) return
      
      setLoading(true)
      
      // Get published questions from data file
      let filteredQuestions = getAllQuestions()
      
      // Get pending questions from localStorage
      if (typeof window !== 'undefined') {
        const pendingQuestions = JSON.parse(localStorage.getItem('pendingQuestions') || '[]')
        // Add pending questions at the top
        filteredQuestions = [...pendingQuestions, ...filteredQuestions]
      }

      // Apply search filter
      if (searchQuery) {
        filteredQuestions = filteredQuestions.filter(question =>
          question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          question.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          question.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      }

      // Apply tag filter
      if (selectedTags.length > 0) {
        filteredQuestions = filteredQuestions.filter(question =>
          selectedTags.some(tag => question.tags.includes(tag))
        )
      }

      if (isMounted) {
        setQuestions(filteredQuestions)
        setLoading(false)
      }
    }

    fetchQuestions()
    
    // Refresh when localStorage changes (when new question submitted)
    const handleStorageChange = () => {
      if (isMounted) {
        fetchQuestions()
      }
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange)
      // Also listen for custom event when question is submitted in same tab
      window.addEventListener('questionSubmitted', handleStorageChange)
    }
    
    return () => {
      isMounted = false
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', handleStorageChange)
        window.removeEventListener('questionSubmitted', handleStorageChange)
      }
    }
  }, [searchQuery, selectedTags])

  // Pagination
  const indexOfLastQuestion = currentPage * questionsPerPage
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion)
  const totalPages = Math.ceil(questions.length / questionsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="h-32 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <ModernCard className="p-8 text-center">
        <ModernCardContent>
          <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Questions Found</h3>
          <p className="text-gray-600 mb-4">
            {searchQuery || selectedTags.length > 0
              ? 'Try adjusting your search criteria or filters.'
              : 'Be the first to ask a question!'}
          </p>
          <Link href="/ask-the-dentist/submit">
            <Button className="bg-teal-600 hover:bg-teal-700">
              Ask a Question
            </Button>
          </Link>
        </ModernCardContent>
      </ModernCard>
    )
  }

  return (
    <div className="space-y-6">
      {/* Questions */}
      <div className="space-y-6">
        {currentQuestions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1
            const isCurrentPage = page === currentPage
            const isNearCurrentPage = Math.abs(page - currentPage) <= 2
            
            if (isCurrentPage || isNearCurrentPage || page === 1 || page === totalPages) {
              return (
                <Button
                  key={page}
                  variant={isCurrentPage ? "default" : "outline"}
                  onClick={() => handlePageChange(page)}
                  className={isCurrentPage ? "bg-teal-600 hover:bg-teal-700" : ""}
                >
                  {page}
                </Button>
              )
            } else if (page === currentPage - 3 || page === currentPage + 3) {
              return <span key={page} className="text-gray-500">...</span>
            }
            return null
          })}
          
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}

      {/* Results Summary */}
      <div className="text-center text-gray-600 text-sm">
        Showing {indexOfFirstQuestion + 1}-{Math.min(indexOfLastQuestion, questions.length)} of {questions.length} questions
      </div>
    </div>
  )
}

function QuestionCard({ question }: { question: Question }) {
  return (
    <ModernCard hover className="group">
      <ModernCardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Link href={`/ask-the-dentist/${question.slug || '#'}`}>
                <ModernCardTitle className="text-lg group-hover:text-teal-600 transition-colors cursor-pointer">
                  {question.title}
                </ModernCardTitle>
              </Link>
              {question.status === 'pending' && (
                <Badge variant="outline" className="border-yellow-600 text-yellow-700 text-xs">
                  Pending Review
                </Badge>
              )}
            </div>
            <p className="text-gray-600 mt-2 line-clamp-2">
              {question.question}
            </p>
          </div>
        </div>
      </ModernCardHeader>
      <ModernCardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {question.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(question.createdAt).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {question.views}
            </div>
            <div className="flex items-center">
              <ThumbsUp className="w-4 h-4 mr-1" />
              {question.helpfulVotes}
            </div>
          </div>
          <Link href={`/ask-the-dentist/${question.slug || '#'}`}>
            <Button variant="outline" size="sm" className="group-hover:bg-teal-50 group-hover:border-teal-200">
              Read Answer
            </Button>
          </Link>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {question.tags.slice(0, 4).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {question.tags.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{question.tags.length - 4} more
            </Badge>
          )}
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}
