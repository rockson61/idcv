// Comprehensive Semantic SEO Internal Links
// Hard-coded contextual links for topical authority

export interface SemanticLink {
  anchor: string
  href: string
  title: string
  context: string
}

// Homepage Semantic Links
export const homepageLinks: SemanticLink[] = [
  // Service Links
  { anchor: "root canal treatment", href: "/services/root-canal-treatment", title: "Painless Root Canal Treatment in Vellore", context: "We specialize in" },
  { anchor: "dental implants", href: "/services/dental-implants", title: "Permanent Dental Implants Vellore", context: "Replace missing teeth with" },
  { anchor: "orthodontic braces", href: "/services/orthodontics", title: "Braces and Orthodontic Treatment", context: "Straighten teeth using" },
  { anchor: "teeth whitening", href: "/services/cosmetic-dentistry/teeth-whitening", title: "Professional Teeth Whitening", context: "Brighten your smile with" },
  { anchor: "Invisalign", href: "/services/orthodontics/invisalign", title: "Invisalign Clear Aligners Vellore", context: "Invisible teeth straightening with" },
  
  // Location Links  
  { anchor: "Gandhi Nagar", href: "/in/tamil-nadu/vellore/gandhi", title: "Dentist in Gandhi Nagar, Vellore", context: "Serving patients in" },
  { anchor: "Katpadi", href: "/in/tamil-nadu/vellore/katpadi", title: "Dentist in Katpadi, Vellore", context: "Convenient location near" },
  { anchor: "Bagayam", href: "/in/tamil-nadu/vellore/bagayam", title: "Dentist in Bagayam, Vellore", context: "Also serving" },
  
  // Authority Links
  { anchor: "Dr. Rockson Samuel", href: "/about-us/dr-rockson-samuel", title: "About Dr. Rockson Samuel BDS PgDM BDM", context: "Led by experienced dentist" },
  { anchor: "emergency dental care", href: "/services/emergency-dentistry", title: "24/7 Emergency Dental Services", context: "Available for" },
  { anchor: "dental checkups", href: "/services/general-dentistry/check-ups", title: "Routine Dental Checkups", context: "Schedule regular" },
  
  // Resource Links
  { anchor: "ask the dentist", href: "/ask-the-dentist", title: "Ask Expert Dental Questions", context: "Get free advice at" },
  { anchor: "patient testimonials", href: "/testimonials", title: "Real Patient Reviews", context: "Read our" },
  { anchor: "dental pricing", href: "/pricing", title: "Transparent Dental Pricing", context: "View our competitive" },
]

// Service Page Cross-Links (for any service page)
export const servicePageLinks: SemanticLink[] = [
  // Related Services
  { anchor: "dental crowns", href: "/services/prosthodontics/dental-crowns", title: "Dental Crowns after RCT", context: "Often requires" },
  { anchor: "tooth extraction", href: "/services/oral-surgery/tooth-extraction", title: "Safe Tooth Extraction", context: "Alternative to saving with" },
  { anchor: "gum disease treatment", href: "/services/periodontics", title: "Periodontal Treatment", context: "Prevent complications with" },
  { anchor: "pediatric dentistry", href: "/services/pediatric-dentistry", title: "Children's Dental Care", context: "We also offer" },
  
  // Conditions
  { anchor: "tooth decay", href: "/conditions/tooth-decay", title: "Tooth Decay Prevention", context: "Prevent" },
  { anchor: "gum disease", href: "/conditions/gum-disease", title: "Gum Disease Information", context: "Learn about" },
  { anchor: "tooth sensitivity", href: "/conditions/tooth-sensitivity", title: "Tooth Sensitivity Treatment", context: "Address" },
  
  // Location & Contact
  { anchor: "Vellore", href: "/in/tamil-nadu/vellore", title: "Dentist in Vellore", context: "Best dental clinic in" },
  { anchor: "book your appointment", href: "/contact", title: "Book Dental Appointment", context: "Ready to" },
  { anchor: "call us", href: "tel:7010650063", title: "Call Indira Dental Clinic", context: "Or" },
]

// Condition Page Cross-Links
export const conditionPageLinks: SemanticLink[] = [
  // Treatment Services
  { anchor: "professional cleaning", href: "/services/general-dentistry/teeth-cleaning", title: "Professional Dental Cleaning", context: "Treatment includes" },
  { anchor: "scaling and root planing", href: "/services/periodontics/scaling-root-planing", title: "Deep Cleaning Treatment", context: "May require" },
  { anchor: "fluoride treatment", href: "/services/pediatric-dentistry/fluoride-treatment", title: "Fluoride Application", context: "Strengthen enamel with" },
  
  // Related Conditions
  { anchor: "receding gums", href: "/conditions/receding-gums", title: "Receding Gums Treatment", context: "May lead to" },
  { anchor: "tooth abscess", href: "/conditions/tooth-abscess", title: "Tooth Abscess Emergency", context: "Can progress to" },
  { anchor: "cracked teeth", href: "/conditions/cracked-teeth", title: "Cracked Tooth Repair", context: "Often causes" },
  
  // Locations
  { anchor: "Indira Dental Clinic", href: "/", title: "Indira Dental Clinic Home", context: "Visit" },
  { anchor: "Dr. Rockson Samuel", href: "/about-us/dr-rockson-samuel", title: "About Dr. Rockson Samuel", context: "Consult with" },
]

