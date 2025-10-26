import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"

export function NapHeader() {
  return (
    <header className="bg-background py-4 border-b border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image
            src="https://velloredental.com/oacmojos/2025/01/Indira-dental-logo.jpg"
            alt="Indira Dental Clinic"
            width={200}
            height={80}
            className="h-20 w-auto"
            priority
          />
        </Link>
        <div className="flex flex-col md:flex-row items-center md:space-x-6 text-muted-foreground">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:07010650063" className="hover:underline">
              070106 50063
            </a>
          </div>
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <MapPin className="w-4 h-4 text-primary" />
            <span>3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu 632006</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>Mon-Sat: 10:00 AM - 8:00 PM, Sun: 10:00 AM - 1:30 PM</span>
          </div>
        </div>
      </div>
    </header>
  )
}
