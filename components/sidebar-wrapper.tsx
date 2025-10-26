"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { ModernSidebar } from "./modern-sidebar"

interface SidebarWrapperProps {
  children: React.ReactNode
}

export function SidebarWrapper({ children }: SidebarWrapperProps) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [pathname])

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (isHomePage) {
    return <main className="flex-1">{children}</main>
  }

  return (
    <div className="flex flex-1 relative">
      {/* Sidebar Toggle Button - only visible on mobile/tablet */}
      <button
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar - hidden on mobile by default */}
      <ModernSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-4xl mx-auto">{children}</main>
    </div>
  )
}
