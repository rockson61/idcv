import { PageTemplate } from "@/components/PageTemplate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clipboard, Clock, FileText, Stethoscope } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New Patient Information | First Visit Guide | Dentist in Vellore",
  description:
    "Welcome to Indira Dental Clinic in Vellore. Learn what to expect during your first visit and how to prepare for your appointment with Dr. Rockson Samuel.",
  keywords:
    "new patient dentist Vellore, first dental visit, dental appointment preparation, new patient forms Vellore, dental consultation, what to expect dentist, Indira Dental Clinic new patients, Dr. Rockson Samuel first visit",
}

const steps = [
  {
    title: "Schedule Your Appointment",
    description: "Call us or use our online booking system to schedule your first visit.",
    icon: Clock,
  },
  {
    title: "Fill Out New Patient Forms",
    description: "Complete our new patient forms online or arrive 15 minutes early to fill them out at our office.",
    icon: Clipboard,
  },
  {
    title: "Initial Consultation",
    description: "Meet with Dr. Rockson Samuel for a comprehensive examination and discussion of your dental health.",
    icon: Stethoscope,
  },
  {
    title: "Treatment Plan",
    description: "Receive a personalized treatment plan tailored to your specific needs and goals.",
    icon: FileText,
  },
]

export default function NewPatientsPage() {
  return (
    <PageTemplate
      title="New Patients Information | Indira Dental Clinic Vellore"
      description="Welcome to Indira Dental Clinic in Vellore. Learn what to expect during your first visit and how to prepare for your appointment with Dr. Rockson Samuel."
      canonicalUrl="https://www.dentalclinicinvellore.in/new-patients"
      breadcrumbItems={[
        { name: "Home", href: "/" },
        { name: "New Patients", href: "/new-patients" },
      ]}
      pageHeading="Welcome New Patients"
      pageSubheading="We're excited to welcome you to Indira Dental Clinic. Here's what you can expect during your first visit."
    >
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <step.icon className="w-5 h-5 text-primary" />
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>What to Bring to Your First Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Valid photo ID</li>
            <li>Insurance card (if applicable)</li>
            <li>List of current medications</li>
            <li>Medical and dental history information</li>
            <li>X-rays from previous dental visits (if available)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Our New Patient Offer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            As a welcome gift to our new patients, we're offering a comprehensive dental exam and cleaning package at a
            special rate.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Comprehensive dental examination</li>
            <li>Full set of dental X-rays</li>
            <li>Professional teeth cleaning</li>
            <li>Personalized treatment plan</li>
          </ul>
          <p className="font-semibold">Special Price: ₹1,999 (Regular Price: ₹3,500)</p>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Schedule Your First Visit?</h2>
        <p className="text-muted-foreground mb-6">
          We're looking forward to meeting you and helping you achieve optimal oral health. Contact us today to schedule
          your appointment or if you have any questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">
              Schedule Appointment
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services">
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageTemplate>
  )
}
