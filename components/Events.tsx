'use client'

import { useState } from 'react'
import { Calendar, MapPin, Clock, ArrowRight, Ticket } from 'lucide-react'
import Image from 'next/image'

const events = [
  {
    id: 1,
    title: 'Весенен концерт',
    date: '15 Март 2024',
    day: '15',
    month: 'Мар',
    location: 'Национална музикална академия',
    time: '19:00 ч.',
    description: 'Специална програма с класически произведения и модерни аранжименти от Бах, Моцарт и Бетховен.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    category: 'Концерт',
  },
  {
    id: 2,
    title: 'Пасхална литургия',
    date: '20 Април 2024',
    day: '20',
    month: 'Апр',
    location: 'Света София',
    time: '10:00 ч.',
    description: 'Традиционни православни песнопения в празничната атмосфера на Великден.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    category: 'Религиозно',
  },
  {
    id: 3,
    title: 'Летен фестивал',
    date: '05 Юни 2024',
    day: '05',
    month: 'Юни',
    location: 'Градски градини',
    time: '20:30 ч.',
    description: 'Отворен концерт под звездите с народни и класически произведения.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    category: 'Фестивал',
  },
]

export default function Events() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-black via-purple-900/10 to-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Предстоящи събития
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Не пропускайте нашите концерти и изпълнения
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-center shadow-lg">
                  <div className="text-2xl font-bold leading-none">{event.day}</div>
                  <div className="text-xs font-medium uppercase">{event.month}</div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  {event.category}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <p className="text-white/60 text-sm mb-6 leading-relaxed line-clamp-2">
                  {event.description}
                </p>

                <button className="w-full group/btn flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300">
                  <Ticket className="w-4 h-4" />
                  Резервирай билет
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#events"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300"
          >
            Виж всички събития
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
