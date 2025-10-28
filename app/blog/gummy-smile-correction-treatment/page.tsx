import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Calendar, Clock, User, ArrowRight, BookOpen, CheckCircle, Info, Shield, Star } from 'lucide-react'

const category = 'Periodontics'
const categorySlug = 'periodontics'
const slug = 'gummy-smile-correction-treatment'




export const metadata: Metadata = {
  title: "Gummy Smile Correction Treatment: Complete Expert Guide (2024) | Dr. Rockson Samuel",
  description: 'Expert guide on gummy smile correction treatment. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
  keywords: 'gummy, smile, correction, treatment, periodontics, dental health, vellore dentist, dr rockson samuel, indira dental clinic, dental treatment india',
  authors: [{ name: 'Dr. Rockson Samuel', url: 'https://www.dentalclinicinvellore.in/about-us/dr-rockson-samuel' }],
  openGraph: {
    title: 'Gummy Smile Correction Treatment | Indira Dental Clinic Vellore',
    description: 'Expert guide on gummy smile correction treatment. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
    url: 'https://www.dentalclinicinvellore.in/blog/gummy-smile-correction-treatment',
    siteName: 'Indira Dental Clinic',
    images: [
      {
        url: '/dental-clinic-vellore.jpg',
        width: 1200,
        height: 630,
        alt: 'Gummy Smile Correction Treatment'
      }
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2024-10-28T00:00:00.000Z',
    modifiedTime: '2024-10-28T00:00:00.000Z',
    authors: ['Dr. Rockson Samuel'],
    tags: ['gummy, smile, correction, treatment'.split(', ').slice(0, 10).join("', '")]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gummy Smile Correction Treatment',
    description: 'Expert guide on gummy smile correction treatment. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Sam',
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
    canonical: 'https://www.dentalclinicinvellore.in/blog/gummy-smile-correction-treatment'
  }
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Gummy Smile Correction: Treatment Options',
  image: '/dental-clinic-vellore.jpg',
  author: {
    '@type': 'Person',
    name: 'Dr. Rockson Samuel'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Indira Dental Clinic'
  },
  datePublished: '2024-10-28'
}

export default function GummySmileCorrectionTreatmentPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <Breadcrumb items={[
            { title: 'Home', href: '/' },
            { title: 'Blog', href: '/blog' },
            { title: 'Cosmetic Dentistry', href: `/blog/category/'periodontics'` },
            { title: 'Gummy Smile Correction: Treatment Options', href: `/blog/'gummy-smile-correction-treatment'` }
          ]} />

          <article className="mt-8">
            <div className="mb-8">
              <Badge className="bg-teal-100 text-teal-700">Periodontics</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Gummy Smile Correction Treatment: Complete Expert Guide (2024) | Dr. Rockson Samuel</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Dr. Rockson Samuel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Oct 28, 2024</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <Image src="/dental-clinic-vellore.jpg" alt="Gummy Smile Correction: Treatment Options" fill className="object-cover" priority />
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Expert guide on gummy smile correction: treatment options from Indira Dental Clinic, Vellore. 
                Learn about the latest techniques, costs, and what to expect.
              </p>
            </div>

            <ModernCard className="mb-8 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200">
              <ModernCardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Treatment?</h3>
                <p className="text-gray-700 mb-6">Schedule your consultation with Dr. Rockson Samuel today!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                    Book Appointment <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="tel:7010650063" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Call: 7010650063 <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard className="border-2 border-gray-300">
              <ModernCardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-teal-200">
                    <Image src="/dr-rockson-samuel-best-dentist-vellore.jpg" alt="Dr. Rockson Samuel" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-teal-600">Dr. Rockson Samuel</h4>
                    <p className="text-sm text-gray-600 mb-2">BDS, PgDM, BDM | General Dentist & Community Leader</p>
                    <p className="text-sm text-gray-700">15+ years experience in cosmetic dentistry</p>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>
          </article>
        </div>
      </div>
    </>
  )
}
