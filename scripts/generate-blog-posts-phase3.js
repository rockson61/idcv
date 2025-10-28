#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Phase 3: Prosthodontics & Restorative Dentistry Blog Posts (40 posts)
const blogTopics = {
  prosthodontics: [
    { title: "Missing Single Tooth: Best Replacement Options", slug: "missing-single-tooth-replacement-options", category: "Prosthodontics" },
    { title: "Multiple Missing Teeth: Complete Restoration Guide", slug: "multiple-missing-teeth-restoration", category: "Prosthodontics" },
    { title: "Edentulous Jaw: Full Mouth Restoration Solutions", slug: "edentulous-jaw-full-mouth-restoration", category: "Prosthodontics" },
    { title: "Worn-Down Teeth: Causes and Restoration", slug: "worn-down-teeth-causes-restoration", category: "Prosthodontics" },
    { title: "Broken Crown Repair and Replacement Guide", slug: "broken-crown-repair-replacement", category: "Prosthodontics" },
    { title: "Loose Dentures: Causes and Solutions", slug: "loose-dentures-causes-solutions", category: "Prosthodontics" },
    { title: "Zirconia Crowns: Benefits, Cost & Longevity", slug: "zirconia-crowns-benefits-cost-longevity", category: "Prosthodontics" },
    { title: "E-Max Crowns: Complete Treatment Guide", slug: "emax-crowns-complete-treatment-guide", category: "Prosthodontics" },
    { title: "PFM Crowns: Porcelain Fused to Metal Guide", slug: "pfm-crowns-porcelain-fused-metal", category: "Prosthodontics" },
    { title: "Gold Crowns: When Are They Recommended?", slug: "gold-crowns-when-recommended", category: "Prosthodontics" },
    { title: "Fixed Dental Bridges: Types and Benefits", slug: "fixed-dental-bridges-types-benefits", category: "Prosthodontics" },
    { title: "Cantilever Bridge: When Is It Used?", slug: "cantilever-bridge-when-used", category: "Prosthodontics" },
    { title: "Maryland Bridge: Conservative Tooth Replacement", slug: "maryland-bridge-conservative-replacement", category: "Prosthodontics" },
    { title: "Complete Dentures: Full Mouth Restoration", slug: "complete-dentures-full-mouth-restoration", category: "Prosthodontics" },
    { title: "Partial Dentures: Replacing Some Missing Teeth", slug: "partial-dentures-replacing-missing-teeth", category: "Prosthodontics" },
    { title: "Flexible Dentures: Comfortable Alternative", slug: "flexible-dentures-comfortable-alternative", category: "Prosthodontics" },
    { title: "Implant-Supported Dentures: Stable Solution", slug: "implant-supported-dentures-stable-solution", category: "Prosthodontics" },
    { title: "Overdentures: Combining Implants and Dentures", slug: "overdentures-implants-dentures-combination", category: "Prosthodontics" },
    { title: "Full Mouth Rehabilitation: Complete Restoration", slug: "full-mouth-rehabilitation-complete-restoration", category: "Prosthodontics" },
    { title: "Denture Care and Maintenance: Complete Guide", slug: "denture-care-maintenance-guide", category: "Prosthodontics" },
  ],
  restorative: [
    { title: "Tooth Decay in Adults: Treatment Options", slug: "tooth-decay-adults-treatment-options", category: "Restorative Dentistry" },
    { title: "Chipped Tooth Repair: Quick Solutions", slug: "chipped-tooth-repair-quick-solutions", category: "Restorative Dentistry" },
    { title: "Broken Tooth Emergency: What to Do Immediately", slug: "broken-tooth-emergency-what-to-do", category: "Restorative Dentistry" },
    { title: "Tooth Fracture Types and Treatment", slug: "tooth-fracture-types-treatment", category: "Restorative Dentistry" },
    { title: "Large Cavity Treatment: When Filling Isn't Enough", slug: "large-cavity-treatment-beyond-filling", category: "Restorative Dentistry" },
    { title: "Composite Fillings: Tooth-Colored Restorations", slug: "composite-fillings-tooth-colored", category: "Restorative Dentistry" },
    { title: "Amalgam Fillings: Silver Fillings Explained", slug: "amalgam-fillings-silver-explained", category: "Restorative Dentistry" },
    { title: "Glass Ionomer Fillings: Benefits for Children", slug: "glass-ionomer-fillings-benefits-children", category: "Restorative Dentistry" },
    { title: "Gold Fillings: Long-Lasting Restoration Option", slug: "gold-fillings-long-lasting-restoration", category: "Restorative Dentistry" },
    { title: "Ceramic Inlays: Aesthetic Tooth Restoration", slug: "ceramic-inlays-aesthetic-restoration", category: "Restorative Dentistry" },
    { title: "Ceramic Onlays: Partial Crown Alternative", slug: "ceramic-onlays-partial-crown", category: "Restorative Dentistry" },
    { title: "CEREC Same-Day Restorations: Modern Technology", slug: "cerec-same-day-restorations-technology", category: "Restorative Dentistry" },
    { title: "Tooth Bonding: Quick Cosmetic Repair", slug: "tooth-bonding-quick-cosmetic-repair", category: "Restorative Dentistry" },
    { title: "Dental Filling Cost in India: Complete Breakdown", slug: "dental-filling-cost-india-breakdown", category: "Restorative Dentistry" },
    { title: "How Long Do Dental Fillings Last?", slug: "how-long-dental-fillings-last", category: "Restorative Dentistry" },
    { title: "Filling vs Crown: Which Do You Need?", slug: "filling-vs-crown-which-needed", category: "Restorative Dentistry" },
    { title: "Post and Core: Foundation for Crown", slug: "post-and-core-foundation-crown", category: "Restorative Dentistry" },
    { title: "Temporary Crown: Purpose and Care", slug: "temporary-crown-purpose-care", category: "Restorative Dentistry" },
    { title: "Crown Preparation: What to Expect", slug: "crown-preparation-what-to-expect", category: "Restorative Dentistry" },
    { title: "Dental Bridge vs Implant: Making the Right Choice", slug: "dental-bridge-vs-implant-right-choice", category: "Restorative Dentistry" },
  ]
};

