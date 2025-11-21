'use client'

import { Twitter, Youtube, Facebook } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-8 h-8">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-yellow-500 group-hover:text-yellow-400 transition-colors"
                fill="currentColor"
              >
                <path d="M50 20 Q60 30 70 40 Q80 50 70 60 Q60 70 50 80 Q40 70 30 60 Q20 50 30 40 Q40 30 50 20 Z" />
                <path d="M30 50 Q50 35 70 50" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </div>
            <span className="text-xl font-bold">
              AVE MUSICA
            </span>
          </Link>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Privacy Policy */}
          <p className="text-sm text-white/70 text-center md:text-right">
            Privacy policy •{' '}
            <a href="mailto:info@avemusica.com" className="hover:text-yellow-400 transition-colors">
              info@avemusica.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

