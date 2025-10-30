/*
  Scan all service pages and produce a markdown report of component usage per page.
  Output: SERVICE_PAGES_COMPONENT_AUDIT.md at repo root
*/

const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const SERVICES_DIR = path.join(ROOT, 'app', 'services')
const OUTPUT = path.join(ROOT, 'SERVICE_PAGES_COMPONENT_AUDIT.md')

/** Components to check */
const CHECKS = [
  { key: 'Breadcrumb', patterns: ['<Breadcrumb', "from '@/components/breadcrumb'", 'from "@/components/breadcrumb"', 'StandardServiceLayout'] },
  { key: 'PageHeader', patterns: ['<PageHeader', "from '@/components/page-header'", 'from "@/components/page-header"', 'StandardServiceLayout'] },
  { key: 'ServiceSemanticContent', patterns: ['<ServiceSemanticContent', 'StandardServiceLayout'] },
  { key: 'CTAWidget', patterns: ['<CTAWidget', "from '@/components/widgets/cta-widget'", 'from "@/components/widgets/cta-widget"', 'StandardServiceLayout'] },
  // Recommended
  { key: 'RelevantQAWidget', patterns: ['<RelevantQAWidget', 'StandardServiceLayout'] },
  { key: 'CompactServiceWidgetOrRelated', patterns: ['<CompactServiceWidget', '<RelatedServices', 'Related Services', '<ServicesOverview', '<service-cards', '<ServiceCards', 'StandardServiceLayout'] },
  { key: 'PeopleAlsoSearchFor', patterns: ['<PeopleAlsoSearchFor', 'StandardServiceLayout'] },
  // Count PriceComparisonTable as present if explicitly used OR via StandardServiceLayout
  { key: 'PriceComparisonTable', patterns: ['<PriceComparisonTable', 'StandardServiceLayout'] },
]

/** Recursively collect all page.tsx files under app/services */
function collectServicePages(dir) {
  const results = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      results.push(...collectServicePages(full))
    } else if (e.isFile() && e.name === 'page.tsx') {
      results.push(full)
    }
  }
  return results
}

function analyzeFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8')
  const info = { file: path.relative(ROOT, filePath) }
  for (const c of CHECKS) {
    info[c.key] = c.patterns.some((p) => src.includes(p))
  }
  return info
}

function main() {
  if (!fs.existsSync(SERVICES_DIR)) {
    console.error('Services directory not found:', SERVICES_DIR)
    process.exit(1)
  }

  const pages = collectServicePages(SERVICES_DIR)
  const rows = pages.map(analyzeFile)

  const header = [
    '# Service Pages Component Audit',
    '',
    `Scanned: ${rows.length} service pages`,
    '',
    'Legend: ✅ present, ❌ missing',
    '',
  ]

  const columns = ['file', ...CHECKS.map((c) => c.key)]
  const tableHeader = `| ${columns.join(' | ')} |\n| ${columns.map(() => '---').join(' | ')} |`

  const tableRows = rows
    .sort((a, b) => a.file.localeCompare(b.file))
    .map((r) => {
      const vals = columns.map((col) => {
        if (col === 'file') return '`' + r.file + '`'
        return r[col] ? '✅' : '❌'
      })
      return `| ${vals.join(' | ')} |`
    })

  const missingSummary = (() => {
    const counts = {}
    for (const c of CHECKS) counts[c.key] = 0
    for (const r of rows) {
      for (const c of CHECKS) {
        if (!r[c.key]) counts[c.key]++
      }
    }
    const lines = ['\n## Missing Summary', '']
    for (const c of CHECKS) {
      lines.push(`- ${c.key}: ${counts[c.key]} pages missing`)
    }
    return lines
  })()

  const content = [
    ...header,
    tableHeader,
    ...tableRows,
    ...missingSummary,
    '\n',
  ].join('\n')

  fs.writeFileSync(OUTPUT, content, 'utf8')
  console.log('Wrote', OUTPUT)
}

main()


