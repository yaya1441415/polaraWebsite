'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'
import Logo from './Logo'
import { useBooking } from './BookingContext'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
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
          ? 'bg-[#FAFAF8]/95 backdrop-blur-xl border-b border-gray-200/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" aria-label="netsolution.ai home">
            <Logo iconSize={24} wordmarkSize="md" />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-500 hover:text-[#1E2A4A] hover:bg-gray-100/70 rounded-lg transition-all duration-150 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" onClick={openModal}>
              Book a Strategy Call
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-gray-500 hover:text-[#1E2A4A] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-200/60">
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 text-sm text-gray-500 hover:text-[#1E2A4A] hover:bg-gray-100 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Button size="md" className="w-full justify-center" onClick={openModal}>
              Book a Strategy Call
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
