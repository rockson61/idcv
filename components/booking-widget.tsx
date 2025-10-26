"use client"

import { useEffect, useRef } from "react"

export function BookingWidget() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create the script element
    const script = document.createElement("script")
    script.src = "https://book.dentaloffice.io/embed.js"
    script.async = true
    script.type = "text/javascript"

    // Append the script to the document
    document.body.appendChild(script)

    // Clean up on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div
      className="embedded-booking w-full rounded-lg overflow-visible shadow-lg border border-white/20"
      data-url="https://book.dentaloffice.io"
      data-query="&t=s&uuid=c8b9e16c-6126-42a0-a9fb-f8f5c9c507c4"
      data-lang="en"
      data-autoresize="1"
      data-showsidebar="1"
      style={{ minWidth: "320px", height: "700px" }}
      ref={containerRef}
    ></div>
  )
}
