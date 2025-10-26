import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin, AlertTriangle } from "lucide-react"

interface EmergencyContactProps {
  phoneNumber: string
  workingHours: string
  address: string
  location?: string
}

export default function EmergencyContact({
  phoneNumber = "+91 98765 43210",
  workingHours = "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 2:00 PM",
  address = "123 Dental Street, Gandhi Nagar",
  location = "Vellore",
}: EmergencyContactProps) {
  return (
    <Card className="border-destructive/20 bg-destructive/5 dark:bg-destructive/10 dark:border-destructive/30">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <CardTitle className="text-destructive">Dental Emergency?</CardTitle>
        </div>
        <CardDescription>We offer same-day emergency appointments in {location}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-destructive mt-0.5" />
            <div>
              <div className="font-medium">Call our emergency line</div>
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                className="text-lg font-bold text-destructive hover:underline"
              >
                {phoneNumber}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-destructive mt-0.5" />
            <div>
              <div className="font-medium">Emergency hours</div>
              <div>{workingHours}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-destructive mt-0.5" />
            <div>
              <div className="font-medium">Location</div>
              <div>
                {address}, {location}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Button className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>

          <div className="text-sm">
            <p className="font-medium mb-1">Common dental emergencies we treat:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Severe toothache or dental pain</li>
              <li>Knocked-out or broken teeth</li>
              <li>Lost fillings or crowns</li>
              <li>Dental abscess or swelling</li>
              <li>Bleeding from the mouth</li>
              <li>Trauma to the mouth or jaw</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
