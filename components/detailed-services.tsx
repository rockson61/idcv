import { SmileIcon as Tooth, Smile, Activity, Syringe } from "lucide-react"

const services = [
  {
    category: "Preventive Dentistry",
    icon: Tooth,
    description:
      "Comprehensive <a href='https://www.cdc.gov/oralhealth/basics/adult-oral-health/tips.html' target='_blank' rel='noopener noreferrer'>preventive care</a> to maintain optimal oral health",
    treatments: [
      { name: "Regular Dental Check-ups", duration: "30-45 mins", cost: "₹500-1000" },
      {
        name: "<a href='https://www.mouthhealthy.org/all-topics-a-z/cleaning' target='_blank' rel='noopener noreferrer'>Professional Teeth Cleaning</a>",
        duration: "45-60 mins",
        cost: "₹1000-2000",
      },
      {
        name: "<a href='https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-x-rays' target='_blank' rel='noopener noreferrer'>Dental X-rays</a>",
        duration: "15-20 mins",
        cost: "₹300-800",
      },
      {
        name: "<a href='https://www.nidcr.nih.gov/health-info/fluoride' target='_blank' rel='noopener noreferrer'>Fluoride Treatment</a>",
        duration: "15-20 mins",
        cost: "₹500-1000",
      },
      { name: "Dental Sealants", duration: "30-45 mins", cost: "₹800-1500" },
    ],
    locations: ["Gandhi Nagar", "Katpadi", "VIT Area"],
  },
  {
    category: "Root Canal Treatment (RCT)",
    icon: Activity,
    description:
      "Advanced <a href='https://www.aae.org/patients/root-canal-treatment/' target='_blank' rel='noopener noreferrer'>endodontic procedures</a> with modern technology",
    treatments: [
      { name: "Single Sitting RCT", duration: "60-90 mins", cost: "₹3000-8000" },
      { name: "Multi-visit RCT", duration: "2-3 sessions", cost: "₹5000-10000" },
      { name: "Post and Core Treatment", duration: "60 mins", cost: "₹2000-4000" },
      { name: "Re-RCT Treatment", duration: "90-120 mins", cost: "₹8000-15000" },
      { name: "Emergency Root Canal Care", duration: "45-60 mins", cost: "₹4000-8000" },
    ],
    locations: ["CMC Area", "Gandhi Nagar", "Katpadi"],
  },
  {
    category: "Orthodontic Treatment",
    icon: Smile,
    description:
      "Comprehensive <a href='https://www.aaoinfo.org/orthodontic-treatment/' target='_blank' rel='noopener noreferrer'>orthodontic solutions</a> for all ages",
    treatments: [
      {
        name: "<a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6175230/' target='_blank' rel='noopener noreferrer'>Metal Braces</a>",
        duration: "12-24 months",
        cost: "₹25000-45000",
      },
      { name: "Ceramic Braces", duration: "12-24 months", cost: "₹35000-55000" },
      {
        name: "<a href='https://www.sciencedirect.com/topics/medicine-and-dentistry/invisible-orthodontic-appliance' target='_blank' rel='noopener noreferrer'>Invisible Aligners</a>",
        duration: "6-18 months",
        cost: "₹45000-150000",
      },
      { name: "Retainers", duration: "Ongoing", cost: "₹3000-8000" },
      { name: "Orthodontic Consultation", duration: "30 mins", cost: "₹500-1000" },
    ],
    locations: ["VIT Area", "Gandhi Nagar", "Sathuvachari"],
  },
  {
    category: "Dental Implants",
    icon: Syringe,
    description:
      "Permanent solutions for <a href='https://www.ada.org/resources/research/science-and-research-institute/oral-health-topics/dental-implants' target='_blank' rel='noopener noreferrer'>missing teeth</a>",
    treatments: [
      { name: "Single Tooth Implants", duration: "2-3 sessions", cost: "₹25000-45000" },
      { name: "Multiple Tooth Implants", duration: "3-4 sessions", cost: "₹45000-80000" },
      {
        name: "<a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3255440/' target='_blank' rel='noopener noreferrer'>Full Mouth Implants</a>",
        duration: "4-6 sessions",
        cost: "₹150000-300000",
      },
      { name: "Implant Supported Dentures", duration: "3-4 sessions", cost: "₹80000-150000" },
      {
        name: "<a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3722694/' target='_blank' rel='noopener noreferrer'>Bone Grafting</a>",
        duration: "60-90 mins",
        cost: "₹15000-30000",
      },
    ],
    locations: ["CMC Area", "Gandhi Nagar", "Katpadi"],
  },
]

// ... rest of the component remains the same
