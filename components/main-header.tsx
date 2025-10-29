"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MapPin, Clock, Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

export function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Indira Dental</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavDropdown
              title="Services"
              links={[
                { href: "/services/general-dentistry", label: "General Dentistry" },
                { href: "/services/cosmetic-dentistry", label: "Cosmetic Dentistry" },
                { href: "/services/orthodontics", label: "Orthodontics" },
                { href: "/services/dental-implants", label: "Dental Implants" },
                { href: "/services/root-canal-treatment", label: "Root Canal Treatment" },
              ]}
            />
            <NavDropdown
              title="Locations"
              links={[
                { href: "/in/tamil-nadu/vellore", label: "Vellore" },
                { href: "/in/tamil-nadu/chennai", label: "Chennai" },
                { href: "/in/tamil-nadu/coimbatore", label: "Coimbatore" },
                { href: "/in/tamil-nadu/madurai", label: "Madurai" },
                { href: "/in/tamil-nadu/salem", label: "Salem" },
              ]}
            />
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a href="tel:7010650063" className="hidden md:flex items-center space-x-2 text-dental-blue font-medium">
              <Phone className="h-4 w-4" />
              <span>7010650063</span>
            </a>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden bg-gradient-dental p-2 rounded-full text-white"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-50 lg:hidden transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Indira Dental</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gradient-dental p-2 rounded-full text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavAccordion
              title="Services"
              links={[
                { href: "/services/general-dentistry", label: "General Dentistry" },
                { href: "/services/cosmetic-dentistry", label: "Cosmetic Dentistry" },
                { href: "/services/orthodontics", label: "Orthodontics" },
                { href: "/services/dental-implants", label: "Dental Implants" },
                { href: "/services/root-canal-treatment", label: "Root Canal Treatment" },
              ]}
              onLinkClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavAccordion
              title="Locations"
              links={[
                { href: "/in/tamil-nadu/vellore", label: "Vellore" },
                { href: "/in/tamil-nadu/chennai", label: "Chennai" },
                { href: "/in/tamil-nadu/coimbatore", label: "Coimbatore" },
                { href: "/in/tamil-nadu/madurai", label: "Madurai" },
                { href: "/in/tamil-nadu/salem", label: "Salem" },
              ]}
              onLinkClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </MobileNavLink>
            <MobileNavLink href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
          </nav>

          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <Phone className="h-5 w-5 text-dental-teal" />
              <a href="tel:7010650063" className="font-medium">
                7010650063
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <MapPin className="h-5 w-5 text-dental-teal" />
              <address className="not-italic">
                3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu 632006
              </address>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <Clock className="h-5 w-5 text-dental-teal" />
              <span>10 AM - 8 PM (Mon-Sat), 10 AM - 1:30 PM (Sun)</span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact#appointment"
              className="gradient-button w-full text-center block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-gray-800 dark:text-gray-200 font-medium hover:text-dental-teal transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-dental-teal after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  )
}

function NavDropdown({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className="flex items-center space-x-1 text-gray-800 dark:text-gray-200 font-medium hover:text-dental-teal transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "")} />
      </button>

      <div
        className={cn(
          "absolute top-full left-0 mt-2 w-56 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-200 origin-top-left",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-dental"></div>
        <div className="py-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-xl font-medium text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 inline-block"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

function MobileNavAccordion({
  title,
  links,
  onLinkClick,
}: {
  title: string
  links: { href: string; label: string }[]
  onLinkClick?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="flex items-center justify-between w-full text-xl font-medium text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen ? "rotate-180" : "")} />
      </button>

      <div
        className={cn(
          "mt-2 ml-4 space-y-2 overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-dental-teal transition-colors"
            onClick={onLinkClick}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
