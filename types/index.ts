// Global Type Definitions for Indira Dental Clinic

// Common Types
export interface ContactInfo {
  phone: string
  email: string
  whatsapp?: string
  address: string
}

export interface Location {
  city: string
  state: string
  country: string
  postalCode: string
  coordinates?: {
    latitude: number
    longitude: number
  }
}

export interface Service {
  id: string
  name: string
  slug: string
  description: string
  category: string
  price?: string
  duration?: string
  image?: string
}

export interface Condition {
  id: string
  name: string
  slug: string
  description: string
  symptoms: string[]
  treatments: string[]
  severity: 'low' | 'medium' | 'high'
}

export interface Dentist {
  name: string
  qualification: string
  experience: string
  specializations: string[]
  image: string
  bio?: string
}

export interface Testimonial {
  id: string
  patientName: string
  location?: string
  rating: number
  review: string
  service?: string
  date?: string
}

export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
}

export interface BreadcrumbItem {
  title: string
  href: string
}

// Component Props Types
export interface PageProps {
  params: { [key: string]: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export interface LayoutProps {
  children: React.ReactNode
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Form Types
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service?: string
  message: string
  preferredDate?: string
}

export interface AppointmentData extends ContactFormData {
  appointmentType: 'consultation' | 'checkup' | 'treatment' | 'emergency'
  preferredTime?: string
}
