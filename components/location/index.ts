// Location Components - Centralized exports
// Use these components to build comprehensive hyperlocal pages

export { GoogleMapEmbed } from './GoogleMapEmbed'
export { LocalAmenitiesMap } from './LocalAmenitiesMap'
export { LocationReviews, generateDefaultReviews } from './LocationReviews'
export type { Review } from './LocationReviews'
export { LocationFAQs, generateDefaultFAQs } from './LocationFAQs'
export type { FAQ } from './LocationFAQs'
export { LocationHeader } from './LocationHeader'
export { NearbyLocationsWidget, QuickNearbyLinks } from './NearbyLocationsWidget'
export { EnhancedServicesList, serviceCategories } from './EnhancedServicesList'
export { TravelInfoCard } from './TravelInfoCard'
export { PriceComparisonTable } from './PriceComparisonTable'
export { WhyChooseUs } from './WhyChooseUs'
export { PeopleAlsoSearchFor } from './PeopleAlsoSearchFor'

// Re-export types for convenience
export type {
  EnhancedLocationData,
} from '@/lib/data/enhanced-location-data'

