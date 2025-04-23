import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-slate-200">
      <div className="container px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">EJEM</h3>
            <p className="text-slate-400 max-w-xs">
              Empresa Júnior de Engenharia Mackenzie, focada em causar impacto
              com soluções e projetos de excelência.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/#sobre"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicos"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/#depoimentos"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="/#contato"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  R. Piauí, 65 - Higienópolis, São Paulo - SP, 01241-001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">(11) 2114-8000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">comercial@ejemmackenzie.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-400 text-sm">
          <p>
            © {new Date().getFullYear()} EJEM - Empresa Júnior de Engenharia
            Mackenzie. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
