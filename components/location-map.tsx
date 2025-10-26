"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  ExternalLink,
  Star,
  Building,
  ShoppingBag,
  Coffee,
  Utensils,
  School,
  Ban as Bank,
  Building2,
} from "lucide-react"

// Each citation includes name, type, distance from the clinic, and a brief description
interface Citation {
  name: string
  type: "hospital" | "landmark" | "shopping" | "restaurant" | "education" | "bank" | "cafe"
  distance: string // in km
  description: string
  direction: "north" | "south" | "east" | "west" | "northeast" | "northwest" | "southeast" | "southwest"
}

const typeIcons = {
  hospital: Building2,
  landmark: Building,
  shopping: ShoppingBag,
  restaurant: Utensils,
  education: School,
  bank: Bank,
  cafe: Coffee,
}

const typeColors = {
  hospital: "bg-destructive/10 text-destructive",
  landmark: "bg-secondary/10 text-secondary",
  shopping: "bg-primary/10 text-primary",
  restaurant: "bg-accent/10 text-accent",
  education: "bg-accent/10 text-accent",
  bank: "bg-muted text-muted-foreground",
  cafe: "bg-accent/10 text-accent",
}

// Generate 100 citations - organized into categories
const citations: Citation[] = [
  // Hospitals & Medical Facilities (15)
  {
    name: "Christian Medical College (CMC)",
    type: "hospital",
    distance: "1.8",
    description: "World-renowned teaching hospital offering advanced medical care",
    direction: "south",
  },
  {
    name: "Government Vellore Medical College Hospital",
    type: "hospital",
    distance: "2.5",
    description: "Major public hospital serving the region",
    direction: "north",
  },
  {
    name: "Adukkamparai Government Hospital",
    type: "hospital",
    distance: "3.2",
    description: "Public healthcare facility",
    direction: "northwest",
  },
  {
    name: "Scudder Memorial Hospital",
    type: "hospital",
    distance: "3.7",
    description: "Established medical center with various specialties",
    direction: "southwest",
  },
  {
    name: "Vellore Diabetes Centre",
    type: "hospital",
    distance: "0.4",
    description: "Specialized clinic for diabetes care",
    direction: "east",
  },
  {
    name: "Ravi Hospital",
    type: "hospital",
    distance: "0.9",
    description: "Multi-specialty private hospital",
    direction: "southeast",
  },
  {
    name: "Apollo Hospitals Clinic",
    type: "hospital",
    distance: "1.2",
    description: "Branch of the popular hospital chain",
    direction: "north",
  },
  {
    name: "Sri Narayani Hospital & Research Centre",
    type: "hospital",
    distance: "4.5",
    description: "Modern hospital with holistic approach",
    direction: "northeast",
  },
  {
    name: "Eye Foundation",
    type: "hospital",
    distance: "1.5",
    description: "Specialized eye care center",
    direction: "west",
  },
  {
    name: "Vellore Physiotherapy Centre",
    type: "hospital",
    distance: "0.3",
    description: "Physical therapy and rehabilitation center",
    direction: "south",
  },
  {
    name: "Sakthi Dental Hospital",
    type: "hospital",
    distance: "0.7",
    description: "Another dental care center in the area",
    direction: "southwest",
  },
  {
    name: "Vellore Scan Centre",
    type: "hospital",
    distance: "0.5",
    description: "Diagnostic imaging facility",
    direction: "northeast",
  },
  {
    name: "Sri Lakshmi Medical Centre",
    type: "hospital",
    distance: "1.6",
    description: "Family-oriented healthcare center",
    direction: "northwest",
  },
  {
    name: "Best Hospital",
    type: "hospital",
    distance: "2.2",
    description: "Multi-specialty healthcare facility",
    direction: "southeast",
  },
  {
    name: "New Life Maternity Hospital",
    type: "hospital",
    distance: "1.9",
    description: "Specialized in maternal and child healthcare",
    direction: "east",
  },

  // Landmarks (15)
  {
    name: "Vellore Fort",
    type: "landmark",
    distance: "2.1",
    description: "Historic 16th-century fort with museum",
    direction: "south",
  },
  {
    name: "Jalakandeswarar Temple",
    type: "landmark",
    distance: "2.2",
    description: "Ancient temple inside Vellore Fort",
    direction: "south",
  },
  {
    name: "Golden Temple (Sripuram)",
    type: "landmark",
    distance: "7.5",
    description: "Famous golden temple and spiritual destination",
    direction: "northeast",
  },
  {
    name: "St. John's Church",
    type: "landmark",
    distance: "1.8",
    description: "Historic church built during the British era",
    direction: "southwest",
  },
  {
    name: "Vellore New Bus Stand",
    type: "landmark",
    distance: "0.8",
    description: "Major transportation hub",
    direction: "east",
  },
  {
    name: "Vellore Old Bus Stand",
    type: "landmark",
    distance: "1.9",
    description: "Secondary bus terminal",
    direction: "south",
  },
  {
    name: "Vellore Railway Station",
    type: "landmark",
    distance: "2.7",
    description: "Main railway station connecting major cities",
    direction: "southeast",
  },
  {
    name: "Katpadi Railway Station",
    type: "landmark",
    distance: "3.5",
    description: "Junction railway station serving express trains",
    direction: "northwest",
  },
  {
    name: "Gandhi Road",
    type: "landmark",
    distance: "1.2",
    description: "Main commercial street in Vellore",
    direction: "south",
  },
  {
    name: "Vellore District Court",
    type: "landmark",
    distance: "2.3",
    description: "Main judicial complex",
    direction: "southwest",
  },
  {
    name: "Vellore Collectorate",
    type: "landmark",
    distance: "2.8",
    description: "District administrative headquarters",
    direction: "west",
  },
  {
    name: "Anna Stadium",
    type: "landmark",
    distance: "3.1",
    description: "Major sports venue in the city",
    direction: "north",
  },
  {
    name: "Amirthi Zoological Park",
    type: "landmark",
    distance: "25.0",
    description: "Wildlife sanctuary and nature spot",
    direction: "northwest",
  },
  {
    name: "Yelagiri Hills",
    type: "landmark",
    distance: "35.0",
    description: "Popular hill station near Vellore",
    direction: "northeast",
  },
  {
    name: "Ponnai River",
    type: "landmark",
    distance: "4.5",
    description: "River flowing near Vellore city",
    direction: "north",
  },

  // Shopping (15)
  {
    name: "Vellore New Market",
    type: "shopping",
    distance: "1.7",
    description: "Traditional market with various goods",
    direction: "south",
  },
  {
    name: "Gandhi Bazaar",
    type: "shopping",
    distance: "1.5",
    description: "Busy shopping area with local stores",
    direction: "southwest",
  },
  {
    name: "V-Mall",
    type: "shopping",
    distance: "2.3",
    description: "Modern shopping mall with national brands",
    direction: "north",
  },
  {
    name: "Vellore Shopping Complex",
    type: "shopping",
    distance: "1.1",
    description: "Multi-story shopping center",
    direction: "east",
  },
  {
    name: "Khanna Jewellers",
    type: "shopping",
    distance: "1.3",
    description: "Popular jewelry store",
    direction: "south",
  },
  {
    name: "Lalitha Jewellery",
    type: "shopping",
    distance: "2.5",
    description: "Well-known gold and diamond jewelry chain",
    direction: "west",
  },
  {
    name: "Prince Textiles",
    type: "shopping",
    distance: "0.9",
    description: "Fabric and clothing store",
    direction: "southeast",
  },
  {
    name: "Chennai Silks",
    type: "shopping",
    distance: "1.8",
    description: "Leading textile showroom",
    direction: "northeast",
  },
  {
    name: "Vellore Co-op Supermarket",
    type: "shopping",
    distance: "0.6",
    description: "Community-owned grocery store",
    direction: "northwest",
  },
  {
    name: "D-Mart",
    type: "shopping",
    distance: "3.2",
    description: "Supermarket chain with household goods",
    direction: "northeast",
  },
  {
    name: "Reliance Digital",
    type: "shopping",
    distance: "2.8",
    description: "Electronics and appliance store",
    direction: "north",
  },
  {
    name: "More Supermarket",
    type: "shopping",
    distance: "1.2",
    description: "Grocery and household essentials store",
    direction: "west",
  },
  {
    name: "Pothys",
    type: "shopping",
    distance: "2.1",
    description: "Textile and clothing megastore",
    direction: "south",
  },
  {
    name: "Galaxy Mobile Shop",
    type: "shopping",
    distance: "0.4",
    description: "Smartphone and accessories retailer",
    direction: "east",
  },
  {
    name: "Sri Krishna Sweets",
    type: "shopping",
    distance: "0.8",
    description: "Famous sweet shop chain",
    direction: "southeast",
  },

  // Restaurants (15)
  {
    name: "Darling Residency Restaurant",
    type: "restaurant",
    distance: "0.9",
    description: "Multi-cuisine family restaurant",
    direction: "south",
  },
  {
    name: "Adyar Ananda Bhavan (A2B)",
    type: "restaurant",
    distance: "1.3",
    description: "Popular vegetarian chain restaurant",
    direction: "east",
  },
  {
    name: "Saravana Bhavan",
    type: "restaurant",
    distance: "1.1",
    description: "Famous South Indian vegetarian restaurant",
    direction: "northeast",
  },
  {
    name: "Hotel Srinithi",
    type: "restaurant",
    distance: "0.7",
    description: "Local favorite for Tamil cuisine",
    direction: "northwest",
  },
  {
    name: "Hot Chips",
    type: "restaurant",
    distance: "0.5",
    description: "Fast food and snack restaurant",
    direction: "west",
  },
  {
    name: "Hotel Aarthi",
    type: "restaurant",
    distance: "1.5",
    description: "Non-vegetarian restaurant with Tamil specialties",
    direction: "southwest",
  },
  {
    name: "KFC",
    type: "restaurant",
    distance: "2.2",
    description: "International fast food chain",
    direction: "north",
  },
  {
    name: "Domino's Pizza",
    type: "restaurant",
    distance: "1.8",
    description: "Pizza delivery chain",
    direction: "northeast",
  },
  {
    name: "McDonald's",
    type: "restaurant",
    distance: "3.5",
    description: "Global fast food restaurant",
    direction: "north",
  },
  {
    name: "Grand Krishna",
    type: "restaurant",
    distance: "0.9",
    description: "Popular for North Indian cuisine",
    direction: "southeast",
  },
  {
    name: "Anjappar Restaurant",
    type: "restaurant",
    distance: "1.6",
    description: "Famous Chettinad cuisine restaurant",
    direction: "east",
  },
  {
    name: "Barbeque Nation",
    type: "restaurant",
    distance: "3.8",
    description: "Grill and buffet restaurant",
    direction: "northeast",
  },
  {
    name: "Thalappakatti Biriyani",
    type: "restaurant",
    distance: "2.7",
    description: "Famous for authentic biriyani",
    direction: "southwest",
  },
  {
    name: "Meena Mess",
    type: "restaurant",
    distance: "0.6",
    description: "Local eatery known for affordable meals",
    direction: "south",
  },
  {
    name: "New Woodland Hotel",
    type: "restaurant",
    distance: "1.4",
    description: "Established restaurant with varied menu",
    direction: "west",
  },

  // Education Institutions (15)
  {
    name: "VIT University",
    type: "education",
    distance: "4.5",
    description: "Prestigious engineering and technology university",
    direction: "northwest",
  },
  {
    name: "CMC College of Nursing",
    type: "education",
    distance: "1.9",
    description: "Medical education institution",
    direction: "south",
  },
  {
    name: "Government Law College",
    type: "education",
    distance: "2.5",
    description: "Public law education institution",
    direction: "southwest",
  },
  {
    name: "Voorhees College",
    type: "education",
    distance: "1.8",
    description: "Historic arts and science college",
    direction: "south",
  },
  {
    name: "DKM College for Women",
    type: "education",
    distance: "2.3",
    description: "Women's higher education institution",
    direction: "north",
  },
  {
    name: "Auxilium College",
    type: "education",
    distance: "3.1",
    description: "Catholic women's college",
    direction: "northeast",
  },
  {
    name: "Sacred Heart College",
    type: "education",
    distance: "2.7",
    description: "Arts and science college",
    direction: "west",
  },
  {
    name: "Vellore Institute of Technology (VIT)",
    type: "education",
    distance: "4.5",
    description: "Prestigious private university",
    direction: "northwest",
  },
  {
    name: "Thanthai Periyar Government Institute of Technology",
    type: "education",
    distance: "3.6",
    description: "Public engineering college",
    direction: "northeast",
  },
  {
    name: "Vellore Government Medical College",
    type: "education",
    distance: "2.5",
    description: "Public medical college",
    direction: "north",
  },
  {
    name: "Sri Venkateswara College of Engineering",
    type: "education",
    distance: "5.2",
    description: "Engineering institution",
    direction: "northwest",
  },
  {
    name: "Don Bosco School",
    type: "education",
    distance: "1.6",
    description: "Well-known primary and secondary school",
    direction: "west",
  },
  {
    name: "Ida Scudder School",
    type: "education",
    distance: "2.2",
    description: "Popular private school",
    direction: "southwest",
  },
  {
    name: "Vellore Public School",
    type: "education",
    distance: "1.3",
    description: "CBSE curriculum school",
    direction: "south",
  },
  {
    name: "St. John's Matriculation School",
    type: "education",
    distance: "1.7",
    description: "Well-established private school",
    direction: "southeast",
  },

  // Banks & Financial Institutions (15)
  {
    name: "State Bank of India (Main Branch)",
    type: "bank",
    distance: "1.2",
    description: "Major public sector bank",
    direction: "south",
  },
  {
    name: "ICICI Bank",
    type: "bank",
    distance: "0.8",
    description: "Private sector banking and financial services",
    direction: "east",
  },
  {
    name: "HDFC Bank",
    type: "bank",
    distance: "1.1",
    description: "Private banking and financial services company",
    direction: "north",
  },
  {
    name: "Indian Bank",
    type: "bank",
    distance: "0.9",
    description: "Public sector banking institution",
    direction: "west",
  },
  {
    name: "Canara Bank",
    type: "bank",
    distance: "1.3",
    description: "Government-owned commercial bank",
    direction: "southeast",
  },
  {
    name: "Punjab National Bank",
    type: "bank",
    distance: "1.5",
    description: "Public sector banking and financial services",
    direction: "northeast",
  },
  { name: "Axis Bank", type: "bank", distance: "0.7", description: "Private sector bank", direction: "south" },
  { name: "Bank of Baroda", type: "bank", distance: "1.2", description: "Public sector bank", direction: "northwest" },
  {
    name: "Indian Overseas Bank",
    type: "bank",
    distance: "0.6",
    description: "Public sector banking company",
    direction: "southwest",
  },
  {
    name: "Union Bank of India",
    type: "bank",
    distance: "1.4",
    description: "Government-owned bank",
    direction: "northeast",
  },
  { name: "South Indian Bank", type: "bank", distance: "0.9", description: "Private sector bank", direction: "east" },
  { name: "Federal Bank", type: "bank", distance: "1.7", description: "Private sector bank", direction: "north" },
  {
    name: "LIC Office",
    type: "bank",
    distance: "1.3",
    description: "Life Insurance Corporation branch",
    direction: "southwest",
  },
  {
    name: "Post Office (Head Office)",
    type: "bank",
    distance: "1.8",
    description: "Main postal and banking services",
    direction: "south",
  },
  {
    name: "Tamil Nadu Mercantile Bank",
    type: "bank",
    distance: "1.1",
    description: "Private sector banking institution",
    direction: "northwest",
  },

  // Cafes (10)
  {
    name: "Café Coffee Day",
    type: "cafe",
    distance: "1.6",
    description: "Popular coffee shop chain",
    direction: "north",
  },
  {
    name: "Chennai Café",
    type: "cafe",
    distance: "0.8",
    description: "Local coffee and snack shop",
    direction: "east",
  },
  { name: "Hot Breads", type: "cafe", distance: "1.2", description: "Bakery and café", direction: "southeast" },
  { name: "French Loaf", type: "cafe", distance: "1.9", description: "Bakery and pastry shop", direction: "northeast" },
  { name: "Aroma Café", type: "cafe", distance: "0.7", description: "Coffee and light meal café", direction: "south" },
  {
    name: "Sweet Spot",
    type: "cafe",
    distance: "0.5",
    description: "Dessert café and ice cream parlor",
    direction: "west",
  },
  { name: "Tea Trails", type: "cafe", distance: "1.7", description: "Specialty tea café", direction: "northwest" },
  { name: "Barista", type: "cafe", distance: "2.1", description: "Coffee chain outlet", direction: "north" },
  {
    name: "Grand Sweets & Snacks",
    type: "cafe",
    distance: "0.9",
    description: "Traditional sweets and savory snacks",
    direction: "southwest",
  },
  {
    name: "The Chocolate Room",
    type: "cafe",
    distance: "2.3",
    description: "Specialty chocolate café",
    direction: "northeast",
  },
]

