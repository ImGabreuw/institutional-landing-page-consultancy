import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import CTA from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EJEM - Empresa Júnior de Engenharia Mackenzie",
  description:
    "Soluções de engenharia com excelência para o seu negócio. Arquitetura, Tecnologia, Gestão de Qualidade e Consultoria Empresarial.",
  keywords:
    "engenharia, consultoria, mackenzie, arquitetura, tecnologia, gestão de qualidade, consultoria empresarial",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
