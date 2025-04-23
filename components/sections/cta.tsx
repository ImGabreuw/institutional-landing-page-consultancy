"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react"

export default function CTA() {
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
        duration: 0.5,
      },
    },
  }

  return (
    <section className="bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 w-full py-24 relative overflow-hidden">
      {/* Background with gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 z-0"></div> */}

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent opacity-20 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl"
        >
          <div className="text-center space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-white mb-2"
            >
              <Sparkles className="h-4 w-4" />
              <span>TRANSFORME SEU NEGÓCIO</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            >
              Pronto para levar sua empresa ao próximo nível?
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como nossas soluções de engenharia podem impulsionar seus
              resultados com excelência e inovação.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                size="lg"
                asChild
              >
                <Link href="/#contato">
                  FALE COM UM ESPECIALISTA
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-white">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="bg-white/20 p-2 rounded-lg">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Resultados Rápidos</h3>
                <p className="text-sm text-white/80">Soluções eficientes com impacto imediato</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="bg-white/20 p-2 rounded-lg">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Crescimento Sustentável</h3>
                <p className="text-sm text-white/80">Estratégias para longo prazo</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="bg-white/20 p-2 rounded-lg">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Inovação Constante</h3>
                <p className="text-sm text-white/80">Soluções à frente do mercado</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
