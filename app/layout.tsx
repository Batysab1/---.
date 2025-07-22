import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Narco RP México - Servidor FiveM",
  description:
    "El servidor más intenso de FiveM Roleplay mexicano. Cárteles vs Fuerzas del Orden. ¿Estás listo para los verdaderos topes?",
  keywords: "FiveM, Roleplay, México, Narco RP, GTA V, Servidor",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
