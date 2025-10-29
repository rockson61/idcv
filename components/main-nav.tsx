"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const mainNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about-us",
  },
  {
    title: "Services",
    megaMenu: [
      {
        category: "General Dentistry",
        items: [
          { name: "Dental Check-ups", href: "/services/general-dentistry/check-ups" },
          { name: "Teeth Cleaning", href: "/services/general-dentistry/teeth-cleaning" },
          { name: "Fillings", href: "/services/general-dentistry/fillings" },
          { name: "Emergency Care", href: "/services/general-dentistry/emergency-care" },
        ],
      },
      {
        category: "Specialized Treatments",
        items: [
          { name: "Root Canal Treatment", href: "/services/root-canal-treatment" },
          { name: "Dental Implants", href: "/services/dental-implants" },
          { name: "Invisalign", href: "/services/invisalign" },
          { name: "Orthodontics", href: "/services/orthodontics" },
          { name: "Periodontics", href: "/services/periodontics" },
        ],
      },
      {
        category: "Cosmetic Dentistry",
        items: [
          { name: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening" },
          { name: "Veneers", href: "/services/cosmetic-dentistry/veneers" },
          { name: "Dental Bonding", href: "/services/cosmetic-dentistry/bonding" },
          { name: "Smile Makeover", href: "/services/cosmetic-dentistry/smile-makeover" },
        ],
      },
    ],
  },
  {
    title: "Medical Tourism",
    href: "/medical-tourism",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export function MainNav() {
  const pathname = usePathname()
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {mainNavItems.map((item) => (
        <div key={item.href} className="relative">
          {item.megaMenu ? (
            <Button
              variant="ghost"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname.startsWith(item.href) ? "text-foreground" : "text-foreground/60",
              )}
              onClick={() => setOpenMegaMenu(openMegaMenu === item.title ? null : item.title)}
            >
              {item.title}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Link
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href ? "text-foreground" : "text-foreground/60",
              )}
            >
              {item.title}
            </Link>
          )}
          {item.megaMenu && openMegaMenu === item.title && (
            <div className="absolute left-0 mt-2 w-screen max-w-sm bg-background shadow-lg rounded-lg overflow-hidden z-50">
              <div className="grid grid-cols-1 gap-4 p-4">
                {item.megaMenu.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-2">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setOpenMegaMenu(null)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
