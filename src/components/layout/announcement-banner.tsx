"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { ScrollLink } from "@/components/scroll-link"
import { announcementBanner } from "@/content/site"

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="relative flex items-center bg-primary py-2.5 pr-11 pl-4 text-[0.8125rem] leading-tight font-medium text-primary-foreground sm:justify-center sm:px-12 sm:text-center sm:text-sm">
      <ScrollLink
        href={announcementBanner.href}
        className="-my-2.5 inline-flex flex-wrap items-center gap-x-1.5 py-2.5 hover:underline active:underline sm:flex-nowrap sm:justify-center"
      >
        <span>{announcementBanner.message}</span>
        <span className="inline-flex items-center gap-0.5 font-semibold whitespace-nowrap">
          {announcementBanner.linkLabel}
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </span>
      </ScrollLink>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Cerrar aviso"
        className="absolute top-1/2 right-1 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground active:bg-primary-foreground/15 sm:right-3 sm:size-8"
      >
        <X className="size-4" aria-hidden="true" />
      </button>
    </div>
  )
}
