import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen,
  CheckCircle,
  Info,
  Stethoscope,
  Heart,
  Shield,
  DollarSign,
  Star
} from 'lucide-react'

const category = 'Endodontics'
const categorySlug = 'endodontics'
const slug = 'complete-guide-root-canal-treatment'




export const metadata: Metadata = {
  title: "Complete Guide Root Canal Treatment: Complete Expert Guide (2024) | Dr. Rockson Samuel",
  description: 'Expert guide on complete guide root canal treatment. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
  keywords: 'complete, guide, root, canal, treatment, endodontics, dental health, vellore dentist, dr rockson samuel, indira dental clinic, dental treatment india',
  authors: [{ name: 'Dr. Rockson Samuel', url: 'https://www.dentalclinicinvellore.in/about-us/dr-rockson-samuel' }],
  openGraph: {
    title: 'Complete Guide Root Canal Treatment | Indira Dental Clinic Vellore',
    description: 'Expert guide on complete guide root canal treatment. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
    url: 'https://www.dentalclinicinvellore.in/blog/complete-guide-root-canal-treatment',
    siteName: 'Indira Dental Clinic',
    images: [
      {
        url: '/dental-clinic-vellore.jpg',
        width: 1200,
        height: 630,
        alt: 'Complete Guide Root Canal Treatment'
      }
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2024-10-28T00:00:00.000Z',
    modifiedTime: '2024-10-28T00:00:00.000Z',
    authors: ['Dr. Rockson Samuel'],
    tags: ['complete, guide, root, canal, treatment'.split(', ').slice(0, 10).join("', '")]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide Root Canal Treatment',
    description: 'Expert guide on complete guide root canal treatment. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson ',
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
    canonical: 'https://www.dentalclinicinvellore.in/blog/complete-guide-root-canal-treatment'
  }
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Complete Guide to Root Canal Treatment',
  image: '/dental-clinic-vellore.jpg',
  author: {
    '@type': 'Person',
    name: 'Dr. Rockson Samuel',
    jobTitle: 'BDS, PgDM, BDM | General Dentist & Community Leader'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Indira Dental Clinic'
  },
  datePublished: '2024-10-28',
  dateModified: '2024-10-28'
}

export default function CompleteGuideRootCanalTreatmentBlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <Breadcrumb items={[
            { title: 'Home', href: '/' },
            { title: 'Blog', href: '/blog' },
            { title: 'Endodontics', href: `/blog/category/endodontics` },
            { title: 'Complete Guide to Root Canal Treatment', href: `/blog/complete-guide-root-canal-treatment` }
          ]} />

          <article className="mt-8">
            <div className="mb-8">
              <Badge className="bg-teal-100 text-teal-700">Endodontics</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Complete Guide Root Canal Treatment: Complete Expert Guide (2024) | Dr. Rockson Samuel</h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Dr. Rockson Samuel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>October 28, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden shadow-xl">
              <Image src="/dental-clinic-vellore.jpg" alt="Complete Guide to Root Canal Treatment" fill className="object-cover" priority />
            </div>

            <ModernCard className="mb-8 bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-300">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Table of Contents
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  <Link href="#introduction" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Introduction
                  </Link>
                  <Link href="#what-is" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Overview
                  </Link>
                  <Link href="#benefits" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Benefits
                  </Link>
                  <Link href="#procedure" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Procedure
                  </Link>
                  <Link href="#cost" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Cost & Pricing
                  </Link>
                  <Link href="#recovery" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Recovery
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Comprehensive guide to complete guide to root canal treatment. Learn from Dr. Rockson Samuel's expertise at Indira Dental Clinic, Vellore.
              </p>
            </div>

            <ModernCard className="mb-12 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-300">
              <ModernCardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Consultation</h3>
                <p className="text-gray-700 mb-6">Get expert endodontics treatment from Dr. Rockson Samuel in Vellore.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-teal-600 hover:bg-teal-700">
                    <Link href="/contact">Book Appointment <ArrowRight className="w-5 h-5 ml-2" /></Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="tel:7010650063">Call: 7010650063 <ArrowRight className="w-5 h-5 ml-2" /></a>
                  </Button>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard className="mb-8 border-2 border-gray-300 shadow-lg">
              <ModernCardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-teal-300">
                    <Image src="/dr-rockson-samuel-best-dentist-vellore.jpg" alt="Dr. Rockson Samuel" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">About the Author</h3>
                    <h4 className="font-bold text-lg text-teal-600 mb-2">Dr. Rockson Samuel</h4>
                    <p className="text-sm text-gray-600 mb-3">BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      With over 15 years of experience, Dr. Rockson Samuel provides world-class dental care in Vellore.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.9/5</span>
                      </div>
                      <span>|</span>
                      <span>1000+ Patients</span>
                    </div>
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
