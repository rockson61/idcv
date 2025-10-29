import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plane, Hotel, MapPin, CreditCard, Calendar, Phone } from "lucide-react"

export function DentalTourism() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Dental Tourism in Vellore</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Experience world-class dental care at a fraction of the cost. Dr. Rockson Samuel and the team at Indira Dental
          Clinic welcome international patients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="text-center">
            <Plane className="w-12 h-12 mx-auto text-primary mb-2" />
            <CardTitle>Save Up to 70%</CardTitle>
            <CardDescription>Compared to dental treatments in the US, UK, and Australia</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our dental procedures cost significantly less than in Western countries without compromising on quality.
              Many patients find that the cost of treatment plus travel is still less than treatment alone in their home
              country.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Hotel className="w-12 h-12 mx-auto text-primary mb-2" />
            <CardTitle>Complete Package</CardTitle>
            <CardDescription>Treatment, accommodation, and local assistance</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We offer comprehensive packages that include your dental treatment, comfortable accommodation options,
              local transportation, and assistance with planning your stay in Vellore.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <MapPin className="w-12 h-12 mx-auto text-primary mb-2" />
            <CardTitle>Explore India</CardTitle>
            <CardDescription>Combine your dental treatment with tourism</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Vellore is located just 2.5 hours from Chennai. After your treatment, explore the rich cultural heritage
              of Tamil Nadu, visit historic temples, enjoy local cuisine, and experience the vibrant culture of South
              India.
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="why-choose" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="why-choose">Why Choose Us</TabsTrigger>
          <TabsTrigger value="procedures">Popular Procedures</TabsTrigger>
          <TabsTrigger value="process">The Process</TabsTrigger>
          <TabsTrigger value="testimonials">Patient Stories</TabsTrigger>
        </TabsList>
        <TabsContent value="why-choose" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">International Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>State-of-the-art equipment and modern facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Internationally trained dentist with over 15 years of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Strict sterilization and hygiene protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Digital treatment planning and diagnostics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Same materials and brands used in Western countries</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Patient-Centered Care</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>English-speaking staff and doctor</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Personalized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Virtual consultations before your visit</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Assistance with travel arrangements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Follow-up care and support after you return home</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="procedures" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Dental Implants</CardTitle>
                <CardDescription>Starting from ₹25,000 per implant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Replace missing teeth with permanent, natural-looking implants. Complete in just 1-2 visits over 5-7
                  days.
                </p>
                <p className="font-semibold">Save up to 70% compared to Western prices</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Full Smile Makeover</CardTitle>
                <CardDescription>Starting from ₹75,000</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Transform your smile with a combination of veneers, crowns, whitening, and other cosmetic procedures.
                </p>
                <p className="font-semibold">Save up to 65% compared to Western prices</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>All-on-4 / All-on-6</CardTitle>
                <CardDescription>Starting from ₹1,50,000 per arch</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Replace a full arch of teeth with just 4-6 implants. A permanent solution for multiple missing teeth.
                </p>
                <p className="font-semibold">Save up to 75% compared to Western prices</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="process" className="mt-6">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                <p>
                  Contact us via email or WhatsApp with your dental concerns and any existing reports or X-rays. We'll
                  arrange a virtual consultation with Dr. Rockson Samuel to discuss your treatment options.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Treatment Plan & Quote</h3>
                <p>
                  After your consultation, we'll provide a detailed treatment plan and cost estimate. We'll also discuss
                  the expected duration of your stay and the number of visits required.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Travel Planning</h3>
                <p>
                  Once you decide to proceed, our team will help you plan your visit. We can recommend accommodation
                  options, arrange airport pickup, and provide information about local attractions.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Treatment in Vellore</h3>
                <p>
                  Upon arrival, you'll meet Dr. Rockson Samuel for an in-person examination and begin your treatment.
                  We'll ensure your comfort throughout the process and accommodate your schedule.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Follow-up Care</h3>
                <p>
                  After your treatment, we'll provide detailed aftercare instructions. Dr. Rockson Samuel will remain
                  available for virtual consultations after you return home to ensure your recovery is progressing well.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="testimonials" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "I saved over $8,000 on my dental implants by coming to Indira Dental Clinic. Dr. Rockson was
                  professional, gentle, and the quality of work is outstanding. The clinic arranged everything for my
                  stay in Vellore, making the whole experience stress-free."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-4">
                    JM
                  </div>
                  <div>
                    <p className="font-semibold">John M.</p>
                    <p className="text-sm text-muted-foreground">London, UK</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "After being quoted $25,000 for a full smile makeover in Australia, I found Indira Dental Clinic. I
                  paid less than a third of that price and got to explore South India at the same time. Dr. Rockson is
                  truly an artist and I couldn't be happier with my new smile!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-4">
                    SL
                  </div>
                  <div>
                    <p className="font-semibold">Sarah L.</p>
                    <p className="text-sm text-muted-foreground">Sydney, Australia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-primary/5 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Ready to Start Your Dental Journey?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <CreditCard className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Flexible Payment Options</h3>
            <p>
              We accept cash, credit cards, bank transfers, and can provide documentation for insurance reimbursement.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Plan Your Visit</h3>
            <p>
              Most treatments can be completed in 5-10 days, depending on complexity. We'll help you plan the optimal
              schedule.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Reach out via WhatsApp or email for a free virtual consultation and personalized treatment plan.</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button size="lg" className="mr-4">
            Book Virtual Consultation
          </Button>
          <Button size="lg" variant="outline">
            WhatsApp Us
          </Button>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>How long will I need to stay in Vellore for my treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The duration of your stay depends on the treatment. Simple procedures like fillings or cleanings can be
                completed in a single day. More complex treatments like implants typically require 5-7 days for the
                initial visit and another 3-5 days for a follow-up visit after 3-6 months. We'll provide a detailed
                timeline during your consultation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Is the quality of dental care in India comparable to Western countries?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Absolutely. Dr. Rockson Samuel uses the same materials, equipment, and techniques as top dentists
                worldwide. Our clinic adheres to international sterilization standards, and we stay current with the
                latest advancements in dentistry. Many of our international patients report that the quality of care
                exceeds what they receive at home.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What accommodation options are available near the clinic?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Vellore offers a range of accommodation options from budget-friendly guesthouses to luxury hotels. We
                have partnerships with several hotels within 1-3 km of our clinic and can arrange your stay based on
                your preferences and budget. All recommended accommodations offer clean, comfortable rooms with modern
                amenities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How do I get to Vellore?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The nearest international airport is in Chennai (MAA), approximately 130 km from Vellore. We can arrange
                airport pickup and transportation to your accommodation. There are also direct trains from Chennai to
                Vellore, and the journey takes about 2-3 hours. We'll provide detailed travel information and assistance
                with your booking.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
