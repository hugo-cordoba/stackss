import type { Metadata } from "next"
import { LegalPage } from "@/components/sections/legal-page"
import { legalPages } from "@/content/site"

export const metadata: Metadata = {
  title: legalPages.privacidad.title,
}

export default function PrivacidadPage() {
  return <LegalPage content={legalPages.privacidad} as="h1" />
}
