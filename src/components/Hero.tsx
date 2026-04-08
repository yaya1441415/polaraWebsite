import { ArrowRight, TrendingUp, Zap, Users } from 'lucide-react'

const stats = [
  { icon: <TrendingUp size={16} />, value: '3x', label: 'more leads on average' },
  { icon: <Zap size={16} />, value: '24/7', label: 'agent works non-stop' },
  { icon: <Users size={16} />, value: '100%', label: 'pre-qualified prospects' },
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 64,
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle blue glow top-right */}
      <div style={{
        position: 'absolute',
        top: '-15%', right: '-10%',
        width: 640, height: 640,
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* Amber glow bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: '0%', left: '-5%',
        width: 480, height: 480,
        background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', padding: '100px 24px' }}>

        <div className="label">AI Lead Generation for SMBs</div>

        <h1 style={{
          fontSize: 'clamp(42px, 6.5vw, 82px)',
          fontWeight: 800,
          color: '#0F172A',
          maxWidth: 860,
          marginBottom: 28,
          lineHeight: 1.06,
        }}>
          We build the AI agent that fills your pipeline with{' '}
          <span style={{ color: '#2563EB' }}>qualified leads.</span>
        </h1>

        <p style={{
          fontSize: 19,
          color: '#475569',
          maxWidth: 520,
          lineHeight: 1.7,
          marginBottom: 48,
        }}>
          We deploy a custom AI agent that finds, engages, and qualifies leads
          for your business — 24/7, without you lifting a finger.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
          <a href="#book" className="btn-primary">
            Get Your Free Lead Audit <ArrowRight size={16} />
          </a>
          <span style={{ fontSize: 14, color: '#94A3B8' }}>
            30-min call · No commitment
          </span>
        </div>

        {/* Guarantee badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: '#FFF7ED',
          border: '1px solid #FDE68A',
          borderRadius: 10,
          padding: '11px 18px',
          marginBottom: 64,
        }}>
          <span style={{ fontSize: 16 }}>🔒</span>
          <span style={{ fontSize: 13, color: '#92400E', fontWeight: 700 }}>
            You don't pay until you get qualified leads.
          </span>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          gap: 40,
          flexWrap: 'wrap',
          paddingTop: 32,
          borderTop: '1px solid #E2E8F0',
        }}>
          {stats.map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36, height: 36,
                background: '#2563EB',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff',
                flexShrink: 0,
              }}>
                {s.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
