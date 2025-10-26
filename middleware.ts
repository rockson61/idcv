import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /about to /about-us
  if (pathname === "/about") {
    return NextResponse.redirect(new URL("/about-us", request.url))
  }

  // Redirect /services/root-canal to /services/root-canal-treatment
  if (pathname === "/services/root-canal") {
    return NextResponse.redirect(new URL("/services/root-canal-treatment", request.url))
  }

  // Redirect /services/invisalign to /services/orthodontics/invisalign
  if (pathname === "/services/invisalign") {
    return NextResponse.redirect(new URL("/services/orthodontics/invisalign", request.url))
  }

  // Redirect old blog [id] routes to [slug] routes
  if (pathname.match(/^\/blog\/\d+$/)) {
    const id = pathname.split("/").pop()
    // Map old numeric IDs to new slugs
    const slugMap: Record<string, string> = {
      "1": "dental-implants-complete-guide",
      "2": "complete-guide-root-canal-treatment",
      "3": "benefits-professional-teeth-whitening",
      "4": "oral-health-tips",
      "5": "dental-implants-vellore",
    }
    const slug = slugMap[id || ""] || "dental-implants-complete-guide"
    return NextResponse.redirect(new URL(`/blog/${slug}`, request.url))
  }

  // Redirect /locations to /dentist-near-me/locations
  if (pathname === "/locations") {
    return NextResponse.redirect(new URL("/dentist-near-me/locations", request.url))
  }

  // Redirect /in/tamil-nadu/vellore/services/* to /services/*
  if (pathname.startsWith("/in/tamil-nadu/vellore/services/")) {
    const servicePath = pathname.replace("/in/tamil-nadu/vellore/services/", "/services/")
    return NextResponse.redirect(new URL(servicePath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/about",
    "/services/root-canal",
    "/services/invisalign",
    "/blog/:path*",
    "/locations",
    "/in/tamil-nadu/vellore/services/:path*",
  ],
}
