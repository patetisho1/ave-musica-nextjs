'use client'

import { Play, Music2, Info } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block text-white mb-2">Добре дошли в</span>
          <span className="block text-yellow-400 mb-2">Ave Musica</span>
          <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            хорът на музикалното изкуство
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Открийте магията на многогласието и красотата на класическата музика.
          Ave Musica е хор, който съчетава традицията с модерността,
          създавайки незабравими музикални преживявания.
        </p>

        {/* Audio Player */}
        <div className="max-w-md mx-auto mb-12 bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-yellow-400/20">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Най-добро изпълнение
            </h3>
            <p className="text-gray-300">Слушайте магията на Ave Musica</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black flex items-center justify-center transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Music2 className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 ml-1" />
              )}
            </button>
            
            <div className="flex-1">
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 transition-all"
                  style={{ width: isPlaying ? '45%' : '0%' }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>0:00</span>
                <span>3:45</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#performances"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full transition-colors"
          >
            <Music2 className="w-5 h-5" />
            Чуй още
          </a>
          
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/50 transition-colors"
          >
            <Info className="w-5 h-5" />
            Научи повече
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

