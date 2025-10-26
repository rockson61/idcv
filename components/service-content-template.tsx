import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Calendar, Clock, CheckCircle2, AlertCircle, BadgeIndianRupee } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ServiceContentTemplateProps {
  title: string
  description: string
  image: string
  content: string
  procedureSteps?: {
    title: string
    description: string
  }[]
  benefits?: string[]
  faq?: {
    question: string
    answer: string
  }[]
  pricing?: {
    service: string
    price: string
    note?: string
  }[]
  aftercare?: string
  relatedServices?: {
    title: string
    slug: string
  }[]
}

export function ServiceContentTemplate({
  title,
  description,
  image,
  content,
  procedureSteps,
  benefits,
  faq,
  pricing,
  aftercare,
  relatedServices,
}: ServiceContentTemplateProps) {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{description}</p>

          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
          </div>

          <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: content }} />

          {benefits && benefits.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Book an Appointment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>
                  Call:{" "}
                  <a href="tel:7010650063" className="font-medium">
                    7010650063
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-3" />
                <span>Book Online</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="font-medium">Clinic Hours:</p>
                  <p className="text-sm">Mon-Sat: 10am - 8pm</p>
                  <p className="text-sm">Sunday: 10am - 1:30pm</p>
                </div>
              </div>
              <Button className="w-full">Book Consultation</Button>
            </CardContent>
          </Card>

          {pricing && pricing.length > 0 && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pricing.map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-2 border-b">
                      <span>{item.service}</span>
                      <span className="font-bold flex items-center">
                        <BadgeIndianRupee className="h-4 w-4 mr-1" />
                        {item.price}
                      </span>
                    </div>
                  ))}
                  <p className="text-sm text-muted-foreground mt-4">
                    * Prices may vary based on individual case complexity. Schedule a consultation for an accurate
                    quote.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {relatedServices && relatedServices.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Related Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {relatedServices.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-primary hover:underline flex items-center"
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {(procedureSteps || aftercare || faq) && (
        <Tabs defaultValue="procedure" className="mb-12">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            {procedureSteps && <TabsTrigger value="procedure">Procedure Steps</TabsTrigger>}
            {aftercare && <TabsTrigger value="aftercare">Aftercare</TabsTrigger>}
            {faq && faq.length > 0 && <TabsTrigger value="faq">FAQ</TabsTrigger>}
          </TabsList>

          {procedureSteps && (
            <TabsContent value="procedure" className="mt-6">
              <div className="space-y-6">
                {procedureSteps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          )}

          {aftercare && (
            <TabsContent value="aftercare" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <AlertCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="font-medium">Proper aftercare is essential for successful treatment outcomes</p>
                  </div>
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: aftercare }} />
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {faq && faq.length > 0 && (
            <TabsContent value="faq" className="mt-6">
              <div className="space-y-4">
                {faq.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          )}
        </Tabs>
      )}

      <div className="bg-primary/5 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">International Patients Welcome</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Dr. Rockson Samuel and the team at Indira Dental Clinic welcome patients from around the world. Save up to 70%
          on your dental treatment while enjoying the highest quality care and exploring India.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link href="/dental-tourism">Learn About Dental Tourism</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
