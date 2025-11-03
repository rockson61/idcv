'use client'

import { ChevronRight, Home } from "lucide-react"
import Link from 'next/link'

interface BreadcrumbItem {
  title: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
      <Link href="/" className="overflow-hidden text-ellipsis whitespace-nowrap hover:text-foreground">
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, index) => (
        <div key={`${item.title}-${index}`} className="flex items-center">
          <ChevronRight className="h-4 w-4" />
          {item.href ? (
            <Link
              href={item.href}
              className="overflow-hidden text-ellipsis whitespace-nowrap hover:text-foreground px-2"
            >
              {item.title}
            </Link>
          ) : (
            <span
              className="overflow-hidden text-ellipsis whitespace-nowrap px-2 text-foreground"
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.title}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
