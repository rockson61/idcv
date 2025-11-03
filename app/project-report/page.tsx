import type { Metadata } from 'next'

const projectStats = [
  {
    label: 'Total Next.js pages',
    value: '2,397',
    context: 'Includes location, service, blog, FAQ, and utility routes rendered as page.tsx files.',
  },
  {
    label: 'Location landing pages',
    value: '1,518',
    context: 'Coverage across Indian states and territories under `app/in` (Tamil Nadu alone contributes 1,090 entries).',
  },
  {
    label: 'Service-focused pages',
    value: '377',
    context: 'Specialty, cost, and treatment details within `app/services`.',
  },
  {
    label: 'Central React components',
    value: '211',
    context: 'UI and feature modules located in `/components` (excluding app directory components).',
  },
]

const appDirectorySummary = [
  { path: 'app/blog', count: '433 .tsx files', purpose: 'Long-form editorial and SEO content.' },
  { path: 'app/in', count: '1,518 .tsx files', purpose: 'Location landing pages for cities, districts, and states.' },
  { path: 'app/services', count: '377 .tsx files', purpose: 'Service, treatment, and pricing microsites.' },
  { path: 'app/conditions', count: '31 condition pages', purpose: 'Patient education on dental conditions.' },
  { path: 'app/ask-the-dentist', count: 'Q&A hub (dynamic + static routes)', purpose: 'Interactive patient question workflows.' },
  { path: 'app/pricing', count: 'Core pricing hub + metro-specific breakdowns', purpose: 'Transparent pricing tables and comparisons.' },
  { path: 'app/international-patients', count: '4 dedicated flows', purpose: 'Travel, accommodation, and package guidance for global patients.' },
]

const componentHighlights = [
  { group: 'UI primitives', location: 'components/ui', details: '23 reusable cards, buttons, typography, and layout utilities.' },
  { group: 'Widgets & sections', location: 'components/sections & components/widgets', details: 'Landing page hero blocks, pricing CTAs, testimonials, and semantic content modules.' },
  { group: 'Location framework', location: 'components/location', details: 'Price comparison, schema, FAQ, and nearby location widgets.' },
  { group: 'Service experience', location: 'components/service', details: 'Standard layouts, related services, and cross-link helpers.' },
  { group: 'Ask the Dentist', location: 'components/ask-dentist', details: 'Question detail views, reply threads, and schema generators.' },
]

const runtimeDependencies = [
  '@ai-sdk/groq',
  '@ai-sdk/openai',
  '@googlemaps/js-api-loader',
  '@radix-ui/react-* (suite of headless UI primitives)',
  '@vercel/analytics',
  'ai',
  'class-variance-authority',
  'clsx',
  'cmdk',
  'framer-motion',
  'lucide-react',
  'next ^15.5.6',
  'next-seo',
  'next-sitemap',
  'next-themes',
  'react ^19.0.0 & react-dom',
  'react-hook-form',
  'react-intersection-observer',
  'react-wrap-balancer',
  'tailwind-merge',
  'tailwindcss-animate',
  'turndown',
  'tw-animate-css',
  'zod',
]

const devDependencies = [
  '@hookform/resolvers',
  '@tailwindcss/postcss',
  '@types/node',
  '@types/react & @types/react-dom',
  'autoprefixer',
  'eslint & eslint-config-next',
  'postcss',
  'prettier & prettier-plugin-tailwindcss',
  'tailwindcss ^4.1.0',
  'typescript ^5.7.2',
]

const npmScripts = [
  { script: 'pnpm dev', description: 'Start the Next.js dev server with Turbopack (recommended for local iteration).' },
  { script: 'pnpm run build', description: 'Create an optimized production build (SSG + pre-rendered pages).' },
  { script: 'pnpm start', description: 'Serve the production build locally after running `pnpm run build`.' },
  { script: 'pnpm lint', description: 'Run ESLint with the Next.js shareable config.' },
  { script: 'pnpm type-check', description: 'Validate the project with TypeScript without emitting artifacts.' },
  { script: 'pnpm format', description: 'Apply Prettier (with Tailwind plugin) formatting across the workspace.' },
]

