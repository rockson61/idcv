"use client"

import { MapPin, Clock, Car, Bus, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ClinicInfo } from "./clinic-info"

interface LocationCardProps {
  name: string
  distance: string
  walkTime: string
  driveTime: string
  busTime: string
  landmarks: string
  transport: string
  serviceLink: string
}

const LocationCard = ({
  name,
  distance,
  walkTime,
  driveTime,
  busTime,
  landmarks,
  transport,
  serviceLink,
}: LocationCardProps) => {
  return (
    <div className="bg-gray-200 rounded-lg p-6 relative">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm hover:bg-blue-200 transition-colors">
          Get Directions
        </button>
      </div>

      <div className="flex items-center mb-4 text-gray-600">
        <MapPin size={18} className="mr-1" />
        <span>{distance} from clinic</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white rounded-md p-3 flex flex-col items-center justify-center">
          <Clock size={20} className="mb-1" />
          <span className="text-sm text-center">{walkTime} walk</span>
        </div>
        <div className="bg-white rounded-md p-3 flex flex-col items-center justify-center">
          <Car size={20} className="mb-1" />
          <span className="text-sm text-center">{driveTime} drive</span>
        </div>
        <div className="bg-white rounded-md p-3 flex flex-col items-center justify-center">
          <Bus size={20} className="mb-1" />
          <span className="text-sm text-center">{busTime} by bus</span>
        </div>
      </div>

      <div className="mb-1">
        <span className="font-semibold">Landmarks:</span> {landmarks}
      </div>

      <div className="mb-4">
        <span className="font-semibold">Transport:</span> {transport}
      </div>

      <Link href={serviceLink} className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
        View dental services in {name} <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  )
}

interface NearbyTownProps {
  name: string
  driveTime: string
}

const NearbyTown = ({ name, driveTime }: NearbyTownProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="text-gray-600">{driveTime} drive</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-100 text-blue-700 px-4 py-1 rounded-md text-sm hover:bg-blue-200 transition-colors">
          Services
        </button>
        <button className="bg-blue-100 text-blue-700 px-4 py-1 rounded-md text-sm hover:bg-blue-200 transition-colors">
          Directions
        </button>
      </div>
    </div>
  )
}

export default function LocationInformation() {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nearby Locations</h2>

        <div className="flex gap-4 mb-8">
          <Alert className="bg-orange-50 border-orange-200 text-orange-600">
            <AlertDescription>
              Please wear a mask during your visit. Temperature screening is mandatory.
            </AlertDescription>
          </Alert>

          <Alert className="bg-green-50 border-green-200 text-green-600">
            <AlertDescription>Our clinic follows strict sterilization protocols for your safety.</AlertDescription>
          </Alert>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-bold mb-4">Our Clinic Location</h3>
          <ClinicInfo variant="full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <LocationCard
            name="Gandhi Nagar"
            distance="0.5 km"
            walkTime="5 mins"
            driveTime="2 mins"
            busTime="5 mins"
            landmarks="Shell Petrol Pump, Gandhi Nagar Bus Stop"
            transport="Bus Route 17, Auto available"
            serviceLink="/locations/gandhi-nagar"
          />

          <LocationCard
            name="Katpadi"
            distance="1 km"
            walkTime="15 mins"
            driveTime="5 mins"
            busTime="8 mins"
            landmarks="Katpadi Railway Station, VIT Main Gate"
            transport="Bus Route 21, Train station nearby"
            serviceLink="/locations/katpadi"
          />

          <LocationCard
            name="VIT University"
            distance="2.5 km"
            walkTime="30 mins"
            driveTime="10 mins"
            busTime="15 mins"
            landmarks="VIT Main Gate, SBI Bank"
            transport="College Bus, Auto stand"
            serviceLink="/locations/vit-university"
          />

          <LocationCard
            name="CMC Hospital"
            distance="3 km"
            walkTime="35 mins"
            driveTime="12 mins"
            busTime="20 mins"
            landmarks="CMC Main Hospital, Ida Scudder Road"
            transport="Bus Route 25, Hospital shuttle"
            serviceLink="/locations/cmc-hospital"
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Serving Nearby Towns</h2>

        <div className="grid md:grid-cols-3 gap-x-8">
          <NearbyTown name="Abdullapuram" driveTime="15 min" />
          <NearbyTown name="Anaicut" driveTime="20 min" />
          <NearbyTown name="Gudiyatham" driveTime="30 min" />
          <NearbyTown name="Pallikonda" driveTime="25 min" />
          <NearbyTown name="Ambur" driveTime="35 min" />
          <NearbyTown name="Arcot" driveTime="20 min" />
          <NearbyTown name="Walajah" driveTime="25 min" />
          <NearbyTown name="Sholinghur" driveTime="40 min" />
          <NearbyTown name="Arakkonam" driveTime="45 min" />
        </div>
      </section>
    </div>
  )
}
