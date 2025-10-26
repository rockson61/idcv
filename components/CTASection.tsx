import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Phone, Mail, MapPin } from "lucide-react"

interface CTASectionProps {
  locationName?: string
}

export function CTASection({ locationName }: CTASectionProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-xl text-primary-foreground p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Transform Your Smile{locationName ? ` in ${locationName}` : ""}?
      </h2>
      <p className="text-xl mb-6 max-w-3xl mx-auto">
        Get a personalized treatment plan and cost estimate for your dental needs. Our team will help you plan your
        dental journey{locationName ? ` to ${locationName}` : ""}.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="bg-background text-primary hover:bg-muted" asChild>
          <Link href="/contact">
            <Calendar className="mr-2 h-5 w-5" />
            Book an Appointment
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          asChild
        >
          <Link href="tel:+917010650063">
            <Phone className="mr-2 h-5 w-5" />
            Call Us
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          asChild
        >
          <Link href="mailto:info@indiradental.com">
            <Mail className="mr-2 h-5 w-5" />
            Email Us
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          asChild
        >
          <Link href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69" target="_blank" rel="noopener noreferrer">
            <MapPin className="mr-2 h-5 w-5" />
            Get Directions
          </Link>
        </Button>
      </div>
    </div>
  )
}
