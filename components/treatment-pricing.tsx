import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Check, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const treatments = [
  {
    category: "Preventive Care",
    procedures: [
      {
        name: "Dental Check-up",
        cost: "₹500 - ₹1,000",
        duration: "30-45 mins",
        info: "Includes oral examination and consultation",
      },
      {
        name: "Teeth Cleaning",
        cost: "₹1,000 - ₹2,500",
        duration: "45-60 mins",
        info: "Professional cleaning and scaling",
      },
      {
        name: "Digital X-rays",
        cost: "₹300 - ₹800",
        duration: "15-20 mins",
        info: "Per X-ray image",
      },
    ],
  },
  {
    category: "Root Canal Treatment",
    procedures: [
      {
        name: "Single Sitting RCT",
        cost: "₹3,000 - ₹8,000",
        duration: "60-90 mins",
        info: "Complete treatment in one visit",
      },
      {
        name: "Multi-visit RCT",
        cost: "₹5,000 - ₹10,000",
        duration: "2-3 sessions",
        info: "Complex cases requiring multiple visits",
      },
      {
        name: "Re-RCT",
        cost: "₹8,000 - ₹15,000",
        duration: "90-120 mins",
        info: "Retreatment of previous root canal",
      },
    ],
  },
  {
    category: "Dental Implants",
    procedures: [
      {
        name: "Single Tooth Implant",
        cost: "₹25,000 - ₹45,000",
        duration: "2-3 sessions",
        info: "Includes implant, abutment, and crown",
      },
      {
        name: "Multiple Implants",
        cost: "₹45,000 - ₹80,000",
        duration: "3-4 sessions",
        info: "Per arch, includes all components",
      },
      {
        name: "Full Mouth Implants",
        cost: "₹1,50,000 - ₹3,00,000",
        duration: "4-6 sessions",
        info: "Complete mouth rehabilitation",
      },
    ],
  },
]

export function TreatmentPricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Treatment Pricing Guide</h2>
          <p className="text-xl text-muted-foreground">Transparent pricing for all dental procedures</p>
        </div>

        <Tabs defaultValue="preventive" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-[600px] mx-auto mb-8">
            <TabsTrigger value="preventive">Preventive</TabsTrigger>
            <TabsTrigger value="rct">Root Canal</TabsTrigger>
            <TabsTrigger value="implants">Implants</TabsTrigger>
          </TabsList>

          {treatments.map((category) => (
            <TabsContent
              key={category.category.toLowerCase().replace(/\s+/g, "-")}
              value={category.category.toLowerCase().split(" ")[0]}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {category.procedures.map((procedure) => (
                  <Card key={procedure.name} className="relative overflow-hidden">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {procedure.name}
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{procedure.info}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </CardTitle>
                      <CardDescription>{procedure.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <span className="text-2xl font-bold">{procedure.cost}</span>
                        <div className="text-xs text-muted-foreground mt-1">
                          Approx. ${procedure.cost.replace(/₹|,|-/g, "").trim().split(" ")[0] / 75} USD
                        </div>
                      </div>
                      <Button className="w-full" variant="outline">
                        Book Appointment
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Payment Options</CardTitle>
              <CardDescription>Flexible payment solutions for your convenience</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "EMI options available",
                  "All major insurance accepted",
                  "Multiple payment methods",
                  "Transparent billing",
                  "No hidden charges",
                  "Senior citizen discounts",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-4 h-4 text-primary mr-3" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>* USD prices are approximate. Exchange rates may vary.</p>
          <p>
            * For detailed multi-currency pricing, please visit our{" "}
            <a href="/pricing" className="text-primary hover:underline">
              pricing page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
