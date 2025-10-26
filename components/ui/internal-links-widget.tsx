import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { GlassCard } from './glass-card'
import type { InternalLink } from '@/lib/internal-links'

interface InternalLinksWidgetProps {
  links: InternalLink[]
  title?: string
  className?: string
  compact?: boolean
}

export function InternalLinksWidget({ 
  links, 
  title = "Related Pages", 
  className = "",
  compact = false 
}: InternalLinksWidgetProps) {
  if (links.length === 0) return null
  
  if (compact) {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            title={link.title}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors border border-blue-200"
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {link.keyword}
            {link.url.startsWith('http') ? (
              <ExternalLink className="w-3 h-3" />
            ) : (
              <ArrowRight className="w-3 h-3" />
            )}
          </Link>
        ))}
      </div>
    )
  }
  
  return (
    <GlassCard className={`p-6 ${className}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            title={link.title}
            className="flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all group"
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
            <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 flex-1">
              {link.keyword}
            </span>
            {link.url.startsWith('http') && (
              <ExternalLink className="w-3 h-3 text-gray-400" />
            )}
          </Link>
        ))}
      </div>
    </GlassCard>
  )
}

// Inline link component for use within paragraphs
interface InlineLinkProps {
  href: string
  children: React.ReactNode
  title?: string
  className?: string
}

export function InlineLink({ href, children, title, className = "" }: InlineLinkProps) {
  const isExternal = href.startsWith('http')
  
  return (
    <Link
      href={href}
      title={title}
      className={`text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 decoration-blue-300 hover:decoration-blue-500 transition-all ${className}`}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
      {isExternal && <ExternalLink className="w-3 h-3 inline ml-1" />}
    </Link>
  )
}

// Service mention component (for LSI keyword optimization)
interface ServiceMentionProps {
  service: string
  url: string
  className?: string
}

export function ServiceMention({ service, url, className = "" }: ServiceMentionProps) {
  return (
    <Link 
      href={url}
      className={`font-bold text-teal-700 hover:text-teal-900 hover:underline transition-colors ${className}`}
      title={`Learn more about ${service}`}
    >
      {service}
    </Link>
  )
}

// Location mention component
interface LocationMentionProps {
  location: string
  url: string
  className?: string
}

export function LocationMention({ location, url, className = "" }: LocationMentionProps) {
  return (
    <Link 
      href={url}
      className={`font-bold text-green-700 hover:text-green-900 hover:underline transition-colors ${className}`}
      title={`Dentist in ${location}`}
    >
      {location}
    </Link>
  )
}

