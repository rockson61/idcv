import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Tag, ArrowRight, BookOpen, CheckCircle, Phone } from 'lucide-react'
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from '@/components/ui/modern-card'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'




export const metadata: Metadata = {
  title: "Oral Cancer Screening: Complete Expert Guide (2024) | Dr. Rockson Samuel",
  description: 'Expert guide on oral cancer screening. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
  keywords: 'oral, cancer, screening, preventive dentistry, dental health, vellore dentist, dr rockson samuel, indira dental clinic, dental treatment india',
  authors: [{ name: 'Dr. Rockson Samuel', url: 'https://www.dentalclinicinvellore.in/about-us/dr-rockson-samuel' }],
  openGraph: {
    title: 'Oral Cancer Screening | Indira Dental Clinic Vellore',
    description: 'Expert guide on oral cancer screening. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.',
    url: 'https://www.dentalclinicinvellore.in/blog/oral-cancer-screening',
    siteName: 'Indira Dental Clinic',
    images: [
      {
        url: '/dental-clinic-vellore.jpg',
        width: 1200,
        height: 630,
        alt: 'Oral Cancer Screening'
      }
    ],
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2024-10-28T00:00:00.000Z',
    modifiedTime: '2024-10-28T00:00:00.000Z',
    authors: ['Dr. Rockson Samuel'],
    tags: ['oral, cancer, screening'.split(', ').slice(0, 10).join("', '")]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oral Cancer Screening',
    description: 'Expert guide on oral cancer screening. Learn about causes, symptoms, treatment options, costs, and recovery. Professional advice from Dr. Rockson Samuel at Indi',
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
    canonical: 'https://www.dentalclinicinvellore.in/blog/oral-cancer-screening'
  }
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Oral Cancer Screening",
  "description": "Comprehensive guide on oral cancer screening by Dr. Rockson Samuel",
  "author": {
    "@type": "Person",
    "name": "Dr. Rockson Samuel",
    "jobTitle": "BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach",
    "affiliation": {
      "@type": "Organization",
      "name": "Indira Dental Clinic & Implant Center"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Indira Dental Clinic",
    "logo": {
      "@type": "ImageObject",
      "url": "https://indiradental.com/logo.png"
    }
  },
  "datePublished": "2025-10-28",
  "dateModified": "2025-10-28",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://indiradental.com/blog/oral-cancer-screening"
  }
};

