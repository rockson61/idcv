/*
  Apply StandardServiceLayout to all service pages safely.
  - Adds import for StandardServiceLayout
  - Appends a standardized section rendering the layout at the end of the page
  - Derives serviceName and serviceSlug from path
  - Skips if layout already present
  Backups are already made by the previous standardization step; this keeps edits minimal.
*/

const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const SERVICES_DIR = path.join(ROOT, 'app', 'services')

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
  const rel = path.relative(SERVICES_DIR, filePath)
  const segs = rel.split(path.sep).filter(Boolean)
  const last = segs[segs.length - 2] || 'service'
  const serviceSlug = last
  const serviceName = last.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
  return { serviceSlug, serviceName }
}

function upsertImport(src, named, fromPath) {
  if (new RegExp(`from ['\"]${fromPath}['\"]`).test(src)) return src
  const lines = src.split('\n')
  const firstImportIdx = lines.findIndex((l) => /^import\s/.test(l))
  const stmt = `import { ${named} } from '${fromPath}'`
  if (firstImportIdx >= 0) lines.splice(firstImportIdx + 1, 0, stmt)
  else lines.unshift(stmt)
  return lines.join('\n')
}

function applyLayout(filePath) {
  const original = fs.readFileSync(filePath, 'utf8')
  if (/StandardServiceLayout/.test(original)) return false
  let src = original

  src = upsertImport(src, 'StandardServiceLayout', '@/components/service/StandardServiceLayout')

  const { serviceName, serviceSlug } = deriveServiceFromPath(filePath)

  const layoutBlock = `\n\t\t<StandardServiceLayout serviceName="${serviceName}" serviceSlug="${serviceSlug}" showPriceComparison={false} />\n`

  // Append before closing return body
  if (/return \(/.test(src)) {
    src = src.replace(/\)\s*;?\s*\}\s*$/, (m) => `${layoutBlock}${m}`)
  } else {
    src += `\n${layoutBlock}\n`
  }

  if (src !== original) {
    fs.writeFileSync(filePath, src, 'utf8')
    return true
  }
  return false
}

function main() {
  const pages = collectPages(SERVICES_DIR)
  let changed = 0
  for (const p of pages) if (applyLayout(p)) changed++
  console.log(`Applied StandardServiceLayout to ${changed}/${pages.length} service pages.`)
}

main()


