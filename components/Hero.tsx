'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, Music2, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentText, setCurrentText] = useState(0)

  const heroTexts = [
    'Хорът на музикалното изкуство',
    'Гласове в хармония',
    'Магията на многогласието',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>

      {/* Floating Notes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-400/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${20 + Math.random() * 40}px`,
            }}
          >
            ♪
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Ave Musica
            </span>
          </h1>
          
          {/* Animated Subtitle */}
          <div className="h-16 sm:h-20 flex items-center justify-center">
            <p
              key={currentText}
              className="text-2xl sm:text-3xl md:text-4xl text-white/90 font-light animate-fade-in"
            >
              {heroTexts[currentText]}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/70 mb-12 leading-relaxed">
          Открийте магията на многогласието и красотата на класическата хорова музика.
          Професионален хор, създаващ незабравими музикални преживявания.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#performances"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2"
          >
            <Music2 className="w-5 h-5 group-hover:animate-pulse" />
            Чуй изпълнения
          </a>
          
          <a
            href="#about"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            Научи повече
          </a>
        </div>

        {/* Audio Player Card */}
        <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-purple-500/50"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 ml-0.5" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </button>
            
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-1">Най-добро изпълнение</h3>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300"
                  style={{ width: isPlaying ? '65%' : '0%' }}
                />
              </div>
              <div className="flex justify-between text-xs text-white/60 mt-2">
                <span>0:00</span>
                <span>3:45</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group">
          <span className="text-sm font-medium">Разгледай още</span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}
