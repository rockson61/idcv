import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, SmileIcon as Tooth, Coffee, Apple, Clock } from "lucide-react"

export function DentalHealthTips() {
  const tips = [
    {
      category: "prevention",
      items: [
        {
          icon: <Tooth className="h-5 w-5 text-blue-600" />,
          title: "Proper Brushing Technique",
          content:
            "Brush at a 45-degree angle to your gums, using short, gentle strokes. Don't forget to brush your tongue to remove bacteria.",
        },
        {
          icon: <Clock className="h-5 w-5 text-blue-600" />,
          title: "Regular Dental Check-ups",
          content:
            "Visit your dentist every 6 months for professional cleaning and early detection of potential issues.",
        },
        {
          icon: <Apple className="h-5 w-5 text-blue-600" />,
          title: "Balanced Diet",
          content:
            "Limit sugary foods and drinks. Eat a balanced diet rich in calcium, phosphorus, and vitamin C for healthy teeth and gums.",
        },
      ],
    },
    {
      category: "care",
      items: [
        {
          icon: <Coffee className="h-5 w-5 text-blue-600" />,
          title: "Avoid Staining Foods",
          content:
            "Coffee, tea, red wine, and tobacco can stain your teeth. Rinse your mouth after consuming these or use a straw when possible.",
        },
        {
          icon: <Tooth className="h-5 w-5 text-blue-600" />,
          title: "Flossing Daily",
          content:
            "Floss at least once a day to remove plaque and food particles from between teeth where your toothbrush can't reach.",
        },
        {
          icon: <Clock className="h-5 w-5 text-blue-600" />,
          title: "Replace Your Toothbrush",
          content:
            "Replace your toothbrush or electric toothbrush head every 3-4 months, or sooner if the bristles are frayed.",
        },
      ],
    },
    {
      category: "emergency",
      items: [
        {
          icon: <Tooth className="h-5 w-5 text-blue-600" />,
          title: "Knocked-Out Tooth",
          content:
            "If a tooth is knocked out, hold it by the crown, rinse it gently, and try to place it back in the socket. If not possible, keep it in milk and see a dentist immediately.",
        },
        {
          icon: <Clock className="h-5 w-5 text-blue-600" />,
          title: "Severe Toothache",
          content:
            "Rinse your mouth with warm water, use dental floss to remove any food, and take over-the-counter pain relievers. See a dentist as soon as possible.",
        },
        {
          icon: <Tooth className="h-5 w-5 text-blue-600" />,
          title: "Broken or Chipped Tooth",
          content:
            "Rinse your mouth with warm water, apply a cold compress to reduce swelling, and see a dentist right away.",
        },
      ],
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Dental Health Tips & Resources
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Expert advice to maintain your oral health between visits.
          </p>
        </div>

        <Tabs defaultValue="prevention" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="prevention">Prevention Tips</TabsTrigger>
            <TabsTrigger value="care">Daily Care</TabsTrigger>
            <TabsTrigger value="emergency">Emergency Care</TabsTrigger>
          </TabsList>

          {tips.map((category) => (
            <TabsContent key={category.category} value={category.category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((tip, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">{tip.icon}</div>
                        <div>
                          <h3 className="font-bold mb-2">{tip.title}</h3>
                          <p className="text-gray-600 text-sm">{tip.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center mt-10">
          <Button asChild>
            <Link href="/blog" className="flex items-center">
              Read Our Dental Health Blog
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
