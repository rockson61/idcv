import { PageTemplate } from "@/components/PageTemplate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dental Insurance Coverage | Accepted Plans | Dentist in Vellore",
  description:
    "Learn about dental insurance coverage and accepted plans at Indira Dental Clinic in Vellore. We work with major insurance providers to make quality dental care affordable.",
  keywords:
    "dental insurance Vellore, dental coverage plans, accepted dental insurance, cashless dental treatment, insurance claims dentist, affordable dental care, Indira Dental Clinic insurance, dental finance options Vellore",
}

const insurancePlans = [
  {
    provider: "Star Health Insurance",
    coverage: "Up to ₹50,000",
    treatments: ["Root Canal", "Dental Implants", "Orthodontic Care"],
    cashless: true,
  },
  {
    provider: "HDFC ERGO Health",
    coverage: "Up to ₹75,000",
    treatments: ["All Dental Procedures", "Cosmetic Dentistry"],
    cashless: true,
  },
  {
    provider: "Religare Health",
    coverage: "Up to ₹1,00,000",
    treatments: ["Major Dental Procedures", "Surgical Extractions"],
    cashless: true,
  },
  {
    provider: "Max Bupa Health",
    coverage: "Up to ₹60,000",
    treatments: ["Basic Dental Care", "Emergency Procedures"],
    cashless: true,
  },
]

export default function InsurancePage() {
  return (
    <PageTemplate
      title="Dental Insurance Coverage | Indira Dental Clinic Vellore"
      description="Learn about dental insurance coverage and accepted plans at Indira Dental Clinic in Vellore. We work with major insurance providers to make quality dental care affordable."
      canonicalUrl="https://www.dentalclinicinvellore.in/insurance"
      breadcrumbItems={[
        { name: "Home", href: "/" },
        { name: "Insurance", href: "/insurance" },
      ]}
      pageHeading="Dental Insurance Coverage"
      pageSubheading="We work with major insurance providers to make quality dental care affordable and accessible."
    >
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {insurancePlans.map((plan, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{plan.provider}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">Coverage: {plan.coverage}</p>
              <ul className="space-y-2 mb-4">
                {plan.treatments.map((treatment, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                {plan.cashless ? "Cashless facility available" : "Reimbursement basis"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Our Insurance Process</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Verify your insurance coverage before your appointment</li>
            <li>Present your insurance card at the reception</li>
            <li>We'll handle the paperwork and submit claims on your behalf</li>
            <li>Pay any applicable co-pays or deductibles</li>
            <li>Receive your treatment with peace of mind</li>
          </ol>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help with Insurance?</h2>
        <p className="text-muted-foreground mb-6">
          Our team is here to assist you with any questions about insurance coverage or payment options. Don't hesitate
          to reach out for clarification or support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">
              Contact Us
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
