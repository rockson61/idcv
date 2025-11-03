/*
  Standardize all service pages to include required components safely.
  - Creates backups under .archive/backups/service-pages/<relative path>
  - Ensures imports for Breadcrumb, PageHeader, ServiceSemanticContent, CTAWidget
  - Ensures JSX usage for Breadcrumb, PageHeader, ServiceSemanticContent, CTAWidget
  - Derives serviceName and serviceSlug from path when needed
*/

const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const SERVICES_DIR = path.join(ROOT, 'app', 'services')
const BACKUP_DIR = path.join(ROOT, '.archive', 'backups', 'service-pages')

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
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

function deriveServiceFromPath(filePath) {
  const rel = path.relative(SERVICES_DIR, filePath) // e.g., restorative-dentistry/dental-bridges/page.tsx
  const segments = rel.split(path.sep).filter(Boolean)
  const last = segments[segments.length - 2] || 'service'
  const serviceSlug = last
  // Generate readable name
  const serviceName = last
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase())
  return { serviceSlug, serviceName }
}

function upsertImport(src, symbol, fromPath) {
  const importRegex = new RegExp(`from ['\"]${fromPath}['\"]`)
  if (importRegex.test(src)) return src
  // Add named import at top after first import
  const lines = src.split('\n')
  const firstImportIdx = lines.findIndex((l) => /^import\s/.test(l))
  const statement = `import { ${symbol} } from '${fromPath}'`
  if (firstImportIdx >= 0) {
    lines.splice(firstImportIdx + 1, 0, statement)
  } else {
    lines.unshift(statement)
  }
  return lines.join('\n')
}

function ensureRequiredImports(src) {
  let out = src
  out = upsertImport(out, 'Breadcrumb', '@/components/breadcrumb')
  out = upsertImport(out, 'PageHeader', '@/components/page-header')
  out = upsertImport(out, 'ServiceSemanticContent', '@/components/service-content-template')
  out = upsertImport(out, 'CTAWidget', '@/components/widgets/cta-widget')
  return out
}

function injectAfter(container, markerRegex, block) {
  const idx = container.search(markerRegex)
  if (idx === -1) return null
  // find line break after match and insert
  const before = container.slice(0, idx + container.match(markerRegex)[0].length)
  const after = container.slice(idx + container.match(markerRegex)[0].length)
  return before + '\n' + block + '\n' + after
}

function ensureJSXUsage(src, filePath) {
  let out = src
  const { serviceName, serviceSlug } = deriveServiceFromPath(filePath)

  // Breadcrumb presence
  if (!/<Breadcrumb[\s>]/.test(out)) {
    // try to inject inside main container
    const injected = injectAfter(out, /<div[^>]*className=.*container.*>/, `\t\t<Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: '${serviceName}' }]} />`)
    if (injected) out = injected
    else out = out.replace(/return \(/, `return (\n\t\t<Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: '${serviceName}' }]} />`)
  }

  // PageHeader presence
  if (!/<PageHeader[\s>]/.test(out)) {
    const headerBlock = `\t\t<PageHeader title="${serviceName}" subtitle="Expert care with modern technology" />`
    const injected = injectAfter(out, /<Breadcrumb[\s\S]*?>[\s\S]*?<\/Breadcrumb>|<Breadcrumb[\s>]/, headerBlock)
    out = injected || out.replace(/<Breadcrumb[\s\S]*?\/>/, (m) => m + '\n' + headerBlock)
    if (out === src) {
      // fallback: add near top after opening container
      const fallback = injectAfter(out, /<div[^>]*className=.*container.*>/, headerBlock)
      if (fallback) out = fallback
    }
  }

  // ServiceSemanticContent presence
  if (!/<ServiceSemanticContent[\s>]/.test(out)) {
    const semanticBlock = `\t\t<SectionContainer className="py-12">\n\t\t\t<ServiceSemanticContent serviceName="${serviceName}" serviceSlug="${serviceSlug}" />\n\t\t</SectionContainer>`
    // ensure SectionContainer import if we inject it
    if (!/from ['\"]@\/components\/ui\/section-container['\"]/.test(out)) {
      out = upsertImport(out, 'SectionContainer', '@/components/ui/section-container')
    }
    const injected = injectAfter(out, /<main|<div[^>]*>/, semanticBlock)
    out = injected || (out + '\n' + semanticBlock + '\n')
  }

  // CTAWidget presence
  if (!/<CTAWidget[\s>]/.test(out)) {
    const ctaBlock = `\t\t<CTAWidget title={` + '`' + `Book ${serviceName}` + '`' + `} description="Get expert dental care from our team" primaryAction={{ text: 'Book Appointment', href: '/contact' }} secondaryAction={{ text: 'Call Now', href: 'tel:+917010650063' }} showRating showAvailability />`
    out = out.replace(/\)\s*;?\s*\}\s*$/, (m) => `\n${ctaBlock}\n${m}`)
  }

  return out
}

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8')
  let next = original
  next = ensureRequiredImports(next)
  next = ensureJSXUsage(next, filePath)

  if (next !== original) {
    // backup
    const rel = path.relative(ROOT, filePath)
    const backupPath = path.join(BACKUP_DIR, rel)
    ensureDir(path.dirname(backupPath))
    ensureDir(path.dirname(filePath))
    fs.writeFileSync(backupPath, original, 'utf8')
    fs.writeFileSync(filePath, next, 'utf8')
    return { file: rel, changed: true }
  }
  return { file: path.relative(ROOT, filePath), changed: false }
}

function main() {
  ensureDir(BACKUP_DIR)
  const pages = collectPages(SERVICES_DIR)
  const results = pages.map(processFile)
  const changed = results.filter((r) => r.changed)
  console.log(`Processed ${results.length} service pages. Updated ${changed.length}.`)
}

main()


