'use client'

import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Clock,
  Calendar,
  ArrowRight,
  Youtube,
  Heart,
  Star,
  Globe,
  Plane,
  Building2,
  Navigation,
} from "lucide-react"

const nearbyAreas = {
  velloreLocal: [
    { name: "Gandhi Nagar", href: "/in/tamil-nadu/vellore/gandhi-nagar" },
    { name: "Katpadi", href: "/in/tamil-nadu/vellore/katpadi" },
    { name: "Sathuvachari", href: "/in/tamil-nadu/vellore/sathuvachari" },
    { name: "Thorapadi", href: "/in/tamil-nadu/vellore/thorapadi" },
    { name: "Bagayam", href: "/in/tamil-nadu/vellore/bagayam" },
    { name: "Kaspa", href: "/in/tamil-nadu/vellore/kaspa" },
  ],
  nearbyDistricts: [
    { name: "Vellore District", href: "/in/tamil-nadu/vellore" },
    { name: "Ranipet", href: "/in/tamil-nadu/ranipet" },
    { name: "Tirupattur", href: "/in/tamil-nadu/tirupattur" },
    { name: "Tiruvannamalai", href: "/in/tamil-nadu/tiruvannamalai" },
    { name: "Kanchipuram", href: "/in/tamil-nadu/kanchipuram" },
    { name: "Chittoor (AP)", href: "/in/andhra-pradesh/chittoor" },
  ],
  internationalPatients: [
    { name: "Dental Tourism India", href: "/international-patients" },
    { name: "Treatment Packages", href: "/international-patients/packages" },
    { name: "Accommodation Help", href: "/international-patients/accommodation" },
    { name: "Airport Pickup", href: "/international-patients/travel" },
  ],
}

