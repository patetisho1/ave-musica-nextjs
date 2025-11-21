'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] overflow-hidden pt-20">
      {/* Purple Diamond Shape - Top Left */}
      <div className="absolute top-20 left-4 md:left-8 z-20 w-16 h-16 md:w-20 md:h-20 transform rotate-45 bg-purple-600 shadow-lg" />

      {/* Background Image - Full Width */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&q=80"
          alt="Choir members performing on stage"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Overlay Text Bar at Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-white py-4 border-t border-gray-200 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#1a365d] text-lg font-medium text-center">
            AVE AVE MUSLOM
          </p>
        </div>
      </div>
    </section>
  )
}
