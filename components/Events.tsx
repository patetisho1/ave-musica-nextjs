'use client'

import Image from 'next/image'
import { Calendar, ArrowRight, Eye } from 'lucide-react'
import Link from 'next/link'

interface EventItem {
  id: number
  title: string
  bgImage: string
  overlayText?: string[]
  gridImages?: number
  buttonText?: string
}

const events: EventItem[] = [
  {
    id: 1,
    title: 'ПРЕДСТОЯЩИ СЪБИТИЯ',
    bgImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    overlayText: [
      'NOFOKLOMOF ELANTR',
      '20. 20-24,20-23',
      'Ceesdosecusk',
      'Tebtherecinta Ahorirsegnest'
    ],
  },
  {
    id: 2,
    title: 'НАШИЯТ АРХИВ',
    bgImage: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    gridImages: 6,
  },
  {
    id: 3,
    title: 'ПРИСЪЕДИНЕТЕ СЕ КЪМ НАС',
    bgImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    buttonText: 'ВИЖТЕ ПОВЕЧЕ',
  },
]

export default function Events() {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            ПОТОПЕТЕ СЕ В СВЕТА НА МУЗИКАТА
          </h2>
          <p className="text-xl md:text-2xl text-black">
            ОТКРИЙТЕ ХОР AVE MUSICA
          </p>
        </div>

        {/* Three Content Blocks */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Block 1: Upcoming Events */}
          <div className="group relative h-[500px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0">
              <Image
                src={events[0].bgImage}
                alt="Upcoming Events"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />
            </div>
            
            {/* Overlay Text */}
            {events[0].overlayText && (
              <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-white">
                {events[0].overlayText.map((text, index) => (
                  <p
                    key={index}
                    className="text-lg md:text-xl font-medium mb-2 text-center"
                  >
                    {text}
                  </p>
                ))}
              </div>
            )}

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4">
              <h3 className="text-xl font-bold text-[#1a365d]">
                {events[0].title}
              </h3>
            </div>
          </div>

          {/* Block 2: Archive */}
          <div className="group relative h-[500px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gray-100">
              {/* Grid of Images */}
              <div className="grid grid-cols-3 gap-2 p-2 h-full">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="relative overflow-hidden rounded">
                    <Image
                      src={`https://images.unsplash.com/photo-${1511671782779 + i}?w=400&q=80`}
                      alt={`Archive image ${i + 1}`}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4">
              <h3 className="text-xl font-bold text-[#1a365d]">
                {events[1].title}
              </h3>
            </div>
          </div>

          {/* Block 3: Join Us */}
          <div className="group relative h-[500px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0">
              <Image
                src={events[2].bgImage}
                alt="Join Us"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            </div>

            {/* Button */}
            {events[2].buttonText && (
              <div className="absolute bottom-20 left-0 right-0 px-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-[#1a365d] hover:bg-[#2c5282] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Eye className="w-5 h-5" />
                  {events[2].buttonText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4">
              <h3 className="text-xl font-bold text-[#1a365d]">
                {events[2].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
