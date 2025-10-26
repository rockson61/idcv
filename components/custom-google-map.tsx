"use client"

import { useEffect, useRef, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"

// Indira Dental Clinic location
const CLINIC_LOCATION = {
  lat: 12.9534426,
  lng: 79.1370592,
  name: "Indira Dental Clinic | Dr Rockson Samuel",
  address: "3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu 632006",
  phone: "070106 50063",
  hours: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: 10:00 AM - 1:30 PM",
}

// List of important landmarks and areas in Vellore (30km radius)
const VELLORE_LANDMARKS = [
  // Educational Institutions
  {
    name: "Vellore Institute of Technology (VIT)",
    lat: 12.9692,
    lng: 79.1559,
    title: "Student-Friendly Dental Clinic near VIT University",
    description:
      "Indira Dental Clinic offers special student packages for VIT University students. Visit Dr. Rockson Samuel for affordable and quality dental treatments just 5 km from campus.",
  },
  {
    name: "Christian Medical College (CMC)",
    lat: 12.9242,
    lng: 79.1359,
    title: "Premier Dental Care near CMC Vellore",
    description:
      "Located just 3 km from CMC Hospital, Indira Dental Clinic provides comprehensive dental treatments by Dr. Rockson Samuel. Visit us for expert dental care after your hospital appointment.",
  },
  {
    name: "Voorhees College",
    lat: 12.917,
    lng: 79.132,
    title: "Dental Care for Voorhees College Students",
    description:
      "Indira Dental Clinic offers special student discounts for Voorhees College students. Dr. Rockson Samuel provides expert dental care just 4 km from your campus.",
  },
  {
    name: "Auxilium College",
    lat: 12.931,
    lng: 79.134,
    title: "Dental Services for Auxilium College Students",
    description:
      "Students from Auxilium College can get quality dental care at Indira Dental Clinic. Dr. Rockson Samuel offers student-friendly rates for all dental treatments.",
  },
  {
    name: "DKM College for Women",
    lat: 12.925,
    lng: 79.129,
    title: "Women's Dental Care near DKM College",
    description:
      "Indira Dental Clinic provides specialized dental care for women near DKM College. Visit Dr. Rockson Samuel for gentle and professional dental treatments.",
  },
  {
    name: "Thanthai Periyar Government Institute of Technology",
    lat: 12.97,
    lng: 79.15,
    title: "Dental Care for Engineering Students",
    description:
      "Engineering students from Thanthai Periyar Government Institute can visit Indira Dental Clinic for all dental needs. Dr. Rockson Samuel offers quality treatments at affordable rates.",
  },

  // Hospitals and Healthcare
  {
    name: "Government Vellore Medical College",
    lat: 12.924,
    lng: 79.152,
    title: "Dental Specialist near Vellore Medical College",
    description:
      "After your visit to Government Vellore Medical College, get specialized dental care at Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental treatments.",
  },
  {
    name: "Sri Narayani Hospital & Research Centre",
    lat: 12.8694,
    lng: 79.085,
    title: "Dental Care near Sri Narayani Hospital",
    description:
      "Complement your healthcare at Sri Narayani Hospital with expert dental services at Indira Dental Clinic. Dr. Rockson Samuel provides comprehensive dental care.",
  },
  {
    name: "Scudder Memorial Hospital",
    lat: 12.9242,
    lng: 79.1359,
    title: "Dental Services near Scudder Memorial Hospital",
    description:
      "After your visit to Scudder Memorial Hospital, get quality dental care at Indira Dental Clinic. Dr. Rockson Samuel offers specialized dental treatments.",
  },
  {
    name: "Adukkamparai Government Hospital",
    lat: 12.915,
    lng: 79.132,
    title: "Affordable Dental Care near Adukkamparai Hospital",
    description:
      "Indira Dental Clinic provides affordable dental services near Adukkamparai Government Hospital. Visit Dr. Rockson Samuel for expert dental treatments.",
  },

  // Historical and Tourist Spots
  {
    name: "Vellore Fort",
    lat: 12.921,
    lng: 79.1283,
    title: "Visit Indira Dental Clinic after exploring Vellore Fort",
    description:
      "After exploring the historic Vellore Fort, get your dental check-up at Indira Dental Clinic, just 4.5 km away. Dr. Rockson Samuel offers top-quality dental services including RCT, braces, and implants.",
  },
  {
    name: "Golden Temple Vellore",
    lat: 12.8694,
    lng: 79.085,
    title: "Dental Care after visiting Vellore Golden Temple",
    description:
      "After your spiritual visit to the Golden Temple, take care of your dental health at Indira Dental Clinic. Dr. Rockson Samuel provides expert dental services just 12 km away.",
  },
  {
    name: "Jalakandeswarar Temple",
    lat: 12.921,
    lng: 79.1283,
    title: "Dental Care after visiting Jalakandeswarar Temple",
    description:
      "After your visit to the historic Jalakandeswarar Temple, schedule your dental appointment at Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental care.",
  },
  {
    name: "St. John's Church",
    lat: 12.922,
    lng: 79.133,
    title: "Dental Clinic near St. John's Church",
    description:
      "After attending service at St. John's Church, visit Indira Dental Clinic for your dental needs. Dr. Rockson Samuel provides expert dental care just 3.5 km away.",
  },
  {
    name: "Amirthi Zoological Park",
    lat: 12.955,
    lng: 79.055,
    title: "Dental Care after visiting Amirthi Zoo",
    description:
      "After a day at Amirthi Zoological Park, visit Indira Dental Clinic for your dental check-up. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Yelagiri Hills",
    lat: 12.5839,
    lng: 78.6357,
    title: "Dental Clinic for Yelagiri Hills Visitors",
    description:
      "Before or after your trip to Yelagiri Hills, schedule your dental appointment at Indira Dental Clinic. Dr. Rockson Samuel provides quality dental care.",
  },

  // Transportation Hubs
  {
    name: "Katpadi Railway Station",
    lat: 12.9697,
    lng: 79.1378,
    title: "Convenient Dental Clinic near Katpadi Railway Station",
    description:
      "Just 3 km from Katpadi Railway Station, Indira Dental Clinic offers comprehensive dental care. Schedule your appointment with Dr. Rockson Samuel before or after your train journey.",
  },
  {
    name: "Vellore New Bus Stand",
    lat: 12.9082,
    lng: 79.1325,
    title: "Dental Clinic near Vellore New Bus Stand",
    description:
      "Conveniently located just 5 km from Vellore New Bus Stand, Indira Dental Clinic offers comprehensive dental services. Visit Dr. Rockson Samuel for quality dental care during your trip to Vellore.",
  },
  {
    name: "Vellore Old Bus Stand",
    lat: 12.9197,
    lng: 79.1328,
    title: "Top Dental Care near Vellore Old Bus Stand",
    description:
      "Just 3.5 km from Vellore Old Bus Stand, Indira Dental Clinic provides expert dental treatments. Dr. Rockson Samuel specializes in RCT, braces, implants, and dental fillings.",
  },
  {
    name: "Bagayam Bus Stop",
    lat: 12.9442,
    lng: 79.1139,
    title: "Dental Clinic near Bagayam Bus Stop",
    description:
      "Indira Dental Clinic is easily accessible from Bagayam Bus Stop. Visit Dr. Rockson Samuel for comprehensive dental care.",
  },

  // Shopping and Commercial Areas
  {
    name: "Green Circle Shopping Mall",
    lat: 12.917,
    lng: 79.1325,
    title: "Combine Shopping and Dental Care in Vellore",
    description:
      "After shopping at Green Circle Mall, visit Indira Dental Clinic just 4 km away for all your dental needs. Dr. Rockson Samuel provides expert dental treatments in a comfortable environment.",
  },
  {
    name: "Vellore Central Mall",
    lat: 12.925,
    lng: 79.135,
    title: "Dental Clinic near Vellore Central Mall",
    description:
      "Combine your shopping trip to Vellore Central Mall with a dental check-up at Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Gandhi Road Shopping Area",
    lat: 12.92,
    lng: 79.133,
    title: "Dental Care near Gandhi Road Shopping Area",
    description:
      "After shopping at Gandhi Road, visit Indira Dental Clinic for your dental needs. Dr. Rockson Samuel provides expert dental treatments in a comfortable environment.",
  },
  {
    name: "Long Bazaar",
    lat: 12.918,
    lng: 79.132,
    title: "Dental Clinic near Long Bazaar",
    description:
      "After shopping at Long Bazaar, schedule your dental appointment at Indira Dental Clinic. Dr. Rockson Samuel offers quality dental care just a short drive away.",
  },

  // Government and Administrative Buildings
  {
    name: "Vellore District Court",
    lat: 12.9222,
    lng: 79.1336,
    title: "Dental Clinic near Vellore District Court",
    description:
      "Located just 3.5 km from Vellore District Court, Indira Dental Clinic offers flexible appointment times. Visit Dr. Rockson Samuel for expert dental care before or after your court proceedings.",
  },
  {
    name: "Vellore Collectorate",
    lat: 12.915,
    lng: 79.135,
    title: "Dental Care near Vellore Collectorate",
    description:
      "After your visit to Vellore Collectorate, schedule your dental appointment at Indira Dental Clinic. Dr. Rockson Samuel provides comprehensive dental services.",
  },
  {
    name: "Vellore Municipal Corporation",
    lat: 12.918,
    lng: 79.134,
    title: "Dental Clinic near Vellore Municipal Corporation",
    description:
      "Indira Dental Clinic is conveniently located near Vellore Municipal Corporation. Visit Dr. Rockson Samuel for expert dental care.",
  },

  // Residential Areas
  {
    name: "Sathuvachari",
    lat: 12.9028,
    lng: 79.1583,
    title: "Dental Clinic serving Sathuvachari residents",
    description:
      "Residents of Sathuvachari can visit Indira Dental Clinic for comprehensive dental care. Dr. Rockson Samuel provides expert treatments including RCT, braces, implants, and dental fillings.",
  },
  {
    name: "Bagayam",
    lat: 12.9442,
    lng: 79.1139,
    title: "Quality Dental Care for Bagayam residents",
    description:
      "Indira Dental Clinic provides top-quality dental services for Bagayam residents. Visit Dr. Rockson Samuel for all your dental needs just a short drive away.",
  },
  {
    name: "Kosapet",
    lat: 12.925,
    lng: 79.1361,
    title: "Dental Clinic serving Kosapet area",
    description:
      "Residents of Kosapet can access expert dental care at Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental treatments in a comfortable environment.",
  },
  {
    name: "Gandhi Nagar",
    lat: 12.9534,
    lng: 79.1371,
    title: "Local Dental Clinic in Gandhi Nagar",
    description:
      "Indira Dental Clinic is conveniently located in Gandhi Nagar. Dr. Rockson Samuel provides expert dental care for local residents and visitors alike.",
  },
  {
    name: "Katpadi",
    lat: 12.9697,
    lng: 79.1378,
    title: "Premier Dental Care in Katpadi",
    description:
      "Indira Dental Clinic offers comprehensive dental services for Katpadi residents. Visit Dr. Rockson Samuel for expert treatments including RCT, braces, and implants.",
  },
  {
    name: "Thottapalayam",
    lat: 12.93,
    lng: 79.14,
    title: "Dental Care for Thottapalayam Residents",
    description:
      "Residents of Thottapalayam can visit Indira Dental Clinic for all their dental needs. Dr. Rockson Samuel provides comprehensive dental care.",
  },
  {
    name: "Viruthampet",
    lat: 12.98,
    lng: 79.15,
    title: "Dental Services for Viruthampet Residents",
    description:
      "Indira Dental Clinic offers quality dental care for Viruthampet residents. Visit Dr. Rockson Samuel for expert dental treatments.",
  },
  {
    name: "Konavattam",
    lat: 12.94,
    lng: 79.13,
    title: "Dental Clinic serving Konavattam area",
    description:
      "Residents of Konavattam can access quality dental care at Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Shenbakkam",
    lat: 12.935,
    lng: 79.145,
    title: "Dental Care for Shenbakkam Residents",
    description:
      "Indira Dental Clinic provides expert dental services for Shenbakkam residents. Visit Dr. Rockson Samuel for all your dental needs.",
  },
  {
    name: "Kamaraj Nagar",
    lat: 12.945,
    lng: 79.135,
    title: "Dental Clinic serving Kamaraj Nagar",
    description:
      "Residents of Kamaraj Nagar can visit Indira Dental Clinic for comprehensive dental care. Dr. Rockson Samuel offers quality dental treatments.",
  },
  {
    name: "Velpadi",
    lat: 12.95,
    lng: 79.125,
    title: "Dental Services for Velpadi Residents",
    description:
      "Indira Dental Clinic provides expert dental care for Velpadi residents. Visit Dr. Rockson Samuel for comprehensive dental treatments.",
  },

  // Nearby Towns and Villages
  {
    name: "Ranipet",
    lat: 12.9347,
    lng: 79.3192,
    title: "Dental Clinic for Ranipet Residents",
    description:
      "Residents of Ranipet can visit Indira Dental Clinic in Vellore for expert dental care. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Arcot",
    lat: 12.9052,
    lng: 79.319,
    title: "Dental Care for Arcot Residents",
    description:
      "Indira Dental Clinic provides quality dental services for Arcot residents. Visit Dr. Rockson Samuel for expert dental treatments.",
  },
  {
    name: "Walajapet",
    lat: 12.9249,
    lng: 79.3665,
    title: "Dental Clinic serving Walajapet area",
    description:
      "Residents of Walajapet can access comprehensive dental care at Indira Dental Clinic. Dr. Rockson Samuel offers quality dental treatments.",
  },
  {
    name: "Gudiyatham",
    lat: 12.9456,
    lng: 78.8689,
    title: "Dental Services for Gudiyatham Residents",
    description:
      "Indira Dental Clinic provides expert dental care for Gudiyatham residents. Visit Dr. Rockson Samuel for comprehensive dental treatments.",
  },
  {
    name: "Arakkonam",
    lat: 13.0843,
    lng: 79.6703,
    title: "Dental Clinic for Arakkonam Residents",
    description:
      "Residents of Arakkonam can visit Indira Dental Clinic in Vellore for quality dental care. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Ambur",
    lat: 12.7913,
    lng: 78.7133,
    title: "Dental Care for Ambur Residents",
    description:
      "Indira Dental Clinic provides expert dental services for Ambur residents. Visit Dr. Rockson Samuel for quality dental treatments.",
  },
  {
    name: "Vaniyambadi",
    lat: 12.6819,
    lng: 78.6203,
    title: "Dental Clinic serving Vaniyambadi area",
    description:
      "Residents of Vaniyambadi can access comprehensive dental care at Indira Dental Clinic. Dr. Rockson Samuel offers quality dental treatments.",
  },
  {
    name: "Tirupattur",
    lat: 12.5,
    lng: 78.5667,
    title: "Dental Services for Tirupattur Residents",
    description:
      "Indira Dental Clinic provides expert dental care for Tirupattur residents. Visit Dr. Rockson Samuel for comprehensive dental treatments.",
  },
  {
    name: "Jolarpet",
    lat: 12.5667,
    lng: 78.5833,
    title: "Dental Clinic for Jolarpet Residents",
    description:
      "Residents of Jolarpet can visit Indira Dental Clinic in Vellore for quality dental care. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Kanchipuram",
    lat: 12.8342,
    lng: 79.7036,
    title: "Dental Care for Kanchipuram Residents",
    description:
      "Indira Dental Clinic provides expert dental services for Kanchipuram residents. Visit Dr. Rockson Samuel for quality dental treatments.",
  },

  // Additional Landmarks
  {
    name: "Vellore Zoo",
    lat: 12.91,
    lng: 79.125,
    title: "Dental Clinic near Vellore Zoo",
    description:
      "After visiting Vellore Zoo, schedule your dental appointment at Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Vellore Lake",
    lat: 12.93,
    lng: 79.12,
    title: "Dental Care near Vellore Lake",
    description:
      "After relaxing at Vellore Lake, visit Indira Dental Clinic for your dental needs. Dr. Rockson Samuel provides expert dental treatments.",
  },
  {
    name: "Vellore Police Headquarters",
    lat: 12.918,
    lng: 79.135,
    title: "Dental Clinic near Vellore Police Headquarters",
    description:
      "Indira Dental Clinic is conveniently located near Vellore Police Headquarters. Visit Dr. Rockson Samuel for comprehensive dental care.",
  },
  {
    name: "Vellore IT Park",
    lat: 12.97,
    lng: 79.16,
    title: "Dental Services for IT Professionals",
    description:
      "IT professionals working at Vellore IT Park can visit Indira Dental Clinic for quality dental care. Dr. Rockson Samuel offers flexible appointment times.",
  },
  {
    name: "Vellore Industrial Area",
    lat: 12.98,
    lng: 79.14,
    title: "Dental Clinic for Industrial Workers",
    description:
      "Workers from Vellore Industrial Area can access comprehensive dental care at Indira Dental Clinic. Dr. Rockson Samuel offers quality dental treatments.",
  },
]

// Add more landmarks to reach 100 total
const EXTENDED_LANDMARKS = [
  ...VELLORE_LANDMARKS,
  // Additional landmarks to reach 100 total
  {
    name: "Abdullapuram",
    lat: 12.96,
    lng: 79.12,
    title: "Dental Care for Abdullapuram Residents",
    description:
      "Indira Dental Clinic provides expert dental services for Abdullapuram residents. Visit Dr. Rockson Samuel for comprehensive dental treatments.",
  },
  {
    name: "Anaicut",
    lat: 12.88,
    lng: 79.09,
    title: "Dental Clinic serving Anaicut area",
    description:
      "Residents of Anaicut can access quality dental care at Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Pallikonda",
    lat: 12.91,
    lng: 78.97,
    title: "Dental Services for Pallikonda Residents",
    description:
      "Indira Dental Clinic provides expert dental care for Pallikonda residents. Visit Dr. Rockson Samuel for quality dental treatments.",
  },
  {
    name: "Sholinghur",
    lat: 13.1178,
    lng: 79.42,
    title: "Dental Clinic for Sholinghur Residents",
    description:
      "Residents of Sholinghur can visit Indira Dental Clinic in Vellore for comprehensive dental care. Dr. Rockson Samuel offers quality dental services.",
  },
  {
    name: "Walajah",
    lat: 12.93,
    lng: 79.37,
    title: "Dental Care for Walajah Residents",
    description:
      "Indira Dental Clinic provides expert dental services for Walajah residents. Visit Dr. Rockson Samuel for comprehensive dental treatments.",
  },
  {
    name: "Allapuram",
    lat: 12.97,
    lng: 79.09,
    title: "Dental Clinic serving Allapuram area",
    description:
      "Residents of Allapuram can access quality dental care at Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Timari",
    lat: 12.89,
    lng: 79.21,
    title: "Dental Services for Timari Residents",
    description:
      "Indira Dental Clinic provides expert dental care for Timari residents. Visit Dr. Rockson Samuel for quality dental treatments.",
  },
  {
    name: "Vaigunda Mangalam",
    lat: 12.9,
    lng: 79.08,
    title: "Dental Clinic for Vaigunda Mangalam Residents",
    description:
      "Residents of Vaigunda Mangalam can visit Indira Dental Clinic for comprehensive dental care. Dr. Rockson Samuel offers quality dental services.",
  },
  {
    name: "Arani",
    lat: 12.6667,
    lng: 79.2833,
    title: "Dental Care for Arani Residents",
    description:
      "Indira Dental Clinic provides expert dental services for Arani residents. Visit Dr. Rockson Samuel for comprehensive dental treatments.",
  },
  {
    name: "Polur",
    lat: 12.5,
    lng: 79.1167,
    title: "Dental Clinic serving Polur area",
    description:
      "Residents of Polur can access quality dental care at Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Tiruvannamalai",
    lat: 12.2253,
    lng: 79.0747,
    title: "Dental Services for Tiruvannamalai Residents",
    description:
      "Indira Dental Clinic provides expert dental care for Tiruvannamalai residents. Visit Dr. Rockson Samuel for quality dental treatments.",
  },
  {
    name: "Kalavai",
    lat: 12.7667,
    lng: 79.4167,
    title: "Dental Clinic for Kalavai Residents",
    description:
      "Residents of Kalavai can visit Indira Dental Clinic in Vellore for comprehensive dental care. Dr. Rockson Samuel offers quality dental services.",
  },
  {
    name: "Chengam",
    lat: 12.3131,
    lng: 78.8914,
    title: "Dental Care for Chengam Residents",
    description:
      "Indira Dental Clinic provides expert dental services for Chengam residents. Visit Dr. Rockson Samuel for comprehensive dental treatments.",
  },
  {
    name: "Pernambut",
    lat: 12.9333,
    lng: 78.7167,
    title: "Dental Clinic serving Pernambut area",
    description:
      "Residents of Pernambut can access quality dental care at Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Natrampalli",
    lat: 12.85,
    lng: 78.6333,
    title: "Dental Services for Natrampalli Residents",
    description:
      "Indira Dental Clinic provides expert dental care for Natrampalli residents. Visit Dr. Rockson Samuel for quality dental treatments.",
  },
  {
    name: "Latheri",
    lat: 12.95,
    lng: 79.05,
    title: "Dental Clinic for Latheri Residents",
    description:
      "Residents of Latheri can visit Indira Dental Clinic for comprehensive dental care. Dr. Rockson Samuel offers quality dental services.",
  },
  {
    name: "Arni",
    lat: 12.6667,
    lng: 79.2833,
    title: "Dental Care for Arni Residents",
    description:
      "Indira Dental Clinic provides expert dental services for Arni residents. Visit Dr. Rockson Samuel for comprehensive dental treatments.",
  },
  {
    name: "Chetpet",
    lat: 12.4667,
    lng: 79.35,
    title: "Dental Clinic serving Chetpet area",
    description:
      "Residents of Chetpet can access quality dental care at Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Kannamangalam",
    lat: 12.9833,
    lng: 79.3333,
    title: "Dental Services for Kannamangalam Residents",
    description:
      "Indira Dental Clinic provides expert dental care for Kannamangalam residents. Visit Dr. Rockson Samuel for quality dental treatments.",
  },
  {
    name: "Thiruvalam",
    lat: 13.0,
    lng: 79.3,
    title: "Dental Clinic for Thiruvalam Residents",
    description:
      "Residents of Thiruvalam can visit Indira Dental Clinic in Vellore for comprehensive dental care. Dr. Rockson Samuel offers quality dental services.",
  },
]

// Public Transport Areas - 100 more citations
const PUBLIC_TRANSPORT_AREAS = [
  // Bus Stops in Vellore City
  {
    name: "Gandhi Nagar Bus Stop",
    lat: 12.9534,
    lng: 79.1365,
    title: "Dental Clinic at Gandhi Nagar Bus Stop",
    description:
      "Indira Dental Clinic is located right at Gandhi Nagar Bus Stop. Step off the bus and visit Dr. Rockson Samuel for immediate dental care.",
  },
  {
    name: "Officers Line Bus Stop",
    lat: 12.9225,
    lng: 79.1345,
    title: "Dental Care near Officers Line Bus Stop",
    description:
      "Just a short auto ride from Officers Line Bus Stop, Indira Dental Clinic offers comprehensive dental treatments by Dr. Rockson Samuel.",
  },
  {
    name: "Katpadi Main Road Bus Stop",
    lat: 12.955,
    lng: 79.1375,
    title: "Dental Clinic at Katpadi Main Road Bus Stop",
    description:
      "Indira Dental Clinic is conveniently located at Katpadi Main Road Bus Stop. Visit Dr. Rockson Samuel for expert dental care.",
  },
  {
    name: "CMC Hospital Bus Stop",
    lat: 12.9242,
    lng: 79.1355,
    title: "Dental Services near CMC Hospital Bus Stop",
    description:
      "After your hospital visit, take a short walk to Indira Dental Clinic from CMC Hospital Bus Stop. Dr. Rockson Samuel provides quality dental care.",
  },
  {
    name: "Vellore Fort Bus Stop",
    lat: 12.9215,
    lng: 79.128,
    title: "Dental Care near Vellore Fort Bus Stop",
    description:
      "After exploring Vellore Fort, take a bus or auto from Vellore Fort Bus Stop to Indira Dental Clinic for expert dental treatments by Dr. Rockson Samuel.",
  },
  {
    name: "Sathuvachari Bus Stop",
    lat: 12.903,
    lng: 79.158,
    title: "Dental Clinic from Sathuvachari Bus Stop",
    description:
      "From Sathuvachari Bus Stop, a short bus ride takes you to Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Kosapet Bus Stop",
    lat: 12.925,
    lng: 79.136,
    title: "Dental Care from Kosapet Bus Stop",
    description:
      "Indira Dental Clinic is easily accessible from Kosapet Bus Stop. Visit Dr. Rockson Samuel for quality dental treatments.",
  },
  {
    name: "Thottapalayam Bus Stop",
    lat: 12.93,
    lng: 79.14,
    title: "Dental Services from Thottapalayam Bus Stop",
    description:
      "From Thottapalayam Bus Stop, a short auto ride takes you to Indira Dental Clinic. Dr. Rockson Samuel provides expert dental care.",
  },
  {
    name: "Bagayam Junction Bus Stop",
    lat: 12.944,
    lng: 79.114,
    title: "Dental Clinic from Bagayam Junction Bus Stop",
    description:
      "Take a direct bus from Bagayam Junction Bus Stop to reach Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental treatments.",
  },
  {
    name: "Katpadi Junction Bus Stop",
    lat: 12.9695,
    lng: 79.138,
    title: "Dental Care near Katpadi Junction Bus Stop",
    description:
      "Just 3 km from Katpadi Junction Bus Stop, Indira Dental Clinic provides quality dental services by Dr. Rockson Samuel.",
  },
  {
    name: "Chittor Bus Stop",
    lat: 12.92,
    lng: 79.132,
    title: "Dental Services from Chittor Bus Stop",
    description:
      "Take a direct bus from Chittor Bus Stop to reach Indira Dental Clinic for expert dental care by Dr. Rockson Samuel.",
  },
  {
    name: "Vellore Central Bus Stop",
    lat: 12.925,
    lng: 79.135,
    title: "Dental Clinic near Vellore Central Bus Stop",
    description:
      "Indira Dental Clinic is just a short distance from Vellore Central Bus Stop. Visit Dr. Rockson Samuel for comprehensive dental treatments.",
  },
  {
    name: "Green Circle Bus Stop",
    lat: 12.917,
    lng: 79.1325,
    title: "Dental Care from Green Circle Bus Stop",
    description:
      "After shopping, take a bus from Green Circle Bus Stop to Indira Dental Clinic. Dr. Rockson Samuel provides quality dental services.",
  },
  {
    name: "Vellore Collectorate Bus Stop",
    lat: 12.915,
    lng: 79.135,
    title: "Dental Services near Vellore Collectorate Bus Stop",
    description:
      "After your visit to the Collectorate, take a bus from Vellore Collectorate Bus Stop to Indira Dental Clinic for expert dental care.",
  },
  {
    name: "VIT Main Gate Bus Stop",
    lat: 12.969,
    lng: 79.1555,
    title: "Dental Clinic from VIT Main Gate Bus Stop",
    description:
      "Students can take a direct bus from VIT Main Gate Bus Stop to Indira Dental Clinic. Dr. Rockson Samuel offers special student packages.",
  },
  {
    name: "Rangapuram Bus Stop",
    lat: 12.94,
    lng: 79.125,
    title: "Dental Care from Rangapuram Bus Stop",
    description:
      "From Rangapuram Bus Stop, a short bus ride takes you to Indira Dental Clinic. Dr. Rockson Samuel provides comprehensive dental treatments.",
  },
  {
    name: "Alamelumangapuram Bus Stop",
    lat: 12.935,
    lng: 79.13,
    title: "Dental Services from Alamelumangapuram Bus Stop",
    description:
      "Take a direct bus from Alamelumangapuram Bus Stop to reach Indira Dental Clinic for quality dental care by Dr. Rockson Samuel.",
  },
  {
    name: "Viruthampet Bus Stop",
    lat: 12.98,
    lng: 79.15,
    title: "Dental Clinic from Viruthampet Bus Stop",
    description:
      "Residents can take a bus from Viruthampet Bus Stop to Indira Dental Clinic. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Konavattam Bus Stop",
    lat: 12.94,
    lng: 79.13,
    title: "Dental Care from Konavattam Bus Stop",
    description:
      "From Konavattam Bus Stop, a short bus ride takes you to Indira Dental Clinic. Dr. Rockson Samuel provides comprehensive dental services.",
  },

  // Auto Stands in Vellore
  {
    name: "Gandhi Nagar Auto Stand",
    lat: 12.9535,
    lng: 79.137,
    title: "Dental Clinic at Gandhi Nagar Auto Stand",
    description:
      "Indira Dental Clinic is located right at Gandhi Nagar Auto Stand. Take an auto and reach within minutes for expert dental care by Dr. Rockson Samuel.",
  },
  {
    name: "Katpadi Railway Station Auto Stand",
    lat: 12.9698,
    lng: 79.1379,
    title: "Dental Care from Katpadi Railway Station Auto Stand",
    description:
      "Take an auto from Katpadi Railway Station Auto Stand to reach Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental treatments.",
  },
  {
    name: "Vellore New Bus Stand Auto Stand",
    lat: 12.9083,
    lng: 79.1326,
    title: "Dental Services from Vellore New Bus Stand Auto Stand",
    description:
      "From Vellore New Bus Stand Auto Stand, a 15-minute auto ride takes you to Indira Dental Clinic for quality dental care by Dr. Rockson Samuel.",
  },
  {
    name: "Vellore Old Bus Stand Auto Stand",
    lat: 12.9198,
    lng: 79.1329,
    title: "Dental Clinic from Vellore Old Bus Stand Auto Stand",
    description:
      "Take an auto from Vellore Old Bus Stand Auto Stand to reach Indira Dental Clinic. Dr. Rockson Samuel provides expert dental treatments.",
  },
  {
    name: "CMC Hospital Auto Stand",
    lat: 12.9243,
    lng: 79.136,
    title: "Dental Care from CMC Hospital Auto Stand",
    description:
      "After your hospital visit, take an auto from CMC Hospital Auto Stand to Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Vellore Fort Auto Stand",
    lat: 12.9212,
    lng: 79.1284,
    title: "Dental Services from Vellore Fort Auto Stand",
    description:
      "After exploring Vellore Fort, take an auto from Vellore Fort Auto Stand to Indira Dental Clinic for quality dental care by Dr. Rockson Samuel.",
  },
  {
    name: "Green Circle Auto Stand",
    lat: 12.9171,
    lng: 79.1326,
    title: "Dental Clinic from Green Circle Auto Stand",
    description:
      "After shopping, take an auto from Green Circle Auto Stand to Indira Dental Clinic. Dr. Rockson Samuel provides expert dental treatments.",
  },
  {
    name: "Sathuvachari Auto Stand",
    lat: 12.9029,
    lng: 79.1584,
    title: "Dental Care from Sathuvachari Auto Stand",
    description:
      "Take an auto from Sathuvachari Auto Stand to reach Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "VIT Main Gate Auto Stand",
    lat: 12.9691,
    lng: 79.1556,
    title: "Dental Services from VIT Main Gate Auto Stand",
    description:
      "Students can take an auto from VIT Main Gate Auto Stand to Indira Dental Clinic. Dr. Rockson Samuel offers special student packages.",
  },
  {
    name: "Bagayam Auto Stand",
    lat: 12.9443,
    lng: 79.114,
    title: "Dental Clinic from Bagayam Auto Stand",
    description:
      "Take an auto from Bagayam Auto Stand to reach Indira Dental Clinic. Dr. Rockson Samuel provides quality dental care.",
  },

  // Railway Stations and Transit Points
  {
    name: "Katpadi Junction Railway Station",
    lat: 12.9697,
    lng: 79.1378,
    title: "Dental Care near Katpadi Junction Railway Station",
    description:
      "Just 3 km from Katpadi Junction Railway Station, Indira Dental Clinic offers comprehensive dental treatments by Dr. Rockson Samuel.",
  },
  {
    name: "Vellore Cantonment Railway Station",
    lat: 12.9156,
    lng: 79.1367,
    title: "Dental Clinic near Vellore Cantonment Railway Station",
    description:
      "From Vellore Cantonment Railway Station, a short auto ride takes you to Indira Dental Clinic. Dr. Rockson Samuel provides expert dental care.",
  },
  {
    name: "Arakkonam Railway Station",
    lat: 13.0843,
    lng: 79.6703,
    title: "Dental Services for Arakkonam Railway Travelers",
    description:
      "Travelers from Arakkonam Railway Station can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental treatments.",
  },
  {
    name: "Jolarpet Junction Railway Station",
    lat: 12.5667,
    lng: 78.5833,
    title: "Dental Care for Jolarpet Junction Railway Travelers",
    description:
      "Travelers from Jolarpet Junction Railway Station can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel provides comprehensive dental services.",
  },
  {
    name: "Ambur Railway Station",
    lat: 12.7913,
    lng: 78.7133,
    title: "Dental Clinic for Ambur Railway Travelers",
    description:
      "Travelers from Ambur Railway Station can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Vaniyambadi Railway Station",
    lat: 12.6819,
    lng: 78.6203,
    title: "Dental Services for Vaniyambadi Railway Travelers",
    description:
      "Travelers from Vaniyambadi Railway Station can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },
  {
    name: "Tirupattur Railway Station",
    lat: 12.5,
    lng: 78.5667,
    title: "Dental Care for Tirupattur Railway Travelers",
    description:
      "Travelers from Tirupattur Railway Station can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Walajah Road Railway Station",
    lat: 12.9249,
    lng: 79.3665,
    title: "Dental Clinic for Walajah Road Railway Travelers",
    description:
      "Travelers from Walajah Road Railway Station can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Sholinghur Railway Station",
    lat: 13.1178,
    lng: 79.42,
    title: "Dental Services for Sholinghur Railway Travelers",
    description:
      "Travelers from Sholinghur Railway Station can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },

  // Bus Terminals and Major Transit Hubs
  {
    name: "Vellore Central Bus Terminal",
    lat: 12.9082,
    lng: 79.1325,
    title: "Dental Clinic near Vellore Central Bus Terminal",
    description:
      "From Vellore Central Bus Terminal, a short bus or auto ride takes you to Indira Dental Clinic. Dr. Rockson Samuel provides comprehensive dental treatments.",
  },
  {
    name: "Katpadi Bus Terminal",
    lat: 12.9695,
    lng: 79.1375,
    title: "Dental Care near Katpadi Bus Terminal",
    description:
      "Just 3 km from Katpadi Bus Terminal, Indira Dental Clinic offers expert dental services by Dr. Rockson Samuel.",
  },
  {
    name: "Vellore Old Bus Terminal",
    lat: 12.9197,
    lng: 79.1328,
    title: "Dental Services near Vellore Old Bus Terminal",
    description:
      "From Vellore Old Bus Terminal, a short auto ride takes you to Indira Dental Clinic. Dr. Rockson Samuel provides quality dental care.",
  },
  {
    name: "Ranipet Bus Terminal",
    lat: 12.9347,
    lng: 79.3192,
    title: "Dental Clinic for Ranipet Bus Terminal Travelers",
    description:
      "Travelers from Ranipet Bus Terminal can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers comprehensive dental treatments.",
  },
  {
    name: "Arcot Bus Terminal",
    lat: 12.9052,
    lng: 79.319,
    title: "Dental Care for Arcot Bus Terminal Travelers",
    description:
      "Travelers from Arcot Bus Terminal can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental services.",
  },
  {
    name: "Gudiyatham Bus Terminal",
    lat: 12.9456,
    lng: 78.8689,
    title: "Dental Services for Gudiyatham Bus Terminal Travelers",
    description:
      "Travelers from Gudiyatham Bus Terminal can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },
  {
    name: "Ambur Bus Terminal",
    lat: 12.7913,
    lng: 78.7133,
    title: "Dental Clinic for Ambur Bus Terminal Travelers",
    description:
      "Travelers from Ambur Bus Terminal can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers comprehensive dental treatments.",
  },
  {
    name: "Vaniyambadi Bus Terminal",
    lat: 12.6819,
    lng: 78.6203,
    title: "Dental Care for Vaniyambadi Bus Terminal Travelers",
    description:
      "Travelers from Vaniyambadi Bus Terminal can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental services.",
  },
  {
    name: "Tirupattur Bus Terminal",
    lat: 12.5,
    lng: 78.5667,
    title: "Dental Services for Tirupattur Bus Terminal Travelers",
    description:
      "Travelers from Tirupattur Bus Terminal can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },

  // Local Transport Hubs and Junctions
  {
    name: "Gandhi Nagar Junction",
    lat: 12.9534,
    lng: 79.1371,
    title: "Dental Clinic at Gandhi Nagar Junction",
    description:
      "Indira Dental Clinic is located right at Gandhi Nagar Junction. Visit Dr. Rockson Samuel for immediate dental care.",
  },
  {
    name: "Katpadi Main Road Junction",
    lat: 12.955,
    lng: 79.1375,
    title: "Dental Care at Katpadi Main Road Junction",
    description:
      "Indira Dental Clinic is conveniently located at Katpadi Main Road Junction. Dr. Rockson Samuel provides comprehensive dental treatments.",
  },
  {
    name: "Officers Line Junction",
    lat: 12.9225,
    lng: 79.1345,
    title: "Dental Services near Officers Line Junction",
    description:
      "From Officers Line Junction, a short auto ride takes you to Indira Dental Clinic. Dr. Rockson Samuel offers quality dental care.",
  },
  {
    name: "Vellore Fort Junction",
    lat: 12.9215,
    lng: 79.128,
    title: "Dental Clinic near Vellore Fort Junction",
    description:
      "After exploring Vellore Fort, take an auto from Vellore Fort Junction to Indira Dental Clinic. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "CMC Hospital Junction",
    lat: 12.9242,
    lng: 79.1355,
    title: "Dental Care near CMC Hospital Junction",
    description:
      "After your hospital visit, take a short walk from CMC Hospital Junction to Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Sathuvachari Junction",
    lat: 12.903,
    lng: 79.158,
    title: "Dental Services near Sathuvachari Junction",
    description:
      "From Sathuvachari Junction, a short bus ride takes you to Indira Dental Clinic. Dr. Rockson Samuel provides quality dental care.",
  },
  {
    name: "Kosapet Junction",
    lat: 12.925,
    lng: 79.136,
    title: "Dental Clinic near Kosapet Junction",
    description:
      "Indira Dental Clinic is easily accessible from Kosapet Junction. Visit Dr. Rockson Samuel for expert dental treatments.",
  },
  {
    name: "Thottapalayam Junction",
    lat: 12.93,
    lng: 79.14,
    title: "Dental Care near Thottapalayam Junction",
    description:
      "From Thottapalayam Junction, a short auto ride takes you to Indira Dental Clinic. Dr. Rockson Samuel provides comprehensive dental services.",
  },
  {
    name: "Bagayam Junction",
    lat: 12.944,
    lng: 79.114,
    title: "Dental Services near Bagayam Junction",
    description:
      "Take a direct bus from Bagayam Junction to reach Indira Dental Clinic. Dr. Rockson Samuel offers quality dental care.",
  },
  {
    name: "Katpadi Junction",
    lat: 12.9695,
    lng: 79.138,
    title: "Dental Clinic near Katpadi Junction",
    description:
      "Just 3 km from Katpadi Junction, Indira Dental Clinic provides expert dental treatments by Dr. Rockson Samuel.",
  },

  // Additional Bus Stops in Surrounding Areas
  {
    name: "Ranipet Bus Stop",
    lat: 12.9347,
    lng: 79.319,
    title: "Dental Care for Ranipet Bus Stop Travelers",
    description:
      "Travelers from Ranipet Bus Stop can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel provides comprehensive dental services.",
  },
  {
    name: "Arcot Bus Stop",
    lat: 12.9052,
    lng: 79.3188,
    title: "Dental Services for Arcot Bus Stop Travelers",
    description:
      "Travelers from Arcot Bus Stop can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },
  {
    name: "Walajapet Bus Stop",
    lat: 12.9249,
    lng: 79.3663,
    title: "Dental Clinic for Walajapet Bus Stop Travelers",
    description:
      "Travelers from Walajapet Bus Stop can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Gudiyatham Bus Stop",
    lat: 12.9456,
    lng: 78.8687,
    title: "Dental Care for Gudiyatham Bus Stop Travelers",
    description:
      "Travelers from Gudiyatham Bus Stop can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Arakkonam Bus Stop",
    lat: 13.0843,
    lng: 79.6701,
    title: "Dental Services for Arakkonam Bus Stop Travelers",
    description:
      "Travelers from Arakkonam Bus Stop can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },
  {
    name: "Ambur Bus Stop",
    lat: 12.7913,
    lng: 78.7131,
    title: "Dental Clinic for Ambur Bus Stop Travelers",
    description:
      "Travelers from Ambur Bus Stop can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Vaniyambadi Bus Stop",
    lat: 12.6819,
    lng: 78.6201,
    title: "Dental Care for Vaniyambadi Bus Stop Travelers",
    description:
      "Travelers from Vaniyambadi Bus Stop can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Tirupattur Bus Stop",
    lat: 12.5,
    lng: 78.5665,
    title: "Dental Services for Tirupattur Bus Stop Travelers",
    description:
      "Travelers from Tirupattur Bus Stop can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },
  {
    name: "Jolarpet Bus Stop",
    lat: 12.5667,
    lng: 78.5831,
    title: "Dental Clinic for Jolarpet Bus Stop Travelers",
    description:
      "Travelers from Jolarpet Bus Stop can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Kanchipuram Bus Stop",
    lat: 12.8342,
    lng: 79.7034,
    title: "Dental Care for Kanchipuram Bus Stop Travelers",
    description:
      "Travelers from Kanchipuram Bus Stop can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers comprehensive dental services.",
  },

  // Additional Auto Stands in Surrounding Areas
  {
    name: "Ranipet Auto Stand",
    lat: 12.9347,
    lng: 79.3191,
    title: "Dental Services for Ranipet Auto Stand Travelers",
    description:
      "Travelers from Ranipet Auto Stand can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel provides quality dental care.",
  },
  {
    name: "Arcot Auto Stand",
    lat: 12.9052,
    lng: 79.3189,
    title: "Dental Clinic for Arcot Auto Stand Travelers",
    description:
      "Travelers from Arcot Auto Stand can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Walajapet Auto Stand",
    lat: 12.9249,
    lng: 79.3664,
    title: "Dental Care for Walajapet Auto Stand Travelers",
    description:
      "Travelers from Walajapet Auto Stand can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Gudiyatham Auto Stand",
    lat: 12.9456,
    lng: 78.8688,
    title: "Dental Services for Gudiyatham Auto Stand Travelers",
    description:
      "Travelers from Gudiyatham Auto Stand can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },
  {
    name: "Arakkonam Auto Stand",
    lat: 13.0843,
    lng: 79.6702,
    title: "Dental Clinic for Arakkonam Auto Stand Travelers",
    description:
      "Travelers from Arakkonam Auto Stand can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Ambur Auto Stand",
    lat: 12.7913,
    lng: 78.7132,
    title: "Dental Care for Ambur Auto Stand Travelers",
    description:
      "Travelers from Ambur Auto Stand can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Vaniyambadi Auto Stand",
    lat: 12.6819,
    lng: 78.6202,
    title: "Dental Services for Vaniyambadi Auto Stand Travelers",
    description:
      "Travelers from Vaniyambadi Auto Stand can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },
  {
    name: "Tirupattur Auto Stand",
    lat: 12.5,
    lng: 78.5666,
    title: "Dental Clinic for Tirupattur Auto Stand Travelers",
    description:
      "Travelers from Tirupattur Auto Stand can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Jolarpet Auto Stand",
    lat: 12.5667,
    lng: 78.5832,
    title: "Dental Care for Jolarpet Auto Stand Travelers",
    description:
      "Travelers from Jolarpet Auto Stand can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Kanchipuram Auto Stand",
    lat: 12.8342,
    lng: 79.7035,
    title: "Dental Services for Kanchipuram Auto Stand Travelers",
    description:
      "Travelers from Kanchipuram Auto Stand can visit Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },

  // Shared Taxi Points
  {
    name: "Vellore Shared Taxi Point",
    lat: 12.92,
    lng: 79.133,
    title: "Dental Clinic from Vellore Shared Taxi Point",
    description:
      "Take a shared taxi from Vellore Shared Taxi Point to reach Indira Dental Clinic. Dr. Rockson Samuel provides expert dental treatments.",
  },
  {
    name: "Katpadi Shared Taxi Point",
    lat: 12.9697,
    lng: 79.1377,
    title: "Dental Care from Katpadi Shared Taxi Point",
    description:
      "From Katpadi Shared Taxi Point, a short ride takes you to Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "CMC Hospital Shared Taxi Point",
    lat: 12.9242,
    lng: 79.1358,
    title: "Dental Services from CMC Hospital Shared Taxi Point",
    description:
      "After your hospital visit, take a shared taxi from CMC Hospital Shared Taxi Point to Indira Dental Clinic. Dr. Rockson Samuel provides quality dental care.",
  },
  {
    name: "Vellore Fort Shared Taxi Point",
    lat: 12.9215,
    lng: 79.1282,
    title: "Dental Clinic from Vellore Fort Shared Taxi Point",
    description:
      "After exploring Vellore Fort, take a shared taxi from Vellore Fort Shared Taxi Point to Indira Dental Clinic. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Sathuvachari Shared Taxi Point",
    lat: 12.903,
    lng: 79.1581,
    title: "Dental Care from Sathuvachari Shared Taxi Point",
    description:
      "From Sathuvachari Shared Taxi Point, a short ride takes you to Indira Dental Clinic. Dr. Rockson Samuel provides comprehensive dental services.",
  },
  {
    name: "VIT Shared Taxi Point",
    lat: 12.969,
    lng: 79.1557,
    title: "Dental Services from VIT Shared Taxi Point",
    description:
      "Students can take a shared taxi from VIT Shared Taxi Point to Indira Dental Clinic. Dr. Rockson Samuel offers special student packages.",
  },
  {
    name: "Ranipet Shared Taxi Point",
    lat: 12.9347,
    lng: 79.3193,
    title: "Dental Clinic from Ranipet Shared Taxi Point",
    description:
      "Take a shared taxi from Ranipet Shared Taxi Point to reach Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },
  {
    name: "Arcot Shared Taxi Point",
    lat: 12.9052,
    lng: 79.3191,
    title: "Dental Care from Arcot Shared Taxi Point",
    description:
      "From Arcot Shared Taxi Point, a shared taxi takes you to Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Walajapet Shared Taxi Point",
    lat: 12.9249,
    lng: 79.3666,
    title: "Dental Services from Walajapet Shared Taxi Point",
    description:
      "Take a shared taxi from Walajapet Shared Taxi Point to reach Indira Dental Clinic in Vellore. Dr. Rockson Samuel provides comprehensive dental services.",
  },
  {
    name: "Gudiyatham Shared Taxi Point",
    lat: 12.9456,
    lng: 78.869,
    title: "Dental Clinic from Gudiyatham Shared Taxi Point",
    description:
      "From Gudiyatham Shared Taxi Point, a shared taxi takes you to Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers quality dental care.",
  },

  // Additional Transport Points
  {
    name: "Vellore Transport Hub",
    lat: 12.92,
    lng: 79.133,
    title: "Dental Care from Vellore Transport Hub",
    description:
      "From Vellore Transport Hub, multiple transport options take you to Indira Dental Clinic. Dr. Rockson Samuel provides expert dental treatments.",
  },
  {
    name: "Katpadi Transport Junction",
    lat: 12.9697,
    lng: 79.1377,
    title: "Dental Services from Katpadi Transport Junction",
    description:
      "Take any transport from Katpadi Transport Junction to reach Indira Dental Clinic. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "CMC Transport Point",
    lat: 12.9242,
    lng: 79.1358,
    title: "Dental Clinic from CMC Transport Point",
    description:
      "After your hospital visit, take any transport from CMC Transport Point to Indira Dental Clinic. Dr. Rockson Samuel provides quality dental care.",
  },
  {
    name: "Vellore Fort Transport Point",
    lat: 12.9215,
    lng: 79.1282,
    title: "Dental Care from Vellore Fort Transport Point",
    description:
      "After exploring Vellore Fort, take any transport from Vellore Fort Transport Point to Indira Dental Clinic. Dr. Rockson Samuel offers expert dental treatments.",
  },
  {
    name: "Sathuvachari Transport Point",
    lat: 12.903,
    lng: 79.1581,
    title: "Dental Services from Sathuvachari Transport Point",
    description:
      "From Sathuvachari Transport Point, multiple transport options take you to Indira Dental Clinic. Dr. Rockson Samuel provides comprehensive dental services.",
  },
  {
    name: "VIT Transport Hub",
    lat: 12.969,
    lng: 79.1557,
    title: "Dental Clinic from VIT Transport Hub",
    description:
      "Students can take any transport from VIT Transport Hub to Indira Dental Clinic. Dr. Rockson Samuel offers special student packages.",
  },
  {
    name: "Ranipet Transport Junction",
    lat: 12.9347,
    lng: 79.3193,
    title: "Dental Care from Ranipet Transport Junction",
    description:
      "Take any transport from Ranipet Transport Junction to reach Indira Dental Clinic in Vellore. Dr. Rockson Samuel provides expert dental treatments.",
  },
  {
    name: "Arcot Transport Point",
    lat: 12.9052,
    lng: 79.3191,
    title: "Dental Services from Arcot Transport Point",
    description:
      "From Arcot Transport Point, multiple transport options take you to Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers comprehensive dental services.",
  },
  {
    name: "Walajapet Transport Hub",
    lat: 12.9249,
    lng: 79.3666,
    title: "Dental Clinic from Walajapet Transport Hub",
    description:
      "Take any transport from Walajapet Transport Hub to reach Indira Dental Clinic in Vellore. Dr. Rockson Samuel provides quality dental care.",
  },
  {
    name: "Gudiyatham Transport Junction",
    lat: 12.9456,
    lng: 78.869,
    title: "Dental Care from Gudiyatham Transport Junction",
    description:
      "From Gudiyatham Transport Junction, multiple transport options take you to Indira Dental Clinic in Vellore. Dr. Rockson Samuel offers expert dental treatments.",
  },
]

// Combine all landmarks for the map
const ALL_LANDMARKS = [...EXTENDED_LANDMARKS, ...PUBLIC_TRANSPORT_AREAS]

export function CustomGoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [directions, setDirections] = useState<google.maps.DirectionsRenderer | null>(null)
  const [selectedLandmark, setSelectedLandmark] = useState<(typeof ALL_LANDMARKS)[0] | null>(null)
  const [mapUrl, setMapUrl] = useState<string>("")
  const [embedUrl, setEmbedUrl] = useState<string>("")
  const [googleMaps, setGoogleMaps] = useState<typeof google.maps | null>(null)
  const [directionsError, setDirectionsError] = useState<boolean>(false)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyBt6Eb5jAq42RnaZcfysyXi8HzKL7AiK5k",
        version: "weekly",
        libraries: ["places"],
      })

      const google = await loader.load()
      setGoogleMaps(google.maps)

      if (mapRef.current) {
        // Create the map centered on Indira Dental Clinic
        const mapInstance = new google.maps.Map(mapRef.current, {
          center: CLINIC_LOCATION,
          zoom: 12,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
        })

        setMap(mapInstance)

        // Create directions renderer
        const directionsRenderer = new google.maps.DirectionsRenderer({
          map: mapInstance,
          suppressMarkers: false,
        })

        setDirections(directionsRenderer)

        // Add clinic marker
        const clinicInfoWindow = new google.maps.InfoWindow({
          content: `
            <div style="max-width: 300px; padding: 10px;">
              <h3 style="font-weight: bold; margin-bottom: 5px;">${CLINIC_LOCATION.name}</h3>
              <p style="margin-bottom: 5px;">${CLINIC_LOCATION.address}</p>
              <p style="margin-bottom: 5px;">Phone: ${CLINIC_LOCATION.phone}</p>
              <p style="margin-bottom: 5px;">${CLINIC_LOCATION.hours}</p>
              <a href="https://www.dentalclinicinvellore.in" target="_blank" style="color: blue; text-decoration: underline;">Visit Website</a>
            </div>
          `,
        })

        const clinicMarker = new google.maps.Marker({
          position: CLINIC_LOCATION,
          map: mapInstance,
          title: CLINIC_LOCATION.name,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
            scaledSize: new google.maps.Size(50, 50),
          },
          animation: google.maps.Animation.DROP,
          zIndex: 1000,
        })

        clinicMarker.addListener("click", () => {
          clinicInfoWindow.open(mapInstance, clinicMarker)
        })

        // Add landmark markers
        ALL_LANDMARKS.forEach((landmark, index) => {
          const landmarkInfoWindow = new google.maps.InfoWindow({
            content: `
              <div style="max-width: 300px; padding: 10px;">
                <h3 style="font-weight: bold; margin-bottom: 5px;">${landmark.name}</h3>
                <h4 style="font-weight: bold; margin-bottom: 5px;">${landmark.title}</h4>
                <p style="margin-bottom: 10px;">${landmark.description}</p>
                <button id="directions-btn-${index}" style="background-color: #4285F4; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; margin-bottom: 5px;">Get Directions to Dental Clinic</button>
                <div>
                  <a href="https://www.google.com/maps/dir/?api=1&origin=${landmark.lat},${landmark.lng}&destination=${CLINIC_LOCATION.lat},${CLINIC_LOCATION.lng}&travelmode=driving" target="_blank" style="display: block; margin-top: 5px; color: blue; text-decoration: underline;">Open Directions in Google Maps</a>
                </div>
              </div>
            `,
          })

          const landmarkMarker = new google.maps.Marker({
            position: { lat: landmark.lat, lng: landmark.lng },
            map: mapInstance,
            title: landmark.name,
            animation: google.maps.Animation.DROP,
          })

          landmarkMarker.addListener("click", () => {
            // Close any open info windows
            if (directions) {
              directions.setMap(null)
              setDirections(
                new google.maps.DirectionsRenderer({
                  map: mapInstance,
                  suppressMarkers: false,
                }),
              )
            }

            landmarkInfoWindow.open(mapInstance, landmarkMarker)
            setSelectedLandmark(landmark)

            // Add event listener for the directions button after the info window is opened
            google.maps.event.addListenerOnce(landmarkInfoWindow, "domready", () => {
              const directionsBtn = document.getElementById(`directions-btn-${index}`)
              if (directionsBtn) {
                directionsBtn.addEventListener("click", () => {
                  calculateAndDisplayRoute(
                    { lat: landmark.lat, lng: landmark.lng },
                    { lat: CLINIC_LOCATION.lat, lng: CLINIC_LOCATION.lng },
                  )
                })
              }
            })
          })
        })

        // Generate shareable URL
        const shareableUrl = "https://maps.app.goo.gl/mckxYfwVuYhkzPg69"
        setMapUrl(shareableUrl)

        // Generate embed URL
        const embedBaseUrl = "https://www.google.com/maps/embed/v1/place"
        const embedKey = "AIzaSyBt6Eb5jAq42RnaZcfysyXi8HzKL7AiK5k"
        const embedDestination = encodeURIComponent(`${CLINIC_LOCATION.name}, ${CLINIC_LOCATION.address}`)
        const embedUrlString = `${embedBaseUrl}?key=${embedKey}&q=${embedDestination}&zoom=13`

        setEmbedUrl(embedUrlString)
      }
    }

    initMap()
  }, [googleMaps])

  const calculateAndDisplayRoute = (origin: google.maps.LatLngLiteral, destination: google.maps.LatLngLiteral) => {
    if (!map || !directions || !googleMaps) return

    const directionsService = new googleMaps.DirectionsService()

    directionsService.route(
      {
        origin,
        destination,
        travelmode: googleMaps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === googleMaps.DirectionsStatus.OK && response) {
          directions.setDirections(response)
        } else {
          console.error(`Directions request failed due to ${status}`)
          // Show error message to user
          setDirectionsError(true)
          // Create a direct Google Maps URL as fallback
          const directUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&travelmode=driving`
          window.open(directUrl, "_blank")
        }
      },
    )
  }

  return (
    <div className="w-full flex flex-col">
      <div ref={mapRef} className="w-full h-[500px] rounded-lg shadow-lg"></div>

      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Share this map:</h3>
        <div className="flex items-center">
          <input type="text" value={mapUrl} readOnly className="flex-1 p-2 border border-gray-300 rounded-l-md" />
          <button
            onClick={() => {
              navigator.clipboard.writeText(mapUrl)
              alert("Map URL copied to clipboard!")
            }}
            className="bg-primary text-white px-4 py-2 rounded-r-md"
          >
            Copy
          </button>
        </div>

        <div className="mt-4">
          <a
            href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-4 py-2 rounded-md"
          >
            Open in Google Maps
          </a>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Embed this map:</h3>
          <div className="flex items-center">
            <input
              type="text"
              value={`<iframe src="${embedUrl}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
              readOnly
              className="flex-1 p-2 border border-gray-300 rounded-l-md"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `<iframe src="${embedUrl}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                )
                alert("Embed code copied to clipboard!")
              }}
              className="bg-primary text-white px-4 py-2 rounded-r-md"
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      {selectedLandmark && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">{selectedLandmark.name}</h3>
          <h4 className="text-lg font-semibold mb-2">{selectedLandmark.title}</h4>
          <p className="mb-4">{selectedLandmark.description}</p>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => {
                try {
                  calculateAndDisplayRoute(
                    { lat: selectedLandmark.lat, lng: selectedLandmark.lng },
                    { lat: CLINIC_LOCATION.lat, lng: CLINIC_LOCATION.lng },
                  )
                } catch (error) {
                  setDirectionsError(true)
                  console.error("Error calculating directions:", error)
                }
              }}
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Get Directions to Dental Clinic
            </button>

            {directionsError && (
              <div>
                <p className="text-red-500 text-sm mb-2">
                  Unable to display directions directly on the map. Please use the link below:
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&origin=${selectedLandmark.lat},${selectedLandmark.lng}&destination=${CLINIC_LOCATION.lat},${CLINIC_LOCATION.lng}&travelmode=driving`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Open Directions in Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
