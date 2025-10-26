// Design System Tokens - Centralized Design Constants
// Based on comprehensive audit of 626 pages

export const designTokens = {
  // Brand Colors (Primary Palette)
  colors: {
    primary: {
      50: 'teal-50',
      100: 'teal-100',
      500: 'teal-500',
      600: 'teal-600',   // MAIN - 8,336 uses
      700: 'teal-700',
      800: 'teal-800',
      900: 'teal-900',
    },
    secondary: {
      50: 'blue-50',
      100: 'blue-100',
      500: 'blue-500',
      600: 'blue-600',    // Secondary action
      700: 'blue-700',
      800: 'blue-800',
    },
    accent: {
      yellow: 'yellow-400',  // Highlights, badges
      green: 'green-600',     // Success states
      red: 'red-600',         // Errors, urgent
      purple: 'purple-600',   // Special features
    },
    neutral: {
      50: 'gray-50',
      100: 'gray-100',
      500: 'gray-500',
      600: 'gray-600',
      700: 'gray-700',    // Body text - 7,041 uses
      900: 'gray-900',    // Headings - 7,080 uses
    },
  },

  // Typography Scale
  typography: {
    fontSize: {
      xs: 'text-xs',       // 272 uses - Labels, captions
      sm: 'text-sm',       // 7,270 uses - Secondary text, descriptions
      base: 'text-base',   // 60 uses - Default body
      lg: 'text-lg',       // 2,306 uses - Large body, intro text
      xl: 'text-xl',       // 1,079 uses - Section headers
      '2xl': 'text-2xl',   // 1,383 uses - Card titles
      '3xl': 'text-3xl',   // 3,810 uses - Page headings
      '4xl': 'text-4xl',   // 754 uses - Hero headlines
      '5xl': 'text-5xl',   // 550 uses - Major headlines
      '6xl': 'text-6xl',   // 26 uses - Extra large displays
    },
    fontWeight: {
      medium: 'font-medium',       // 2,426 uses - Emphasis
      semibold: 'font-semibold',   // 6,688 uses - Subheadings
      bold: 'font-bold',           // 6,716 uses - Headings, CTAs
      extrabold: 'font-extrabold', // 4 uses - Special emphasis
    },
    lineHeight: {
      tight: 'leading-tight',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
    },
  },

  // Spacing Scale (Consistent Padding/Margin)
  spacing: {
    section: {
      sm: 'py-8 px-4',
      md: 'py-12 px-4',
      lg: 'py-16 px-4',
      xl: 'py-24 px-4',
    },
    card: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-12',
    },
    gap: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
  },

  // Border Radius
  radius: {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  },

  // Shadows
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    none: 'shadow-none',
  },

  // Transitions
  transition: {
    default: 'transition-all duration-200',
    fast: 'transition-all duration-150',
    slow: 'transition-all duration-300',
    colors: 'transition-colors duration-200',
  },

  // Gradients (Brand Gradients)
  gradients: {
    primary: 'bg-gradient-to-r from-teal-600 to-blue-600',
    primaryLight: 'bg-gradient-to-r from-teal-50 to-blue-50',
    hero: 'bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50',
    card: 'bg-gradient-to-br from-white via-teal-50/30 to-blue-50/30',
  },

  // Component-Specific Tokens
  button: {
    primary: 'bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:from-teal-700 hover:to-blue-700',
    secondary: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
  },

  // Container Widths
  container: {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  },
}

// Accessibility Tokens
export const a11y = {
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2',
  srOnly: 'sr-only',
  skipLink: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white',
}

// Export helper functions
export function getColor(path: string): string {
  const keys = path.split('.')
  let value: any = designTokens.colors
  for (const key of keys) {
    value = value[key]
  }
  return value
}

export function getTypography(type: 'fontSize' | 'fontWeight', size: string): string {
  return designTokens.typography[type][size]
}

export default designTokens
