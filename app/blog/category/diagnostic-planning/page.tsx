import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ArrowRight, Tag } from 'lucide-react'
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from '@/components/ui/modern-card'
import { Breadcrumb } from '@/components/breadcrumb'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Diagnostic Planning | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on diagnostic planning by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'diagnostic planning, dental blog, oral health, vellore dentist',
}

export default function diagnosticplanningCategoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Blog', href: '/blog' },
              { title: 'Diagnostic Planning', href: '#' }
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-teal-100 text-teal-700 text-lg px-4 py-2">
            <Tag className="w-5 h-5 inline mr-2" />
            Blog Category
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Diagnostic Planning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert articles and guides on diagnostic planning by Dr. Rockson Samuel
          </p>
        </div>

        <ModernCard>
          <ModernCardHeader>
            <ModernCardTitle>Articles in this Category</ModernCardTitle>
          </ModernCardHeader>
          <ModernCardContent>
            <p className="text-gray-600 mb-6">
              Explore our comprehensive collection of articles on diagnostic planning. 
              Each article is written by Dr. Rockson Samuel with evidence-based information and practical advice.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
            >
              <BookOpen className="w-5 h-5" />
              View All Blog Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ModernCardContent>
        </ModernCard>
      </div>
    </div>
  )
}
