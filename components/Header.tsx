'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Начало' },
    { href: '#about', label: 'За нас' },
    { href: '#events', label: 'Концерти' },
    { href: '#archive', label: 'Архив' },
    { href: '#gallery', label: 'Галерия' },
    { href: '#contact', label: 'Контакт' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10">
              {/* Bird Logo SVG */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-yellow-500 group-hover:text-yellow-600 transition-colors"
                fill="currentColor"
              >
                <path d="M50 20 Q60 30 70 40 Q80 50 70 60 Q60 70 50 80 Q40 70 30 60 Q20 50 30 40 Q40 30 50 20 Z" />
                <path d="M30 50 Q50 35 70 50" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#1a365d]">
              AVE MUSICA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#1a365d] hover:text-yellow-500 font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1a365d] p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in border-t border-gray-200">
            <ul className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#1a365d] hover:text-yellow-500 block py-2 font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
