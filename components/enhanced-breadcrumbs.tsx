"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, List, X, ArrowUp, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
}

interface EnhancedBreadcrumbsProps {
  items?: BreadcrumbItem[]
  showProgress?: boolean
  showToc?: boolean
}

export default function EnhancedBreadcrumbs({ items, showProgress = true, showToc = true }: EnhancedBreadcrumbsProps) {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const [activeHeading, setActiveHeading] = useState<string | null>(null)
  const [tocOpen, setTocOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const tocRef = useRef<HTMLDivElement>(null)
  const progressTextRef = useRef<HTMLDivElement>(null)

  // Generate breadcrumb items from pathname if not provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname)

  // Calculate scroll progress
  useEffect(() => {
    if (!showProgress) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)

      // Show back to top button after scrolling down 300px
      setShowBackToTop(scrollTop > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showProgress])

  // Extract headings from the page
  useEffect(() => {
    if (!showToc) return

    const headingElements = Array.from(document.querySelectorAll("h2, h3, h4"))
    const extractedHeadings = headingElements
      .filter((heading) => heading.id) // Only include headings with IDs
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: Number.parseInt(heading.tagName.charAt(1)),
      }))

    setHeadings(extractedHeadings)

    // Set up intersection observer for headings
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    headingElements.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading)
      }
    })

    return () => observer.disconnect()
  }, [showToc])

  // Close TOC when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tocRef.current && !tocRef.current.contains(event.target as Node)) {
        setTocOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Scroll to heading function
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120, // Offset to account for fixed header
        behavior: "smooth",
      })
      setActiveHeading(id)
      setTocOpen(false)
    }
  }

  return (
    <>
      <div className="sticky top-0 z-20 bg-white dark:bg-gray-900 shadow-md">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-3">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center flex-wrap">
              {breadcrumbItems.map((item, index) => (
                <li key={item.href} className="flex items-center">
                  {index === 0 ? (
                    <Link
                      href="/"
                      className="text-dental-teal hover:text-dental-teal/80 transition-colors flex items-center"
                      aria-label="Home"
                    >
                      <Home className="h-4 w-4" />
                    </Link>
                  ) : (
                    <>
                      <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
                      {index === breadcrumbItems.length - 1 ? (
                        <span
                          className="font-medium text-gray-700 dark:text-gray-300 max-w-[200px] truncate"
                          aria-current="page"
                        >
                          {item.label}
                        </span>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-dental-teal hover:text-dental-teal/80 transition-colors max-w-[150px] truncate"
                        >
                          {item.label}
                        </Link>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="relative h-1.5 bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-dental-teal via-blue-400 to-dental-teal bg-size-200 animate-gradient-x transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            />

            {/* Progress Text */}
            <div
              ref={progressTextRef}
              className="absolute top-1.5 right-4 text-xs font-medium text-dental-teal bg-white dark:bg-gray-900 px-2 py-0.5 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 transform transition-opacity duration-300"
              style={{ opacity: progress > 2 ? 1 : 0 }}
            >
              {Math.round(progress)}% read
            </div>
          </div>
        )}

        {/* Table of Contents Toggle */}
        {showToc && headings.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setTocOpen(!tocOpen)}
                  className="flex items-center gap-2 py-2 text-sm font-medium text-dental-teal hover:text-dental-teal/80 transition-colors"
                  aria-expanded={tocOpen}
                  aria-controls="table-of-contents"
                >
                  {tocOpen ? (
                    <>
                      <X className="h-4 w-4" />
                      <span>Close Contents</span>
                    </>
                  ) : (
                    <>
                      <List className="h-4 w-4" />
                      <span>Table of Contents</span>
                    </>
                  )}
                </button>

                {activeHeading && (
                  <div className="hidden md:block text-sm text-gray-600 dark:text-gray-400 truncate max-w-[50%]">
                    Currently reading:{" "}
                    <span className="font-medium text-dental-teal">
                      {headings.find((h) => h.id === activeHeading)?.text}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Table of Contents Panel */}
      {showToc && headings.length > 0 && (
        <div
          id="table-of-contents"
          ref={tocRef}
          className={cn(
            "fixed inset-0 z-30 bg-black/20 dark:bg-black/50 transition-opacity duration-300",
            tocOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div
            className={cn(
              "absolute right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out overflow-auto",
              tocOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Table of Contents</h2>
              <button
                onClick={() => setTocOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close table of contents"
              >
                <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-1">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <button
                      onClick={() => scrollToHeading(heading.id)}
                      className={cn(
                        "w-full text-left py-2 px-3 rounded-lg transition-colors text-sm",
                        heading.level === 2 ? "font-medium" : "pl-6",
                        heading.level === 4 ? "pl-9 text-xs" : "",
                        activeHeading === heading.id
                          ? "bg-dental-teal/10 text-dental-teal font-medium"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                      )}
                    >
                      {heading.text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 p-3 rounded-full bg-dental-teal text-white shadow-lg transition-all duration-300 z-20 hover:bg-dental-teal/90",
          showBackToTop ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  )
}

// Helper function to generate breadcrumb items from path
function generateBreadcrumbsFromPath(path: string): BreadcrumbItem[] {
  const segments = path.split("/").filter(Boolean)

  const items: BreadcrumbItem[] = [{ label: "Home", href: "/" }]

  let currentPath = ""
  segments.forEach((segment) => {
    currentPath += `/${segment}`
    items.push({
      label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
      href: currentPath,
    })
  })

  return items
}
