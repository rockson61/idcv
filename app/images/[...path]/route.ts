import type { NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join("/")

  // This is a placeholder route handler that would normally serve images
  // In a real application, you would fetch images from a storage service

  // For now, we'll return a placeholder SVG
  const svg = `
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f9ff" />
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#0f766e" text-anchor="middle">
        ${
          path === "clinic-exterior.jpg"
            ? "Indira Dental Clinic"
            : path === "clinic-katpadi.jpg"
              ? "Katpadi Branch"
              : path === "clinic-ranipet.jpg"
                ? "Ranipet Branch"
                : "Dental Clinic Image"
        }
      </text>
    </svg>
  `

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
