"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { announcementBanner } from "@/content/site"

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="relative flex items-center justify-center gap-2 bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground">
      <a
        href={announcementBanner.href}
        className="inline-flex items-center gap-1.5 hover:underline"
      >
        <span>{announcementBanner.message}</span>
        <span className="inline-flex items-center gap-0.5 whitespace-nowrap font-semibold">
          {announcementBanner.linkLabel}
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </span>
      </a>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Cerrar aviso"
        className="absolute right-3 inline-flex size-6 items-center justify-center rounded-full text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
      >
        <X className="size-4" aria-hidden="true" />
      </button>
    </div>
  )
}
