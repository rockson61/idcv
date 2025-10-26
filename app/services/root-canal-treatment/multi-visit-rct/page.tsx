import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, CircleDollarSign, Phone, Calendar } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Multi-Visit Root Canal Treatment in Vellore | Indira Dental Clinic",
  description: "Get expert multi-visit root canal treatment at Indira Dental Clinic in Vellore. Our specialists provide comprehensive care for complex cases with high success rates.",
}

export default function MultiVisitRCTPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary">Services</Link>
          <span>/</span>
          <Link href="/services/root-canal-treatment" className="hover:text-primary">Root Canal Treatment</Link>
          <span>/</span>
          <span className="text-primary">Multi-visit RCT</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
            Multi-Visit Root Canal Treatment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive endodontic therapy for complex cases spread across multiple appointments
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="tel:7010650063">
                <Phone className="w-5 h-5 mr-2" />
                Call: 7010650063
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">What is Multi-Visit Root Canal Treatment?</h2>
            <p className="mb-4">
              Multi-visit root canal treatment (RCT) is a procedure performed over multiple appointments to treat infected
              or damaged tooth pulp. This approach is often recommended for complex cases, teeth with severe infection, or
              when additional time is needed between treatment steps to ensure optimal healing.
            </p>
            <p className="mb-6">
              At Indira Dental Clinic in Vellore, our endodontic specialists provide expert multi-visit root canal
              treatments with high success rates, preserving your natural teeth and relieving pain from dental infections.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>2-3 appointments (60-90 minutes each)</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleDollarSign className="h-5 w-5 text-primary" />
                <span>₹5,000-12,000 (varies by complexity)</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">When is Multi-Visit RCT Recommended?</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Complex root canal anatomy requiring careful navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Severe infection or abscess requiring drainage and medication</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Retreatment of previously failed root canal therapy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Patients with certain medical conditions requiring shorter appointments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Cases where medication needs time to work between visits</span>
              </li>
            </ul>
          </div>

          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Multi-visit root canal treatment at Indira Dental Clinic in Vellore"
              width={600}
              height={400}
              className="rounded-lg mb-6"
            />

            <Card>
              <CardHeader>
                <CardTitle>Benefits of Multi-Visit Root Canal Treatment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    <strong>Thorough Treatment:</strong> Allows for more comprehensive cleaning and disinfection of
                    complex canal systems
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    <strong>Better Healing:</strong> Provides time for infection to subside between appointments
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    <strong>Reduced Discomfort:</strong> Multiple shorter sessions may be more comfortable for anxious
                    patients
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    <strong>Higher Success Rate:</strong> For complex cases, the staged approach often leads to better
                    outcomes
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    <strong>Medication Effectiveness:</strong> Allows medicaments to work fully between appointments
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">The Multi-Visit Root Canal Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    1
                  </span>
                  First Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Diagnosis and X-rays</li>
                  <li>• Local anesthesia administration</li>
                  <li>• Dental dam placement for isolation</li>
                  <li>• Access opening creation</li>
                  <li>• Removal of infected pulp</li>
                  <li>• Initial canal cleaning and shaping</li>
                  <li>• Medication placement</li>
                  <li>• Temporary filling placement</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    2
                  </span>
                  Second Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Removal of temporary filling</li>
                  <li>• Assessment of healing progress</li>
                  <li>• Further cleaning and shaping</li>
                  <li>• Additional medication if needed</li>
                  <li>• New temporary filling placement</li>
                  <li>• (May be the final visit for simpler cases)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    3
                  </span>
                  Final Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Removal of temporary filling</li>
                  <li>• Final cleaning of canals</li>
                  <li>• Permanent filling of root canals</li>
                  <li>• Placement of permanent restoration or crown</li>
                  <li>• Post-treatment instructions</li>
                  <li>• Follow-up appointment scheduling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>How many visits are typically needed?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Most multi-visit root canal treatments require 2-3 appointments, spaced 1-2 weeks apart. The exact
                  number depends on the complexity of your case, the extent of infection, and how well your tooth responds
                  to treatment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Is multi-visit RCT painful?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  No, the procedure is performed under local anesthesia to ensure your comfort. You may experience some
                  mild discomfort between appointments, which can be managed with over-the-counter pain medications. Our
                  dentists will provide specific instructions for post-appointment care.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why not just do a single-visit RCT?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  While single-visit RCT works well for many cases, complex infections, difficult canal anatomy, or severe
                  symptoms often benefit from the staged approach of multi-visit treatment. This allows for better
                  disinfection, medication effectiveness, and healing between appointments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What should I do between appointments?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Follow your dentist's specific instructions, which typically include: avoiding chewing on the treated
                  tooth, taking prescribed medications, maintaining good oral hygiene, and contacting us immediately if
                  you experience severe pain, swelling, or if your temporary filling comes out.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}