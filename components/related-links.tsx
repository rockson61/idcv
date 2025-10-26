import Link from "next/link"

interface RelatedLink {
  href: string
  text: string
  description?: string
}

interface RelatedLinksProps {
  title?: string
  links: RelatedLink[]
  variant?: "inline" | "list" | "cards"
}

export function RelatedLinks({ title = "Related Resources", links, variant = "list" }: RelatedLinksProps) {
  if (links.length === 0) return null

  if (variant === "inline") {
    return (
      <div className="my-8 prose max-w-none">
        <p className="text-base text-muted-foreground">
          {links.map((link, index) => (
            <span key={link.href}>
              <Link
                href={link.href}
                className="text-primary hover:text-primary/80 font-medium underline underline-offset-4"
              >
                {link.text}
              </Link>
              {index < links.length - 1 && " • "}
            </span>
          ))}
        </p>
      </div>
    )
  }

  if (variant === "cards") {
    return (
      <div className="my-8">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <h4 className="font-medium text-primary">{link.text}</h4>
              {link.description && <p className="text-sm text-muted-foreground mt-1">{link.description}</p>}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // Default list variant
  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-primary hover:text-primary/80 font-medium underline underline-offset-4"
            >
              {link.text}
            </Link>
            {link.description && <p className="text-sm text-muted-foreground">{link.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}
