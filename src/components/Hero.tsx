import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 62,
      background: '#0A0A0A',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      {/* Accent glow */}
      <div style={{
        position: 'absolute',
        top: '10%', left: '-15%',
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(200,255,0,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', padding: '100px 24px' }}>

        <div className="label">AI &amp; Automation Consulting</div>

        <h1 style={{
          fontSize: 'clamp(40px, 6vw, 78px)',
          fontWeight: 700,
          color: '#F5F5F5',
          maxWidth: 820,
          marginBottom: 28,
        }}>
          I implement AI &amp; automation{' '}
          <span style={{ color: '#C8FF00' }}>directly in your business.</span>
        </h1>

        <p style={{
          fontSize: 18,
          color: '#666666',
          maxWidth: 500,
          lineHeight: 1.75,
          marginBottom: 48,
        }}>
          I come to you, find the process costing you the most, and build
          AI systems that handle it — 24/7, without you.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
          <a href="#book" className="btn-primary">
            Book a Free Audit Call <ArrowRight size={15} />
          </a>
          <span style={{ fontSize: 13, color: '#444444' }}>
            30-min call · No commitment
          </span>
        </div>

        {/* Guarantee badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: 'rgba(200, 255, 0, 0.06)',
          border: '1px solid rgba(200, 255, 0, 0.2)',
          borderRadius: 8,
          padding: '10px 16px',
          marginBottom: 32,
        }}>
          <span style={{ fontSize: 15 }}>🔒</span>
          <span style={{ fontSize: 13, color: '#C8FF00', fontWeight: 600 }}>
            You don't pay until you see results.
          </span>
        </div>

        {/* Urgency strip */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          borderTop: '1px solid #1E1E1E',
          paddingTop: 32,
          maxWidth: 560,
        }}>
          <div style={{
            width: 6, height: 6,
            borderRadius: '50%',
            background: '#C8FF00',
            flexShrink: 0,
          }} />
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.65 }}>
            Businesses that implement AI now will dominate their market.{' '}
            <span style={{ color: '#F5F5F5', fontWeight: 500 }}>
              Soon it won't be AI vs. no AI — it'll be businesses vs. irrelevance.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
