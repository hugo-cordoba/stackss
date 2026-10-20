"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { nav } from "@/content/site"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="text-lg font-semibold tracking-tight">
          {nav.logo}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                  {nav.company.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-64 gap-1">
                    {nav.company.items.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink
                          render={<Link href={item.href} />}
                          className="flex-col items-start gap-0.5"
                        >
                          <span className="font-medium text-foreground">
                            {item.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button render={<Link href={nav.cta.href} />}>{nav.cta.label}</Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="outline" size="icon" className="md:hidden" />
            }
            aria-label="Abrir menú"
          >
            <Menu className="size-5" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{nav.logo}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {nav.links.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<Link href={link.href} />}
                  className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </SheetClose>
              ))}
              <span className="mt-2 px-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {nav.company.label}
              </span>
              {nav.company.items.map((item) => (
                <SheetClose
                  key={item.href}
                  render={<Link href={item.href} />}
                  className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground hover:bg-muted"
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 p-4">
              <SheetClose render={<Button render={<Link href={nav.cta.href} />} />}>
                {nav.cta.label}
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
