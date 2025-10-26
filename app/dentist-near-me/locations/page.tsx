import type { Metadata } from "next"
import LocationsClientPage from "./LocationsClientPage"

export const metadata: Metadata = {
  title: "Dentist Locations in Vellore & Beyond | Indira Dental Clinic",
  description:
    "Find Indira Dental Clinic locations in Vellore and across India. Our flagship clinic in Vellore offers specialized dental tourism packages with significant cost savings.",
  keywords:
    "dentist locations Vellore, dental clinic near me, Indira Dental Clinic locations, dental tourism India, affordable dental care Vellore",
}

export default function LocationsPage() {
  return <LocationsClientPage />
}
