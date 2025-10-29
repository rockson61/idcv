import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/breadcrumb'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  Share2,
  CheckCircle,
  AlertCircle,
  Info,
  Stethoscope,
  Heart,
  Shield
} from 'lucide-react'

const category = 'Periodontics'
const categorySlug = 'periodontics'
const slug = 'guided-tissue-regeneration-gums'




export const metadata: Metadata = {
  title: "Guided Tissue Regeneration Gums: Complete Expert Guide (2024) | Dr. Rockson Samuel",
  description: 'Expert guide on guided tissue regeneration gums. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
  keywords: 'guided, tissue, regeneration, gums, periodontics, dental health, vellore dentist, dr rockson samuel, indira dental clinic, dental treatment india',
  authors: [{ name: 'Dr. Rockson Samuel', url: 'https://www.dentalclinicinvellore.in/about-us/dr-rockson-samuel' }],
  openGraph: {
    title: 'Guided Tissue Regeneration Gums | Indira Dental Clinic Vellore',
    description: 'Expert guide on guided tissue regeneration gums. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
    url: 'https://www.dentalclinicinvellore.in/blog/guided-tissue-regeneration-gums',
    siteName: 'Indira Dental Clinic',
    images: [
      {
        url: '/dental-clinic-vellore.jpg',
        width: 1200,
        height: 630,
        alt: 'Guided Tissue Regeneration Gums'
      }
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2024-10-28T00:00:00.000Z',
    modifiedTime: '2024-10-28T00:00:00.000Z',
    authors: ['Dr. Rockson Samuel'],
    tags: ['guided, tissue, regeneration, gums'.split(', ').slice(0, 10).join("', '")]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guided Tissue Regeneration Gums',
    description: 'Expert guide on guided tissue regeneration gums. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samu',
    creator: '@IndiraDentalVellore',
    images: ['/dental-clinic-vellore.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/blog/guided-tissue-regeneration-gums'
  }
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Guided Tissue Regeneration for Gum Disease',
  image: '/dental-clinic-vellore.jpg',
  author: {
    '@type': 'Person',
    name: 'Dr. Rockson Samuel',
    jobTitle: 'BDS, PgDM, BDM | General Dentist & Community Leader',
    worksFor: {
      '@type': 'Dentist',
      name: 'Indira Dental Clinic & Implant Center'
    }
  },
  publisher: {
    '@type': 'Organization',
    name: 'Indira Dental Clinic',
    logo: {
      '@type': 'ImageObject',
      url: '/logo.png'
    }
  },
  datePublished: '2024-10-28',
  dateModified: '2024-10-28',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.dentalclinicinvellore.in/blog/guided-tissue-regeneration-gums'
  }
}

export default function GuidedTissueRegenerationGumsBlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Blog', href: '/blog' },
              { title: 'Category', href: `/blog/category/periodontics` },
              { title: 'Guided Tissue Regeneration for Gum Disease', href: `/blog/guided-tissue-regeneration-gums` }
            ]}
          />

          {/* Article Header */}
          <article className="mt-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-teal-100 text-teal-700">Periodontics</Badge>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  15 min read
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Guided Tissue Regeneration Gums: Complete Expert Guide (2024) | Dr. Rockson Samuel</h1>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Dr. Rockson Samuel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>October 28, 2024</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/dental-clinic-vellore.jpg"
                alt="Guided Tissue Regeneration for Gum Disease"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Table of Contents */}
            <ModernCard className="mb-8 bg-blue-50 border-2 border-blue-200">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Table of Contents
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <ul className="space-y-2">
                  <li><Link href="#what-is" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> What is Guided Tissue Regeneration for Gum Disease?
                  </Link></li>
                  <li><Link href="#causes" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Causes and Risk Factors
                  </Link></li>
                  <li><Link href="#symptoms" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Symptoms and Warning Signs
                  </Link></li>
                  <li><Link href="#diagnosis" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Diagnosis and Evaluation
                  </Link></li>
                  <li><Link href="#treatment" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Treatment Options
                  </Link></li>
                  <li><Link href="#prevention" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Prevention Tips
                  </Link></li>
                  <li><Link href="#faq" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Frequently Asked Questions
                  </Link></li>
                </ul>
              </ModernCardContent>
            </ModernCard>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Guided Tissue Regeneration for Gum Disease is a common dental concern affecting millions of people in India. In this comprehensive guide, 
                Dr. Rockson Samuel from Indira Dental Clinic explains everything you need to know about this condition, 
                including causes, symptoms, treatment options, and prevention strategies.
              </p>
            </div>

            {/* What is Section */}
            <section id="what-is" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-8 h-8 text-teal-600" />
                What is Guided Tissue Regeneration for Gum Disease?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  [Detailed explanation of the condition/treatment - This would be 300-500 words explaining 
                  what the condition is, how it develops, who it affects, and why it's important to address.]
                </p>
                <ModernCard className="bg-teal-50 border-2 border-teal-200">
                  <ModernCardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Expert Insight</h3>
                        <p className="text-gray-700 text-sm">
                          "At Indira Dental Clinic, we have successfully treated hundreds of patients with this condition. 
                          Early diagnosis and proper treatment can prevent complications and ensure optimal results." 
                          - Dr. Rockson Samuel
                        </p>
                      </div>
                    </div>
                  </ModernCardContent>
                </ModernCard>
              </div>
            </section>

            {/* Causes Section */}
            <section id="causes" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertCircle className="w-8 h-8 text-orange-600" />
                Causes and Risk Factors
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ModernCard>
                  <ModernCardHeader>
                    <ModernCardTitle>Primary Causes</ModernCardTitle>
                  </ModernCardHeader>
                  <ModernCardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Genetic factors and heredity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Poor oral hygiene habits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Dietary factors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Environmental factors</span>
                      </li>
                    </ul>
                  </ModernCardContent>
                </ModernCard>
                
                <ModernCard>
                  <ModernCardHeader>
                    <ModernCardTitle>Risk Factors</ModernCardTitle>
                  </ModernCardHeader>
                  <ModernCardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Age-related factors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Medical conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Lifestyle habits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Medication effects</span>
                      </li>
                    </ul>
                  </ModernCardContent>
                </ModernCard>
              </div>
            </section>

            {/* Treatment Section */}
            <section id="treatment" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Stethoscope className="w-8 h-8 text-blue-600" />
                Treatment Options at Indira Dental Clinic
              </h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700 leading-relaxed">
                  At Indira Dental Clinic in Vellore, we offer comprehensive treatment options tailored to your specific needs. 
                  Dr. Rockson Samuel uses advanced technology and proven techniques to ensure the best outcomes.
                </p>
              </div>
              <div className="grid gap-6">
                <ModernCard className="border-2 border-teal-200">
                  <ModernCardHeader className="bg-teal-50">
                    <ModernCardTitle>Treatment Approach</ModernCardTitle>
                  </ModernCardHeader>
                  <ModernCardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      [Detailed treatment description - 400-600 words covering the treatment process, 
                      what patients can expect, technology used, and expected outcomes]
                    </p>
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                      <h4 className="font-bold text-blue-900 mb-2">Treatment Timeline</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          Initial consultation and examination
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          Treatment planning and preparation
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          Main treatment procedure
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          Follow-up care and monitoring
                        </li>
                      </ul>
                    </div>
                  </ModernCardContent>
                </ModernCard>
              </div>
            </section>

            {/* Prevention Section */}
            <section id="prevention" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="w-8 h-8 text-green-600" />
                Prevention and Maintenance
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <ModernCard className="bg-green-50 border-2 border-green-200">
                  <ModernCardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Daily Care</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Brush twice daily</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Floss regularly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Use mouthwash</span>
                      </li>
                    </ul>
                  </ModernCardContent>
                </ModernCard>

                <ModernCard className="bg-blue-50 border-2 border-blue-200">
                  <ModernCardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Lifestyle</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                        <span>Healthy diet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                        <span>Avoid tobacco</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                        <span>Limit sugary foods</span>
                      </li>
                    </ul>
                  </ModernCardContent>
                </ModernCard>

                <ModernCard className="bg-purple-50 border-2 border-purple-200">
                  <ModernCardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Professional Care</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5" />
                        <span>Regular checkups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5" />
                        <span>Professional cleaning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5" />
                        <span>Early intervention</span>
                      </li>
                    </ul>
                  </ModernCardContent>
                </ModernCard>
              </div>
            </section>

            {/* CTA Section */}
            <ModernCard className="mb-12 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200">
              <ModernCardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Expert Dental Care?
                </h3>
                <p className="text-gray-700 mb-6">
                  Schedule a consultation with Dr. Rockson Samuel at Indira Dental Clinic, Vellore. 
                  We offer personalized treatment plans with advanced technology and affordable pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Book Appointment
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="tel:7010650063"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Call: 7010650063
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            {/* Author Box */}
            <ModernCard className="mb-8 border-2 border-gray-200">
              <ModernCardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-teal-200">
                    <Image
                      src="/dr-rockson-samuel-best-dentist-vellore.jpg"
                      alt="Dr. Rockson Samuel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">Dr. Rockson Samuel</h3>
                    <p className="text-sm text-gray-600 mb-3">BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      With 15+ years of experience in dentistry, Dr. Rockson Samuel specializes in periodontics 
                      and has helped thousands of patients achieve healthy, beautiful smiles. He is committed to providing 
                      personalized, pain-free dental care using the latest technology.
                    </p>
                    <Link href="/about-us/dr-rockson-samuel" className="text-teal-600 hover:text-teal-700 text-sm font-semibold flex items-center gap-1">
                      Read Full Profile
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>

            {/* Related Articles */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog" className="group">
                  <ModernCard className="h-full hover:shadow-lg transition-shadow border-2 border-gray-200 group-hover:border-teal-300">
                    <ModernCardContent className="p-6">
                      <Badge className="mb-3 bg-teal-100 text-teal-700">Periodontics</Badge>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600">
                        More Periodontics Articles
                      </h4>
                      <p className="text-sm text-gray-600">
                        Explore our comprehensive library of periodontics articles and guides.
                      </p>
                    </ModernCardContent>
                  </ModernCard>
                </Link>

                <Link href="/services" className="group">
                  <ModernCard className="h-full hover:shadow-lg transition-shadow border-2 border-gray-200 group-hover:border-blue-300">
                    <ModernCardContent className="p-6">
                      <Badge className="mb-3 bg-blue-100 text-blue-700">Services</Badge>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                        Our Treatment Services
                      </h4>
                      <p className="text-sm text-gray-600">
                        Discover all dental treatments available at Indira Dental Clinic.
                      </p>
                    </ModernCardContent>
                  </ModernCard>
                </Link>

                <Link href="/contact" className="group">
                  <ModernCard className="h-full hover:shadow-lg transition-shadow border-2 border-gray-200 group-hover:border-green-300">
                    <ModernCardContent className="p-6">
                      <Badge className="mb-3 bg-green-100 text-green-700">Contact</Badge>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">
                        Book Consultation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Schedule your appointment with Dr. Rockson Samuel today.
                      </p>
                    </ModernCardContent>
                  </ModernCard>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
