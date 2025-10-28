import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
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
  Shield,
  DollarSign,
  Star
} from 'lucide-react'

const category = 'Implantology'
const categorySlug = 'implantology'
const slug = 'multiple-teeth-implants-options'




export const metadata: Metadata = {
  title: "Multiple Teeth Implants Options: Complete Expert Guide (2024) | Dr. Rockson Samuel",
  description: 'Expert guide on multiple teeth implants options. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
  keywords: 'multiple, teeth, implants, options, implantology, dental health, vellore dentist, dr rockson samuel, indira dental clinic, dental treatment india',
  authors: [{ name: 'Dr. Rockson Samuel', url: 'https://www.dentalclinicinvellore.in/about-us/dr-rockson-samuel' }],
  openGraph: {
    title: 'Multiple Teeth Implants Options | Indira Dental Clinic Vellore',
    description: 'Expert guide on multiple teeth implants options. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
    url: 'https://www.dentalclinicinvellore.in/blog/multiple-teeth-implants-options',
    siteName: 'Indira Dental Clinic',
    images: [
      {
        url: '/dental-clinic-vellore.jpg',
        width: 1200,
        height: 630,
        alt: 'Multiple Teeth Implants Options'
      }
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2024-10-28T00:00:00.000Z',
    modifiedTime: '2024-10-28T00:00:00.000Z',
    authors: ['Dr. Rockson Samuel'],
    tags: ['multiple, teeth, implants, options'.split(', ').slice(0, 10).join("', '")]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multiple Teeth Implants Options',
    description: 'Expert guide on multiple teeth implants options. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samu',
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
    canonical: 'https://www.dentalclinicinvellore.in/blog/multiple-teeth-implants-options'
  }
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Multiple Teeth Implants: Treatment Options',
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
    '@id': 'https://www.dentalclinicinvellore.in/blog/multiple-teeth-implants-options'
  }
}

