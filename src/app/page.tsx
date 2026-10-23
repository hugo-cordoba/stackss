import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Solution } from "@/components/sections/solution"
import { Capabilities } from "@/components/sections/capabilities"
import { Process } from "@/components/sections/process"
import { FinalCta } from "@/components/sections/final-cta"
import { ScrollTargetHandler } from "@/components/scroll-target-handler"

export default function Home() {
  return (
    <>
      <ScrollTargetHandler />
      <Hero />
      <Problem />
      <Solution />
      <Capabilities />
      <Process />
      <FinalCta />
    </>
  )
}
