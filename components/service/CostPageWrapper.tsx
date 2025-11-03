'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const StandardServiceLayout = dynamic(
  () => import('@/components/service/StandardServiceLayout').then(mod => ({ default: mod.StandardServiceLayout })),
  { 
    ssr: false,
    loading: () => <div className="container mx-auto px-4 py-8"><div className="animate-pulse">Loading...</div></div>
  }
)

interface CostPageWrapperProps {
  serviceName: string
  serviceSlug: string
  title: string
  description: string
}

export function CostPageWrapper({ serviceName, serviceSlug, title, description }: CostPageWrapperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.title = title
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }
  }, [title, description])

  if (!mounted) {
    return <div className="container mx-auto px-4 py-8"><div className="animate-pulse">Loading...</div></div>
  }

  return (
    <StandardServiceLayout
      serviceName={serviceName}
      serviceSlug={serviceSlug}
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}

