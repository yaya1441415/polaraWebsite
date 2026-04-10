const steps = [
  {
    number: '01',
    title: 'Connect your operation',
    desc: 'DispatchIQ plugs into your broker feeds (ModivCare, Veyo, MTM), imports your driver roster and vehicle types, and syncs your compliance requirements. Setup takes one day — not weeks.',
    accent: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    number: '02',
    title: 'The agent assigns in real time',
    desc: 'When a trip comes in, DispatchIQ instantly evaluates every available driver — checking location, vehicle type, compliance status, and current load. It makes the assignment and notifies the driver automatically. No dispatcher required.',
    accent: '#0369A1',
    bg: '#F0F9FF',
  },
  {
    number: '03',
    title: 'It adapts when things change',
    desc: 'Driver calls out? The agent reassigns. Last-minute trip added? It finds the best available slot. Cancellation? It frees the driver and re-optimises the route. All without anyone picking up the phone.',
    accent: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    number: '04',
    title: 'Your dispatcher just oversees',
    desc: 'Your team gets a live dashboard showing every trip, driver, and status. They can intervene anytime — but most days, they don\'t need to. They spend their time on exceptions, not on data entry.',
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
            <div className="label">How it works</div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 800,
              color: '#0F172A',
            }}>
              Connect.<br />Assign.<br />Adapt.
            </h2>
          </div>
          <p style={{
            fontSize: 17,
            color: '#475569',
            maxWidth: 360,
            lineHeight: 1.75,
          }}>
            DispatchIQ handles the full scheduling operation — from the moment
            a trip arrives to the moment a driver completes it.
          </p>
        </div>

        <div className="steps-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}>
          {steps.map((step) => (
            <div key={step.number} style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: 16,
              padding: '44px 40px',
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
                lineHeight: 1.8,
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
