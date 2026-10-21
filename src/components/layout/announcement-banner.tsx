"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { announcementBanner } from "@/content/site"

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="relative flex items-center bg-primary px-4 py-2.5 pr-11 text-sm font-medium text-primary-foreground sm:justify-center sm:px-4 sm:pr-4 sm:text-center">
      <Link
        href={announcementBanner.href}
        className="inline-flex flex-wrap items-center gap-1.5 hover:underline sm:flex-nowrap sm:justify-center"
      >
        <span>{announcementBanner.message}</span>
        <span className="inline-flex items-center gap-0.5 whitespace-nowrap font-semibold">
          {announcementBanner.linkLabel}
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </span>
      </Link>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Cerrar aviso"
        className="absolute top-1/2 right-3 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
      >
        <X className="size-4" aria-hidden="true" />
      </button>
    </div>
  )
}
