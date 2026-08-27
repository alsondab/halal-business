import Link from "next/link"

export default function NotFound() {
  return <main className="flex min-h-[70vh] items-center justify-center px-6 text-center"><div><p className="font-mono text-xs uppercase tracking-[.3em] text-primary">HALAL BUSINESS</p><h1 className="mt-5 text-5xl">Page introuvable</h1><p className="mt-4 text-muted-foreground">Ce produit ou cette page n&apos;existe plus.</p><Link href="/" className="mt-8 inline-block bg-primary px-6 py-3 text-sm text-primary-foreground">Retour à l&apos;accueil</Link></div></main>
}
