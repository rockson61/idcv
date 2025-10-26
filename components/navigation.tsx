"use client"

import React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Indira Dental Clinic
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>

            <div className="relative group">
              <button
                className="px-3 py-2 text-gray-700 hover:text-blue-600 flex items-center"
                onClick={() => toggleDropdown("services")}
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                <div className="py-1">
                  <Link
                    href="/services/root-canal-treatment"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Root Canal Treatment
                  </Link>
                  <Link
                    href="/services/dental-implants"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dental Implants
                  </Link>
                  <Link
                    href="/services/orthodontic-treatment"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Orthodontic Treatment
                  </Link>
                  <Link
                    href="/services/cosmetic-dentistry"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cosmetic Dentistry
                  </Link>
                  <Link
                    href="/services/dental-fillings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dental Fillings
                  </Link>
                  <Link href="/services" className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                className="px-3 py-2 text-gray-700 hover:text-blue-600 flex items-center"
                onClick={() => toggleDropdown("locations")}
              >
                Locations <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                <div className="py-1">
                  <Link
                    href="/dentist-near-me/locations/in/vellore"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Vellore Clinic
                  </Link>
                  <Link
                    href="/dentist-near-me/locations/in/tamil-nadu"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Tamil Nadu Locations
                  </Link>
                  <Link
                    href="/dentist-near-me/locations/medical-tourism"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Medical Tourism
                  </Link>
                  <Link
                    href="/dentist-near-me/locations"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    View All Locations
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/patient-reviews" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              Reviews
            </Link>

            <Link href="/about-us" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              About Us
            </Link>

            <Link href="/contact-us" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="tel:7010650063"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all"
            >
              Call: 7010650063
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>

            <div>
              <button
                onClick={() => toggleDropdown("mobileServices")}
                className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transform ${activeDropdown === "mobileServices" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "mobileServices" && (
                <div className="pl-4 space-y-1">
                  <Link
                    href="/services/root-canal-treatment"
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                  >
                    Root Canal Treatment
                  </Link>
                  <Link href="/services/dental-implants" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                    Dental Implants
                  </Link>
                  <Link
                    href="/services/orthodontic-treatment"
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                  >
                    Orthodontic Treatment
                  </Link>
                  <Link
                    href="/services/cosmetic-dentistry"
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                  >
                    Cosmetic Dentistry
                  </Link>
                  <Link href="/services/dental-fillings" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                    Dental Fillings
                  </Link>
                  <Link href="/services" className="block px-3 py-2 text-blue-600 hover:text-blue-700">
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("mobileLocations")}
                className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                <span>Locations</span>
                <ChevronDown
                  size={16}
                  className={`transform ${activeDropdown === "mobileLocations" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "mobileLocations" && (
                <div className="pl-4 space-y-1">
                  <Link
                    href="/dentist-near-me/locations/in/vellore"
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                  >
                    Vellore Clinic
                  </Link>
                  <Link
                    href="/dentist-near-me/locations/in/tamil-nadu"
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                  >
                    Tamil Nadu Locations
                  </Link>
                  <Link
                    href="/dentist-near-me/locations/medical-tourism"
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                  >
                    Medical Tourism
                  </Link>
                  <Link href="/dentist-near-me/locations" className="block px-3 py-2 text-blue-600 hover:text-blue-700">
                    View All Locations
                  </Link>
                </div>
              )}
            </div>

            <Link href="/patient-reviews" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Reviews
            </Link>

            <Link href="/about-us" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              About Us
            </Link>

            <Link href="/contact-us" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Contact
            </Link>

            <a href="tel:7010650063" className="block px-3 py-2 text-blue-600 hover:text-blue-700 font-medium">
              Call: 7010650063
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
