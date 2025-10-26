import type { Metadata } from "next"
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight, Search, Tag, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Dental Health Blog | Tips & Advice | Dr. Rockson Samuel | Vellore",
  description:
    "Expert dental health tips, treatment guides, and oral care advice from Dr. Rockson Samuel. Stay informed about the latest dental treatments and maintain optimal oral health.",
  keywords: [
    "dental health blog",
    "oral care tips",
    "dental treatment guide",
    "teeth care advice",
    "dental health vellore",
    "Dr. Rockson Samuel blog",
  ],
}

const featuredPost = {
  id: 1,
  title: "Complete Guide to Root Canal Treatment: What You Need to Know",
  excerpt:
    "Everything you need to know about root canal treatment, from symptoms to recovery. Learn why this procedure can save your natural tooth and what to expect during treatment.",
  content: `Root canal treatment is one of the most misunderstood dental procedures, often causing unnecessary anxiety among patients. In reality, modern root canal therapy is a highly successful, virtually painless procedure that can save your natural tooth and eliminate pain.

## What is Root Canal Treatment?

Root canal treatment, also known as endodontic therapy, is a procedure designed to save a severely damaged or infected tooth. The treatment involves removing the infected or inflamed pulp (the soft tissue inside the tooth), cleaning and disinfecting the root canals, and then filling and sealing the space.

## When Do You Need Root Canal Treatment?

Several symptoms may indicate the need for root canal treatment:

- Severe toothache when chewing or applying pressure
- Prolonged sensitivity to hot or cold temperatures
- Discoloration of the tooth
- Swelling and tenderness in nearby gums
- A persistent or recurring pimple on the gums

## The Root Canal Procedure

At Indira Dental Clinic, Dr. Rockson Samuel uses advanced techniques to ensure your comfort throughout the procedure:

### Step 1: Examination and X-rays
We begin with a thorough examination and digital X-rays to assess the tooth and surrounding bone structure.

### Step 2: Local Anesthesia
The area around the tooth is numbed with local anesthesia to ensure you're comfortable throughout the procedure.

### Step 3: Access Hole
A small access hole is drilled into the crown of the tooth to reach the pulp chamber.

### Step 4: Pulp Removal
The infected or inflamed pulp is carefully removed from the pulp chamber and root canals.

### Step 5: Cleaning and Shaping
The root canals are cleaned, disinfected, and shaped to prepare them for filling.

### Step 6: Filling
The cleaned canals are filled with a biocompatible material called gutta-percha.

### Step 7: Sealing
The access hole is sealed with a temporary or permanent filling.

### Step 8: Crown Placement
In most cases, a crown is placed over the treated tooth to restore its strength and appearance.

## Recovery and Aftercare

Recovery from root canal treatment is typically straightforward:

- Take prescribed medications as directed
- Avoid chewing on the treated tooth until permanent restoration
- Maintain good oral hygiene
- Attend follow-up appointments

## Success Rate and Benefits

Root canal treatment has a success rate of over 95%. Benefits include:

- Saves your natural tooth
- Eliminates pain and infection
- Prevents spread of infection
- More cost-effective than tooth extraction and replacement

## Why Choose Dr. Rockson Samuel for Root Canal Treatment?

- 15+ years of experience in endodontic procedures
- Advanced pain management techniques
- State-of-the-art equipment including rotary endodontics
- High success rate with minimal discomfort
- Comprehensive aftercare support

If you're experiencing tooth pain or have been told you need root canal treatment, don't delay. Contact Indira Dental Clinic today to schedule your consultation with Dr. Rockson Samuel.`,
  author: "Dr. Rockson Samuel",
  date: "2024-02-15",
  readTime: "8 min read",
  category: "Endodontics",
  tags: ["Root Canal", "Endodontics", "Tooth Pain", "Dental Treatment"],
  image: "/root-canal-procedure.png",
  featured: true,
}

