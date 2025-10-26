import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { Home, Search, Phone, ArrowLeft, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Indira Dental Clinic',
  description: 'The page you are looking for could not be found. Explore our dental services or contact us for assistance.',
}

export default function NotFound() {
  const popularPages = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'All Services', href: '/services', icon: Search },
    { name: 'Root Canal Treatment', href: '/services/root-canal-treatment', icon: Search },
    { name: 'Dental Implants', href: '/services/dental-implants', icon: Search },
    { name: 'Contact Us', href: '/contact', icon: Phone },
    { name: 'Ask the Dentist', href: '/ask-the-dentist', icon: Search },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <GlassCard className="p-12">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <AlertCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for seems to have wandered off. 
            Don't worry, your dental health journey continues here!
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600" asChild>
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                <Search className="w-5 h-5 mr-2" />
                Browse Services
              </Link>
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Popular Pages:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {popularPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all group"
                >
                  <page.icon className="w-5 h-5 text-teal-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-gray-900">{page.name}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              Need help finding something?{' '}
              <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-semibold underline">
                Contact us
              </Link>{' '}
              or call{' '}
              <a href="tel:7010650063" className="text-teal-600 hover:text-teal-700 font-semibold underline">
                7010650063
              </a>
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
