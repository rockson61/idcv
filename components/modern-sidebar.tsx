"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { serviceCategories, conditionCategories, type SidebarItem } from "@/lib/sidebar-data"

interface Heading {
  id: string
  text: string
  level: number
}

interface ModernSidebarProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export function ModernSidebar({ className, isOpen, onClose }: ModernSidebarProps) {
  const pathname = usePathname()
  const [headings, setHeadings] = useState<Heading[]>([])
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredItems, setFilteredItems] = useState<{ category: string; items: SidebarItem[] }[]>([])

  // Initialize expanded state based on current path
  useEffect(() => {
    const initialExpanded: Record<string, boolean> = {}

    // Auto-expand categories based on current path
    ;[...serviceCategories, ...conditionCategories].forEach((category) => {
      const shouldExpand = category.items.some((item) => pathname.includes(item.href))
      initialExpanded[category.title] = shouldExpand
    })

    setExpandedCategories(initialExpanded)
  }, [pathname])

  // Extract headings from the page content
  useEffect(() => {
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll("h2, h3")
      const extractedHeadings: Heading[] = []

      headingElements.forEach((heading) => {
        // Create an ID if none exists
        if (!heading.id) {
          heading.id = heading.textContent?.toLowerCase().replace(/\s+/g, "-") || ""
        }

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
    if (typeof window !== "undefined") {
      extractHeadings()
      window.addEventListener("load", extractHeadings)
      return () => window.removeEventListener("load", extractHeadings)
    }
  }, [pathname])

  // Handle search functionality
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredItems([])
      return
    }

    const term = searchTerm.toLowerCase()
    const results: { category: string; items: SidebarItem[] }[] = []

    // Search through services
    serviceCategories.forEach((category) => {
      const matchedItems = category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description?.toLowerCase().includes(term) ||
          item.keywords?.some((keyword) => keyword.toLowerCase().includes(term)),
      )

      if (matchedItems.length > 0) {
        results.push({
          category: category.title,
          items: matchedItems,
        })
      }
    })

    // Search through conditions
    conditionCategories.forEach((category) => {
      const matchedItems = category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description?.toLowerCase().includes(term) ||
          item.keywords?.some((keyword) => keyword.toLowerCase().includes(term)),
      )

      if (matchedItems.length > 0) {
        results.push({
          category: category.title,
          items: matchedItems,
        })
      }
    })

    setFilteredItems(results)
  }, [searchTerm])

  // Toggle category expansion
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  // Close sidebar when clicking a link on mobile
  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      onClose()
    }
  }

  // Skip sidebar on homepage
  if (pathname === "/") return null

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} aria-hidden="true" />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-gray-50 border-r shadow-lg transition-transform duration-300 ease-in-out transform lg:translate-x-0 lg:static lg:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "h-screen lg:h-[calc(100vh-64px)] lg:sticky lg:top-16 overflow-y-auto",
          "scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent",
          className,
        )}
      >
        {/* Close button - mobile only */}
        <button
          className="absolute top-4 right-4 p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 lg:hidden"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 pt-12 lg:pt-4">
          {/* Search */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="search"
              className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search services & conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Search Results */}
          {searchTerm && filteredItems.length > 0 && (
            <div className="mb-6 bg-white rounded-lg shadow-sm border p-3">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Search Results</h3>
              {filteredItems.map((result, idx) => (
                <div key={idx} className="mb-3 last:mb-0">
                  <h4 className="text-xs font-medium text-gray-400 mb-1">{result.category}</h4>
                  <ul className="space-y-1">
                    {result.items.map((item) => (
                      <li key={item.href} className="text-sm">
                        <Link
                          href={item.href}
                          className={cn(
                            "block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors",
                            pathname === item.href && "bg-blue-100 text-blue-700 font-medium",
                          )}
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Search No Results */}
          {searchTerm && filteredItems.length === 0 && (
            <div className="mb-6 bg-white rounded-lg shadow-sm border p-3 text-center">
              <p className="text-sm text-gray-500">No results found</p>
            </div>
          )}

          {/* Table of Contents */}
          {!searchTerm && headings.length > 0 && (
            <div className="mb-6 bg-white rounded-lg shadow-sm border p-3">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleCategory("TableOfContents")}
              >
                <h3 className="text-sm font-medium text-gray-700">On This Page</h3>
                {expandedCategories["TableOfContents"] ? (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </div>

              {expandedCategories["TableOfContents"] && (
                <ul className="mt-2 space-y-1">
                  {headings.map((heading) => (
                    <li key={heading.id} className={cn("text-sm transition-colors", heading.level === 3 && "ml-3")}>
                      <a
                        href={`#${heading.id}`}
                        className="block px-2 py-1 rounded text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        onClick={handleLinkClick}
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Services */}
          {!searchTerm && (
            <div className="mb-6 bg-white rounded-lg shadow-sm border p-3">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Our Services</h3>
              <div className="space-y-2">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleCategory(category.title)}
                    >
                      <h4 className="text-sm font-medium text-gray-600">{category.title}</h4>
                      {expandedCategories[category.title] ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </div>

                    {expandedCategories[category.title] && (
                      <ul className="mt-1 space-y-1">
                        {category.items.map((item) => (
                          <li key={item.href} className="text-sm">
                            <Link
                              href={item.href}
                              className={cn(
                                "block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors",
                                pathname === item.href && "bg-blue-100 text-blue-700 font-medium",
                              )}
                              onClick={handleLinkClick}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conditions */}
          {!searchTerm && (
            <div className="bg-white rounded-lg shadow-sm border p-3">
              {conditionCategories.map((category) => (
                <div key={category.title}>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleCategory(category.title)}
                  >
                    <h3 className="text-sm font-medium text-gray-700">{category.title}</h3>
                    {expandedCategories[category.title] ? (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </div>

                  {expandedCategories[category.title] && (
                    <ul className="mt-2 space-y-1">
                      {category.items.map((item) => (
                        <li key={item.href} className="text-sm">
                          <Link
                            href={item.href}
                            className={cn(
                              "block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors",
                              pathname === item.href && "bg-blue-100 text-blue-700 font-medium",
                            )}
                            onClick={handleLinkClick}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
