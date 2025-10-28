#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log(`
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          🔧 CREATING ALL MISSING CHENNAI PAGES 🔧                       ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
`);

// All Chennai locations from user's original list
const chennaiLocations = [
  { name: "Abiramapuram", pincode: "600018" },
  { name: "Adyar", pincode: "600020" },
  { name: "Agaram", pincode: "600082" },
  { name: "Aminjikarai", pincode: "600029" },
  { name: "Anna Nagar", pincode: "600040" },
  { name: "Anna Nagar East", pincode: "600102" },
  { name: "Anna Nagar Western Extn", pincode: "600101" },
  { name: "Anna Road", pincode: "600002" },
  { name: "Arumbakkam", pincode: "600106" },
  { name: "Ashoknagar", pincode: "600083" },
  { name: "Aynavaram", pincode: "600023" },
  { name: "Besantnagar", pincode: "600090" },
  { name: "Broadway", pincode: "600108" },
  { name: "Cemetry Road", pincode: "600021" },
  { name: "Chamiers Road", pincode: "600018" },
  { name: "Chennai Race Course", pincode: "600032" },
  { name: "Chepauk", pincode: "600005" },
  { name: "Chetput", pincode: "600031" },
  { name: "Chintadripet", pincode: "600002" },
  { name: "Choolai", pincode: "600112" },
  { name: "Choolaimedu", pincode: "600094" },
  { name: "Egmore", pincode: "600008" },
  { name: "Ekkaduthangal", pincode: "600032" },
  { name: "Eldams Road", pincode: "600018" },
  { name: "Erukkancheri", pincode: "600118" },
  { name: "Ethiraj Salai", pincode: "600008" },
  { name: "Flowers Road", pincode: "600084" },
  { name: "Foreshore Estate", pincode: "600028" },
  { name: "Fort St George", pincode: "600009" },
  { name: "G K M Colony", pincode: "600082" },
  { name: "Gopalapuram", pincode: "600086" },
  { name: "Government Estate", pincode: "600002" },
  { name: "Greams Road", pincode: "600006" },
  { name: "Guindy Industrial Estate", pincode: "600032" },
  { name: "Guindy North", pincode: "600015" },
  { name: "High Court Building", pincode: "600104" },
  { name: "ICF Colony", pincode: "600038" },
  { name: "Indira Nagar", pincode: "600020" },
  { name: "Jafferkhanpet", pincode: "600083" },
  { name: "Jawahar Nagar", pincode: "600082" },
  { name: "Kasturibai Nagar", pincode: "600020" },
  { name: "Kilpauk", pincode: "600010" },
  { name: "Kodambakkam", pincode: "600024" },
  { name: "Kodungaiyur", pincode: "600118" },
  { name: "Korrukupet", pincode: "600021" },
  { name: "Kosapet", pincode: "600012" },
  { name: "Kotturpuram", pincode: "600085" },
  { name: "Koyambedu", pincode: "600107" },
  { name: "Kumaran Nagar", pincode: "600033" },
  { name: "Mambalam R.S.", pincode: "600033" },
  { name: "Mandaveli", pincode: "600004" },
  { name: "Mannady", pincode: "600001" },
  { name: "Mylapore", pincode: "600004" },
  { name: "Nandanam", pincode: "600035" },
  { name: "Nerkundram", pincode: "600107" },
  { name: "New Avadi Road", pincode: "600010" },
  { name: "Nungambakkam", pincode: "600034" },
  { name: "Nungambakkam Bazaar", pincode: "600034" },
  { name: "Nungambakkam High Road", pincode: "600034" },
  { name: "Park Town", pincode: "600003" },
  { name: "Perambur", pincode: "600011" },
  { name: "Perambur Barracks", pincode: "600012" },
  { name: "Perambur High Road", pincode: "600012" },
  { name: "Perambur North", pincode: "600011" },
  { name: "Pudupet", pincode: "600002" },
  { name: "Puliyanthope", pincode: "600012" },
  { name: "Purasawalkam", pincode: "600084" },
  { name: "Raja Annamalaipuram", pincode: "600028" },
  { name: "Rajathottam", pincode: "600082" },
  { name: "Rajbhavan", pincode: "600022" },
  { name: "Ramakrishna Nagar", pincode: "600028" },
  { name: "Rangarajapuram", pincode: "600024" },
  { name: "Rayapuram", pincode: "600013" },
  { name: "Royapettah", pincode: "600014" },
  { name: "Royapettah High Road", pincode: "600004" },
  { name: "Royapuram Market", pincode: "600013" },
  { name: "Saidapet", pincode: "600015" },
  { name: "Saidapet North", pincode: "600015" },
  { name: "Saligramam", pincode: "600093" },
  { name: "Santhome", pincode: "600004" },
  { name: "Sembiam", pincode: "600011" },
  { name: "Seven Wells", pincode: "600001" },
  { name: "Shenoy Nagar", pincode: "600030" },
  { name: "Sowcarpet", pincode: "600079" },
  { name: "Strahans Road", pincode: "600012" },
  { name: "Teynampet", pincode: "600018" },
  { name: "Teynampet South", pincode: "600018" },
  { name: "Teynampet West", pincode: "600006" },
  { name: "Thygaraya Nagar", pincode: "600017" },
  { name: "Thygaraya Nagar North", pincode: "600017" },
  { name: "Thygaraya Nagar South", pincode: "600017" },
  { name: "Tiruvallikkeni", pincode: "600005" },
  { name: "Tiruvanmiyur", pincode: "600041" },
  { name: "Tiruvanmiyur North", pincode: "600041" },
  { name: "Tondiarpet", pincode: "600081" },
  { name: "Tondiarpet Bazaar", pincode: "600081" },
  { name: "Tondiarpet West", pincode: "600081" },
  { name: "Triplicane South", pincode: "600014" },
  { name: "Vadapalani", pincode: "600026" },
  { name: "Velacheri", pincode: "600042" },
  { name: "Vepery", pincode: "600007" },
  { name: "Virugambakkam", pincode: "600092" },
  { name: "Vyasarpadi", pincode: "600039" },
  { name: "Washermanpet", pincode: "600021" },
  { name: "Washermanpet East", pincode: "600021" },
  { name: "West Mambalam", pincode: "600033" },
];

const baseDir = path.join(__dirname, '..');
const chennaiDir = path.join(baseDir, 'app', 'in', 'tamil-nadu', 'chennai');

let created = 0;
let skipped = 0;

chennaiLocations.forEach(location => {
  const slug = location.name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[().,]/g, '');
  
  const dirPath = path.join(chennaiDir, slug);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Skip if already exists
  if (fs.existsSync(filePath)) {
    skipped++;
    return;
  }
  
  // Create directory
  fs.mkdirSync(dirPath, { recursive: true });
  
  // Generate page content
  const pageContent = `import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { LocationHeader } from "@/components/location/LocationHeader"
