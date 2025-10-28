'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'

interface PeopleAlsoSearchForProps {
  location: string
  city?: string
  className?: string
}

export function PeopleAlsoSearchFor({ 
  location, 
  city = 'Vellore',
  className = "" 
}: PeopleAlsoSearchForProps) {
  const [showMore, setShowMore] = useState(false)

  // Base search queries - will be personalized with location
  const searchQueries = [
    { text: 'Dental Veneers', url: '/services/cosmetic-dentistry/dental-veneers', category: 'Cosmetic' },
    { text: 'Emergency Toothache Relief', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'Pediatric Dentist', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Root Tipping for Implant', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Dentist', url: `/in/tamil-nadu/${city.toLowerCase()}/${location.toLowerCase().replace(/\s+/g, '-')}`, category: 'Location' },
    { text: 'Treatment For Calculus', url: '/services/teeth-cleaning', category: 'Cleaning' },
    { text: 'Baby Tooth Infection', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Dental Fillings', url: '/services/dental-fillings', category: 'Restorative' },
    { text: 'Chin Advancement', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Tooth Pain & Sensitivity', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Sjogren S Syndrome Treatment', url: '/services/oral-medicine', category: 'Medicine' },
    { text: 'Laser Gum Treatment', url: '/services/laser-dentistry', category: 'Advanced' },
    { text: 'Porcelain Fillings', url: '/services/dental-fillings', category: 'Restorative' },
    { text: 'Dental Clinics near me', url: `/in/tamil-nadu/${city.toLowerCase()}`, category: 'Location' },
    { text: 'Hypersensitivity Treatment', url: '/services/teeth-sensitivity-treatment', category: 'General' },
    { text: 'Dental Implant Cost', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Placing a Crown on a Cracked Tooth', url: '/services/dental-crowns', category: 'Restorative' },
    { text: 'Dental Clinic', url: `/in/tamil-nadu/${city.toLowerCase()}/${location.toLowerCase().replace(/\s+/g, '-')}`, category: 'Location' },
    { text: 'Wisdom Tooth Surgery', url: '/services/wisdom-teeth-removal', category: 'Surgery' },
    { text: 'General Dentistry', url: '/services', category: 'General' },
    { text: 'Cosmetic Dentistry', url: '/services/cosmetic-dentistry', category: 'Cosmetic' },
    { text: 'Braces for Overcrowding', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Gums Surgery', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Composite Bonding for Missing Tooth', url: '/services/dental-bonding', category: 'Cosmetic' },
    { text: 'Emergency Dentist', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'Full Mouth Rehabilitation', url: '/services/full-mouth-rehabilitation', category: 'Advanced' },
    { text: 'Treatment For Cavities', url: '/services/dental-fillings', category: 'Restorative' },
    { text: 'Oral Hygiene For Elderly with No Teeth', url: '/services/dentures', category: 'Prosthetic' },
    { text: 'Best Dentist', url: `/in/tamil-nadu/${city.toLowerCase()}/${location.toLowerCase().replace(/\s+/g, '-')}`, category: 'Location' },
    { text: 'Tooth Extraction Cost', url: '/services/tooth-extraction', category: 'Surgery' },
    { text: 'Dental Bridge for One Tooth', url: '/services/dental-bridge', category: 'Restorative' },
    { text: 'Fixed-Detachable Implant', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Silver Fillings vs. White Fillings', url: '/services/dental-fillings', category: 'Restorative' },
    { text: 'Treatment For Sjogren S Syndrome', url: '/services/oral-medicine', category: 'Medicine' },
    { text: 'Denture', url: '/services/dentures', category: 'Prosthetic' },
    { text: 'Tooth Damage & Trauma', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'Best Dental Clinics', url: `/in/tamil-nadu/${city.toLowerCase()}`, category: 'Location' },
    { text: 'Upper Jaw Multiple Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Severe Plaque on Teeth', url: '/services/teeth-cleaning', category: 'Cleaning' },
    { text: 'Guided Tissue Regeneration', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Management of Advanced Gingival Recession', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Block Graft for Single Tooth Atrophy', url: '/services/bone-grafting', category: 'Surgery' },
    { text: 'Sinus Lift', url: '/services/dental-implants/sinus-lift', category: 'Implants' },
    { text: 'Interdental Brushing for Braces', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Veneers', url: '/services/cosmetic-dentistry/dental-veneers', category: 'Cosmetic' },
    { text: 'Space Maintainer', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Top Rated Dentist', url: `/in/tamil-nadu/${city.toLowerCase()}/${location.toLowerCase().replace(/\s+/g, '-')}`, category: 'Location' },
    { text: 'Crown Staining', url: '/services/dental-crowns', category: 'Restorative' },
    { text: 'Wisdom Teeth Removal', url: '/services/wisdom-teeth-removal', category: 'Surgery' },
    { text: 'Teeth Whitening Cost', url: '/services/teeth-whitening', category: 'Cosmetic' },
    { text: 'Teeth Crowding Issues', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Gum Infection Treatment', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Teeth Cleaning', url: '/services/teeth-cleaning', category: 'Cleaning' },
    { text: 'Periodontitis Stages', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Post & Core Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Teaching Dental Hygiene to Preschoolers', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Distraction Osteogenesis', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Root Canal Treatment Cost', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Oral Hygiene With Braces', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Connective Tissue Graft', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Fluoride Treatment', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Soothe Tooth Pain', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'Sedation Dentistry', url: '/services/sedation-dentistry', category: 'Advanced' },
    { text: 'Free Gingival Graft', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Emergency Dental Care', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'Cosmetic Dentistry', url: '/services/cosmetic-dentistry', category: 'Cosmetic' },
    { text: 'Dental Abscess', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'Teeth Whitening near me', url: '/services/teeth-whitening', category: 'Cosmetic' },
    { text: 'Molar Uprighting with Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Bar & Clip Retained Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Brushing Roll Technique', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Dental Crowns and Bridges', url: '/services/dental-crowns', category: 'Restorative' },
    { text: 'Flapless Multiple Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Loss of First Lower Molar Causing Drifting', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Gum Disease Treatment', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Painless Root Canal Treatment', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Jaw Atrophy', url: '/services/bone-grafting', category: 'Surgery' },
    { text: 'Gingivitis Infection', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Oral Surgeon', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Orthodontics near me', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Early Loss of Primary Teeth', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Root Tip in Sinus Retraction', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'All-On-4 Dental Implants', url: '/services/dental-implants/all-on-4', category: 'Implants' },
    { text: '24 Hour Dentist', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'Thumb Sucking Appliance', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Dental Price List', url: '/pricing', category: 'General' },
    { text: 'Temporary Crown Fell Off After Root Canal', url: '/services/dental-crowns', category: 'Restorative' },
    { text: 'Wisdom Teeth Removal', url: '/services/wisdom-teeth-removal', category: 'Surgery' },
    { text: 'Dental Clinic Near Me', url: `/in/tamil-nadu/${city.toLowerCase()}`, category: 'Location' },
    { text: 'Sleep Apnea Dental Appliance', url: '/services/sleep-apnea-treatment', category: 'Advanced' },
    { text: 'Top Dentist near me', url: `/in/tamil-nadu/${city.toLowerCase()}/${location.toLowerCase().replace(/\s+/g, '-')}`, category: 'Location' },
    { text: 'Deep Gum Pockets Treatment', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Lower Bridge with Eight Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Nerve Repositioning', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Metal Braces', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Smile Makeover', url: '/services/smile-makeover', category: 'Cosmetic' },
    { text: 'Mandibular Posterior Atrophy', url: '/services/bone-grafting', category: 'Surgery' },
    { text: 'Full Mouth Dental Implants Cost', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Full Jaw Atrophy', url: '/services/bone-grafting', category: 'Surgery' },
    { text: 'Top 10 Dental Clinics', url: `/in/tamil-nadu/${city.toLowerCase()}`, category: 'Location' },
    { text: 'Single Visit Root Canal', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Veneer Cost', url: '/services/cosmetic-dentistry/dental-veneers', category: 'Cosmetic' },
    { text: 'Affordable Dental Clinics', url: '/pricing', category: 'General' },
    { text: 'Doctors For Laminates', url: '/services/cosmetic-dentistry', category: 'Cosmetic' },
    { text: 'Sinus Atrophy Post-Extraction', url: '/services/dental-implants/sinus-lift', category: 'Implants' },
    { text: 'Emergency Dental Clinic', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'TMJ Specialist', url: '/services/tmj-treatment', category: 'Advanced' },
    { text: 'Best Orthodontist for Braces', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Invisalign', url: '/services/invisalign-treatment', category: 'Orthodontics' },
    { text: 'Post-Dental Implant Care', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Pediatric Dentist near me', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Tooth Extraction', url: '/services/tooth-extraction', category: 'Surgery' },
    { text: 'Gum Flap Surgery', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Kids Dentist', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Serial Extraction', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Malocclusion Class I', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Dental Check-up for Diabetics', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Upper Denture', url: '/services/dentures', category: 'Prosthetic' },
    { text: 'Gummy Smile Correction', url: '/services/cosmetic-dentistry', category: 'Cosmetic' },
    { text: 'Tooth Anatomy', url: '/services', category: 'General' },
    { text: 'Misaligned Teeth', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Treatment For Wisdom Teeth', url: '/services/wisdom-teeth-removal', category: 'Surgery' },
    { text: 'Pediatric Dental Treatment', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Top Dental Clinics', url: `/in/tamil-nadu/${city.toLowerCase()}`, category: 'Location' },
    { text: 'Oral Surgery Clinic', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Dental Implants Cost', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Bone Grafting for Dental Implants', url: '/services/bone-grafting', category: 'Surgery' },
    { text: 'Prophylaxis with Recession', url: '/services/teeth-cleaning', category: 'Cleaning' },
    { text: 'Rubber Tip for Oral Hygiene', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Tooth Decay from Smoking', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Baby Bottle Tooth Decay', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Invisible Braces Cost', url: '/services/invisalign-treatment', category: 'Orthodontics' },
    { text: 'Lateral Pedicle Graft', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Pocket Reduction Surgery', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Removable Partial Denture', url: '/services/dentures', category: 'Prosthetic' },
    { text: 'Maxillary Excess Reduction', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Root Canal Treatment Cost', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Dental Crowns', url: '/services/dental-crowns', category: 'Restorative' },
    { text: 'Temporary Crown Overview', url: '/services/dental-crowns', category: 'Restorative' },
    { text: 'Tooth Eruption Timeline', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Dental Braces Cost', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Stiff End Floss', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Laser Dentistry', url: '/services/laser-dentistry', category: 'Advanced' },
    { text: 'Braces Cost', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Book Dental Appointment', url: '/contact', category: 'General' },
    { text: 'Anterior Teeth Splaying', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Affordable Dentist India', url: '/pricing', category: 'General' },
    { text: 'Gum Abscess', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Periodontal Disease', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Malocclusion Class II', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Smile Designing Cost', url: '/services/smile-makeover', category: 'Cosmetic' },
    { text: 'Dental Tourism Packages India', url: '/international-patients', category: 'International' },
    { text: 'Tooth Decay & Cavities', url: '/services/dental-fillings', category: 'Restorative' },
    { text: 'Digital Smile Design', url: '/services/smile-makeover', category: 'Cosmetic' },
    { text: 'Endodontist', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Treatment For Cavities', url: '/services/dental-fillings', category: 'Restorative' },
    { text: 'Chin Autograft', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Lower Teeth Crowding Treatment', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Treatment For Gingivitis', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Best Dentist Tamil Nadu', url: '/in/tamil-nadu', category: 'Location' },
    { text: 'Orthodontist', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Periodontal Cleaning', url: '/services/teeth-cleaning', category: 'Cleaning' },
    { text: 'Intrusion of Maxillary Centrals', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Chin Implant', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Dental Clinic Contact Number', url: '/contact', category: 'General' },
    { text: 'Family Dental Care', url: '/services', category: 'General' },
    { text: 'Repairing a Chipped Crown', url: '/services/dental-crowns', category: 'Restorative' },
    { text: 'Short Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Periodontal Pocket Symptoms', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Treatment For Bleeding Gums', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Cosmetic Dentistry Clinic', url: '/services/cosmetic-dentistry', category: 'Cosmetic' },
    { text: 'Orthodontist Doctors', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Jaw Pain Treatment', url: '/services/tmj-treatment', category: 'Advanced' },
    { text: 'Veneers for Overlapping Teeth', url: '/services/cosmetic-dentistry/dental-veneers', category: 'Cosmetic' },
    { text: 'Ball Clasp for Provisional Single Tooth', url: '/services/dentures', category: 'Prosthetic' },
    { text: 'Treatment For Tooth Decay', url: '/services/dental-fillings', category: 'Restorative' },
    { text: 'Bleeding Gums After Quitting Smoking', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Periodontist', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Sealants', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Teeth Whitening Deals', url: '/services/teeth-whitening', category: 'Cosmetic' },
    { text: 'All-on-4 Dental Implants Cost', url: '/services/dental-implants/all-on-4', category: 'Implants' },
    { text: 'Dental Checkups', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Drifting Teeth', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Cosmetic Dentist', url: '/services/cosmetic-dentistry', category: 'Cosmetic' },
    { text: 'Standard Floss', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Periapical Abscess', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Prosthodontist', url: '/services', category: 'General' },
    { text: 'Loose Baby Tooth with Crown', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Related Treatments', url: '/services', category: 'General' },
    { text: 'Fillings', url: '/services/dental-fillings', category: 'Restorative' },
    { text: 'Two-Stage Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Dental Implant Cost', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Dental X Ray', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Mini Dental Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Implant Dentistry', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Manual RCT', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Cavities in Baby Teeth', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Sinus Lift & Implant Placement', url: '/services/dental-implants/sinus-lift', category: 'Implants' },
    { text: 'Bridges vs. Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Bleeding Gums Treatment', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Brushing Bass Technique', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Fixing Gaps in Teeth', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Do Cavity Fillings Hurt?', url: '/services/dental-fillings', category: 'Restorative' },
    { text: 'Kids Friendly Dentist', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Root Canal Specialist', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Scaling and Root Planing', url: '/services/teeth-cleaning', category: 'Cleaning' },
    { text: 'Treatment For Toothache', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'Loss of Posterior Occlusion', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Tooth Decay Smell', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Best Dentists', url: `/in/tamil-nadu/${city.toLowerCase()}`, category: 'Location' },
    { text: 'Maxillary Molar Intrusion with Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Dental Clinic near me open now', url: `/in/tamil-nadu/${city.toLowerCase()}`, category: 'Location' },
    { text: 'Toothache Only at Night', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'Bad Breath Treatment', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Mouth Guards', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Tooth Extraction Complications', url: '/services/tooth-extraction', category: 'Surgery' },
    { text: 'Dental Surgeons', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Antibiotics & Root Canal Treatment', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Oral Surgery', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Extractions', url: '/services/tooth-extraction', category: 'Surgery' },
    { text: 'Full Mouth Reconstruction', url: '/services/full-mouth-rehabilitation', category: 'Advanced' },
    { text: 'Best Dental Hospital', url: `/in/tamil-nadu/${city.toLowerCase()}`, category: 'Location' },
    { text: 'Bone Loss in Teeth', url: '/services/bone-grafting', category: 'Surgery' },
    { text: 'Complete Lower Denture', url: '/services/dentures', category: 'Prosthetic' },
    { text: 'Oral Infections', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'Malocclusion Class III', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Mechanical RCT', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Missing Baby Teeth', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Dental Tourism', url: '/international-patients', category: 'International' },
    { text: 'Dental Implant Procedure', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Dental Crown Cost', url: '/services/dental-crowns', category: 'Restorative' },
    { text: 'Affordable Dental Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Fractured Teeth', url: '/services/dental-crowns', category: 'Restorative' },
    { text: 'Invisalign for Severely Crowded Teeth', url: '/services/invisalign-treatment', category: 'Orthodontics' },
    { text: 'Teeth Cleaning', url: '/services/teeth-cleaning', category: 'Cleaning' },
    { text: 'Teeth Whitening', url: '/services/teeth-whitening', category: 'Cosmetic' },
    { text: 'Dental Implants', url: '/services/dental-implants', category: 'Implants' },
    { text: 'Maxillofacial Surgeon Doctors', url: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Fluoride Treatments for Children\'s Teeth', url: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: '3rd Molar Causing Crowding', url: '/services/wisdom-teeth-removal', category: 'Surgery' },
    { text: 'Gum Infection', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Hollywood Smile Makeover', url: '/services/smile-makeover', category: 'Cosmetic' },
    { text: 'Cracked Tooth Repair', url: '/services/dental-crowns', category: 'Restorative' },
    { text: 'Temporary Dental Bridge for Front Teeth', url: '/services/dental-bridge', category: 'Restorative' },
    { text: 'Root Canal Treatment', url: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Toothache Treatment', url: '/services/emergency-dental-care', category: 'Emergency' },
    { text: 'Floss Aid for Bridge', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Braces with Crowns and Bridges', url: '/services/braces-treatment', category: 'Orthodontics' },
    { text: 'Receding Gums with Braces', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Zirconia Crowns', url: '/services/dental-crowns', category: 'Restorative' },
    { text: 'Periodontal Abscess', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Brushing Bass Modified', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Pocket of Pus in Gums', url: '/services/gum-treatment', category: 'Periodontics' },
    { text: 'Tongue Brushing', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Preventive Dentistry', url: '/services/preventive-dentistry', category: 'Preventive' },
    { text: 'Jaw Pain', url: '/services/tmj-treatment', category: 'Advanced' },
    { text: 'Painless Root Canal', url: '/services/root-canal-treatment', category: 'Endodontics' },
  ]

  // Show first 12 by default, rest after "Show More"
  const visibleQueries = showMore ? searchQueries : searchQueries.slice(0, 12)

  return (
    <ModernCard className={className} id="people-also-search">
      <ModernCardHeader>
        <ModernCardTitle className="flex items-center gap-2">
          <Search className="w-6 h-6 text-blue-600" />
          People Also Search For in {location}
        </ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent>
        <div className="space-y-4">
          {/* Description */}
          <p className="text-gray-600 text-sm">
            Popular dental treatments and services searched by people in {location} and nearby areas:
          </p>

          {/* Search Query Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {visibleQueries.map((query, index) => (
              <Link
                key={index}
                href={query.url}
                className="group flex items-start gap-2 p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-300"
              >
                <Search className="w-4 h-4 text-gray-400 group-hover:text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700 line-clamp-2">
                    {query.text} in {location}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{query.category}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Show More/Less Button */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {showMore ? (
                <>
                  <ChevronUp className="w-5 h-5" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5" />
                  Show More Searches ({searchQueries.length - 12} more)
                </>
              )}
            </button>
          </div>

          {/* SEO Text */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 leading-relaxed">
              Looking for the best dental clinic in {location}? We offer comprehensive dental services including 
              teeth cleaning, root canal treatment, dental implants, teeth whitening, braces, wisdom teeth removal, 
              and emergency dental care. Our experienced dentists in {location} provide affordable, painless treatments 
              with advanced technology. Book your dental appointment today!
            </p>
          </div>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}

