import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/breadcrumb'
import { 
  BookOpen, 
  Search, 
  Stethoscope, 
  Heart, 
  Pill, 
  User, 
  Baby, 
  Users, 
  Smile,
  Syringe,
  Activity,
  Zap,
  ShieldCheck,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dental Glossary: Complete Dental Vocabulary & Terms | Indira Dental Clinic',
  description: 'Comprehensive dental glossary with treatments, conditions, specialists, and drugs organized by specialty and age group. Complete dental terminology guide.',
  keywords: 'dental glossary, dental terms, dental vocabulary, dental treatments, dental conditions, dental specialists, dental drugs, orthodontics, periodontics, endodontics',
}

export default function DentalGlossaryPage() {
  const specialists = [
    { name: 'Endodontist', description: 'Root canal specialist', specialty: 'Endodontics', link: '/services/root-canal-treatment', icon: Heart },
    { name: 'Orthodontist', description: 'Braces and teeth alignment specialist', specialty: 'Orthodontics', link: '/services/orthodontics', icon: Smile },
    { name: 'Periodontist', description: 'Gum disease specialist', specialty: 'Periodontics', link: '/services/periodontics', icon: Activity },
    { name: 'Prosthodontist', description: 'Dental restoration specialist (crowns, bridges, dentures)', specialty: 'Prosthodontics', link: '/services/prosthodontics', icon: ShieldCheck },
    { name: 'Oral Surgeon', description: 'Surgical procedures and extractions specialist', specialty: 'Oral Surgery', link: '/services/oral-surgery', icon: Syringe },
    { name: 'Implantologist', description: 'Dental implant specialist', specialty: 'Implantology', link: '/services/dental-implants', icon: Zap },
    { name: 'Cosmetic Dentist', description: 'Aesthetic dentistry specialist', specialty: 'Cosmetic Dentistry', link: '/services/cosmetic-dentistry', icon: Smile },
    { name: 'Pediatric Dentist', description: 'Children\'s dentistry specialist', specialty: 'Pediatric Dentistry', link: '/services/pediatric-dentistry', icon: Baby },
    { name: 'General Dentist', description: 'Comprehensive dental care provider', specialty: 'General Dentistry', link: '/services', icon: User },
  ]

  const treatmentsBySpecialty = {
    'Endodontics': [
      { term: 'Root Canal Treatment (RCT)', definition: 'Removal of infected tooth pulp and sealing of root canals', link: '/services/root-canal-treatment' },
      { term: 'Pulpotomy', definition: 'Partial removal of tooth pulp, common in children', link: '/services/pediatric-dentistry/pulpotomy' },
      { term: 'Pulpectomy', definition: 'Complete removal of pulp tissue from tooth', link: '/services/root-canal-treatment' },
      { term: 'Apicectomy', definition: 'Surgical removal of tooth root tip and infected tissue', link: '/services/endodontics/apicectomy' },
      { term: 'Root Canal Retreatment (Re-RCT)', definition: 'Second root canal procedure on previously treated tooth', link: '/services/root-canal-treatment/re-rct' },
      { term: 'Pulp Capping', definition: 'Procedure to protect exposed tooth pulp', link: '/services/endodontics/pulp-capping' },
    ],
    'Orthodontics': [
      { term: 'Metal Braces', definition: 'Traditional stainless steel brackets and wires', link: '/services/orthodontics/metal-braces' },
      { term: 'Ceramic Braces', definition: 'Tooth-colored aesthetic braces', link: '/services/orthodontics/ceramic-braces' },
      { term: 'Lingual Braces', definition: 'Braces placed on back of teeth (invisible)', link: '/services/orthodontics/lingual-braces' },
      { term: 'Invisalign', definition: 'Clear removable aligners for teeth straightening', link: '/services/orthodontics/invisalign' },
      { term: 'Self-Ligating Braces', definition: 'Braces with built-in clips (no elastic bands)', link: '/services/orthodontics/self-ligating-braces' },
      { term: 'Retainers', definition: 'Device to maintain teeth position after braces', link: '/services/orthodontics/retainers' },
      { term: 'Palatal Expander', definition: 'Device to widen upper jaw', link: '/services/orthodontics/palatal-expander' },
      { term: 'Space Maintainer', definition: 'Device to hold space for permanent teeth', link: '/services/pediatric-dentistry/space-maintainers' },
    ],
    'Periodontics': [
      { term: 'Scaling & Root Planing', definition: 'Deep cleaning below gum line', link: '/services/periodontics/scaling-root-planing' },
      { term: 'Gum Grafting', definition: 'Surgical procedure to cover exposed tooth roots', link: '/services/periodontics/gum-grafting' },
      { term: 'Flap Surgery', definition: 'Gum tissue surgery to reduce periodontal pockets', link: '/services/periodontics/flap-surgery' },
      { term: 'Crown Lengthening', definition: 'Removal of gum tissue to expose more tooth', link: '/services/periodontics/crown-lengthening' },
      { term: 'Gingivectomy', definition: 'Removal of diseased gum tissue', link: '/services/periodontics/gingivectomy' },
      { term: 'Gum Contouring', definition: 'Reshaping gums for aesthetic purposes', link: '/services/cosmetic-dentistry/gum-contouring' },
      { term: 'Bone Grafting', definition: 'Adding bone material to strengthen jawbone', link: '/services/dental-implants/bone-graft' },
    ],
    'Prosthodontics': [
      { term: 'Dental Crown', definition: 'Cap placed over damaged tooth', link: '/services/prosthodontics/dental-crowns' },
      { term: 'Dental Bridge', definition: 'False tooth anchored to adjacent teeth', link: '/services/prosthodontics/dental-bridges' },
      { term: 'Dentures', definition: 'Removable replacement for missing teeth', link: '/services/prosthodontics/dentures' },
      { term: 'Complete Dentures', definition: 'Full set of artificial teeth', link: '/services/prosthodontics/dentures/complete-dentures' },
      { term: 'Partial Dentures', definition: 'Replacement for some missing teeth', link: '/services/prosthodontics/dentures/partial-dentures' },
      { term: 'Overdentures', definition: 'Dentures supported by implants or roots', link: '/services/prosthodontics/dentures/overdentures' },
      { term: 'Full Mouth Rehabilitation', definition: 'Comprehensive restoration of all teeth', link: '/services/prosthodontics/full-mouth-rehabilitation' },
      { term: 'Inlays & Onlays', definition: 'Custom-made fillings for larger cavities', link: '/services/restorative-dentistry/inlays-onlays' },
    ],
    'Implantology': [
      { term: 'Dental Implant', definition: 'Titanium post surgically placed in jawbone', link: '/services/dental-implants' },
      { term: 'Single Tooth Implant', definition: 'Replacement for one missing tooth', link: '/services/dental-implants/single-tooth' },
      { term: 'All-on-4 Implants', definition: 'Full arch restoration with 4 implants', link: '/services/dental-implants/all-on-4-implants' },
      { term: 'All-on-6 Implants', definition: 'Full arch restoration with 6 implants', link: '/services/dental-implants/all-on-6-implants' },
      { term: 'Zygomatic Implants', definition: 'Implants anchored in cheekbone', link: '/services/dental-implants/zygomatic-implants' },
      { term: 'Mini Implants', definition: 'Smaller diameter implants', link: '/services/dental-implants/mini-implants' },
      { term: 'Immediate Load Implants', definition: 'Same-day tooth replacement', link: '/services/dental-implants/immediate-load' },
      { term: 'Sinus Lift', definition: 'Procedure to add bone in upper jaw', link: '/services/dental-implants/sinus-lift' },
      { term: 'Ridge Augmentation', definition: 'Building up jaw ridge for implants', link: '/services/dental-implants/ridge-augmentation' },
    ],
    'Oral Surgery': [
      { term: 'Tooth Extraction', definition: 'Removal of tooth from socket', link: '/services/oral-surgery/tooth-extraction' },
      { term: 'Wisdom Teeth Removal', definition: 'Extraction of third molars', link: '/services/oral-surgery/wisdom-teeth-removal' },
      { term: 'Surgical Extraction', definition: 'Complex tooth removal requiring surgery', link: '/services/oral-surgery/surgical-extraction' },
      { term: 'Alveoloplasty', definition: 'Smoothing and reshaping jawbone after extraction', link: '/services/oral-surgery/alveoloplasty' },
      { term: 'Frenectomy', definition: 'Removal or modification of frenum', link: '/services/oral-surgery/frenectomy' },
      { term: 'Orthognathic Surgery', definition: 'Corrective jaw surgery', link: '/services/oral-surgery/orthognathic-surgery' },
      { term: 'Apicoectomy', definition: 'Surgical removal of root tip', link: '/services/oral-surgery/apicoectomy' },
    ],
    'Cosmetic Dentistry': [
      { term: 'Teeth Whitening', definition: 'Professional bleaching to brighten teeth', link: '/services/cosmetic-dentistry/teeth-whitening' },
      { term: 'Porcelain Veneers', definition: 'Thin ceramic shells bonded to front teeth', link: '/services/cosmetic-dentistry/veneers/porcelain-veneers' },
      { term: 'Composite Veneers', definition: 'Resin veneers applied directly to teeth', link: '/services/cosmetic-dentistry/veneers/composite-veneers' },
      { term: 'Lumineers', definition: 'Ultra-thin no-prep veneers', link: '/services/cosmetic-dentistry/veneers/lumineers' },
      { term: 'Dental Bonding', definition: 'Resin applied to repair or improve teeth', link: '/services/cosmetic-dentistry/bonding' },
      { term: 'Smile Makeover', definition: 'Comprehensive aesthetic dental transformation', link: '/services/cosmetic-dentistry/smile-makeover' },
      { term: 'Gum Contouring', definition: 'Reshaping gum line for better smile', link: '/services/cosmetic-dentistry/gum-contouring' },
    ],
    'Restorative Dentistry': [
      { term: 'Dental Filling', definition: 'Material used to fill cavity', link: '/services/restorative-dentistry/dental-fillings' },
      { term: 'Composite Filling', definition: 'Tooth-colored resin filling', link: '/services/restorative-dentistry/dental-fillings/composite' },
      { term: 'Amalgam Filling', definition: 'Silver-colored metal filling', link: '/services/restorative-dentistry/dental-fillings/amalgam' },
      { term: 'Glass Ionomer Filling', definition: 'Tooth-colored filling releasing fluoride', link: '/services/restorative-dentistry/dental-fillings/glass-ionomer' },
      { term: 'CEREC', definition: 'Same-day ceramic restorations', link: '/services/restorative-dentistry/cerec-restorations' },
    ],
    'Preventive Dentistry': [
      { term: 'Dental Checkup', definition: 'Regular examination of teeth and gums', link: '/services/general-dentistry/dental-check-ups' },
      { term: 'Teeth Cleaning', definition: 'Professional removal of plaque and tartar', link: '/services/general-dentistry/teeth-cleaning' },
      { term: 'Fluoride Treatment', definition: 'Application of fluoride to strengthen enamel', link: '/services/preventive-dentistry/fluoride-treatment' },
      { term: 'Dental Sealants', definition: 'Protective coating on chewing surfaces', link: '/services/preventive-dentistry/dental-sealants' },
      { term: 'Oral Cancer Screening', definition: 'Examination for oral cancer signs', link: '/services/preventive-dentistry/oral-cancer-screening' },
    ],
  }

  const conditionsBySpecialty = {
    'Endodontics': [
      { term: 'Tooth Decay', definition: 'Destruction of tooth enamel by acids', link: '/conditions/tooth-decay' },
      { term: 'Dental Pulpitis', definition: 'Inflammation of tooth pulp', link: '/conditions/pulpitis' },
      { term: 'Periapical Abscess', definition: 'Infection at tooth root tip', link: '/conditions/tooth-abscess' },
      { term: 'Cracked Tooth Syndrome', definition: 'Incomplete fracture of tooth', link: '/conditions/cracked-teeth' },
    ],
    'Orthodontics': [
      { term: 'Malocclusion', definition: 'Misalignment of teeth when jaws close', link: '/conditions/malocclusion' },
      { term: 'Overbite', definition: 'Upper teeth overlap lower teeth excessively', link: '/blog/overbite-correction-treatment' },
      { term: 'Underbite', definition: 'Lower teeth protrude beyond upper teeth', link: '/blog/underbite-treatment-guide' },
      { term: 'Crossbite', definition: 'Upper teeth bite inside lower teeth', link: '/blog/crossbite-treatment-fix' },
      { term: 'Open Bite', definition: 'Teeth don\'t touch when jaw closes', link: '/blog/open-bite-treatment-guide' },
      { term: 'Crowded Teeth', definition: 'Insufficient space for all teeth', link: '/blog/crowded-teeth-malocclusion-treatment' },
    ],
    'Periodontics': [
      { term: 'Gingivitis', definition: 'Inflammation of gums (early gum disease)', link: '/conditions/gingivitis' },
      { term: 'Periodontitis', definition: 'Advanced gum disease affecting bone', link: '/conditions/periodontitis' },
      { term: 'Gum Recession', definition: 'Gums pull away exposing tooth roots', link: '/conditions/gum-recession' },
      { term: 'Periodontal Pocket', definition: 'Deep gap between gum and tooth', link: '/blog/sixmm-gum-pocket-treatment' },
      { term: 'Gum Abscess', definition: 'Pus-filled swelling in gums', link: '/blog/gum-abscess-emergency-treatment' },
    ],
    'General Conditions': [
      { term: 'Tooth Sensitivity', definition: 'Pain from hot, cold, sweet, or acidic foods', link: '/conditions/tooth-sensitivity' },
      { term: 'Bad Breath (Halitosis)', definition: 'Chronic unpleasant mouth odor', link: '/conditions/bad-breath' },
      { term: 'Dry Mouth (Xerostomia)', definition: 'Insufficient saliva production', link: '/conditions/dry-mouth' },
      { term: 'Bruxism', definition: 'Teeth grinding or clenching', link: '/conditions/bruxism' },
      { term: 'Tooth Erosion', definition: 'Loss of enamel from acid exposure', link: '/conditions/tooth-erosion' },
      { term: 'Impacted Teeth', definition: 'Teeth unable to emerge properly', link: '/conditions/impacted-teeth' },
    ],
  }

  const drugsByCategory = {
    'Antibiotics': [
      { term: 'Amoxicillin', definition: 'Common antibiotic for dental infections', dosage: '500mg, 3x daily', use: 'Tooth infections, abscesses' },
      { term: 'Metronidazole', definition: 'Antibiotic for anaerobic bacteria', dosage: '400mg, 3x daily', use: 'Gum disease, dental abscesses' },
      { term: 'Doxycycline', definition: 'Antibiotic for gum disease', dosage: '100mg, 2x daily', use: 'Periodontitis, gum infections' },
      { term: 'Clindamycin', definition: 'Alternative antibiotic for penicillin-allergic patients', dosage: '300mg, 4x daily', use: 'Dental infections' },
      { term: 'Azithromycin', definition: 'Short-course antibiotic', dosage: '500mg once daily', use: 'Dental infections' },
    ],
    'Pain Relief': [
      { term: 'Ibuprofen', definition: 'NSAID for pain and inflammation', dosage: '400mg, every 6-8 hours', use: 'Dental pain, post-surgery' },
      { term: 'Paracetamol (Acetaminophen)', definition: 'Common pain reliever and fever reducer', dosage: '650mg, every 6 hours', use: 'Mild to moderate dental pain' },
      { term: 'Diclofenac', definition: 'Strong anti-inflammatory', dosage: '50mg, twice daily', use: 'Severe dental pain, inflammation' },
      { term: 'Ketorolac', definition: 'Potent pain reliever', dosage: '10mg, every 6 hours', use: 'Post-surgical pain' },
    ],
    'Antiseptics': [
      { term: 'Chlorhexidine Mouthwash', definition: 'Antibacterial mouth rinse', dosage: '10-15ml, twice daily', use: 'Gum disease, post-surgery' },
      { term: 'Betadine Gargle', definition: 'Povidone-iodine antiseptic', dosage: '10ml diluted, 3x daily', use: 'Oral infections, pre-surgery' },
      { term: 'Hydrogen Peroxide', definition: 'Mild antiseptic and whitening agent', dosage: '3% solution, diluted 1:1', use: 'Cleaning, disinfection' },
    ],
    'Topical Treatments': [
      { term: 'Fluoride Gel', definition: 'Strengthens tooth enamel', dosage: 'Apply daily', use: 'Cavity prevention, sensitivity' },
      { term: 'Desensitizing Toothpaste', definition: 'Contains potassium nitrate', dosage: 'Brush twice daily', use: 'Tooth sensitivity' },
      { term: 'Dental Wax', definition: 'Orthodontic wax for braces', dosage: 'Apply as needed', use: 'Braces irritation' },
    ],
  }

  const anatomyTerms = [
    { term: 'Enamel', definition: 'Hard outer layer of tooth crown', link: '/blog/tooth-anatomy-complete-guide' },
    { term: 'Dentin', definition: 'Layer beneath enamel containing nerve endings', link: '/blog/tooth-anatomy-complete-guide' },
    { term: 'Pulp', definition: 'Soft tissue containing nerves and blood vessels', link: '/blog/tooth-anatomy-complete-guide' },
    { term: 'Cementum', definition: 'Hard tissue covering tooth root', link: '/blog/tooth-anatomy-complete-guide' },
    { term: 'Periodontal Ligament', definition: 'Connective tissue attaching tooth to bone', link: '/blog/tooth-anatomy-complete-guide' },
    { term: 'Alveolar Bone', definition: 'Jawbone surrounding and supporting teeth', link: '/blog/tooth-anatomy-complete-guide' },
    { term: 'Gingiva', definition: 'Gum tissue surrounding teeth', link: '/blog/tooth-anatomy-complete-guide' },
    { term: 'Crown', definition: 'Visible part of tooth above gum line', link: '/blog/tooth-anatomy-complete-guide' },
    { term: 'Root', definition: 'Part of tooth embedded in jawbone', link: '/blog/tooth-anatomy-complete-guide' },
    { term: 'Apex', definition: 'Tip of tooth root', link: '/blog/tooth-anatomy-complete-guide' },
  ]

  const ageGroups = {
    'Infants & Toddlers (0-3 years)': [
      { term: 'Primary Teeth', definition: 'Baby teeth (20 total)', link: '/blog/baby-teeth-eruption-timeline' },
      { term: 'Teething', definition: 'Process of baby teeth emerging', link: '/services/pediatric-dentistry' },
      { term: 'Bottle Tooth Decay', definition: 'Early childhood caries from bottle feeding', link: '/blog/baby-bottle-tooth-decay' },
      { term: 'Thumb Sucking', definition: 'Oral habit affecting tooth alignment', link: '/services/pediatric-dentistry' },
    ],
    'Children (4-12 years)': [
      { term: 'Mixed Dentition', definition: 'Period with both baby and permanent teeth', link: '/blog/permanent-teeth-eruption-guide' },
      { term: 'Permanent Teeth', definition: 'Adult teeth replacing baby teeth', link: '/blog/permanent-teeth-eruption-guide' },
      { term: 'Dental Sealants', definition: 'Protective coating on molars', link: '/services/preventive-dentistry/dental-sealants' },
      { term: 'Fluoride Treatment', definition: 'Preventive treatment to strengthen enamel', link: '/services/preventive-dentistry/fluoride-treatment' },
      { term: 'Space Maintainer', definition: 'Device to preserve space for permanent teeth', link: '/services/pediatric-dentistry/space-maintainers' },
    ],
    'Teenagers (13-19 years)': [
      { term: 'Orthodontic Treatment', definition: 'Braces to align teeth', link: '/services/orthodontics' },
      { term: 'Wisdom Teeth', definition: 'Third molars emerging in late teens', link: '/blog/wisdom-teeth-development-eruption' },
      { term: 'Sports Mouthguard', definition: 'Protective device for athletes', link: '/services/preventive-dentistry/mouthguards' },
      { term: 'Clear Aligners', definition: 'Invisible teeth straightening option', link: '/services/orthodontics/invisalign' },
    ],
    'Adults (20-64 years)': [
      { term: 'Periodontal Disease', definition: 'Gum disease common in adults', link: '/conditions/gum-disease' },
      { term: 'Dental Implants', definition: 'Permanent tooth replacement', link: '/services/dental-implants' },
      { term: 'Root Canal', definition: 'Treatment to save infected tooth', link: '/services/root-canal-treatment' },
      { term: 'Cosmetic Procedures', definition: 'Aesthetic dental treatments', link: '/services/cosmetic-dentistry' },
      { term: 'TMJ Disorders', definition: 'Jaw joint problems', link: '/conditions/tmj-disorders' },
    ],
    'Seniors (65+ years)': [
      { term: 'Dentures', definition: 'Replacement for multiple missing teeth', link: '/services/prosthodontics/dentures' },
      { term: 'Dry Mouth', definition: 'Common in elderly due to medications', link: '/conditions/dry-mouth' },
      { term: 'Root Caries', definition: 'Decay on exposed tooth roots', link: '/conditions/tooth-decay' },
      { term: 'Implant-Supported Dentures', definition: 'Dentures anchored by implants', link: '/services/dental-implants/implant-supported-dentures' },
      { term: 'Gum Recession', definition: 'Exposed roots from gum shrinkage', link: '/conditions/receding-gums' },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Glossary', href: '/glossary' }
          ]}
        />

        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Complete Dental Vocabulary Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Dental Glossary: A to Z
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to dental treatments, conditions, specialists, and medications. 
            Organized by specialty and age group for easy understanding.
          </p>
        </div>

        {/* Quick Navigation */}
        <ModernCard className="mb-8 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200">
          <ModernCardHeader>
            <ModernCardTitle className="flex items-center gap-2">
              <Search className="w-6 h-6 text-teal-600" />
              Quick Navigation
            </ModernCardTitle>
          </ModernCardHeader>
          <ModernCardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <a href="#specialists" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-teal-50 transition-colors border border-teal-200">
                <User className="w-5 h-5 text-teal-600" />
                <span className="font-semibold text-gray-800">Specialists</span>
              </a>
              <a href="#treatments" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-blue-200">
                <Stethoscope className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">Treatments</span>
              </a>
              <a href="#conditions" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-purple-50 transition-colors border border-purple-200">
                <Heart className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-800">Conditions</span>
              </a>
              <a href="#drugs" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-orange-50 transition-colors border border-orange-200">
                <Pill className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-800">Medications</span>
              </a>
              <a href="#anatomy" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-green-50 transition-colors border border-green-200">
                <Activity className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-800">Anatomy</span>
              </a>
              <a href="#age-groups" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-pink-50 transition-colors border border-pink-200">
                <Users className="w-5 h-5 text-pink-600" />
                <span className="font-semibold text-gray-800">Age Groups</span>
              </a>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Dental Specialists */}
        <section id="specialists" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <User className="w-8 h-8 text-teal-600" />
            Dental Specialists
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {specialists.map((specialist, index) => {
              const Icon = specialist.icon
              return (
                <Link key={index} href={specialist.link}>
                  <ModernCard className="h-full hover:shadow-lg transition-all border-2 hover:border-teal-300">
                    <ModernCardContent className="p-6">
                      <Icon className="w-10 h-10 text-teal-600 mb-3" />
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{specialist.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{specialist.description}</p>
                      <Badge className="bg-teal-100 text-teal-700">{specialist.specialty}</Badge>
                    </ModernCardContent>
                  </ModernCard>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Treatments by Specialty */}
        <section id="treatments" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Stethoscope className="w-8 h-8 text-blue-600" />
            Dental Treatments by Specialty
          </h2>
          {Object.entries(treatmentsBySpecialty).map(([specialty, treatments], idx) => (
            <ModernCard key={idx} className="mb-6 border-2 border-blue-200">
              <ModernCardHeader className="bg-blue-50">
                <ModernCardTitle className="text-xl">{specialty}</ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {treatments.map((treatment, index) => (
                    <Link key={index} href={treatment.link} className="group">
                      <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600">{treatment.term}</h4>
                            <p className="text-sm text-gray-600">{treatment.definition}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-blue-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </ModernCardContent>
            </ModernCard>
          ))}
        </section>

        {/* Conditions by Specialty */}
        <section id="conditions" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Heart className="w-8 h-8 text-purple-600" />
            Dental Conditions by Specialty
          </h2>
          {Object.entries(conditionsBySpecialty).map(([specialty, conditions], idx) => (
            <ModernCard key={idx} className="mb-6 border-2 border-purple-200">
              <ModernCardHeader className="bg-purple-50">
                <ModernCardTitle className="text-xl">{specialty}</ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {conditions.map((condition, index) => (
                    <Link key={index} href={condition.link} className="group">
                      <div className="p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors border border-gray-200 hover:border-purple-300">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1 group-hover:text-purple-600">{condition.term}</h4>
                            <p className="text-sm text-gray-600">{condition.definition}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-purple-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </ModernCardContent>
            </ModernCard>
          ))}
        </section>

        {/* Medications & Drugs */}
        <section id="drugs" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Pill className="w-8 h-8 text-orange-600" />
            Common Dental Medications & Drugs
          </h2>
          
          {/* Important Disclaimer */}
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-5 mb-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-900 mb-2">⚠️ Important Medical Disclaimer</h3>
                <p className="text-sm text-red-800">
                  All medications listed are for <strong>informational purposes only</strong>. 
                  Never self-medicate. Always consult Dr. Rockson Samuel or a qualified dentist before taking any medication. 
                  Prescriptions are provided only after proper diagnosis and examination.
                </p>
              </div>
            </div>
          </div>

          {Object.entries(drugsByCategory).map(([category, drugs], idx) => (
            <ModernCard key={idx} className="mb-6 border-2 border-orange-200">
              <ModernCardHeader className="bg-orange-50">
                <ModernCardTitle className="text-xl">{category}</ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {drugs.map((drug, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-1">{drug.term}</h4>
                      <p className="text-sm text-gray-600 mb-2">{drug.definition}</p>
                      <div className="space-y-1 text-xs text-gray-700">
                        <p><span className="font-semibold">Dosage:</span> {drug.dosage}</p>
                        <p><span className="font-semibold">Use:</span> {drug.use}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ModernCardContent>
            </ModernCard>
          ))}
        </section>

        {/* Tooth Anatomy */}
        <section id="anatomy" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Activity className="w-8 h-8 text-green-600" />
            Tooth Anatomy & Structure
          </h2>
          <ModernCard className="border-2 border-green-200">
            <ModernCardHeader className="bg-green-50">
              <ModernCardTitle>Understanding Tooth Structure</ModernCardTitle>
            </ModernCardHeader>
            <ModernCardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {anatomyTerms.map((term, index) => (
                  <Link key={index} href={term.link} className="group">
                    <div className="p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors border border-gray-200 hover:border-green-300">
                      <h4 className="font-bold text-gray-900 mb-1 group-hover:text-green-600">{term.term}</h4>
                      <p className="text-sm text-gray-600">{term.definition}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>

        {/* By Age Group */}
        <section id="age-groups" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="w-8 h-8 text-pink-600" />
            Dental Care by Age Group
          </h2>
          {Object.entries(ageGroups).map(([ageGroup, terms], idx) => (
            <ModernCard key={idx} className="mb-6 border-2 border-pink-200">
              <ModernCardHeader className="bg-pink-50">
                <ModernCardTitle className="text-xl flex items-center gap-2">
                  {ageGroup.includes('Infants') && <Baby className="w-5 h-5 text-pink-600" />}
                  {ageGroup.includes('Children') && <Smile className="w-5 h-5 text-pink-600" />}
                  {ageGroup.includes('Teenagers') && <Users className="w-5 h-5 text-pink-600" />}
                  {ageGroup.includes('Adults') && <User className="w-5 h-5 text-pink-600" />}
                  {ageGroup.includes('Seniors') && <Heart className="w-5 h-5 text-pink-600" />}
                  {ageGroup}
                </ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {terms.map((term, index) => (
                    <Link key={index} href={term.link} className="group">
                      <div className="p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors border border-gray-200 hover:border-pink-300">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1 group-hover:text-pink-600">{term.term}</h4>
                            <p className="text-sm text-gray-600">{term.definition}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-pink-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </ModernCardContent>
            </ModernCard>
          ))}
        </section>

        {/* CTA Section */}
        <ModernCard className="bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200">
          <ModernCardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have Questions About Dental Terms?
            </h3>
            <p className="text-gray-700 mb-6">
              Dr. Rockson Samuel at Indira Dental Clinic is here to help you understand your dental needs. 
              Schedule a consultation for personalized guidance and treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/ask-the-dentist"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Ask a Question
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ModernCardContent>
        </ModernCard>
      </div>
    </div>
  )
}