export function LocationMap() {
  const [tab, setTab] = useState<string>("map")

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary mb-2">Our Location</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conveniently located in the heart of Vellore, Indira Dental Clinic is easily accessible from all major
          landmarks.
        </p>
      </div>

      <Tabs defaultValue="map" className="w-full" onValueChange={setTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 w-full max-w-md">
            <TabsTrigger value="map">Map & Directions</TabsTrigger>
            <TabsTrigger value="nearby">Nearby Places</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="map" className="mt-0">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6735279807907!2d79.13526831482133!3d12.929060290880256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzQ0LjYiTiA3OcKwMDgnMTIuMSJF!5e0!3m2!1sen!2sin!4v1616661863740!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps location of Indira Dental Clinic"
                />
              </div>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Our Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Indira Dental Clinic | Dr. Rockson Samuel</p>
                  <p className="text-muted-foreground">3rd Floor, 54, Katpadi Main Rd,</p>
                  <p className="text-muted-foreground">Suthanthira Ponvizha Nagar, Gandhi Nagar,</p>
                  <p className="text-muted-foreground">Vellore, Tamil Nadu 632006</p>

                  <div className="mt-4 flex">
                    <Button variant="outline" className="mr-3 flex items-center bg-transparent">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="flex items-center bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href="tel:7010650063">Call Us</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Clinic Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2">
                  <div className="text-muted-foreground">Monday</div>
                  <div>10 am–8 pm</div>
                  <div className="text-muted-foreground">Tuesday</div>
                  <div>10 am–8 pm</div>
                  <div className="text-muted-foreground">Wednesday</div>
                  <div>10 am–8 pm</div>
                  <div className="text-muted-foreground">Thursday</div>
                  <div>10 am–8 pm</div>
                  <div className="text-muted-foreground">Friday</div>
                  <div>10 am–8 pm</div>
                  <div className="text-muted-foreground">Saturday</div>
                  <div>10 am–8 pm</div>
                  <div className="text-muted-foreground">Sunday</div>
                  <div>10 am–1:30 pm</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-accent" />
                    Getting Here
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>
                    <span className="font-medium">From Vellore Bus Stand:</span> 5 min drive (1.2 km)
                  </p>
                  <p>
                    <span className="font-medium">From Vellore Railway Station:</span> 10 min drive (2.7 km)
                  </p>
                  <p>
                    <span className="font-medium">From Katpadi Junction:</span> 15 min drive (3.5 km)
                  </p>
                  <p>
                    <span className="font-medium">From VIT University:</span> 20 min drive (4.5 km)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="nearby" className="mt-0">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {["all", "hospital", "landmark", "shopping", "restaurant", "education", "bank", "cafe"].map((type) => (
                <Badge
                  key={type}
                  variant={tab === type ? "default" : "outline"}
                  className="cursor-pointer capitalize"
                  onClick={() => setTab(type)}
                >
                  {type === "all" ? "All Places" : type}
                </Badge>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {citations
                .filter((citation) => tab === "all" || citation.type === tab)
                .map((citation, index) => {
                  const Icon = typeIcons[citation.type]
                  return (
                    <Card key={index} className="h-full">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-base font-medium">{citation.name}</CardTitle>
                          <Badge className={`${typeColors[citation.type]}`}>
                            <Icon className="h-3 w-3 mr-1" />
                            {citation.type}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" /> {citation.distance} km ({citation.direction})
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground">{citation.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              This is just a sample of the many places near our clinic. Vellore is a vibrant city with many more
              attractions and amenities.
            </p>
            <Button variant="outline" className="flex items-center mx-auto bg-transparent">
              <ExternalLink className="h-4 w-4 mr-2" />
              View More on Google Maps
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
