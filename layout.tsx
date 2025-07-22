import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "𝐌𝐀-ᴄᴏᴀʜᴜɪʟᴀ ᴄᴏɴᴄᴇᴘᴛ. - Web",
  description:
    "𝐌𝐀-ᴄᴏᴀʜᴜɪʟᴀ ᴄᴏɴᴄᴇᴘᴛ.",
  keywords: "FiveM, Roleplay, México, 𝐌𝐀-ᴄᴏᴀʜᴜɪʟᴀ ᴄᴏɴᴄᴇᴘᴛ., GTA V, Servidor",
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
