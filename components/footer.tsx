import Link from "next/link"
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Indira Dental Clinic</h3>
            <p className="mb-2 flex items-start">
              <MapPinIcon className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
              <span>
                3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006
              </span>
            </p>
            <p className="mb-2 flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
              <a href="tel:7010650063" className="hover:text-yellow-300">
                7010650063
              </a>
            </p>
            <p className="mb-2 flex items-center">
              <MailIcon className="h-5 w-5 mr-2 flex-shrink-0" />
              <a href="mailto:rockson68@hotmail.com" className="hover:text-yellow-300">
                rockson68@hotmail.com
              </a>
            </p>
            <p className="mb-2 flex items-center">
              <ClockIcon className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>Mon-Sat: 10am-8pm, Sun: 10am-1:30pm</span>
            </p>
            <p className="mt-4">
              <a
                href="https://www.google.com/maps/dir//Indira+Dental+Clinic,+3rd+Floor,+54,+Katpadi+Main+Rd,+Suthanthira+Ponvizha+Nagar,+Gandhi+Nagar,+Vellore,+Tamil+Nadu+632006/@12.9697247,79.1325363,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:underline flex items-center"
              >
                <MapPinIcon className="h-4 w-4 mr-1" />
                Get Directions
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-yellow-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/dental-tourism" className="hover:text-yellow-300">
                  Dental Tourism
                </Link>
              </li>
              <li>
                <Link href="/dentist-near-me/locations" className="hover:text-yellow-300">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-yellow-300">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Vellore Locations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vellore Locations</h3>

            {/* Main Vellore Clinic */}
            <div className="mb-3">
              <h4 className="font-semibold text-yellow-300">
                <Link href="/dentist-near-me/locations/vellore" className="hover:underline">
                  Vellore Main Clinic <span className="text-xs text-gray-300">(flagship center)</span>
                </Link>
              </h4>
              <p className="text-sm text-gray-300 mb-2">Full-service dental care & tourism hub</p>
            </div>

            {/* Sub-locations in Vellore */}
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dentist-near-me/locations/vellore/katpadi" className="hover:text-yellow-300">
                  Katpadi <span className="text-xs text-gray-300">(near railway station)</span>
                </Link>
                <p className="text-xs text-gray-300">Specializing in dental implants & RCT</p>
              </li>
              <li>
                <Link href="/dentist-near-me/locations/vellore/gandhi-nagar" className="hover:text-yellow-300">
                  Gandhi Nagar <span className="text-xs text-gray-300">(central location)</span>
                </Link>
                <p className="text-xs text-gray-300">Cosmetic dentistry & family care</p>
              </li>
              <li>
                <Link href="/dentist-near-me/locations/vellore/sathuvachari" className="hover:text-yellow-300">
                  Sathuvachari <span className="text-xs text-gray-300">(residential area)</span>
                </Link>
                <p className="text-xs text-gray-300">Pediatric dentistry & orthodontics</p>
              </li>
              <li>
                <Link href="/dentist-near-me/locations/vellore/bagayam" className="hover:text-yellow-300">
                  Bagayam <span className="text-xs text-gray-300">(near CMC)</span>
                </Link>
                <p className="text-xs text-gray-300">Advanced surgical procedures</p>
              </li>
              <li>
                <Link href="/dentist-near-me/locations/vellore/ranipet" className="hover:text-yellow-300">
                  Ranipet <span className="text-xs text-gray-300">(industrial zone)</span>
                </Link>
                <p className="text-xs text-gray-300">Emergency dental care & general dentistry</p>
              </li>
            </ul>

            <div className="mt-3">
              <Link href="/dentist-near-me/locations" className="text-yellow-300 hover:underline">
                View All Locations →
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>

            {/* General Dental Care */}
            <div className="mb-4">
              <h4 className="font-semibold text-yellow-300">General Dental Care</h4>
              <ul className="text-sm">
                <li>
                  <Link href="/services#general-dentistry" className="hover:text-yellow-300">
                    Regular checkups <span className="text-xs text-gray-300">(preventive dentistry)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#dental-fillings" className="hover:text-yellow-300">
                    Dental fillings <span className="text-xs text-gray-300">(tooth restoration)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#emergency-care" className="hover:text-yellow-300">
                    Dental emergencies <span className="text-xs text-gray-300">(urgent care)</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cosmetic Dentistry */}
            <div className="mb-4">
              <h4 className="font-semibold text-yellow-300">Cosmetic Dentistry</h4>
              <ul className="text-sm">
                <li>
                  <Link href="/services#teeth-whitening" className="hover:text-yellow-300">
                    Teeth whitening <span className="text-xs text-gray-300">(smile enhancement)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#veneers" className="hover:text-yellow-300">
                    Veneers <span className="text-xs text-gray-300">(porcelain laminates)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#smile-makeover" className="hover:text-yellow-300">
                    Smile makeover <span className="text-xs text-gray-300">(aesthetic dentistry)</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Restorative Treatments */}
            <div className="mb-4">
              <h4 className="font-semibold text-yellow-300">Restorative Treatments</h4>
              <ul className="text-sm">
                <li>
                  <Link href="/services#dental-implants" className="hover:text-yellow-300">
                    Dental implants <span className="text-xs text-gray-300">(tooth replacement)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#root-canal" className="hover:text-yellow-300">
                    Root canal treatment <span className="text-xs text-gray-300">(endodontic therapy)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#crowns-bridges" className="hover:text-yellow-300">
                    Crowns and bridges <span className="text-xs text-gray-300">(dental prosthetics)</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <Link href="/services" className="text-yellow-300 hover:underline">
                View All Services →
              </Link>
            </div>
          </div>
        </div>

        {/* Dental Clinics in Vellore Content Accordions */}
        <div className="mt-10 border-t border-blue-800 pt-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-yellow-300">
            Dental Clinics in Vellore - Information Hub
          </h3>

          {/* Best Dental Clinics in Vellore */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">
                Best Dental Clinics in Vellore: Find the Right Dentist for Your Needs
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                Vellore is home to some of the{" "}
                <Link href="/dentist-near-me/locations/vellore" className="text-yellow-300 hover:underline">
                  best dental clinics
                </Link>
                , offering top-notch services for patients seeking quality{" "}
                <Link href="/services" className="text-yellow-300 hover:underline">
                  dental care
                </Link>
                . Whether you're looking for a{" "}
                <Link href="/dentist-near-me/locations/vellore" className="text-yellow-300 hover:underline">
                  dentist in Vellore
                </Link>{" "}
                for routine checkups,{" "}
                <Link href="/services#dental-implants" className="text-yellow-300 hover:underline">
                  dental implants
                </Link>
                , or{" "}
                <Link href="/services#cosmetic-dentistry" className="text-yellow-300 hover:underline">
                  cosmetic dentistry
                </Link>
                , this guide will help you find the best options available. We cover everything from{" "}
                <Link href="/services" className="text-yellow-300 hover:underline">
                  dental procedures
                </Link>{" "}
                to{" "}
                <Link href="/services" className="text-yellow-300 hover:underline">
                  affordable dental care
                </Link>
                , ensuring you make an informed decision.
              </p>
              <p className="mb-3">
                At{" "}
                <Link href="/" className="text-yellow-300 hover:underline">
                  Indira Dental Clinic
                </Link>
                ,{" "}
                <Link href="/about" className="text-yellow-300 hover:underline">
                  Dr. Rockson Samuel
                </Link>{" "}
                provides comprehensive dental services including{" "}
                <Link href="/services#root-canal" className="text-yellow-300 hover:underline">
                  root canal treatment
                </Link>
                ,{" "}
                <Link href="/services#braces" className="text-yellow-300 hover:underline">
                  braces
                </Link>
                ,{" "}
                <Link href="/services#dental-implants" className="text-yellow-300 hover:underline">
                  implants
                </Link>
                , and{" "}
                <Link href="/services#dental-fillings" className="text-yellow-300 hover:underline">
                  dental fillings
                </Link>
                . Our state-of-the-art facility in Vellore ensures you receive the highest quality care for all your
                dental needs.
              </p>
            </div>
          </details>

          {/* Why Choose a Dental Clinic in Vellore? */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Why Choose a Dental Clinic in Vellore?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                Vellore is known for its{" "}
                <Link href="/about" className="text-yellow-300 hover:underline">
                  top dentists
                </Link>{" "}
                and{" "}
                <Link href="/services" className="text-yellow-300 hover:underline">
                  advanced dental care
                </Link>{" "}
                facilities. The city offers{" "}
                <Link href="/services" className="text-yellow-300 hover:underline">
                  affordable dental care
                </Link>{" "}
                without compromising on quality. Many clinics use cutting-edge technology for treatments like{" "}
                <Link href="/services#dental-implants" className="text-yellow-300 hover:underline">
                  dental implants
                </Link>
                ,{" "}
                <Link href="/services#root-canal" className="text-yellow-300 hover:underline">
                  root canal therapy
                </Link>
                , and{" "}
                <Link href="/services#cosmetic-dentistry" className="text-yellow-300 hover:underline">
                  cosmetic dental procedures
                </Link>
                .
              </p>
              <p className="mb-3">
                At{" "}
                <Link href="/" className="text-yellow-300 hover:underline">
                  Indira Dental Clinic
                </Link>
                , we combine years of expertise with modern dental technology to provide exceptional care. Our central
                location in{" "}
                <Link href="/dentist-near-me/locations/vellore" className="text-yellow-300 hover:underline">
                  Vellore
                </Link>{" "}
                makes us accessible to patients from all areas, and our comprehensive range of{" "}
                <Link href="/services" className="text-yellow-300 hover:underline">
                  services
                </Link>{" "}
                means you can address all your dental needs under one roof.
              </p>
            </div>
          </details>

          {/* Services We Offer */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Services We Offer</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-2">At Indira Dental Clinic, we provide a range of dental services, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>
                    <Link href="/services#general-dentistry" className="text-yellow-300 hover:underline">
                      General Dentistry
                    </Link>
                    :
                  </strong>{" "}
                  <Link href="/services#dental-checkups" className="text-yellow-300 hover:underline">
                    Dental checkups
                  </Link>
                  ,{" "}
                  <Link href="/services#dental-fillings" className="text-yellow-300 hover:underline">
                    fillings
                  </Link>
                  , and{" "}
                  <Link href="/services#preventive-care" className="text-yellow-300 hover:underline">
                    preventive care
                  </Link>
                  .
                </li>
                <li>
                  <strong>
                    <Link href="/services#cosmetic-dentistry" className="text-yellow-300 hover:underline">
                      Cosmetic Dentistry
                    </Link>
                    :
                  </strong>{" "}
                  <Link href="/services#teeth-whitening" className="text-yellow-300 hover:underline">
                    Teeth whitening
                  </Link>
                  ,{" "}
                  <Link href="/services#veneers" className="text-yellow-300 hover:underline">
                    veneers
                  </Link>
                  , and{" "}
                  <Link href="/services#dental-crowns" className="text-yellow-300 hover:underline">
                    dental crowns
                  </Link>
                  .
                </li>
                <li>
                  <strong>
                    <Link href="/services#restorative-dentistry" className="text-yellow-300 hover:underline">
                      Restorative Dentistry
                    </Link>
                    :
                  </strong>{" "}
                  <Link href="/services#dental-implants" className="text-yellow-300 hover:underline">
                    Dental implants
                  </Link>
                  ,{" "}
                  <Link href="/services#bridges" className="text-yellow-300 hover:underline">
                    bridges
                  </Link>
                  , and{" "}
                  <Link href="/services#root-canal" className="text-yellow-300 hover:underline">
                    root canal treatment
                  </Link>
                  .
                </li>
                <li>
                  <strong>
                    <Link href="/services#emergency-care" className="text-yellow-300 hover:underline">
                      Emergency Dental Care
                    </Link>
                    :
                  </strong>{" "}
                  Quick relief for{" "}
                  <Link href="/services#emergency-care" className="text-yellow-300 hover:underline">
                    dental emergencies
                  </Link>{" "}
                  like toothaches or broken teeth.
                </li>
              </ul>
            </div>
          </details>

          {/* How to Find the Best Dentist in Vellore? */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">How to Find the Best Dentist in Vellore?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-2">
                Finding the{" "}
                <Link href="/dentist-near-me/locations/vellore" className="text-yellow-300 hover:underline">
                  best dentist in Vellore
                </Link>{" "}
                requires considering:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>
                    <Link href="/about" className="text-yellow-300 hover:underline">
                      Experience & Qualifications
                    </Link>
                  </strong>{" "}
                  – Check their background and patient reviews.
                </li>
                <li>
                  <strong>
                    <Link href="/about" className="text-yellow-300 hover:underline">
                      Clinic Facilities
                    </Link>
                  </strong>{" "}
                  – Ensure modern equipment and hygienic practices.
                </li>
                <li>
                  <strong>
                    <Link href="/services" className="text-yellow-300 hover:underline">
                      Treatment Costs
                    </Link>
                  </strong>{" "}
                  – Compare prices across different{" "}
                  <Link href="/dentist-near-me/locations" className="text-yellow-300 hover:underline">
                    dental clinics near Vellore
                  </Link>
                  .
                </li>
              </ul>
              <p className="mt-3">
                At{" "}
                <Link href="/" className="text-yellow-300 hover:underline">
                  Indira Dental Clinic
                </Link>
                ,{" "}
                <Link href="/about" className="text-yellow-300 hover:underline">
                  Dr. Rockson Samuel
                </Link>{" "}
                brings years of experience and expertise to provide top-quality dental care. Our modern facility is
                equipped with the latest technology, and we offer competitive pricing for all our services.
              </p>
            </div>
          </details>

          {/* Common Dental Problems & Treatments */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Common Dental Problems & Treatments</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-2">Some of the most common dental issues treated at Indira Dental Clinic include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>
                    <Link href="/services#tooth-decay" className="text-yellow-300 hover:underline">
                      Tooth Decay
                    </Link>
                  </strong>{" "}
                  – Treated with{" "}
                  <Link href="/services#dental-fillings" className="text-yellow-300 hover:underline">
                    dental fillings
                  </Link>{" "}
                  and{" "}
                  <Link href="/services#root-canal" className="text-yellow-300 hover:underline">
                    root canal therapy
                  </Link>
                  .
                </li>
                <li>
                  <strong>
                    <Link href="/services#gum-disease" className="text-yellow-300 hover:underline">
                      Gum Disease
                    </Link>
                  </strong>{" "}
                  – Managed with{" "}
                  <Link href="/services#deep-cleaning" className="text-yellow-300 hover:underline">
                    deep cleaning
                  </Link>{" "}
                  and{" "}
                  <Link href="/services#preventive-care" className="text-yellow-300 hover:underline">
                    preventive care
                  </Link>
                  .
                </li>
                <li>
                  <strong>
                    <Link href="/services#missing-teeth" className="text-yellow-300 hover:underline">
                      Missing Teeth
                    </Link>
                  </strong>{" "}
                  – Restored with{" "}
                  <Link href="/services#dental-implants" className="text-yellow-300 hover:underline">
                    dental implants
                  </Link>{" "}
                  or{" "}
                  <Link href="/services#bridges" className="text-yellow-300 hover:underline">
                    bridges
                  </Link>
                  .
                </li>
              </ul>
            </div>
          </details>

          {/* Cost of Dental Treatments in Vellore */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Cost of Dental Treatments in Vellore</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-2">
                The cost of dental procedures at Indira Dental Clinic varies based on treatment type:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <Link href="/services#dental-implants" className="text-yellow-300 hover:underline">
                    Dental Implants
                  </Link>
                  : ₹30,000 - ₹60,000
                </li>
                <li>
                  <Link href="/services#root-canal" className="text-yellow-300 hover:underline">
                    Root Canal Treatment
                  </Link>
                  : ₹5,000 - ₹12,000
                </li>
                <li>
                  <Link href="/services#braces" className="text-yellow-300 hover:underline">
                    Braces
                  </Link>
                  : ₹25,000 - ₹80,000
                </li>
                <li>
                  <Link href="/services#teeth-whitening" className="text-yellow-300 hover:underline">
                    Teeth Whitening
                  </Link>
                  : ₹5,000 - ₹15,000
                </li>
              </ul>
              <p className="mt-3">
                For detailed pricing information, please{" "}
                <Link href="/contact" className="text-yellow-300 hover:underline">
                  contact us
                </Link>{" "}
                or schedule a consultation.
              </p>
            </div>
          </details>

          {/* Dental Implants at Indira Dental Clinic */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Dental Implants at Indira Dental Clinic</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                For those needing{" "}
                <Link href="/services#dental-implants" className="text-yellow-300 hover:underline">
                  dental implants
                </Link>
                , Indira Dental Clinic offers advanced procedures ensuring durability and a natural look. Our dental
                implant solutions are designed to provide a permanent replacement for missing teeth, improving both
                function and aesthetics.
              </p>
              <p className="mb-3">
                <Link href="/about" className="text-yellow-300 hover:underline">
                  Dr. Rockson Samuel
                </Link>{" "}
                specializes in{" "}
                <Link href="/services#implant-dentistry" className="text-yellow-300 hover:underline">
                  implant dentistry
                </Link>{" "}
                and uses the latest techniques to ensure successful outcomes.
              </p>
            </div>
          </details>

          {/* Cosmetic Dentistry Services */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Cosmetic Dentistry Services</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-2">Enhance your smile with our cosmetic dental services such as:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <Link href="/services#teeth-whitening" className="text-yellow-300 hover:underline">
                    Teeth whitening
                  </Link>
                </li>
                <li>
                  <Link href="/services#veneers" className="text-yellow-300 hover:underline">
                    Veneers
                  </Link>{" "}
                  and{" "}
                  <Link href="/services#dental-crowns" className="text-yellow-300 hover:underline">
                    dental crowns
                  </Link>
                </li>
                <li>
                  <Link href="/services#smile-makeover" className="text-yellow-300 hover:underline">
                    Smile makeovers
                  </Link>
                </li>
              </ul>
              <p className="mt-3">
                Our{" "}
                <Link href="/services#cosmetic-dentistry" className="text-yellow-300 hover:underline">
                  cosmetic dentistry
                </Link>{" "}
                services are designed to give you the confident smile you deserve. Using the latest techniques and
                materials, we can transform your smile while maintaining natural aesthetics.
              </p>
            </div>
          </details>

          {/* Emergency Dental Care */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Emergency Dental Care</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                If you have a{" "}
                <Link href="/services#emergency-care" className="text-yellow-300 hover:underline">
                  dental emergency
                </Link>
                , Indira Dental Clinic provides urgent treatments. We handle severe toothaches, broken teeth, and
                infections with prompt and effective care.
              </p>
              <p className="mb-3">
                Our extended hours and dedicated emergency slots ensure you can get the care you need when you need it
                most.
              </p>
            </div>
          </details>

          {/* Book Your Appointment */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Book Your Appointment</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                At{" "}
                <Link href="/" className="text-yellow-300 hover:underline">
                  Indira Dental Clinic
                </Link>
                , we make it easy to schedule your dental appointment. Whether you need a regular{" "}
                <Link href="/services#dental-checkups" className="text-yellow-300 hover:underline">
                  dental checkup
                </Link>{" "}
                or specialized treatment, scheduling in advance ensures timely care.
              </p>
              <p className="mb-3">
                Contact us at{" "}
                <a href="tel:7010650063" className="text-yellow-300 hover:underline">
                  7010650063
                </a>{" "}
                or{" "}
                <Link href="/contact" className="text-yellow-300 hover:underline">
                  visit our contact page
                </Link>{" "}
                to book your appointment today.
              </p>
            </div>
          </details>

          {/* FAQs on Dental Care */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">FAQs on Dental Care</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">1. How often should I visit the dentist?</h4>
                  <p>
                    Most dental professionals recommend visiting the dentist every six months for a checkup and
                    cleaning. However, some patients may need more frequent visits depending on their oral health needs.{" "}
                    <Link href="/faq#general-q1" className="text-yellow-300 hover:underline">
                      Read more
                    </Link>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">2. What should I do in case of a dental emergency?</h4>
                  <p>
                    If you experience a dental emergency such as severe pain, a broken tooth, or an infection, contact
                    Indira Dental Clinic immediately at{" "}
                    <a href="tel:7010650063" className="text-yellow-300 hover:underline">
                      7010650063
                    </a>
                    . We offer emergency dental services to address urgent dental issues.{" "}
                    <Link href="/faq#emergency-q1" className="text-yellow-300 hover:underline">
                      Read more
                    </Link>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">3. How long does a dental implant procedure take?</h4>
                  <p>
                    The{" "}
                    <Link href="/services#dental-implants" className="text-yellow-300 hover:underline">
                      dental implant
                    </Link>{" "}
                    process typically takes several months from start to finish. This includes the initial consultation,
                    implant placement surgery, healing period, and final restoration. The exact timeline varies based on
                    individual factors.{" "}
                    <Link href="/faq#implant-q1" className="text-yellow-300 hover:underline">
                      Read more
                    </Link>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">4. Is root canal treatment painful?</h4>
                  <p>
                    Modern{" "}
                    <Link href="/services#root-canal" className="text-yellow-300 hover:underline">
                      root canal
                    </Link>{" "}
                    procedures are much more comfortable than their reputation suggests. With local anesthesia and
                    advanced techniques, most patients experience little to no pain during the procedure.{" "}
                    <Link href="/faq#rct-q1" className="text-yellow-300 hover:underline">
                      Read more
                    </Link>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">5. How can I improve my smile?</h4>
                  <p>
                    There are many options for enhancing your smile, including{" "}
                    <Link href="/services#teeth-whitening" className="text-yellow-300 hover:underline">
                      teeth whitening
                    </Link>
                    ,{" "}
                    <Link href="/services#veneers" className="text-yellow-300 hover:underline">
                      veneers
                    </Link>
                    , bonding, and orthodontic treatments. During a consultation at Indira Dental Clinic, Dr. Rockson
                    Samuel will assess your needs and recommend the most appropriate treatments to achieve your desired
                    smile.{" "}
                    <Link href="/faq#cosmetic-q1" className="text-yellow-300 hover:underline">
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
              <p className="mt-4">
                For more frequently asked questions, please visit our{" "}
                <Link href="/faq" className="text-yellow-300 hover:underline">
                  complete FAQ page
                </Link>
                .
              </p>
            </div>
          </details>
        </div>

        {/* Keyword Cluster Accordions */}
        <div className="mt-10 border-t border-blue-800 pt-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-yellow-300">
            Dental Knowledge Hub - Keyword Clusters
          </h3>

          {/* Dental Clinics & Hospitals */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Dental Clinics & Hospitals</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/dentist-near-me/locations/vellore" className="text-yellow-300 hover:underline">
                Dental Clinics in Vellore
              </Link>
              <Link href="/dentist-near-me/locations/vellore/katpadi" className="text-yellow-300 hover:underline">
                Katpadi Dental Hospital
              </Link>
              <Link href="/dentist-near-me/locations/vellore/gandhi-nagar" className="text-yellow-300 hover:underline">
                Gandhi Nagar Dental Clinic
              </Link>
              <Link href="/dentist-near-me/locations/vellore/sathuvachari" className="text-yellow-300 hover:underline">
                Sathuvachari Dental Care
              </Link>
              <Link href="/dentist-near-me/locations/vellore/bagayam" className="text-yellow-300 hover:underline">
                Bagayam Dental Hospital
              </Link>
              <Link href="/dentist-near-me/locations/vellore/ranipet" className="text-yellow-300 hover:underline">
                Ranipet Dental Clinic
              </Link>
              <Link href="/dentist-near-me/locations" className="text-yellow-300 hover:underline">
                All Dental Locations
              </Link>
              <Link href="/about" className="text-yellow-300 hover:underline">
                About Our Dental Clinic
              </Link>
              <Link href="/contact" className="text-yellow-300 hover:underline">
                Contact Dental Clinic
              </Link>
            </div>
          </details>

          {/* Dental Treatments & Procedures */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Dental Treatments & Procedures</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/services#root-canal" className="text-yellow-300 hover:underline">
                Root Canal Treatment
              </Link>
              <Link href="/services#dental-implants" className="text-yellow-300 hover:underline">
                Dental Implants
              </Link>
              <Link href="/services#dental-fillings" className="text-yellow-300 hover:underline">
                Dental Fillings
              </Link>
              <Link href="/services#tooth-extraction" className="text-yellow-300 hover:underline">
                Tooth Extraction
              </Link>
              <Link href="/services#wisdom-teeth" className="text-yellow-300 hover:underline">
                Wisdom Teeth Removal
              </Link>
              <Link href="/services#dental-crowns" className="text-yellow-300 hover:underline">
                Dental Crowns
              </Link>
              <Link href="/services#bridges" className="text-yellow-300 hover:underline">
                Dental Bridges
              </Link>
              <Link href="/services#dentures" className="text-yellow-300 hover:underline">
                Dentures
              </Link>
              <Link href="/services#preventive-care" className="text-yellow-300 hover:underline">
                Preventive Dental Care
              </Link>
            </div>
          </details>

          {/* Orthodontics & Cosmetic Dentistry */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Orthodontics & Cosmetic Dentistry</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/services#braces" className="text-yellow-300 hover:underline">
                Dental Braces
              </Link>
              <Link href="/services#clear-aligners" className="text-yellow-300 hover:underline">
                Clear Aligners
              </Link>
              <Link href="/services#teeth-whitening" className="text-yellow-300 hover:underline">
                Teeth Whitening
              </Link>
              <Link href="/services#veneers" className="text-yellow-300 hover:underline">
                Dental Veneers
              </Link>
              <Link href="/services#smile-makeover" className="text-yellow-300 hover:underline">
                Smile Makeover
              </Link>
              <Link href="/services#dental-bonding" className="text-yellow-300 hover:underline">
                Dental Bonding
              </Link>
              <Link href="/services#gum-contouring" className="text-yellow-300 hover:underline">
                Gum Contouring
              </Link>
              <Link href="/services#cosmetic-dentistry" className="text-yellow-300 hover:underline">
                Cosmetic Dentistry
              </Link>
              <Link href="/services#orthodontics" className="text-yellow-300 hover:underline">
                Orthodontic Treatment
              </Link>
            </div>
          </details>

          {/* Find a Dentist Near You */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Find a Dentist Near You</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/dentist-near-me/locations/vellore" className="text-yellow-300 hover:underline">
                Dentist in Vellore
              </Link>
              <Link href="/dentist-near-me/locations/vellore/katpadi" className="text-yellow-300 hover:underline">
                Dentist in Katpadi
              </Link>
              <Link href="/dentist-near-me/locations/vellore/gandhi-nagar" className="text-yellow-300 hover:underline">
                Dentist in Gandhi Nagar
              </Link>
              <Link href="/dentist-near-me/locations/vellore/sathuvachari" className="text-yellow-300 hover:underline">
                Dentist in Sathuvachari
              </Link>
              <Link href="/dentist-near-me/locations/vellore/bagayam" className="text-yellow-300 hover:underline">
                Dentist in Bagayam
              </Link>
              <Link href="/dentist-near-me/locations/vellore/ranipet" className="text-yellow-300 hover:underline">
                Dentist in Ranipet
              </Link>
              <Link href="/dentist-near-me/locations" className="text-yellow-300 hover:underline">
                All Dentist Locations
              </Link>
              <Link href="/contact" className="text-yellow-300 hover:underline">
                Book Dentist Appointment
              </Link>
              <Link href="/about" className="text-yellow-300 hover:underline">
                Meet Our Dentists
              </Link>
            </div>
          </details>

          {/* Top-Rated Dental Clinics & Specialists */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Top-Rated Dental Clinics & Specialists</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/dentist-near-me/locations/vellore" className="text-yellow-300 hover:underline">
                Best Dental Clinic in Vellore
              </Link>
              <Link href="/about" className="text-yellow-300 hover:underline">
                Top Dentist in Vellore
              </Link>
              <Link href="/services#dental-implants" className="text-yellow-300 hover:underline">
                Best Implant Dentist
              </Link>
              <Link href="/services#root-canal" className="text-yellow-300 hover:underline">
                Root Canal Specialist
              </Link>
              <Link href="/services#orthodontics" className="text-yellow-300 hover:underline">
                Orthodontist in Vellore
              </Link>
              <Link href="/services#cosmetic-dentistry" className="text-yellow-300 hover:underline">
                Cosmetic Dentist
              </Link>
              <Link href="/services#pediatric-dentistry" className="text-yellow-300 hover:underline">
                Pediatric Dentist
              </Link>
              <Link href="/services#oral-surgery" className="text-yellow-300 hover:underline">
                Oral Surgeon
              </Link>
              <Link href="/about" className="text-yellow-300 hover:underline">
                Dr. Rockson Samuel
              </Link>
            </div>
          </details>

          {/* Location-Specific Dental Clinics */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Location-Specific Dental Clinics</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/dentist-near-me/locations/vellore" className="text-yellow-300 hover:underline">
                Vellore Dental Clinic
              </Link>
              <Link href="/dentist-near-me/locations/vellore/katpadi" className="text-yellow-300 hover:underline">
                Katpadi Dental Clinic
              </Link>
              <Link href="/dentist-near-me/locations/vellore/gandhi-nagar" className="text-yellow-300 hover:underline">
                Gandhi Nagar Dental Clinic
              </Link>
              <Link href="/dentist-near-me/locations/vellore/sathuvachari" className="text-yellow-300 hover:underline">
                Sathuvachari Dental Clinic
              </Link>
              <Link href="/dentist-near-me/locations/vellore/bagayam" className="text-yellow-300 hover:underline">
                Bagayam Dental Clinic
              </Link>
              <Link href="/dentist-near-me/locations/vellore/ranipet" className="text-yellow-300 hover:underline">
                Ranipet Dental Clinic
              </Link>
              <Link href="/dentist-near-me/locations" className="text-yellow-300 hover:underline">
                All Dental Locations
              </Link>
              <Link href="/contact" className="text-yellow-300 hover:underline">
                Find Nearest Clinic
              </Link>
              <Link href="/" className="text-yellow-300 hover:underline">
                Indira Dental Clinic
              </Link>
            </div>
          </details>

          {/* Specialized Dental Services */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Specialized Dental Services</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/services#emergency-care" className="text-yellow-300 hover:underline">
                Emergency Dental Care
              </Link>
              <Link href="/services#pediatric-dentistry" className="text-yellow-300 hover:underline">
                Children's Dentistry
              </Link>
              <Link href="/services#geriatric-dentistry" className="text-yellow-300 hover:underline">
                Geriatric Dentistry
              </Link>
              <Link href="/services#sedation-dentistry" className="text-yellow-300 hover:underline">
                Sedation Dentistry
              </Link>
              <Link href="/services#laser-dentistry" className="text-yellow-300 hover:underline">
                Laser Dentistry
              </Link>
              <Link href="/services#digital-dentistry" className="text-yellow-300 hover:underline">
                Digital Dentistry
              </Link>
              <Link href="/services#dental-tourism" className="text-yellow-300 hover:underline">
                Dental Tourism
              </Link>
              <Link href="/services#full-mouth-rehabilitation" className="text-yellow-300 hover:underline">
                Full Mouth Rehabilitation
              </Link>
              <Link href="/services" className="text-yellow-300 hover:underline">
                All Specialized Services
              </Link>
            </div>
          </details>

          {/* Dental Knowledge & FAQs */}
          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">Dental Knowledge & FAQs</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/faq" className="text-yellow-300 hover:underline">
                Dental FAQs
              </Link>
              <Link href="/faq#general" className="text-yellow-300 hover:underline">
                General Dental Questions
              </Link>
              <Link href="/faq#implant" className="text-yellow-300 hover:underline">
                Dental Implant FAQs
              </Link>
              <Link href="/faq#rct" className="text-yellow-300 hover:underline">
                Root Canal FAQs
              </Link>
              <Link href="/faq#cosmetic" className="text-yellow-300 hover:underline">
                Cosmetic Dentistry FAQs
              </Link>
              <Link href="/faq#orthodontic" className="text-yellow-300 hover:underline">
                Orthodontic FAQs
              </Link>
              <Link href="/faq#pediatric" className="text-yellow-300 hover:underline">
                Children's Dental FAQs
              </Link>
              <Link href="/faq#emergency" className="text-yellow-300 hover:underline">
                Emergency Dental FAQs
              </Link>
              <Link href="/blog" className="text-yellow-300 hover:underline">
                Dental Blog & Resources
              </Link>
            </div>
          </details>
        </div>

        {/* Dental Services Directory */}
        <div className="mt-10 border-t border-blue-800 pt-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-yellow-300">
            <Link href="/dentist-near-me" className="text-yellow-300 hover:underline">
              Dental Clinic Near Me
            </Link>
          </h3>

          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">🦷 General Dentist Near Me</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                Looking for a{" "}
                <Link href="/dentist-near-me" className="text-yellow-300 hover:underline">
                  general dentist near me
                </Link>{" "}
                in Vellore? Dr. Rockson Samuel at Indira Dental Clinic provides comprehensive dental care including
                regular checkups, cleanings, and preventive treatments. Our clinic is conveniently located in Gandhi
                Nagar, making us accessible to patients from all areas of Vellore.
              </p>
            </div>
          </details>

          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">🦷 Restorative Dentist Near Me</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                Searching for a{" "}
                <Link href="/dentist-near-me" className="text-yellow-300 hover:underline">
                  restorative dentist near me
                </Link>{" "}
                in Vellore? Indira Dental Clinic specializes in repairing damaged teeth and replacing missing ones with
                dental fillings, crowns, bridges, and implants. Our convenient location makes us your go-to dentist for
                all restorative treatments in the Vellore area.
              </p>
            </div>
          </details>

          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">🦷 Cosmetic Dentist Near Me</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                Looking for a{" "}
                <Link href="/dentist-near-me" className="text-yellow-300 hover:underline">
                  cosmetic dentist near me
                </Link>{" "}
                in Vellore? Dr. Rockson Samuel provides expert cosmetic dental treatments including teeth whitening,
                veneers, and complete smile makeovers. Visit our centrally located clinic in Gandhi Nagar to transform
                your smile with our advanced cosmetic procedures.
              </p>
            </div>
          </details>

          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">🦷 Orthodontist Near Me</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                Searching for an{" "}
                <Link href="/dentist-near-me" className="text-yellow-300 hover:underline">
                  orthodontist near me
                </Link>{" "}
                in Vellore? Indira Dental Clinic offers comprehensive orthodontic treatments including traditional
                braces, ceramic braces, and clear aligners. Our convenient location in Gandhi Nagar makes us easily
                accessible for patients throughout Vellore seeking to straighten their teeth.
              </p>
            </div>
          </details>

          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">🦷 Pediatric Dentist Near Me</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                Looking for a{" "}
                <Link href="/dentist-near-me" className="text-yellow-300 hover:underline">
                  pediatric dentist near me
                </Link>{" "}
                in Vellore? Indira Dental Clinic provides specialized dental care for children in a friendly,
                comfortable environment. Our central location in Gandhi Nagar makes us the ideal choice for families
                throughout Vellore seeking quality dental care for their children.
              </p>
            </div>
          </details>

          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">🦷 Emergency Dentist Near Me</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                Need an{" "}
                <Link href="/dentist-near-me" className="text-yellow-300 hover:underline">
                  emergency dentist near me
                </Link>{" "}
                in Vellore? Indira Dental Clinic offers prompt emergency dental care for severe toothaches, broken
                teeth, lost fillings, and other urgent dental issues. Our central location in Gandhi Nagar ensures quick
                access for patients throughout Vellore who need immediate dental attention.
              </p>
            </div>
          </details>

          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">🦷 Root Canal Dentist Near Me</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                Looking for a{" "}
                <Link href="/dentist-near-me" className="text-yellow-300 hover:underline">
                  root canal specialist near me
                </Link>{" "}
                in Vellore? Dr. Rockson Samuel at Indira Dental Clinic is an experienced endodontist providing painless
                and effective root canal treatments. Our clinic in Gandhi Nagar serves patients from all areas of
                Vellore with state-of-the-art endodontic procedures.
              </p>
            </div>
          </details>

          <details className="group mb-4 bg-blue-800 rounded-lg overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
              <span className="text-lg font-bold text-yellow-300">🦷 Implant Dentist Near Me</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 text-sm">
              <p className="mb-3">
                Searching for an{" "}
                <Link href="/dentist-near-me" className="text-yellow-300 hover:underline">
                  implant dentist near me
                </Link>{" "}
                in Vellore? Indira Dental Clinic specializes in dental implant procedures, from single tooth implants to
                full-mouth rehabilitations. Our convenient location in Gandhi Nagar makes us easily accessible for
                patients throughout Vellore seeking permanent tooth replacement solutions.
              </p>
            </div>
          </details>
        </div>

        {/* Locations Directory */}
        <div className="mt-10 border-t border-blue-800 pt-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-yellow-300">Our Locations</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Vellore Main */}
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-300 mb-2">Vellore Main Clinic</h4>
              <p className="text-sm mb-2">
                3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006
              </p>
              <Link href="/dentist-near-me/locations/vellore" className="text-yellow-300 hover:underline text-sm">
                View Details →
              </Link>
            </div>

            {/* Katpadi */}
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-300 mb-2">Katpadi Branch</h4>
              <p className="text-sm mb-2">Near Railway Station, Katpadi, Vellore, Tamil Nadu</p>
              <Link
                href="/dentist-near-me/locations/vellore/katpadi"
                className="text-yellow-300 hover:underline text-sm"
              >
                View Details →
              </Link>
            </div>

            {/* Gandhi Nagar */}
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-300 mb-2">Gandhi Nagar Branch</h4>
              <p className="text-sm mb-2">Central Location, Gandhi Nagar, Vellore, Tamil Nadu</p>
              <Link
                href="/dentist-near-me/locations/vellore/gandhi-nagar"
                className="text-yellow-300 hover:underline text-sm"
              >
                View Details →
              </Link>
            </div>

            {/* Sathuvachari */}
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-300 mb-2">Sathuvachari Branch</h4>
              <p className="text-sm mb-2">Residential Area, Sathuvachari, Vellore, Tamil Nadu</p>
              <Link
                href="/dentist-near-me/locations/vellore/sathuvachari"
                className="text-yellow-300 hover:underline text-sm"
              >
                View Details →
              </Link>
            </div>

            {/* Bagayam */}
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-300 mb-2">Bagayam Branch</h4>
              <p className="text-sm mb-2">Near CMC, Bagayam, Vellore, Tamil Nadu</p>
              <Link
                href="/dentist-near-me/locations/vellore/bagayam"
                className="text-yellow-300 hover:underline text-sm"
              >
                View Details →
              </Link>
            </div>

            {/* Ranipet */}
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-300 mb-2">Ranipet Branch</h4>
              <p className="text-sm mb-2">Industrial Zone, Ranipet, Vellore, Tamil Nadu</p>
              <Link
                href="/dentist-near-me/locations/vellore/ranipet"
                className="text-yellow-300 hover:underline text-sm"
              >
                View Details →
              </Link>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link href="/dentist-near-me/locations" className="text-yellow-300 hover:underline font-semibold">
              View All Locations →
            </Link>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Indira Dental Clinic. All rights reserved.</p>
          <p className="text-sm mt-2">
            <Link href="/privacy-policy" className="hover:text-yellow-300 mx-2">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms-of-service" className="hover:text-yellow-300 mx-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
