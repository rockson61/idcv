import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Clock, CheckCircle, Star, MapPin, Phone, Mail } from "lucide-react"

const specialties = ["General Dentistry", "RCT", "Implants", "Orthodontics"]

const recommendations = [
  { category: "General Dentistry", count: 45, color: "rgb(0, 255, 255)" },
  { category: "RCT & Implants", count: 35, color: "rgb(255, 99, 132)" },
  { category: "Orthodontics", count: 25, color: "rgb(54, 162, 235)" },
  { category: "Other", count: 31, color: "rgb(201, 203, 207)" },
]

const navigationTabs = ["Expertise", "About", "Procedures", "Location", "Reviews", "Videos", "Articles", "FAQ"]

export function DoctorProfile() {
  return (
    <Card className="p-6">
      <div className="grid md:grid-cols-[200px_1fr_300px] gap-6 lg:gap-10">
        <div className="space-y-4">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asUXX311sC5841F8Vs4rn5PUmLOGry.png"
              alt="Dr Rockson Samuel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-[#002B6B]">Dr Rockson Samuel</h1>
            <p className="text-lg text-muted-foreground">General Dentist & Implantologist</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-base">Trusted Network</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-base">15+ Yrs experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-base">Verified Practitioner</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <Badge key={specialty} variant="secondary" className="text-sm py-1 px-3">
                {specialty}
              </Badge>
            ))}
            <Badge variant="outline" className="text-sm py-1 px-3">
              +8
            </Badge>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg">
          <h2 className="text-lg font-bold text-[#002B6B] mb-4">PATIENT TRUST SCORE</h2>
          <div className="space-y-4">
            <div>
              <div className="text-6xl font-bold text-[#002B6B] mb-2">5.00</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#00ffff] text-[#00ffff]" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-[#002B6B]">39</span>
                <Link href="/patient-reviews" className="text-primary hover:underline">
                  patient reviews
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-[#002B6B]">10</span>
                <Link href="/skill-endorsements" className="text-primary hover:underline">
                  skill endorsements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-[#002B6B] font-bold mb-4">136 RECOMMENDATIONS FOR:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {recommendations.map((rec) => (
            <div
              key={rec.category}
              className="p-3 rounded-lg transition-all hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: rec.color + "20" }}
            >
              <div className="text-sm font-medium" style={{ color: rec.color }}>
                {rec.category} ({rec.count})
              </div>
            </div>
          ))}
        </div>

        <Tabs defaultValue="expertise" className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto">
            {navigationTabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className="text-muted-foreground data-[state=active]:text-primary"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="expertise" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Areas of Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Invisalign Specialist in Vellore</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Certified Invisalign Provider since 2008</li>
                  <li>Over 500 successful Invisalign cases in Vellore</li>
                  <li>Advanced training in complex Invisalign treatments</li>
                  <li>Expertise in Invisalign for teens and adults</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Clear Braces and Orthodontics</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Proficient in various clear braces systems</li>
                  <li>Customized orthodontic treatment plans for Vellore patients</li>
                  <li>Specialized in treating complex malocclusions</li>
                  <li>Advanced digital orthodontic planning techniques</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="about" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">About Dr. Rockson Samuel</h3>
            <p className="mb-4">
              Dr. Rockson Samuel is a leading dentist and orthodontist in Vellore, with over 15 years of experience in
              providing top-quality dental care. Specializing in Invisalign and clear braces, Dr. Samuel has transformed
              countless smiles in Vellore and the surrounding areas.
            </p>
            <p className="mb-4">
              As a certified Invisalign provider and clear braces expert, Dr. Samuel combines his extensive knowledge
              with cutting-edge technology to deliver personalized orthodontic treatments. His commitment to continuing
              education ensures that patients in Vellore receive the most advanced and effective orthodontic care
              available.
            </p>
            <p>
              Dr. Samuel's patient-centric approach and gentle demeanor have earned him a reputation as one of Vellore's
              most trusted dental professionals, particularly in the field of invisible orthodontics.
            </p>
          </TabsContent>
          <TabsContent value="procedures" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Orthodontic Procedures</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Invisalign Treatment in Vellore</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Custom-made clear aligners for discreet teeth straightening</li>
                  <li>Invisalign First for young children</li>
                  <li>Invisalign Teen for adolescents</li>
                  <li>Invisalign for adults with complex cases</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Clear Braces and Other Orthodontic Solutions</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ceramic braces for a more discreet alternative to metal braces</li>
                  <li>Lingual braces placed behind the teeth</li>
                  <li>Traditional metal braces for complex cases</li>
                  <li>Orthodontic retainers for post-treatment maintenance</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="location" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-semibold">Indira Dental Clinic</p>
                <p>3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar</p>
                <p>Vellore, Tamil Nadu 632006</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+917010650063" className="text-primary hover:underline">
                +91 70106 50063
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:rockson68@hotmail.com" className="text-primary hover:underline">
                rockson68@hotmail.com
              </a>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Patient Reviews</h3>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="italic mb-2">
                  "Dr. Samuel's Invisalign treatment transformed my smile! The process was smooth, and the results are
                  amazing. Highly recommend for anyone in Vellore looking for invisible braces."
                </p>
                <p className="text-sm text-gray-600">- Priya R., Vellore</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="italic mb-2">
                  "I was hesitant about getting braces as an adult, but Dr. Samuel's clear braces option was perfect.
                  His expertise in orthodontics is evident, and I'm thrilled with my new smile!"
                </p>
                <p className="text-sm text-gray-600">- Rahul M., Katpadi</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="italic mb-2">
                  "Dr. Rockson Samuel is the best orthodontist in Vellore. His Invisalign treatment for my teenager was
                  efficient and the results are fantastic. Great experience overall!"
                </p>
                <p className="text-sm text-gray-600">- Deepa S., Vellore</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="videos" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Educational Videos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Invisalign Treatment Process</h4>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/D3FBU7UyZJA"
                    title="Invisalign Treatment Process"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Clear Braces vs Traditional Braces</h4>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/8TT22hOIqi8"
                    title="Clear Braces vs Traditional Braces"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="articles" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Articles by Dr. Rockson Samuel</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  <Link href="/blog/invisalign-vs-traditional-braces" className="text-primary hover:underline">
                    Invisalign vs Traditional Braces: Which is Right for You?
                  </Link>
                </h4>
                <p className="text-sm text-gray-600">
                  Learn about the pros and cons of Invisalign and traditional braces to make an informed decision for
                  your orthodontic treatment in Vellore.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  <Link href="/blog/clear-braces-adult-orthodontics" className="text-primary hover:underline">
                    Clear Braces for Adults: A Guide to Discreet Orthodontic Treatment
                  </Link>
                </h4>
                <p className="text-sm text-gray-600">
                  Discover how clear braces are revolutionizing adult orthodontics in Vellore, offering a discreet way
                  to achieve a perfect smile.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  <Link href="/blog/invisalign-teen-vellore" className="text-primary hover:underline">
                    Invisalign for Teens in Vellore: What Parents Need to Know
                  </Link>
                </h4>
                <p className="text-sm text-gray-600">
                  Everything parents in Vellore should know about Invisalign treatment for their teenagers, including
                  benefits, care, and expected outcomes.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faq" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">How long does Invisalign treatment take in Vellore?</h4>
                <p>
                  Invisalign treatment duration varies depending on individual cases, but typically ranges from 6 to 18
                  months for Vellore patients. Dr. Samuel will provide a personalized estimate during your consultation.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Are clear braces as effective as traditional braces?</h4>
                <p>
                  Yes, clear braces can be just as effective as traditional braces for many orthodontic issues. Dr.
                  Samuel will assess your specific case to determine the most suitable treatment option for you.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">How much do Invisalign and clear braces cost in Vellore?</h4>
                <p>
                  The cost of Invisalign and clear braces in Vellore varies based on the complexity of your case. Dr.
                  Samuel offers competitive pricing and flexible payment plans to make treatment accessible. Schedule a
                  consultation for a personalized quote.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Can I switch from traditional braces to Invisalign mid-treatment?
                </h4>
                <p>
                  In some cases, it's possible to switch from traditional braces to Invisalign. Dr. Samuel will evaluate
                  your current progress and orthodontic needs to determine if a switch is feasible and beneficial for
                  your treatment.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}
