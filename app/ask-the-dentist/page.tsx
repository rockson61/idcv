import type { Metadata } from 'next'
import { Suspense } from 'react'
import { QuestionList } from '@/components/ask-dentist/question-list'
import { SearchFilters } from '@/components/ask-dentist/search-filters'
import { AskQuestionButton } from '@/components/ask-dentist/ask-question-button'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { AskDentistSchema } from '@/components/schema/AskDentistSchema'
import { MessageCircle, Users, TrendingUp, Clock, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ask the Dentist | Expert Dental Q&A | Dr. Rockson Samuel | Indira Dental Clinic',
  description: 'Get expert answers to your dental questions from Dr. Rockson Samuel. Find solutions for dental problems, treatment options, and oral health advice at Indira Dental Clinic.',
  keywords: [
    'ask the dentist',
    'dental questions',
    'dental advice',
    'Dr Rockson Samuel',
    'dental Q&A',
    'oral health questions',
    'dental treatment advice',
    'dentist consultation'
  ],
  openGraph: {
    title: 'Ask the Dentist | Expert Dental Q&A | Dr. Rockson Samuel',
    description: 'Get expert answers to your dental questions from Dr. Rockson Samuel. Find solutions for dental problems and treatment options.',
    url: 'https://www.dentalclinicinvellore.in/ask-the-dentist',
    type: 'website',
  },
}

export default function AskTheDentistPage() {
  const stats = [
    { icon: MessageCircle, label: 'Questions Answered', value: '500+' },
    { icon: Users, label: 'Patients Helped', value: '2,500+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
    { icon: Clock, label: 'Response Time', value: '24hrs' }
  ]

  return (
    <>
      <AskDentistSchema />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Ask the Dentist', href: '/ask-the-dentist' },
          ]}
        />

        {/* Hero Section */}
        <section className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-teal-600 text-teal-700 text-sm font-semibold">
            <HelpCircle className="w-4 h-4 mr-2" />
            Expert Dental Advice
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ask the <span className="text-teal-600">Dentist</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Get expert answers to your dental questions from Dr. Rockson Samuel. 
            Find solutions for dental problems, treatment options, and oral health advice.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Search and Filters */}
        <section className="mb-8">
          <ModernCard className="p-6">
            <ModernCardHeader>
              <ModernCardTitle className="text-xl">Find Answers to Your Questions</ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <Suspense fallback={<div className="animate-pulse h-16 bg-gray-200 rounded-lg"></div>}>
                <SearchFilters />
              </Suspense>
            </ModernCardContent>
          </ModernCard>
        </section>

        {/* Question List */}
        <section className="mb-8">
          <Suspense fallback={<div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-32 bg-gray-200 rounded-lg"></div>
              </div>
            ))}
          </div>}>
            <QuestionList />
          </Suspense>
        </section>

        {/* Ask Question CTA */}
        <section className="text-center">
          <ModernCard className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <ModernCardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl mb-6">
                Can't find the answer you're looking for? Ask Dr. Rockson Samuel directly!
              </p>
              <AskQuestionButton />
            </ModernCardContent>
          </ModernCard>
        </section>
      </div>
    </div>
    </>
  )
}
