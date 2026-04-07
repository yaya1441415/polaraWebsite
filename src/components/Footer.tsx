import { Bot, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: '#060d1f',
      color: 'rgba(255,255,255,0.5)',
      padding: '60px 24px 32px',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: 48,
          marginBottom: 48,
          paddingBottom: 40,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36,
                background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Bot size={20} color="white" />
              </div>
              <span style={{ fontWeight: 700, fontSize: 18, color: 'white', letterSpacing: '-0.02em' }}>
                Polar<span style={{ color: '#3b82f6' }}>a</span>
              </span>
            </a>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              Polara — the AI chatbot built exclusively for insurance companies, turning your website into a 24/7 client advisor.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <Mail size={16} />, href: 'mailto:hello@polara.ai' },
                { icon: <ExternalLink size={16} />, href: '#' },
                { icon: <ExternalLink size={16} />, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  style={{
                    width: 36, height: 36,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)'
                    ;(e.currentTarget as HTMLElement).style.color = 'white'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'
                    ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <div style={{ color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 16 }}>Product</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['How it works', 'Features', 'Pricing', 'Security'].map(l => (
                <a key={l} href="#" style={{
                  fontSize: 14, color: 'rgba(255,255,255,0.45)',
                  transition: 'color 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 16 }}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['About', 'Blog', 'Privacy policy', 'Terms of service'].map(l => (
                <a key={l} href="#" style={{
                  fontSize: 14, color: 'rgba(255,255,255,0.45)',
                  transition: 'color 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          fontSize: 13,
        }}>
          <span>© {new Date().getFullYear()} Polara. All rights reserved.</span>
          <span>Made with care for the insurance industry</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
