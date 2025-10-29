"use client"

import type React from "react"

import { useState } from "react"
import { generateContent } from "@/lib/content-generator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Copy, Download, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContentGenerator() {
  const { toast } = useToast()
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")
  const [formData, setFormData] = useState({
    contentType: "dental-tourism",
    serviceName: "",
    targetLocation: "Vellore, Tamil Nadu",
    contentLength: "medium",
    includeKeywords: "",
    targetAudience: "general",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    try {
      const result = await generateContent(formData)
      if (result.success) {
        setGeneratedContent(result.content)
        toast({
          title: "Content generated successfully",
          description: "Your content is ready to use or edit.",
          variant: "default",
        })
      } else {
        toast({
          title: "Error generating content",
          description: result.error || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error generating content",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent)
    toast({
      title: "Copied to clipboard",
      description: "Content has been copied to your clipboard.",
      variant: "default",
    })
  }

  const downloadContent = () => {
    const element = document.createElement("a")
    const file = new Blob([generatedContent], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `${formData.contentType}-${formData.serviceName || "content"}.html`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dental Content Generator</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Generate Content</CardTitle>
            <CardDescription>
              Fill in the form to generate SEO-optimized content for your dental website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contentType">Content Type</Label>
                <Select
                  value={formData.contentType}
                  onValueChange={(value) => handleSelectChange("contentType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dental-tourism">Dental Tourism</SelectItem>
                    <SelectItem value="service-description">Service Description</SelectItem>
                    <SelectItem value="patient-faq">Patient FAQ</SelectItem>
                    <SelectItem value="procedure-steps">Procedure Steps</SelectItem>
                    <SelectItem value="benefits">Benefits</SelectItem>
                    <SelectItem value="aftercare">Aftercare Instructions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.contentType !== "dental-tourism" && (
                <div className="space-y-2">
                  <Label htmlFor="serviceName">Service Name</Label>
                  <Input
                    id="serviceName"
                    name="serviceName"
                    placeholder="e.g., Root Canal Treatment, Dental Implants"
                    value={formData.serviceName}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="targetLocation">Target Location</Label>
                <Input
                  id="targetLocation"
                  name="targetLocation"
                  placeholder="e.g., Vellore, Chennai, International"
                  value={formData.targetLocation}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contentLength">Content Length</Label>
                <Select
                  value={formData.contentLength}
                  onValueChange={(value) => handleSelectChange("contentLength", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select content length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (150-200 words)</SelectItem>
                    <SelectItem value="medium">Medium (300-400 words)</SelectItem>
                    <SelectItem value="long">Long (600-800 words)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="includeKeywords">Keywords to Include</Label>
                <Textarea
                  id="includeKeywords"
                  name="includeKeywords"
                  placeholder="e.g., affordable dental care, best dentist in Vellore, dental tourism India"
                  value={formData.includeKeywords}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetAudience">Target Audience</Label>
                <Select
                  value={formData.targetAudience}
                  onValueChange={(value) => handleSelectChange("targetAudience", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select target audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="international">International Patients</SelectItem>
                    <SelectItem value="elderly">Elderly Patients</SelectItem>
                    <SelectItem value="parents">Parents (Children's Dentistry)</SelectItem>
                    <SelectItem value="cosmetic">Cosmetic Dentistry Seekers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" disabled={isGenerating}>
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Content"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generated Content</CardTitle>
            <CardDescription>Preview, copy, or download your generated content</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="html">HTML</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                {generatedContent ? (
                  <div
                    className="border rounded-md p-4 h-[500px] overflow-y-auto prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: generatedContent }}
                  />
                ) : (
                  <div className="border rounded-md p-4 h-[500px] flex items-center justify-center text-gray-500">
                    Generated content will appear here
                  </div>
                )}
              </TabsContent>
              <TabsContent value="html">
                {generatedContent ? (
                  <Textarea className="h-[500px] font-mono text-sm" value={generatedContent} readOnly />
                ) : (
                  <div className="border rounded-md p-4 h-[500px] flex items-center justify-center text-gray-500">
                    Generated HTML will appear here
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="outline" size="sm" onClick={copyToClipboard} disabled={!generatedContent}>
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
            <Button variant="outline" size="sm" onClick={downloadContent} disabled={!generatedContent}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="default" size="sm" disabled={!generatedContent}>
              <Save className="h-4 w-4 mr-2" />
              Save to CMS
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
