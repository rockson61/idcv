import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'

async function getAllPagePaths(dir: string, baseDir: string = ''): Promise<string[]> {
  const paths: string[] = []
  
  try {
    const entries = await readdir(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name)
      const relativePath = join(baseDir, entry.name)
      
      if (entry.isDirectory()) {
        // Skip special Next.js directories
        if (entry.name.startsWith('[') || entry.name.startsWith('_')) {
          continue
        }
        // Recursively get paths from subdirectories
        const subPaths = await getAllPagePaths(fullPath, relativePath)
        paths.push(...subPaths)
      } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
        // Add the directory path (without /page.tsx)
        paths.push(baseDir === '' ? '/' : `/${baseDir}`)
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
  }
  
  return paths
}

export async function GET(): Promise<NextResponse> {
  const baseUrl = "https://www.dentalclinicinvellore.in"
  const currentDate = new Date().toISOString()
  
  // Get all page paths dynamically
  const appDir = join(process.cwd(), 'app')
  let allPaths: string[] = []
  
  try {
    allPaths = await getAllPagePaths(appDir)
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Fallback to static list if dynamic fails
    allPaths = [
      '/',
      '/about-us',
      '/contact',
      '/services',
      '/pricing',
    ]
  }
  
  // Remove duplicates and sort
  allPaths = [...new Set(allPaths)].sort()
  
  // Determine priority and change frequency based on URL pattern
  const getPageMetadata = (path: string) => {
    // Homepage - highest priority
    if (path === '/') return { priority: 1.0, changeFrequency: 'daily' }
    
    // Main service pages - very high priority
    if (path === '/services') return { priority: 0.9, changeFrequency: 'weekly' }
    if (path.startsWith('/services/') && path.split('/').length === 3) return { priority: 0.8, changeFrequency: 'weekly' }
    if (path.startsWith('/services/') && path.split('/').length === 4) return { priority: 0.7, changeFrequency: 'monthly' }
    
    // Chennai location pages - high priority for SEO (155 pages!)
    // Main Chennai page
    if (path === '/in/tamil-nadu/chennai') return { priority: 0.95, changeFrequency: 'weekly' }
    
    // Major Chennai areas - very high priority
    const majorChennaiAreas = ['anna-nagar', 't-nagar', 'thygaraya-nagar', 'adyar', 'velacheri', 'vadapalani', 'nungambakkam', 'mylapore', 'besant-nagar', 'egmore', 'kilpauk', 'kodambakkam', 'tiruvanmiyur', 'koyambedu', 'perambur', 'saidapet', 'guindy-north']
    const chennaiSlug = path.split('/').pop() || ''
    if (path.startsWith('/in/tamil-nadu/chennai/') && majorChennaiAreas.includes(chennaiSlug)) {
      return { priority: 0.85, changeFrequency: 'weekly' }
    }
    
    // All other Chennai locations (140+ pages)
    if (path.startsWith('/in/tamil-nadu/chennai/') && path.split('/').length === 5) {
      return { priority: 0.8, changeFrequency: 'monthly' }
    }
    
    // Vellore location pages - high priority for SEO (686 pages!)
    // Main Vellore page
    if (path === '/in/tamil-nadu/vellore') return { priority: 0.9, changeFrequency: 'weekly' }
    
    // Major Vellore towns - high priority
    const majorTowns = ['arakkonam', 'arcot', 'ranipet', 'sholingur', 'walajapet', 'tirupattur', 'vaniyambadi', 'ambur', 'gudiyattam', 'jolarpet', 'melvisharam', 'katpadi', 'sathuvachari', 'pallikonda', 'natrampalli', 'yelagiri-hills', 'cmc-vellore', 'vellore-institute-of-technology']
    const locationSlug = path.split('/').pop() || ''
    if (path.startsWith('/in/tamil-nadu/vellore/') && majorTowns.includes(locationSlug)) {
      return { priority: 0.8, changeFrequency: 'weekly' }
    }
    
    // All other Vellore locations (600+ pages)
    if (path.startsWith('/in/tamil-nadu/vellore/') && path.split('/').length === 5) {
      return { priority: 0.75, changeFrequency: 'monthly' }
    }
    
    // Other Tamil Nadu locations
    if (path.startsWith('/in/tamil-nadu/')) return { priority: 0.7, changeFrequency: 'monthly' }
    
    // Other Indian locations
    if (path.startsWith('/in/')) return { priority: 0.6, changeFrequency: 'monthly' }
    
    // Blog and Q&A
    if (path === '/blog' || path === '/ask-the-dentist') return { priority: 0.8, changeFrequency: 'daily' }
    if (path.includes('/blog/')) return { priority: 0.7, changeFrequency: 'monthly' }
    if (path.includes('/ask-the-dentist/')) return { priority: 0.7, changeFrequency: 'weekly' }
    
    // Other important pages
    if (path === '/contact') return { priority: 0.9, changeFrequency: 'monthly' }
    if (path === '/about-us') return { priority: 0.8, changeFrequency: 'monthly' }
    if (path === '/testimonials') return { priority: 0.8, changeFrequency: 'weekly' }
    if (path === '/international-patients' || path.startsWith('/international-patients/')) return { priority: 0.8, changeFrequency: 'weekly' }
    
    // Default for other pages
    return { priority: 0.6, changeFrequency: 'monthly' }
  }
  
  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPaths
  .map((path) => {
    const metadata = getPageMetadata(path)
    return `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${metadata.changeFrequency}</changefreq>
    <priority>${metadata.priority}</priority>
  </url>`
  })
  .join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
