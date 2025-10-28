#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const categories = [
  'oral-hygiene-maintenance',
  'tooth-pain-sensitivity',
  'tooth-decay-cavities',
  'pediatric-dentistry',
  'gum-diseases',
  'periodontitis',
  'orthodontics-alignment',
  'diagnostic-planning',
  'restorative-dentistry',
  'bridges-dentures',
  'cosmetic-dentistry',
  'extractions-implants',
  'oral-surgeries',
  'wisdom-teeth',
  'tooth-damage-trauma',
  'oral-infections',
  'smoking-related'
];

function toTitleCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const template = (category) => `import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ArrowRight, Tag } from 'lucide-react'
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from '@/components/ui/modern-card'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: '${toTitleCase(category)} | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on ${toTitleCase(category).toLowerCase()} by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: '${toTitleCase(category).toLowerCase()}, dental blog, oral health, vellore dentist',
}

export default function ${category.replace(/-/g, '')}CategoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Blog', href: '/blog' },
              { title: '${toTitleCase(category)}' }
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-teal-100 text-teal-700 text-lg px-4 py-2">
            <Tag className="w-5 h-5 inline mr-2" />
            Blog Category
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ${toTitleCase(category)}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert articles and guides on ${toTitleCase(category).toLowerCase()} by Dr. Rockson Samuel
          </p>
        </div>

        <ModernCard>
          <ModernCardHeader>
            <ModernCardTitle>Articles in this Category</ModernCardTitle>
          </ModernCardHeader>
          <ModernCardContent>
            <p className="text-gray-600 mb-6">
              Explore our comprehensive collection of articles on ${toTitleCase(category).toLowerCase()}. 
              Each article is written by Dr. Rockson Samuel with evidence-based information and practical advice.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
            >
              <BookOpen className="w-5 h-5" />
              View All Blog Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ModernCardContent>
        </ModernCard>
      </div>
    </div>
  )
}
`;

let created = 0;

console.log('📂 Creating blog category pages...\n');

categories.forEach(category => {
  const dirPath = path.join(__dirname, '..', 'app', 'blog', 'category', category);
  const filePath = path.join(dirPath, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    console.log(`⏭️  Skipped: ${category}`);
    return;
  }
  
  try {
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(filePath, template(category));
    console.log(`✅ Created: category/${category}`);
    created++;
  } catch (error) {
    console.error(`❌ Error: ${category}:`, error.message);
  }
});

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`✅ Created ${created} blog category pages`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

