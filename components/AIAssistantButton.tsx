"use client"

import type React from "react"
import { useEffect } from "react"

const AIAssistantButton: React.FC = () => {
  useEffect(() => {
    const assistant = "ffd0e139-2928-4b85-8379-ac26bbe7e50e"
    const apiKey = "e0a8aebd-b332-4a75-940e-fe2e0b8efeba"
    const buttonConfig = { buttonPosition: "bottom-right" }

    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"
    script.defer = true
    script.async = true

    script.onload = () => {
      ;(window as any).vapiSDK.run({
        apiKey: apiKey,
        assistant: assistant,
        config: buttonConfig,
      })
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}

export default AIAssistantButton