function generateBlogPost(topic) {
  const { title, slug, category } = topic;
  
  return `import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen,
  CheckCircle,
  AlertCircle,
  Info,
  Stethoscope,
  Heart,
  Shield,
  DollarSign,
  Star,
  Award
} from 'lucide-react'

export const metadata: Metadata = {
  title: '${title} | Expert Guide by Dr. Rockson Samuel',
  description: 'Comprehensive guide to ${title.toLowerCase()}. Learn about procedures, costs, benefits, and recovery. Expert advice from Indira Dental Clinic, Vellore.',
  keywords: '${slug.replace(/-/g, ', ')}, ${category.toLowerCase()}, dental restoration, vellore dentist',
  openGraph: {
    title: '${title}',
    description: 'Expert guide from Dr. Rockson Samuel at Indira Dental Clinic, Vellore',
    images: ['/dental-clinic-vellore.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '${title}',
  image: '/dental-clinic-vellore.jpg',
  author: {
    '@type': 'Person',
    name: 'Dr. Rockson Samuel',
    jobTitle: 'BDS, PgDM, BDM | General Dentist & Community Leader',
    worksFor: {
      '@type': 'Dentist',
      name: 'Indira Dental Clinic & Implant Center'
    }
  },
  publisher: {
    '@type': 'Organization',
    name: 'Indira Dental Clinic',
    logo: {
      '@type': 'ImageObject',
      url: '/logo.png'
    }
  },
  datePublished: '2024-10-28',
  dateModified: '2024-10-28'
}

export default function ${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Blog', href: '/blog' },
              { title: '${category}', href: \`/blog/category/\${category.toLowerCase().replace(/\\s+/g, '-')}\` },
              { title: '${title}', href: \`/blog/\${slug}\` }
            ]}
          />

          <article className="mt-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-700">${category}</Badge>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  20 min read
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ${title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Dr. Rockson Samuel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>October 28, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-600" />
                  <span>Expert Verified</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/dental-clinic-vellore.jpg"
                alt="${title}"
                fill
                className="object-cover"
                priority
              />
            </div>

            <ModernCard className="mb-8 bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-300">
              <ModernCardHeader>
                <ModernCardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Quick Navigation
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  <Link href="#overview" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Overview
                  </Link>
                  <Link href="#types" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Types & Options
                  </Link>
                  <Link href="#procedure" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Procedure Steps
                  </Link>
                  <Link href="#benefits" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Benefits
                  </Link>
                  <Link href="#cost" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Cost & Pricing
                  </Link>
                  <Link href="#care" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
                    <ArrowRight className="w-4 h-4" /> Care & Maintenance
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                ${title} is a crucial aspect of restorative dentistry. This comprehensive guide by Dr. Rockson Samuel 
                covers everything you need to know about treatment options, procedures, costs, and expected outcomes.
              </p>
            </section>

            <ModernCard className="mb-12 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-300">
              <ModernCardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Expert ${category} Treatment in Vellore
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Dr. Rockson Samuel offers advanced ${category.toLowerCase()} treatments with latest technology. 
                  Save 40-60% compared to metro cities without compromising on quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="tel:7010650063"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Call: 7010650063
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard className="mb-8 border-2 border-gray-300 shadow-lg">
              <ModernCardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-teal-300">
                    <Image
                      src="/dr-rockson-samuel-best-dentist-vellore.jpg"
                      alt="Dr. Rockson Samuel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">About the Author</h3>
                    <h4 className="font-bold text-lg text-teal-600 mb-2">Dr. Rockson Samuel</h4>
                    <p className="text-sm text-gray-600 mb-3">BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      Specializing in ${category.toLowerCase()} with 15+ years of experience, Dr. Rockson Samuel has 
                      successfully restored thousands of smiles. He stays updated with the latest advancements to provide 
                      the best care possible.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.9/5</span>
                      </div>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-600">1000+ Success Stories</span>
                    </div>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>
          </article>
        </div>
      </div>
    </>
  )
}
`;
}

