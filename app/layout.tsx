import type React from "react"
import type { Metadata } from "next"
import { Inter, Exo_2 } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ConnectWithDentist } from "@/components/sections/connect-with-dentist"
import { GlobalSchema } from "@/components/schema/GlobalSchema"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const exo2 = Exo_2({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-exo-2"
})

export const metadata: Metadata = {
  title: "Indira Dental Clinic | Best Dentist in Vellore - Dr. Rockson Samuel",
  description:
    "Leading dental care in Vellore, Tamil Nadu. Expert treatments including RCT, braces, implants, cosmetic dentistry by Dr. Rockson Samuel. 15+ years experience. Book appointment: 7010650063",
  keywords: [
    "dentist in Vellore",
    "dental clinic Vellore",
    "Dr Rockson Samuel",
    "Indira Dental Clinic",
    "root canal treatment Vellore",
    "dental implants Vellore",
    "orthodontist Vellore",
    "teeth whitening Vellore",
    "cosmetic dentistry Vellore",
    "emergency dental care Vellore",
    "best dentist Vellore",
    "Gandhi Nagar dental clinic",
    "Katpadi dentist",
  ],
  authors: [{ name: "Indira Dental Clinic" }],
  creator: "Indira Dental Clinic",
  publisher: "Indira Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.dentalclinicinvellore.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Indira Dental Clinic | Best Dentist in Vellore - Dr. Rockson Samuel",
    description:
      "Leading dental care in Vellore. Expert treatments including RCT, braces, implants, cosmetic dentistry. 15+ years experience. Book: 7010650063",
    url: "https://www.dentalclinicinvellore.in",
    siteName: "Indira Dental Clinic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Indira Dental Clinic - Best Dentist in Vellore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indira Dental Clinic | Best Dentist in Vellore",
    description: "Expert dental care in Vellore. RCT, Implants, Braces, Cosmetic Dentistry. Book: 7010650063",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#DC2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <GlobalSchema />
      </head>
      <body className={`${inter.variable} ${exo2.variable} font-sans antialiased`}>
        <Header />
        {children}
        <ConnectWithDentist />
        <Footer />
      </body>
    </html>
  )
}
