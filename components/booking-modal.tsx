"use client"

import { useState } from "react"
import { X, Calendar } from "lucide-react"
import { BookingWidget } from "./booking-widget"

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button - Positioned on the bottom left now */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-gradient-dental text-white rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        aria-label="Book Appointment"
      >
        <Calendar className="h-5 w-5" />
        <span className="font-medium">Book Appointment</span>
      </button>

      {/* Modal with improved scrolling */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-dental-navy text-white rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/20 sticky top-0 bg-dental-navy z-10">
              <h3 className="text-xl font-bold text-dental-teal">Book Your Appointment</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-dental-teal transition-colors bg-dental-navy/90 hover:bg-dental-navy p-2 rounded-full"
                aria-label="Close booking modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <BookingWidget />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
