import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Events from '@/components/Events'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Events />
      <Newsletter />
    </main>
  )
}
