import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getQuestionBySlug, getAllQuestions } from '@/lib/data/ask-dentist-questions'
import { addInternalLinks, getRelatedServices } from '@/lib/utils/internal-linking'
import { QuestionDetail } from '@/components/ask-dentist/question-detail'
import { RelatedQuestions } from '@/components/ask-dentist/related-questions'
import { RelatedServices } from '@/components/ask-dentist/related-services'
import { CompactServiceWidget } from '@/components/widgets/compact-service-widget'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { FAQSchema } from '@/components/ask-dentist/faq-schema'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MessageCircle, Calendar, User, Eye, ThumbsUp } from 'lucide-react'

interface QuestionPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const questions = getAllQuestions()
  return questions.map((question) => ({
    slug: question.slug,
  }))
}

export async function generateMetadata({ params }: QuestionPageProps): Promise<Metadata> {
  const { slug } = await params
  const question = getQuestionBySlug(slug)
  
  if (!question) {
    return {
      title: 'Question Not Found',
    }
  }

  const description = question.answer.substring(0, 150) + '...'

  return {
    title: `${question.title} | Ask the Dentist - Dr. Rockson Samuel`,
    description: description,
    keywords: [
      ...question.tags,
      'ask the dentist',
      'dental advice',
      'Dr Rockson Samuel',
      'dental Q&A',
      'oral health questions'
    ],
    openGraph: {
      title: `${question.title} | Ask the Dentist`,
      description: description,
      url: `https://www.dentalclinicinvellore.in/ask-the-dentist/${question.slug}`,
      type: 'article',
      publishedTime: question.createdAt,
      modifiedTime: question.updatedAt,
      authors: ['Dr. Rockson Samuel'],
    },
    alternates: {
      canonical: `https://www.dentalclinicinvellore.in/ask-the-dentist/${question.slug}`,
    },
  }
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { slug } = await params
  const question = getQuestionBySlug(slug)
  
  if (!question) {
    notFound()
  }

  const relatedServices = getRelatedServices(question.answer)
  const enhancedAnswer = addInternalLinks(question.answer)

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": question.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": question.answer,
        "author": {
          "@type": "Person",
          "name": question.author
        },
        "dateCreated": question.createdAt,
        "dateModified": question.updatedAt
      }
    }]
  }

  return (
    <>
      {/* FAQ Schema */}
      <FAQSchema question={question} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Ask the Dentist', href: '/ask-the-dentist' },
              { title: question.title, href: `/ask-the-dentist/${slug}` },
            ]}
          />

          {/* Back Button */}
          <div className="mb-6">
            <Link href="/ask-the-dentist">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Questions
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <QuestionDetail 
                question={question} 
                enhancedAnswer={enhancedAnswer}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Question Stats */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-4">Question Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Views</span>
                    </div>
                    <span className="font-medium">{question.views}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Helpful</span>
                    </div>
                    <span className="font-medium">{question.helpfulVotes}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Asked</span>
                    </div>
                    <span className="font-medium">
                      {new Date(question.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Answered by</span>
                    </div>
                    <span className="font-medium">{question.author}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {question.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <RelatedServices services={relatedServices.map(service => ({
                  keyword: service.name,
                  url: `/services/${service.slug}`,
                  title: service.name
                }))} />
              )}

              {/* Related Questions */}
              <RelatedQuestions currentSlug={slug} tags={question.tags} />

              {/* Compact Service Widget */}
              <CompactServiceWidget
                title="Related Dental Services"
                description="Explore our comprehensive dental services that can help address your concerns."
                services={[
                  { name: "General Dentistry", slug: "general-dentistry", price: "₹500 - ₹2,000", duration: "30-60 min" },
                  { name: "Root Canal Treatment", slug: "root-canal-treatment", price: "₹3,000 - ₹8,000", duration: "1-2 hours" },
                  { name: "Dental Implants", slug: "dental-implants", price: "₹25,000 - ₹45,000", duration: "2-3 hours" },
                  { name: "Cosmetic Dentistry", slug: "cosmetic-dentistry", price: "₹5,000 - ₹25,000", duration: "1-3 hours" }
                ]}
                ctaText="View All Services"
                ctaLink="/services"
              />

              {/* CTA Widget */}
              <CTAWidget
                title="Need Immediate Dental Care?"
                description="Don't wait for dental problems to worsen. Get expert treatment from Dr. Rockson Samuel."
                primaryAction={{
                  text: "Book Appointment",
                  href: "/contact",
                  icon: Calendar
                }}
                secondaryAction={{
                  text: "Ask Another Question",
                  href: "/ask-the-dentist/submit",
                  icon: MessageCircle
                }}
                benefits={[
                  "Same day appointments available",
                  "15+ years of experience",
                  "Advanced dental technology",
                  "Affordable treatment options"
                ]}
                showRating={true}
                showAvailability={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
