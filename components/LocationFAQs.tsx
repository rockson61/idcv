import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface LocationFAQsProps {
  faqs: FAQ[]
  locationName: string
}

export function LocationFAQs({ faqs, locationName }: LocationFAQsProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <CardTitle className="flex items-center">
          <HelpCircle className="h-6 w-6 mr-2" />
          Frequently Asked Questions About Dental Care in {locationName}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">{faq.question}</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