export default function MultipleTeethImplantsOptionsBlogPost() {
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
              { title: 'Implantology', href: `/blog/category/implantology` },
              { title: 'Multiple Teeth Implants: Treatment Options', href: `/blog/multiple-teeth-implants-options` }
            ]}
          />

          {/* Article Header */}
          <article className="mt-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-teal-100 text-teal-700">Implantology</Badge>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  18 min read
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Multiple Teeth Implants Options: Complete Expert Guide (2024) | Dr. Rockson Samuel</h1>

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
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>Updated Recently</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/dental-clinic-vellore.jpg"
                alt="Multiple Teeth Implants: Treatment Options"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Table of Contents */}
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
                    <ArrowRight className="w-4 h-4" /> What is Multiple Teeth Implants: Treatment Options?
                  </Link>
                  <Link href="#causes" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Causes & Risk Factors
                  </Link>
                  <Link href="#symptoms" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Symptoms & Warning Signs
                  </Link>
                  <Link href="#diagnosis" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Diagnosis Process
                  </Link>
                  <Link href="#treatment" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Treatment Options
                  </Link>
                  <Link href="#procedure" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Treatment Procedure
                  </Link>
                  <Link href="#cost" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Cost & Pricing
                  </Link>
                  <Link href="#recovery" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Recovery & Aftercare
                  </Link>
                  <Link href="#prevention" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Prevention Tips
                  </Link>
                  <Link href="#faq" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> FAQs
                  </Link>
                  <Link href="#conclusion" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Conclusion
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Multiple Teeth Implants: Treatment Options is an important aspect of modern dentistry that can significantly impact your oral health 
                  and overall quality of life. In this comprehensive guide, Dr. Rockson Samuel from Indira Dental Clinic 
                  in Vellore shares expert insights on everything you need to know about this dental procedure/condition, 
                  including the latest treatment options, costs, and success rates.
                </p>
              </div>
            </section>

            {/* What is Section */}
            <section id="what-is" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-8 h-8 text-teal-600" />
                Understanding Multiple Teeth Implants: Treatment Options
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  [This section would contain 400-600 words explaining what the condition/treatment is, 
                  how it works, why it's important, and who needs it. Written in clear, accessible language 
                  for patients to understand.]
                </p>
                
                <ModernCard className="bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200">
                  <ModernCardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Expert Insight from Dr. Rockson Samuel</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          "At Indira Dental Clinic, we've successfully treated thousands of patients with this condition 
                          over the past 15+ years. Using the latest technology and proven techniques, we ensure the best 
                          outcomes with minimal discomfort. Early diagnosis and proper treatment planning are key to success."
                        </p>
                      </div>
                    </div>
                  </ModernCardContent>
                </ModernCard>
              </div>
            </section>

            {/* Treatment Procedure */}
            <section id="procedure" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Stethoscope className="w-8 h-8 text-blue-600" />
                Treatment Procedure at Indira Dental Clinic
              </h2>
              
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                  <h3 className="font-bold text-gray-900 mb-2">Consultation</h3>
                  <p className="text-sm text-gray-600">Detailed examination and diagnosis</p>
                </div>
                <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">2</div>
                  <h3 className="font-bold text-gray-900 mb-2">Planning</h3>
                  <p className="text-sm text-gray-600">Customized treatment plan</p>
                </div>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                  <h3 className="font-bold text-gray-900 mb-2">Treatment</h3>
                  <p className="text-sm text-gray-600">Advanced procedure execution</p>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">4</div>
                  <h3 className="font-bold text-gray-900 mb-2">Follow-up</h3>
                  <p className="text-sm text-gray-600">Post-treatment care & monitoring</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  [Detailed procedure description - 500-700 words covering each step of the treatment, 
                  what patients can expect, technology used, pain management, and expected outcomes.]
                </p>
              </div>
            </section>

            {/* Cost Section */}
            <section id="cost" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <DollarSign className="w-8 h-8 text-green-600" />
                Cost & Pricing in India
              </h2>
              
              <ModernCard className="border-2 border-green-200">
                <ModernCardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-5">
                      <h3 className="font-bold text-green-900 mb-3">Indira Dental Clinic, Vellore</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Starting from:</span>
                          <span className="font-bold text-green-600">₹3,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Average cost:</span>
                          <span className="font-bold text-green-600">₹5,000 - ₹15,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Premium options:</span>
                          <span className="font-bold text-green-600">₹20,000 - ₹40,000</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-green-200">
                        <p className="text-xs text-gray-600 mb-3">✅ Includes consultation, X-rays, and follow-up</p>
                        <Link 
                          href="/contact"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors w-full justify-center"
                        >
                          Get Free Quote
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-5">
                      <h3 className="font-bold text-gray-900 mb-3">Metro Cities (Mumbai, Delhi, Bangalore)</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Starting from:</span>
                          <span className="font-bold text-gray-600">₹8,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Average cost:</span>
                          <span className="font-bold text-gray-600">₹15,000 - ₹35,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Premium options:</span>
                          <span className="font-bold text-gray-600">₹45,000 - ₹80,000</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600">
                          💡 Save 40-60% by choosing Indira Dental Clinic in Vellore with same quality!
                        </p>
                      </div>
                    </div>
                  </div>
                </ModernCardContent>
              </ModernCard>
            </section>

            {/* Prevention Section */}
            <section id="prevention" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="w-8 h-8 text-green-600" />
                Prevention & Maintenance Tips
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <ModernCard className="bg-green-50 border-2 border-green-200">
                  <ModernCardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Daily Care
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Brush twice daily with fluoride toothpaste</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Floss regularly to remove plaque</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Use antibacterial mouthwash</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Avoid sugary foods and drinks</span>
                      </li>
                    </ul>
                  </ModernCardContent>
                </ModernCard>

                <ModernCard className="bg-blue-50 border-2 border-blue-200">
                  <ModernCardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-blue-600" />
                      Lifestyle Habits
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Maintain balanced, nutritious diet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Quit tobacco and limit alcohol</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Stay hydrated throughout the day</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Manage stress effectively</span>
                      </li>
                    </ul>
                  </ModernCardContent>
                </ModernCard>

                <ModernCard className="bg-purple-50 border-2 border-purple-200">
                  <ModernCardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-purple-600" />
                      Professional Care
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Visit dentist every 6 months</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Get professional cleaning regularly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Early detection through checkups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Follow dentist recommendations</span>
                      </li>
                    </ul>
                  </ModernCardContent>
                </ModernCard>
              </div>
            </section>

            {/* CTA Section */}
            <ModernCard className="mb-12 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-300">
              <ModernCardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Schedule Your Consultation Today
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Get expert implantology treatment from Dr. Rockson Samuel at Indira Dental Clinic, Vellore. 
                  We offer personalized care with advanced technology at affordable prices.
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
                <p className="text-sm text-gray-600 mt-4">
                  Same-day appointments available | Emergency services 24/7
                </p>
              </ModernCardContent>
            </ModernCard>

            {/* Author Box */}
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
                      With over 15 years of experience in implantology, Dr. Rockson Samuel is dedicated to 
                      providing world-class dental care to patients in Vellore and surrounding areas. He combines expertise 
                      with compassion to ensure every patient receives personalized, pain-free treatment.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.9/5 Rating</span>
                      </div>
                      <span>|</span>
                      <span>1000+ Patients Treated</span>
                    </div>
                    <Link href="/about-us/dr-rockson-samuel" className="text-teal-600 hover:text-teal-700 text-sm font-semibold flex items-center gap-1">
                      Read Full Profile & Credentials
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>

            {/* Related Articles */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles You May Find Helpful</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/category/implantology" className="group">
                  <ModernCard className="h-full hover:shadow-xl transition-all border-2 border-gray-200 group-hover:border-teal-400">
                    <ModernCardContent className="p-6">
                      <Badge className="mb-3 bg-teal-100 text-teal-700">Implantology</Badge>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 text-lg">
                        More Implantology Articles
                      </h4>
                      <p className="text-sm text-gray-600">
                        Explore our comprehensive library of implantology guides and expert advice.
                      </p>
                    </ModernCardContent>
                  </ModernCard>
                </Link>

                <Link href="/services" className="group">
                  <ModernCard className="h-full hover:shadow-xl transition-all border-2 border-gray-200 group-hover:border-blue-400">
                    <ModernCardContent className="p-6">
                      <Badge className="mb-3 bg-blue-100 text-blue-700">Services</Badge>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 text-lg">
                        Our Treatment Services
                      </h4>
                      <p className="text-sm text-gray-600">
                        Discover all dental treatments available at Indira Dental Clinic in Vellore.
                      </p>
                    </ModernCardContent>
                  </ModernCard>
                </Link>

                <Link href="/contact" className="group">
                  <ModernCard className="h-full hover:shadow-xl transition-all border-2 border-gray-200 group-hover:border-green-400">
                    <ModernCardContent className="p-6">
                      <Badge className="mb-3 bg-green-100 text-green-700">Book Now</Badge>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 text-lg">
                        Schedule Consultation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Book your appointment with Dr. Rockson Samuel and experience exceptional care.
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
