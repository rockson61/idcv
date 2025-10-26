'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { Home, RefreshCw, AlertTriangle, Phone } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console for debugging
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <GlassCard className="p-12">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <AlertTriangle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Oops!</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Something Went Wrong</h2>
          <p className="text-lg text-gray-600 mb-8">
            We encountered an unexpected error. Our team has been notified and is working on a fix.
          </p>

          {/* Error Details (for development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
              <p className="text-sm font-mono text-red-900 break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-700 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-blue-600"
              onClick={() => reset()}
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Help Section */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Assistance?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/services"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all"
              >
                <p className="text-sm font-medium text-gray-900">Browse Services</p>
              </Link>
              <Link
                href="/contact"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all"
              >
                <p className="text-sm font-medium text-gray-900">Contact Us</p>
              </Link>
              <a
                href="tel:7010650063"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                <p className="text-sm font-medium text-gray-900">Call Now</p>
              </a>
            </div>
          </div>

          {/* Apology Note */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              We apologize for the inconvenience. If this problem persists, please{' '}
              <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-semibold underline">
                contact us
              </Link>{' '}
              and we'll help you right away.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
