import { ArrowUpRight } from "lucide-react"

export function Newsletter() {
  return (
    <section className="border-y border-border bg-primary px-6 py-16 text-primary-foreground md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-accent">Restons en contact</p>
          <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">Une ambition se construit mieux accompagnée.</h2>
          <p className="mt-4 max-w-lg leading-7 text-primary-foreground/70">Écrivez-nous pour une commande, une disponibilité ou une sélection pensée pour votre quotidien.</p>
        </div>
        <a className="inline-flex w-fit items-center gap-3 border border-primary-foreground/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground" href="https://wa.me/225594405825" target="_blank" rel="noreferrer">Nous écrire sur WhatsApp <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </section>
  )
}
