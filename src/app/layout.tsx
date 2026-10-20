import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { MotionConfig } from "motion/react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnnouncementBanner } from "@/components/layout/announcement-banner"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/content/site"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MotionConfig reducedMotion="user">
            <AnnouncementBanner />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  )
}
