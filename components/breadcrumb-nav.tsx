"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Treatments", href: "#treatments" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
]

export function BreadcrumbNav() {
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <nav className="w-full overflow-x-auto py-4 px-4 bg-gradient-to-r from-background/50 to-background/30 backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="flex gap-2 items-center min-w-max">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-200",
                "text-sm font-medium",
                "border border-white/10 backdrop-blur-md",
                "hover:bg-primary/20",
                activeItem === item.name ? "bg-white/10 text-primary shadow-lg" : "bg-black/20 text-muted-foreground",
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
