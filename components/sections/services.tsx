"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building2, Code, ClipboardCheck, BarChart3, ArrowRight } from "lucide-react"

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      id: "arquitetura",
      title: "ARQUITETURA & CIVIL",
      icon: Building2,
      tagline: "O projeto inteligente para o seu imóvel dos sonhos.",
      description:
        "Esse serviço consiste no planejamento e elaboração de plantas e maquetes 3D para construção ou reforma do seu imóvel, englobando a parte elétrica.",
      image: "/placeholder.svg?height=400&width=600",
      gradient: "from-blue-600 to-indigo-900",
      features: [
        "Plantas arquitetônicas detalhadas",
        "Maquetes 3D realistas",
        "Projetos elétricos completos",
        "Acompanhamento de obras",
        "Consultoria técnica especializada",
      ],
    },
    {
      id: "tecnologia",
      title: "TECNOLOGIA",
      icon: Code,
      tagline:
        "Alavanque seu crescimento online e aumente suas vendas com o tráfego orgânico utilizando nossas soluções de Tecnologia.",
      description:
        "Esse serviço consiste na criação e aprimoramento de sites, tratamento de dados, dashboards e gestão de software. Onde são feitos diagnósticos e projetos totalmente personalizados para cada um dos clientes.",
      image: "/placeholder.svg?height=400&width=600",
      gradient: "from-purple-600 to-fuchsia-900",
      features: [
        "Desenvolvimento de websites responsivos",
        "Análise e tratamento de dados",
        "Criação de dashboards interativos",
        "Gestão de software personalizada",
        "Otimização para mecanismos de busca (SEO)",
      ],
    },
    {
      id: "qualidade",
      title: "GESTÃO DE QUALIDADE",
      icon: ClipboardCheck,
      tagline: "Seja pioneiro e otimize seu negócio com processos de qualidade.",
      description:
        "Esse serviço consiste no mapeamento e melhoria dos processos de sua empresa, assim como a otimização do seu espaço físico, visando potencializar sua produção.",
      image: "/placeholder.svg?height=400&width=600",
      gradient: "from-emerald-600 to-teal-900",
      features: [
        "Mapeamento de processos",
        "Implementação de sistemas de qualidade",
        "Otimização de layout produtivo",
        "Redução de desperdícios",
        "Padronização de procedimentos",
      ],
    },
    {
      id: "consultoria",
      title: "CONSULTORIA EMPRESARIAL",
      icon: BarChart3,
      tagline: "Potencialize seus resultados com a estruturação da sua empresa.",
      description:
        "Esse serviço consiste no estudo e potencialização dos setores que fazem parte da empresa, como o financeiro, o marketing, o estratégico e o operacional. Seja mais uma empresa de sucesso!",
      image: "/placeholder.svg?height=400&width=600",
      gradient: "from-amber-600 to-orange-900",
      features: [
        "Análise financeira detalhada",
        "Estratégias de marketing eficientes",
        "Planejamento estratégico personalizado",
        "Otimização operacional",
        "Consultoria de gestão completa",
      ],
    },
  ]

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
      id="servicos"
      className="w-full py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden"
    >
      {/* Background elements */}
      {/* Novo background, mais escuro e sutil */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-neutral-900/90 via-neutral-950/80 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-96 bg-gradient-to-t from-primary/30 via-neutral-900/60 to-transparent opacity-30 rounded-full blur-2xl"></div>
        <div className="absolute left-[-10%] top-1/3 w-1/3 h-64 bg-gradient-to-br from-indigo-900/40 via-transparent to-transparent opacity-40 rounded-full blur-3xl"></div>
      </div>

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
            NOSSAS ESPECIALIDADES
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300"
          >
            Áreas de Soluções
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-300 max-w-3xl mx-auto">
            A EJEM é uma empresa que abrange todas as áreas de Engenharia focada em causar impacto com soluções e
            projetos de excelência com apoio do Mackenzie.
          </motion.p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              <div className={`relative rounded-2xl overflow-hidden group ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 mix-blend-multiply`}
                ></div>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient}`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-white/90 text-lg font-medium">{service.tagline}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-slate-300">{service.description}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">O que oferecemos:</h4>
                  <ul className="grid gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`p-1 rounded-full bg-gradient-to-br ${service.gradient} mt-1`}>
                          <div className="bg-slate-950 rounded-full p-0.5">
                            <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${service.gradient}`}></div>
                          </div>
                        </div>
                        <span className="text-slate-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-primary/20 transition-all duration-300`}
                  asChild
                >
                  <Link href="/#contato">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
