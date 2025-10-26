import { Question } from '@/lib/data/ask-dentist-questions'

// Service-related keywords and their corresponding service pages (Expanded for Semantic SEO)
const serviceKeywords = {
  // Root Canal & Endodontics
  'root canal treatment': '/services/root-canal-treatment',
  'root canal': '/services/root-canal-treatment',
  'RCT': '/services/root-canal-treatment',
  'endodontic treatment': '/services/endodontics',
  'endodontics': '/services/endodontics',
  'painless root canal': '/services/root-canal-treatment/single-sitting-rct',
  'single sitting RCT': '/services/root-canal-treatment/single-sitting-rct',
  
  // Dental Implants
  'dental implants': '/services/dental-implants',
  'tooth implants': '/services/dental-implants',
  'implant surgery': '/services/dental-implants',
  'tooth replacement': '/services/dental-implants',
  'missing teeth solution': '/services/dental-implants',
  'single tooth implant': '/services/dental-implants/single-tooth-implants',
  'All-on-4 implants': '/services/implantology/all-on-4',
  'full mouth implants': '/services/implantology/all-on-4',
  'bone grafting': '/services/oral-surgery/bone-grafting',
  
  // Orthodontics
  'orthodontic treatment': '/services/orthodontics',
  'braces': '/services/orthodontics',
  'teeth alignment': '/services/orthodontics',
  'teeth straightening': '/services/orthodontics',
  'Invisalign': '/services/orthodontics/invisalign',
  'clear aligners': '/services/orthodontics/invisalign',
  'invisible braces': '/services/orthodontics/invisible-aligners',
  'metal braces': '/services/orthodontics/metal-braces',
  'ceramic braces': '/services/orthodontics/ceramic-braces',
  'traditional braces': '/services/orthodontics/traditional-braces',
  
  // Cosmetic Dentistry
  'cosmetic dentistry': '/services/cosmetic-dentistry',
  'teeth whitening': '/services/cosmetic-dentistry/teeth-whitening',
  'professional whitening': '/services/cosmetic-dentistry/teeth-whitening',
  'porcelain veneers': '/services/cosmetic-dentistry/veneers',
  'dental veneers': '/services/cosmetic-dentistry/veneers',
  'smile makeover': '/services/cosmetic-dentistry/smile-makeover',
  'dental bonding': '/services/cosmetic-dentistry/bonding',
  'gum contouring': '/services/cosmetic-dentistry/gum-contouring',
  
  // General Dentistry
  'dental checkup': '/services/general-dentistry/check-ups',
  'routine checkup': '/services/general-dentistry/check-ups',
  'dental cleaning': '/services/general-dentistry/teeth-cleaning',
  'teeth cleaning': '/services/general-dentistry/teeth-cleaning',
  'dental fillings': '/services/general-dentistry/fillings',
  'cavity filling': '/services/general-dentistry/fillings',
  'tooth colored fillings': '/services/restorative-dentistry/tooth-colored-fillings',
  
  // Periodontics
  'gum disease treatment': '/services/periodontics',
  'periodontal treatment': '/services/periodontics',
  'scaling and root planing': '/services/periodontics/scaling-root-planing',
  'deep cleaning': '/services/periodontics/scaling-root-planing',
  'gum grafting': '/services/periodontics/gum-grafting',
  'gum surgery': '/services/periodontics/gum-surgery',
  
  // Oral Surgery
  'tooth extraction': '/services/oral-surgery/tooth-extraction',
  'wisdom teeth removal': '/services/oral-surgery/impacted-wisdom-teeth',
  'wisdom tooth extraction': '/services/oral-surgery/impacted-wisdom-teeth',
  'oral surgery': '/services/oral-surgery',
  'sinus lift': '/services/oral-surgery/sinus-lift',
  
  // Pediatric
  'pediatric dentistry': '/services/pediatric-dentistry',
  'children dentist': '/services/pediatric-dentistry',
  'kids dental care': '/services/pediatric-dentistry/childrens-dentistry',
  'dental sealants': '/services/pediatric-dentistry/dental-sealants',
  'fluoride treatment': '/services/pediatric-dentistry/fluoride-treatment',
  
  // Prosthodontics
  'dental crowns': '/services/prosthodontics/dental-crowns',
  'tooth cap': '/services/prosthodontics/dental-crowns',
  'dental bridges': '/services/prosthodontics/dental-bridges',
  'dentures': '/services/prosthodontics/dentures',
  'false teeth': '/services/prosthodontics/dentures',
  'partial dentures': '/services/prosthodontics/partial-dentures',
  
  // Emergency
  'emergency dental': '/services/emergency-dentistry',
  'dental emergency': '/services/emergency-dentistry',
  'emergency dentist': '/services/emergency-dentistry',
  'tooth pain relief': '/services/emergency-dentistry/tooth-pain-relief',
}

