const steps = [
  {
    number: '01',
    title: 'Deep lead research',
    desc: 'The agent goes far beyond job titles and company size. It analyses LinkedIn activity, company news, hiring trends, podcasts, and industry reports to surface specific pain points — so every outreach has a real, relevant hook.',
    accent: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    number: '02',
    title: 'Hyper-personalised messaging',
    desc: 'Using what it learned, the agent writes outreach that speaks directly to each prospect\'s role, challenges, and current priorities. No templates. No generic copy. Messages that feel like they were written by your best salesperson — at scale.',
    accent: '#0369A1',
    bg: '#F0F9FF',
  },
  {
    number: '03',
    title: 'Multi-channel sequence orchestration',
    desc: 'The agent runs coordinated sequences across email, LinkedIn, and more. It adapts timing and messaging based on how each prospect engages — following up intelligently without ever feeling like spam.',
    accent: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    number: '04',
    title: 'Qualification & handoff',
    desc: 'When a prospect shows interest, the agent engages them in natural conversational qualification — confirming budget, urgency, and fit. Only genuinely warm leads get passed to your team. You close. The agent does everything else.',
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
              Research.<br />Personalise.<br />Close.
            </h2>
          </div>
          <p style={{
            fontSize: 17,
            color: '#475569',
            maxWidth: 360,
            lineHeight: 1.75,
          }}>
            Your AI SDR runs the full top-of-funnel — from finding the right
            prospects to handing off warm, qualified conversations to your team.
          </p>
        </div>

        {/* 2x2 grid for 4 steps */}
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
