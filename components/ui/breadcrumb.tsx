import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  title: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center space-x-1 text-sm text-muted-foreground', className)}
    >
      <Link
        href="/"
        className="flex items-center hover:text-foreground transition-colors"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-4 w-4 flex-shrink-0" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-foreground transition-colors truncate"
            >
              {item.title}
            </Link>
          ) : (
            <span className="text-foreground font-medium truncate" aria-current="page">
              {item.title}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
