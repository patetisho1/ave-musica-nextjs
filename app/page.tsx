import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Events from '@/components/Events'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Events />
      <Footer />
    </main>
  )
}
