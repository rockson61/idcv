'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Send, CheckCircle, AlertCircle, Shield } from 'lucide-react'

const questionSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid 10-digit mobile number').regex(/^[6-9]\d{9}$/, 'Please enter a valid Indian mobile number'),
  location: z.string().min(2, 'Please enter your city/location'),
  title: z.string().min(10, 'Question title must be at least 10 characters'),
  question: z.string().min(20, 'Question must be at least 20 characters'),
  captchaAnswer: z.string().min(1, 'Please solve the math problem'),
})

type QuestionFormData = z.infer<typeof questionSchema>

export function QuestionForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submittedQuestionSlug, setSubmittedQuestionSlug] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  
  // Math CAPTCHA state
  const [mathQuestion, setMathQuestion] = useState({ num1: 0, num2: 0, answer: 0 })
  
  // Generate new math question
  const generateMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setMathQuestion({ num1, num2, answer: num1 + num2 })
  }
  
  // Generate math question on component mount
  useEffect(() => {
    generateMathQuestion()
  }, [])
  
  // Handle WhatsApp redirect
  const sendToWhatsApp = (formData: QuestionFormData) => {
    const message = `Hi Dr. Rockson Samuel,\n\nName: ${formData.name}\nLocation: ${formData.location}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nQuestion: ${formData.title}\n\n${formData.question}\n\n---\nSent from Indira Dental Clinic Website`
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/917010650063?text=${encodedMessage}`
    window.open(whatsappURL, '_blank')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
  })

  const onSubmit = async (data: QuestionFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    setValidationErrors([])

    try {
      // Collect all validation errors
      const errors: string[] = []
      
      // Validate CAPTCHA
      if (parseInt(data.captchaAnswer) !== mathQuestion.answer) {
        errors.push('❌ Incorrect answer to the math problem')
      }
      
      // Additional validation
      if (data.name.length < 2) {
        errors.push('❌ Name must be at least 2 characters')
      }
      
      if (!data.email.includes('@')) {
        errors.push('❌ Please enter a valid email address')
      }
      
      if (!/^[6-9]\d{9}$/.test(data.phone)) {
        errors.push('❌ Please enter a valid 10-digit Indian mobile number')
      }
      
      if (data.location.length < 2) {
        errors.push('❌ Please enter your city/location')
      }
      
      if (data.title.length < 10) {
        errors.push('❌ Question title must be at least 10 characters')
      }
      
      if (data.question.length < 20) {
        errors.push('❌ Question must be at least 20 characters')
      }
      
      // If validation errors exist, show them
      if (errors.length > 0) {
        setValidationErrors(errors)
        setSubmitError('Please fix the errors below before submitting')
        generateMathQuestion() // Generate new CAPTCHA question
        setIsSubmitting(false)
        return
      }

      // Create slug from title
      const slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
      
      // Create new question object
      const newQuestion = {
        id: Date.now().toString(),
        title: data.title,
        slug: slug,
        question: data.question,
        answer: 'Thank you for your question! Dr. Rockson Samuel (BDS, PgDM, BDM) will review and provide a detailed answer within 24 hours. For urgent dental concerns, please call us at 7010650063 or message us on WhatsApp.',
        author: 'Dr. Rockson Samuel',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'pending' as const,
        tags: ['patient-question', 'pending-review'],
        relatedServices: [] as string[],
        helpfulVotes: 0,
        views: 1,
        replies: [],
        conversationCount: 0,
        lastActivity: new Date().toISOString(),
        submitterName: data.name,
        submitterEmail: data.email,
        submitterPhone: data.phone,
        submitterLocation: data.location,
      }
      
      // Store in localStorage (frontend storage)
      const existingQuestions = JSON.parse(localStorage.getItem('pendingQuestions') || '[]')
      existingQuestions.unshift(newQuestion)
      localStorage.setItem('pendingQuestions', JSON.stringify(existingQuestions))
      
      // Dispatch custom event to refresh question list
      window.dispatchEvent(new Event('questionSubmitted'))
      
      setSubmittedQuestionSlug(slug)
      setIsSubmitted(true)
      reset()
      generateMathQuestion() // Generate new question for next submission
    } catch (error) {
      setSubmitError('Failed to submit your question. Please try again or contact us directly.')
      setValidationErrors(['An unexpected error occurred. Please try again.'])
      generateMathQuestion()
    } finally {
      setIsSubmitting(false)
    }
  }
  
  // Handle WhatsApp quick response
  const handleWhatsAppClick = () => {
    const formData = {
      name: (document.getElementById('name') as HTMLInputElement)?.value || '',
      location: (document.getElementById('location') as HTMLInputElement)?.value || '',
      email: (document.getElementById('email') as HTMLInputElement)?.value || '',
      phone: (document.getElementById('phone') as HTMLInputElement)?.value || '',
      title: (document.getElementById('title') as HTMLInputElement)?.value || '',
      question: (document.getElementById('question') as HTMLTextAreaElement)?.value || '',
    }
    
    if (formData.question && formData.name) {
      const message = `Hi Dr. Rockson Samuel,\n\n🦷 *Dental Question*\n\n*Name:* ${formData.name}\n*Location:* ${formData.location || 'Not specified'}\n*Email:* ${formData.email || 'Not specified'}\n*Phone:* ${formData.phone || 'Not specified'}\n\n*Question:* ${formData.title || 'Dental Inquiry'}\n\n${formData.question}\n\n---\n_Sent from Indira Dental Clinic Website_\n_For quick response via WhatsApp_`
      const encodedMessage = encodeURIComponent(message)
      const whatsappURL = `https://wa.me/917010650063?text=${encodedMessage}`
      window.open(whatsappURL, '_blank')
    } else {
      alert('Please fill in at least your name and question before sending to WhatsApp')
    }
  }

  if (isSubmitted) {
    return (
      <ModernCard className="p-8 text-center bg-green-50 border-green-200">
        <ModernCardContent>
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-900 mb-2">Question Submitted Successfully!</h3>
          <p className="text-green-800 mb-4">
            Thank you for your question! It has been added to our Q&A section with status "Pending Review". 
            Dr. Rockson Samuel (BDS, PgDM, BDM) will review and provide a detailed answer within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => router.push('/ask-the-dentist')}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              View All Questions
            </Button>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-100"
            >
              Ask Another Question
            </Button>
          </div>
        </ModernCardContent>
      </ModernCard>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Error Display */}
      {(submitError || validationErrors.length > 0) && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-start space-x-2 mb-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-red-900 mb-1">Submission Error</h4>
              {submitError && <p className="text-red-800 text-sm mb-2">{submitError}</p>}
            </div>
          </div>
          {validationErrors.length > 0 && (
            <ul className="space-y-1 ml-7">
              {validationErrors.map((error, index) => (
                <li key={index} className="text-red-700 text-sm">{error}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-sm font-semibold text-gray-900 mb-2 block">
            Full Name *
          </Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Enter your full name"
            className="text-base"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-semibold text-gray-900 mb-2 block">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="Enter your email address"
            className="text-base"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone" className="text-sm font-semibold text-gray-900 mb-2 block">
            Mobile Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="Enter 10-digit mobile (e.g., 9876543210)"
            className="text-base"
            maxLength={10}
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">For WhatsApp quick response</p>
        </div>

        <div>
          <Label htmlFor="location" className="text-sm font-semibold text-gray-900 mb-2 block">
            City/Location *
          </Label>
          <Input
            id="location"
            type="text"
            {...register('location')}
            placeholder="Enter your city (e.g., Vellore, Chennai)"
            className="text-base"
          />
          {errors.location && (
            <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>
          )}
        </div>
      </div>

      {/* Question Details */}
      <div>
        <Label htmlFor="title" className="text-sm font-semibold text-gray-900 mb-2 block">
          Question Title *
        </Label>
        <Input
          id="title"
          {...register('title')}
          placeholder="Brief summary of your question"
          className="text-base"
        />
        {errors.title && (
          <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="question" className="text-sm font-semibold text-gray-900 mb-2 block">
          Your Question *
        </Label>
        <Textarea
          id="question"
          {...register('question')}
          placeholder="Please provide detailed information about your dental concern, symptoms, or question..."
          rows={6}
          className="text-base resize-none"
        />
        {errors.question && (
          <p className="text-red-600 text-sm mt-1">{errors.question.message}</p>
        )}
      </div>

      {/* Math CAPTCHA - Spam Protection */}
      <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6">
        <div className="flex items-start space-x-3 mb-4">
          <Shield className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Spam Protection</h4>
            <p className="text-sm text-gray-600">Please solve this simple math problem to verify you're human</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="bg-white border-2 border-teal-300 rounded-lg px-6 py-4 text-center">
            <p className="text-2xl font-bold text-gray-900">
              {mathQuestion.num1} + {mathQuestion.num2} = ?
            </p>
          </div>
          <div className="flex-1">
            <Label htmlFor="captchaAnswer" className="text-sm font-semibold text-gray-900 mb-2 block">
              Your Answer *
            </Label>
            <Input
              id="captchaAnswer"
              type="number"
              {...register('captchaAnswer')}
              placeholder="Enter the answer"
              className="text-base text-center text-lg font-semibold"
            />
            {errors.captchaAnswer && (
              <p className="text-red-600 text-sm mt-1">{errors.captchaAnswer.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Submit Buttons */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-col gap-3">
          {/* Regular Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 w-full text-base font-semibold"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit Question (Get Answer in 24 Hours)
              </>
            )}
          </Button>

          {/* WhatsApp Quick Response Button */}
          <Button
            type="button"
            onClick={handleWhatsAppClick}
            variant="outline"
            className="border-2 border-green-500 text-green-700 hover:bg-green-50 px-8 py-3 w-full text-base font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send to WhatsApp for Instant Response
          </Button>
        </div>

        <p className="text-sm text-gray-600 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </div>
    </form>
  )
}
