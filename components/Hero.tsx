'use client'

import { Coffee } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
              <span className="block text-orange-500">ANYONE</span>
              <span className="block text-white">CAN</span>
              <span className="block text-orange-500">SING</span>
            </h1>
            
            <button className="px-8 py-4 bg-[#d946ef] hover:bg-[#c026d3] text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              BUY US A COFFEE
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[600px] md:h-[700px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
              alt="Choir singing"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

