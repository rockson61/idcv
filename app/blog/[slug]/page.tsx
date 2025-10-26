import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { CalendarDays, Clock, Tag, ChevronRight, MapPin, BookOpen } from "lucide-react"
import { HeadingProcessor } from "@/components/heading-processor"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  // Sample data - in a real app, this would fetch from an API or database
  return {
    title: "Complete Guide to Root Canal Treatment: What to Expect",
    slug: "complete-guide-root-canal-treatment",
    publishDate: "2023-11-15",
    readTime: "8 min read",
    featuredImage: "/placeholder.svg?height=600&width=1200",
    excerpt:
      "Learn everything you need to know about root canal treatment, from diagnosis to recovery, and why modern techniques make it virtually painless.",
    content: `
      <h2 id="what-is-root-canal">What is a Root Canal Treatment?</h2>
      <p>A root canal treatment is a dental procedure designed to save a tooth that is severely infected or decayed. The procedure involves removing the damaged area of the tooth (the pulp), cleaning and disinfecting it, then filling and sealing it.</p>
      
      <p>The term "root canal" comes from cleaning of the canals inside the tooth's root. Contrary to popular belief, modern root canal treatments are relatively painless and similar to having a filling placed.</p>
      
      <h2 id="when-is-it-needed">When is a Root Canal Treatment Needed?</h2>
      <p>You might need a root canal if you experience:</p>
      <ul>
        <li>Severe toothache pain when chewing or applying pressure</li>
        <li>Prolonged sensitivity to hot or cold temperatures</li>
        <li>Discoloration (darkening) of the tooth</li>
        <li>Swelling and tenderness in nearby gums</li>
        <li>Persistent or recurring pimple on the gums</li>
      </ul>
      
      <h3 id="causes-of-pulp-damage">Common Causes of Pulp Damage</h3>
      <p>The tooth's pulp can become damaged due to:</p>
      <ul>
        <li>Deep decay due to untreated cavity</li>
        <li>Repeated dental procedures on the same tooth</li>
        <li>Crack or chip in the tooth</li>
        <li>Injury to the tooth (even if there's no visible crack)</li>
        <li>Severe gum disease</li>
      </ul>
      
      <h2 id="procedure-steps">The Root Canal Procedure: Step by Step</h2>
      <p>A root canal procedure typically involves the following steps:</p>
      
      <h3 id="step-1-examination">Step 1: Examination and X-ray</h3>
      <p>Your dentist will examine the affected tooth and take X-rays to determine the extent of the infection and the shape of your root canals.</p>
      
      <h3 id="step-2-anesthesia">Step 2: Local Anesthesia</h3>
      <p>Local anesthesia is administered to numb the area around the affected tooth. You'll remain awake during the procedure, but you shouldn't feel any pain.</p>
      
      <h3 id="step-3-pulp-removal">Step 3: Pulp Removal</h3>
      <p>An access hole is drilled into the tooth, and the diseased pulp, bacteria, and debris are removed using special tools.</p>
      
      <h3 id="step-4-cleaning">Step 4: Cleaning and Shaping</h3>
      <p>The root canals are thoroughly cleaned, disinfected, and shaped to prepare them for the filling material.</p>
      
      <h3 id="step-5-filling">Step 5: Filling the Canals</h3>
      <p>The cleaned canals are filled with a rubber-like material called gutta-percha, which is sealed in place with adhesive cement.</p>
      
      <h3 id="step-6-restoration">Step 6: Final Restoration</h3>
      <p>A crown or other restoration is usually placed on the tooth to protect it and restore its full function.</p>
      
      <h2 id="recovery-aftercare">Recovery and Aftercare</h2>
      <p>Most patients can return to their normal activities the day after the procedure. Some tenderness is normal for a few days. Your dentist may recommend:</p>
      <ul>
        <li>Taking over-the-counter pain medications as needed</li>
        <li>Avoiding chewing on the treated tooth until restoration is complete</li>
        <li>Maintaining good oral hygiene with regular brushing and flossing</li>
        <li>Scheduling follow-up appointments to monitor healing</li>
      </ul>
      
      <h2 id="myths-facts">Root Canal Myths vs. Facts</h2>
      <p>There are many misconceptions about root canal treatments. Let's address some common myths:</p>
      
      <h3 id="myth-1">Myth: Root canals are extremely painful</h3>
      <p>Fact: With modern techniques and anesthesia, most patients report that the procedure is no more uncomfortable than having a filling placed.</p>
      
      <h3 id="myth-2">Myth: It's better to extract the tooth</h3>
      <p>Fact: Saving your natural tooth is almost always the best option. Nothing artificial can completely replace the look and function of a natural tooth.</p>
      
      <h3 id="myth-3">Myth: Root canals cause illness</h3>
      <p>Fact: There is no scientific evidence linking root canal-treated teeth to disease elsewhere in the body. This myth is based on long-debunked research from the early 1900s.</p>
      
      <h2 id="faq">Frequently Asked Questions</h2>
      <div itemScope itemType="https://schema.org/FAQPage">
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 itemProp="name" id="faq-1">How long does a root canal take?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text">Most root canal treatments can be completed in one or two appointments, each lasting 60-90 minutes. Complex cases may require additional visits.</p>
          </div>
        </div>
        
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 itemProp="name" id="faq-2">How much does a root canal cost?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text">The cost varies depending on the complexity of the case and which tooth is affected. Molars generally cost more than front teeth. Dental insurance typically covers a portion of the cost.</p>
          </div>
        </div>
        
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 itemProp="name" id="faq-3">How long does a root canal last?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text">With proper care, a tooth that has had a root canal can last a lifetime. The most important factors are maintaining good oral hygiene and getting regular dental check-ups.</p>
          </div>
        </div>
      </div>
    `,
    author: {
      name: "Dr. Arun Sharma",
      title: "Senior Dental Surgeon",
      bio: "Dr. Arun Sharma is a senior dental surgeon with over 15 years of experience in endodontics and restorative dentistry. He completed his BDS from Tamil Nadu Dr. M.G.R. Medical University and his MDS in Conservative Dentistry and Endodontics from Saveetha Dental College.",
      image: "/placeholder.svg?height=150&width=150",
    },
    reviewedBy: {
      name: "Dr. Priya Patel",
      title: "Endodontist",
      bio: "Dr. Priya Patel is a specialist endodontist with a focus on minimally invasive root canal treatments. She has published several research papers on modern endodontic techniques and is a member of the Indian Endodontic Society.",
      image: "/placeholder.svg?height=150&width=150",
    },
    references: [
      {
        title: "American Association of Endodontists: Root Canal Explained",
        url: "https://www.aae.org/patients/root-canal-treatment/what-is-a-root-canal/",
      },
      {
        title: "Journal of Endodontics: Success Rates of Root Canal Treatment",
        url: "https://www.jendodon.com/",
      },
      {
        title: "International Endodontic Journal: Modern Techniques in Root Canal Treatment",
        url: "https://onlinelibrary.wiley.com/journal/13652591",
      },
    ],
    categories: ["Endodontics", "Dental Procedures", "Oral Health"],
    tags: ["root canal", "endodontic treatment", "tooth pain", "dental infection"],
    relatedArticles: [
      {
        title: "5 Signs You Might Need a Root Canal",
        slug: "signs-you-might-need-root-canal",
        excerpt: "Learn to recognize the early warning signs that might indicate you need a root canal treatment.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Root Canal vs. Extraction: Which is Right for You?",
        slug: "root-canal-vs-extraction",
        excerpt: "Understand the pros and cons of saving your tooth with a root canal versus extracting it.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Advances in Root Canal Technology",
        slug: "advances-root-canal-technology",
        excerpt:
          "Discover how modern technology has made root canal treatments faster, more effective, and more comfortable.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }
}

// This would be used to fetch all blog categories
const getAllCategories = () => {
  return [
    { name: "Endodontics", count: 8, slug: "endodontics" },
    { name: "Cosmetic Dentistry", count: 12, slug: "cosmetic-dentistry" },
    { name: "Pediatric Dentistry", count: 6, slug: "pediatric-dentistry" },
    { name: "Oral Health", count: 15, slug: "oral-health" },
    { name: "Dental Procedures", count: 10, slug: "dental-procedures" },
    { name: "Preventive Care", count: 9, slug: "preventive-care" },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  return {
    title: `${post.title} | Indira Dental Clinic Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  const categories = getAllCategories()

  // Generate semantic internal links
  const internalLinks = [
    { title: "Root Canal Treatment", href: "/services/endodontics/root-canal-treatment" },
    { title: "Dental Crowns", href: "/services/restorative-dentistry/crowns" },
    { title: "Tooth Decay", href: "/conditions/tooth-decay" },
    { title: "Dental Infection", href: "/conditions/dental-infection" },
    { title: "Vellore Dental Services", href: "/in/tamil-nadu/vellore" },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <HeadingProcessor />

      {/* Top Navigation */}
      <div className="flex flex-wrap items-center justify-between mb-8">
        <div className="flex items-center text-sm text-gray-600 mb-4 md:mb-0">
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          {post.categories[0] && (
            <>
              <Link
                href={`/blog/category/${post.categories[0].toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-blue-600"
              >
                {post.categories[0]}
              </Link>
              <ChevronRight className="w-4 h-4 mx-1" />
            </>
          )}
          <span className="text-gray-800">{post.title}</span>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          View All Blogs
        </Link>
      </div>

      {/* Browse by Category */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-3">Browse by Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 rounded-full text-sm hover:bg-blue-50 hover:border-blue-200 transition-colors"
            >
              <Tag className="w-3 h-3 mr-1" />
              {category.name}
              <span className="ml-1 text-xs text-gray-500">({category.count})</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center mr-4 mb-2 md:mb-0">
            <CalendarDays className="w-4 h-4 mr-1" />
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <div className="flex items-center mr-4 mb-2 md:mb-0">
            <Clock className="w-4 h-4 mr-1" />
            <span>{post.readTime}</span>
          </div>

          <div className="flex items-center mb-2 md:mb-0">
            <MapPin className="w-4 h-4 mr-1" />
            <Link href="/in/tamil-nadu/vellore" className="hover:text-blue-600">
              Vellore
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, index) => (
            <Link
              key={index}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>

        <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-6">
          <Image
            src={post.featuredImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">{post.excerpt}</p>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none mb-10">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {/* Semantic Internal Linking */}
      <section className="mb-10 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Related Services & Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {internalLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex items-center p-3 bg-white rounded border border-blue-100 hover:border-blue-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Author Bio */}
      <section className="mb-10 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">About the Author</h2>
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <Image
              src={post.author.image || "/placeholder.svg"}
              alt={post.author.name}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">{post.author.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{post.author.title}</p>
            <p className="text-gray-700">{post.author.bio}</p>
          </div>
        </div>
      </section>

      {/* Medically Reviewed By */}
      <section className="mb-10 p-6 bg-green-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Medically Reviewed By</h2>
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <Image
              src={post.reviewedBy.image || "/placeholder.svg"}
              alt={post.reviewedBy.name}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">{post.reviewedBy.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{post.reviewedBy.title}</p>
            <p className="text-gray-700">{post.reviewedBy.bio}</p>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">References</h2>
        <ol className="list-decimal pl-5 space-y-2">
          {post.references.map((reference, index) => (
            <li key={index} className="text-gray-700">
              <a
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {reference.title}
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* Related Articles */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {post.relatedArticles.map((article, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-40">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">
                  <Link href={`/blog/${article.slug}`} className="hover:text-blue-600">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className="text-blue-600 text-sm font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Need Expert Dental Care?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our team of experienced dentists is ready to help you with any dental concerns. Schedule a consultation today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Call Now: +91 98765 43210
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