const blogPosts = [
  {
    id: 2,
    title: "Dental Implants vs Dentures: Which is Right for You?",
    excerpt:
      "Comparing dental implants and dentures to help you make an informed decision about tooth replacement options.",
    author: "Dr. Rockson Samuel",
    date: "2024-02-10",
    readTime: "6 min read",
    category: "Dental Implants",
    tags: ["Dental Implants", "Dentures", "Tooth Replacement"],
    image: "/dental-implant-stages.png",
  },
  {
    id: 3,
    title: "5 Signs You Need to See a Dentist Immediately",
    excerpt:
      "Learn about the warning signs that indicate you need urgent dental care and shouldn't wait for your next appointment.",
    author: "Dr. Rockson Samuel",
    date: "2024-02-08",
    readTime: "4 min read",
    category: "Emergency Dentistry",
    tags: ["Emergency Care", "Dental Health", "Warning Signs"],
    image: "/emergency-dental.jpg",
  },
  {
    id: 4,
    title: "The Complete Guide to Teeth Whitening Options",
    excerpt:
      "Explore different teeth whitening methods, from professional treatments to at-home options, and find what works best for you.",
    author: "Dr. Rockson Samuel",
    date: "2024-02-05",
    readTime: "7 min read",
    category: "Cosmetic Dentistry",
    tags: ["Teeth Whitening", "Cosmetic Dentistry", "Smile Enhancement"],
    image: "/teeth-whitening.jpg",
  },
  {
    id: 5,
    title: "How to Care for Your Braces: A Complete Guide",
    excerpt: "Essential tips for maintaining oral hygiene and caring for your braces throughout orthodontic treatment.",
    author: "Dr. Rockson Samuel",
    date: "2024-02-01",
    readTime: "5 min read",
    category: "Orthodontics",
    tags: ["Braces", "Orthodontics", "Oral Hygiene"],
    image: "/traditional-braces.jpg",
  },
  {
    id: 6,
    title: "Preventing Gum Disease: Tips for Healthy Gums",
    excerpt: "Learn how to prevent gum disease with proper oral hygiene, diet, and regular dental care.",
    author: "Dr. Rockson Samuel",
    date: "2024-01-28",
    readTime: "6 min read",
    category: "Periodontics",
    tags: ["Gum Disease", "Prevention", "Oral Health"],
    image: "/gum-treatment.jpg",
  },
  {
    id: 7,
    title: "Children's Dental Health: A Parent's Guide",
    excerpt:
      "Everything parents need to know about maintaining their children's oral health from infancy through adolescence.",
    author: "Dr. Rockson Samuel",
    date: "2024-01-25",
    readTime: "8 min read",
    category: "Pediatric Dentistry",
    tags: ["Children's Dentistry", "Pediatric Care", "Parenting"],
    image: "/childrens-dental-exam.jpg",
  },
  {
    id: 8,
    title: "Understanding Dental Anxiety: How to Overcome Fear",
    excerpt:
      "Practical strategies to overcome dental anxiety and make your dental visits more comfortable and stress-free.",
    author: "Dr. Rockson Samuel",
    date: "2024-01-22",
    readTime: "5 min read",
    category: "Patient Care",
    tags: ["Dental Anxiety", "Patient Comfort", "Mental Health"],
    image: "/dental-checkup.png",
  },
  {
    id: 9,
    title: "The Importance of Regular Dental Checkups",
    excerpt:
      "Why regular dental visits are crucial for maintaining oral health and preventing serious dental problems.",
    author: "Dr. Rockson Samuel",
    date: "2024-01-18",
    readTime: "4 min read",
    category: "Preventive Care",
    tags: ["Dental Checkups", "Prevention", "Oral Health"],
    image: "/professional-dentist-portrait.png",
  },
]

const categories = [
  { name: "All Posts", count: 9, slug: "all" },
  { name: "General Dentistry", count: 3, slug: "general-dentistry" },
  { name: "Cosmetic Dentistry", count: 2, slug: "cosmetic-dentistry" },
  { name: "Orthodontics", count: 1, slug: "orthodontics" },
  { name: "Dental Implants", count: 1, slug: "dental-implants" },
  { name: "Emergency Care", count: 1, slug: "emergency-care" },
  { name: "Pediatric Dentistry", count: 1, slug: "pediatric-dentistry" },
]

const popularTags = [
  "Root Canal",
  "Dental Implants",
  "Teeth Whitening",
  "Braces",
  "Oral Health",
  "Prevention",
  "Emergency Care",
  "Cosmetic Dentistry",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#54CAD3]/5 to-[#005f73]/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-[#54CAD3] text-[#005f73]">
            Dental Health Blog
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-[#005f73] mb-6">Expert Dental Health Tips</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Stay informed about the latest dental treatments, oral health tips, and expert advice from Dr. Rockson
            Samuel. Your guide to maintaining optimal dental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent"
              />
            </div>
            <Button size="lg" className="btn-gradient">
              <TrendingUp className="w-5 h-5 mr-2" />
              Popular Posts
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 py-12 pb-16">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#005f73] mb-8 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2" />
            Featured Article
          </h2>
          <ModernCard className="p-8 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-[#54CAD3] text-white">{featuredPost.category}</Badge>
                  <Badge variant="outline">Featured</Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#005f73] mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString("en-IN")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.id}`}>
                  <Button className="btn-gradient">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ModernCard>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#005f73]">Latest Articles</h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                  <option>Latest</option>
                  <option>Most Popular</option>
                  <option>Most Read</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <ModernCard key={post.id} className="p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <Badge className="bg-[#54CAD3]/10 text-[#005f73] mb-3">{post.category}</Badge>
                  <h3 className="text-lg font-bold text-[#005f73] mb-3 group-hover:text-[#54CAD3] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full border-[#54CAD3] text-[#005f73] bg-transparent">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </ModernCard>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button size="sm" className="btn-gradient">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <ModernCard className="p-6">
              <h3 className="text-lg font-bold text-[#005f73] mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.slug} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <Link
                      href={`/blog/category/${category.slug}`}
                      className="text-gray-600 hover:text-[#54CAD3] transition-colors"
                    >
                      {category.name}
                    </Link>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </ModernCard>

            {/* Popular Tags */}
            <ModernCard className="p-6">
              <h3 className="text-lg font-bold text-[#005f73] mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-[#54CAD3] hover:text-white transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </ModernCard>

            {/* Newsletter Signup */}
            <ModernCard className="p-6 bg-gradient-to-r from-[#54CAD3]/10 to-[#005f73]/10">
              <h3 className="text-lg font-bold text-[#005f73] mb-4">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-4">
                Subscribe to our newsletter for the latest dental health tips and clinic updates.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent"
                />
                <Button className="w-full btn-gradient">Subscribe</Button>
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
