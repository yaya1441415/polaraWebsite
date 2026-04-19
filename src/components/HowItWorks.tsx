import { Brain, Users, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: <Brain size={22} />,
    title: 'Configure your AI agent',
    desc: 'Tell VigorNode your coaching philosophy, training methodology, nutrition rules, and communication style. Your agent learns to coach exactly like you — in about 20 minutes.',
    accent: '#2563EB',
    bg: 'rgba(37,99,235,0.07)',
    border: 'rgba(37,99,235,0.14)',
  },
  {
    number: '02',
    icon: <Users size={22} />,
    title: 'Clients subscribe and get coached',
    desc: 'Share a link. Clients pay a monthly subscription and get immediate access to your AI — answering their questions, building workout plans, and supporting them between sessions. 24/7. In your voice.',
    accent: '#2563EB',
    bg: 'rgba(37,99,235,0.07)',
    border: 'rgba(37,99,235,0.14)',
  },
  {
    number: '03',
    icon: <TrendingUp size={22} />,
    title: 'Earn while you coach others',
    desc: 'You set the monthly subscription price. VigorNode takes a 20% commission per active client — no upfront cost, no fees. 50 clients at $20/month = $800/month running in the background.',
    accent: '#F59E0B',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.14)',
  },
]

export default function HowItWorks() {
  return (
    <section style={{
      background: '#F8FAFC',
      padding: '120px 0',
      borderTop: '1px solid #E2E8F0',
    }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="label" style={{ margin: '0 auto 24px auto' }}>How it works</div>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 52px)',
            fontWeight: 800,
            color: '#0F172A',
            margin: '0 auto 16px auto',
            maxWidth: 600,
          }}>
            One agent.{' '}
            <span style={{ color: '#2563EB' }}>Unlimited clients.</span>
          </h2>
          <p style={{
            fontSize: 17,
            color: '#475569',
            maxWidth: 500,
            margin: '0 auto',
            lineHeight: 1.75,
          }}>
            Set up once. Your AI coaches your clients around the clock — while you focus
            on the sessions that need you in the room.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }} className="vn-steps-grid">
          {steps.map(step => (
            <div key={step.number} style={{
              background: '#FFFFFF',
              border: `1px solid ${step.border}`,
              borderRadius: 20,
              padding: '40px 36px',
              boxShadow: '0 2px 16px rgba(15,23,42,0.05)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(15,23,42,0.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(15,23,42,0.05)'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 12, right: 20,
                fontSize: 72, fontWeight: 900,
                color: step.accent, opacity: 0.05,
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1, userSelect: 'none',
                letterSpacing: '-0.05em',
              }}>
                {step.number}
              </div>

              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 52, height: 52,
                background: step.bg,
                border: `1.5px solid ${step.border}`,
                borderRadius: 14,
                color: step.accent,
                marginBottom: 24,
              }}>
                {step.icon}
              </div>

              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: step.accent, marginBottom: 10,
              }}>
                Step {step.number}
              </div>

              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 19, fontWeight: 700, color: '#0F172A',
                marginBottom: 14, letterSpacing: '-0.02em', lineHeight: 1.3,
              }}>
                {step.title}
              </h3>

              <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.8 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div style={{
          marginTop: 48,
          background: 'linear-gradient(135deg, #0F172A, #1E293B)',
          borderRadius: 20,
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#2563EB', marginBottom: 10,
            }}>
              The result
            </div>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 24, fontWeight: 800, color: '#F1F5F9',
              letterSpacing: '-0.03em', maxWidth: 460, lineHeight: 1.3,
            }}>
              Your coaching expertise works for you 24/7 — even when you're off the clock.
            </h3>
          </div>
          <div style={{ display: 'flex', gap: 40, flexShrink: 0 }}>
            {[
              { n: '∞', label: 'Clients scalable' },
              { n: '0', label: 'Extra hours needed' },
              { n: '20%', label: 'Commission only' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 30, fontWeight: 800, color: '#F1F5F9',
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '-0.03em',
                }}>{s.n}</div>
                <div style={{ fontSize: 12, color: '#64748B', fontWeight: 500, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 760px) {
          .vn-steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
