"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  preferredDate: string
  preferredTime: string
  message: string
  isEmergency: boolean
}

const services = [
  { value: "general-checkup", label: "General Dental Checkup", duration: "30 min" },
  { value: "teeth-cleaning", label: "Professional Teeth Cleaning", duration: "45 min" },
  { value: "dental-filling", label: "Dental Filling", duration: "60 min" },
  { value: "root-canal", label: "Root Canal Treatment", duration: "90 min" },
  { value: "dental-implant", label: "Dental Implant Consultation", duration: "45 min" },
  { value: "teeth-whitening", label: "Teeth Whitening", duration: "60 min" },
  { value: "braces-consultation", label: "Braces/Orthodontics Consultation", duration: "45 min" },
  { value: "wisdom-teeth", label: "Wisdom Teeth Removal", duration: "60 min" },
  { value: "cosmetic-dentistry", label: "Cosmetic Dentistry Consultation", duration: "30 min" },
  { value: "emergency-care", label: "Emergency Dental Care", duration: "30 min" },
  { value: "oral-surgery", label: "Oral Surgery Consultation", duration: "45 min" },
  { value: "pediatric-dentistry", label: "Pediatric Dentistry", duration: "30 min" },
  { value: "periodontics", label: "Gum Disease Treatment", duration: "60 min" },
  { value: "other", label: "Other (Please specify in message)", duration: "Variable" },
]

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
]

const emergencyTimeSlots = ["ASAP", "Within 1 hour", "Within 2 hours", "Within 4 hours", "Today evening"]

export function AppointmentBookingSystem() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    isEmergency: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }
    if (!formData.service) newErrors.service = "Please select a service"
    if (!formData.isEmergency && !formData.preferredDate) newErrors.preferredDate = "Please select a date"
    if (!formData.preferredTime) newErrors.preferredTime = "Please select a time"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch (error) {
      // TODO: Implement proper error logging service
      // console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const selectedService = services.find((s) => s.value === formData.service)

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8 text-center bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Appointment Request Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Indira Dental Clinic. We have received your appointment request and will contact you
            within 2 hours to confirm your appointment details.
          </p>
          <div className="bg-white/50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">What happens next?</h3>
            <div className="text-left space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Our team will review your request</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>We'll call you to confirm the appointment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>You'll receive a confirmation SMS/email</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>We'll send appointment reminders</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  service: "",
                  preferredDate: "",
                  preferredTime: "",
                  message: "",
                  isEmergency: false,
                })
              }}
              variant="outline"
              className="border-green-300 text-green-600 hover:bg-green-50"
            >
              Book Another Appointment
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href="tel:7010650063">
                <Phone className="w-4 h-4 mr-2" />
                Call Us: 7010650063
              </a>
            </Button>
          </div>
        </GlassCard>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Booking Form */}
        <div className="lg:col-span-2">
          <GlassCard className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#005f73] mb-2">Book Your Appointment</h2>
              <p className="text-gray-600">
                Schedule your visit with Dr. Rockson Samuel at Indira Dental Clinic. We'll confirm your appointment
                within 2 hours.
              </p>
            </div>

            {/* Emergency Toggle */}
            <div className="mb-6">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <div className="flex-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isEmergency}
                      onChange={(e) => handleInputChange("isEmergency", e.target.checked)}
                      className="rounded border-red-300 text-red-600 focus:ring-red-500"
                    />
                    <span className="font-medium text-red-700">This is a dental emergency</span>
                  </label>
                  <p className="text-sm text-red-600 mt-1">
                    Check this if you're experiencing severe pain, trauma, or urgent dental issues
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-300" : ""}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-300" : ""}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-300" : ""}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={errors.phone ? "border-red-300" : ""}
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <Label htmlFor="service">Select Service *</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className={errors.service ? "border-red-300" : ""}>
                    <SelectValue placeholder="Choose the service you need" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        <div className="flex justify-between items-center w-full">
                          <span>{service.label}</span>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {service.duration}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                {selectedService && (
                  <p className="text-sm text-gray-600 mt-1">Estimated duration: {selectedService.duration}</p>
                )}
              </div>

              {/* Date and Time Selection */}
              <div className="grid md:grid-cols-2 gap-4">
                {!formData.isEmergency && (
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      className={errors.preferredDate ? "border-red-300" : ""}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                  </div>
                )}
                <div className={!formData.isEmergency ? "" : "md:col-span-2"}>
                  <Label htmlFor="preferredTime">{formData.isEmergency ? "Urgency Level *" : "Preferred Time *"}</Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => handleInputChange("preferredTime", value)}
                  >
                    <SelectTrigger className={errors.preferredTime ? "border-red-300" : ""}>
                      <SelectValue
                        placeholder={
                          formData.isEmergency ? "How urgent is your situation?" : "Select your preferred time"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {(formData.isEmergency ? emergencyTimeSlots : timeSlots).map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Please describe your symptoms, concerns, or any special requirements..."
                  rows={4}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Optional: Help us prepare for your visit by sharing relevant details
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  formData.isEmergency
                    ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                    : "bg-gradient-to-r from-[#54CAD3] to-[#005f73] hover:from-[#005f73] hover:to-[#54CAD3]"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting Request...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formData.isEmergency ? "Request Emergency Appointment" : "Book Appointment"}</span>
                  </div>
                )}
              </Button>
            </form>
          </GlassCard>
        </div>

        {/* Contact Information Sidebar */}
        <div className="space-y-6">
          {/* Clinic Information */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-[#005f73] mb-4">Clinic Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#54CAD3] mt-1" />
                <div>
                  <p className="font-medium text-gray-700">Indira Dental Clinic</p>
                  <p className="text-sm text-gray-600">
                    3rd Floor, 54, Katpadi Main Rd,
                    <br />
                    Suthanthira Ponvizha Nagar,
                    <br />
                    Gandhi Nagar, Vellore, Tamil Nadu 632006
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#54CAD3]" />
                <div>
                  <p className="font-medium text-gray-700">Phone</p>
                  <a href="tel:7010650063" className="text-sm text-[#54CAD3] hover:underline">
                    7010650063
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#54CAD3]" />
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <a href="mailto:rockson68@hotmail.com" className="text-sm text-[#54CAD3] hover:underline">
                    rockson68@hotmail.com
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Clinic Hours */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-[#005f73] mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#54CAD3]" />
              Clinic Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Saturday</span>
                <span className="font-medium">10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium">10:00 AM - 1:30 PM</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-700">
                <strong>Emergency Services:</strong> Available 24/7 for urgent dental care
              </p>
            </div>
          </GlassCard>

          {/* Emergency Contact */}
          <GlassCard className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Dental Emergency?
            </h3>
            <p className="text-sm text-red-600 mb-4">
              If you're experiencing severe pain, trauma, or urgent dental issues, don't wait!
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                <a href="tel:7010650063">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Line
                </a>
              </Button>
              <div className="text-xs text-red-600">
                <p className="font-medium mb-1">Emergency situations include:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Severe tooth pain</li>
                  <li>Knocked-out tooth</li>
                  <li>Facial swelling</li>
                  <li>Dental trauma/injury</li>
                  <li>Uncontrolled bleeding</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          {/* Why Choose Us */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-[#005f73] mb-4">Why Choose Us?</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">15+ years of experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">5000+ satisfied patients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">Latest dental technology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">Painless procedures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">Flexible payment options</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
