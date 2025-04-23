"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { CheckCircle, Award, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
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

  const benefits = [
    "Equipe multidisciplinar de engenheiros",
    "Projetos supervisionados por professores do Mackenzie",
    "Soluções personalizadas para cada cliente",
    "Preços acessíveis com qualidade premium",
    "Acompanhamento completo do projeto",
  ]

  const stats = [
    { value: "100+", label: "Projetos Realizados", icon: Award },
    { value: "30+", label: "Membros Ativos", icon: Users },
    { value: "15+", label: "Anos de Experiência", icon: BookOpen },
  ]

  return (
    <section
      id="sobre"
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
            NOSSA HISTÓRIA
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300"
          >
            Sobre a EJEM
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-300 max-w-3xl mx-auto">
            Conheça a Empresa Júnior de Engenharia Mackenzie e nossa trajetória de excelência e inovação.
          </motion.p>
        </motion.div>

        {/* Main content area */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left column - Image and stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="md:col-span-7 space-y-8"
          >
            {/* Main image with overlay */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 opacity-80 mix-blend-multiply z-10"></div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Equipe EJEM"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent z-20"></div>

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <h3 className="text-xl font-bold text-white mb-2">Empresa Júnior de Engenharia Mackenzie</h3>
                  <p className="text-white/80">
                    Formada por alunos de graduação sob orientação de professores especializados
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main content text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 w-20"></div>
              <p className="text-lg text-slate-300">
                A Empresa Júnior de Engenharia Mackenzie (EJEM) é formada por alunos de graduação que, sob orientação de
                professores, prestam serviços de consultoria e desenvolvem projetos para empresas, empreendedores e
                sociedade em geral.
              </p>
              <p className="text-lg text-slate-300">
                Nossa missão é proporcionar aos alunos a experiência prática do mercado de trabalho, enquanto oferecemos
                soluções de qualidade a preços acessíveis para nossos clientes.
              </p>
            </motion.div>

            {/* Stats cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-700/30 shadow-lg hover-glow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 rounded-full bg-primary/10 mb-2">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Why choose us */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="md:col-span-5 md:mt-0"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 backdrop-blur-sm p-6 rounded-2xl border border-neutral-700/30 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="bg-gradient-to-r from-primary to-primary/70 h-5 w-1 rounded-full mr-3"></span>
                Por que escolher a EJEM?
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-gradient-to-br from-primary to-primary/70 p-1 rounded-full mt-1">
                      <div className="bg-neutral-900 rounded-full p-0.5">
                        <CheckCircle className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>
                    <span className="text-slate-200">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  asChild
                >
                  <Link href="/#servicos">Conheça Nossos Serviços</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
