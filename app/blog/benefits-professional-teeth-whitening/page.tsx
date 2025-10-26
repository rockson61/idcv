import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { CalendarDays, Clock, User, BookOpen, ChevronRight, Tag, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "The Benefits of Professional Teeth Whitening | Indira Dental Clinic",
  description:
    "Discover why professional teeth whitening offers superior results compared to over-the-counter products. Learn about the benefits, process, and aftercare.",
}

export default function BlogPost() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/blog" className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">
                Blog
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-gray-500 md:ml-2">The Benefits of Professional Teeth Whitening</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* View All Blogs Button */}
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
        >
          ← View All Blogs
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <Link
            href="/blog/category/cosmetic-dentistry"
            className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
          >
            <Tag className="w-3 h-3 mr-1" />
            Cosmetic Dentistry
          </Link>
          <Link
            href="/blog/category/oral-health"
            className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
          >
            <Tag className="w-3 h-3 mr-1" />
            Oral Health
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">The Benefits of Professional Teeth Whitening</h1>

        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-6">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-1" />
            <time dateTime="2023-10-15">October 15, 2023</time>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>6 min read</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>By Dr. Rajesh Kumar</span>
          </div>
        </div>

        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=1000"
            alt="Professional Teeth Whitening"
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-10">
        <p>
          A bright, white smile can significantly impact your appearance and boost your confidence. While there are
          numerous over-the-counter whitening products available, professional teeth whitening performed by a dentist
          offers superior results and several advantages. In this article, we'll explore the benefits of professional
          teeth whitening and why it might be the right choice for you.
        </p>

        <h2>Understanding Teeth Discoloration</h2>
        <p>
          Before discussing the benefits of professional teeth whitening, it's important to understand why teeth become
          discolored in the first place. Teeth discoloration can be categorized into three main types:
        </p>
        <ul>
          <li>
            <strong>Extrinsic Discoloration:</strong> This affects the outer layer of the tooth (enamel) and is
            typically caused by lifestyle factors such as consuming coffee, tea, red wine, tobacco, and certain foods
            with strong pigments.
          </li>
          <li>
            <strong>Intrinsic Discoloration:</strong> This occurs within the tooth structure and can be caused by
            medication use, childhood illness, tooth trauma, or aging.
          </li>
          <li>
            <strong>Age-Related Discoloration:</strong> As we age, both extrinsic and intrinsic factors combine as the
            enamel thins, revealing more of the yellowish dentin underneath.
          </li>
        </ul>

        <h2>Benefits of Professional Teeth Whitening</h2>

        <h3>1. Superior Results</h3>
        <p>
          Professional teeth whitening uses higher-concentration bleaching agents that are not available in
          over-the-counter products. This allows for more significant whitening in a shorter period. Dentists can
          typically achieve results that are 5-8 shades lighter in just one session, compared to the 1-2 shade
          improvement from most at-home kits.
        </p>

        <div className="relative h-64 rounded-lg overflow-hidden my-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Before and After Professional Teeth Whitening"
            fill
            className="object-cover"
          />
        </div>

        <h3>2. Customized Treatment</h3>
        <p>
          One of the most significant advantages of professional teeth whitening is that it's tailored to your specific
          needs. Your dentist will evaluate your oral health, the cause and extent of your discoloration, and any
          existing dental work to create a personalized whitening plan. This customization ensures optimal results while
          minimizing potential side effects.
        </p>

        <h3>3. Safety and Reduced Sensitivity</h3>
        <p>
          When performed by a dental professional, teeth whitening is safer and less likely to cause tooth sensitivity
          or gum irritation. Dentists take precautions to protect your gums and soft tissues from the bleaching agents
          and can adjust the treatment if you experience any discomfort. They also ensure that you're a good candidate
          for whitening before proceeding with treatment.
        </p>

        <h3>4. Faster Results</h3>
        <p>
          In-office teeth whitening typically takes about 60-90 minutes, with immediate results visible after just one
          session. This is significantly faster than at-home whitening kits, which may require daily application for 1-2
          weeks before noticeable results appear.
        </p>

        <h3>5. Long-Lasting Effects</h3>
        <p>
          Professional teeth whitening results tend to last longer than those achieved with over-the-counter products.
          With proper maintenance and occasional touch-ups, your brighter smile can last for 1-3 years. Your dentist can
          also provide you with custom take-home trays for periodic maintenance treatments.
        </p>

        <h2>The Professional Teeth Whitening Process</h2>
        <p>
          Understanding what to expect during a professional teeth whitening procedure can help alleviate any concerns
          you might have. Here's a typical step-by-step process:
        </p>
        <ol>
          <li>
            <strong>Initial Consultation:</strong> Your dentist will examine your teeth, discuss your whitening goals,
            and determine if you're a good candidate for the procedure.
          </li>
          <li>
            <strong>Preparation:</strong> Your dentist will clean your teeth to remove any surface stains and debris,
            then place a protective barrier on your gums to prevent irritation.
          </li>
          <li>
            <strong>Application:</strong> A high-concentration hydrogen peroxide or carbamide peroxide gel is applied to
            your teeth.
          </li>
          <li>
            <strong>Activation:</strong> Many professional whitening systems use a special light or laser to activate
            the whitening gel and enhance its effectiveness.
          </li>
          <li>
            <strong>Rinse and Repeat:</strong> The gel is typically left on for 15-20 minutes, then rinsed off. This
            process may be repeated 2-3 times during the same appointment.
          </li>
          <li>
            <strong>Final Assessment:</strong> After the final application, your dentist will evaluate the results and
            provide instructions for post-treatment care.
          </li>
        </ol>

        <h2>Maintaining Your Whitened Smile</h2>
        <p>
          To maximize the longevity of your professional teeth whitening results, consider the following maintenance
          tips:
        </p>
        <ul>
          <li>
            Avoid or limit consumption of staining foods and beverages such as coffee, tea, red wine, and dark-colored
            sauces.
          </li>
          <li>
            If you do consume staining substances, rinse your mouth with water afterward or brush your teeth if
            possible.
          </li>
          <li>Quit smoking or using tobacco products, as they cause significant teeth discoloration.</li>
          <li>Maintain excellent oral hygiene by brushing twice daily and flossing regularly.</li>
          <li>Use a whitening toothpaste once or twice a week to help remove surface stains.</li>
          <li>Schedule regular dental cleanings to remove plaque and surface stains.</li>
          <li>Consider occasional touch-up treatments as recommended by your dentist.</li>
        </ul>

        <h2>Is Professional Teeth Whitening Right for You?</h2>
        <p>
          While professional teeth whitening is safe and effective for most people, it's not suitable for everyone. You
          may not be a good candidate if you have:
        </p>
        <ul>
          <li>Sensitive teeth or receding gums</li>
          <li>
            Dental restorations such as crowns or veneers on your front teeth (as these materials don't respond to
            whitening)
          </li>
          <li>Intrinsic discoloration from certain medications or conditions</li>
          <li>Allergies to peroxide or other whitening ingredients</li>
          <li>Active gum disease or untreated cavities</li>
        </ul>
        <p>
          The best way to determine if professional teeth whitening is right for you is to consult with your dentist.
          They can evaluate your oral health and recommend the most appropriate whitening option for your specific
          situation.
        </p>

        <h2>Conclusion</h2>
        <p>
          Professional teeth whitening offers numerous advantages over over-the-counter alternatives, including superior
          results, customized treatment, enhanced safety, faster outcomes, and longer-lasting effects. If you're looking
          to significantly improve the appearance of your smile, consulting with a dental professional about in-office
          whitening is a great first step.
        </p>
        <p>
          At Indira Dental Clinic in Vellore, we offer state-of-the-art teeth whitening services tailored to your unique
          needs. Our experienced team is committed to helping you achieve a brighter, more confident smile in a safe and
          comfortable environment.
        </p>
      </div>

      {/* Author Bio */}
      <div className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-xl font-bold mb-4">About the Author</h2>
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=100&width=100" alt="Dr. Rajesh Kumar" fill className="object-cover" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Dr. Rajesh Kumar</h3>
            <p className="text-sm text-gray-600 mb-2">BDS, MDS - Cosmetic Dentistry</p>
            <p className="text-sm text-gray-600">
              Dr. Rajesh Kumar is a cosmetic dentistry specialist at Indira Dental Clinic with over 12 years of
              experience. He is passionate about helping patients achieve beautiful, healthy smiles through advanced
              cosmetic procedures.
            </p>
          </div>
        </div>
      </div>

      {/* Medically Reviewed By */}
      <div className="bg-blue-50 p-6 rounded-lg mb-10">
        <div className="flex items-center mb-2">
          <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
          <h2 className="text-lg font-bold">Medically Reviewed By</h2>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Dr. Lakshmi Sundaram"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Dr. Lakshmi Sundaram</h3>
            <p className="text-sm text-gray-600">
              BDS, MDS - Endodontics | Senior Dental Specialist at Indira Dental Clinic
            </p>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-xl font-bold mb-4">References</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
          <li>
            American Dental Association. (2022). Whitening: 5 Things to Know About Getting a Brighter Smile.
            <a
              href="https://www.ada.org"
              className="text-blue-600 hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ada.org
            </a>
          </li>
          <li>
            Journal of the American Dental Association. (2021). Efficacy of In-Office Bleaching and Home Bleaching: A
            Comparative Study.
          </li>
          <li>International Journal of Dentistry. (2020). Safety and Effectiveness of Tooth Whitening Products.</li>
          <li>
            Journal of Esthetic and Restorative Dentistry. (2019). Long-term Clinical Evaluation of At-home and
            In-office Bleaching Techniques.
          </li>
          <li>Dental Clinics of North America. (2018). Current Status of Vital Tooth Whitening Techniques.</li>
        </ol>
      </div>

      {/* Related Articles */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/complete-guide-root-canal-treatment" className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Root Canal Treatment Guide"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Complete Guide to Root Canal Treatment
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  Learn everything you need to know about root canal treatment, from diagnosis to recovery.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <CalendarDays className="w-3 h-3 mr-1" />
                  <time dateTime="2023-11-15">Nov 15, 2023</time>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/invisalign-vs-traditional-braces" className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Invisalign vs Traditional Braces"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Invisalign vs. Traditional Braces: Which is Right for You?
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  Compare the pros and cons of Invisalign clear aligners and traditional metal braces.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <CalendarDays className="w-3 h-3 mr-1" />
                  <time dateTime="2023-09-30">Sep 30, 2023</time>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/importance-regular-dental-checkups" className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Importance of Regular Dental Checkups"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  The Importance of Regular Dental Checkups
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  Discover why regular dental visits are crucial for maintaining optimal oral health.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <CalendarDays className="w-3 h-3 mr-1" />
                  <time dateTime="2023-08-15">Aug 15, 2023</time>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Browse by Category */}
      <div className="mb-10 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Browse by Category</h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog/category/cosmetic-dentistry"
            className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 rounded-full text-sm hover:bg-blue-50 hover:border-blue-200 transition-colors"
          >
            <Tag className="w-3 h-3 mr-1" />
            Cosmetic Dentistry
            <span className="ml-1 text-xs text-gray-500">(12)</span>
          </Link>
          <Link
            href="/blog/category/oral-health"
            className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 rounded-full text-sm hover:bg-blue-50 hover:border-blue-200 transition-colors"
          >
            <Tag className="w-3 h-3 mr-1" />
            Oral Health
            <span className="ml-1 text-xs text-gray-500">(15)</span>
          </Link>
          <Link
            href="/blog/category/dental-procedures"
            className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 rounded-full text-sm hover:bg-blue-50 hover:border-blue-200 transition-colors"
          >
            <Tag className="w-3 h-3 mr-1" />
            Dental Procedures
            <span className="ml-1 text-xs text-gray-500">(10)</span>
          </Link>
          <Link
            href="/blog/category/preventive-care"
            className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 rounded-full text-sm hover:bg-blue-50 hover:border-blue-200 transition-colors"
          >
            <Tag className="w-3 h-3 mr-1" />
            Preventive Care
            <span className="ml-1 text-xs text-gray-500">(9)</span>
          </Link>
          <Link
            href="/blog/category/pediatric-dentistry"
            className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 rounded-full text-sm hover:bg-blue-50 hover:border-blue-200 transition-colors"
          >
            <Tag className="w-3 h-3 mr-1" />
            Pediatric Dentistry
            <span className="ml-1 text-xs text-gray-500">(6)</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors"
          >
            View All Categories
          </Link>
        </div>
      </div>

      {/* Share */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">Share This Article</h2>
        <div className="flex gap-3">
          <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="sr-only">Share on Facebook</span>
          </button>
          <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="sr-only">Share on Twitter</span>
          </button>
          <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="sr-only">Share on WhatsApp</span>
          </button>
          <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="sr-only">Share on LinkedIn</span>
          </button>
          <button className="p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="sr-only">Copy Link</span>
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready for a Brighter Smile?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Schedule a professional teeth whitening consultation at Indira Dental Clinic in Vellore today and discover the
          difference professional care can make.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Call: +91 98765 43210
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
