"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronDown, Menu, Phone, X, MapPin, Calendar, Mail, Clock, Star, Shield } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const servicesMenu = {
  featured: [
    { name: "Root Canal Treatment", href: "/services/root-canal-treatment", description: "Painless RCT - Save your tooth", price: "₹3,000-₹8,000" },
    { name: "Dental Implants", href: "/services/dental-implants", description: "Permanent tooth replacement", price: "₹25,000-₹45,000" },
    { name: "Invisalign Clear Aligners", href: "/services/orthodontics/invisalign", description: "Invisible teeth straightening", price: "₹1,50,000-₹3,50,000" },
    { name: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening", description: "3-8 shades whiter in 1 hour", price: "₹8,000-₹18,000" },
  ],
  categories: [
    {
      title: "General & Preventive",
      services: [
        { name: "General Dentistry", href: "/services/general-dentistry" },
        { name: "Preventive Dentistry", href: "/services/preventive-dentistry" },
        { name: "Dental Checkups", href: "/services/general-dentistry/check-ups" },
        { name: "Emergency Care", href: "/services/emergency-dentistry" },
      ],
    },
    {
      title: "Cosmetic",
      services: [
        { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
        { name: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening" },
        { name: "Veneers", href: "/services/cosmetic-dentistry/veneers" },
        { name: "Smile Makeover", href: "/services/cosmetic-dentistry/smile-makeover" },
      ],
    },
    {
      title: "Orthodontics",
      services: [
        { name: "Braces & Orthodontics", href: "/services/orthodontics" },
        { name: "Invisalign", href: "/services/orthodontics/invisalign" },
        { name: "Metal Braces", href: "/services/orthodontics/metal-braces" },
        { name: "Ceramic Braces", href: "/services/orthodontics/ceramic-braces" },
      ],
    },
    {
      title: "Restorative",
      services: [
        { name: "Dental Crowns", href: "/services/prosthodontics/dental-crowns" },
        { name: "Dental Bridges", href: "/services/prosthodontics/dental-bridges" },
        { name: "Dentures", href: "/services/prosthodontics/dentures" },
        { name: "Dental Fillings", href: "/services/restorative-dentistry/dental-fillings" },
      ],
    },
    {
      title: "Surgical",
      services: [
        { name: "Dental Implants", href: "/services/dental-implants" },
        { name: "Tooth Extraction", href: "/services/oral-surgery/tooth-extraction" },
        { name: "Wisdom Teeth Removal", href: "/services/oral-surgery/impacted-wisdom-teeth" },
        { name: "Oral Surgery", href: "/services/oral-surgery" },
      ],
    },
    {
      title: "Specialized",
      services: [
        { name: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
        { name: "Periodontics (Gum Care)", href: "/services/periodontics" },
        { name: "Endodontics (RCT)", href: "/services/endodontics" },
        { name: "Sedation Dentistry", href: "/services/sedation-dentistry" },
      ],
    },
  ],
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/")

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:7010650063" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">7010650063</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" />
                <span>Mon-Sat: 10AM-8PM | Sun: 10AM-1:30PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                <span>Gandhi Nagar, Vellore</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">5.0/5.0 Rating | 8,600+ Reviews</span>
              </div>
              <Link href="/contact" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Calendar className="h-3.5 w-3.5" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Sticky */}
      <header 
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-white shadow-md"
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">IDC</span>
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900 group-hover:text-teal-600 transition-colors">
                  Indira Dental Clinic
                </div>
                <div className="text-xs text-gray-600">Dr. Rockson Samuel | Vellore</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors",
                  isActive("/") && pathname === "/"
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
                )}
              >
                Home
              </Link>

              {/* Services Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1",
                    isActive("/services")
                      ? "text-teal-600 bg-teal-50"
                      : "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
                  )}
                >
                  Services
                  <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                </button>

                {/* Mega Menu Dropdown */}
                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-screen max-w-5xl bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                    {/* Featured Services */}
                    <div className="mb-8">
                      <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">Featured Services</h3>
                      <div className="grid grid-cols-4 gap-4">
                        {servicesMenu.featured.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg hover:shadow-md transition-all group"
                          >
                            <div className="font-semibold text-gray-900 mb-1 group-hover:text-teal-600">{service.name}</div>
                            <div className="text-xs text-gray-600 mb-2">{service.description}</div>
                            <div className="text-sm font-bold text-teal-600">{service.price}</div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* All Services by Category */}
                    <div className="grid grid-cols-6 gap-6">
                      {servicesMenu.categories.map((category) => (
                        <div key={category.title}>
                          <h4 className="font-bold text-gray-900 mb-3 text-sm">{category.title}</h4>
                          <ul className="space-y-2">
                            {category.services.map((service) => (
                              <li key={service.href}>
                                <Link
                                  href={service.href}
                                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors block"
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* View All */}
                    <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                      <Link href="/services" className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-2">
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about-us"
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors",
                  isActive("/about-us")
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
                )}
              >
                About Us
              </Link>

              <Link
                href="/pricing"
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors",
                  isActive("/pricing")
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
                )}
              >
                Pricing
              </Link>

              <Link
                href="/ask-the-dentist"
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors",
                  isActive("/ask-the-dentist")
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
                )}
              >
                Ask the Dentist
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors",
                  isActive("/contact")
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
                )}
              >
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a 
                href="tel:7010650063"
                className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:from-teal-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Online</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-6 max-h-[80vh] overflow-y-auto">
              <nav className="space-y-4">
                <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium">
                  Home
                </Link>

                {/* Mobile Services */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium"
                  >
                    Services
                    <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  {servicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {servicesMenu.featured.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                        >
                          {service.name}
                        </Link>
                      ))}
                      <Link href="/services" className="block px-4 py-2 text-sm text-teal-600 font-semibold hover:bg-teal-50 rounded-lg">
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/about-us" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium">
                  About Us
                </Link>

                <Link href="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium">
                  Pricing
                </Link>

                <Link href="/ask-the-dentist" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium">
                  Ask the Dentist
                </Link>

                <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium">
                  Contact
                </Link>

                <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                  <a 
                    href="tel:7010650063"
                    className="block px-4 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium text-center"
                  >
                    <Phone className="h-4 w-4 inline mr-2" />
                    Call: 7010650063
                  </a>
                  <Link
                    href="/contact"
                    className="block px-4 py-3 bg-orange-600 text-white rounded-lg font-medium text-center"
                  >
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Book Appointment
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Emergency Strip */}
      {!isScrolled && (
        <div className="bg-red-600 text-white py-2 text-center text-sm font-medium">
          <Phone className="h-4 w-4 inline mr-2" />
          24/7 Emergency Dental Care: <a href="tel:7010650063" className="underline font-bold ml-1">7010650063</a>
        </div>
      )}
    </>
  )
}
