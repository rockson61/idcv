"use client"

import { useState, useMemo } from "react"
import { ModernCard } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Search, Tag, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { allBlogPosts, getBlogPostsByCategory } from "@/lib/data/blog-posts"

// All blog categories with ACTUAL counts from real data
const allCategories = [
  { name: "All Posts", count: allBlogPosts.length, slug: "all" },
  { name: "Preventive Dentistry", count: getBlogPostsByCategory("preventive-dentistry").length, slug: "preventive-dentistry" },
  { name: "Periodontics", count: getBlogPostsByCategory("periodontics").length, slug: "periodontics" },
  { name: "Prosthodontics", count: getBlogPostsByCategory("prosthodontics").length, slug: "prosthodontics" },
  { name: "Implantology", count: getBlogPostsByCategory("implantology").length, slug: "implantology" },
  { name: "Oral Surgery", count: getBlogPostsByCategory("oral-surgery").length, slug: "oral-surgery" },
  { name: "Restorative Dentistry", count: getBlogPostsByCategory("restorative-dentistry").length, slug: "restorative-dentistry" },
  { name: "Endodontics", count: getBlogPostsByCategory("endodontics").length, slug: "endodontics" },
  { name: "Cosmetic Dentistry", count: getBlogPostsByCategory("cosmetic-dentistry").length, slug: "cosmetic-dentistry" },
  { name: "Orthodontics", count: getBlogPostsByCategory("orthodontics").length, slug: "orthodontics" },
  { name: "Emergency Dentistry", count: getBlogPostsByCategory("emergency-dentistry").length, slug: "emergency-dentistry" },
  { name: "Pediatric Dentistry", count: getBlogPostsByCategory("pediatric-dentistry").length, slug: "pediatric-dentistry" },
]

export default function BlogClient() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const postsPerPage = 12

  // Use REAL blog posts from file system
  const allPosts = useMemo(() => {
    return allBlogPosts.map(post => ({
      ...post,
      id: post.slug
    }))
  }, [])

  // Filter posts by category and search
  const filteredPosts = useMemo(() => {
    let filtered = allPosts
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(post => 
        post.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory
      )
    }
    
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    return filtered
  }, [allPosts, selectedCategory, searchQuery])

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#54CAD3]/5 to-[#005f73]/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-[#54CAD3] text-[#005f73]">
            {allBlogPosts.length}+ Expert Articles
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-[#005f73] mb-6">
            Dental Health Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Explore our comprehensive library of {allBlogPosts.length}+ unique dental health articles. Expert advice from Dr. Rockson Samuel 
            on every dental topic from prevention to advanced treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative max-w-md mx-auto w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${allBlogPosts.length}+ unique articles...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#005f73]">
                {selectedCategory === "all" ? "All Articles" : allCategories.find(c => c.slug === selectedCategory)?.name}
                <span className="text-gray-500 text-lg ml-2">({filteredPosts.length})</span>
              </h2>
              <div className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </div>
            </div>

            {currentPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {currentPosts.map((post) => (
                    <ModernCard key={post.id} className="p-6 hover:shadow-xl transition-all duration-300 group">
                      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                      </div>
                      <Badge className="bg-[#54CAD3]/10 text-[#005f73] mb-3">{post.category}</Badge>
                      <h3 className="text-lg font-bold text-[#005f73] mb-3 group-hover:text-[#54CAD3] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString("en-IN")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" className="w-full border-[#54CAD3] text-[#005f73] bg-transparent hover:bg-[#54CAD3] hover:text-white">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </ModernCard>
                  ))}
                </div>

                {/* Enhanced Pagination */}
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
                    
                    {/* Page numbers */}
                    <div className="flex items-center gap-1">
                      {currentPage > 3 && (
                        <>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handlePageChange(1)}
                          >
                            1
                          </Button>
                          <span className="px-2">...</span>
                        </>
                      )}
                      
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const pageNum = Math.max(1, currentPage - 2) + i
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
                      
                      {currentPage < totalPages - 2 && (
                        <>
                          <span className="px-2">...</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handlePageChange(totalPages)}
                          >
                            {totalPages}
                          </Button>
                        </>
                      )}
                    </div>
                    
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
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <ModernCard className="p-6">
              <h3 className="text-lg font-bold text-[#005f73] mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Categories
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {allCategories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => handleCategoryChange(category.slug)}
                    className={`w-full flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                      selectedCategory === category.slug
                        ? "bg-[#54CAD3]/10 text-[#005f73] font-semibold"
                        : "hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    <span>{category.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </ModernCard>

            {/* Quick Stats */}
            <ModernCard className="p-6 bg-gradient-to-r from-[#54CAD3]/10 to-[#005f73]/10">
              <h3 className="text-lg font-bold text-[#005f73] mb-4">Blog Statistics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Total Articles</span>
                  <span className="text-2xl font-bold text-[#005f73]">{allBlogPosts.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Categories</span>
                  <span className="text-2xl font-bold text-[#005f73]">11</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">All Unique</span>
                  <span className="text-lg font-bold text-[#54CAD3]">100%</span>
                </div>
              </div>
            </ModernCard>

            {/* Contact CTA */}
            <ModernCard className="p-6 text-center">
              <h3 className="text-lg font-bold text-[#005f73] mb-4">Need Dental Care?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Schedule your appointment with Dr. Rockson Samuel today for expert dental care.
              </p>
              <Button className="w-full btn-gradient mb-3" asChild>
                <a href="tel:7010650063">Call: 7010650063</a>
              </Button>
              <Button variant="outline" className="w-full border-[#54CAD3] text-[#005f73] bg-transparent" asChild>
                <Link href="/contact">Book Online</Link>
              </Button>
            </ModernCard>
          </div>
        </div>
      </div>
    </div>
  )
}
