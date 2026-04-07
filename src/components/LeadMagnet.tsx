import { Gift, CheckCircle2, ArrowRight } from 'lucide-react'

const perks = [
  'Modern, conversion-optimized design',
  'Mobile-first & fast-loading',
  'SEO structured for insurance keywords',
  'Built-in chatbot integration (free)',
  'Delivered within 5 business days',
]

export default function LeadMagnet() {
  return (
    <section id="free-offer" style={{
      background: 'linear-gradient(135deg, #0b1f4a 0%, #162d6e 60%, #0c2461 100%)',
      padding: '96px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }} className="magnet-grid">

          {/* Left */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 100, padding: '6px 16px',
              marginBottom: 28,
            }}>
              <Gift size={14} color="#fbbf24" />
              <span style={{ color: '#fbbf24', fontSize: 13, fontWeight: 600 }}>
                Limited-time free offer
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(30px, 4vw, 46px)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: 20,
            }}>
              We'll rebuild your website{' '}
              <span style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                for free
              </span>
            </h2>

            <p style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 440,
            }}>
              Book a demo with us and we'll redesign your insurance website at no cost —
              giving you a modern, high-converting site with our AI chatbot already built in.
            </p>

            <a href="#book" className="btn-primary" style={{
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              color: '#0b1f4a',
              boxShadow: '0 4px 20px rgba(251,191,36,0.35)',
              fontSize: 15,
            }}>
              Claim your free website <ArrowRight size={16} />
            </a>

            <p style={{
              marginTop: 16,
              fontSize: 13,
              color: 'rgba(255,255,255,0.35)',
            }}>
              No credit card required. No strings attached.
            </p>
          </div>

          {/* Right — Perks card */}
          <div>
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 20,
              padding: '40px 36px',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', marginBottom: 20 }}>
                WHAT YOU GET FOR FREE
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {perks.map(perk => (
                  <div key={perk} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <CheckCircle2 size={20} color="#4ade80" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.5 }}>
                      {perk}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 32,
                padding: '16px 20px',
                background: 'rgba(74,222,128,0.08)',
                border: '1px solid rgba(74,222,128,0.2)',
                borderRadius: 12,
              }}>
                <div style={{ fontSize: 13, color: '#4ade80', fontWeight: 600 }}>
                  Total value: ~$3,000 — yours free
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>
                  Available for the first 10 companies who book a demo this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .magnet-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
