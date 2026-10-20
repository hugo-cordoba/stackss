import { cn } from "cn"

export function Marquee({
  items,
  className,
}: {
  items: string[]
  className?: string
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
      <div className="flex w-max animate-marquee items-center gap-12 motion-reduce:[animation:none]">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            aria-hidden={index >= items.length}
            className="shrink-0 text-sm font-medium tracking-wide text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
