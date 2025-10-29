import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const relatedPosts = [
  {
    title: "Understanding Root Canal Treatment",
    image: "https://images.pexels.com/photos/3845751/pexels-photo-3845751.jpeg",
    excerpt: "Learn about the root canal procedure, recovery, and aftercare instructions.",
    category: "Treatments",
    slug: "understanding-root-canal-treatment",
  },
  {
    title: "Signs You May Need a Root Canal",
    image: "https://images.pexels.com/photos/3845747/pexels-photo-3845747.jpeg",
    excerpt: "Identify common symptoms that indicate you might need root canal therapy.",
    category: "Conditions",
    slug: "signs-you-may-need-root-canal",
  },
  {
    title: "Post Root Canal Care Tips",
    image: "https://images.pexels.com/photos/3845743/pexels-photo-3845743.jpeg",
    excerpt: "Essential care instructions to follow after your root canal procedure.",
    category: "Dental Care",
    slug: "post-root-canal-care-tips",
  },
]

export function RelatedPosts() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Card key={post.slug} className="group">
            <CardHeader>
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <CardTitle className="text-lg">
                <Link href={`/blog/${post.slug}`} className="group-hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm text-primary font-medium inline-flex items-center hover:underline"
              >
                Read More
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
