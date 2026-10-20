import { Hero } from "@/components/sections/hero"
import { TechMarquee } from "@/components/sections/tech-marquee"
import { Problem } from "@/components/sections/problem"
import { Solution } from "@/components/sections/solution"
import { Metrics } from "@/components/sections/metrics"
import { Capabilities } from "@/components/sections/capabilities"
import { Audience } from "@/components/sections/audience"
import { Process } from "@/components/sections/process"
import { Quality } from "@/components/sections/quality"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Problem />
      <Solution />
      <Metrics />
      <Capabilities />
      <Audience />
      <Process />
      <Quality />
      <Faq />
      <FinalCta />
    </>
  )
}
