import { Metadata } from 'next'

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'MedicalBusiness' | 'Service' | 'BreadcrumbList' | 'FAQ'
  data: Record<string, any>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    }

    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          name: 'Indira Dental Clinic',
          description: 'Premier dental clinic in Vellore offering comprehensive dental care services',
          url: 'https://www.dentalclinicinvellore.in',
          logo: 'https://www.dentalclinicinvellore.in/logo.png',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Gandhi Nagar',
            addressLocality: 'Vellore',
            addressRegion: 'Tamil Nadu',
            postalCode: '632001',
            addressCountry: 'IN'
          },
          telephone: '+917010650063',
          email: 'info@dentalclinicinvellore.in',
          sameAs: [
            'https://www.facebook.com/indiradentalclinic',
            'https://www.instagram.com/indiradentalclinic',
            'https://www.youtube.com/indiradentalclinic'
          ]
        }

      case 'LocalBusiness':
        return {
          ...baseData,
          name: 'Indira Dental Clinic',
          description: 'Leading dental clinic in Vellore providing comprehensive dental care services',
          url: 'https://www.dentalclinicinvellore.in',
          telephone: '+917010650063',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Gandhi Nagar',
            addressLocality: 'Vellore',
            addressRegion: 'Tamil Nadu',
            postalCode: '632001',
            addressCountry: 'IN'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '12.9165',
            longitude: '79.1325'
          },
          openingHours: [
            'Mo-Su 09:00-21:00'
          ],
          priceRange: '₹₹₹',
          paymentAccepted: 'Cash, Credit Card, UPI, Insurance'
        }

      case 'MedicalBusiness':
        return {
          ...baseData,
          name: 'Indira Dental Clinic',
          description: 'Professional dental clinic in Vellore offering specialized dental treatments',
          url: 'https://www.dentalclinicinvellore.in',
          telephone: '+917010650063',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Gandhi Nagar',
            addressLocality: 'Vellore',
            addressRegion: 'Tamil Nadu',
            postalCode: '632001',
            addressCountry: 'IN'
          },
          medicalSpecialty: 'Dentistry',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Dental Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'MedicalProcedure',
                  name: 'Root Canal Treatment'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'MedicalProcedure',
                  name: 'Dental Implants'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'MedicalProcedure',
                  name: 'Orthodontics'
                }
              }
            ]
          }
        }

      case 'Service':
        return {
          ...baseData,
          name: data.name || 'Dental Service',
          description: data.description || 'Professional dental service',
          provider: {
            '@type': 'MedicalBusiness',
            name: 'Indira Dental Clinic',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Gandhi Nagar',
              addressLocality: 'Vellore',
              addressRegion: 'Tamil Nadu',
              postalCode: '632001',
              addressCountry: 'IN'
            }
          },
          areaServed: {
            '@type': 'City',
            name: 'Vellore'
          }
        }

      case 'BreadcrumbList':
        return {
          ...baseData,
          itemListElement: data.items?.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          })) || []
        }

      case 'FAQ':
        return {
          ...baseData,
          mainEntity: data.questions?.map((q: any) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer
            }
          })) || []
        }

      default:
        return baseData
    }
  }

  const structuredData = getStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}

// SEO Component for pages
interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: string
  structuredData?: {
    type: StructuredDataProps['type']
    data: Record<string, any>
  }
}

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = 'https://www.dentalclinicinvellore.in/og-image.jpg',
  ogType = 'website',
  structuredData
}: SEOProps) {
  return (
    <>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <StructuredData 
          type={structuredData.type} 
          data={structuredData.data} 
        />
      )}
    </>
  )
}
