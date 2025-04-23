"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Proprietário, Construtora Silva",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "A EJEM superou todas as nossas expectativas. O projeto arquitetônico que desenvolveram para nosso novo empreendimento foi inovador e funcional. A equipe foi extremamente profissional e atenciosa durante todo o processo.",
    },
    {
      id: 2,
      name: "Ana Ferreira",
      role: "CEO, TechSolutions",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "Contratamos a EJEM para desenvolver nosso site e implementar um dashboard para análise de dados. O resultado foi excelente, com uma interface intuitiva e todas as funcionalidades que precisávamos. Recomendo fortemente!",
    },
    {
      id: 3,
      name: "Roberto Mendes",
      role: "Diretor, Indústria Mendes",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "A consultoria de gestão de qualidade da EJEM transformou nossos processos produtivos. Conseguimos reduzir desperdícios e aumentar nossa produtividade em mais de 30%. Uma parceria que valeu cada centavo investido.",
    },
    {
      id: 4,
      name: "Juliana Costa",
      role: "Fundadora, Startup Inova",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "Como startup, precisávamos de uma consultoria empresarial que entendesse nossas necessidades específicas. A EJEM nos ajudou a estruturar nossos processos financeiros e de marketing, o que foi fundamental para conseguirmos nossa primeira rodada de investimentos.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        goToNext()
      }
    }, 8000) // Slower interval - 8 seconds
  }

  useEffect(() => {
    startAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAnimating])

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 700)
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 700)
  }

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
    <section
      id="depoimentos"
      className="w-full py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-bl from-primary/20 to-transparent opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-gradient-to-tr from-primary/10 to-transparent opacity-20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-primary-foreground mb-4"
          >
            DEPOIMENTOS
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300"
          >
            O Que Nossos Clientes Dizem
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-300 max-w-3xl mx-auto">
            Conheça as experiências de quem já confiou em nossos serviços e obteve resultados excepcionais.
          </motion.p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-primary opacity-10">
            <Quote size={120} />
          </div>

          <div className="relative z-10 overflow-hidden">
            <div className="flex">
              <motion.div
                className="flex w-full"
                initial={false}
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-slate-700/30 shadow-xl">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/3 flex flex-col items-center">
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-primary/20 blur-md"></div>
                            <Avatar className="h-24 w-24 border-2 border-primary/50 relative">
                              <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                              <AvatarFallback className="bg-primary/20 text-white text-xl">
                                {testimonial.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <h4 className="mt-4 text-xl font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-slate-400">{testimonial.role}</p>
                        </div>

                        <div className="md:w-2/3">
                          <p className="text-lg md:text-xl text-slate-200 italic leading-relaxed">
                            "{testimonial.content}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="rounded-full border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/70 text-white"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Anterior</span>
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true)
                        setActiveIndex(index)
                        setTimeout(() => setIsAnimating(false), 700)
                      }
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-gradient-to-r from-primary to-primary/70"
                        : "w-2 bg-slate-600 hover:bg-slate-500"
                    }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/70 text-white"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Próximo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
