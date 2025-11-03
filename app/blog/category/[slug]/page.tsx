import { notFound } from "next/navigation"
import { allBlogPosts, BlogPost, getBlogPostsByCategory } from "@/lib/data/blog-posts"
import CategoryClient from "../CategoryClient"

export const dynamic = "force-dynamic"

const categoryConfig: Record<string, { name: string; description: string }> = {
  all: {
    name: "All Posts",
    description: "Browse all dental health articles from Dr. Rockson Samuel",
  },
  "periodontics": {
    name: "Periodontics",
    description: "Comprehensive guides on gum health, gum disease treatment, and periodontal care",
  },
  "preventive-dentistry": {
    name: "Preventive Dentistry",
    description: "Prevention tips, dental hygiene, checkups, and maintaining oral health",
  },
  "prosthodontics": {
    name: "Prosthodontics",
    description: "Articles on crowns, bridges, dentures, and prosthodontic restorations",
  },
  "restorative-dentistry": {
    name: "Restorative Dentistry",
    description: "Expert advice on fillings, inlays, onlays, and tooth restoration",
  },
  "implantology": {
    name: "Implantology",
    description: "Complete guides on dental implants, bone grafting, and implant procedures",
  },
  "orthodontics": {
    name: "Orthodontics",
    description: "Expert articles on braces, Invisalign, teeth alignment, and orthodontic treatments",
  },
  "oral-surgery": {
    name: "Oral Surgery",
    description: "Surgical procedures, wisdom teeth removal, extractions, and surgical care",
  },
  "emergency-dentistry": {
    name: "Emergency Dentistry",
    description: "Immediate care for dental emergencies, trauma, and urgent dental issues",
  },
  "endodontics": {
    name: "Endodontics",
    description: "Everything about root canal treatment, pulp infections, and endodontic procedures",
  },
  "cosmetic-dentistry": {
    name: "Cosmetic Dentistry",
    description: "Transform your smile with teeth whitening, veneers, and cosmetic procedures",
  },
  "pediatric-dentistry": {
    name: "Pediatric Dentistry",
    description: "Children's dental health, pediatric treatments, and family dentistry",
  },
}

function preparePosts(slug: string): BlogPost[] {
  if (slug === "all") {
    return allBlogPosts
  }
  return getBlogPostsByCategory(slug)
}

function getCategoryCounts(): Array<{ name: string; slug: string; count: number }> {
  return Object.entries(categoryConfig).map(([slug, meta]) => ({
    slug,
    name: meta.name,
    count: slug === "all" ? allBlogPosts.length : getBlogPostsByCategory(slug).length,
  }))
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categorySlug = params.slug
  const category = categoryConfig[categorySlug]

  if (!category) {
    notFound()
  }

  const posts = preparePosts(categorySlug)
  const categories = getCategoryCounts()

  return (
    <CategoryClient
      categorySlug={categorySlug}
      category={category}
      posts={posts}
      categories={categories}
    />
  )
}