const quickLinks = {
  services: [
    { name: "Root Canal Treatment", href: "/services/root-canal-treatment" },
    { name: "Dental Implants", href: "/services/dental-implants" },
    { name: "Invisalign & Clear Aligners", href: "/services/orthodontics/invisalign" },
    { name: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening" },
    { name: "Orthodontic Braces", href: "/services/orthodontics" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
    { name: "Dental Crowns & Bridges", href: "/services/prosthodontics/dental-crowns" },
    { name: "Gum Disease Treatment", href: "/services/periodontics" },
    { name: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
    { name: "Emergency Dental Care", href: "/services/emergency-dentistry" },
    { name: "Wisdom Teeth Removal", href: "/services/oral-surgery/wisdom-teeth-removal" },
    { name: "Tooth Extraction", href: "/services/oral-surgery/tooth-extraction" },
    { name: "Dental Fillings", href: "/services/restorative-dentistry/dental-fillings" },
    { name: "Dentures", href: "/services/prosthodontics/dentures" },
    { name: "All-on-4 Implants", href: "/services/dental-implants/all-on-4-implants" },
    { name: "Sedation Dentistry", href: "/services/sedation-dentistry" },
    { name: "Laser Dentistry", href: "/services/specialized-services/laser-dentistry" },
    { name: "TMJ Treatment", href: "/services/tmj-treatment" },
    { name: "View All 100+ Services →", href: "/services" },
  ],
  conditions: [
    { name: "Tooth Decay & Cavities", href: "/conditions/tooth-decay" },
    { name: "Gum Disease & Gingivitis", href: "/conditions/gum-disease" },
    { name: "Tooth Sensitivity", href: "/conditions/tooth-sensitivity" },
    { name: "Bad Breath Treatment", href: "/services/bad-breath-treatment" },
    { name: "Dry Mouth (Xerostomia)", href: "/conditions/dry-mouth" },
    { name: "Teeth Grinding (Bruxism)", href: "/conditions/bruxism" },
    { name: "Tooth Abscess", href: "/conditions/tooth-abscess" },
    { name: "Cracked & Broken Teeth", href: "/conditions/cracked-teeth" },
    { name: "Receding Gums", href: "/conditions/receding-gums" },
    { name: "Tooth Erosion", href: "/conditions/tooth-erosion" },
    { name: "Impacted Wisdom Teeth", href: "/conditions/impacted-teeth" },
    { name: "Missing Teeth", href: "/services/dental-implants" },
    { name: "Crooked Teeth", href: "/services/orthodontics" },
    { name: "Stained/Yellow Teeth", href: "/services/cosmetic-dentistry/teeth-whitening" },
    { name: "View All Dental Conditions →", href: "/conditions" },
  ],
  tamilNaduCities: [
    { name: "Best Dentist in Vellore", href: "/in/tamil-nadu/vellore" },
    { name: "Best Dentist in Ranipet", href: "/in/tamil-nadu/ranipet" },
    { name: "Best Dentist in Tirupattur", href: "/in/tamil-nadu/tirupattur" },
    { name: "Best Dentist in Tiruvannamalai", href: "/in/tamil-nadu/tiruvannamalai" },
    { name: "Best Dentist in Kanchipuram", href: "/in/tamil-nadu/kanchipuram" },
    { name: "Best Dentist in Chennai", href: "/in/tamil-nadu/chennai" },
    { name: "Best Dentist in Coimbatore", href: "/in/tamil-nadu/coimbatore" },
    { name: "Best Dentist in Salem", href: "/in/tamil-nadu/salem" },
    { name: "Best Dentist in Madurai", href: "/in/tamil-nadu/madurai" },
    { name: "Best Dentist in Chengalpattu", href: "/in/tamil-nadu/chengalpattu" },
    { name: "View All TN Districts →", href: "/in/tamil-nadu" },
  ],
  company: [
    { name: "About Indira Dental Clinic", href: "/about-us" },
    { name: "Dr. Rockson Samuel Profile", href: "/about-us/dr-rockson-samuel" },
    { name: "Our Dental Team", href: "/about-us/our-team" },
    { name: "Patient Testimonials", href: "/testimonials" },
    { name: "Before & After Gallery", href: "/gallery" },
    { name: "Dental Blog & Tips", href: "/blog" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Sitemap", href: "/sitemap" },
  ],
  resources: [
    { name: "Ask the Dentist Q&A", href: "/ask-the-dentist" },
    { name: "Submit Your Question", href: "/ask-the-dentist/submit" },
    { name: "Dental Health Blog", href: "/blog" },
    { name: "Transparent Pricing", href: "/pricing" },
    { name: "Insurance & Financing", href: "/financing" },
    { name: "Frequently Asked Questions", href: "/faq" },
    { name: "Contact & Directions", href: "/contact" },
    { name: "Book Appointment", href: "/contact#appointment" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Find Dentist Near Me Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin className="h-4 w-4" />
                Find Us Nearby
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Find Dentist Near Me</h2>
              <p className="text-gray-400 text-lg">
                Serving Vellore & nearby areas | International patients welcome
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Local Areas */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="h-5 w-5 text-teal-400" />
                  <h3 className="font-bold text-white">Vellore Local Areas</h3>
                </div>
                <ul className="space-y-2">
                  {nearbyAreas.velloreLocal.map((area) => (
                    <li key={area.href}>
                      <Link href={area.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2">
                        <ArrowRight className="h-3 w-3" />
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nearby Districts */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Navigation className="h-5 w-5 text-blue-400" />
                  <h3 className="font-bold text-white">Nearby Districts</h3>
                </div>
                <ul className="space-y-2">
                  {nearbyAreas.nearbyDistricts.map((district) => (
                    <li key={district.href}>
                      <Link href={district.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                        <ArrowRight className="h-3 w-3" />
                        {district.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* International Patients */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Plane className="h-5 w-5 text-orange-400" />
                  <h3 className="font-bold text-white">International Patients</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">🌍 Dental Tourism - Quality care at 60% lower cost than Western countries</p>
                <ul className="space-y-2">
                  {nearbyAreas.internationalPatients.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href} className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2">
                        <Globe className="h-3 w-3" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Link 
                href="/dentist-near-me" 
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold"
              >
                <MapPin className="h-4 w-4" />
                View All Locations & Service Areas →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IDC</span>
                </div>
                <div>
                  <div className="font-bold text-xl text-white">Indira Dental Clinic</div>
                  <div className="text-sm text-gray-400">Dr. Rockson Samuel (BDS, PgDM, BDM)</div>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premier dental clinic in Vellore offering comprehensive dental care for 15+ years. 
                Specializing in painless treatments, advanced technology, and patient-centered care.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-white">5.0/5.0</span>
                </div>
                <span className="text-gray-400">8,600+ Patient Reviews</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/indiradentalclinicvellore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/indiradentalvellore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links - Services */}
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Popular Services</h3>
              <ul className="space-y-3">
                {quickLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group">
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Company</h3>
              <ul className="space-y-3">
                {quickLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group">
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Contact */}
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Resources</h3>
              <ul className="space-y-3 mb-6">
                {quickLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group">
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tamil Nadu Districts */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="font-bold text-white mb-6 text-lg">Best Dentist in Tamil Nadu Districts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {quickLinks.tamilNaduCities.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-1 group"
                >
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  <span className="truncate">{link.name.replace('Best Dentist in ', '')}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Google Map Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Embed */}
              <div>
                <h3 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-teal-400" />
                  Find Us on Google Maps
                </h3>
                <div className="rounded-lg overflow-hidden border-2 border-gray-700 shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2784186240674!2d79.1369615!3d12.9540278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad394e9843620f%3A0xc7a4b2fb0991e086!2sIndira%20Dental%20Clinic%20%7C%20Dr%20Rockson%20Samuel%20%7C%20Top%20Dentist%20in%20Vellore%20for%20RCT%2C%20Braces%2C%20Implants%2C%20%26%20Dental%20Fillings!5e0!3m2!1sen!2sin!4v1761639111586!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Indira Dental Clinic | Dr Rockson Samuel | Top Dentist in Vellore"
                  ></iframe>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <a 
                    href="https://www.google.com/maps?cid=14385819900995297414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-semibold"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions to Clinic →
                  </a>
                  <a 
                    href="https://www.google.com/maps?cid=14385819900995297414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold"
                  >
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    View 500+ Google Reviews (5.0★) →
                  </a>
                </div>
              </div>

              {/* Conditions List */}
              <div>
                <h3 className="font-bold text-white mb-4 text-lg">Dental Conditions We Treat</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {quickLinks.conditions.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group">
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-500/10 rounded-lg">
                <Phone className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Call Us 24/7</div>
                <a href="tel:7010650063" className="text-white font-bold text-lg hover:text-teal-400 transition-colors">
                  7010650063
                </a>
                <div className="text-xs text-gray-500 mt-1">Emergency hotline available</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Visit Our Clinic</div>
                <a 
                  href="https://maps.google.com/maps?cid=14385819900995297414" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors text-sm"
                >
                  3rd Floor, 54, Katpadi Main Rd,<br />
                  Gandhi Nagar, Vellore 632006
                </a>
                <div className="text-xs text-gray-500 mt-1">Get directions →</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500/10 rounded-lg">
                <Clock className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Working Hours</div>
                <div className="text-white text-sm">
                  <div>Mon-Sat: 10:00 AM - 8:00 PM</div>
                  <div>Sunday: 10:00 AM - 1:30 PM</div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Emergency: 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Indira Dental Clinic. All rights reserved. | Designed with{" "}
              <Heart className="h-3 w-3 inline text-red-500 fill-red-500" /> for better smiles.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-teal-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
