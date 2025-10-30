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

