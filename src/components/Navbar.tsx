'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'
import ShowedlyLogo from './ShowedlyLogo'
import { useBooking } from './BookingContext'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results', href: '#results' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openModal } = useBooking()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" aria-label="Showedly home">
            <ShowedlyLogo iconSize={26} wordmarkSize="md" />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-150 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium px-3 py-2"
            >
              Sign in
            </a>
            <Button size="sm" onClick={openModal}>Book a Demo</Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-100">
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Button size="md" className="w-full justify-center" onClick={openModal}>
              Book a Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
