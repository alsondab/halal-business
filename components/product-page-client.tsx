"use client"

import Link from "next/link"
import { ArrowLeft, Check, MessageCircle, Minus, Plus, ShieldCheck, Truck } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { formatPrice, getProduct } from "@/lib/data/catalog"
import { useCart } from "@/contexts/cart-context"

export function ProductPageClient({ productHandle }: { productHandle: string }) {
  const product = getProduct(productHandle)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!product) return <main className="mx-auto max-w-7xl px-6 py-24"><h1 className="text-4xl">Produit introuvable</h1><Link href="/products" className="mt-6 inline-block underline">Retour au catalogue</Link></main>

  const orderUrl = `https://wa.me/225594405825?text=${encodeURIComponent(`Bonjour HALAL BUSINESS, je souhaite commander ${product.name} x${quantity}.`)}`

  return <main className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-16"><Link href="/products" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> Retour au catalogue</Link><div className="grid gap-12 lg:grid-cols-2"><div className="aspect-square overflow-hidden bg-secondary"><img src={product.image} alt={product.name} className="h-full w-full object-cover" /></div><div className="flex flex-col justify-center"><div className="flex flex-wrap gap-2">{product.tags.map((tag) => <span key={tag} className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider">{tag}</span>)}</div><h1 className="mt-5 text-4xl md:text-6xl">{product.name}</h1><p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">{product.description}</p><p className="mt-8 font-mono text-2xl">{formatPrice(product.price)}</p><div className="mt-8 flex flex-wrap items-center gap-4"><div className="flex items-center border border-border"><button aria-label="Diminuer la quantité" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3"><Minus className="size-4" /></button><span className="min-w-10 text-center font-mono">{quantity}</span><button aria-label="Augmenter la quantité" onClick={() => setQuantity(quantity + 1)} className="p-3"><Plus className="size-4" /></button></div><Button onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image, handle: product.slug }, quantity)} className="h-12 bg-primary px-6 text-primary-foreground">Ajouter au panier</Button><a href={orderUrl} className="inline-flex h-12 items-center gap-2 border border-primary px-5 text-sm"><MessageCircle className="size-4" /> Commander</a></div><div className="mt-10 grid gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:grid-cols-3"><span className="flex gap-2"><Truck className="size-4 text-primary" /> Livraison Abidjan</span><span className="flex gap-2"><ShieldCheck className="size-4 text-primary" /> Produit vérifié</span><span className="flex gap-2"><Check className="size-4 text-primary" /> Disponible</span></div><div className="mt-10 border-t border-border pt-6"><h2 className="font-mono text-xs uppercase tracking-widest text-primary">Détails techniques</h2><dl className="mt-4 grid gap-3 sm:grid-cols-2">{Object.entries(product.specs).map(([key, value]) => <div key={key} className="flex justify-between gap-4 border-b border-border/60 py-2 text-sm"><dt className="text-muted-foreground">{key}</dt><dd>{value}</dd></div>)}</dl></div></div></div></main>
}
