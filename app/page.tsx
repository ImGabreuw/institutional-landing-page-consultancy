import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import About from "@/components/sections/about"
import Testimonials from "@/components/sections/testimonials"
import Contact from "@/components/sections/contact"
import CTA from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "EJEM - Empresa Júnior de Engenharia Mackenzie",
  description:
    "Soluções de engenharia com excelência para o seu negócio. Arquitetura, Tecnologia, Gestão de Qualidade e Consultoria Empresarial.",
  keywords: "engenharia, consultoria, mackenzie, arquitetura, tecnologia, gestão de qualidade, consultoria empresarial",
}

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  )
}
