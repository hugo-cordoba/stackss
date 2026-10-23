import type { ReactNode } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "cn"
import { Reveal } from "@/components/motion/reveal"
import { ScrollLink } from "@/components/scroll-link"
import { INK, MonoTag, tint } from "@/components/sections/mono"
import { getIcon } from "@/lib/icons"
import { aboutUs } from "@/content/site"

function AboutCtaButton({
  href,
  variant,
  children,
}: {
  href: string
  variant: "primary" | "outline"
  children: ReactNode
}) {
  return (
    <ScrollLink
      href={href}
      className={cn(
        "group inline-flex h-11 items-center justify-center gap-3 px-5 font-mono text-sm tracking-wide whitespace-nowrap uppercase transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary"
          ? "bg-foreground text-background hover:bg-foreground/85 active:bg-foreground/80"
          : "border border-foreground/15 bg-background text-foreground hover:bg-muted active:bg-muted"
      )}
    >
      {children}
      <ChevronRight
        className="size-4 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </ScrollLink>
  )
}

export function AboutUs({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section className="mx-auto max-w-site px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <MonoTag>{aboutUs.eyebrow}</MonoTag>
          <Heading className="mt-3 text-3xl leading-[1.05] font-semibold tracking-[-0.035em] text-pretty sm:mt-5 sm:text-5xl">
            {aboutUs.title}
          </Heading>
          <p className="mt-3 text-base leading-snug text-foreground/85 sm:mt-4 sm:text-lg">
            {aboutUs.subtitle}
          </p>
        </div>
      </Reveal>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
        {aboutUs.principles.map((principle, index) => {
          const Icon = getIcon(principle.icon)
          return (
            <Reveal key={principle.title} delay={index * 0.06} className="h-full">
              <li className="flex h-full flex-col gap-3 border border-foreground/10 bg-card p-5">
                <span
                  className="flex size-9 items-center justify-center border border-brand/60"
                  style={{ background: tint(14), color: INK }}
                >
                  <Icon className="size-[1.125rem]" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </li>
            </Reveal>
          )
        })}
      </ul>

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-col items-center gap-5 border-t border-dashed border-foreground/15 pt-10 text-center sm:mt-16 sm:pt-12">
          <p className="max-w-md text-base font-medium text-foreground sm:text-lg">
            {aboutUs.cta.title}
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <AboutCtaButton href={aboutUs.cta.primaryCta.href} variant="primary">
              {aboutUs.cta.primaryCta.label}
            </AboutCtaButton>
            <AboutCtaButton href={aboutUs.cta.secondaryCta.href} variant="outline">
              {aboutUs.cta.secondaryCta.label}
            </AboutCtaButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
