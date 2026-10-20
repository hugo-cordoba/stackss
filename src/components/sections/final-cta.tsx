import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "cn"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { finalCta } from "@/content/site"

export function FinalCta() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-16 text-center text-primary-foreground sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,white,transparent_60%)] opacity-[0.12]"
          />
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85">
            {finalCta.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={finalCta.primaryCta.href}
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "h-11 px-6 text-base"
              )}
            >
              {finalCta.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={finalCta.secondaryCta.href}
              className={cn(
                buttonVariants({ size: "lg", variant: "ghost" }),
                "h-11 px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              )}
            >
              {finalCta.secondaryCta.label}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
