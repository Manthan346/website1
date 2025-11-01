import type React from "react"
import type { Metadata } from "next"
import { Poppins, Fredoka } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
})

export const metadata: Metadata = {
  title: "Kamkii - Creator Monetization Platform",
  description: "Connect with fans, create exclusive content, and earn more with Kamkii",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${fredoka.variable} font-poppins antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
