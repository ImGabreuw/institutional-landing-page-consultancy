"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navItems = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Serviços", href: "/#servicos" },
  { name: "Depoimentos", href: "/#depoimentos" },
  { name: "Contato", href: "/#contato" },
]

function getSectionIdFromHref(href: string) {
  if (href === "/") return "inicio"
  if (href.startsWith("/#")) return href.replace("/#", "")
  return ""
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Identificar qual seção está visível
      const sectionIds = navItems.map(item => getSectionIdFromHref(item.href))
      let current = "inicio"
      
      // Se scroll passou do topo, verificar outras seções
      if (window.scrollY > 200) {
        for (const id of sectionIds) {
          if (id === "inicio") continue
          const el = document.getElementById(id)
          if (el) {
            const rect = el.getBoundingClientRect()
            
            // A seção está visível se o topo está próximo do topo da viewport
            if (rect.top <= 100 && rect.bottom > 100) {
              current = id
              break
            }
          }
        }
      }
      
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image src="/placeholder.svg?height=40&width=40" alt="EJEM Logo" fill className="object-contain" />
          </div>
          <span className={cn(
            "font-bold text-xl transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}>EJEM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const sectionId = getSectionIdFromHref(item.href)
            const isActive = sectionId === activeSection
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors group",
                  isScrolled 
                    ? isActive ? "text-primary" : "text-slate-700" 
                    : isActive ? "text-primary" : "text-white",
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full", 
                  isActive && "scale-x-100"
                )}/>
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/#contato">Fale Conosco</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => {
                const sectionId = getSectionIdFromHref(item.href)
                const isActive = sectionId === activeSection
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative text-lg font-medium transition-colors group",
                      isActive ? "text-primary" : "text-slate-700",
                    )}
                  >
                    {item.name}
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full", 
                      isActive && "scale-x-100"
                    )}/>
                  </Link>
                )
              })}
              <Button className="mt-4" asChild>
                <Link href="/#contato">Fale Conosco</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
