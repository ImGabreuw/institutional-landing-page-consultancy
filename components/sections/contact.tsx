"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <section
      id="contato"
      className="w-full py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-64 bg-gradient-to-br from-primary/10 to-transparent opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-gradient-to-tl from-primary/10 to-transparent opacity-20 rounded-full blur-3xl"></div>

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
            FALE CONOSCO
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300"
          >
            Entre em Contato
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-3xl mx-auto"
          >
            Estamos prontos para atender às suas necessidades. Entre em contato
            e nossa equipe responderá o mais breve possível.
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8 bg-transparent">
              <TabsTrigger
                value="form"
                className="flex items-center gap-2 text-white-900 data-[state=active]:text-neutral-900"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Mensagem</span>
              </TabsTrigger>
              <TabsTrigger
                value="info"
                className="flex items-center gap-2 text-white-900 data-[state=active]:text-neutral-900"
              >
                <MapPin className="h-4 w-4" />
                <span>Informações</span>
              </TabsTrigger>
              <TabsTrigger
                value="hours"
                className="flex items-center gap-2 text-white-900 data-[state=active]:text-neutral-900"
              >
                <Clock className="h-4 w-4" />
                <span>Horários</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="form">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700/30 shadow-xl"
              >
                <motion.form
                  variants={itemVariants}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-200">
                        Nome
                      </Label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        required
                        className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-400 focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-200">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-400 focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-200">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        placeholder="(00) 00000-0000"
                        className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-400 focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-slate-200">
                        Serviço de Interesse
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-neutral-800/50 border-neutral-700 text-white focus:ring-primary">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                          <SelectItem value="arquitetura">
                            Arquitetura & Civil
                          </SelectItem>
                          <SelectItem value="tecnologia">Tecnologia</SelectItem>
                          <SelectItem value="qualidade">
                            Gestão de Qualidade
                          </SelectItem>
                          <SelectItem value="consultoria">
                            Consultoria Empresarial
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-200">
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={5}
                      required
                      className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-400 focus-visible:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </motion.form>
              </motion.div>
            </TabsContent>

            <TabsContent value="info">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700/30 shadow-xl"
              >
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <motion.div
                      variants={itemVariants}
                      className="flex-1 space-y-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-white">
                            Endereço
                          </h3>
                          <p className="text-slate-300">
                            Rua da Consolação, 930 - Consolação, São Paulo - SP
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-white">
                            Email
                          </h3>
                          <p className="text-slate-300">comercial@ejemmackenzie.com.br</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-white">
                            Telefone
                          </h3>
                          <p className="text-slate-300">(11) 2114-8000</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex-1">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5520393212832!2d-46.65266331514833!3d-23.54860899455594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5837e1873e49%3A0x9be778abc2ed33a!2sEJEM%20-%20Empresa%20Junior%20Engenharia%20Mackenzie!5e0!3m2!1spt-BR!2sbr!4v1745375695077!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: "0.5rem" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização EJEM"
                        className="rounded-xl shadow-lg"
                      ></iframe>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="hours">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700/30 shadow-xl"
              >
                <motion.div
                  variants={itemVariants}
                  className="max-w-2xl mx-auto"
                >
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    Horário de Atendimento
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                      <span className="text-slate-300">Segunda-feira</span>
                      <span className="text-white font-medium">
                        09:00 - 18:00
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                      <span className="text-slate-300">Terça-feira</span>
                      <span className="text-white font-medium">
                        09:00 - 18:00
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                      <span className="text-slate-300">Quarta-feira</span>
                      <span className="text-white font-medium">
                        09:00 - 18:00
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                      <span className="text-slate-300">Quinta-feira</span>
                      <span className="text-white font-medium">
                        09:00 - 18:00
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                      <span className="text-slate-300">Sexta-feira</span>
                      <span className="text-white font-medium">
                        09:00 - 18:00
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                      <span className="text-slate-300">Sábado</span>
                      <span className="text-white font-medium">Fechado</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-slate-300">Domingo</span>
                      <span className="text-white font-medium">Fechado</span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-slate-300 text-sm">
                      Para agendamentos fora do horário comercial, entre em
                      contato por email ou telefone.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