import { GoogleMapEmbed } from "@/components/location/GoogleMapEmbed"
import { EnhancedServicesList } from "@/components/location/EnhancedServicesList"
import { LocationReviews } from "@/components/location/LocationReviews"
import { LocationFAQs } from "@/components/location/LocationFAQs"
import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { WhyChooseUs } from "@/components/location/WhyChooseUs"
import { PriceComparisonTable } from "@/components/location/PriceComparisonTable"
import { TravelInfoCard } from "@/components/location/TravelInfoCard"
import { generateLocationReviews } from "@/lib/review-data"

const reviews = generateLocationReviews("${location.name}", "Chennai")

export const metadata: Metadata = {
  title: "Best Dentist in ${location.name}, Chennai | Top Dental Clinic | Indira Dental Clinic",
  description: "Find the best dental clinic in ${location.name}, Chennai for all your dental needs. Dr. Rockson Samuel offers expert treatments including root canals, implants, braces, and cosmetic dentistry.",
  keywords: ["dentist in ${location.name}", "dental clinic ${location.name} Chennai", "best dentist ${location.name}", "dental care ${location.name}", "Indira Dental Clinic ${location.name}"],
  alternates: {
    canonical: \`/in/tamil-nadu/chennai/${slug}\`,
  },
}

export default function ${location.name.replace(/\s+/g, '')}Page() {
  const services = [
    { title: "Root Canal Treatment", href: "/services/root-canal-treatment" },
    { title: "Dental Implants", href: "/services/dental-implants" },
    { title: "Orthodontic Braces", href: "/services/orthodontics" },
    { title: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening" },
    { title: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
    { title: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
    { title: "Emergency Dental Care", href: "/services/emergency-dentistry" },
    { title: "Gum Disease Treatment", href: "/services/periodontics" },
    { title: "Wisdom Teeth Removal", href: "/services/oral-surgery/wisdom-teeth-removal" },
    { title: "Dental Crowns & Bridges", href: "/services/restorative-dentistry/dental-crowns" },
    { title: "General Dentistry", href: "/services/general-dentistry" },
    { title: "All-on-4 Implants", href: "/services/dental-implants/all-on-4-implants" },
  ]

  const faqs = [
    {
      question: "What dental services are available in ${location.name}, Chennai?",
      answer: "In ${location.name}, Chennai, Indira Dental Clinic offers comprehensive dental services including general dentistry, cosmetic treatments, root canal therapy, dental implants, orthodontics (braces & Invisalign), teeth whitening, gum disease treatment, wisdom teeth removal, pediatric dentistry, and emergency dental care.",
    },
    {
      question: "How can I book an appointment with Dr. Rockson Samuel from ${location.name}?",
      answer: "You can book an appointment by calling us at 7010650063 or visiting our website to use the online booking form. We are conveniently located near Chennai and serve patients from ${location.name} and all surrounding areas.",
    },
    {
      question: "What are the costs of dental treatments for ${location.name} patients?",
      answer: "Our clinic offers transparent and competitive pricing. Root canal treatment starts from ₹3,000, dental implants from ₹25,000, braces from ₹30,000, and teeth whitening from ₹8,000. We provide detailed cost estimates during your consultation. Patients from ${location.name}, Chennai can expect high-quality care at affordable prices.",
    },
    {
      question: "Is emergency dental care available for ${location.name} area?",
      answer: "Yes, we provide 24/7 emergency dental care for patients from ${location.name} and all Chennai areas. Whether you have a severe toothache, broken tooth, knocked-out tooth, or any dental emergency, call us immediately at 7010650063.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' },
            { title: 'Chennai', href: '/in/tamil-nadu/chennai' },
            { title: '${location.name}', href: '/in/tamil-nadu/chennai/${slug}' }
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in ${location.name}, Chennai"
          taluk="${location.name}"
          pincode="${location.pincode}"
          distance="130 KM from Vellore"
          category="town"
        />

        <div className="mb-8">
          <GoogleMapEmbed
            locationName="${location.name}"
            address="3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu - 632006"
          />
        </div>

        <WhyChooseUs locationName="${location.name}" />

        <EnhancedServicesList locationName="${location.name}" services={services} />

        <PriceComparisonTable locationName="${location.name}" />

        <LocationReviews locationName="${location.name}" reviews={reviews} />

        <LocationFAQs faqs={faqs} />

        <TravelInfoCard locationName="${location.name}" />

        <PeopleAlsoSearchFor location="${location.name}" city="Chennai" />

        <CTAWidget
          title="Book Your Appointment from ${location.name} Today!"
          description="Experience expert dental care with Dr. Rockson Samuel. We serve all Chennai areas including ${location.name}."
          primaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
          secondaryAction={{ text: "Book Online", href: "/contact#appointment" }}
        />
      </div>
    </div>
  )
}
`;
  
  fs.writeFileSync(filePath, pageContent);
  created++;
  console.log(`  ✅ Created: ${slug}`);
});

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 CHENNAI PAGES CREATION SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✅ Created:    ${created} new pages
  ⏭️  Skipped:    ${skipped} (already exist)
  📊 Total:      ${chennaiLocations.length} Chennai locations

✅ All Chennai area pages now available!
`);

