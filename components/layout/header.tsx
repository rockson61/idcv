'use client'

import Link from 'next/link'
import { ChevronDown, Phone, MapPin, Calendar, Mail, Star, Shield } from "lucide-react"

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

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Ask the Dentist", href: "/ask-the-dentist" },
  { label: "Contact", href: "/contact" },
]

function DesktopMenu() {
  return (
    <nav className="hidden lg:flex items-center space-x-1">
      <Link
        href="/"
        className="px-4 py-2 rounded-lg font-medium text-gray-700 transition-colors hover:text-teal-600 hover:bg-teal-50"
      >
        Home
      </Link>
      <div className="relative group">
        <button className="px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 text-gray-700 hover:text-teal-600 hover:bg-teal-50">
          Services
          <ChevronDown className="h-4 w-4 transition-transform group-hover:-rotate-180" />
        </button>
        <div className="absolute left-0 top-full mt-2 w-screen max-w-5xl bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
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
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <Link href="/services" className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-2">
              View All Services →
            </Link>
          </div>
        </div>
      </div>
      {navLinks.filter(link => link.href !== "/").map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="px-4 py-2 rounded-lg font-medium text-gray-700 transition-colors hover:text-teal-600 hover:bg-teal-50"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

function MobileMenu() {
  return (
    <div className="lg:hidden bg-white border-b border-gray-200">
      <input type="checkbox" id="mobile-nav" className="peer hidden" />
      <div className="peer-checked:max-h-[90vh] max-h-0 overflow-hidden transition-[max-height] duration-300">
        <div className="container mx-auto px-4 py-6 space-y-6">
          <div className="space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium">
              Home
            </Link>
            <details className="group">
              <summary className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium cursor-pointer">
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
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
            </details>
            {navLinks.filter(link => link.href !== "/").map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4 space-y-3">
            <a
              href="tel:7010650063"
              className="block px-4 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium text-center"
            >
              Call: 7010650063
            </a>
            <Link
              href="/contact"
              className="block px-4 py-3 bg-orange-600 text-white rounded-lg font-medium text-center"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Header() {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      <div className="hidden lg:block bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:7010650063" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">7010650063</span>
              </a>
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5" />
                <span>Mon-Sat: 10AM-8PM | Sun: 10AM-1:30PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                <span>Gandhi Nagar, Vellore</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                <span>rockson68@hotmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">5.0/5.0 Rating | 8,600+ Reviews</span>
              </div>
              <Link href="/contact" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Shield className="h-3.5 w-3.5" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
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

            <DesktopMenu />

            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:7010650063"
                className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:from-teal-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Call Now
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Book Online
              </Link>
            </div>

            <label htmlFor="mobile-nav" className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
              <span className="sr-only">Toggle menu</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>

      <MobileMenu />
    </header>
  )
}
