export type Category = { id: string; name: string; slug: string; description: string; icon?: string }
export type Product = { id: string; name: string; slug: string; description: string; price: number; category: string; tags: string[]; image: string; video?: string; specs: Record<string, string>; available: boolean; featured?: boolean }

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`

export const categories: Category[] = [
  { id: "cat-1", name: "Smartphones", slug: "smartphones", description: "iPhone et Samsung sélectionnés pour rester connecté, partout." },
  { id: "cat-2", name: "Protection", slug: "protection", description: "Coques, verres trempés et protections pensées pour durer." },
  { id: "cat-3", name: "Charge & audio", slug: "charge-audio", description: "Chargeurs rapides, câbles fiables et écouteurs du quotidien." },
]

export const products: Product[] = [
  { id: "p-1", name: "iPhone 15 Pro", slug: "iphone-15-pro", description: "Le smartphone Apple en titane, avec appareil photo pro et autonomie longue durée.", price: 650000, category: "smartphones", tags: ["Apple", "Premium", "Nouveau"], image: image("photo-1592286927505-2fd0c7e2b3f2"), specs: { Stockage: "256 Go", Écran: "6,1 pouces", Réseau: "5G", Garantie: "12 mois" }, available: true, featured: true },
  { id: "p-2", name: "Samsung Galaxy S24", slug: "samsung-galaxy-s24", description: "Un écran lumineux, une photo détaillée et toute la puissance Galaxy dans un format élégant.", price: 480000, category: "smartphones", tags: ["Samsung", "5G", "Bestseller"], image: image("photo-1610945265064-0e34e5519bbf"), specs: { Stockage: "256 Go", Écran: "6,2 pouces AMOLED", Réseau: "5G", Garantie: "12 mois" }, available: true, featured: true },
  { id: "p-3", name: "Coque MagSafe transparente", slug: "coque-magsafe-transparente", description: "Une protection fine et résistante qui laisse apparaître votre iPhone et fonctionne avec MagSafe.", price: 12000, category: "protection", tags: ["iPhone", "MagSafe", "Essentiel"], image: image("photo-1601593346740-925612772716"), specs: { Compatibilité: "iPhone 12 à 15", Matière: "TPU anti-choc", Fonction: "Compatible MagSafe", Finition: "Transparente" }, available: true, featured: true },
  { id: "p-4", name: "Chargeur USB-C 25W", slug: "chargeur-usb-c-25w", description: "La charge rapide pour Samsung, iPhone et tous vos appareils USB-C.", price: 15000, category: "charge-audio", tags: ["Rapide", "USB-C"], image: image("photo-1583863788434-e58a36330cf0"), specs: { Puissance: "25W", Port: "USB-C", Sécurité: "Protection surtension", Inclus: "Adaptateur secteur" }, available: true, featured: true },
  { id: "p-5", name: "Écouteurs sans fil Pro", slug: "ecouteurs-sans-fil-pro", description: "Un son clair, des appels nets et un boîtier compact pour vos journées mobiles.", price: 35000, category: "charge-audio", tags: ["Audio", "Sans fil"], image: image("photo-1606220945770-b5b6c2c55bf1"), specs: { Connexion: "Bluetooth 5.3", Autonomie: "24 heures", Réduction: "Réduction du bruit", Boîtier: "USB-C" }, available: true, featured: false },
  { id: "p-6", name: "Verre trempé Galaxy S24", slug: "verre-trempe-galaxy-s24", description: "Une protection écran 9H, transparente et facile à poser, pour garder votre écran intact.", price: 8000, category: "protection", tags: ["Samsung", "9H"], image: image("photo-1556656793-08538906a9f8"), specs: { Compatibilité: "Galaxy S24", Dureté: "9H", Épaisseur: "0,33 mm", Inclus: "Kit de pose" }, available: true, featured: false },
]

export const formatPrice = (price: number) => `${price.toLocaleString("fr-FR")} FCFA`
export const getProduct = (slug: string) => products.find((product) => product.slug === slug)
export const getWhatsAppUrl = (items: { name: string; price: number; quantity: number }[], total: number) => {
  const lines = items.map((item) => `- ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`).join("\n")
  return `https://wa.me/225594405825?text=${encodeURIComponent(`Bonjour HALAL BUSINESS, je souhaite commander :\n${lines}\n\nTotal estimé : ${formatPrice(total)}\n\nNom :\nVille :\nAdresse :`)}`
}

export const catalogRepository = { list: () => products, categories: () => categories, get: getProduct }
export const ADMIN_STORAGE_KEY = "halal-business-catalog"
