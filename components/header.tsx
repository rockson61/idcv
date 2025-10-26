"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, Phone, Sun, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleServices = () => setServicesOpen(!servicesOpen)
  const toggleLocations = () => setLocationsOpen(!locationsOpen)

  return (
    <header className="bg-blue-100 py-4 px-6 md:px-8 lg:px-12">
      {/* Hidden SEO content */}
      <div id="link-building-training" style={{ display: "none" }} aria-hidden="true">
        <h1>Top Dentists in Vellore, Best Dental Clinics and Surgeons in Vellore, Affordable Dental Treatment</h1>
        <h2>
          Find the Best Dentists in Vellore, Trusted Dental Clinics and Hospitals, Advanced Dental Care, Affordable
          Dental Treatments, Expert Dental Surgeons, Comprehensive Dental Services in Vellore, Best Dental Implants,
          Cosmetic Dentistry, and More
        </h2>
        <h3>
          Explore Leading Dental Clinics in Vellore, Highly Qualified Dentists Near You, Advanced Dental Technology,
          Best Root Canal Treatments, Affordable Dental Implants, Cosmetic Dental Procedures, Family Dental Care, and
          Pediatric Dentistry Services
        </h3>
        <h4>
          Affordable Dental Treatments in Vellore, Trusted Dentists for Root Canal Treatment, Best Cosmetic Dentistry in
          Vellore, Advanced Dental Surgery, Comprehensive Dental Care, Leading Clinics for Dental Implants, Qualified
          Dental Surgeons, and Modern Dental Technology
        </h4>
        <h5>
          Top Dentists and Dental Clinics in Vellore, Affordable Dental Care, Advanced Procedures, Best Family Dentists,
          Expert Dental Surgeons, Trusted Orthodontists, Cosmetic Dentistry, Root Canal Specialists, High-Quality Dental
          Treatments, and Modern Facilities
        </h5>
        <h6>
          Best Dental Clinics in Vellore for Advanced Dental Treatments, Experienced Dentists for Implants and
          Restorations, Affordable Cosmetic Dentistry, Trusted Dental Surgeons, Family-Friendly Dental Services,
          Pediatric Dental Care, and Orthodontic Solutions
        </h6>
        <p>
          Vellore is home to some of the best dental clinics and highly skilled dentists, offering a wide range of
          affordable yet advanced dental treatments. From dental implants and cosmetic dentistry to root canal
          treatments and orthodontics, Vellore provides exceptional dental care using cutting-edge technology. Renowned
          clinics like Indira Dental Clinic and services from experts like Dr. Rockson Samuel are trusted by patients
          for their expertise and quality care. Whether you are seeking family dental care, pediatric dentistry, or
          advanced dental surgery, Vellore&apos;s top dental professionals ensure a patient-centered approach with
          modern techniques. Explore trusted dental clinics in Vellore for high-quality dental treatments tailored to
          meet your needs, making Vellore a leading destination for dental care in Tamil Nadu.
        </p>
      </div>

      {/* Visible header content */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-cyan-400">
          Indira Dental
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`hover:text-cyan-600 transition-colors ${pathname === "/" ? "font-medium" : ""}`}>
            Home
          </Link>

          <div className="relative group">
            <button
              className="flex items-center hover:text-cyan-600 transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div
              className={`absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ${servicesOpen ? "block" : "hidden"} group-hover:block`}
            >
              <Link href="/services/general-dentistry" className="block px-4 py-2 hover:bg-gray-100">
                General Dentistry
              </Link>
              <Link href="/services/cosmetic-dentistry" className="block px-4 py-2 hover:bg-gray-100">
                Cosmetic Dentistry
              </Link>
              <Link href="/services/orthodontics" className="block px-4 py-2 hover:bg-gray-100">
                Orthodontics
              </Link>
              <Link href="/services/root-canal" className="block px-4 py-2 hover:bg-gray-100">
                Root Canal Treatment
              </Link>
              <Link href="/services/dental-implants" className="block px-4 py-2 hover:bg-gray-100">
                Dental Implants
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button
              className="flex items-center hover:text-cyan-600 transition-colors"
              onClick={() => setLocationsOpen(!locationsOpen)}
            >
              Locations <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div
              className={`absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ${locationsOpen ? "block" : "hidden"} group-hover:block`}
            >
              <Link href="/dentist-near-me/locations" className="block px-4 py-2 hover:bg-gray-100">
                All Locations
              </Link>
              <Link href="/in/tamil-nadu/vellore" className="block px-4 py-2 hover:bg-gray-100">
                Vellore
              </Link>
            </div>
          </div>

          <Link
            href="/about"
            className={`hover:text-cyan-600 transition-colors ${pathname === "/about" ? "font-medium" : ""}`}
          >
            About Us
          </Link>

          <Link
            href="/blog"
            className={`hover:text-cyan-600 transition-colors ${pathname === "/blog" ? "font-medium" : ""}`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`hover:text-cyan-600 transition-colors ${pathname === "/contact" ? "font-medium" : ""}`}
          >
            Contact
          </Link>
        </nav>

        {/* Phone and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            href="tel:7010650063"
            className="hidden md:flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Phone className="mr-2 h-5 w-5" />
            <span>7010650063</span>
          </Link>

          <button className="p-2 rounded-full hover:bg-blue-200 transition-colors">
            <Sun className="h-5 w-5" />
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-2 bg-white rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`px-4 py-2 hover:bg-blue-50 rounded-md ${pathname === "/" ? "font-medium bg-blue-50" : ""}`}
              onClick={toggleMenu}
            >
              Home
            </Link>

            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 hover:bg-blue-50 rounded-md"
                onClick={toggleServices}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-100 pl-4">
                  <Link
                    href="/services/general-dentistry"
                    className="block py-2 hover:text-blue-600"
                    onClick={toggleMenu}
                  >
                    General Dentistry
                  </Link>
                  <Link
                    href="/services/cosmetic-dentistry"
                    className="block py-2 hover:text-blue-600"
                    onClick={toggleMenu}
                  >
                    Cosmetic Dentistry
                  </Link>
                  <Link href="/services/orthodontics" className="block py-2 hover:text-blue-600" onClick={toggleMenu}>
                    Orthodontics
                  </Link>
                  <Link href="/services/root-canal" className="block py-2 hover:text-blue-600" onClick={toggleMenu}>
                    Root Canal Treatment
                  </Link>
                  <Link
                    href="/services/dental-implants"
                    className="block py-2 hover:text-blue-600"
                    onClick={toggleMenu}
                  >
                    Dental Implants
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 hover:bg-blue-50 rounded-md"
                onClick={toggleLocations}
              >
                <span>Locations</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
              </button>

              {locationsOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-100 pl-4">
                  <Link
                    href="/dentist-near-me/locations"
                    className="block py-2 hover:text-blue-600"
                    onClick={toggleMenu}
                  >
                    All Locations
                  </Link>
                  <Link href="/in/tamil-nadu/vellore" className="block py-2 hover:text-blue-600" onClick={toggleMenu}>
                    Vellore
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-4 py-2 hover:bg-blue-50 rounded-md ${pathname === "/about" ? "font-medium bg-blue-50" : ""}`}
              onClick={toggleMenu}
            >
              About Us
            </Link>

            <Link
              href="/blog"
              className={`px-4 py-2 hover:bg-blue-50 rounded-md ${pathname === "/blog" ? "font-medium bg-blue-50" : ""}`}
              onClick={toggleMenu}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 hover:bg-blue-50 rounded-md ${pathname === "/contact" ? "font-medium bg-blue-50" : ""}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <Link
              href="tel:7010650063"
              className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
              onClick={toggleMenu}
            >
              <Phone className="mr-2 h-5 w-5" />
              <span>7010650063</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
