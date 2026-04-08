const steps = [
  {
    number: '01',
    title: 'We learn your business',
    desc: 'Tell us your ideal customer, your offer, and your market. We build a precise lead profile tailored to your business — nothing generic.',
    accent: '#2563EB',
    bg: '#F0F7FF',
  },
  {
    number: '02',
    title: 'The AI agent goes to work',
    desc: 'Our agent targets your ideal customers across multiple channels, engages them automatically, and qualifies them before you ever pick up the phone.',
    accent: '#0369A1',
    bg: '#F0F9FF',
  },
  {
    number: '03',
    title: 'You get warm leads',
    desc: 'Receive a steady stream of pre-qualified prospects ready to buy. You focus on closing deals. We handle the entire pipeline.',
    accent: '#D97706',
    bg: '#FFFBEB',
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

        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 72,
          gap: 32,
          flexWrap: 'wrap',
        }}>
          <div>
            <div className="label">The Process</div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 800,
              color: '#0F172A',
            }}>
              Simple.<br />Targeted.<br />Consistent.
            </h2>
          </div>
          <p style={{
            fontSize: 17,
            color: '#475569',
            maxWidth: 340,
            lineHeight: 1.75,
          }}>
            No cold calling. No ad spend. No guesswork.
            Just a proven AI system that delivers qualified leads straight to your inbox.
          </p>
        </div>

        <div className="steps-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {steps.map((step) => (
            <div key={step.number} style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: 16,
              padding: '44px 36px',
              boxShadow: '0 2px 12px rgba(15,23,42,0.05)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(15,23,42,0.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(15,23,42,0.05)'
              }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                background: step.bg,
                border: `1.5px solid ${step.accent}33`,
                borderRadius: 10,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 800,
                color: step.accent,
                marginBottom: 28,
                letterSpacing: '0.04em',
              }}>
                {step.number}
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 21,
                fontWeight: 700,
                color: '#0F172A',
                marginBottom: 14,
                letterSpacing: '-0.02em',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: 15,
                color: '#475569',
                lineHeight: 1.75,
              }}>
                {step.desc}
              </p>
            </div>
          ))}
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
