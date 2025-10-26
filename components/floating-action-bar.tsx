"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, MessageCircle } from "lucide-react"
import AIAssistantButton from "@/components/AIAssistantButton"

export function FloatingActionBar() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-primary text-primary-foreground rounded-full shadow-lg p-2 flex items-center space-x-2">
        <Button size="icon" variant="ghost" asChild>
          <a href="https://wa.me/917010650063" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <MessageCircle className="h-5 w-5" />
          </a>
        </Button>
        <AIAssistantButton />
        <Button size="icon" variant="ghost" asChild>
          <a
            href="https://maps.app.goo.gl/rvyhzFADniQBUDWV8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Directions"
          >
            <MapPin className="h-5 w-5" />
          </a>
        </Button>
        <Button size="icon" variant="ghost" asChild>
          <a href="tel:07010650063" aria-label="Call Us">
            <Phone className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  )
}