// Condition-related keywords and their corresponding condition pages (Expanded)
const conditionKeywords = {
  // Tooth Problems
  'tooth decay': '/conditions/tooth-decay',
  'dental caries': '/conditions/tooth-decay',
  'cavities': '/conditions/tooth-decay',
  'tooth sensitivity': '/conditions/tooth-sensitivity',
  'sensitive teeth': '/conditions/tooth-sensitivity',
  'tooth erosion': '/conditions/tooth-erosion',
  'enamel erosion': '/conditions/tooth-erosion',
  'cracked tooth': '/conditions/cracked-teeth',
  'fractured tooth': '/conditions/cracked-teeth',
  'tooth abscess': '/conditions/tooth-abscess',
  'dental abscess': '/conditions/tooth-abscess',
  'impacted teeth': '/conditions/impacted-teeth',
  'impacted wisdom teeth': '/conditions/impacted-teeth',
  
  // Gum Problems
  'gum disease': '/conditions/gum-disease',
  'periodontitis': '/conditions/gum-disease',
  'gingivitis': '/conditions/gum-disease',
  'receding gums': '/conditions/receding-gums',
  'gum recession': '/conditions/receding-gums',
  'bleeding gums': '/conditions/gum-disease',
  
  // Other Conditions
  'bad breath': '/conditions/bad-breath',
  'halitosis': '/conditions/bad-breath',
  'dry mouth': '/conditions/dry-mouth',
  'xerostomia': '/conditions/dry-mouth',
  'teeth grinding': '/conditions/bruxism',
  'bruxism': '/conditions/bruxism',
  'jaw clenching': '/conditions/bruxism',
}

// Add internal links to content (Enhanced for Semantic SEO)
export function addInternalLinks(content: string): string {
  let enhancedContent = content
  const linkedPhrases = new Set<string>() // Track what we've already linked

  // Add service links (keywords already have full paths)
  Object.entries(serviceKeywords).forEach(([keyword, url]) => {
    // Skip if already linked
    if (linkedPhrases.has(keyword.toLowerCase())) return
    
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
    let matchCount = 0
    
    enhancedContent = enhancedContent.replace(regex, (match) => {
      matchCount++
      // Only link first 2 occurrences to avoid over-optimization
      if (matchCount <= 2) {
        linkedPhrases.add(keyword.toLowerCase())
        return `<a href="${url}" class="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors" title="${match} in Vellore">${match}</a>`
      }
      return match
    })
  })

  // Add condition links (keywords already have full paths)
  Object.entries(conditionKeywords).forEach(([keyword, url]) => {
    if (linkedPhrases.has(keyword.toLowerCase())) return
    
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
    let matchCount = 0
    
    enhancedContent = enhancedContent.replace(regex, (match) => {
      matchCount++
      if (matchCount <= 2) {
        linkedPhrases.add(keyword.toLowerCase())
        return `<a href="${url}" class="text-blue-600 hover:text-blue-700 font-semibold underline transition-colors" title="${match} information">${match}</a>`
      }
      return match
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