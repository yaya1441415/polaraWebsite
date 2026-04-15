import { Upload, Zap, Brain, Phone } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: <Upload size={22} />,
    title: 'Add your leads',
    desc: 'Import your prospect list — names, numbers, emails, context. The agent reads every detail and builds a full profile for each lead before making a single contact.',
    accent: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.15)',
  },
  {
    number: '02',
    icon: <Zap size={22} />,
    title: 'Agent sends the right message at the right time',
    desc: 'The AI crafts a personalized message for each lead — not a template blast. It factors in their profile, the time of day, prior interactions, and industry context. Then sends it at the exact moment they\'re most likely to respond.',
    accent: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.15)',
  },
  {
    number: '03',
    icon: <Brain size={22} />,
    title: 'Remembers everything about every client',
    desc: 'Every conversation, objection, preference, and buying signal is stored. Next time the agent reaches out, it picks up exactly where you left off — so every interaction feels personal, not automated.',
    accent: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.15)',
  },
  {
    number: '04',
    icon: <Phone size={22} />,
    title: 'Answers their calls. Calls them back. Never stops.',
    desc: 'When a lead calls, the agent picks up instantly — day or night. It knows who they are, what they care about, and how close they are to a yes. And when the timing is right, it proactively calls them to push the deal forward.',
    accent: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.15)',
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
            fontSize: 'clamp(32px, 4vw, 54px)',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: 16,
            maxWidth: 640,
            margin: '0 auto 16px auto',
          }}>
            From cold lead to closed deal —{' '}
            <span style={{ color: '#2563EB' }}>fully automated.</span>
          </h2>
          <p style={{
            fontSize: 17,
            color: '#475569',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.75,
          }}>
            You focus on running your business. The agent handles every touchpoint
            of the sales conversation — messages, memory, and calls.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }} className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} style={{
              background: '#FFFFFF',
              border: `1px solid ${step.border}`,
              borderRadius: 20,
              padding: '44px 40px',
              boxShadow: '0 2px 16px rgba(15,23,42,0.05)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              position: 'relative',
              overflow: 'hidden',
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
              {/* Step number watermark */}
              <div style={{
                position: 'absolute',
                top: 16, right: 24,
                fontSize: 64,
                fontWeight: 900,
                color: step.accent,
                opacity: 0.05,
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1,
                letterSpacing: '-0.05em',
                userSelect: 'none',
              }}>
                {step.number}
              </div>

              {/* Icon */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 52,
                height: 52,
                background: step.bg,
                border: `1.5px solid ${step.border}`,
                borderRadius: 14,
                color: step.accent,
                marginBottom: 24,
              }}>
                {step.icon}
              </div>

              {/* Step label */}
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: step.accent,
                marginBottom: 10,
              }}>
                Step {step.number}
              </div>

              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: '#0F172A',
                marginBottom: 14,
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: 15,
                color: '#475569',
                lineHeight: 1.8,
              }}>
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
          gap: 32,
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#60A5FA',
              marginBottom: 10,
            }}>
              The result
            </div>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 24,
              fontWeight: 800,
              color: '#F1F5F9',
              letterSpacing: '-0.03em',
              maxWidth: 480,
              lineHeight: 1.3,
            }}>
              Your low-ticket sales team becomes a relentless, 24/7 closing machine.
            </h3>
          </div>
          <div style={{
            display: 'flex',
            gap: 40,
            flexShrink: 0,
          }}>
            {[
              { n: '10x', label: 'More touchpoints' },
              { n: '0', label: 'Missed calls' },
              { n: '∞', label: 'Memory capacity' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: '#F1F5F9',
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
        @media (max-width: 720px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
