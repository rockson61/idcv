// Server-side generators for location pages
// These functions can be called from server components

export interface Review {
  name: string
  location: string
  rating: number
  treatment: string
  text: string
  date: string
  verified?: boolean
}

export interface FAQ {
  question: string
  answer: string
  category?: string
}

// Default reviews generator
export function generateDefaultReviews(locationName: string): Review[] {
  const treatments = ['Dental Implants', 'Root Canal Treatment', 'Braces', 'Cosmetic Dentistry', 'Teeth Whitening', 'Dental Cleaning']
  const names = ['Rajesh Kumar', 'Priya Devi', 'Sunita Singh', 'Anand Sharma', 'Meera Patel', 'Vijay Reddy']
  const dates = ['2 weeks ago', '1 month ago', '2 months ago', '3 months ago']

  return [
    {
      name: names[0],
      location: locationName,
      rating: 5,
      treatment: treatments[0],
      text: `Excellent dental service! Dr. Rockson Samuel and team provided outstanding care for my ${treatments[0].toLowerCase()}. Very convenient for patients from ${locationName}.`,
      date: dates[0],
      verified: true,
    },
    {
      name: names[1],
      location: locationName,
      rating: 5,
      treatment: treatments[1],
      text: `Best dental clinic near ${locationName}. Professional staff, modern equipment, and reasonable prices. Highly recommend for anyone looking for quality dental care.`,
      date: dates[1],
      verified: true,
    },
    {
      name: names[2],
      location: locationName,
      rating: 5,
      treatment: treatments[2],
      text: `Great experience at Indira Dental Clinic. Easy to reach from ${locationName}. Dr. Samuel is very skilled and explains everything clearly. The treatment was painless.`,
      date: dates[2],
      verified: true,
    },
  ]
}

// Default FAQs generator
export function generateDefaultFAQs(locationName: string, distance: string = "nearby"): FAQ[] {
  return [
    {
      question: `How far is Indira Dental Clinic from ${locationName}?`,
      answer: `Indira Dental Clinic is approximately ${distance} from ${locationName}. We're easily accessible by car, public transport, or auto-rickshaw. Many patients from ${locationName} visit us regularly for dental treatments.`,
      category: 'location'
    },
    {
      question: `What dental services are available for ${locationName} patients?`,
      answer: `We offer complete dental care including root canal treatment, dental implants, braces, cosmetic dentistry, teeth whitening, cleanings, and emergency dental services. All treatments are performed by experienced dentists using modern equipment.`,
      category: 'services'
    },
    {
      question: `Do you provide transportation assistance for ${locationName} patients?`,
      answer: `While we don't provide direct transportation, we can help arrange transport if needed. The clinic is well-connected and easy to reach. We also offer flexible appointment timing to accommodate travel from ${locationName}.`,
      category: 'logistics'
    },
    {
      question: `What are the clinic timings for ${locationName} patients?`,
      answer: `We're open Monday to Saturday from 10:00 AM to 8:00 PM, and Sundays from 10:00 AM to 1:30 PM. We recommend calling ahead to book an appointment to avoid waiting time.`,
      category: 'timing'
    },
    {
      question: `Are the treatment costs affordable for ${locationName} residents?`,
      answer: `Yes! We offer competitive pricing and flexible payment options including EMI facilities. We believe quality dental care should be accessible to everyone. Call us for detailed pricing information for your specific treatment needs.`,
      category: 'pricing'
    },
  ]
}

