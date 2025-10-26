"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function BlogTableOfContents() {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" },
    )

    const headings = document.querySelectorAll("h2, h3")
    headings.forEach((heading) => observer.observe(heading))

    return () => {
      headings.forEach((heading) => observer.unobserve(heading))
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-1">
          {Array.from(document.querySelectorAll("h2, h3")).map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                "block py-1 text-sm transition-colors hover:text-primary",
                heading.tagName === "H3" && "pl-4",
                activeId === heading.id ? "text-primary font-medium" : "text-muted-foreground",
              )}
            >
              {heading.textContent}
            </a>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}
