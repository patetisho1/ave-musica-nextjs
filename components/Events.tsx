'use client'

import { useState } from 'react'
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

const mockEvents = [
  {
    id: 1,
    title: 'Весенен концерт',
    date: '15 Мар',
    day: '15',
    month: 'Мар',
    location: 'Национална музикална академия',
    time: '19:00 ч.',
    description: 'Специална програма с класически произведения и модерни аранжименти',
    image: 'https://via.placeholder.com/400x250/2c3e50/ffffff?text=Весенен+концерт',
  },
  {
    id: 2,
    title: 'Пасхална литургия',
    date: '20 Апр',
    day: '20',
    month: 'Апр',
    location: 'Света София',
    time: '10:00 ч.',
    description: 'Традиционни православни песнопения в празничната атмосфера',
    image: 'https://via.placeholder.com/400x250/8e44ad/ffffff?text=Пасхална+литургия',
  },
  {
    id: 3,
    title: 'Летен фестивал',
    date: '05 Юни',
    day: '05',
    month: 'Юни',
    location: 'Градски градини',
    time: '20:30 ч.',
    description: 'Отворен концерт под звездите с народни и класически произведения',
    image: 'https://via.placeholder.com/400x250/3498db/ffffff?text=Летен+фестивал',
  },
]

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockEvents.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockEvents.length) % mockEvents.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Предстоящи събития
          </h2>
          <p className="text-xl text-gray-300">
            Не пропускайте нашите концерти и изпълнения
          </p>
        </div>

        {/* Events Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mockEvents.map((event) => (
                <div key={event.id} className="min-w-full">
                  <div className="bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden border border-yellow-400/20">
                    <div className="md:flex">
                      {/* Event Image */}
                      <div className="relative md:w-1/2 h-64 md:h-auto">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-lg text-center">
                          <div className="text-2xl font-bold">{event.day}</div>
                          <div className="text-sm font-semibold">{event.month}</div>
                        </div>
                      </div>

                      {/* Event Content */}
                      <div className="md:w-1/2 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                            {event.title}
                          </h3>
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-gray-300">
                              <MapPin className="w-5 h-5 text-yellow-400" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                              <Clock className="w-5 h-5 text-yellow-400" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                        <button className="w-full md:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full transition-colors">
                          Резервирай билет
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black flex items-center justify-center transition-colors"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {mockEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index
                      ? 'bg-yellow-400'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black flex items-center justify-center transition-colors"
              aria-label="Next event"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