const localHostingSteps = [
  'Install dependencies: `pnpm install` (or `npm install` if pnpm is unavailable).',
  'Generate the static build: `pnpm run build`.',
  'Launch the local production server: `pnpm start` (defaults to http://localhost:3000).',
  'Navigate to http://localhost:3000/project-report to view this report alongside the rest of the site.',
  'For iterative development, swap steps 2–3 with `pnpm dev` to leverage hot module reloading.',
]

export const metadata: Metadata = {
  title: 'Project Report | Indira Dental Clinic Platform',
  description:
    'Comprehensive overview of the Indira Dental Clinic Next.js platform, covering directory structure, component architecture, dependencies, and local hosting guidance.',
}

export default function ProjectReportPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12">
      <header className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">Project Documentation</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Indira Dental Clinic Platform Overview</h1>
        <p className="mt-4 text-lg text-slate-600">
          This report captures the current footprint of the Indira Dental Clinic marketing and patient-acquisition
          platform. It aggregates structural metrics, highlights reusable component layers, lists runtime dependencies,
          and documents the scripts required to operate the project locally.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900">Key Stats</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projectStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-teal-600">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-3 text-sm text-slate-600">{stat.context}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900">App Directory Highlights</h2>
        <p className="mt-3 text-sm text-slate-600">
          The <code className="rounded bg-slate-100 px-1 py-0.5">/app</code> router powers an expansive static site. Below
          is a curated look at the highest-impact subtrees.
        </p>
        <div className="mt-6 space-y-4">
          {appDirectorySummary.map((entry) => (
            <div key={entry.path} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-base font-semibold text-slate-900">{entry.path}</p>
              <p className="text-sm text-slate-500">{entry.count}</p>
              <p className="mt-2 text-sm text-slate-600">{entry.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900">Component Architecture</h2>
        <p className="mt-3 text-sm text-slate-600">
          Reusable React modules live under <code className="rounded bg-slate-100 px-1 py-0.5">/components</code> and are
          grouped by domain. These are the most commonly reused layers.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {componentHighlights.map((entry) => (
            <div key={entry.group} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-900">{entry.group}</p>
              <p className="text-sm text-slate-500">{entry.location}</p>
              <p className="mt-2 text-sm text-slate-600">{entry.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900">Runtime Dependencies</h2>
        <p className="mt-3 text-sm text-slate-600">
          Core libraries used in production bundles. Versions are sourced from <code className="rounded bg-slate-100 px-1 py-0.5">package.json</code>.
        </p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {runtimeDependencies.map((name) => (
            <li key={name} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900">Tooling &amp; Dev Dependencies</h2>
        <p className="mt-3 text-sm text-slate-600">
          Toolchain packages supporting linting, formatting, Tailwind CSS, and TypeScript workflows.
        </p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {devDependencies.map((name) => (
            <li key={name} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900">Available npm Scripts</h2>
        <div className="mt-6 space-y-4">
          {npmScripts.map((item) => (
            <div key={item.script} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-mono text-sm text-slate-900">{item.script}</p>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900">Hosting the Project Locally</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-6 text-sm text-slate-700">
          {localHostingSteps.map((step, index) => (
            <li key={index}>
              <span dangerouslySetInnerHTML={{ __html: step.replace(/`([^`]+)`/g, '<code class="rounded bg-slate-100 px-1 py-0.5">$1</code>') }} />
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-slate-600">
          The production build pre-renders thousands of static routes. Expect the first <code className="rounded bg-slate-100 px-1 py-0.5">pnpm run build</code>
          to take several minutes while all service and location permutations are generated.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900">Next Steps &amp; Suggestions</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-slate-700">
          <li>
            Automate report regeneration by scripting directory counts (e.g., a small Node or Bun script that emits JSON
            consumed by this page).
          </li>
          <li>
            Pair this documentation with analytics dashboards (using @vercel/analytics) to monitor high-traffic regions
            across the thousands of statically generated pages.
          </li>
          <li>
            Continue modularizing large content blocks into <code className="rounded bg-slate-100 px-1 py-0.5">/components/sections</code> for consistent
            branding across new service or location rollouts.
          </li>
        </ul>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-xs text-slate-500">
        Last updated automatically via manual inspection and CLI metrics. Regenerate after major content migrations to
        keep counts in sync.
      </footer>
    </div>
  )
}

