// This file contains the structured data for the sidebar
// It's organized semantically for better SEO and user experience

export interface SidebarItem {
  name: string
  href: string
  description?: string
  keywords?: string[]
}

export interface SidebarCategory {
  title: string
  entityType: string // For semantic SEO
  items: SidebarItem[]
  description?: string
}

// Services organized by treatment category
export const serviceCategories: SidebarCategory[] = [
  {
    title: "General Dentistry",
    entityType: "MedicalSpecialty",
    description: "Comprehensive dental care for overall oral health",
    items: [
      {
        name: "Check-ups & Cleanings",
        href: "/services/general-dentistry/check-ups",
        description: "Regular dental examinations and professional cleanings",
        keywords: ["dental exam", "teeth cleaning", "oral health assessment", "prophylaxis"],
      },
      {
        name: "Fillings",
        href: "/services/general-dentistry/fillings",
        description: "Tooth-colored composite fillings to repair cavities",
        keywords: ["dental fillings", "cavity treatment", "composite restoration", "amalgam alternatives"],
      },
      {
        name: "Emergency Care",
        href: "/services/general-dentistry/emergency-care",
        description: "Immediate dental care for urgent situations",
        keywords: ["dental emergency", "urgent dental care", "tooth pain relief", "same-day dentistry"],
      },
      {
        name: "Extractions",
        href: "/services/general-dentistry/extractions",
        description: "Simple and surgical tooth removal procedures",
        keywords: ["tooth extraction", "wisdom teeth removal", "dental surgery", "tooth pulling"],
      },
      {
        name: "Dental Sealants",
        href: "/services/general-dentistry/dental-sealants",
        description: "Protective coating applied to prevent tooth decay",
        keywords: ["cavity prevention", "molar sealants", "preventive dentistry", "children dentistry"],
      },
      {
        name: "Fluoride Treatments",
        href: "/services/general-dentistry/fluoride-treatments",
        description: "Mineral application to strengthen tooth enamel",
        keywords: ["enamel strengthening", "cavity prevention", "mineral treatment", "tooth remineralization"],
      },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    entityType: "MedicalProcedure",
    description: "Procedures to enhance the appearance of your smile",
    items: [
      {
        name: "Teeth Whitening",
        href: "/services/cosmetic-dentistry/teeth-whitening",
        description: "Professional whitening treatments for a brighter smile",
        keywords: ["teeth bleaching", "smile brightening", "stain removal", "professional whitening"],
      },
      {
        name: "Veneers",
        href: "/services/cosmetic-dentistry/veneers",
        description: "Custom porcelain shells to improve tooth appearance",
        keywords: ["dental veneers", "porcelain veneers", "smile makeover", "cosmetic shells"],
      },
      {
        name: "Bonding",
        href: "/services/cosmetic-dentistry/bonding",
        description: "Tooth-colored resin to repair and enhance teeth",
        keywords: ["dental bonding", "cosmetic repair", "tooth restoration", "composite bonding"],
      },
      {
        name: "Smile Makeover",
        href: "/services/cosmetic-dentistry/smile-makeover",
        description: "Comprehensive treatment plan for a complete smile transformation",
        keywords: ["smile design", "full mouth restoration", "aesthetic dentistry", "cosmetic transformation"],
      },
      {
        name: "Gum Contouring",
        href: "/services/cosmetic-dentistry/gum-contouring",
        description: "Reshaping the gumline to improve smile aesthetics",
        keywords: ["gum reshaping", "gummy smile correction", "laser gum treatment", "aesthetic gum surgery"],
      },
      {
        name: "Tooth Contouring",
        href: "/services/cosmetic-dentistry/tooth-contouring",
        description: "Subtle reshaping of teeth to improve appearance",
        keywords: ["enamel shaping", "tooth reshaping", "cosmetic contouring", "dental sculpting"],
      },
    ],
  },
  {
    title: "Restorative Dentistry",
    entityType: "MedicalProcedure",
    description: "Treatments to repair and replace damaged teeth",
    items: [
      {
        name: "Crowns",
        href: "/services/restorative-dentistry/crowns",
        description: "Custom-made caps that cover damaged teeth",
        keywords: ["dental crowns", "tooth caps", "porcelain crowns", "zirconia crowns"],
      },
      {
        name: "Bridges",
        href: "/services/restorative-dentistry/bridges",
        description: "Fixed appliances to replace one or more missing teeth",
        keywords: ["dental bridges", "fixed bridges", "tooth replacement", "multiple tooth restoration"],
      },
      {
        name: "Dentures",
        href: "/services/restorative-dentistry/dentures",
        description: "Removable appliances to replace missing teeth",
        keywords: ["full dentures", "partial dentures", "removable prosthetics", "false teeth"],
      },
      {
        name: "Inlays & Onlays",
        href: "/services/restorative-dentistry/inlays-onlays",
        description: "Custom restorations for moderate tooth damage",
        keywords: ["indirect fillings", "partial crowns", "conservative restoration", "ceramic restorations"],
      },
    ],
  },
  {
    title: "Orthodontics",
    entityType: "MedicalSpecialty",
    description: "Treatments to align teeth and correct bite issues",
    items: [
      {
        name: "Traditional Braces",
        href: "/services/orthodontics/traditional-braces",
        description: "Metal brackets and wires to straighten teeth",
        keywords: ["metal braces", "orthodontic treatment", "teeth straightening", "bracket and wire"],
      },
      {
        name: "Invisible Aligners",
        href: "/services/orthodontics/invisible-aligners",
        description: "Clear removable aligners for discreet teeth straightening",
        keywords: ["clear aligners", "transparent braces", "removable orthodontics", "discreet straightening"],
      },
      {
        name: "Invisalign",
        href: "/services/orthodontics/invisalign",
        description: "Leading brand of clear aligners for teeth straightening",
        keywords: ["Invisalign treatment", "clear braces", "invisible orthodontics", "aligner therapy"],
      },
      {
        name: "Ceramic Braces",
        href: "/services/orthodontics/ceramic-braces",
        description: "Tooth-colored brackets for less noticeable orthodontic treatment",
        keywords: ["clear braces", "aesthetic orthodontics", "tooth-colored brackets", "discreet braces"],
      },
      {
        name: "Lingual Braces",
        href: "/services/orthodontics/lingual-braces",
        description: "Braces placed behind the teeth for invisible treatment",
        keywords: ["hidden braces", "inside braces", "invisible orthodontics", "behind-teeth braces"],
      },
      {
        name: "Retainers",
        href: "/services/orthodontics/retainers",
        description: "Devices to maintain teeth position after orthodontic treatment",
        keywords: [
          "orthodontic retainers",
          "post-braces maintenance",
          "teeth alignment maintenance",
          "clear retainers",
        ],
      },
    ],
  },
  {
    title: "Endodontics",
    entityType: "MedicalSpecialty",
    description: "Treatments for the dental pulp and tissues surrounding the roots of teeth",
    items: [
      {
        name: "Root Canal Therapy",
        href: "/services/root-canal-treatment",
        description: "Procedure to treat infection inside the tooth",
        keywords: ["root canal", "endodontic therapy", "pulp treatment", "dental infection treatment"],
      },
      {
        name: "Apicoectomy",
        href: "/services/endodontics/apicoectomy",
        description: "Surgical procedure to remove the tip of a tooth's root",
        keywords: ["root end surgery", "endodontic surgery", "root tip removal", "dental microsurgery"],
      },
      {
        name: "Pulpotomy",
        href: "/services/endodontics/pulpotomy",
        description: "Partial removal of pulp tissue in a tooth",
        keywords: ["baby root canal", "pulp therapy", "nerve treatment", "pediatric endodontics"],
      },
    ],
  },
  {
    title: "Dental Implants",
    entityType: "MedicalProcedure",
    description: "Permanent tooth replacement solutions",
    items: [
      {
        name: "Single Tooth Implants",
        href: "/services/dental-implants/single-tooth-implants",
        description: "Titanium post and crown to replace one missing tooth",
        keywords: ["single implant", "tooth replacement", "dental prosthetic", "implant crown"],
      },
      {
        name: "Multiple Tooth Implants",
        href: "/services/dental-implants/multiple-tooth",
        description: "Implant-supported bridges and dentures for multiple missing teeth",
        keywords: ["implant bridge", "multiple implants", "full arch restoration", "implant-supported prosthetics"],
      },
      {
        name: "All-on-4 Implants",
        href: "/services/dental-implants/all-on-4",
        description: "Full arch replacement using only four implants",
        keywords: ["full mouth implants", "same-day teeth", "fixed dentures", "full arch rehabilitation"],
      },
      {
        name: "Implant-Supported Dentures",
        href: "/services/dental-implants/implant-supported-dentures",
        description: "Removable dentures that attach to dental implants",
        keywords: ["overdentures", "snap-in dentures", "implant dentures", "stable dentures"],
      },
      {
        name: "Bone Grafting",
        href: "/services/dental-implants/bone-grafting",
        description: "Procedure to build up bone for implant placement",
        keywords: ["dental bone graft", "socket preservation", "ridge augmentation", "sinus lift"],
      },
    ],
  },
  {
    title: "Periodontics",
    entityType: "MedicalSpecialty",
    description: "Treatments for gum disease and gum health",
    items: [
      {
        name: "Scaling & Root Planing",
        href: "/services/periodontics/scaling-root-planing",
        description: "Deep cleaning treatment for gum disease",
        keywords: ["deep cleaning", "gum disease treatment", "periodontal therapy", "non-surgical gum treatment"],
      },
      {
        name: "Gum Grafting",
        href: "/services/periodontics/gum-grafting",
        description: "Surgical procedure to cover exposed tooth roots",
        keywords: ["receding gums treatment", "soft tissue graft", "gingival graft", "root coverage"],
      },
      {
        name: "Periodontal Maintenance",
        href: "/services/periodontics/periodontal-maintenance",
        description: "Ongoing care for patients with periodontal disease",
        keywords: [
          "gum disease maintenance",
          "periodontal cleaning",
          "deep cleaning follow-up",
          "gum health maintenance",
        ],
      },
      {
        name: "Laser Gum Therapy",
        href: "/services/periodontics/laser-gum-therapy",
        description: "Advanced treatment for gum disease using laser technology",
        keywords: ["LANAP", "laser periodontal therapy", "minimally invasive gum treatment", "laser dentistry"],
      },
      {
        name: "Crown Lengthening",
        href: "/services/periodontics/crown-lengthening",
        description: "Procedure to expose more of the tooth structure",
        keywords: ["gum reshaping", "functional crown lengthening", "gummy smile correction", "tooth exposure"],
      },
    ],
  },
  {
    title: "Pediatric Dentistry",
    entityType: "MedicalSpecialty",
    description: "Dental care specialized for children",
    items: [
      {
        name: "Children's Dentistry",
        href: "/services/pediatric-dentistry/childrens-dentistry",
        description: "Comprehensive dental care for infants, children, and adolescents",
        keywords: ["kids dentistry", "child dental care", "pediatric oral health", "children's dental services"],
      },
      {
        name: "Dental Sealants",
        href: "/services/pediatric-dentistry/dental-sealants",
        description: "Protective coating to prevent cavities in children's teeth",
        keywords: ["kids sealants", "cavity prevention", "molar protection", "preventive pediatric dentistry"],
      },
      {
        name: "Fluoride Treatments",
        href: "/services/pediatric-dentistry/fluoride-treatments",
        description: "Mineral application to strengthen children's tooth enamel",
        keywords: ["kids fluoride", "cavity prevention", "enamel strengthening", "pediatric preventive care"],
      },
      {
        name: "Space Maintainers",
        href: "/services/pediatric-dentistry/space-maintainers",
        description: "Devices to keep space for permanent teeth after premature loss of baby teeth",
        keywords: ["tooth space maintenance", "premature tooth loss", "pediatric orthodontics", "dental development"],
      },
    ],
  },
  {
    title: "Oral Surgery",
    entityType: "MedicalSpecialty",
    description: "Surgical procedures of the mouth, face, and jaw",
    items: [
      {
        name: "Tooth Extractions",
        href: "/services/oral-surgery/tooth-extractions",
        description: "Removal of problematic or impacted teeth",
        keywords: ["tooth removal", "surgical extraction", "wisdom teeth removal", "dental surgery"],
      },
      {
        name: "Wisdom Teeth Removal",
        href: "/services/oral-surgery/wisdom-teeth-removal",
        description: "Extraction of third molars to prevent complications",
        keywords: ["third molar extraction", "impacted wisdom teeth", "wisdom tooth surgery", "third molar removal"],
      },
      {
        name: "Bone Grafting",
        href: "/services/oral-surgery/bone-grafting",
        description: "Procedure to rebuild or augment jaw bone",
        keywords: ["jaw bone augmentation", "socket preservation", "ridge augmentation", "dental bone graft"],
      },
      {
        name: "Oral Pathology",
        href: "/services/oral-surgery/oral-pathology",
        description: "Diagnosis and treatment of diseases of the mouth and jaw",
        keywords: ["oral lesions", "mouth biopsy", "oral cancer screening", "soft tissue pathology"],
      },
    ],
  },
  {
    title: "Preventive Dentistry",
    entityType: "MedicalSpecialty",
    description: "Services focused on maintaining good oral health and preventing dental problems",
    items: [
      {
        name: "Dental Cleanings",
        href: "/services/preventive-dentistry/dental-cleanings",
        description: "Professional removal of plaque and tartar",
        keywords: ["prophylaxis", "teeth cleaning", "dental hygiene", "plaque removal"],
      },
      {
        name: "Oral Cancer Screenings",
        href: "/services/preventive-dentistry/oral-cancer-screenings",
        description: "Early detection examinations for oral cancer",
        keywords: ["mouth cancer screening", "oral examination", "cancer prevention", "early detection"],
      },
      {
        name: "Dental X-Rays",
        href: "/services/preventive-dentistry/dental-x-rays",
        description: "Diagnostic imaging to detect hidden dental problems",
        keywords: ["digital x-rays", "dental radiographs", "diagnostic imaging", "dental diagnostics"],
      },
      {
        name: "Mouthguards",
        href: "/services/preventive-dentistry/mouthguards",
        description: "Custom-fitted devices to protect teeth during sports or from grinding",
        keywords: ["sports guards", "night guards", "bruxism protection", "teeth grinding protection"],
      },
    ],
  },
]

// Dental conditions organized by type
export const conditionCategories: SidebarCategory[] = [
  {
    title: "Common Dental Conditions",
    entityType: "MedicalCondition",
    description: "Information about common oral health issues",
    items: [
      {
        name: "Bad Breath (Halitosis)",
        href: "/conditions/bad-breath",
        description: "Causes and treatments for persistent mouth odor",
        keywords: ["halitosis", "oral malodor", "breath odor", "mouth smell"],
      },
      {
        name: "Gum Disease",
        href: "/conditions/gum-disease",
        description: "Information about gingivitis and periodontitis",
        keywords: ["periodontitis", "gingivitis", "bleeding gums", "gum inflammation"],
      },
      {
        name: "Tooth Decay",
        href: "/conditions/tooth-decay",
        description: "Causes and prevention of dental caries",
        keywords: ["cavities", "dental caries", "tooth erosion", "enamel decay"],
      },
      {
        name: "Tooth Sensitivity",
        href: "/conditions/tooth-sensitivity",
        description: "Causes and treatments for sensitive teeth",
        keywords: ["sensitive teeth", "dentin hypersensitivity", "tooth pain", "temperature sensitivity"],
      },
      {
        name: "Dry Mouth",
        href: "/conditions/dry-mouth",
        description: "Causes and management of insufficient saliva production",
        keywords: ["xerostomia", "mouth dryness", "saliva deficiency", "dry mouth syndrome"],
      },
      {
        name: "Bruxism (Teeth Grinding)",
        href: "/conditions/bruxism",
        description: "Information about teeth grinding and clenching",
        keywords: ["teeth grinding", "jaw clenching", "night grinding", "TMJ disorder"],
      },
    ],
  },
  {
    title: "Tooth & Gum Problems",
    entityType: "MedicalCondition",
    description: "Specific issues affecting teeth and gums",
    items: [
      {
        name: "Tooth Abscess",
        href: "/conditions/tooth-abscess",
        description: "Infection at the root of a tooth or between the gum and tooth",
        keywords: ["dental abscess", "root infection", "gum abscess", "tooth infection"],
      },
      {
        name: "Cracked Teeth",
        href: "/conditions/cracked-teeth",
        description: "Causes and treatments for fractured teeth",
        keywords: ["tooth fracture", "cracked tooth syndrome", "tooth cracks", "dental fractures"],
      },
      {
        name: "Receding Gums",
        href: "/conditions/receding-gums",
        description: "Causes and treatments for gingival recession",
        keywords: ["gum recession", "exposed roots", "gingival recession", "gum line problems"],
      },
      {
        name: "Tooth Erosion",
        href: "/conditions/tooth-erosion",
        description: "Wearing away of tooth enamel by acids",
        keywords: ["enamel erosion", "acid wear", "tooth wear", "enamel loss"],
      },
      {
        name: "Impacted Teeth",
        href: "/conditions/impacted-teeth",
        description: "Teeth that cannot emerge properly through the gums",
        keywords: ["wisdom teeth impaction", "unerupted teeth", "tooth impaction", "embedded teeth"],
      },
    ],
  },
  {
    title: "Jaw & Facial Conditions",
    entityType: "MedicalCondition",
    description: "Disorders affecting the jaw and facial structures",
    items: [
      {
        name: "TMJ Disorders",
        href: "/conditions/tmj-disorders",
        description: "Problems with the temporomandibular joint and surrounding muscles",
        keywords: ["TMD", "jaw pain", "clicking jaw", "temporomandibular joint disorder"],
      },
      {
        name: "Malocclusion",
        href: "/conditions/malocclusion",
        description: "Misalignment of teeth and improper bite",
        keywords: ["bad bite", "crossbite", "overbite", "underbite"],
      },
      {
        name: "Oral Cancer",
        href: "/conditions/oral-cancer",
        description: "Cancer that develops in the tissues of the mouth or throat",
        keywords: ["mouth cancer", "oral malignancy", "tongue cancer", "lip cancer"],
      },
      {
        name: "Cleft Lip & Palate",
        href: "/conditions/cleft-lip-palate",
        description: "Birth defects affecting the upper lip and roof of the mouth",
        keywords: ["oral birth defect", "cleft palate treatment", "cleft lip surgery", "congenital oral condition"],
      },
    ],
  },
  {
    title: "Pediatric Dental Conditions",
    entityType: "MedicalCondition",
    description: "Dental issues specific to children",
    items: [
      {
        name: "Baby Bottle Tooth Decay",
        href: "/conditions/baby-bottle-tooth-decay",
        description: "Early childhood caries caused by prolonged bottle feeding",
        keywords: ["early childhood caries", "nursing caries", "infant tooth decay", "bottle rot"],
      },
      {
        name: "Thumb Sucking Effects",
        href: "/conditions/thumb-sucking-effects",
        description: "Dental problems caused by prolonged thumb or finger sucking",
        keywords: ["pacifier teeth", "finger sucking", "oral habit effects", "childhood dental development"],
      },
      {
        name: "Dental Developmental Issues",
        href: "/conditions/dental-developmental-issues",
        description: "Problems with tooth development and eruption in children",
        keywords: ["delayed tooth eruption", "ectopic eruption", "supernumerary teeth", "dental anomalies"],
      },
    ],
  },
]
