import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Events from '@/components/Events'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Events />
    </main>
  )
}
