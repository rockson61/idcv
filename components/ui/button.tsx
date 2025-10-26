import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-theme-primary text-white hover:bg-red-700 hover:shadow-lg hover:shadow-theme-primary/30 hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-theme-primary text-theme-primary bg-transparent hover:bg-theme-primary hover:text-white hover:shadow-lg hover:shadow-theme-primary/30 hover:-translate-y-0.5",
        secondary:
          "bg-theme-panel text-theme-text-primary hover:bg-theme-panel/80 hover:shadow-lg hover:-translate-y-0.5 border border-theme-border",
        ghost: "text-theme-text-primary hover:bg-theme-panel/50 hover:text-theme-primary",
        link: "text-theme-primary underline-offset-4 hover:underline",
        glass:
          "bg-theme-panel/80 backdrop-blur-md border border-theme-border text-theme-text-primary hover:bg-theme-panel hover:shadow-lg hover:shadow-theme-primary/20 hover:-translate-y-0.5",
        gradient:
          "bg-gradient-to-r from-theme-primary to-red-500 text-white hover:from-red-700 hover:to-red-600 hover:shadow-lg hover:shadow-theme-primary/40 hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-12 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
