import type { Metadata } from "next"
import { Faq } from "@/components/sections/faq"
import { faq } from "@/content/site"

export const metadata: Metadata = {
  title: faq.title,
  description: faq.subtitle,
}

export default function FaqPage() {
  return <Faq as="h1" />
}
