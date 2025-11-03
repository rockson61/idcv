### Location Pages Standard Checklist

Required imports (by path):
- `Breadcrumb` from `@/components/breadcrumb`
- `LocationHeader` from `@/components/location/LocationHeader`
- `GoogleMapEmbed` from `@/components/location/GoogleMapEmbed`
- `EnhancedServicesList` from `@/components/location/EnhancedServicesList`
- `LocationReviews` from `@/components/location/LocationReviews`
- `LocationFAQs` from `@/components/LocationFAQs`
- `PeopleAlsoSearchFor` from `@/components/location/PeopleAlsoSearchFor`
- `Button` from `@/components/ui/button`
- Icons as used (e.g., `Phone`, `Calendar`) from `lucide-react`

Required JSX sections (order):
1. `<Breadcrumb items={[...]} />`
2. `<LocationHeader ... />`
3. `<GoogleMapEmbed ... />`
4. `<EnhancedServicesList ... />`
5. `<LocationReviews ... />`
6. `<LocationFAQs ... />`
7. `<PeopleAlsoSearchFor ... />`

Server-only helpers:
- FAQs generation should use `generateDefaultFAQs` from `@/components/LocationFAQs` (compat re-export to `@/lib/location-generators`).

Notes:
- All components above that use hooks must be Client Components (they already include `"use client"`).
- Pages under `app/in/**` should not declare `export const runtime = 'edge'`.

### Project-wide QA Checklist (beyond Location/Service pages)

- Blog: `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, category/tag lists if any
- Ask the Dentist: `app/ask-the-dentist/page.tsx`, `[slug]/page.tsx`, `submit/page.tsx` and `components/ask-dentist/*`
- Top-level marketing: home `app/page.tsx`, `app/doctor-profile/page.tsx`, `app/dental-tourism/page.tsx`, `app/new-patients/page.tsx`, `app/financing/page.tsx`, `app/international-patients/*`
- Legal/policy: `app/privacy-policy/page.tsx`, `app/terms/page.tsx`, `app/terms-of-service/page.tsx`
- Directory/indexes: `app/dentist-near-me/page.tsx`, `app/dentist-near-me/locations/*`, `app/complete-sitemap/page.tsx`, `app/sitemap/page.tsx`
- Error/shell: `app/layout.tsx` (Header/Footer/providers), `app/error.tsx`, `app/not-found.tsx`, `app/loading.tsx`, route-level `loading.tsx` (e.g., services, dentist-near-me)
- Location indices beyond TN: state/city roots under `app/in/*` (e.g., `/in/andhra-pradesh`, `/in/andhra-pradesh/ongole`)
- Pricing: `app/pricing/page.tsx` and any region pricing pages
- Gallery/testimonials: `app/gallery/*`, `app/testimonials/*`
- FAQs: `app/faq/*`, `app/faqs/page.tsx`
- Maps: `app/map/*`
- XML/robots: `app/robots.ts`, `app/sitemap.xml/page.ts`
- API routes: `app/api/ai/route.ts` (runtime, edge vs node, streaming), any other `app/api/**`
- Components index: `app/components/page.tsx` (must render without client/server boundary issues)
- Middleware: `middleware.ts` (redirects/rewrite behavior)
- Lib/SEO: `components/seo/seo-metadata.tsx`, schema components, OpenGraph metadata in pages
- Images/config: `app/images/*`, `next.config.js` image remote patterns
- Admin tools: `app/admin/content-generator/*`
- Scripts impact: Ensure scripts didn’t introduce invalid imports in non-location routes
- Accessibility/perf: pages with heavy UI (home, services hub, blog post, location detail) for axe/Lighthouse

Suggested quick checks:
- `pnpm lint`; `pnpm type-check`; `pnpm build`
- Spot-check navigation: home → services hub → a service → location → blog post → contact
- Verify 404/500 render cleanly (no next/document `Html` usage)
- Ensure no unintended edge runtime on static pages; add `export const dynamic = 'force-static'` where applicable
- Axe-core on home, service detail, location detail, blog post
- Lighthouse on home and a heavy service page

