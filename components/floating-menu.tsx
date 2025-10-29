"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ShoppingCart, Phone, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
// Import the FloatingMenuButton component
import { FloatingMenuButton } from "./floating-menu-button"

type MenuItem = {
  title: string
  href: string
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
    children: [],
  },
  {
    title: "About Us",
    href: "/about-us",
    children: [
      { title: "Dr. Rockson Samuel", href: "/about-us/dr-rockson-samuel" },
      { title: "Our Team", href: "/about-us#team" },
      { title: "Clinic Tour", href: "/about-us#clinic-tour" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    children: [
      { title: "Root Canal Treatment", href: "/services/root-canal-treatment" },
      { title: "Dental Implants", href: "/services/dental-implants" },
      { title: "Orthodontics", href: "/services/orthodontics" },
      { title: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
      { title: "General Dentistry", href: "/services/general-dentistry" },
      { title: "All Services", href: "/services" },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
    children: [
      { title: "Treatment Costs", href: "/pricing#treatment-costs" },
      { title: "Insurance & Financing", href: "/insurance" },
    ],
  },
  {
    title: "Medical Tourism",
    href: "/medical-tourism/dental",
    children: [],
  },
  {
    title: "Locations",
    href: "/locations",
    children: [
      { title: "Vellore", href: "/in/tamil-nadu/vellore" },
      { title: "Chennai", href: "/in/tamil-nadu/chennai" },
      { title: "Coimbatore", href: "/in/tamil-nadu/coimbatore" },
      { title: "View All Locations", href: "/locations" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
    children: [
      { title: "Dental Implant Guide", href: "/blog/dental-implants-complete-guide" },
      { title: "Root Canal Guide", href: "/blog/complete-guide-root-canal-treatment" },
      { title: "Oral Health Tips", href: "/blog/oral-health-tips" },
      { title: "All Articles", href: "/blog" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    children: [],
  },
]

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Floating toggle button */}
      {/* Remove the existing floating toggle button and use our new component */}
      <FloatingMenuButton onClick={() => setIsOpen(true)} />

      {/* Full screen overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-gray-900/95 text-white overflow-auto transition-all duration-500 transform",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container mx-auto py-8 px-4 min-h-screen flex flex-col">
          {/* Header with close button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                0
              </span>
              <span className="text-xl font-medium ml-2">Menu</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 flex-grow">
            {menuItems.map((item) => (
              <div key={item.title} className="space-y-4">
                <h2 className="text-2xl font-bold">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </h2>
                {item.children && item.children.length > 0 && (
                  <ul className="space-y-3">
                    {item.children.map((child) => (
                      <li key={child.title}>
                        <Link
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Important buttons at bottom */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-gray-700">
            <Button
              onClick={() => {
                window.location.href = "tel:+917010650063"
                setIsOpen(false)
              }}
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </Button>

            <Button
              onClick={() => {
                window.location.href = "https://maps.app.goo.gl/rvyhzFADniQBUDWV8"
                setIsOpen(false)
              }}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-white text-white hover:bg-white hover:text-gray-900"
            >
              <MapPin className="h-5 w-5" />
              <span>Get Directions</span>
            </Button>

            <Button
              onClick={() => {
                window.location.href = "/contact#book-appointment"
                setIsOpen(false)
              }}
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Appointment</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
