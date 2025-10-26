import type React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  background?: "white" | "gradient" | "gray"
  padding?: "sm" | "md" | "lg"
}

export function SectionContainer({ children, className, background = "white", padding = "lg" }: SectionContainerProps) {
  const backgrounds = {
    white: "bg-white",
    gradient: "bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50",
    gray: "bg-gray-50",
  }

  const paddings = {
    sm: "py-12",
    md: "py-16",
    lg: "py-16 lg:py-24",
  }

  return (
    <section className={cn(backgrounds[background], paddings[padding], className)}>
      <div className="container-custom">{children}</div>
    </section>
  )
}
