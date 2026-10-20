import type { CSSProperties, ReactNode } from "react"
import { cn } from "cn"

export const INK = "color-mix(in oklch, var(--brand), var(--foreground) 55%)"

export const tint = (pct: number, base = "var(--card)") =>
  `color-mix(in oklch, var(--brand) ${pct}%, ${base})`

export const dangerTint = (pct: number, base = "var(--card)") =>
  `color-mix(in oklch, var(--destructive) ${pct}%, ${base})`

export const dotGrid: CSSProperties = {
  backgroundImage:
    "radial-gradient(color-mix(in oklch, var(--foreground) 14%, transparent) 1px, transparent 1px)",
  backgroundSize: "14px 14px",
}

export const fadeBottom = (from = 60): CSSProperties => {
  const mask = `linear-gradient(to bottom, black ${from}%, transparent)`
  return { maskImage: mask, WebkitMaskImage: mask }
}

export function MonoTag({
  children,
  className,
  tone = "brand",
}: {
  children: ReactNode
  className?: string
  tone?: "brand" | "neutral" | "danger"
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2 py-1.5 font-mono text-[0.625rem] leading-none tracking-wider whitespace-nowrap text-foreground uppercase",
        tone === "brand" && "border-brand/60",
        tone === "danger" && "border-destructive/50",
        tone === "neutral" && "border-foreground/15 bg-card",
        className
      )}
      style={
        tone === "brand"
          ? { background: tint(14) }
          : tone === "danger"
            ? { background: dangerTint(10) }
            : undefined
      }
    >
      {children}
    </span>
  )
}

export function PulseDot() {
  return (
    <span
      aria-hidden="true"
      className="size-1.5 animate-pulse rounded-full bg-brand motion-reduce:animate-none"
    />
  )
}
