// Location data structure for all Vellore area locations
// This allows easy generation of pages for all locations

export interface LocationData {
  name: string
  slug: string
  taluk: string
  pincode: string
  district: string
  state: string
  latitude?: number
  longitude?: number
  distance?: string
  travelTime?: string
  description?: string
  amenities?: {
    name: string
    type: 'bank' | 'atm' | 'post_office' | 'hospital' | 'tourist' | 'shopping' | 'restaurant' | 'hotel'
    distance?: string
    address?: string
  }[]
  touristPlaces?: string[]
  nearbyLocations?: string[]
}

// Sample location data - expand this for all locations
export const velloreLocations: LocationData[] = [
  {
    name: 'Arakkonam',
    slug: 'arakkonam',
    taluk: 'Arakkonam',
    pincode: '631001',
    district: 'Vellore',
    state: 'TAMIL NADU',
    distance: '35 km',
    travelTime: '45 minutes',
    description: 'Major railway junction and commercial hub in Vellore district',
    amenities: [
      { name: 'State Bank of India', type: 'bank', distance: '0.5 km', address: 'Railway Station Road' },
      { name: 'ICICI Bank ATM', type: 'atm', distance: '0.3 km', address: 'Near Bus Stand' },
      { name: 'Arakkonam Post Office', type: 'post_office', distance: '0.8 km', address: 'Main Road' },
      { name: 'Government Hospital', type: 'hospital', distance: '1.2 km', address: 'Hospital Road' },
    ],
    touristPlaces: ['Arakkonam Fort', 'Sri Ranganathaswamy Temple', 'Vedanthangal Bird Sanctuary (nearby)'],
    nearbyLocations: ['Sholingur', 'Walajapet', 'Kanchipuram']
  },
  {
    name: 'Arcot',
    slug: 'arcot',
    taluk: 'Arcot',
    pincode: '632503',
    district: 'Vellore',
    state: 'TAMIL NADU',
    distance: '25 km',
    travelTime: '35 minutes',
    description: 'Historic town known for Arcot Fort and cultural heritage',
    amenities: [
      { name: 'Canara Bank', type: 'bank', distance: '0.4 km', address: 'Arcot Bazaar' },
      { name: 'SBI ATM', type: 'atm', distance: '0.2 km', address: 'Main Road' },
      { name: 'Head Post Office', type: 'post_office', distance: '0.6 km', address: 'Fort Road' },
      { name: 'Taluk Hospital', type: 'hospital', distance: '1 km', address: 'Hospital Street' },
    ],
    touristPlaces: ['Arcot Fort', 'Jama Masjid', 'Shenbagathoppu Lake'],
    nearbyLocations: ['Kalavai', 'Walajapet', 'Timiri']
  },
  {
    name: 'Ranipet',
    slug: 'ranipet',
    taluk: 'Walajapet',
    pincode: '632401',
    district: 'Vellore',
    state: 'TAMIL NADU',
    distance: '20 km',
    travelTime: '30 minutes',
    description: 'Industrial town known for leather tanning and manufacturing',
    amenities: [
      { name: 'Indian Bank', type: 'bank', distance: '0.3 km', address: 'Ranipet Bazaar' },
      { name: 'HDFC ATM', type: 'atm', distance: '0.1 km', address: 'NH 48' },
      { name: 'Ranipet Post Office', type: 'post_office', distance: '0.5 km', address: 'Bazaar Street' },
      { name: 'PHC Ranipet', type: 'hospital', distance: '0.8 km', address: 'Medical Road' },
    ],
    touristPlaces: ['BHEL Ranipet', 'Jawaharlal Nehru Park'],
    nearbyLocations: ['Walajapet', 'Melvisharam', 'Arcot']
  },
  {
    name: 'Tirupattur',
    slug: 'tirupattur',
    taluk: 'Tirupattur',
    pincode: '635601',
    district: 'Vellore',
    state: 'TAMIL NADU',
    distance: '65 km',
    travelTime: '1.5 hours',
    description: 'Major town known for agriculture and education',
    amenities: [
      { name: 'Indian Overseas Bank', type: 'bank', distance: '0.4 km', address: 'Fort Road' },
      { name: 'Axis Bank ATM', type: 'atm', distance: '0.2 km', address: 'Bus Stand' },
      { name: 'Head Post Office', type: 'post_office', distance: '0.7 km', address: 'Gandhi Road' },
      { name: 'Government Hospital', type: 'hospital', distance: '1.5 km', address: 'Hospital Street' },
    ],
    touristPlaces: ['Tirupattur Fort', 'Yelagiri Hills (nearby)'],
    nearbyLocations: ['Vaniyambadi', 'Jolarpet', 'Ambur']
  },
  {
    name: 'Vaniyambadi',
    slug: 'vaniyambadi',
    taluk: 'Vaniyambadi',
    pincode: '635751',
    district: 'Vellore',
    state: 'TAMIL NADU',
    distance: '55 km',
    travelTime: '1.25 hours',
    description: 'Leather manufacturing hub and commercial center',
    amenities: [
      { name: 'City Union Bank', type: 'bank', distance: '0.5 km', address: 'Railway Station Road' },
      { name: 'Punjab National Bank ATM', type: 'atm', distance: '0.3 km', address: 'Market Area' },
      { name: 'Vaniyambadi Head PO', type: 'post_office', distance: '0.6 km', address: 'Main Road' },
      { name: 'Government Hospital', type: 'hospital', distance: '1.2 km', address: 'Hospital Road' },
    ],
    touristPlaces: ['Vaniyambadi Fort', 'Yelagiri Hills'],
    nearbyLocations: ['Ambur', 'Tirupattur', 'Alangayam']
  }
]

// Helper function to get location by slug
export function getLocationBySlug(slug: string): LocationData | undefined {
  return velloreLocations.find(loc => loc.slug === slug)
}

// Helper function to get nearby locations
export function getNearbyLocations(slug: string, limit: number = 6): LocationData[] {
  const current = getLocationBySlug(slug)
  if (!current) return []
  
  return velloreLocations
    .filter(loc => loc.slug !== slug)
    .slice(0, limit)
}

