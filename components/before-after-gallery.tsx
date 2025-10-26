"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BeforeAfterImage {
  id: string
  title: string
  description: string
  beforeImage: string
  afterImage: string
  category: string
  patientAge?: string
  treatmentDuration?: string
}

interface BeforeAfterGalleryProps {
  title: string
  description?: string
  images: BeforeAfterImage[]
  categories?: string[]
  location?: string
}

export default function BeforeAfterGallery({
  title,
  description,
  images,
  categories = ["All", "Invisalign", "Dental Implants", "Cosmetic Dentistry", "Smile Makeover"],
  location = "Vellore",
}: BeforeAfterGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredImages = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        {description && <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{description}</p>}
      </div>

      <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            {filteredImages.length > 0 ? (
              <div className="relative">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-4 p-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Before Treatment</h3>
                        <div className="relative aspect-video rounded-md overflow-hidden">
                          <Image
                            src={filteredImages[currentIndex]?.beforeImage || "/placeholder.svg?height=300&width=500"}
                            alt={`Before ${filteredImages[currentIndex]?.title}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">After Treatment</h3>
                        <div className="relative aspect-video rounded-md overflow-hidden">
                          <Image
                            src={filteredImages[currentIndex]?.afterImage || "/placeholder.svg?height=300&width=500"}
                            alt={`After ${filteredImages[currentIndex]?.title}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-800">
                      <h3 className="text-xl font-semibold mb-2">{filteredImages[currentIndex]?.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {filteredImages[currentIndex]?.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        {filteredImages[currentIndex]?.patientAge && (
                          <div>
                            <span className="font-medium">Patient Age:</span> {filteredImages[currentIndex].patientAge}
                          </div>
                        )}
                        {filteredImages[currentIndex]?.treatmentDuration && (
                          <div>
                            <span className="font-medium">Treatment Duration:</span>{" "}
                            {filteredImages[currentIndex].treatmentDuration}
                          </div>
                        )}
                        <div>
                          <span className="font-medium">Treatment Type:</span> {filteredImages[currentIndex]?.category}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {filteredImages.length > 1 && (
                  <div className="flex justify-between mt-4">
                    <Button variant="outline" size="icon" onClick={handlePrevious}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-sm text-gray-500">
                      {currentIndex + 1} of {filteredImages.length}
                    </div>
                    <Button variant="outline" size="icon" onClick={handleNext}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No {category !== "All" ? category : ""} before and after images available yet.
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          These are actual patients treated at our {location} dental clinic. Results may vary from patient to patient.
          All images are shared with patient consent.
        </p>
      </div>
    </div>
  )
}

// Example usage for dental before-after gallery
export function DentalBeforeAfterGallery({ location = "Vellore" }) {
  const beforeAfterImages = [
    {
      id: "invisalign-1",
      title: "Severe Crowding Corrected with Invisalign",
      description:
        "This patient had significant crowding in the lower front teeth. After 18 months of Invisalign treatment, the teeth are perfectly aligned with improved function and aesthetics.",
      beforeImage: "/invisalign-before-1.jpg",
      afterImage: "/invisalign-after-1.jpg",
      category: "Invisalign",
      patientAge: "28 years",
      treatmentDuration: "18 months",
    },
    {
      id: "implant-1",
      title: "Single Tooth Replacement with Dental Implant",
      description:
        "Patient lost a front tooth due to trauma. A dental implant with a custom-matched crown restored both function and appearance, with results that blend seamlessly with natural teeth.",
      beforeImage: "/implant-before-1.jpg",
      afterImage: "/implant-after-1.jpg",
      category: "Dental Implants",
      patientAge: "42 years",
      treatmentDuration: "4 months",
    },
    {
      id: "cosmetic-1",
      title: "Smile Transformation with Veneers",
      description:
        "This patient was unhappy with discolored and slightly misaligned front teeth. Six porcelain veneers created a bright, symmetrical smile while preserving natural tooth structure.",
      beforeImage: "/cosmetic-before-1.jpg",
      afterImage: "/cosmetic-after-1.jpg",
      category: "Cosmetic Dentistry",
      patientAge: "35 years",
      treatmentDuration: "2 weeks",
    },
    {
      id: "makeover-1",
      title: "Complete Smile Makeover",
      description:
        "This comprehensive case involved treating gum disease, replacing missing teeth with implants, and placing crowns on remaining teeth for a complete functional and aesthetic rehabilitation.",
      beforeImage: "/makeover-before-1.jpg",
      afterImage: "/makeover-after-1.jpg",
      category: "Smile Makeover",
      patientAge: "52 years",
      treatmentDuration: "6 months",
    },
  ]

  return (
    <BeforeAfterGallery
      title={`Smile Transformations at Our ${location} Clinic`}
      description={`See the real results our patients have achieved with our dental treatments in ${location}`}
      images={beforeAfterImages}
      location={location}
    />
  )
}
