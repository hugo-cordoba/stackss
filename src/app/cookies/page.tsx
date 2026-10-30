import type { Metadata } from "next"
import { LegalPage } from "@/components/sections/legal-page"
import { legalPages } from "@/content/site"

export const metadata: Metadata = {
  title: legalPages.cookies.title,
}

export default function CookiesPage() {
  return <LegalPage content={legalPages.cookies} as="h1" />
}
