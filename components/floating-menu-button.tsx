"use client"

import { Menu } from "lucide-react"

interface FloatingMenuButtonProps {
  onClick: () => void
  isOpen: boolean
}

export function FloatingMenuButton({ onClick, isOpen }: FloatingMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 bg-dental-navy text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <Menu className="h-6 w-6" />
    </button>
  )
}
