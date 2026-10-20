import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Solution } from "@/components/sections/solution"
import { Capabilities } from "@/components/sections/capabilities"
import { Audience } from "@/components/sections/audience"
import { Process } from "@/components/sections/process"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Capabilities />
      <Process />
      <Audience />
      <Faq />
      <FinalCta />
    </>
  )
}
