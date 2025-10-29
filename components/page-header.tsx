import type React from "react"
import { cn } from "@/lib/utils"
import { Breadcrumb } from "@/components/breadcrumb"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  children?: React.ReactNode
  breadcrumb?: { title: string; href: string }[]
}

export function PageHeader({ heading, children, breadcrumb, className, ...props }: PageHeaderProps) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {breadcrumb && <Breadcrumb items={breadcrumb} />}
      <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
      {children}
    </div>
  )
}
