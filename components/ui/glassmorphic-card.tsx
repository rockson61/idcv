import type React from "react"
import { cn } from "@/lib/utils"

interface GlassmorphicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function GlassmorphicCard({ children, className, ...props }: GlassmorphicCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/10",
        "bg-black/20 backdrop-blur-xl",
        "shadow-[0_8px_16px_rgb(0_0_0_/_0.4)]",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-b before:from-white/5 before:to-transparent",
        "transition-all duration-300 hover:shadow-[0_12px_24px_rgb(0_0_0_/_0.5)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
