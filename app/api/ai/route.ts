import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

export const runtime = "edge"

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const apiKey = process.env.GROQ_API_KEY

  if (!apiKey) {
    return new Response("GROQ_API_KEY is not set", {
      status: 500,
    })
  }

  const { text } = await generateText({
    model: groq("mixtral-8x7b-32768"),
    prompt: `You are a helpful assistant that provides information about dental clinics. Answer the following question: ${prompt}`,
  })
  return new Response(text)
}
