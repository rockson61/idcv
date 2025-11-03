/* Generate a focused report of missing REQUIRED components per service page */
const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const SERVICES_DIR = path.join(ROOT, 'app', 'services')
const OUTPUT = path.join(ROOT, 'SERVICE_PAGES_REQUIRED_MISSING.md')

const REQUIRED = [
  { key: 'Breadcrumb', patterns: ['<Breadcrumb', "from '@/components/breadcrumb'", 'from "@/components/breadcrumb"'] },
  { key: 'PageHeader', patterns: ['<PageHeader', "from '@/components/page-header'", 'from "@/components/page-header"'] },
  { key: 'ServiceSemanticContent', patterns: ['<ServiceSemanticContent'] },
  { key: 'CTAWidget', patterns: ['<CTAWidget', "from '@/components/widgets/cta-widget'", 'from "@/components/widgets/cta-widget"'] },
]

function collectPages(dir) {
  const out = []
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...collectPages(full))
    else if (e.isFile() && e.name === 'page.tsx') out.push(full)
  }
  return out
}

function hasAny(src, patterns) {
  return patterns.some((p) => src.includes(p))
}

function analyze(filePath) {
  const src = fs.readFileSync(filePath, 'utf8')
  const res = { file: path.relative(ROOT, filePath) }
  for (const r of REQUIRED) res[r.key] = hasAny(src, r.patterns)
  return res
}

function main() {
  const pages = collectPages(SERVICES_DIR)
  const rows = pages.map(analyze)

  const missingRows = rows.filter((r) => REQUIRED.some((k) => !r[k.key]))

  const lines = [
    '# Service Pages - Missing Required Components',
    '',
    `Total service pages: ${rows.length}`,
    `Pages missing at least one required: ${missingRows.length}`,
    '',
    'Required: Breadcrumb, PageHeader, ServiceSemanticContent, CTAWidget',
    '',
    '| file | Breadcrumb | PageHeader | ServiceSemanticContent | CTAWidget |',
    '| --- | --- | --- | --- | --- |',
  ]

  for (const r of missingRows.sort((a, b) => a.file.localeCompare(b.file))) {
    const v = (k) => (r[k] ? '✅' : '❌')
    lines.push(`| \`${r.file}\` | ${v('Breadcrumb')} | ${v('PageHeader')} | ${v('ServiceSemanticContent')} | ${v('CTAWidget')} |`)
  }

  fs.writeFileSync(OUTPUT, lines.join('\n') + '\n', 'utf8')
  console.log('Wrote', OUTPUT)
}

main()


