import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock } from "lucide-react"
import Image from "next/image"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DentalCheckUpsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { title: "Services", href: "/services" },
              { title: "General Dentistry", href: "/services/general-dentistry" },
              { title: "Dental Check-ups", href: "/services/general-dentistry/dental-check-ups" },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Comprehensive Dental Check-ups</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Regular dental examinations to maintain your oral health and prevent dental problems
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Regular Dental Check-ups Matter</h2>
              <p className="mb-4">
                Regular dental check-ups are essential for maintaining good oral health and preventing serious dental
                problems. At Indira Dental Clinic in Vellore, our comprehensive dental examinations help detect issues
                early, saving you time, money, and discomfort in the long run.
              </p>
              <p className="mb-6">
                We recommend dental check-ups every six months for most patients, though some may need more frequent
                visits based on their oral health status.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-5 w-5 text-primary" />
                <span>Appointment duration: 30-45 minutes</span>
              </div>

              <h3 className="text-xl font-semibold mb-3">What Our Dental Check-up Includes</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Comprehensive oral examination",
                  "Digital dental X-rays (when necessary)",
                  "Oral cancer screening",
                  "Gum disease evaluation",
                  "Examination of existing dental work",
                  "Personalized oral health advice",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Button asChild>
                  <a href="tel:7010650063">Call: 7010650063</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Dental check-up at Indira Dental Clinic in Vellore"
                width={600}
                height={400}
                className="rounded-lg mb-6"
              />

              <Card>
                <CardHeader>
                  <CardTitle>Benefits of Regular Dental Check-ups</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    <strong>Early Detection:</strong> Identify dental issues before they become serious problems
                    requiring extensive treatment.
                  </p>
                  <p>
                    <strong>Cost-Effective:</strong> Preventive care is less expensive than treating advanced dental
                    problems.
                  </p>
                  <p>
                    <strong>Maintain Oral Health:</strong> Regular cleanings and check-ups help prevent tooth decay and
                    gum disease.
                  </p>
                  <p>
                    <strong>Overall Health:</strong> Good oral health contributes to better overall health, reducing
                    risks of heart disease, diabetes complications, and other health issues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">What to Expect During Your Dental Check-up</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Medical History Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We'll review your medical history and discuss any changes or concerns you may have about your oral
                    health.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive Examination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our dentist will thoroughly examine your teeth, gums, tongue, and oral tissues for signs of
                    problems.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Diagnostic Imaging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    If necessary, we'll take digital X-rays to detect issues not visible during the visual examination.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Oral Cancer Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We check for signs of oral cancer, which is highly treatable when caught early.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Treatment Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>If we identify any issues, we'll discuss treatment options and create a personalized care plan.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Oral Hygiene Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We'll provide personalized advice on improving your home oral care routine.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
