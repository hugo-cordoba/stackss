"use client"

import { useEffect } from "react"
import { SCROLL_TARGET_KEY, scrollToId } from "@/components/scroll-link"

// Tras navegar desde otra página (ej. /faq → /#contacto), completa el scroll
// hacia la sección guardada por ScrollLink, sin que el hash llegue a la URL.
export function ScrollTargetHandler() {
  useEffect(() => {
    const id = sessionStorage.getItem(SCROLL_TARGET_KEY)
    if (!id) return
    sessionStorage.removeItem(SCROLL_TARGET_KEY)
    requestAnimationFrame(() => scrollToId(id))
  }, [])

  return null
}
