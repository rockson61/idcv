import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function BlogAuthorCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <Image
              src="https://velloredental.com/oacmojos/2024/01/Dr-Rockson-Samuel-Best-Dentist-in-Vellore.jpeg"
              alt="Dr. Rockson Samuel"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2">Dr. Rockson Samuel</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Lead Dentist at Indira Dental Clinic with over 15 years of experience in general dentistry, implantology,
              and orthodontics. Committed to providing exceptional dental care and educating patients about oral health.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="sm" asChild>
                <a href="tel:07010650063">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href="https://maps.app.goo.gl/rvyhzFADniQBUDWV8" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
              <Button size="sm" variant="secondary" asChild>
                <a href="https://wa.me/917010650063" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
