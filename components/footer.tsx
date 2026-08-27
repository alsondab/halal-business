import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background px-6 py-14 text-foreground md:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 border-b border-border pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src="/halal-business-logo.png" alt="Halal Business" className="h-28 w-auto max-w-[210px] object-contain object-left" />
          <p className="mt-4 max-w-sm leading-7 text-muted-foreground">Des essentiels choisis pour celles et ceux qui construisent avec foi, discipline et intention.</p>
        </div>
        <div>
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Navigation</h2>
          <nav className="flex flex-col gap-3 text-sm"><a href="/products" className="transition-colors hover:text-accent">Catalogue</a><a href="/#categories" className="transition-colors hover:text-accent">Catégories</a><a href="/admin" className="transition-colors hover:text-accent">Administration</a></nav>
        </div>
        <div>
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Contact</h2>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground"><span className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" />Abidjan, Côte d&apos;Ivoire</span><span className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" />+225 05 94 40 58 25</span><span className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" />bonjour@halalbusiness.ci</span></div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between"><span>© 2026 HALAL BUSINESS. Tous droits réservés.</span><span>Commande par WhatsApp · Paiement à la livraison</span></div>
    </footer>
  )
}
