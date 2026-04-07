import { useState, useEffect } from 'react'
import { Bot, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 24px',
      transition: 'all 0.3s',
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.06)' : 'none',
    }}>
      <div style={{
        maxWidth: 1160,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 68,
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36,
            height: 36,
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Bot size={20} color="white" strokeWidth={2} />
          </div>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#0b1f4a', letterSpacing: '-0.02em' }}>
            Polar<span style={{ color: '#2563eb' }}>a</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-links">
          {['How it works','Free offer', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              style={{ fontSize: 14, fontWeight: 500, color: '#475569', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2563eb')}
              onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#book"
          className="btn-primary"
          style={{ fontSize: 14, padding: '10px 20px' }}
        >
          Book a Demo
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#0b1f4a',
            padding: 4,
          }}
          className="menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'white',
          borderTop: '1px solid #e2e8f0',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {['How it works', 'Features', 'Free offer', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 15, fontWeight: 500, color: '#475569' }}
            >
              {link}
            </a>
          ))}
          <a href="#book" className="btn-primary" onClick={() => setMenuOpen(false)}
            style={{ justifyContent: 'center' }}>
            Book a Demo
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .menu-btn { display: block !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