// About Page Links
export const aboutPageLinks: SemanticLink[] = [
  // Services
  { anchor: "root canal treatment", href: "/services/root-canal-treatment", title: "Expert RCT Treatment", context: "Specialized in" },
  { anchor: "dental implant surgery", href: "/services/dental-implants", title: "Dental Implant Procedures", context: "Performs" },
  { anchor: "cosmetic dentistry", href: "/services/cosmetic-dentistry", title: "Cosmetic Dental Procedures", context: "Expertise in" },
  
  // Resources
  { anchor: "ask your questions", href: "/ask-the-dentist", title: "Ask Dental Questions", context: "Feel free to" },
  { anchor: "read patient reviews", href: "/testimonials", title: "Patient Testimonials", context: "Don't just take our word -" },
  { anchor: "schedule consultation", href: "/contact", title: "Book Consultation", context: "Ready to" },
]

// Contact Page Links
export const contactPageLinks: SemanticLink[] = [
  // Services (Why Contact)
  { anchor: "root canal treatment", href: "/services/root-canal-treatment", title: "RCT Appointments", context: "Book for" },
  { anchor: "dental implants", href: "/services/dental-implants", title: "Implant Consultation", context: "Consult about" },
  { anchor: "orthodontic braces", href: "/services/orthodontics", title: "Braces Consultation", context: "Discuss" },
  { anchor: "emergency care", href: "/services/emergency-dentistry", title: "Emergency Dental Care", context: "Need immediate" },
  
  // Locations
  { anchor: "Gandhi Nagar location", href: "/in/tamil-nadu/vellore/gandhi", title: "Gandhi Nagar Office", context: "Visit our" },
  { anchor: "find us on Google Maps", href: "https://maps.app.goo.gl/ngSpvWz8Tur9MsN9A", title: "Indira Dental Clinic Location", context: "Get directions" },
  
  // Info Pages
  { anchor: "our services", href: "/services", title: "All Dental Services", context: "Explore" },
  { anchor: "pricing information", href: "/pricing", title: "Dental Treatment Costs", context: "Check our" },
]

// Footer Comprehensive Links (Site-wide)
export const footerSemanticLinks = {
  popularServices: [
    { text: "Root Canal Treatment (RCT)", href: "/services/root-canal-treatment" },
    { text: "Dental Implants", href: "/services/dental-implants" },
    { text: "Orthodontic Braces", href: "/services/orthodontics" },
    { text: "Invisalign Clear Aligners", href: "/services/orthodontics/invisalign" },
    { text: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening" },
    { text: "Porcelain Veneers", href: "/services/cosmetic-dentistry/veneers" },
    { text: "Dental Crowns", href: "/services/prosthodontics/dental-crowns" },
    { text: "Emergency Dental Care", href: "/services/emergency-dentistry" },
  ],
  
  dentalConditions: [
    { text: "Tooth Decay & Cavities", href: "/conditions/tooth-decay" },
    { text: "Gum Disease Treatment", href: "/conditions/gum-disease" },
    { text: "Tooth Sensitivity", href: "/conditions/tooth-sensitivity" },
    { text: "Bad Breath (Halitosis)", href: "/conditions/bad-breath" },
    { text: "Bruxism (Teeth Grinding)", href: "/conditions/bruxism" },
    { text: "Receding Gums", href: "/conditions/receding-gums" },
  ],
  
  velloreLocations: [
    { text: "Dentist in Vellore", href: "/in/tamil-nadu/vellore" },
    { text: "Gandhi Nagar Dental Clinic", href: "/in/tamil-nadu/vellore/gandhi" },
    { text: "Katpadi Dentist", href: "/in/tamil-nadu/vellore/katpadi" },
    { text: "Bagayam Dental Care", href: "/in/tamil-nadu/vellore/bagayam" },
    { text: "Sathuvachari Dentist", href: "/in/tamil-nadu/vellore/sathuvachari" },
    { text: "Find Dentist Near Me", href: "/dentist-near-me" },
  ],
  
  patientResources: [
    { text: "Ask the Dentist", href: "/ask-the-dentist" },
    { text: "Patient Testimonials", href: "/testimonials" },
    { text: "Dental Pricing", href: "/pricing" },
    { text: "FAQs", href: "/faq" },
    { text: "Dental Blog", href: "/blog" },
    { text: "International Patients", href: "/international-patients" },
  ],
  
  aboutClinic: [
    { text: "About Indira Dental Clinic", href: "/about-us" },
    { text: "Dr. Rockson Samuel Profile", href: "/about-us/dr-rockson-samuel" },
    { text: "Our Dental Team", href: "/about-us/our-team" },
    { text: "Clinic Gallery", href: "/gallery" },
    { text: "Contact Us", href: "/contact" },
    { text: "Book Appointment", href: "/contact" },
  ]
}

// Generate semantic link HTML
export function generateSemanticLink(link: SemanticLink, inlineStyle: boolean = false): string {
  const className = inlineStyle
    ? "text-teal-600 hover:text-teal-700 font-semibold underline decoration-2 decoration-teal-300 hover:decoration-teal-500 transition-all"
    : "text-blue-600 hover:text-blue-800 font-semibold underline hover:no-underline transition-colors"
  
  return `<a href="${link.href}" title="${link.title}" class="${className}">${link.anchor}</a>`
}

// Get contextual semantic links based on page type
export function getContextualSemanticLinks(pageType: 'homepage' | 'service' | 'condition' | 'about' | 'contact'): SemanticLink[] {
  switch (pageType) {
    case 'homepage':
      return homepageLinks
    case 'service':
      return servicePageLinks
    case 'condition':
      return conditionPageLinks
    case 'about':
      return aboutPageLinks
    case 'contact':
      return contactPageLinks
    default:
      return []
  }
}

export default {
  homepageLinks,
  servicePageLinks,
  conditionPageLinks,
  aboutPageLinks,
  contactPageLinks,
  footerSemanticLinks,
  generateSemanticLink,
  getContextualSemanticLinks,
}