export default function OralCancerScreeningBlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumb
              items={[
                { title: 'Home', href: '/' },
                { title: 'Blog', href: '/blog' },
                { title: 'Diagnostic Planning', href: '/blog/category/diagnostic-planning' },
                { title: 'Oral Cancer Screening', href: '#' }
              ]}
            />
          </div>
        </div>

        <article className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-teal-100 text-teal-700">
                <Tag className="w-3 h-3 mr-1" />
                Diagnostic Planning
              </Badge>
              <Badge variant="outline">
                <Clock className="w-3 h-3 mr-1" />
                10 min read
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Oral Cancer Screening: Complete Expert Guide (2024) | Dr. Rockson Samuel</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-teal-600" />
                <span>Dr. Rockson Samuel</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-teal-600" />
                <time>October 28, 2025</time>
              </div>
            </div>

            <div className="aspect-video relative rounded-xl overflow-hidden mb-8 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <BookOpen className="w-24 h-24" />
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Understanding oral cancer screening is crucial for maintaining optimal oral health. 
              In this comprehensive guide, Dr. Rockson Samuel from Indira Dental Clinic, Vellore, 
              explains everything you need to know about oral cancer screening, including causes, 
              symptoms, treatment options, and prevention strategies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is Oral Cancer Screening?</h2>
            <p>
              Oral Cancer Screening is an important aspect of dental health that affects many patients. 
              At Indira Dental Clinic in Vellore, we see numerous cases related to oral cancer screening 
              and have developed effective treatment protocols to address this condition.
            </p>
            <p>
              Dr. Rockson Samuel (BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach) 
              has treated thousands of patients with oral cancer screening-related issues over his 15+ years 
              of practice. His expertise in diagnostic planning ensures that patients receive 
              the best possible care using modern techniques and technology.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes</h2>
            <p>
              Several factors can contribute to oral cancer screening. Understanding these causes 
              helps in both prevention and treatment:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span><strong>Poor Oral Hygiene:</strong> Inadequate brushing and flossing can lead to various dental problems</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span><strong>Dietary Factors:</strong> High sugar intake and acidic foods can contribute to dental issues</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span><strong>Genetic Predisposition:</strong> Some conditions have hereditary components</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span><strong>Lifestyle Habits:</strong> Smoking, tobacco use, and certain medications can affect oral health</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span><strong>Lack of Regular Dental Visits:</strong> Professional cleanings and check-ups are essential</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Signs and Symptoms</h2>
            <p>
              Recognizing the early signs of oral cancer screening can help you seek timely treatment. 
              Common symptoms include:
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚠️ When to See a Dentist</h3>
              <p className="text-gray-700">
                If you experience any persistent symptoms related to oral cancer screening, 
                it's important to consult with a dental professional immediately. Early intervention 
                can prevent complications and ensure better outcomes.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Treatment Options at Indira Dental Clinic</h2>
            <p>
              At Indira Dental Clinic in Vellore, we offer comprehensive treatment for oral cancer screening. 
              Our approach combines modern technology with proven techniques to deliver optimal results.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Conservative Treatments</h3>
            <p>
              We always prioritize minimally invasive approaches when possible. Conservative treatments 
              help preserve natural tooth structure while addressing the underlying issues.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Advanced Procedures</h3>
            <p>
              For more complex cases, Dr. Rockson Samuel utilizes advanced diagnostic planning 
              procedures. Our clinic is equipped with state-of-the-art technology including digital imaging, 
              laser dentistry, and computer-aided design systems.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Preventive Care</h3>
            <p>
              Prevention is always better than cure. We provide comprehensive guidance on maintaining 
              oral health and preventing oral cancer screening-related issues.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Cost of Treatment in Vellore</h2>
            <p>
              One of the significant advantages of choosing Indira Dental Clinic in Vellore is our 
              affordable pricing. We offer treatment costs that are 40-60% lower than metro cities 
              like Delhi, Mumbai, and Bangalore, without compromising on quality.
            </p>
            
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Transparent Pricing</h3>
              <p className="text-gray-700 mb-4">
                We believe in complete transparency. During your initial consultation, 
                Dr. Rockson Samuel will provide a detailed treatment plan with cost breakdown. 
                We also offer flexible payment options to make quality dental care accessible to everyone.
              </p>
              <Link 
                href="/pricing" 
                className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700"
              >
                View Detailed Pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Prevention Strategies</h2>
            <p>
              Preventing oral cancer screening is often easier than treating it. 
              Here are evidence-based strategies recommended by Dr. Rockson Samuel:
            </p>
            <ol className="space-y-4 my-6">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-600 font-bold flex-shrink-0">1</span>
                <div>
                  <strong className="text-gray-900">Maintain Excellent Oral Hygiene:</strong>
                  <p className="text-gray-600 mt-1">Brush twice daily, floss regularly, and use antibacterial mouthwash</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-600 font-bold flex-shrink-0">2</span>
                <div>
                  <strong className="text-gray-900">Regular Dental Check-ups:</strong>
                  <p className="text-gray-600 mt-1">Visit your dentist every 6 months for professional cleaning and examination</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-600 font-bold flex-shrink-0">3</span>
                <div>
                  <strong className="text-gray-900">Healthy Diet:</strong>
                  <p className="text-gray-600 mt-1">Limit sugar intake, eat calcium-rich foods, and stay hydrated</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-600 font-bold flex-shrink-0">4</span>
                <div>
                  <strong className="text-gray-900">Avoid Tobacco:</strong>
                  <p className="text-gray-600 mt-1">Smoking and tobacco use significantly increase dental health risks</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-600 font-bold flex-shrink-0">5</span>
                <div>
                  <strong className="text-gray-900">Protective Measures:</strong>
                  <p className="text-gray-600 mt-1">Use mouth guards during sports, avoid teeth grinding</p>
                </div>
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Choose Indira Dental Clinic?</h2>
            <p>
              When it comes to oral cancer screening, choosing the right dental clinic makes all the difference. 
              Here's why patients trust Indira Dental Clinic in Vellore:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏆 Expert Team</h3>
                <p className="text-gray-600">
                  Led by Dr. Rockson Samuel with 15+ years of experience in comprehensive dentistry. 
                  Our team stays updated with the latest techniques and technologies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Affordable Pricing</h3>
                <p className="text-gray-600">
                  Quality dental care at 40-60% lower cost than metro cities. 
                  Flexible payment plans available.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔬 Modern Technology</h3>
                <p className="text-gray-600">
                  State-of-the-art equipment including digital X-rays, laser dentistry, 
                  and CAD/CAM systems for precision treatment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">⭐ 500+ Reviews</h3>
                <p className="text-gray-600">
                  Rated 4.9/5 on Google with 500+ authentic patient reviews. 
                  10,000+ satisfied patients treated successfully.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6 my-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How long does treatment take?</h3>
                <p className="text-gray-700">
                  Treatment duration varies based on the severity of your condition. 
                  Simple cases may be resolved in a single visit, while complex cases 
                  might require multiple sessions. Dr. Rockson Samuel will provide a detailed 
                  timeline during your initial consultation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is the procedure painful?</h3>
                <p className="text-gray-700">
                  Modern dental procedures are designed with patient comfort in mind. 
                  We use advanced anesthesia techniques and offer sedation options for 
                  anxious patients. Most patients report minimal to no discomfort during treatment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What are the success rates?</h3>
                <p className="text-gray-700">
                  At Indira Dental Clinic, we maintain high success rates across all treatments. 
                  Our use of modern technology, Dr. Rockson Samuel's expertise, and personalized 
                  care protocols contribute to excellent patient outcomes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer payment plans?</h3>
                <p className="text-gray-700">
                  Yes! We understand that dental treatment is an investment. We offer flexible 
                  payment options and installment plans to make quality dental care accessible. 
                  Contact our office to discuss payment options.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p>
              Oral Cancer Screening is a manageable condition when treated by experienced professionals. 
              At Indira Dental Clinic in Vellore, Dr. Rockson Samuel and our team are committed 
              to providing you with the highest quality care at affordable prices.
            </p>
            <p>
              Don't let oral cancer screening affect your quality of life. Book a consultation 
              today and take the first step towards optimal oral health. Our friendly team is here 
              to answer all your questions and provide personalized treatment recommendations.
            </p>
          </div>

          {/* Internal Links Section */}
          <ModernCard className="mb-12">
            <ModernCardHeader>
              <ModernCardTitle>Related Resources</ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent>
              <div className="grid md:grid-cols-2 gap-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group"
                >
                  <span className="text-gray-900 group-hover:text-teal-600 font-medium">Book Appointment</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600" />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group"
                >
                  <span className="text-gray-900 group-hover:text-teal-600 font-medium">All Services</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600" />
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group"
                >
                  <span className="text-gray-900 group-hover:text-teal-600 font-medium">View Pricing</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600" />
                </Link>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* Author Box */}
          <ModernCard className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200">
            <ModernCardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
                  DR
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Rockson Samuel</h3>
                  <p className="text-teal-600 font-semibold mb-4">
                    BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach
                  </p>
                  <p className="text-gray-700 mb-4">
                    Dr. Rockson Samuel is the founder and chief dentist at Indira Dental Clinic & Implant Center, 
                    Vellore. With over 15 years of experience in comprehensive dentistry, he specializes in 
                    diagnostic planning and has treated over 10,000 patients successfully.
                  </p>
                  <p className="text-gray-700 mb-6">
                    His patient-centered approach combines modern technology with compassionate care, 
                    ensuring every patient receives personalized treatment tailored to their unique needs. 
                    Dr. Samuel is committed to making quality dental care accessible and affordable to all.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/about-us/dr-rockson-samuel"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Read Full Bio <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Address Oral Cancer Screening?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your consultation with Dr. Rockson Samuel today. 
              Expert care, modern technology, and affordable prices in Vellore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-700 text-white rounded-lg font-bold text-lg hover:bg-teal-800 transition-colors border-2 border-white"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
