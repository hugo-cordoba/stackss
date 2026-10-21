"use client"

import { useCallback, useRef, useState, type ReactNode } from "react"
import { cn } from "cn"
import { Reveal } from "@/components/motion/reveal"

export type CarouselItem = {
  key: string
  content: ReactNode
  /** Clases extra para el <li> (p. ej. col-span en escritorio). */
  className?: string
}

/**
 * Carrusel con CSS scroll-snap que SOLO se activa en móvil (< sm).
 * Desde `sm` el <ul> deja de ser un carrusel y adopta el layout que le pases
 * en `listClassName` (grid, etc.), así que no cambia el diseño de escritorio.
 *
 * Todas las clases de móvil usan `max-sm:` para no pisarse con las de escritorio.
 */
export function SnapCarousel({
  items,
  label,
  className,
  listClassName,
  itemClassName,
  dotsClassName,
}: {
  items: CarouselItem[]
  label: string
  className?: string
  listClassName?: string
  /** Ancho de cada tarjeta en móvil, p. ej. "max-sm:w-[82%]". */
  itemClassName?: string
  dotsClassName?: string
}) {
  const listRef = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)

  const handleScroll = useCallback(() => {
    const list = listRef.current
    if (!list) return
    const max = list.scrollWidth - list.clientWidth
    if (max <= 0) return
    setActive(Math.round((list.scrollLeft / max) * (items.length - 1)))
  }, [items.length])

  const goTo = useCallback((index: number) => {
    const list = listRef.current
    const item = list?.children[index] as HTMLElement | undefined
    if (!list || !item) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    list.scrollTo({
      left: item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2,
      behavior: reduce ? "auto" : "smooth",
    })
  }, [])

  return (
    <Reveal className={className}>
      <div role="region" aria-roledescription="carrusel" aria-label={label}>
        <ul
          ref={listRef}
          onScroll={handleScroll}
          className={cn(
            "relative max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:gap-3 max-sm:overflow-x-auto max-sm:overscroll-x-contain max-sm:px-4 max-sm:pb-1 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden",
            listClassName
          )}
        >
          {items.map((item) => (
            <li
              key={item.key}
              className={cn(
                "flex max-sm:shrink-0 max-sm:snap-center",
                itemClassName,
                item.className
              )}
            >
              {item.content}
            </li>
          ))}
        </ul>

        {/* Indicadores (solo móvil) */}
        <div
          className={cn(
            "mt-3 flex items-center justify-center sm:hidden",
            dotsClassName
          )}
        >
          {items.map((item, index) => (
            <button
              key={item.key}
              type="button"
              aria-label={`Ir a la tarjeta ${index + 1} de ${items.length}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => goTo(index)}
              className="flex h-6 items-center px-1 outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <span
                className={cn(
                  "block h-1.5 transition-all duration-300",
                  index === active ? "w-6 bg-brand" : "w-1.5 bg-foreground/20"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
