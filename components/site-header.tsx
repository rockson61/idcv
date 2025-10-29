import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function SiteHeader() {
  return (
    <>
      <div className="bg-background">
        {/* Logo Section */}
        <div className="py-4 flex justify-center w-full">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://www.dentalclinicinvellore.in/oacmojos/2025/01/Indira-dental-logo.jpg"
              alt="Indira Dental Clinic"
              width={200}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Call, Directions, WhatsApp Buttons */}
        <div className="flex justify-center space-x-2 mb-4">
          <Button size="sm" asChild>
            <a href="tel:07010650063">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href="https://maps.app.goo.gl/rvyhzFADniQBUDWV8" target="_blank" rel="noopener noreferrer">
              <MapPin className="w-4 h-4 mr-2" />
              Directions
            </a>
          </Button>
          <Button size="sm" variant="secondary" asChild>
            <a href="https://wa.me/917010650063" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>070106 50063</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>10:00 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Gandhi Nagar, Vellore</span>
          </div>
        </div>
      </div>
    </>
  )
}
