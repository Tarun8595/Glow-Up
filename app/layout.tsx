import type React from "react"
import type { Metadata } from "next"
import { Philosopher } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppWidget from "@/components/widgets/whatsapp-widget"
import GoogleAnalytics from "@/components/analytics/google-analytics"
import { Suspense } from "react"

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
})

export const metadata: Metadata = {
  title: "Glow Up | Create By GTSyntax | Beauty for All",
  description:
    "Premier Glow Up & GTSyntax in India offering haircuts, styling, nail care, beauty treatments, and makeup services for men and women.",
  keywords: "Glow Up & GTSyntax, beauty salon India, haircuts, hairstyling, nail care, beauty treatments, makeup services",
  openGraph: {
    title: "Glow Up | Create By GTSyntax | Beauty for All",
    description:
      "Premier Glow Up & GTSyntax in India offering haircuts, styling, nail care, beauty treatments, and makeup services for men and women.",
    images: ["favicon.png"],
    type: "website",
    locale: "en_IN",
  },
    generator: 'GTSyntax.com',
  authors: [{ name: "GTSyntax", url: "https://gtsyntax.com" }],
  creator: "GTSyntax",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${philosopher.variable} font-sans`}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
        </Suspense>
      </body>
    </html>
  )
}