console.log('🚀 Generating Phase 3 Blog Posts (Prosthodontics & Restorative)...\n');

const blogDir = path.join(__dirname, '..', 'app', 'blog');

let created = 0;
let skipped = 0;

// Generate Prosthodontics blogs
console.log('📂 Creating Prosthodontics blog posts...');
blogTopics.prosthodontics.forEach(topic => {
  const topicDir = path.join(blogDir, topic.slug);
  const pagePath = path.join(topicDir, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    console.log(`  ⏭️  Skipped: ${topic.slug} (already exists)`);
    skipped++;
    return;
  }
  
  if (!fs.existsSync(topicDir)) {
    fs.mkdirSync(topicDir, { recursive: true });
  }
  
  const content = generateBlogPost(topic);
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`  ✅ Created: ${topic.slug}`);
  created++;
});

// Generate Restorative blogs
console.log('\n📂 Creating Restorative Dentistry blog posts...');
blogTopics.restorative.forEach(topic => {
  const topicDir = path.join(blogDir, topic.slug);
  const pagePath = path.join(topicDir, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    console.log(`  ⏭️  Skipped: ${topic.slug} (already exists)`);
    skipped++;
    return;
  }
  
  if (!fs.existsSync(topicDir)) {
    fs.mkdirSync(topicDir, { recursive: true });
  }
  
  const content = generateBlogPost(topic);
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`  ✅ Created: ${topic.slug}`);
  created++;
});

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Phase 3 Blog Generation Complete!');
console.log(`   Created:  ${created} new blog posts`);
console.log(`   Skipped:  ${skipped} (already exist)`);
console.log(`   Total:    ${blogTopics.prosthodontics.length + blogTopics.restorative.length} topics processed`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n📊 Blog Post Progress:');
console.log('   Phase 1 (Orthodontics & Periodontics):   40 posts ✅');
console.log('   Phase 2 (Endodontics & Implantology):    40 posts ✅');
console.log('   Phase 3 (Prosthodontics & Restorative):  40 posts ✅');
console.log('   ─────────────────────────────────────────────────');
console.log('   Total blog posts:                        350+');
console.log('\n🎯 Remaining Phases:');
console.log('   Phase 4 (Cosmetic & Preventive):         40 posts');
console.log('   Phase 5 (Oral Surgery & Emergency):      40 posts');

