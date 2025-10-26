// lib/utils.ts

interface LinkData {
  href: string
  text: string
  description?: string
}

// Define all possible links by category
const allLinks = {
  services: [
    {
      href: "/services/root-canal-treatment",
      text: "Root Canal Treatment (RCT) in Vellore",
      description: "Painless root canal therapy by experienced endodontists",
    },
    {
      href: "/services/dental-implants",
      text: "Dental Implants in Vellore",
      description: "Permanent tooth replacement with titanium implants",
    },
    {
      href: "/services/braces-orthodontics",
      text: "Braces & Orthodontics in Vellore",
      description: "Teeth alignment solutions for all ages",
    },
    {
      href: "/services/dental-crowns",
      text: "Dental Crowns in Vellore",
      description: "Restore damaged teeth with custom-made crowns",
    },
    {
      href: "/services/teeth-whitening",
      text: "Professional Teeth Whitening in Vellore",
      description: "Get a brighter smile with in-office whitening",
    },
    {
      href: "/services/dental-fillings",
      text: "Dental Fillings in Vellore",
      description: "Tooth-colored fillings for cavities and decay",
    },
    {
      href: "/services/wisdom-tooth-extraction",
      text: "Wisdom Tooth Extraction in Vellore",
      description: "Safe removal of impacted wisdom teeth",
    },
    {
      href: "/services/pediatric-dentistry",
      text: "Children's Dentistry in Vellore",
      description: "Kid-friendly dental care for growing smiles",
    },
  ],
  conditions: [
    {
      href: "/conditions/tooth-decay",
      text: "Tooth Decay Treatment in Vellore",
      description: "Effective solutions for dental caries",
    },
    {
      href: "/conditions/gum-disease",
      text: "Gum Disease Treatment in Vellore",
      description: "Periodontal therapy for healthy gums",
    },
    {
      href: "/conditions/missing-teeth",
      text: "Missing Teeth Solutions in Vellore",
      description: "Options to restore your complete smile",
    },
    {
      href: "/conditions/tooth-sensitivity",
      text: "Tooth Sensitivity Treatment in Vellore",
      description: "Relief from painful sensitive teeth",
    },
    {
      href: "/conditions/bad-breath",
      text: "Bad Breath Treatment in Vellore",
      description: "Halitosis solutions for fresh breath",
    },
    {
      href: "/conditions/crooked-teeth",
      text: "Crooked Teeth Correction in Vellore",
      description: "Straightening options for misaligned teeth",
    },
  ],
  locations: [
    {
      href: "/in/tamil-nadu/vellore/bagayam",
      text: "Dentist in Bagayam, Vellore",
      description: "Dental care for Bagayam residents",
    },
    {
      href: "/in/tamil-nadu/vellore/kosapet",
      text: "Dentist in Kosapet, Vellore",
      description: "Dental care for Kosapet residents",
    },
    {
      href: "/in/tamil-nadu/vellore/saidapet",
      text: "Dentist in Saidapet, Vellore",
      description: "Dental care for Saidapet residents",
    },
    {
      href: "/in/tamil-nadu/vellore/thottapalayam",
      text: "Dentist in Thottapalayam, Vellore",
      description: "Dental care for Thottapalayam residents",
    },
    {
      href: "/in/tamil-nadu/vellore/gandhinagar",
      text: "Dentist in Gandhi Nagar, Vellore",
      description: "Dental care for Gandhi Nagar residents",
    },
    {
      href: "/in/tamil-nadu/vellore/thorapadi",
      text: "Dentist in Thorapadi, Vellore",
      description: "Dental care for Thorapadi residents",
    },
    {
      href: "/in/tamil-nadu/vellore/konavattam",
      text: "Dentist in Konavattam, Vellore",
      description: "Dental care for Konavattam residents",
    },
    {
      href: "/in/tamil-nadu/vellore/dharapadavedu",
      text: "Dentist in Dharapadavedu, Vellore",
      description: "Dental care for Dharapadavedu residents",
    },
    {
      href: "/in/tamil-nadu/vellore/katpadi",
      text: "Dentist in Katpadi, Vellore",
      description: "Dental care for Katpadi residents",
    },
    {
      href: "/in/tamil-nadu/vellore/sathuvachari",
      text: "Dentist in Sathuvachari, Vellore",
      description: "Dental care for Sathuvachari residents",
    },
    {
      href: "/in/tamil-nadu/vellore/ambur",
      text: "Dentist in Ambur, Vellore",
      description: "Dental care for Ambur residents",
    },
  ],
  general: [
    { href: "/", text: "Best Dentist in Vellore", description: "Top-rated dental clinic in Vellore" },
    {
      href: "/dentist-near-me",
      text: "Find a Dentist Near Me in Vellore",
      description: "Locate the closest dental clinic to you",
    },
    {
      href: "/pricing",
      text: "Affordable Dental Treatment Costs in Vellore",
      description: "Transparent pricing for all dental procedures",
    },
    {
      href: "/about-us",
      text: "About Dr. Rockson Samuel - Leading Dentist in Vellore",
      description: "Learn about our experienced dental team",
    },
    { href: "/contact", text: "Contact Indira Dental Clinic in Vellore", description: "Book your appointment today" },
    {
      href: "/in/tamil-nadu/vellore",
      text: "Comprehensive Dental Care in Vellore",
      description: "All dental services under one roof",
    },
  ],
  nearby: [
    {
      href: "/in/tamil-nadu/chennai",
      text: "Dental Tourism from Chennai to Vellore",
      description: "Save on dental treatments in Vellore",
    },
    {
      href: "/in/tamil-nadu/kanchipuram",
      text: "Dental Care Options from Kanchipuram",
      description: "Why travel to Vellore for dental treatment",
    },
    {
      href: "/in/karnataka/bangalore",
      text: "Affordable Dental Care from Bangalore",
      description: "Cost-effective dental tourism to Vellore",
    },
    {
      href: "/in/andhra-pradesh/tirupati",
      text: "Dental Services for Tirupati Residents",
      description: "Quality dental care in nearby Vellore",
    },
  ],
}

// Function to get 5 random links from specified categories, excluding current page
export function getRelatedLinks(
  currentPath: string,
  categories: Array<keyof typeof allLinks> = ["services", "conditions", "locations", "general", "nearby"],
  count = 5,
): LinkData[] {
  // Flatten all requested categories into one array
  let availableLinks: LinkData[] = []

  categories.forEach((category) => {
    availableLinks = [...availableLinks, ...allLinks[category]]
  })

  // Filter out the current page
  availableLinks = availableLinks.filter((link) => link.href !== currentPath)

  // Shuffle the array
  const shuffled = [...availableLinks].sort(() => 0.5 - Math.random())

  // Take the first 'count' items
  return shuffled.slice(0, count)
}

export const cn = (...args: (string | undefined)[]) => {
  return args.filter(Boolean).join(" ")
}
