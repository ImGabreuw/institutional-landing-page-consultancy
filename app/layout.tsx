import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "EJEM - Empresa Júnior de Engenharia Mackenzie",
    template: "%s | EJEM",
  },
  description: "Soluções de engenharia com excelência para o seu negócio",
  keywords: ["engenharia", "consultoria", "mackenzie", "arquitetura", "tecnologia"],
  authors: [{ name: "EJEM" }],
  creator: "EJEM",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ejem.com.br",
    title: "EJEM - Empresa Júnior de Engenharia Mackenzie",
    description: "Soluções de engenharia com excelência para o seu negócio",
    siteName: "EJEM",
  },
  twitter: {
    card: "summary_large_image",
    title: "EJEM - Empresa Júnior de Engenharia Mackenzie",
    description: "Soluções de engenharia com excelência para o seu negócio",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
