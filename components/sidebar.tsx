"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface Heading {
  id: string
  text: string
  level: number
}

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [headings, setHeadings] = useState<Heading[]>([])
  const [isHomepage, setIsHomepage] = useState(pathname === "/")

  useEffect(() => {
    setIsHomepage(pathname === "/")
  }, [pathname])

  // Skip sidebar on homepage
  if (isHomepage) return null

  useEffect(() => {
    // Extract headings from the page content
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll("h2, h3")
      const extractedHeadings: Heading[] = []

      headingElements.forEach((heading) => {
        const id = heading.id
        const text = heading.textContent || ""
        const level = Number.parseInt(heading.tagName.substring(1))

        if (id && text) {
          extractedHeadings.push({ id, text, level })
        }
      })

      setHeadings(extractedHeadings)
    }

    // Run extraction after content is loaded
    extractHeadings()

    // Re-run when pathname changes
    window.addEventListener("load", extractHeadings)
    return () => window.removeEventListener("load", extractHeadings)
  }, [pathname])

  // Service treatments list
  const serviceCategories = [
    {
      title: "General Dentistry",
      items: [
        { name: "Check-ups", href: "/services/general-dentistry/check-ups" },
        { name: "Fillings", href: "/services/general-dentistry/fillings" },
        { name: "Emergency Care", href: "/services/general-dentistry/emergency-care" },
      ],
    },
    {
      title: "Cosmetic Dentistry",
      items: [
        { name: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening" },
        { name: "Veneers", href: "/services/cosmetic-dentistry/veneers" },
        { name: "Bonding", href: "/services/cosmetic-dentistry/bonding" },
        { name: "Smile Makeover", href: "/services/cosmetic-dentistry/smile-makeover" },
      ],
    },
    {
      title: "Orthodontics",
      items: [
        { name: "Traditional Braces", href: "/services/orthodontics/traditional-braces" },
        { name: "Invisible Aligners", href: "/services/orthodontics/invisible-aligners" },
        { name: "Invisalign", href: "/services/orthodontics/invisalign" },
      ],
    },
    {
      title: "Dental Implants",
      items: [
        { name: "Single Tooth Implants", href: "/services/dental-implants/single-tooth-implants" },
        { name: "Multiple Tooth", href: "/services/dental-implants/multiple-tooth" },
      ],
    },
    {
      title: "Periodontics",
      items: [{ name: "Scaling & Root Planing", href: "/services/periodontics/scaling-root-planing" }],
    },
  ]

  // Conditions list
  const conditions = [
    { name: "Bad Breath", href: "/conditions/bad-breath" },
    { name: "Gum Disease", href: "/conditions/gum-disease" },
    { name: "Tooth Decay", href: "/conditions/tooth-decay" },
    { name: "Tooth Sensitivity", href: "/conditions/tooth-sensitivity" },
  ]

  return (
    <aside className={cn("w-64 flex-shrink-0 border-r p-4", className)}>
      {/* Table of Contents */}
      {headings.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Quick Navigation</h3>
          <ul className="space-y-1">
            {headings.map((heading) => (
              <li key={heading.id} className={cn("text-sm", heading.level === 3 && "ml-3")}>
                <a href={`#${heading.id}`} className="text-blue-600 hover:underline">
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Services */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Our Services</h3>
        <div className="space-y-3">
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h4 className="font-medium text-sm">{category.title}</h4>
              <ul className="ml-2 space-y-1">
                {category.items.map((item) => (
                  <li key={item.name} className="text-sm">
                    <Link
                      href={item.href}
                      className={cn(
                        "text-gray-700 hover:text-blue-600",
                        pathname === item.href && "font-semibold text-blue-600",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Conditions */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Dental Conditions</h3>
        <ul className="space-y-1">
          {conditions.map((condition) => (
            <li key={condition.name} className="text-sm">
              <Link
                href={condition.href}
                className={cn(
                  "text-gray-700 hover:text-blue-600",
                  pathname === condition.href && "font-semibold text-blue-600",
                )}
              >
                {condition.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
