import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  name: string
  href: string
}

interface LocationBreadcrumbProps {
  items: BreadcrumbItem[]
}

export function LocationBreadcrumb({ items }: LocationBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li key={item.href} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <div className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
              {index === items.length - 1 ? (
                <span className="text-gray-700" itemProp="name">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="text-blue-600 hover:underline" itemProp="item">
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={`${index + 1}`} />
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
