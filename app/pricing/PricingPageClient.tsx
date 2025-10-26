"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModernCard, ModernCardContent, ModernCardDescription, ModernCardFooter, ModernCardHeader, ModernCardTitle } from "@/components/ui/modern-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"
import { Calendar, MapPin } from "lucide-react"

export default function PricingPageClient() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 gradient-text">Transparent Pricing</h1>
        <p className="text-lg mb-4">
          At Indira Dental Clinic, we believe in complete transparency when it comes to the cost of your dental care.
          Our pricing is competitive and reflects the high quality of care provided by{" "}
          <a
            href="https://www.google.co.in/maps/place/Indira+Dental+Clinic+%7C+Dr+Rockson+Samuel+%7C+Top+Dentist+in+Vellore+for+RCT,+Braces,+Implants,+%26+Dental+Fillings/@12.9540278,79.1369615,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad394e9843620f:0xc7a4b2fb0991e086!8m2!3d12.9540278!4d79.1369615!16s%2Fg%2F11vq058sc7?entry=ttu"
            className="text-dental-teal hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Rockson Samuel
          </a>{" "}
          and our expert team.
        </p>
      </div>

      {/* Price Comparison Highlight */}
      <div className="bg-slate-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Our Pricing Stands Out in Vellore</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">20-30%</div>
            <p className="text-lg">More affordable than corporate dental chains</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">0%</div>
            <p className="text-lg">Hidden fees or surprise charges</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-lg">Quality materials and lifetime warranty</p>
          </div>
        </div>
      </div>

      {/* Treatment Categories Tabs */}
      <Tabs defaultValue="general" className="mb-16">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="preventive">Preventive</TabsTrigger>
          <TabsTrigger value="restorative">Restorative</TabsTrigger>
          <TabsTrigger value="cosmetic">Cosmetic</TabsTrigger>
          <TabsTrigger value="orthodontic">Orthodontic</TabsTrigger>
          <TabsTrigger value="surgical">Surgical</TabsTrigger>
          <TabsTrigger value="pediatric">Pediatric</TabsTrigger>
        </TabsList>

        {/* General Dentistry Tab */}
        <TabsContent value="general">
          <h2 className="text-3xl font-bold mb-6">General Dentistry Pricing</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b">Treatment</th>
                  <th className="py-3 px-4 text-left border-b">Description</th>
                  <th className="py-3 px-4 text-left border-b">Starting Price (₹)</th>
                  <th className="py-3 px-4 text-left border-b">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Dental Consultation</td>
                  <td className="py-3 px-4 border-b">Comprehensive examination with Dr. Rockson Samuel</td>
                  <td className="py-3 px-4 border-b">500</td>
                  <td className="py-3 px-4 border-b">30 mins</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Dental X-Ray (Digital)</td>
                  <td className="py-3 px-4 border-b">Single tooth or bitewing x-ray</td>
                  <td className="py-3 px-4 border-b">300</td>
                  <td className="py-3 px-4 border-b">10 mins</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">OPG (Panoramic X-Ray)</td>
                  <td className="py-3 px-4 border-b">Full mouth panoramic view</td>
                  <td className="py-3 px-4 border-b">800</td>
                  <td className="py-3 px-4 border-b">15 mins</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Dental Cleaning</td>
                  <td className="py-3 px-4 border-b">Professional scaling and polishing</td>
                  <td className="py-3 px-4 border-b">1,000</td>
                  <td className="py-3 px-4 border-b">45 mins</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Deep Cleaning</td>
                  <td className="py-3 px-4 border-b">Scaling and root planing for gum disease</td>
                  <td className="py-3 px-4 border-b">2,500</td>
                  <td className="py-3 px-4 border-b">60-90 mins</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Fluoride Treatment</td>
                  <td className="py-3 px-4 border-b">Topical fluoride application</td>
                  <td className="py-3 px-4 border-b">500</td>
                  <td className="py-3 px-4 border-b">15 mins</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Emergency Dental Visit</td>
                  <td className="py-3 px-4">Same-day appointment for dental emergencies</td>
                  <td className="py-3 px-4">1,000</td>
                  <td className="py-3 px-4">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * Prices may vary based on complexity and individual patient needs. A detailed quote will be provided after
            consultation.
          </p>
        </TabsContent>

        {/* Restorative Dentistry Tab */}
        <TabsContent value="restorative">
          <h2 className="text-3xl font-bold mb-6">Restorative Dentistry Pricing</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b">Treatment</th>
                  <th className="py-3 px-4 text-left border-b">Description</th>
                  <th className="py-3 px-4 text-left border-b">Starting Price (₹)</th>
                  <th className="py-3 px-4 text-left border-b">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Dental Filling (Composite)</td>
                  <td className="py-3 px-4 border-b">Tooth-colored filling for cavities</td>
                  <td className="py-3 px-4 border-b">1,000</td>
                  <td className="py-3 px-4 border-b">30-45 mins</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Root Canal Treatment (Anterior)</td>
                  <td className="py-3 px-4 border-b">Front tooth root canal therapy</td>
                  <td className="py-3 px-4 border-b">3,500</td>
                  <td className="py-3 px-4 border-b">60 mins</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Root Canal Treatment (Molar)</td>
                  <td className="py-3 px-4 border-b">Back tooth root canal therapy</td>
                  <td className="py-3 px-4 border-b">8,000</td>
                  <td className="py-3 px-4 border-b">90-120 mins</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Dental Crown (Porcelain)</td>
                  <td className="py-3 px-4 border-b">Tooth-colored crown for damaged teeth</td>
                  <td className="py-3 px-4 border-b">6,000</td>
                  <td className="py-3 px-4 border-b">Two visits</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Dental Crown (Zirconia)</td>
                  <td className="py-3 px-4 border-b">Premium metal-free crown</td>
                  <td className="py-3 px-4 border-b">10,000</td>
                  <td className="py-3 px-4 border-b">Two visits</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Dental Bridge (Per Unit)</td>
                  <td className="py-3 px-4 border-b">Fixed prosthetic replacement for missing teeth</td>
                  <td className="py-3 px-4 border-b">5,000</td>
                  <td className="py-3 px-4 border-b">Multiple visits</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Dentures (Complete Set)</td>
                  <td className="py-3 px-4">Removable replacement for missing teeth</td>
                  <td className="py-3 px-4">15,000</td>
                  <td className="py-3 px-4">Multiple visits</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * All restorative treatments include follow-up visits and adjustments within 3 months of treatment.
          </p>
        </TabsContent>

        {/* Dental Implants Section */}
        <TabsContent value="surgical">
          <h2 className="text-3xl font-bold mb-6">Dental Implants & Surgical Procedures</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <ModernCard>
              <ModernCardHeader>
                <ModernCardTitle>Standard Dental Implant</ModernCardTitle>
                <ModernCardDescription>Single tooth replacement</ModernCardDescription>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="text-4xl font-bold mb-4">₹25,000</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Premium titanium implant</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Abutment and crown</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Local anesthesia</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>3 follow-up visits</span>
                  </li>
                </ul>
              </ModernCardContent>
              <ModernCardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Book Consultation</Button>
                </Link>
              </ModernCardFooter>
            </ModernCard>

            <ModernCard className="border-primary">
              <ModernCardHeader className="bg-primary text-white rounded-t-lg">
                <div className="text-center text-sm font-medium mb-2">MOST POPULAR</div>
                <ModernCardTitle>All-on-4 Implants</ModernCardTitle>
                <ModernCardDescription className="text-primary-foreground">Full arch restoration</ModernCardDescription>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="text-4xl font-bold mb-4">₹1,50,000</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>4 strategic implants per arch</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Full fixed prosthesis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Sedation options available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Comprehensive aftercare</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Lifetime warranty</span>
                  </li>
                </ul>
              </ModernCardContent>
              <ModernCardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Book Consultation</Button>
                </Link>
              </ModernCardFooter>
            </ModernCard>

            <ModernCard>
              <ModernCardHeader>
                <ModernCardTitle>Bone Grafting</ModernCardTitle>
                <ModernCardDescription>For implant preparation</ModernCardDescription>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="text-4xl font-bold mb-4">₹15,000</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Biocompatible grafting material</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Surgical procedure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Local anesthesia</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Post-operative care</span>
                  </li>
                </ul>
              </ModernCardContent>
              <ModernCardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Book Consultation</Button>
                </Link>
              </ModernCardFooter>
            </ModernCard>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b">Other Surgical Procedures</th>
                  <th className="py-3 px-4 text-left border-b">Description</th>
                  <th className="py-3 px-4 text-left border-b">Starting Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Tooth Extraction (Simple)</td>
                  <td className="py-3 px-4 border-b">Non-surgical removal of visible tooth</td>
                  <td className="py-3 px-4 border-b">1,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Wisdom Tooth Removal</td>
                  <td className="py-3 px-4 border-b">Surgical extraction of impacted wisdom tooth</td>
                  <td className="py-3 px-4 border-b">5,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Sinus Lift</td>
                  <td className="py-3 px-4 border-b">Procedure to add bone to upper jaw for implants</td>
                  <td className="py-3 px-4 border-b">20,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Gum Surgery</td>
                  <td className="py-3 px-4">Treatment for advanced periodontal disease</td>
                  <td className="py-3 px-4">8,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Other tabs would be implemented similarly */}
      </Tabs>

      {/* Insurance & Payment Options */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Insurance & Payment Options</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Insurance Coverage</h3>
            <p className="mb-4">
              We accept all major dental insurance plans and will help you maximize your benefits. Our clinic works
              with:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span>Star Health Insurance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span>HDFC ERGO Health Insurance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span>Apollo Munich Health Insurance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span>Religare Health Insurance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span>Corporate dental plans</span>
              </li>
            </ul>
            <p className="text-sm">
              Our team will verify your coverage before treatment and provide a detailed breakdown of costs.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Flexible Payment Options</h3>
            <p className="mb-4">We believe quality dental care should be accessible to everyone. Our clinic offers:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span>0% interest EMI plans for treatments above ₹10,000</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span>All major credit/debit cards accepted</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span>UPI payments (PhonePe, Google Pay, Paytm)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span>Customized payment plans for extensive treatments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span>Senior citizen discounts (10% off)</span>
              </li>
            </ul>
            <p className="text-sm">
              Speak with our financial coordinator to find the best payment solution for your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Price Match Guarantee */}
      <div className="bg-primary/10 p-8 rounded-lg mb-16">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/4 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-2xl font-bold mb-3">Our Price Match Guarantee</h3>
            <p className="mb-4">
              Found a lower price for the same quality dental treatment in Vellore? We'll match it! Dr. Rockson Samuel
              is committed to providing exceptional dental care at competitive prices.
            </p>
            <div className="bg-white p-4 rounded-md">
              <p className="text-sm">To qualify for our price match:</p>
              <ul className="text-sm list-disc pl-5 space-y-1 mt-2">
                <li>The competing offer must be from a licensed dental clinic in Vellore</li>
                <li>Treatment specifications must be identical (materials, technique, warranty)</li>
                <li>Written quote from the competitor must be provided</li>
                <li>Price match request must be made before treatment begins</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Financing Options */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Financing Your Dental Treatment</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ModernCard>
            <ModernCardHeader>
              <ModernCardTitle>3-Month EMI</ModernCardTitle>
              <ModernCardDescription>Interest-free short-term plan</ModernCardDescription>
            </ModernCardHeader>
            <ModernCardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>0% interest for 3 months</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Minimum treatment value: ₹10,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>No processing fee</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>All major credit cards accepted</span>
                </li>
              </ul>
            </ModernCardContent>
          </ModernCard>

          <ModernCard>
            <ModernCardHeader>
              <ModernCardTitle>6-Month EMI</ModernCardTitle>
              <ModernCardDescription>Extended payment option</ModernCardDescription>
            </ModernCardHeader>
            <ModernCardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Low interest rate of 5%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Minimum treatment value: ₹20,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Minimal documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Quick approval process</span>
                </li>
              </ul>
            </ModernCardContent>
          </ModernCard>

          <ModernCard>
            <ModernCardHeader>
              <ModernCardTitle>12-Month EMI</ModernCardTitle>
              <ModernCardDescription>For comprehensive treatments</ModernCardDescription>
            </ModernCardHeader>
            <ModernCardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Competitive interest rate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Ideal for full mouth rehabilitation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Flexible repayment options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Available for treatments above ₹50,000</span>
                </li>
              </ul>
            </ModernCardContent>
          </ModernCard>
        </div>
        <div className="text-center mt-8">
          <p className="mb-4">Our financial coordinator will help you choose the best payment plan for your budget.</p>
          <Link href="/contact">
            <Button>Discuss Payment Options</Button>
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions About Pricing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Do you offer discounts for multiple treatments?</h3>
            <p>
              Yes, we offer package discounts when multiple treatments are scheduled together. For example, getting
              multiple implants or combining cosmetic procedures can reduce the overall cost by 10-15%.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Are there any hidden costs I should be aware of?</h3>
            <p>
              No, we pride ourselves on transparent pricing. The quoted price includes all aspects of your treatment.
              We'll provide a detailed treatment plan with all costs clearly outlined before beginning any procedure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">How much does dental insurance typically cover?</h3>
            <p>
              Most dental insurance plans cover 100% of preventive care, 80% of basic procedures, and 50% of major
              treatments up to an annual limit. Our team will verify your specific coverage and explain your
              out-of-pocket costs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Do you offer a warranty on dental work?</h3>
            <p>
              Yes, we stand behind our work. Dental implants come with a lifetime warranty, crowns and bridges with a
              5-year warranty, and fillings with a 2-year warranty, provided you maintain regular check-ups at our
              clinic.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/faq">
            <Button variant="outline">View All FAQs</Button>
          </Link>
        </div>
      </div>

      {/* Free Consultation CTA */}
      <div className="bg-primary text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Get a Personalized Treatment Quote</h2>
        <p className="mb-6 text-lg">
          Schedule a free consultation with Dr. Rockson Samuel to discuss your dental needs and receive a detailed
          treatment plan with exact pricing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              📅 Book Your Free Consultation Today!
            </Button>
          </Link>
          <a href="tel:+919876543210">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Call Now: +91 98765 43210
            </Button>
          </a>
        </div>
      </div>
      <section className="py-12 bg-dental-navy/5 rounded-3xl mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold gradient-text mb-6">Visit Us for a Free Consultation</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Want to discuss your treatment options and get a personalized quote? Schedule a free consultation at our
            clinic in Vellore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.co.in/maps/place/Indira+Dental+Clinic+%7C+Dr+Rockson+Samuel+%7C+Top+Dentist+in+Vellore+for+RCT,+Braces,+Implants,+%26+Dental+Fillings/@12.9540278,79.1369615,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad394e9843620f:0xc7a4b2fb0991e086!8m2!3d12.9540278!4d79.1369615!16s%2Fg%2F11vq058sc7?entry=ttu"
              className="bg-white text-dental-navy border border-dental-teal px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-dental-teal/10 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="h-5 w-5" />
              Find Our Clinic
            </a>
            <button
              className="bg-gradient-dental text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:shadow-lg transition-all"
              onClick={() => document.getElementById("booking-modal")?.classList.remove("hidden")}
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
