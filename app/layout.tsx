import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { CartProvider } from "@/contexts/cart-context"
import { CartDrawer } from "@/components/cart-drawer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
export const metadata: Metadata = { title: "HALAL BUSINESS — L'élégance au service de votre ambition", description: "Une sélection sobre et précise pour les entrepreneurs qui avancent avec intention." }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="fr" className="bg-background"><body className={`${inter.variable} ${playfair.variable}`}><CartProvider><Navbar />{children}<CartDrawer /></CartProvider></body></html> }
