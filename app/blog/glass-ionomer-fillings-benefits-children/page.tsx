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
  CheckCircle,
  AlertCircle,
  Info,
  Stethoscope,
  Heart,
  Shield,
  DollarSign,
  Star,
  Award
} from 'lucide-react'

const category = 'Restorative Dentistry'
const categorySlug = 'restorative-dentistry'
const slug = 'glass-ionomer-fillings-benefits-children'




export const metadata: Metadata = {
  title: "Glass Ionomer Fillings Benefits Children: Complete Expert Guide (2024) | Dr. Rockson Samuel",
  description: 'Expert guide on glass ionomer fillings benefits children. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
  keywords: 'glass, ionomer, fillings, benefits, children, restorative dentistry, dental health, vellore dentist, dr rockson samuel, indira dental clinic, dental treatment india',
  authors: [{ name: 'Dr. Rockson Samuel', url: 'https://www.dentalclinicinvellore.in/about-us/dr-rockson-samuel' }],
  openGraph: {
    title: 'Glass Ionomer Fillings Benefits Children | Indira Dental Clinic Vellore',
    description: 'Expert guide on glass ionomer fillings benefits children. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
    url: 'https://www.dentalclinicinvellore.in/blog/glass-ionomer-fillings-benefits-children',
    siteName: 'Indira Dental Clinic',
    images: [
      {
        url: '/dental-clinic-vellore.jpg',
        width: 1200,
        height: 630,
        alt: 'Glass Ionomer Fillings Benefits Children'
      }
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2024-10-28T00:00:00.000Z',
    modifiedTime: '2024-10-28T00:00:00.000Z',
    authors: ['Dr. Rockson Samuel'],
    tags: ['glass, ionomer, fillings, benefits, children'.split(', ').slice(0, 10).join("', '")]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glass Ionomer Fillings Benefits Children',
    description: 'Expert guide on glass ionomer fillings benefits children. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Roc',
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
    canonical: 'https://www.dentalclinicinvellore.in/blog/glass-ionomer-fillings-benefits-children'
  }
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Glass Ionomer Fillings: Benefits for Children',
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
  dateModified: '2024-10-28'
}

export default function GlassIonomerFillingsBenefitsChildrenBlogPost() {
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
              { title: 'Restorative Dentistry', href: `/blog/category/restorative-dentistry` },
              { title: 'Glass Ionomer Fillings: Benefits for Children', href: `/blog/glass-ionomer-fillings-benefits-children` }
            ]}
          />

          <article className="mt-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-teal-100 text-teal-700">Restorative Dentistry</Badge>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  20 min read
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Glass Ionomer Fillings Benefits Children: Complete Expert Guide (2024) | Dr. Rockson Samuel</h1>

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
                  <Award className="w-4 h-4 text-teal-600" />
                  <span>Expert Verified</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/dental-clinic-vellore.jpg"
                alt="Glass Ionomer Fillings: Benefits for Children"
                fill
                className="object-cover"
                priority
              />
            </div>

            <ModernCard className="mb-8 bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-300">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Quick Navigation
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  <Link href="#overview" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Overview
                  </Link>
                  <Link href="#types" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Types & Options
                  </Link>
                  <Link href="#procedure" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Procedure Steps
                  </Link>
                  <Link href="#benefits" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Benefits
                  </Link>
                  <Link href="#cost" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Cost & Pricing
                  </Link>
                  <Link href="#care" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Care & Maintenance
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Glass Ionomer Fillings: Benefits for Children is a crucial aspect of restorative dentistry. This comprehensive guide by Dr. Rockson Samuel 
                covers everything you need to know about treatment options, procedures, costs, and expected outcomes.
              </p>
            </section>

            <ModernCard className="mb-12 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-300">
              <ModernCardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Expert Restorative Dentistry Treatment in Vellore
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Dr. Rockson Samuel offers advanced restorative dentistry treatments with latest technology. 
                  Save 40-60% compared to metro cities without compromising on quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Book Free Consultation
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

            <ModernCard className="mb-8 border-2 border-gray-300 shadow-lg">
              <ModernCardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-teal-300">
                    <Image
                      src="/dr-rockson-samuel-best-dentist-vellore.jpg"
                      alt="Dr. Rockson Samuel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">About the Author</h3>
                    <h4 className="font-bold text-lg text-teal-600 mb-2">Dr. Rockson Samuel</h4>
                    <p className="text-sm text-gray-600 mb-3">BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      Specializing in restorative dentistry with 15+ years of experience, Dr. Rockson Samuel has 
                      successfully restored thousands of smiles. He stays updated with the latest advancements to provide 
                      the best care possible.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.9/5</span>
                      </div>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-600">1000+ Success Stories</span>
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
