import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

const posts = [
  {
    title: "Complete Guide to Root Canal Treatment",
    image: "https://images.pexels.com/photos/3845751/pexels-photo-3845751.jpeg",
    excerpt: "Understanding the RCT procedure, recovery, and aftercare instructions.",
    category: "Treatments",
    subcategory: "Endodontic Procedures",
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "complete-guide-root-canal-treatment",
  },
  {
    title: "Understanding Gum Disease Prevention",
    image: "https://images.pexels.com/photos/3845747/pexels-photo-3845747.jpeg",
    excerpt: "Learn about the causes, symptoms, and prevention methods for periodontal disease.",
    category: "Conditions",
    subcategory: "Gum Diseases & Conditions",
    date: "2024-01-10",
    readTime: "7 min read",
    slug: "understanding-gum-disease-prevention",
  },
  {
    title: "The Benefits of Professional Teeth Whitening",
    image: "https://images.pexels.com/photos/3845741/pexels-photo-3845741.jpeg",
    excerpt: "Discover why professional teeth whitening is superior to over-the-counter options.",
    category: "Cosmetic Dentistry",
    subcategory: "Teeth Whitening",
    date: "2024-01-20",
    readTime: "6 min read",
    slug: "benefits-professional-teeth-whitening",
  },
  {
    title: "Invisalign vs Traditional Braces: Which is Right for You?",
    image: "https://images.pexels.com/photos/3779702/pexels-photo-3779702.jpeg",
    excerpt: "Compare the pros and cons of Invisalign and traditional braces to make an informed decision.",
    category: "Orthodontics",
    subcategory: "Teeth Alignment",
    date: "2024-01-25",
    readTime: "8 min read",
    slug: "invisalign-vs-traditional-braces",
  },
  {
    title: "The Importance of Regular Dental Check-ups",
    image: "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg",
    excerpt: "Learn why regular dental check-ups are crucial for maintaining optimal oral health.",
    category: "Preventive Care",
    subcategory: "Dental Check-ups",
    date: "2024-02-01",
    readTime: "5 min read",
    slug: "importance-regular-dental-checkups",
  },
  {
    title: "Understanding Dental Implants: Procedure and Benefits",
    image: "https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg",
    excerpt: "Explore the dental implant procedure and its long-term benefits for your oral health.",
    category: "Restorative Dentistry",
    subcategory: "Dental Implants",
    date: "2024-02-05",
    readTime: "7 min read",
    slug: "understanding-dental-implants",
  },
  {
    title: "Tips for Managing Dental Anxiety",
    image: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg",
    excerpt: "Practical strategies to overcome dental anxiety and ensure a comfortable dental visit.",
    category: "Patient Care",
    subcategory: "Dental Anxiety",
    date: "2024-02-10",
    readTime: "6 min read",
    slug: "tips-managing-dental-anxiety",
  },
  {
    title: "The Role of Diet in Maintaining Healthy Teeth",
    image: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg",
    excerpt: "Discover how your diet affects your dental health and which foods to choose for stronger teeth.",
    category: "Oral Health",
    subcategory: "Nutrition",
    date: "2024-02-15",
    readTime: "5 min read",
    slug: "role-of-diet-in-dental-health",
  },
  {
    title: "Pediatric Dentistry: Caring for Your Child's Teeth",
    image: "https://images.pexels.com/photos/3779719/pexels-photo-3779719.jpeg",
    excerpt: "Essential tips for parents to ensure proper dental care for their children from infancy to adolescence.",
    category: "Pediatric Dentistry",
    subcategory: "Child Dental Care",
    date: "2024-02-20",
    readTime: "7 min read",
    slug: "pediatric-dentistry-caring-for-childs-teeth",
  },
  {
    title: "Advanced Cosmetic Dentistry Procedures",
    image: "https://images.pexels.com/photos/3845754/pexels-photo-3845754.jpeg",
    excerpt: "Explore cutting-edge cosmetic dentistry procedures to enhance your smile and boost confidence.",
    category: "Cosmetic Dentistry",
    subcategory: "Advanced Procedures",
    date: "2024-02-25",
    readTime: "8 min read",
    slug: "advanced-cosmetic-dentistry-procedures",
  },
  {
    title: "The Connection Between Oral Health and Overall Wellness",
    image: "https://images.pexels.com/photos/3779714/pexels-photo-3779714.jpeg",
    excerpt: "Understand the crucial link between your oral health and your body's overall well-being.",
    category: "Oral Health",
    subcategory: "General Health",
    date: "2024-03-01",
    readTime: "6 min read",
    slug: "oral-health-overall-wellness-connection",
  },
  {
    title: "Teeth Grinding: Causes, Effects, and Treatment Options",
    image: "https://images.pexels.com/photos/3779711/pexels-photo-3779711.jpeg",
    excerpt: "Learn about bruxism, its impact on your dental health, and available treatment options.",
    category: "Conditions",
    subcategory: "Bruxism",
    date: "2024-03-05",
    readTime: "7 min read",
    slug: "teeth-grinding-causes-effects-treatments",
  },
]

export function BlogPosts() {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.slug} className="group">
          <CardHeader>
            <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3845753/pexels-photo-3845753.jpeg"
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{post.category}</Badge>
              <Badge variant="outline">{post.subcategory}</Badge>
            </div>
            <CardTitle className="text-2xl group-hover:text-primary transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex items-center text-primary font-medium hover:underline"
            >
              Read More
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
