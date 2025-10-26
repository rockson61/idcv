"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Phone } from "lucide-react"

export function BookAppointment() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-green-600">Thank You!</CardTitle>
          <CardDescription className="text-center">
            Your appointment request has been received. We'll contact you shortly to confirm your consultation.
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5" />
          Book Your Invisalign Consultation
        </CardTitle>
        <CardDescription>Schedule a free consultation to discuss your Invisalign treatment options.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter your phone number" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <select
                id="time"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                <option value="evening">Evening (4PM - 7PM)</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your dental concerns or questions about Invisalign"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full">
            Schedule Consultation
          </Button>
          <div className="text-center text-sm text-gray-500 mt-4">
            <p>Or call us directly to schedule your appointment</p>
            <a
              href="tel:+917010650063"
              className="flex items-center justify-center gap-1 text-primary mt-1 hover:underline"
            >
              <Phone className="h-4 w-4" /> +91 70106 50063
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default BookAppointment
