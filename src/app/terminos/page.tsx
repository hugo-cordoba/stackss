import type { Metadata } from "next"
import { LegalPage } from "@/components/sections/legal-page"
import { legalPages } from "@/content/site"

export const metadata: Metadata = {
  title: legalPages.terminos.title,
}

export default function TerminosPage() {
  return <LegalPage content={legalPages.terminos} as="h1" />
}
