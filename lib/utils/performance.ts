/**
 * Performance Monitoring Utilities
 * Helps track and optimize web performance metrics
 */

// Web Vitals types
export interface WebVitalsMetric {
  id: string
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP'
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
}

/**
 * Log Web Vitals metrics
 * Can be sent to analytics service in production
 */
export function logWebVitals(metric: WebVitalsMetric) {
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
    })
  }

  // In production, send to analytics
  if (process.env.NODE_ENV === 'production') {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      })
    }

    // Send to custom analytics endpoint
    const body = JSON.stringify(metric)
    const url = '/api/analytics/web-vitals'

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body)
    } else {
      fetch(url, { body, method: 'POST', keepalive: true }).catch(console.error)
    }
  }
}

/**
 * Report performance metrics
 */
export function reportPerformance(metric: { name: string; value: number }) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${metric.name}: ${metric.value}ms`)
  }
}

/**
 * Measure component render time
 */
export function measureRenderTime(componentName: string): () => void {
  const startTime = performance.now()

  return () => {
    const endTime = performance.now()
    const renderTime = endTime - startTime
    
    if (process.env.NODE_ENV === 'development' && renderTime > 16) {
      console.warn(`[Performance Warning] ${componentName} took ${renderTime.toFixed(2)}ms to render (> 16ms)`)
    }
  }
}

/**
 * Check if page should be statically generated
 */
export function shouldStaticGenerate(path: string): boolean {
  const staticPaths = [
    '/',
    '/about-us',
    '/contact',
    '/services',
    '/pricing',
    '/faq',
    '/blog',
  ]
  
  return staticPaths.includes(path) || 
         path.startsWith('/services/') ||
         path.startsWith('/in/') ||
         path.startsWith('/ask-the-dentist/')
}

/**
 * Prefetch important routes
 */
export function prefetchCriticalRoutes() {
  if (typeof window !== 'undefined') {
    const criticalRoutes = [
      '/services',
      '/contact',
      '/services/dental-implants',
      '/services/root-canal-treatment',
      '/pricing',
    ]

    // Prefetch after initial load
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        criticalRoutes.forEach((route) => {
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.href = route
          document.head.appendChild(link)
        })
      })
    }
  }
}

/**
 * Monitor long tasks (> 50ms)
 */
export function monitorLongTasks() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('[Performance] Long task detected:', {
              duration: entry.duration,
              startTime: entry.startTime,
            })
          }
        }
      })

      observer.observe({ entryTypes: ['longtask'] })
    } catch (e) {
      // PerformanceObserver may not be supported
    }
  }
}

/**
 * Get page load performance metrics
 */
export function getPageLoadMetrics() {
  if (typeof window === 'undefined') return null

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  
  if (!navigation) return null

  return {
    dns: navigation.domainLookupEnd - navigation.domainLookupStart,
    tcp: navigation.connectEnd - navigation.connectStart,
    ttfb: navigation.responseStart - navigation.requestStart,
    download: navigation.responseEnd - navigation.responseStart,
    domInteractive: navigation.domInteractive - navigation.fetchStart,
    domComplete: navigation.domComplete - navigation.fetchStart,
    loadComplete: navigation.loadEventEnd - navigation.fetchStart,
  }
}

/**
 * Calculate performance score
 */
export function calculatePerformanceScore(metrics: {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
}): number {
  let score = 100

  // LCP (Largest Contentful Paint)
  if (metrics.lcp) {
    if (metrics.lcp > 4000) score -= 30
    else if (metrics.lcp > 2500) score -= 15
  }

  // FID (First Input Delay)
  if (metrics.fid) {
    if (metrics.fid > 300) score -= 20
    else if (metrics.fid > 100) score -= 10
  }

  // CLS (Cumulative Layout Shift)
  if (metrics.cls) {
    if (metrics.cls > 0.25) score -= 25
    else if (metrics.cls > 0.1) score -= 12
  }

  // FCP (First Contentful Paint)
  if (metrics.fcp) {
    if (metrics.fcp > 3000) score -= 15
    else if (metrics.fcp > 1800) score -= 7
  }

  // TTFB (Time to First Byte)
  if (metrics.ttfb) {
    if (metrics.ttfb > 800) score -= 10
    else if (metrics.ttfb > 600) score -= 5
  }

  return Math.max(0, score)
}

/**
 * Export utilities for use in layout
 */
export const performanceUtils = {
  logWebVitals,
  reportPerformance,
  measureRenderTime,
  shouldStaticGenerate,
  prefetchCriticalRoutes,
  monitorLongTasks,
  getPageLoadMetrics,
  calculatePerformanceScore,
}

