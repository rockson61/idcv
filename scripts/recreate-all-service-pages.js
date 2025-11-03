/*
  Regenerate ALL service pages from the StandardServiceLayout template.
  Creates minimal, consistent pages with required components and SEO metadata.
*/

const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const SERVICES_DIR = path.join(ROOT, 'app', 'services')

function toTitle(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
}

function collectPages(dir) {
  const out = []
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...collectPages(full))
    else if (e.isFile() && e.name === 'page.tsx') out.push(full)
  }
  return out
}

function recreate(filePath) {
  const dir = path.dirname(filePath)
  const serviceSlug = path.basename(dir)
  const serviceName = toTitle(serviceSlug)
  const rel = path.relative(ROOT, filePath)

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

  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(filePath, contents, 'utf8')
  return rel
}

function main() {
  const pages = collectPages(SERVICES_DIR)
  let changed = 0
  for (const p of pages) {
    recreate(p)
    changed++
  }
  console.log(`Regenerated ${changed} service pages.`)
}

main()


