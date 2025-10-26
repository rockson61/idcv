// Refined typography system for elegant readability
export const typography = {
  // Body text
  small: "text-sm leading-relaxed text-gray-600", // 14px - captions, meta
  base: "text-base leading-relaxed text-gray-900", // 16px - main body

  // Headings - reduced sizes for elegance
  h1: "text-3xl md:text-4xl font-bold leading-tight text-gray-900", // 30-36px
  h2: "text-2xl md:text-3xl font-bold leading-tight text-gray-900", // 24-30px
  h3: "text-xl font-bold leading-tight text-gray-900", // 20px

  // Special text
  gradient: "bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-bold",
  muted: "text-gray-600",

  // Light on dark
  lightText: "text-white",
  lightMuted: "text-white/80",
} as const

// Consistent spacing
export const spacing = {
  section: "py-16 md:py-20",
  container: "px-4 md:px-6 lg:px-8 max-w-7xl mx-auto",
} as const
