'use client'

import { Coffee } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none mb-8">
            <span className="block text-orange-500">ANYONE</span>
            <span className="block text-white">CAN</span>
            <span className="block text-orange-500">SING</span>
          </h1>
          
          <button className="px-8 py-4 bg-[#d946ef] hover:bg-[#c026d3] text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
            <Coffee className="w-5 h-5" />
            BUY US A COFFEE
          </button>
        </div>

        {/* Banner Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80"
            alt="Microphone with warm lighting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

