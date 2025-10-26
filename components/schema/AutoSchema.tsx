'use client'

import { usePathname } from 'next/navigation'
import { generateContextualSchema } from '@/lib/schema-generator'

interface AutoSchemaProps {
  pageTitle: string
  pageDescription: string
  params?: Record<string, string>
  metadata?: any
  content?: string
}

export function AutoSchema({ 
  pageTitle, 
  pageDescription, 
  params, 
  metadata, 
  content 
}: AutoSchemaProps) {
  const pathname = usePathname()
  
  // Generate contextual schema based on current route
  const schema = generateContextualSchema({
    routePath: pathname,
    pageTitle,
    pageDescription,
    params,
    metadata,
    content,
  })
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

// Server-side version for static pages
export function ServerAutoSchema({ 
  pageTitle, 
  pageDescription, 
  routePath,
  params, 
  metadata, 
  content 
}: AutoSchemaProps & { routePath: string }) {
  const schema = generateContextualSchema({
    routePath,
    pageTitle,
    pageDescription,
    params,
    metadata,
    content,
  })
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
