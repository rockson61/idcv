import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ModernCard, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Calendar, User, ArrowRight, AlertCircle } from 'lucide-react'

const category = 'Oral Surgery'
const categorySlug = 'oral-surgery'
const slug = 'oral-surgery-recovery-complete-guide'




export const metadata: Metadata = {
  title: "Oral Surgery Recovery Complete Guide: Complete Expert Guide (2024) | Dr. Rockson Samuel",
  description: 'Expert guide on oral surgery recovery complete guide. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
  keywords: 'oral, surgery, recovery, complete, guide, oral surgery, dental health, vellore dentist, dr rockson samuel, indira dental clinic, dental treatment india',
  authors: [{ name: 'Dr. Rockson Samuel', url: 'https://www.dentalclinicinvellore.in/about-us/dr-rockson-samuel' }],
  openGraph: {
    title: 'Oral Surgery Recovery Complete Guide | Indira Dental Clinic Vellore',
    description: 'Expert guide on oral surgery recovery complete guide. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
    url: 'https://www.dentalclinicinvellore.in/blog/oral-surgery-recovery-complete-guide',
    siteName: 'Indira Dental Clinic',
    images: [
      {
        url: '/dental-clinic-vellore.jpg',
        width: 1200,
        height: 630,
        alt: 'Oral Surgery Recovery Complete Guide'
      }
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2024-10-28T00:00:00.000Z',
    modifiedTime: '2024-10-28T00:00:00.000Z',
    authors: ['Dr. Rockson Samuel'],
    tags: ['oral, surgery, recovery, complete, guide'.split(', ').slice(0, 10).join("', '")]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oral Surgery Recovery Complete Guide',
    description: 'Expert guide on oral surgery recovery complete guide. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson',
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
    canonical: 'https://www.dentalclinicinvellore.in/blog/oral-surgery-recovery-complete-guide'
  }
}

export default function OralSurgeryRecoveryCompleteGuidePost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Breadcrumb items={[
          { title: 'Home', href: '/' },
          { title: 'Blog', href: '/blog' },
          { title: 'Oral Surgery', href: `/blog/category/oral-surgery` },
          { title: 'Oral Surgery Recovery: Complete Guide', href: `/blog/oral-surgery-recovery-complete-guide` }
        ]} />

        <article className="mt-8">
          <Badge className="bg-teal-100 text-teal-700">Oral Surgery</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Oral Surgery Recovery Complete Guide: Complete Expert Guide (2024) | Dr. Rockson Samuel</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Dr. Rockson Samuel</span></div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Oct 28, 2024</span></div>
          </div>

          <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
            <Image src="/emergency-dental.jpg" alt="Oral Surgery Recovery: Complete Guide" fill className="object-cover" priority />
          </div>

          <ModernCard className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300">
            <ModernCardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-12 h-12 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Dental Emergency? Call Now!</h3>
                  <p className="text-gray-700 mb-6">Dr. Rockson Samuel provides 24/7 emergency dental services in Vellore. Don't wait - get immediate help.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:7010650063" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700">
                      Emergency: 7010650063 <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                      Schedule Visit <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">Oral Surgery Recovery: Complete Guide - comprehensive guide from Indira Dental Clinic, Vellore. Expert care when you need it most.</p>
          </div>
        </article>
      </div>
    </div>
  )
}
