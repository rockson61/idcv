/*
  Recreate a broken service page from a safe standard template.
  Usage:
    node scripts/recreate-service-page.js app/services/<...>/page.tsx
*/

const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()

function toTitle(slug) {
  return slug
    .split('/')
    .filter(Boolean)
    .pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase())
}

function toSlug(filePath) {
  const parts = filePath.split(path.sep)
  // page.tsx is last; take folder name before it
  const idx = parts.lastIndexOf('page.tsx')
  const serviceFolder = parts[parts.length - 2]
  return serviceFolder || 'service'
}

function main() {
  const target = process.argv[2]
  if (!target) {
    console.error('Provide target page path, e.g.: app/services/dental-implants/all-on-4-implants/page.tsx')
    process.exit(1)
  }
  const abs = path.join(ROOT, target)
  const dir = path.dirname(abs)
  fs.mkdirSync(dir, { recursive: true })

  const serviceSlug = toSlug(target)
  const serviceName = toTitle(serviceSlug)

  const contents = `import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: '${serviceName} | Indira Dental Clinic',
  description: '${serviceName} at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="${serviceName}"
      serviceSlug="${serviceSlug}"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
`

  fs.writeFileSync(abs, contents, 'utf8')
  console.log('Recreated:', target)
}

main()


