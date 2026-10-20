import Link from "next/link"
import { ArrowRight, Bot, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/motion/reveal"
import { hero } from "@/content/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-10 h-[40rem] bg-[radial-gradient(ellipse_at_top,var(--color-brand),transparent_60%)] opacity-[0.14]"
      />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge variant="secondary" className="h-7 gap-1.5 rounded-full px-3 text-xs">
              <Sparkles className="size-3.5 text-brand" aria-hidden="true" />
              {hero.badge}
            </Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                render={<Link href={hero.primaryCta.href} />}
                size="lg"
                className="h-11 px-6 text-base"
              >
                {hero.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                render={<Link href={hero.secondaryCta.href} />}
                variant="outline"
                size="lg"
                className="h-11 px-6 text-base"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.32} y={28}>
          <div className="relative mx-auto mt-16 max-w-4xl">
            <BrowserMockup />
            <AgentFloatingCard />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-2xl ring-1 ring-foreground/10">
      <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-destructive/50" />
          <span className="size-2.5 rounded-full bg-chart-5/40" />
          <span className="size-2.5 rounded-full bg-brand/50" />
        </div>
        <div className="mx-auto flex max-w-xs flex-1 items-center justify-center rounded-md bg-background px-3 py-1 text-xs text-muted-foreground ring-1 ring-border/60">
          {hero.mockup.browserTitle}
        </div>
      </div>

      <div className="grid gap-4 bg-gradient-to-br from-muted/40 via-background to-background p-6 sm:grid-cols-[1.3fr_1fr] sm:p-10">
        <div className="flex flex-col gap-3">
          <div className="h-2.5 w-24 rounded-full bg-brand/70" />
          <div className="h-5 w-4/5 rounded-md bg-foreground/80" />
          <div className="h-5 w-3/5 rounded-md bg-foreground/40" />
          <div className="mt-2 h-3 w-full rounded-full bg-muted" />
          <div className="h-3 w-5/6 rounded-full bg-muted" />
          <div className="mt-3 flex gap-2">
            <div className="h-8 w-28 rounded-lg bg-brand" />
            <div className="h-8 w-24 rounded-lg bg-muted" />
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-xl bg-card p-4 ring-1 ring-foreground/10">
          <div className="h-20 rounded-lg bg-brand/10" />
          <div className="h-3 w-full rounded-full bg-muted" />
          <div className="h-3 w-4/5 rounded-full bg-muted" />
          <div className="h-3 w-3/5 rounded-full bg-muted" />
        </div>
      </div>
    </div>
  )
}

function AgentFloatingCard() {
  return (
    <div className="absolute -bottom-8 -right-4 w-64 rounded-xl bg-card p-4 shadow-2xl ring-1 ring-foreground/10 sm:-right-10 sm:w-72">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-brand/10 text-brand">
            <Bot className="size-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium">{hero.mockup.agentCardTitle}</span>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          {hero.mockup.agentCardStatus}
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        {hero.mockup.agentMessages.map((message, index) => (
          <div
            key={index}
            className={
              message.from === "agente"
                ? "ml-auto max-w-[85%] rounded-lg rounded-br-sm bg-brand px-3 py-2 text-xs text-primary-foreground"
                : "max-w-[85%] rounded-lg rounded-bl-sm bg-muted px-3 py-2 text-xs text-foreground"
            }
          >
            {message.text}
          </div>
        ))}
      </div>
    </div>
  )
}
