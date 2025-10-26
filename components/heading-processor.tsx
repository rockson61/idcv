"use client"

import { useEffect } from "react"
import { addHeadingIds } from "@/lib/heading-utils"

export function HeadingProcessor() {
  useEffect(() => {
    addHeadingIds()
  }, [])

  return null // This component doesn't render anything
}
