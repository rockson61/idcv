import { Question } from '@/lib/data/ask-dentist-questions'

// Service-related keywords and their corresponding service pages
const serviceKeywords = {
  'root canal': 'root-canal-treatment',
  'rct': 'root-canal-treatment',
  'endodontic': 'root-canal-treatment',
  'implant': 'dental-implants',
  'implants': 'dental-implants',
  'tooth replacement': 'dental-implants',
  'braces': 'orthodontics',
  'orthodontic': 'orthodontics',
  'invisalign': 'orthodontics',
  'teeth straightening': 'orthodontics',
  'whitening': 'cosmetic-dentistry',
  'veneers': 'cosmetic-dentistry',
  'cosmetic': 'cosmetic-dentistry',
  'filling': 'general-dentistry',
  'cavity': 'general-dentistry',
  'cleaning': 'general-dentistry',
  'checkup': 'general-dentistry',
  'gum disease': 'periodontics',
  'periodontal': 'periodontics',
  'gingivitis': 'periodontics',
  'extraction': 'oral-surgery',
  'wisdom tooth': 'oral-surgery',
  'surgery': 'oral-surgery'
}

// Condition-related keywords and their corresponding condition pages
const conditionKeywords = {
  'tooth decay': 'tooth-decay',
  'cavity': 'tooth-decay',
  'caries': 'tooth-decay',
  'gum disease': 'gum-disease',
  'periodontal': 'gum-disease',
  'gingivitis': 'gum-disease',
  'sensitivity': 'tooth-sensitivity',
  'sensitive teeth': 'tooth-sensitivity',
  'bad breath': 'bad-breath',
  'halitosis': 'bad-breath',
  'dry mouth': 'dry-mouth',
  'xerostomia': 'dry-mouth'
}

// Add internal links to content
export function addInternalLinks(content: string): string {
  let enhancedContent = content

  // Add service links
  Object.entries(serviceKeywords).forEach(([keyword, slug]) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
    enhancedContent = enhancedContent.replace(regex, (match) => {
      return `<a href="/services/${slug}" class="text-teal-600 hover:text-teal-700 font-medium underline">${match}</a>`
    })
  })

  // Add condition links
  Object.entries(conditionKeywords).forEach(([keyword, slug]) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
    enhancedContent = enhancedContent.replace(regex, (match) => {
      return `<a href="/conditions/${slug}" class="text-blue-600 hover:text-blue-700 font-medium underline">${match}</a>`
    })
  })

  return enhancedContent
}

// Get related services based on content
export function getRelatedServices(content: string): Array<{name: string, slug: string, description: string}> {
  const relatedServices: Array<{name: string, slug: string, description: string}> = []
  const contentLower = content.toLowerCase()

  // Check for service-related keywords
  if (contentLower.includes('root canal') || contentLower.includes('rct') || contentLower.includes('endodontic')) {
    relatedServices.push({
      name: 'Root Canal Treatment',
      slug: 'root-canal-treatment',
      description: 'Pain-free root canal treatment with modern techniques'
    })
  }

  if (contentLower.includes('implant') || contentLower.includes('tooth replacement')) {
    relatedServices.push({
      name: 'Dental Implants',
      slug: 'dental-implants',
      description: 'Permanent tooth replacement solution'
    })
  }

  if (contentLower.includes('braces') || contentLower.includes('orthodontic') || contentLower.includes('invisalign')) {
    relatedServices.push({
      name: 'Orthodontics',
      slug: 'orthodontics',
      description: 'Teeth straightening with modern braces and aligners'
    })
  }

  if (contentLower.includes('whitening') || contentLower.includes('veneers') || contentLower.includes('cosmetic')) {
    relatedServices.push({
      name: 'Cosmetic Dentistry',
      slug: 'cosmetic-dentistry',
      description: 'Transform your smile with cosmetic treatments'
    })
  }

  if (contentLower.includes('filling') || contentLower.includes('cavity') || contentLower.includes('cleaning')) {
    relatedServices.push({
      name: 'General Dentistry',
      slug: 'general-dentistry',
      description: 'Comprehensive dental care and preventive treatments'
    })
  }

  if (contentLower.includes('gum disease') || contentLower.includes('periodontal') || contentLower.includes('gingivitis')) {
    relatedServices.push({
      name: 'Periodontics',
      slug: 'periodontics',
      description: 'Gum disease treatment and periodontal care'
    })
  }

  if (contentLower.includes('extraction') || contentLower.includes('wisdom tooth') || contentLower.includes('surgery')) {
    relatedServices.push({
      name: 'Oral Surgery',
      slug: 'oral-surgery',
      description: 'Tooth extraction and oral surgical procedures'
    })
  }

  // Remove duplicates and limit to 4 services
  const uniqueServices = relatedServices.filter((service, index, self) => 
    index === self.findIndex(s => s.slug === service.slug)
  ).slice(0, 4)

  return uniqueServices
}

// Get related questions based on tags and content
export function getRelatedQuestions(currentSlug: string, tags: string[]): Question[] {
  // This would typically fetch from a database
  // For now, we'll return a mock implementation
  return []
}

// Get related conditions based on content
export function getRelatedConditions(content: string): Array<{name: string, slug: string, description: string}> {
  const relatedConditions: Array<{name: string, slug: string, description: string}> = []
  const contentLower = content.toLowerCase()

  if (contentLower.includes('tooth decay') || contentLower.includes('cavity') || contentLower.includes('caries')) {
    relatedConditions.push({
      name: 'Tooth Decay',
      slug: 'tooth-decay',
      description: 'Learn about tooth decay prevention and treatment'
    })
  }

  if (contentLower.includes('gum disease') || contentLower.includes('periodontal') || contentLower.includes('gingivitis')) {
    relatedConditions.push({
      name: 'Gum Disease',
      slug: 'gum-disease',
      description: 'Understanding gum disease and its treatment'
    })
  }

  if (contentLower.includes('sensitivity') || contentLower.includes('sensitive teeth')) {
    relatedConditions.push({
      name: 'Tooth Sensitivity',
      slug: 'tooth-sensitivity',
      description: 'Managing tooth sensitivity and discomfort'
    })
  }

  if (contentLower.includes('bad breath') || contentLower.includes('halitosis')) {
    relatedConditions.push({
      name: 'Bad Breath',
      slug: 'bad-breath',
      description: 'Causes and treatment of bad breath'
    })
  }

  if (contentLower.includes('dry mouth') || contentLower.includes('xerostomia')) {
    relatedConditions.push({
      name: 'Dry Mouth',
      slug: 'dry-mouth',
      description: 'Understanding and treating dry mouth'
    })
  }

  return relatedConditions.slice(0, 3)
}

// Generate internal link suggestions for content
export function generateInternalLinkSuggestions(content: string): Array<{text: string, href: string, type: 'service' | 'condition' | 'question'}> {
  const suggestions: Array<{text: string, href: string, type: 'service' | 'condition' | 'question'}> = []
  const contentLower = content.toLowerCase()

  // Service suggestions
  Object.entries(serviceKeywords).forEach(([keyword, slug]) => {
    if (contentLower.includes(keyword)) {
      suggestions.push({
        text: keyword,
        href: `/services/${slug}`,
        type: 'service'
      })
    }
  })

  // Condition suggestions
  Object.entries(conditionKeywords).forEach(([keyword, slug]) => {
    if (contentLower.includes(keyword)) {
      suggestions.push({
        text: keyword,
        href: `/conditions/${slug}`,
        type: 'condition'
      })
    }
  })

  return suggestions.slice(0, 5) // Limit to 5 suggestions
}