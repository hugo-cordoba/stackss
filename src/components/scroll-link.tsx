"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import type { ComponentProps, MouseEvent } from "react"

export const SCROLL_TARGET_KEY = "scroll-target"

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Desplaza a `top`. Si hay una animación de scroll suave en curso (p. ej. el
// usuario ha pulsado otro enlace antes de que termine la anterior), algunos
// navegadores ignoran una segunda llamada a scrollIntoView/scrollTo con
// behavior "smooth" y hay que pulsar dos veces para que surta efecto. Por
// eso primero se cancela la animación en curso con un scroll "auto" a la
// posición actual antes de lanzar la nueva.
function smoothScrollTo(top: number) {
  if (prefersReducedMotion()) {
    window.scrollTo({ top, behavior: "auto" })
    return
  }
  window.scrollTo({ top: window.scrollY, behavior: "auto" })
  window.scrollTo({ top, behavior: "smooth" })
}

function targetScrollTop(el: Element) {
  const scrollPaddingTop = parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop || "0"
  )
  return window.scrollY + el.getBoundingClientRect().top - scrollPaddingTop
}

export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  smoothScrollTo(targetScrollTop(el))
}

export function scrollToTop() {
  smoothScrollTo(0)
}

type ScrollLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string
}

// Enlace para anclas internas (ej. "#contacto", "/#capacidades"): hace scroll
// suave sin que el hash aparezca nunca en la barra de direcciones. Si el
// destino está en otra página, navega primero y guarda el objetivo en
// sessionStorage para que ScrollTargetHandler complete el scroll al llegar.
export function ScrollLink({ href, onClick, ...props }: ScrollLinkProps) {
  const router = useRouter()
  const pathname = usePathname()
  const hashIndex = href.indexOf("#")

  if (hashIndex === -1) {
    return <Link href={href} onClick={onClick} {...props} />
  }

  const path = href.slice(0, hashIndex) || pathname
  const id = href.slice(hashIndex + 1)

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) return
    event.preventDefault()
    if (!id) return
    if (pathname === path) {
      scrollToId(id)
    } else {
      sessionStorage.setItem(SCROLL_TARGET_KEY, id)
      router.push(path)
    }
  }

  return <Link href={path} onClick={handleClick} {...props} />
}
