"use server"

import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

type ContentType =
  | "dental-tourism"
  | "service-description"
  | "patient-faq"
  | "procedure-steps"
  | "benefits"
  | "aftercare"

interface GenerateContentProps {
  contentType: ContentType
  serviceName?: string
  targetLocation?: string
  contentLength?: "short" | "medium" | "long"
  includeKeywords?: string
  targetAudience?: string
}

export async function generateContent({
  contentType,
  serviceName = "",
  targetLocation = "Vellore, Tamil Nadu",
  contentLength = "medium",
  includeKeywords = "",
  targetAudience = "general",
}: GenerateContentProps) {
  // Check if API key is available
  if (!process.env.GROQ_API_KEY) {
    // Return fallback content if no API key
    return {
      success: true,
      content: `<p>${serviceName || 'Dental treatment'} is expertly performed at Indira Dental Clinic by Dr. Rockson Samuel with over 15 years of experience. Our clinic uses advanced technology and follows the highest standards of care to ensure optimal results for our patients.</p>`,
    }
  }

  try {
    // Define length parameters
    const lengthMap = {
      short: "150-200 words",
      medium: "300-400 words",
      long: "600-800 words",
    }

    // Build the prompt based on content type
    let prompt = ""
    const basePrompt = `Write ${lengthMap[contentLength]} of SEO-optimized content for a dental clinic website. `

    switch (contentType) {
      case "dental-tourism":
        prompt = `${basePrompt}Create compelling dental tourism content for patients from ${targetLocation} considering traveling to Indira Dental Clinic in Vellore, Tamil Nadu for dental treatment. 
        Highlight the cost benefits, quality of care, credentials of Dr. Rockson Samuel, and the convenience of travel. 
        Include information about accommodation options, local attractions, and transportation. 
        Address common concerns about dental tourism and explain why Vellore is an excellent destination for dental care.
        ${includeKeywords ? `Include these keywords naturally: ${includeKeywords}.` : ""}
        Target audience: ${targetAudience}.`
        break

      case "service-description":
        prompt = `${basePrompt}Create a detailed description of ${serviceName} service offered at Indira Dental Clinic in Vellore. 
        Explain what the procedure involves, when it's needed, and the benefits. 
        Highlight Dr. Rockson Samuel's expertise in this area and the advanced technology used at the clinic.
        Include pricing information if relevant and mention any special offers.
        ${includeKeywords ? `Include these keywords naturally: ${includeKeywords}.` : ""}
        Target audience: ${targetAudience}.`
        break

      case "patient-faq":
        prompt = `${basePrompt}Generate a comprehensive FAQ section about ${serviceName || "dental treatments"} at Indira Dental Clinic. 
        Include 5-8 common questions and detailed answers that patients typically ask.
        Address concerns about pain, recovery, cost, insurance, and results.
        ${includeKeywords ? `Include these keywords naturally: ${includeKeywords}.` : ""}
        Target audience: ${targetAudience}.`
        break

      case "procedure-steps":
        prompt = `${basePrompt}Create a step-by-step explanation of the ${serviceName} procedure at Indira Dental Clinic. 
        Include information about preparation, what happens during the procedure, and recovery.
        Use simple language that patients can understand while maintaining medical accuracy.
        ${includeKeywords ? `Include these keywords naturally: ${includeKeywords}.` : ""}
        Target audience: ${targetAudience}.`
        break

      case "benefits":
        prompt = `${basePrompt}Write about the benefits of ${serviceName || "dental treatments"} at Indira Dental Clinic in Vellore. 
        Highlight both aesthetic and health benefits, long-term advantages, and quality of life improvements.
        Compare with alternatives if relevant and explain why this option might be preferable.
        ${includeKeywords ? `Include these keywords naturally: ${includeKeywords}.` : ""}
        Target audience: ${targetAudience}.`
        break

      case "aftercare":
        prompt = `${basePrompt}Create detailed aftercare instructions for patients who have undergone ${serviceName} at Indira Dental Clinic. 
        Include information about pain management, diet restrictions, oral hygiene, follow-up appointments, and when to contact the clinic.
        Provide a timeline for recovery and when patients can expect to see final results.
        ${includeKeywords ? `Include these keywords naturally: ${includeKeywords}.` : ""}
        Target audience: ${targetAudience}.`
        break

      default:
        prompt = `${basePrompt}Create general content about dental services at Indira Dental Clinic in Vellore, highlighting the expertise of Dr. Rockson Samuel and the quality of care provided.
        ${includeKeywords ? `Include these keywords naturally: ${includeKeywords}.` : ""}
        Target audience: ${targetAudience}.`
    }

    // Add SEO instructions to all prompts
    prompt += `
    
    Follow these SEO guidelines:
    1. Include the primary keyword in the first 100 words
    2. Use semantic keywords naturally throughout
    3. Create scannable content with appropriate subheadings
    4. Include a compelling call-to-action
    5. Optimize for featured snippets where possible
    6. Use location-specific terms where appropriate
    7. Format the content with HTML tags like <h2>, <h3>, <p>, <ul>, <li> for proper structure
    
    The content should be factual, professional, and persuasive without being overly promotional.`

    // Generate content using Groq
    const { text } = await generateText({
      model: groq("mixtral-8x7b-32768"),
      prompt,
      temperature: 0.7,
      maxTokens: 2048,
    })

    return { success: true, content: text }
  } catch (error) {
    console.error("Error generating content:", error)
    return {
      success: false,
      content: "Failed to generate content. Please try again later.",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
