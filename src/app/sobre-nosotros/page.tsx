import type { Metadata } from "next"
import { AboutUs } from "@/components/sections/about-us"
import { aboutUs } from "@/content/site"

export const metadata: Metadata = {
  title: aboutUs.eyebrow,
  description: aboutUs.subtitle,
}

export default function AboutUsPage() {
  return <AboutUs as="h1" />
}
