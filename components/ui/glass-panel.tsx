import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const glassPanelVariants = cva("relative overflow-hidden backdrop-blur-xl border shadow-2xl", {
  variants: {
    variant: {
      default: "bg-white/20 border-white/30 rounded-2xl",
      card: "bg-white/10 border-white/20 rounded-2xl",
      premium: "bg-white/30 border-white/40 rounded-2xl",
      subtle: "bg-white/5 border-white/10 rounded-xl",
    },
    size: {
      default: "p-6",
      sm: "p-4",
      lg: "p-8",
      xl: "p-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface GlassPanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassPanelVariants> {}

const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div className={cn(glassPanelVariants({ variant, size, className }))} ref={ref} {...props}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        {children}
      </div>
    )
  },
)
GlassPanel.displayName = "GlassPanel"

export { GlassPanel, glassPanelVariants }
