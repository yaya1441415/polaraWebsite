import { ArrowRight, AlertTriangle, Clock, TrendingDown } from 'lucide-react'

const pains = [
  { icon: <Clock size={14} />, text: 'Hours lost to manual scheduling every morning' },
  { icon: <AlertTriangle size={14} />, text: 'Trips missed when drivers call out last minute' },
  { icon: <TrendingDown size={14} />, text: 'Revenue turned down because you couldn\'t staff it in time' },
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
      {/* Blue glow top-right */}
      <div style={{
        position: 'absolute',
        top: '-15%', right: '-10%',
        width: 640, height: 640,
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '0%', left: '-5%',
        width: 480, height: 480,
        background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', padding: '100px 24px' }}>

        <div className="label">AI Scheduling Agent · NEMT Operators</div>

        <h1 style={{
          fontSize: 'clamp(42px, 6vw, 80px)',
          fontWeight: 800,
          color: '#0F172A',
          maxWidth: 860,
          marginBottom: 28,
          lineHeight: 1.06,
        }}>
          Stop scheduling trips by hand.{' '}
          <span style={{ color: '#2563EB' }}>Let the AI handle it.</span>
        </h1>

        <p style={{
          fontSize: 19,
          color: '#475569',
          maxWidth: 560,
          lineHeight: 1.7,
          marginBottom: 36,
        }}>
          DispatchIQ is an AI scheduling agent that assigns trips to drivers in real time —
          handling callouts, last-minute changes, and broker feeds automatically,
          without a dispatcher lifting a finger.
        </p>

        {/* Pain points */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 44 }}>
          {pains.map(p => (
            <div key={p.text} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              fontSize: 14,
              color: '#64748B',
              fontWeight: 500,
            }}>
              <span style={{ color: '#EF4444', flexShrink: 0 }}>{p.icon}</span>
              {p.text}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
          <a href="#book" className="btn-primary">
            See DispatchIQ in Action <ArrowRight size={16} />
          </a>
          <span style={{ fontSize: 14, color: '#94A3B8' }}>
            30-min demo · No commitment
          </span>
        </div>

        {/* Result badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: '#FFFBEB',
          border: '1px solid #FDE68A',
          borderRadius: 10,
          padding: '11px 18px',
        }}>
          <span style={{ fontSize: 16 }}>⚡</span>
          <span style={{ fontSize: 13, color: '#92400E', fontWeight: 700 }}>
            Operators cut scheduling time by up to 80% — and stop missing trips.
          </span>
        </div>

      </div>
    </section>
  )
}
