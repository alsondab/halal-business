import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </main>
  )
}
