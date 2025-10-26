import Image from "next/image"
import type { ReactNode } from "react"
import Link from "next/link"

interface BlogPostDetailProps {
  title: string
  publishDate: string
  author: string
  authorTitle: string
  featuredImage: string
  content: ReactNode
}

export default function BlogPostDetail({
  title,
  publishDate,
  author,
  authorTitle,
  featuredImage,
  content,
}: BlogPostDetailProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">{publishDate}</span>
            <span>
              By {author}, {authorTitle}
            </span>
          </div>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <Image src={featuredImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
          </div>
        </div>

        {content}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">Share this article:</h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Facebook
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  Twitter
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <Link
                href="/appointment"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold inline-block hover:bg-blue-700 transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/teeth-whitening-guide" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Teeth Whitening Guide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    Complete Teeth Whitening Guide
                  </h4>
                  <p className="text-gray-600">Discover the best teeth whitening options for a brighter smile.</p>
                </div>
              </div>
            </Link>

            <Link href="/blog/root-canal-treatment" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Root Canal Treatment"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    Root Canal Treatment: What to Expect
                  </h4>
                  <p className="text-gray-600">Everything you need to know about modern root canal procedures.</p>
                </div>
              </div>
            </Link>

            <Link href="/blog/pediatric-dentistry-tips" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Pediatric Dentistry Tips"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    Pediatric Dentistry: Tips for Parents
                  </h4>
                  <p className="text-gray-600">
                    How to care for your child's dental health from infancy to adolescence.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
