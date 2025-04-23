"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay transition-all duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/50 to-neutral-950 transition-all duration-700"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/20 to-transparent opacity-30 transition-all duration-700"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-gradient-to-t from-primary/10 to-transparent opacity-20 rounded-full blur-3xl transition-all duration-700"></div>

      <div className="container px-4 py-32 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              Soluções de Engenharia com Excelência para o seu Negócio
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              A EJEM é uma empresa que abrange todas as áreas de Engenharia focada em causar impacto com soluções e
              projetos de excelência com apoio do Mackenzie.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              asChild
            >
              <Link href="/#servicos">
                Nossos Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary hover:bg-primary/10 hover:text-primary backdrop-blur-sm"
              asChild
            >
              <Link href="/#contato">Fale Conosco</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Link href="/#sobre" className="text-white/70 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          <span className="sr-only">Rolar para baixo</span>
        </Link>
      </div>
    </section>
  )
}
