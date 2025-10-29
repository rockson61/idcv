import type { ReactNode, ElementType } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Container({ children, className = "", as: Component = "div" }: ContainerProps) {
  return <Component className={`container mx-auto px-4 ${className}`}>{children}</Component>
}
