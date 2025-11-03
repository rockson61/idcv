"use client"

import { useMemo, useState } from "react"
import { ModernCard } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Search, Tag, ChevronLeft, ChevronRight, Home } from "lucide-react"
import Link from 'next/link'
import Image from "next/image"
import { BlogPost } from "@/lib/data/blog-posts"
import { formatDate } from '@/lib/utils/date'

export interface CategoryClientProps {
  categorySlug: string
  category: {
    name: string
    description: string
  }
  posts: BlogPost[]
  categories: Array<{ name: string; slug: string; count: number }>
}

export default function CategoryClient({ categorySlug, category, posts, categories }: CategoryClientProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const postsPerPage = 12

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return posts
    const needle = searchQuery.toLowerCase()
    return posts.filter((post) =>
      post.title.toLowerCase().includes(needle) || post.excerpt.toLowerCase().includes(needle)
    )
  }, [posts, searchQuery])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage))
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#54CAD3]/5 to-[#005f73]/5">
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#54CAD3] flex items-center gap-1">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#54CAD3]">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[#005f73] font-semibold">{category.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 border-[#54CAD3] text-[#005f73]">
            {posts.length} Articles
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-[#005f73] mb-6">{category.name}</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{category.description}</p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={`Search ${category.name} articles...`}
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#005f73]">{filteredPosts.length} Articles</h2>
              <div className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </div>
            </div>

            {currentPosts.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-lg text-gray-600">No articles found matching your search.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
                  {currentPosts.map((post) => (
                    <ModernCard key={post.slug} className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                      </div>
                      <Badge className="mb-3 bg-[#54CAD3]/10 text-[#005f73]">{post.category}</Badge>
                      <h3 className="mb-3 line-clamp-2 text-lg font-bold text-[#005f73] transition-colors group-hover:text-[#54CAD3]">
                        {post.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                      <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="outline"
                          className="w-full border-[#54CAD3] bg-transparent text-[#005f73] hover:bg-[#54CAD3] hover:text-white"
                        >
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </ModernCard>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Previous
                      </Button>

                      {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
                        const offsetStart = Math.max(1, currentPage - 2)
                        const pageNum = offsetStart + index
                        if (pageNum > totalPages) return null
                        return (
                          <Button
                            key={pageNum}
                            variant={currentPage === pageNum ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(pageNum)}
                            className={currentPage === pageNum ? "btn-gradient" : ""}
                          >
                            {pageNum}
                          </Button>
                        )
                      })}

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1"
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="text-sm text-gray-600">
                      Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} articles
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="space-y-8">
            <ModernCard className="p-6">
              <h3 className="mb-4 flex items-center text-lg font-bold text-[#005f73]">
                <Tag className="mr-2 h-5 w-5" />
                All Categories
              </h3>
              <div className="max-h-96 space-y-2 overflow-y-auto">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={cat.slug === "all" ? "/blog" : `/blog/category/${cat.slug}`}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                      categorySlug === cat.slug ? "bg-[#54CAD3]/10 text-[#005f73] font-semibold" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {cat.count}
                    </Badge>
                  </Link>
                ))}
              </div>
            </ModernCard>

            <ModernCard className="p-6 text-center">
              <h3 className="mb-4 text-lg font-bold text-[#005f73]">Need Expert Care?</h3>
              <p className="mb-4 text-sm text-gray-600">
                Schedule your appointment with Dr. Rockson Samuel for {category.name.toLowerCase()} treatment.
              </p>
              <Button className="btn-gradient mb-3 w-full" asChild>
                <a href="tel:7010650063">Call: 7010650063</a>
              </Button>
              <Button variant="outline" className="w-full border-[#54CAD3] bg-transparent text-[#005f73]" asChild>
                <Link href="/contact">Book Online</Link>
              </Button>
            </ModernCard>
          </div>
        </div>
      </div>
    </div>
  )
}

