"use client"

import { useState, useMemo, use } from "react"
import { ModernCard } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Search, Tag, ChevronLeft, ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { allBlogPosts, getBlogPostsByCategory } from "@/lib/data/blog-posts"

// Category configuration with ACTUAL counts from real data
const categoryConfig: { [key: string]: { name: string; description: string } } = {
  "all": { 
    name: "All Posts", 
    description: "Browse all dental health articles from Dr. Rockson Samuel" 
  },
  "periodontics": { 
    name: "Periodontics", 
    description: "Comprehensive guides on gum health, gum disease treatment, and periodontal care" 
  },
  "preventive-dentistry": { 
    name: "Preventive Dentistry", 
    description: "Prevention tips, dental hygiene, checkups, and maintaining oral health" 
  },
  "prosthodontics": { 
    name: "Prosthodontics", 
    description: "Articles on crowns, bridges, dentures, and prosthodontic restorations" 
  },
  "restorative-dentistry": { 
    name: "Restorative Dentistry", 
    description: "Expert advice on fillings, inlays, onlays, and tooth restoration" 
  },
  "implantology": { 
    name: "Implantology", 
    description: "Complete guides on dental implants, bone grafting, and implant procedures" 
  },
  "orthodontics": { 
    name: "Orthodontics", 
    description: "Expert articles on braces, Invisalign, teeth alignment, and orthodontic treatments" 
  },
  "oral-surgery": { 
    name: "Oral Surgery", 
    description: "Surgical procedures, wisdom teeth removal, extractions, and surgical care" 
  },
  "emergency-dentistry": { 
    name: "Emergency Dentistry", 
    description: "Immediate care for dental emergencies, trauma, and urgent dental issues" 
  },
  "endodontics": { 
    name: "Endodontics", 
    description: "Everything about root canal treatment, pulp infections, and endodontic procedures" 
  },
  "cosmetic-dentistry": { 
    name: "Cosmetic Dentistry", 
    description: "Transform your smile with teeth whitening, veneers, and cosmetic procedures" 
  },
  "pediatric-dentistry": { 
    name: "Pediatric Dentistry", 
    description: "Children's dental health, pediatric treatments, and family dentistry" 
  },
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: categorySlug } = use(params)
  const category = categoryConfig[categorySlug]

  if (!category) {
    notFound()
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const postsPerPage = 12

  // Get real posts for this category
  const categoryPosts = useMemo(() => {
    return getBlogPostsByCategory(categorySlug).map(post => ({
      ...post,
      id: post.slug
    }))
  }, [categorySlug])

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return categoryPosts
    return categoryPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [categoryPosts, searchQuery])

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Get all categories with actual counts
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#54CAD3]/5 to-[#005f73]/5">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#54CAD3] flex items-center gap-1">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#54CAD3]">Blog</Link>
          <span>/</span>
          <span className="text-[#005f73] font-semibold">{category.name}</span>
        </div>
      </div>

      {/* Category Header */}
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 border-[#54CAD3] text-[#005f73]">
            {categoryPosts.length} Articles
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-[#005f73] mb-6">
            {category.name}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {category.description}
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={`Search ${category.name} articles...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Posts */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#005f73]">
                {filteredPosts.length} Articles
              </h2>
              <div className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </div>
            </div>

            {currentPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found matching your search.</p>
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

                {/* Pagination */}
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

          {/* Sidebar */}
          <div className="space-y-8">
            {/* All Categories */}
            <ModernCard className="p-6">
              <h3 className="text-lg font-bold text-[#005f73] mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                All Categories
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {allCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={cat.slug === "all" ? "/blog" : `/blog/category/${cat.slug}`}
                    className={`block w-full flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                      categorySlug === cat.slug
                        ? "bg-[#54CAD3]/10 text-[#005f73] font-semibold"
                        : "hover:bg-gray-50 text-gray-600"
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

            {/* Contact CTA */}
            <ModernCard className="p-6 text-center">
              <h3 className="text-lg font-bold text-[#005f73] mb-4">Need Expert Care?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Schedule your appointment with Dr. Rockson Samuel for {category.name.toLowerCase()} treatment.
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
