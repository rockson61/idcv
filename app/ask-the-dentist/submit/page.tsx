import type { Metadata } from 'next'
import { QuestionForm } from '@/components/ask-dentist/question-form'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { MessageCircle, Clock, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Submit Your Dental Question | Ask the Dentist | Dr. Rockson Samuel',
  description: 'Submit your dental questions to Dr. Rockson Samuel. Get expert advice on dental problems, treatment options, and oral health concerns.',
  keywords: [
    'submit dental question',
    'ask dentist',
    'dental advice',
    'Dr Rockson Samuel',
    'dental consultation',
    'oral health questions'
  ],
  openGraph: {
    title: 'Submit Your Dental Question | Ask the Dentist',
    description: 'Submit your dental questions to Dr. Rockson Samuel. Get expert advice on dental problems and treatment options.',
    url: 'https://www.dentalclinicinvellore.in/ask-the-dentist/submit',
    type: 'website',
  },
}

export default function SubmitQuestionPage() {
  const benefits = [
    {
      icon: MessageCircle,
      title: 'Expert Advice',
      description: 'Get answers from Dr. Rockson Samuel with 15+ years of experience'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Receive answers within 24 hours for urgent questions'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your personal information is kept confidential and secure'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'All answers are reviewed for accuracy and helpfulness'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Ask the Dentist', href: '/ask-the-dentist' },
            { title: 'Submit Question', href: '/ask-the-dentist/submit' },
          ]}
        />

        {/* Hero Section */}
        <section className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-teal-600 text-teal-700 text-sm font-semibold">
            <MessageCircle className="w-4 h-4 mr-2" />
            Submit Your Question
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ask Dr. <span className="text-teal-600">Rockson Samuel</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Have a dental question? Submit it to Dr. Rockson Samuel and get expert advice 
            on your oral health concerns, treatment options, and dental problems.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <ModernCard className="p-8">
              <ModernCardHeader>
                <ModernCardTitle className="text-2xl">Submit Your Question</ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <QuestionForm />
              </ModernCardContent>
            </ModernCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <ModernCard className="p-6">
              <ModernCardHeader>
                <ModernCardTitle className="text-lg">Why Ask Dr. Rockson Samuel?</ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-4 h-4 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ModernCardContent>
            </ModernCard>

            {/* Guidelines */}
            <ModernCard className="p-6">
              <ModernCardHeader>
                <ModernCardTitle className="text-lg">Question Guidelines</ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Be specific about your symptoms or concerns</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Include relevant medical history if applicable</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Provide clear, detailed descriptions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Include your contact information for follow-up</span>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>

            {/* Response Time */}
            <ModernCard className="p-6 bg-teal-50 border-teal-200">
              <ModernCardContent>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-sm text-gray-600">
                    Most questions receive responses within 24 hours. 
                    Emergency questions may receive faster responses.
                  </p>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </div>
      </div>
    </div>
  )
}
