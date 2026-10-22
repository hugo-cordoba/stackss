"use client"

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
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
  const frame = useRef(0)
  const [active, setActive] = useState(0)

  // Tarjeta activa = la más cercana al borde de alineación (inicio + padding).
  // Si se llegó al final del scroll, siempre es la última (la última tarjeta
  // no puede alcanzar el inicio y con el cálculo proporcional anterior
  // el punto activo "saltaba").
  const updateActive = useCallback(() => {
    frame.current = 0
    const list = listRef.current
    if (!list) return
    const max = list.scrollWidth - list.clientWidth
    if (max <= 0) return
    if (list.scrollLeft >= max - 2) {
      setActive(items.length - 1)
      return
    }
    const pad = parseFloat(getComputedStyle(list).paddingLeft) || 0
    const target = list.scrollLeft + pad
    let best = 0
    let bestDistance = Infinity
    for (let i = 0; i < list.children.length; i++) {
      const distance = Math.abs((list.children[i] as HTMLElement).offsetLeft - target)
      if (distance < bestDistance) {
        best = i
        bestDistance = distance
      }
    }
    setActive(best)
  }, [items.length])

  // Throttle a un cálculo por frame.
  const handleScroll = useCallback(() => {
    if (frame.current) return
    frame.current = requestAnimationFrame(updateActive)
  }, [updateActive])

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [])

  const goTo = useCallback((index: number) => {
    const list = listRef.current
    const item = list?.children[index] as HTMLElement | undefined
    if (!list || !item) return
    const pad = parseFloat(getComputedStyle(list).paddingLeft) || 0
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    list.scrollTo({
      left: item.offsetLeft - pad,
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
            // Las tarjetas se alinean al inicio (respetando el margen de 16px)
            // y asoma la siguiente, lo que invita a deslizar.
            "relative max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:scroll-px-4 max-sm:gap-3 max-sm:overflow-x-auto max-sm:overscroll-x-contain max-sm:px-4 max-sm:pb-1 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden",
            listClassName
          )}
        >
          {items.map((item) => (
            <li
              key={item.key}
              className={cn(
                // snap-always: un swipe rápido no se salta tarjetas.
                "flex max-sm:shrink-0 max-sm:snap-start max-sm:snap-always",
                itemClassName,
                item.className
              )}
            >
              {item.content}
            </li>
          ))}
        </ul>

        {/* Indicadores (solo móvil). Área táctil de 32px de alto. */}
        <div
          className={cn(
            "mt-2 flex items-center justify-center sm:hidden",
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
              className="flex h-8 items-center px-1.5 outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <span
                className={cn(
                  "block h-1.5 transition-all duration-300",
                  index === active ? "w-6 bg-brand" : "w-1.5 bg-foreground/25"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
