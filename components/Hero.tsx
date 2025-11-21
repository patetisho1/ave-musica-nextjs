'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      <div className="w-full h-screen relative">
        {/* Background Image - Left Side */}
        <div className="absolute inset-0 w-1/2 h-full">
          <Image
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80"
            alt="Choir members performing on stage"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Blue Overlay - Right Side (Triangular) */}
        <div className="absolute inset-0 right-0 w-1/2 h-full bg-[#1a365d] clip-path-triangle">
          {/* Content on Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              ПОТОПЕТЕ СЕ В{' '}
              <span className="text-yellow-400">ВЕТ А</span>
              <br />
              НА МУЗИКАТА
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              ОТКРИЙТЕ ХОР AVE MUSICA
            </p>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-[#1a365d] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Научете повече
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="absolute bottom-0 left-0 w-full bg-gray-100 py-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#1a365d] text-sm font-medium text-center">
            AVE AVE MUSLOM
          </p>
        </div>
      </div>
    </section>
  )
}
